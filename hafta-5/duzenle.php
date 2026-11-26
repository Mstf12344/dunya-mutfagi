<?php
/** Kaydı id ile MySQL'den getirir, formda gösterir; gönderilince doğrular ve UPDATE eder. */
declare(strict_types=1);
require_once __DIR__ . '/_ortak.php';
require_once __DIR__ . '/_form.php';

$uid = giris_zorunlu();

$id = gecerli_id($_GET['id'] ?? null);
if ($id === null) {
    mesaj_sayfasi(400, 'Geçersiz istek', 'Geçersiz kayıt numarası. Lütfen listeden bir tarif seçin.');
}
$kayit = kendi_tarifini_getir($id, $uid);   // yok: 404, başkasının: 403

$v = $kayit;                       // formda mevcut bilgiler gösterilir
$hata = [];
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    csrf_dogrula();
    [$v, $hata] = tarif_dogrula($_POST);
    if (!$hata) {
        $p = tarif_parametreleri($v) + [':id' => $id];
        $st = db()->prepare(
            'UPDATE tarifler SET baslik = :baslik, mutfak = :mutfak, giris = :giris, malzemeler = :malzemeler,
                    yapilis = :yapilis, notlar = :notlar, sure = :sure, zorluk = :zorluk, vejetaryen = :vejetaryen
             WHERE id = :id AND kullanici_id = :uid'      // sahiplik koşulu SQL'de de var
        );
        $st->execute($p + [':uid' => $uid]);
        header('Location: liste.php?ok=guncellendi');
        exit;
    }
    http_response_code(422);
}

sayfa_ust('Tarifi düzenle');
if ($hata) {
    echo '<div class="mesaj hata">Formda hatalar var, lütfen düzeltin. Kayıt değiştirilmedi.</div>';
}
tarif_formu($v, $hata, 'Güncelle');
sayfa_alt();
