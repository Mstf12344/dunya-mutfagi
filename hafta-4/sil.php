<?php
/** Silme yalnızca POST ile yapılır; DELETE sorgusu hazır ifadeyle çalışır. */
declare(strict_types=1);
require_once __DIR__ . '/_ortak.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    mesaj_sayfasi(405, 'İzin verilmeyen istek', 'Silme işlemi yalnızca listedeki "Sil" düğmesiyle (POST) yapılır.');
}
$id = gecerli_id($_POST['id'] ?? null);
if ($id === null) {
    mesaj_sayfasi(400, 'Geçersiz istek', 'Geçersiz kayıt numarası, hiçbir kayıt silinmedi.');
}
$st = db()->prepare('DELETE FROM tarifler WHERE id = :id');
$st->execute([':id' => $id]);
if ($st->rowCount() === 0) {
    mesaj_sayfasi(404, 'Kayıt bulunamadı', 'Bu numarada bir tarif yok, hiçbir kayıt silinmedi.');
}
header('Location: liste.php?ok=silindi');
exit;
