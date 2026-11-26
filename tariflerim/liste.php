<?php
/** Yalnızca giriş yapan kullanıcının tariflerini listeler; arama, filtre ve sıralama da yalnızca onun kayıtları üzerinde çalışır. */
declare(strict_types=1);
require_once __DIR__ . '/_ortak.php';

$uid = giris_zorunlu();                  // giriş yoksa giris.php'ye yönlenir

/** Kodda önceden belirlenmiş sıralama seçenekleri (kullanıcı değeri SQL'e hiç girmez). */
const SIRALAMA = [
    'id_azalan'    => ['id (büyükten küçüğe)', 'id DESC'],
    'id_artan'     => ['id (küçükten büyüğe)', 'id ASC'],
    'tarih_azalan' => ['Tarih (yeni → eski)', 'olusturma DESC, id DESC'],
    'tarih_artan'  => ['Tarih (eski → yeni)', 'olusturma ASC, id ASC'],
    'baslik_artan' => ['Başlık (A → Z)', 'baslik ASC'],
];

$bilgiler = ['eklendi' => 'Tarif eklendi.', 'guncellendi' => 'Tarif güncellendi.', 'silindi' => 'Tarif silindi.'];
$ok = (string)($_GET['ok'] ?? '');

// --- Form değerleri (sayfada seçili kalmaları için) ---
$q      = mb_substr(trim((string)($_GET['q'] ?? '')), 0, 100);
$mutfak = mb_substr(trim((string)($_GET['mutfak'] ?? '')), 0, 80);
$sirala = (string)($_GET['sirala'] ?? 'id_azalan');
if (!isset(SIRALAMA[$sirala])) {
    $sirala = 'id_azalan';                      // geçersiz değer: varsayılan sıralama
}

// --- Sorgu: arama ve filtre birlikte çalışır (AND), değerler hazır ifadeyle gider ---
$kosul = ['kullanici_id = :uid'];        // sahiplik koşulu her zaman vardır
$param = [':uid' => $uid];
if ($q !== '') {
    $kosul[] = 'baslik LIKE :q';
    $param[':q'] = '%' . addcslashes($q, '%_\\') . '%';     // % ve _ kullanıcı için düz karakter
}
if ($mutfak !== '') {
    $kosul[] = 'mutfak = :mutfak';
    $param[':mutfak'] = $mutfak;
}
$sql = 'SELECT id, baslik, mutfak, sure, zorluk, vejetaryen, olusturma FROM tarifler'
     . ($kosul ? ' WHERE ' . implode(' AND ', $kosul) : '')
     . ' ORDER BY ' . SIRALAMA[$sirala][1];                   // yalnızca whitelist'ten gelir
$st = db()->prepare($sql);
$st->execute($param);
$tarifler = $st->fetchAll();

$ms = db()->prepare('SELECT DISTINCT mutfak FROM tarifler WHERE kullanici_id = :uid ORDER BY mutfak');
$ms->execute([':uid' => $uid]);
$mutfaklar = $ms->fetchAll(PDO::FETCH_COLUMN);
$filtreli = ($q !== '' || $mutfak !== '');

sayfa_ust('Tarifler');
if (isset($bilgiler[$ok])) {
    echo '<div class="mesaj ok">' . h($bilgiler[$ok]) . '</div>';
}

echo '<form class="filtre" method="get" action="liste.php">'
   . '<label>Başlıkta ara<input type="search" name="q" maxlength="100" value="' . h($q) . '" placeholder="örn. baklava"></label>'
   . '<label>Mutfak<select name="mutfak"><option value="">Tümü</option>';
foreach ($mutfaklar as $m) {
    echo '<option value="' . h($m) . '"' . ($m === $mutfak ? ' selected' : '') . '>' . h($m) . '</option>';
}
echo '</select></label><label>Sırala<select name="sirala">';
foreach (SIRALAMA as $anahtar => [$ad]) {
    echo '<option value="' . h($anahtar) . '"' . ($anahtar === $sirala ? ' selected' : '') . '>' . h($ad) . '</option>';
}
echo '</select></label><button type="submit">Uygula</button>'
   . ($filtreli || $sirala !== 'id_azalan' ? ' <a class="bag" href="liste.php">Temizle</a>' : '')
   . '</form>';

echo '<p><a class="dugme" href="ekle.php">+ Yeni tarif</a> <span class="sayi">' . count($tarifler) . ' kayıt</span></p>';

if (!$tarifler) {
    echo '<div class="mesaj">' . ($filtreli ? 'Aramanıza uygun tarif bulunamadı.' : 'Henüz tarifiniz yok.') . '</div>';
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
            . csrf_alan() . '<input type="hidden" name="id" value="' . (int)$t['id'] . '">'
            . '<button class="tehlike" type="submit">Sil</button></form></td></tr>';
    }
    echo '</tbody></table>';
}
sayfa_alt();
