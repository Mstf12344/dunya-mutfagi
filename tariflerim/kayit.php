<?php
/** Kayıt ol: yeni hesap açar. Parola password_hash() ile saklanır, açık parola tutulmaz. */
declare(strict_types=1);
require_once __DIR__ . '/_ortak.php';

if (oturum_kullanici_id() !== null) {
    header('Location: liste.php');
    exit;
}

$hata = [];
$ad = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    csrf_dogrula();
    $ad = trim((string)($_POST['kullanici_adi'] ?? ''));
    $parola = (string)($_POST['parola'] ?? '');
    $tekrar = (string)($_POST['parola2'] ?? '');

    if (!preg_match('/^[A-Za-z0-9_.]{3,30}$/', $ad)) {
        $hata['kullanici_adi'] = 'Kullanıcı adı 3–30 karakter olmalı; harf, rakam, _ ve . kullanılabilir.';
    }
    if (strlen($parola) < 8) {
        $hata['parola'] = 'Parola en az 8 karakter olmalı.';
    } elseif ($parola !== $tekrar) {
        $hata['parola2'] = 'Parolalar aynı değil.';
    }

    if (!$hata) {
        $st = db()->prepare('SELECT 1 FROM kullanicilar WHERE kullanici_adi = :ad');
        $st->execute([':ad' => $ad]);
        if ($st->fetch()) {
            $hata['kullanici_adi'] = 'Bu kullanıcı adı alınmış, başka bir ad deneyin.';
        }
    }

    if (!$hata) {
        $st = db()->prepare('INSERT INTO kullanicilar (kullanici_adi, parola_hash) VALUES (:ad, :hash)');
        try {
            $st->execute([':ad' => $ad, ':hash' => password_hash($parola, PASSWORD_DEFAULT)]);
        } catch (PDOException $e) {
            if ($e->getCode() !== '23000') {      // 23000: aynı anda aynı ad alındı (UNIQUE)
                throw $e;
            }
            $hata['kullanici_adi'] = 'Bu kullanıcı adı alınmış, başka bir ad deneyin.';
        }
    }

    if (!$hata) {
        session_regenerate_id(true);
        $_SESSION['kullanici_id'] = (int)db()->lastInsertId();
        $_SESSION['kullanici_adi'] = $ad;
        header('Location: liste.php?ok=kayit');
        exit;
    }
    http_response_code(422);
}

sayfa_ust('Kayıt ol');
echo '<form method="post" class="form" style="max-width:380px" novalidate>' . csrf_alan();
$alanlar = [
    ['kullanici_adi', 'Kullanıcı adı', 'text', 'username'],
    ['parola', 'Parola (en az 8 karakter)', 'password', 'new-password'],
    ['parola2', 'Parola (tekrar)', 'password', 'new-password'],
];
foreach ($alanlar as [$n, $etiket, $tip, $ac]) {
    $deger = $n === 'kullanici_adi' ? ' value="' . h($ad) . '"' : '';
    echo '<label>' . h($etiket) . '<input type="' . $tip . '" name="' . $n . '" autocomplete="' . $ac . '"' . $deger . '>'
       . (isset($hata[$n]) ? '<span class="alan-hata">' . h($hata[$n]) . '</span>' : '') . '</label>';
}
echo '<button type="submit">Hesap oluştur</button></form>'
   . '<p>Zaten hesabınız var mı? <a href="giris.php">Giriş yapın</a></p>';
sayfa_alt();
