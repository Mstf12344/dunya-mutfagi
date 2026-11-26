<?php
/** Ekleme (ve sonraki haftalarda düzenleme) formu. */
declare(strict_types=1);

function alan_hatasi(array $hata, string $alan): void
{
    if (isset($hata[$alan])) {
        echo '<small class="alan-hata">' . h($hata[$alan]) . '</small>';
    }
}

/** @param array<string,mixed> $v mevcut değerler  @param array<string,string> $hata alan hataları */
function tarif_formu(array $v, array $hata, string $dugme, string $gizli = ''): void
{
    echo '<form method="post" novalidate class="form">' . csrf_alan() . $gizli;
    echo '<label>Başlık *<input name="baslik" maxlength="200" value="' . h((string)$v['baslik']) . '">';
    alan_hatasi($hata, 'baslik'); echo '</label>';
    echo '<label>Mutfak *<input name="mutfak" maxlength="80" value="' . h((string)$v['mutfak']) . '" placeholder="Türkiye, İtalya…">';
    alan_hatasi($hata, 'mutfak'); echo '</label>';
    echo '<label>Kısa tanıtım<textarea name="giris" rows="2">' . h((string)$v['giris']) . '</textarea></label>';
    echo '<label>Malzemeler * <em>(her satıra bir malzeme)</em><textarea name="malzemeler" rows="5">' . h((string)$v['malzemeler']) . '</textarea>';
    alan_hatasi($hata, 'malzemeler'); echo '</label>';
    echo '<label>Yapılış * <em>(her satıra bir adım)</em><textarea name="yapilis" rows="6">' . h((string)$v['yapilis']) . '</textarea>';
    alan_hatasi($hata, 'yapilis'); echo '</label>';
    echo '<label>Notlar<textarea name="notlar" rows="2">' . h((string)$v['notlar']) . '</textarea></label>';
    echo '<div class="satir">';
    echo '<label>Süre<input name="sure" maxlength="40" value="' . h((string)$v['sure']) . '" placeholder="30 dakika">';
    alan_hatasi($hata, 'sure'); echo '</label>';
    echo '<label>Zorluk<select name="zorluk"><option value="">Seçiniz</option>';
    foreach (ZORLUK as $no => $ad) {
        $sec = ((string)$v['zorluk'] === (string)$no) ? ' selected' : '';
        echo '<option value="' . $no . '"' . $sec . '>' . h($ad) . '</option>';
    }
    echo '</select>';
    alan_hatasi($hata, 'zorluk'); echo '</label>';
    echo '<label class="onay"><input type="checkbox" name="vejetaryen" value="1"' . (!empty($v['vejetaryen']) ? ' checked' : '') . '> Vejetaryen</label>';
    echo '</div>';
    echo '<button type="submit">' . h($dugme) . '</button> <a class="bag" href="liste.php">Vazgeç</a></form>';
}
