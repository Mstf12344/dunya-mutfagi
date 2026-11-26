<?php
/** Silme yalnızca POST ile yapılır; DELETE sorgusu hazır ifadeyle çalışır. */
declare(strict_types=1);
require_once __DIR__ . '/_ortak.php';

$uid = giris_zorunlu();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    mesaj_sayfasi(405, 'İzin verilmeyen istek', 'Silme işlemi yalnızca listedeki "Sil" düğmesiyle (POST) yapılır.');
}
csrf_dogrula();
$id = gecerli_id($_POST['id'] ?? null);
if ($id === null) {
    mesaj_sayfasi(400, 'Geçersiz istek', 'Geçersiz kayıt numarası, hiçbir kayıt silinmedi.');
}
kendi_tarifini_getir($id, $uid);              // yok: 404, başkasının: 403 (hiçbir şey silinmez)
$st = db()->prepare('DELETE FROM tarifler WHERE id = :id AND kullanici_id = :uid');
$st->execute([':id' => $id, ':uid' => $uid]);
header('Location: liste.php?ok=silindi');
exit;
