<?php
/** Yeni tarif ekleme formu: PHP'de doğrulanır, PDO hazır ifadesiyle MySQL'e yazılır. */
declare(strict_types=1);
require_once __DIR__ . '/_ortak.php';
require_once __DIR__ . '/_form.php';

$uid = giris_zorunlu();

$v = ['baslik' => '', 'mutfak' => '', 'giris' => '', 'malzemeler' => '', 'yapilis' => '',
      'notlar' => '', 'sure' => '', 'zorluk' => '', 'vejetaryen' => 0];
$hata = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    csrf_dogrula();
    [$v, $hata] = tarif_dogrula($_POST);
    if (!$hata) {
        $st = db()->prepare(
            'INSERT INTO tarifler (kullanici_id, baslik, mutfak, giris, malzemeler, yapilis, notlar, sure, zorluk, vejetaryen)
             VALUES (:kullanici_id, :baslik, :mutfak, :giris, :malzemeler, :yapilis, :notlar, :sure, :zorluk, :vejetaryen)'
        );
        $st->execute(tarif_parametreleri($v) + [':kullanici_id' => $uid]);   // sahip, oturumdan alınır
        header('Location: liste.php?ok=eklendi');      // yenileyince form tekrar gönderilmesin
        exit;
    }
    http_response_code(422);
}

sayfa_ust('Yeni tarif');
if ($hata) {
    echo '<div class="mesaj hata">Formda hatalar var, lütfen düzeltin. Kayıt oluşturulmadı.</div>';
}
tarif_formu($v, $hata, 'Kaydet');
sayfa_alt();
