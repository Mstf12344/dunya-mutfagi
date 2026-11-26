<?php
/** Giriş: parola password_verify() ile doğrulanır; başarılı girişte oturum kimliği yenilenir. */
declare(strict_types=1);
require_once __DIR__ . '/_ortak.php';

if (oturum_kullanici_id() !== null) {
    header('Location: liste.php');
    exit;
}

$hata = '';
$ad = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    csrf_dogrula();
    $ad = trim((string)($_POST['kullanici_adi'] ?? ''));
    $parola = (string)($_POST['parola'] ?? '');

    $st = db()->prepare('SELECT id, kullanici_adi, parola_hash FROM kullanicilar WHERE kullanici_adi = :ad');
    $st->execute([':ad' => $ad]);
    $k = $st->fetch();

    // Kullanıcı yoksa da bir özetle karşılaştırılır: yanıt süresi "kullanıcı var mı" bilgisini sızdırmaz.
    $ozet = $k['parola_hash'] ?? password_hash('bos-parola', PASSWORD_DEFAULT);
    if ($ad !== '' && password_verify($parola, $ozet) && $k) {
        session_regenerate_id(true);                         // oturum sabitleme saldırısına karşı
        $_SESSION['kullanici_id'] = (int)$k['id'];
        $_SESSION['kullanici_adi'] = $k['kullanici_adi'];
        header('Location: liste.php');
        exit;
    }
    http_response_code(401);
    $hata = 'Kullanıcı adı veya parola hatalı.';
}

sayfa_ust('Giriş');
if (($_GET['ok'] ?? '') === 'cikis') {
    echo '<div class="mesaj ok">Çıkış yaptınız.</div>';
}
if ($hata !== '') {
    echo '<div class="mesaj hata">' . h($hata) . '</div>';
}
echo '<form method="post" class="form" style="max-width:380px">' . csrf_alan()
   . '<label>Kullanıcı adı<input name="kullanici_adi" autocomplete="username" value="' . h($ad) . '"></label>'
   . '<label>Parola<input type="password" name="parola" autocomplete="current-password"></label>'
   . '<button type="submit">Giriş yap</button></form>'
   . '<p>Hesabınız yok mu? <a href="kayit.php">Kayıt olun</a></p>';
sayfa_alt();
