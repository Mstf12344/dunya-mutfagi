<?php
/** Tüm sayfaların ortak parçaları: bağlantı, kaçırma, sayfa kalıbı, form doğrulama. */
declare(strict_types=1);

require_once __DIR__ . '/db.php';

// --- Oturum: çerez JavaScript'ten okunamaz (HttpOnly) ve başka siteden gelen isteklerle gönderilmez (SameSite) ---
session_name('DM_OTURUM');
session_set_cookie_params(['lifetime' => 0, 'path' => '/', 'httponly' => true, 'samesite' => 'Lax']);
session_start();

/** Ekrana yazılan her kullanıcı metni bu işlevden geçer (XSS'e karşı). */
function h(?string $metin): string
{
    return htmlspecialchars((string)$metin, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

const ZORLUK = [1 => 'Kolay', 2 => 'Orta', 3 => 'Zor'];

function sayfa_ust(string $baslik): void
{
    echo '<!DOCTYPE html><html lang="tr" data-theme="dark"><head><meta charset="utf-8">'
        . '<meta name="viewport" content="width=device-width, initial-scale=1">'
        . '<title>' . h($baslik) . ' – Tariflerim · Dünya Mutfağı</title>'
        . '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,800&family=Figtree:wght@400;500;600;700&display=swap">'
        . '<link rel="stylesheet" href="../assets/css/main.css"><link rel="stylesheet" href="stil.css">'
        // Sitenin seçili temasını (localStorage: bm-theme2, bm-skin) bu sayfada da uygula
        . '<script>try{var d=document.documentElement,t=JSON.parse(localStorage.getItem("bm-theme2")||"\"dark\""),k=JSON.parse(localStorage.getItem("bm-skin")||"null");d.setAttribute("data-theme",t);if(k)d.setAttribute("data-skin",k)}catch(e){}</script>'
        . '</head><body>'
        . '<header class="bar"><div class="wrap">'
        . '<a class="logo" href="../" style="text-decoration:none"><i>🍽</i>World Kitchen</a>'
        . '<span class="tf-rozet">Tariflerim</span>'
        . oturum_menusu() . '</div></header>'
        . '<main class="wrap tf"><h1>' . h($baslik) . '</h1>';
}

function sayfa_alt(): void
{
    echo '</main></body></html>';
}

/** Beklenmeyen hatada (ör. MySQL kapalı) ayrıntı göstermeden anlaşılır mesaj verir. */
set_exception_handler(function (Throwable $e): void {
    http_response_code(500);
    error_log($e->getMessage());
    sayfa_ust('Hata');
    echo '<div class="mesaj hata">Beklenmeyen bir hata oluştu. MySQL açık mı ve kurulum.sql içe aktarıldı mı?</div>';
    sayfa_alt();
});

/**
 * Form verisini temizler ve doğrular.
 * @return array{0: array<string, mixed>, 1: array<string, string>} [temiz değerler, hatalar]
 */
function tarif_dogrula(array $girdi): array
{
    $v = [];
    foreach (['baslik', 'mutfak', 'giris', 'malzemeler', 'yapilis', 'notlar', 'sure', 'zorluk'] as $alan) {
        $v[$alan] = trim((string)($girdi[$alan] ?? ''));
    }
    $v['vejetaryen'] = isset($girdi['vejetaryen']) ? 1 : 0;

    $hata = [];
    if ($v['baslik'] === '')                  $hata['baslik'] = 'Başlık zorunludur.';
    elseif (mb_strlen($v['baslik']) > 200)    $hata['baslik'] = 'Başlık en fazla 200 karakter olabilir.';
    if ($v['mutfak'] === '')                  $hata['mutfak'] = 'Mutfak zorunludur.';
    elseif (mb_strlen($v['mutfak']) > 80)     $hata['mutfak'] = 'Mutfak en fazla 80 karakter olabilir.';
    if ($v['malzemeler'] === '')              $hata['malzemeler'] = 'Malzemeler zorunludur.';
    if ($v['yapilis'] === '')                 $hata['yapilis'] = 'Yapılış zorunludur.';
    if (mb_strlen($v['sure']) > 40)           $hata['sure'] = 'Süre en fazla 40 karakter olabilir.';
    if ($v['zorluk'] !== '' && !array_key_exists((int)$v['zorluk'], ZORLUK)) {
        $hata['zorluk'] = 'Zorluk 1, 2 veya 3 olmalıdır.';
    }
    return [$v, $hata];
}

/** Doğrulanmış değerleri PDO parametrelerine çevirir (boş isteğe bağlı alanlar NULL olur). */
function tarif_parametreleri(array $v): array
{
    return [
        ':baslik'     => $v['baslik'],
        ':mutfak'     => $v['mutfak'],
        ':giris'      => $v['giris'] === '' ? null : $v['giris'],
        ':malzemeler' => $v['malzemeler'],
        ':yapilis'    => $v['yapilis'],
        ':notlar'     => $v['notlar'] === '' ? null : $v['notlar'],
        ':sure'       => $v['sure'] === '' ? null : $v['sure'],
        ':zorluk'     => $v['zorluk'] === '' ? null : (int)$v['zorluk'],
        ':vejetaryen' => $v['vejetaryen'],
    ];
}

/** id'yi doğrular: yalnızca pozitif tam sayı kabul edilir, aksi hâlde null. */
function gecerli_id(mixed $ham): ?int
{
    $id = filter_var($ham, FILTER_VALIDATE_INT, ['options' => ['min_range' => 1]]);
    return $id === false ? null : $id;
}

/** Anlaşılır bir hata/bilgi sayfası gösterir ve çıkar. */
function mesaj_sayfasi(int $kod, string $baslik, string $metin): never
{
    http_response_code($kod);
    sayfa_ust($baslik);
    echo '<div class="mesaj hata">' . h($metin) . '</div><p><a class="dugme" href="liste.php">Listeye dön</a></p>';
    sayfa_alt();
    exit;
}

/** Kaydı id ile getirir (yoksa null). */
function tarif_getir(int $id): ?array
{
    $st = db()->prepare('SELECT * FROM tarifler WHERE id = :id');
    $st->execute([':id' => $id]);
    return $st->fetch() ?: null;
}

/* ====================== Hafta 5: giriş, oturum, CSRF, kayıt sahipliği ====================== */

/** Giriş yapmış kullanıcının id'si (yoksa null). Kimlik her zaman oturumdan gelir, istekten asla. */
function oturum_kullanici_id(): ?int
{
    return isset($_SESSION['kullanici_id']) ? (int)$_SESSION['kullanici_id'] : null;
}

/** Giriş zorunlu sayfaların başında çağrılır; giriş yoksa giriş ekranına yönlendirir. */
function giris_zorunlu(): int
{
    $uid = oturum_kullanici_id();
    if ($uid === null) {
        header('Location: giris.php');
        exit;
    }
    return $uid;
}

function csrf_token(): string
{
    if (empty($_SESSION['csrf'])) {
        $_SESSION['csrf'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf'];
}

function csrf_alan(): string
{
    return '<input type="hidden" name="csrf" value="' . h(csrf_token()) . '">';
}

/** POST isteklerinde formun bu oturumdan geldiğini doğrular. */
function csrf_dogrula(): void
{
    $gelen = (string)($_POST['csrf'] ?? '');
    if (!hash_equals(csrf_token(), $gelen)) {
        mesaj_sayfasi(403, 'Doğrulama hatası', 'Oturum doğrulaması başarısız. Sayfayı yenileyip tekrar deneyin.');
    }
}

function oturum_menusu(): string
{
    if (oturum_kullanici_id() === null) {
        return '<nav class="tf-nav"><a href="../">Siteye dön</a><a href="giris.php">Giriş</a><a href="kayit.php">Kayıt ol</a></nav>';
    }
    return '<nav class="tf-nav"><a href="../">Siteye dön</a><a href="liste.php">Tarifler</a><a href="ekle.php">Yeni tarif</a>'
        . '<span class="kul">' . h((string)($_SESSION['kullanici_adi'] ?? '')) . '</span>'
        . '<form class="satirici" method="post" action="cikis.php">' . csrf_alan()
        . '<button type="submit">Çıkış</button></form></nav>';
}

/**
 * Kaydı getirir ve sahibini SUNUCU TARAFINDA kontrol eder.
 * Kayıt yoksa 404, başkasına aitse 403 ile durur; yalnızca kendi kaydında döner.
 */
function kendi_tarifini_getir(int $id, int $uid): array
{
    $kayit = tarif_getir($id);
    if ($kayit === null) {
        mesaj_sayfasi(404, 'Kayıt bulunamadı', 'Bu numarada bir tarif yok.');
    }
    if ((int)$kayit['kullanici_id'] !== $uid) {
        mesaj_sayfasi(403, 'Erişim reddedildi', 'Bu tarif size ait değil, görüntüleyemez ya da değiştiremezsiniz.');
    }
    return $kayit;
}
