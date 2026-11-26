<?php
/** Tüm sayfaların ortak parçaları: bağlantı, kaçırma, sayfa kalıbı, form doğrulama. */
declare(strict_types=1);

require_once __DIR__ . '/db.php';

const HAFTA = 2;

/** Ekrana yazılan her kullanıcı metni bu işlevden geçer (XSS'e karşı). */
function h(?string $metin): string
{
    return htmlspecialchars((string)$metin, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

const ZORLUK = [1 => 'Kolay', 2 => 'Orta', 3 => 'Zor'];

function sayfa_ust(string $baslik): void
{
    echo '<!DOCTYPE html><html lang="tr"><head><meta charset="utf-8">'
        . '<meta name="viewport" content="width=device-width, initial-scale=1">'
        . '<title>' . h($baslik) . ' – Dünya Mutfağı (Hafta ' . HAFTA . ')</title>'
        . '<link rel="stylesheet" href="stil.css"></head><body>'
        . '<header><div class="kap"><strong>Dünya Mutfağı</strong> <span class="rozet">Hafta ' . HAFTA . '</span>'
        . '<nav><a href="liste.php">Tarifler</a><a href="ekle.php">Yeni tarif</a></nav></div></header>'
        . '<main class="kap"><h1>' . h($baslik) . '</h1>';
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
