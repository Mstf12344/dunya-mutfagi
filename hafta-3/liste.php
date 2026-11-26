<?php
/** Tarifleri MySQL'den okuyup listeler. */
declare(strict_types=1);
require_once __DIR__ . '/_ortak.php';

$bilgiler = ['eklendi' => 'Tarif eklendi.', 'guncellendi' => 'Tarif güncellendi.', 'silindi' => 'Tarif silindi.'];
$ok = (string)($_GET['ok'] ?? '');

$tarifler = db()->query(
    'SELECT id, baslik, mutfak, sure, zorluk, vejetaryen, olusturma FROM tarifler ORDER BY id DESC'
)->fetchAll();

sayfa_ust('Tarifler');
if (isset($bilgiler[$ok])) {
    echo '<div class="mesaj ok">' . h($bilgiler[$ok]) . '</div>';
}
echo '<p><a class="dugme" href="ekle.php">+ Yeni tarif</a> <span class="sayi">' . count($tarifler) . ' kayıt</span></p>';

if (!$tarifler) {
    echo '<div class="mesaj">Henüz tarif yok.</div>';
} else {
    echo '<table><thead><tr><th>#</th><th>Başlık</th><th>Mutfak</th><th>Süre</th><th>Zorluk</th><th>Vejetaryen</th><th>Eklenme</th><th>İşlem</th></tr></thead><tbody>';
    foreach ($tarifler as $t) {
        echo '<tr><td>' . (int)$t['id'] . '</td>'
            . '<td>' . h($t['baslik']) . '</td>'
            . '<td>' . h($t['mutfak']) . '</td>'
            . '<td>' . h($t['sure']) . '</td>'
            . '<td>' . h(ZORLUK[(int)$t['zorluk']] ?? '') . '</td>'
            . '<td>' . ($t['vejetaryen'] ? 'Evet' : 'Hayır') . '</td>'
            . '<td>' . h($t['olusturma']) . '</td>'
            . '<td><a href="duzenle.php?id=' . (int)$t['id'] . '">Düzenle</a> '
            . '<form class="satirici" method="post" action="sil.php" onsubmit="return confirm(\'Bu tarif silinsin mi?\')">'
            . '<input type="hidden" name="id" value="' . (int)$t['id'] . '">'
            . '<button class="tehlike" type="submit">Sil</button></form></td></tr>';
    }
    echo '</tbody></table>';
}
sayfa_alt();
