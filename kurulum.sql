-- ============================================================================
-- Dünya Mutfağı (World Kitchen) – veritabanı kurulumu (5. hafta)
-- Çalıştırma: phpMyAdmin > SQL sekmesi > bu dosyanın tamamını yapıştırıp Git
--             ya da  İçe Aktar (Import) > kurulum.sql
-- Dosya yeniden çalıştırılabilir: önce tabloları siler, sonra yeniden kurar.
-- ============================================================================

CREATE DATABASE IF NOT EXISTS dunya_mutfagi_hafta5
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE dunya_mutfagi_hafta5;

DROP TABLE IF EXISTS tarifler;
DROP TABLE IF EXISTS kullanicilar;

-- ---------------------------------------------------------------------------
-- Kullanıcılar. Parolalar password_hash() ile saklanır, açık parola yoktur.
-- ---------------------------------------------------------------------------
CREATE TABLE kullanicilar (
  id            INT UNSIGNED NOT NULL AUTO_INCREMENT,
  kullanici_adi VARCHAR(50)  NOT NULL,
  parola_hash   VARCHAR(255) NOT NULL,
  olusturma     TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_kullanici_adi (kullanici_adi)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------------
-- Kayıt tablosu: tarifler
-- Alanlar sitenin JSON verisindeki (data/wb_data.json) tarif alanlarından gelir:
--   n -> baslik     a -> mutfak      in -> giris      L -> malzemeler
--   s -> yapilis    nt -> notlar     tm -> sure       df -> zorluk (1 kolay, 2 orta, 3 zor)
--   v -> vejetaryen p -> foto_url    pa -> foto_yazar
-- kullanici_id: kaydın sahibi (kayıt sahipliği kontrolü bu alana bakar).
-- ---------------------------------------------------------------------------
CREATE TABLE tarifler (
  id           INT UNSIGNED NOT NULL AUTO_INCREMENT,
  kullanici_id INT UNSIGNED NOT NULL,
  baslik       VARCHAR(200) NOT NULL,
  mutfak       VARCHAR(80)  NOT NULL,
  giris        TEXT         NULL,
  malzemeler   TEXT         NOT NULL,              -- her satır bir malzeme
  yapilis      TEXT         NOT NULL,              -- her satır bir adım
  notlar       TEXT         NULL,
  sure         VARCHAR(40)  NULL,
  zorluk       TINYINT UNSIGNED NULL,
  vejetaryen   TINYINT(1)   NOT NULL DEFAULT 0,
  foto_url     VARCHAR(500) NULL,
  foto_yazar   VARCHAR(200) NULL,
  olusturma    TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_tarif_sahip (kullanici_id),
  KEY idx_tarif_mutfak (mutfak),
  CONSTRAINT fk_tarif_sahip FOREIGN KEY (kullanici_id)
    REFERENCES kullanicilar (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------------
-- İki test hesabı (yalnızca bu projede kullanılır; parolalar README.md'de)
-- ---------------------------------------------------------------------------
INSERT INTO kullanicilar (kullanici_adi, parola_hash) VALUES
  ('test1', '$2y$10$f9BB5lvMFNvdHHZs3VmLc.jyszC2E.oH2auJyfFTDjkR3r6xd2EH2'),
  ('test2', '$2y$10$oPk.aQVIHU8QZhDRWbPJV.gsjrENy.KSz7zVSuDKUfH6S2V3YdRD.');

-- ---------------------------------------------------------------------------
-- Örnek kayıtlar (INSERT): 5 tarif. Kaynak: Wikibooks Cookbook (CC BY-SA 4.0).
-- test1: Ayran, Baklava, Baked Ziti   |   test2: Onigiri, Chunky Guacamole
-- ---------------------------------------------------------------------------
INSERT INTO tarifler
  (kullanici_id, baslik, mutfak, giris, malzemeler, yapilis, notlar, sure, zorluk, vejetaryen, foto_url, foto_yazar)
VALUES
  (1, 'Ayran (Turkish Yogurt Drink)', 'Türkiye', 'Ayran is a popular Turkish drink made of a yoghurt and water. The ayran made from sheep yoghurt has a quite thick taste, fatty but also delicious. It is very similar to the Iranian drink, doogh and Armenian drink, taan. Salt is usually added to ayran for flavour. It is served cool, and usually accompanies doner, kebab or pastry. Some forms of fresh ayran include some foam.', '1⅓ cup plain yoghurt
1⅔ cup water
Salt, to taste
Crushed dried mint (optional)', 'Pour yoghurt into a bowl and beat until smooth. Add water and continue beating until thoroughly blended. Alternatively, combine in an electric blender and blend until smooth.
Season to taste with salt and dried mint. Chill thoroughly and serve in tall glasses, with ice.', NULL, '5 dakika', 1, 1, 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Fresh_ayran.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled', 'Mavigogun'),
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
  (1, 'Baked Ziti', 'İtalya', 'Baked ziti is a type of casserole in Italian-American cuisine. It consists primarily of pasta and various cheeses in a tomato-based sauce.', '1 lb (450 g) ziti or other pasta
1 ½ cups (360 ml) marinara sauce
1 lb (450 g) grated mozzarella
½ lb (225 g) ricotta
4 oz (110 g) grated Parmesan cheese
1 egg, beaten
3 tbsp basil, chopped fine
2 tbsp oregano, chopped fine
3 tbsp Italian parsley, chopped fine
½ cup (120 ml) bread crumbs
1 pinch crushed red pepper flakes (optional)
Salt
Pepper', 'Preheat oven to 425 °F (225 °C). Coat a large baking dish with olive oil.
Mix ricotta, egg, basil, oregano, parsley and about half of the mozzarella and Parmesan in a large bowl until well incorporated. Season with salt and pepper.
Cook ziti in a large pot of salted water until al dente. Drain well.
In a large bowl or pot, toss ziti with marinara sauce and red pepper flakes until noodles are covered. Stir in ricotta mixture and fold until it begins to melt. Pour mixture into greased dish and spread it out with a spoon.
Sprinkle remaining mozzarella and Parmesan over the top, then sprinkle bread crumbs over cheese.
Bake at 425 °F (225 °C) for 20 minutes or until cheese on top turns golden and begins to bubble.', NULL, '45–60 dakika', 2, 0, 'https://upload.wikimedia.org/wikipedia/commons/9/99/Baked_Ziti.jpg?utm_source=en.wikibooks.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled', 'Lili from NY, United States'),
  (2, 'Onigiri', 'Japonya', 'Onigiri (also called omusubi) is a ball or triangle of hot or cold rice, often with a filling, frequently wrapped in nori making it easier to eat. It is a popular snack food, and is also common as part of a packed lunch. Depending on your location, some convenience store chains have shelves with a large selection of fresh onigiri for sale.', '100 ml (½ cup) uncooked Japanese-style short grain rice
Filling of choice, such as any of the following:
Umeboshi (pickled plums), stones removed
Canned tuna, mixed with mayonnaise and seasoned to taste with chopped leeks, soy sauce, or chilies; sour or salty flavours work well.
Cooked salmon
Cooked egg
Katsuobushi, moistened with a small amount of soy sauce
Nori sheets', 'Cook the rice according to package or rice cooker directions. Let cool just enough to handle with your hands.
While the rice is cooking, prepare your fillings.
Fill a bowl with salt water to rinse your fingers and season the onigiri. You can fill and shape the onigiri using two different methods:
Method 1: Wet your hands in the salt water. Take two large spoonfuls of rice into one hand (carefully; the rice is hot), and gently squeeze and flatten it with the other. Make an indentation in the middle, and put some of the filling into the center. Be a little careful to get the filling only in the center and not all over the ball; that can make the rice less sticky, and stickiness is good. "Fold" the rice over the filling so it becomes covered. Squeeze gently, and mold it into a triangular shape by folding both your hands along the palms while keeping the fingers straight. Squeeze like that, rotating the ball a few times, and you will soon have a very neat triangle—this really is much harder to explain than to do. Once the ball is done, put it down on a clean surface to cool down. Rinse your hands in the salt water and repeat.
Method 2: Use a bowl and some plastic film. Place about ⅔ of the mixture into the centre of the cling wrap that has been draped into the bowl loosely. Then, add approximately 2 teaspoons of filling (this is working off of about 3–4 portions per cup of rice. Then, place the last ⅓ of the rice to the top. Then, mould the onigiri within the cling wrap. This drastically reduces mess and also is slightly more ''kid friendly''.
Once the balls are reasonably cool, you need to protect them from drying out. The easiest way is to wrap them in cling wrap, or put them into an airtight plastic food container. When it is time to eat, take one rice ball, wrap it in a piece of nori, and eat away. If you don''t mind soggy nori, you can wrap the balls in nori beforehand.', 'You must use Japanese-style short grain rice; if the rice isn''t sticky, the onigiri won''t hold together.
A rice cooker is recommended since it will be far more ''hands-off'' and will also free up more time to prepare the fillings.
There is wide latitude on what you can use as a filling. Try experimenting!', '45 dakika', 1, 0, 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Onigiri_by_yomi955.jpg?utm_source=en.wikibooks.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled', 'yomi955'),
  (2, 'Chunky Guacamole', 'Meksika', NULL, '3 ripe avocados
2 tablespoons lime juice
1 cup of salsa fresca', 'Peel and dice avocados.
Sprinkle the avocados with lime juice.
Add salsa fresca, and toss to mix.', 'If you don''t plan on serving immediately, place an avocado pit in the bowl to prevent browning, cover tightly with plastic wrap, and store in refrigerator.', '30 dakika', 1, 1, 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Guacamole_IMGP1256.jpg/960px-Guacamole_IMGP1256.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', 'Nikodem Nijaki');

-- ---------------------------------------------------------------------------
-- Sorgular (SELECT)
-- ---------------------------------------------------------------------------
-- Tüm kayıtlar
SELECT id, baslik, mutfak, sure, zorluk, vejetaryen FROM tarifler;

-- Belirli bir id'ye sahip kayıt (id = 2)
SELECT * FROM tarifler WHERE id = 2;
