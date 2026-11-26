-- ============================================================================
-- Dünya Mutfağı (World Kitchen) – veritabanı kurulumu  (1. hafta)
-- Çalıştırma: phpMyAdmin > SQL sekmesi > bu dosyanın tamamını yapıştırıp Git
--             ya da  İçe Aktar (Import) > kurulum.sql
-- Not: Test hesaplarının parolaları README.md'de yazıyor; burada yalnızca
--      password_hash() ile üretilmiş özetleri (hash) var, açık parola yok.
-- ============================================================================

CREATE DATABASE IF NOT EXISTS dunya_mutfagi
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE dunya_mutfagi;

-- Yeniden çalıştırılabilsin diye önce tablolar silinir (önce alt tablo).
DROP TABLE IF EXISTS tarifler;
DROP TABLE IF EXISTS kullanicilar;

-- ---------------------------------------------------------------------------
-- Kullanıcılar (iki test hesabı aşağıda eklenir)
-- ---------------------------------------------------------------------------
CREATE TABLE kullanicilar (
  id            INT UNSIGNED NOT NULL AUTO_INCREMENT,
  kullanici_adi VARCHAR(50)  NOT NULL,
  parola_hash   VARCHAR(255) NOT NULL,          -- password_hash() çıktısı
  olusturma     TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_kullanici_adi (kullanici_adi)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------------
-- Kayıt tablosu: tarifler
-- Alanlar, sitenin JSON verisindeki (data/wb_data.json) tarif alanlarından gelir:
--   n  -> baslik        a  -> mutfak        in -> giris
--   L  -> malzemeler    s  -> yapilis       nt -> notlar
--   tm -> sure          df -> zorluk (1-3)  v  -> vejetaryen (0/1)
--   p  -> foto_url      pa -> foto_yazar
-- kullanici_id: kaydın sahibi (kayıt sahipliği kontrolü için).
-- ---------------------------------------------------------------------------
CREATE TABLE tarifler (
  id          INT UNSIGNED NOT NULL AUTO_INCREMENT,
  kullanici_id INT UNSIGNED NOT NULL,
  baslik      VARCHAR(200) NOT NULL,
  mutfak      VARCHAR(80)  NOT NULL,
  giris       TEXT         NULL,
  malzemeler  TEXT         NOT NULL,              -- her satır bir malzeme
  yapilis     TEXT         NOT NULL,              -- her satır bir adım
  notlar      TEXT         NULL,
  sure        VARCHAR(40)  NULL,
  zorluk      TINYINT UNSIGNED NULL,              -- 1 kolay, 2 orta, 3 zor
  vejetaryen  TINYINT(1)   NOT NULL DEFAULT 0,
  foto_url    VARCHAR(500) NULL,
  foto_yazar  VARCHAR(200) NULL,
  olusturma   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_tarif_sahip (kullanici_id),
  KEY idx_tarif_mutfak (mutfak),
  CONSTRAINT fk_tarif_sahip FOREIGN KEY (kullanici_id)
    REFERENCES kullanicilar (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------------
-- Test hesapları (yalnızca bu projede kullanılır)
--   test1 / Test1234!        test2 / Test5678!
-- ---------------------------------------------------------------------------
INSERT INTO kullanicilar (kullanici_adi, parola_hash) VALUES
  ('test1', '$2y$10$f9BB5lvMFNvdHHZs3VmLc.jyszC2E.oH2auJyfFTDjkR3r6xd2EH2'),
  ('test2', '$2y$10$oPk.aQVIHU8QZhDRWbPJV.gsjrENy.KSz7zVSuDKUfH6S2V3YdRD.');

-- ---------------------------------------------------------------------------
-- Örnek kayıtlar (INSERT): 3 tarif – ilk ikisi test1'in, üçüncüsü test2'nin
-- Kaynak: Wikibooks Cookbook (CC BY-SA 4.0), siteyle aynı veri.
-- ---------------------------------------------------------------------------
INSERT INTO tarifler
  (kullanici_id, baslik, mutfak, giris, malzemeler, yapilis, notlar, sure, zorluk, vejetaryen, foto_url, foto_yazar)
VALUES
  (1, 'Ayran (Turkish Yogurt Drink)', 'Türkiye', 'Ayran is a popular Turkish drink made of a yoghurt and water. The ayran made from sheep yoghurt has a quite thick taste, fatty but also delicious. It is very similar to the Iranian drink, doogh and Armenian drink, taan. Salt is usually added to ayran for flavour. It is served cool, and usually accompanies doner, kebab or pastry. Some forms of fresh ayran include some foam. In Turkey, McDonalds als', '1⅓ cup plain yoghurt
1⅔ cup water
Salt, to taste
Crushed dried mint (optional)', 'Pour yoghurt into a bowl and beat until smooth. Add water and continue beating until thoroughly blended. Alternatively, combine in an electric blender and blend until smooth.
Season to taste with salt and dried mint. Chill thoroughly and serve in tall glasses, with ice.', NULL, '5 minutes', 1, 1, 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Fresh_ayran.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled', 'Mavigogun'),
  (1, 'Baklava with Pistachio Nuts', 'Türkiye', NULL, '§ Syrup
4 cups white granulated sugar
2 cups water
2 cinnamon sticks, each 3 inches long
¾ cups honey
1 tbsp lemon juice
§ Nut mixture
1½ lb pistachio nuts
2 tsp cinnamon powder
§ Pastry
1 lb phyllo dough, at room temperature
1¼ lb unsalted butter, melted', 'If using frozen store-bought phyllo, thaw it inside its plastic package. Don’t open it until you’re ready to use it. If you’re in a hurry you can thaw it in its sealed plastic package in warm water.
Chop the nuts with the powdered cinnamon in a food processor. You want a fine chop, not powder.
Combine the sugar, honey, water, cinnamon sticks, and lemon juice in a large pot. Stir well and boil until the mixture reaches 220°F (100°C) on a candy thermometer (soft ball stage). Remove it from heat, skim the top, and let cool. Remove the cinnamon sticks. The lemon is an important ingredient in the syrup as it keeps it from crystallizing while cooling.
Melt the butter in a saucepan while the syrup is boiling. You can clarify the butter but it’s not necessary.
Preheat your oven to 350°F (180°C).
Open the phyllo and unfold it. Brush the inside of the baking pan with melted butter. While assembling, cover the unused phyllo with a damp towel to prevent it from drying out. Make sure your butter is very liquid when you start. Put 6 sheets of phyllo in the pan, brushing each sheet with melted butter. Set aside another 6 sheets which will be used for the top layers.
After the first 6 sheets, sprinkle a handful of the nut mixture over the last sheet. Add another sheet and repeat the process until you get to the last 6 sheets. Place the last 6 sheets on top of the rest, brushing each with butter. With a very sharp knife, cut the pastry into diamond shapes, all the way through. Sprinkle the top with water.
Put the pastry into the preheated oven and bake for 1 hour or until the tops of the pastry are medium golden brown. When done, remove from the oven and ladle the cool syrup over the hot pastry.
Let it sit for about 5–15 minutes, then drain off the excess syrup by tilting the pan as much as 45 degrees. Let it cool to near room temperature before eating.', 'For the syrup, you can add more honey and reduce the amount of sugar.', NULL, 3, 0, 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Baklava%281%29.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled', 'Sakaman'),
  (2, 'Börek (Turkish Filled Pastries)', 'Türkiye', 'Börek is a general term in Turkish cuisine that applies to a family of pastries with about fifty different members. They have in common the fact that they are all pastry layers of some type enclosing a filling. There are two basic methods; one consists of rolling out very thin sheets of dough, called yufka in Turkish and phyllo in Greek. The other main type of börek, called nemse börek in Turkish,', '§ Fillings
Peynirli börek (white cheese filling)
Kıymalı börek (minced meat filling)
Tavuklu börek (chicken filling)
Ispanaklı börek (spinach filling)
§ Assembly
2 cups prepared filling (see above)
1 box yufka/phyllo pastry sheets
Melted butter or high-quality vegetable oil', 'Remove the phyllo sheets from the container. Unfold carefully so as not to break them. Lay them flat and cover with a clean, damp tea towel to prevent them from drying out—this is important.
Working quickly, cut the phyllo into lengthwise thirds (step 1 in the diagram). Lay one of these out and cover the other two with the damp tea towel.
Brush the strip of phyllo with the melted butter. Place a heaped teaspoonful of filling on one end of the strip (step 2 in the diagram).
Fold the right lower corner upward over the filling to form a triangle (step 3 in the diagram).
Now fold the right upper corner over to the left (step 4 in the diagram).
Continue folding in this manner until you reach the end of the strip.
Trim of any excess dough and seal the edges by rubbing a damp finger over the dough and pressing the edge of the triangle where the strip ends.
Fry in oil at 340°F until golden brown or bake at 350°F for 15 minutes.', NULL, NULL, 3, 0, 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Wrapping_b%C3%B6rek.jpg?utm_source=en.wikibooks.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled', 'Mike Hayes (talk) 18:25, 2 July 2011 (UTC)');

-- ---------------------------------------------------------------------------
-- Sorgular (SELECT)
-- ---------------------------------------------------------------------------
-- Tüm kayıtlar
SELECT id, kullanici_id, baslik, mutfak, sure, zorluk, vejetaryen FROM tarifler;

-- Belirli bir id'ye sahip kayıt (id = 2)
SELECT * FROM tarifler WHERE id = 2;
