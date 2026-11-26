# TESTLER

Her haftanın kendi klasöründe ayrıca `TESTLER.md` vardır. Burada beş haftanın testleri birleşik verilmiştir. Son sürüm: `hafta-5`.

Testler XAMPP üzerinde (Apache + MySQL), `kurulum.sql` temiz kurulduktan sonra çalıştırıldı (tarayıcıdan HTTP istekleriyle ve phpMyAdmin üzerinden).

## 1. Hafta – Veritabanı ve tablo

| # | Adım | Beklenen | Sonuç |
|---|---|---|---|
| 1.1 | XAMPP'te Apache ve MySQL başlatılır, `http://localhost/phpmyadmin` açılır. | phpMyAdmin açılır. | Geçti (26.11.2026): phpMyAdmin açıldı. |
| 1.2 | `kurulum.sql` SQL sekmesinden çalıştırılır. | Hata yok; `dunya_mutfagi_hafta1` veritabanında `tarifler` tablosu oluşur. | Geçti (26.11.2026): hata yok, veritabanı ve tablo oluştu. |
| 1.3 | `tarifler` tablosu açılır. | 5 kayıt görünür; `id` birincil anahtar ve otomatik artandır. | Geçti (26.11.2026): 5 kayıt, id 1–5. |
| 1.4 | `SELECT * FROM tarifler;` çalıştırılır. | 5 kayıt listelenir. | Geçti (26.11.2026): 5 kayıt listelendi. |
| 1.5 | `SELECT * FROM tarifler WHERE id = 2;` çalıştırılır. | Yalnızca "Baklava with Pistachio Nuts" gelir. | Geçti (26.11.2026): id=2 Baklava kaydını getirdi. |
| 1.6 | `/hafta-1/baglanti-test.php?id=2` açılır. | PDO bağlantısı tamam; id=2 kaydı yazar. | Geçti (26.11.2026): "Baklava with Pistachio Nuts" göründü. |
| 1.7 | `/hafta-1/baglanti-test.php?id=999` açılır. | "kayıt yok" yazar. | Geçti (26.11.2026): "kayıt yok" yazdı. |

## 2. Hafta – PDO ile listeleme ve kayıt ekleme

| # | Adım | Beklenen | Sonuç |
|---|---|---|---|
| 2.1 | `liste.php` açılır. | Kayıtlar MySQL'den okunup listelenir. | Geçti (26.11.2026): HTTP 200, 5 örnek kayıt (Baklava dahil) listelendi. |
| 2.2 | `ekle.php` formu zorunlu alanlar dolu gönderilir (başlığa `<b>x</b>` yazılır). | Kayıt eklenir, listeye yönlenir (`?ok=eklendi`), kayıt listede görünür; HTML kaçırılır. | Geçti (26.11.2026): Kayıt listede göründü; `&lt;b&gt;x&lt;/b&gt;` olarak gösterildi, etiket çalışmadı. |
| 2.3 | Başlık boş bırakılıp form gönderilir. | Hata mesajı, HTTP 422, kayıt oluşmaz. | Geçti (26.11.2026): 422, hata mesajı gösterildi, liste değişmedi. |
| 2.4 | Zorunlu alanların hepsi boş gönderilir. | Her alan için hata mesajı, kayıt oluşmaz. | Geçti (26.11.2026): Hata mesajları göründü, kayıt oluşmadı, girilen değerler korundu. |
| 2.5 | Sayfa yeniden açılır. | Eklenen kayıt hâlâ listededir. | Geçti (26.11.2026): Kayıt MySQL'de kalıcıydı. |

## 3. Hafta – Güncelleme ve silme

| # | Adım | Beklenen | Sonuç |
|---|---|---|---|
| 3.1 | Listeden "Düzenle" açılır. | Mevcut bilgiler formda dolu gelir (id ile MySQL'den). | Geçti (26.11.2026): Form kayıt bilgisiyle dolu geldi. |
| 3.2 | Başlık değiştirilip kaydedilir, liste yeniden açılır. | UPDATE çalışır, yeni başlık listede görünür. | Geçti (26.11.2026): Yeni başlık listede göründü, eski başlık kalktı. |
| 3.3 | Düzenlerken başlık boşaltılıp gönderilir. | Hata mesajı (422), kayıt değişmez. | Geçti (26.11.2026): 422; kayıt değişmedi. |
| 3.4 | `sil.php?id=…` adresi tarayıcıdan (GET) açılır. | Silme yapılmaz, 405 döner. | Geçti (26.11.2026): 405 döndü, kayıt silinmedi. |
| 3.5 | Listede "Sil" düğmesiyle (POST) kayıt silinir. | DELETE çalışır, kayıt listeden kalkar. | Geçti (26.11.2026): Kayıt listeden kalktı (`?ok=silindi`). |
| 3.6 | `duzenle.php?id=abc` açılır. | Anlaşılır mesaj, 400. | Geçti (26.11.2026): 400, "Geçersiz kayıt numarası" mesajı. |
| 3.7 | `duzenle.php?id=99999` açılır, `sil.php`'ye var olmayan id POST edilir. | "Kayıt bulunamadı" mesajı, 404. | Geçti (26.11.2026): İkisi de 404 ve anlaşılır mesaj. |

## 4. Hafta – Arama, filtre ve sıralama

| # | Adım | Beklenen | Sonuç |
|---|---|---|---|
| 4.1 | Arama kutusuna `baklava` yazılır. | Yalnızca başlığında baklava geçen kayıt gelir. | Geçti (26.11.2026): Sonuç: Baklava with Pistachio Nuts (1 kayıt). |
| 4.2 | Mutfak filtresinden `Japonya` seçilir. | Yalnızca o mutfağın kayıtları gelir. | Geçti (26.11.2026): Sonuç: Onigiri. |
| 4.3 | Arama (`a`) ve mutfak (`Türkiye`) birlikte kullanılır. | Sonuçlar iki koşulu birlikte sağlar. | Geçti (26.11.2026): Baklava ve Ayran geldi; `ayran` + `Japonya` birlikte 0 kayıt verdi. |
| 4.4 | Sıralama "id artan" ve "id azalan" denenir. | Liste iki yönde sıralanır. | Geçti (26.11.2026): artan 1→5, azalan 5→1. |
| 4.5 | Sonucu olmayan arama (`zzzyyyxxx`). | "bulunamadı" mesajı. | Geçti (26.11.2026): Mesaj gösterildi. |
| 4.6 | Arama ve sıralama seçilip sayfa yeniden çizilir. | Seçili değerler formda korunur. | Geçti (26.11.2026): Arama metni ve seçili sıralama korundu. |
| 4.7 | `?sirala=id;DROP TABLE tarifler` verilir. | Beyaz listede olmadığı için varsayılan sıralama; hata/SQL çalışmaz. | Geçti (26.11.2026): HTTP 200, varsayılan sıralama; tablo duruyor. |
| 4.8 | Aramaya `'; DROP TABLE tarifler;--` yazılır. | Düz metin olarak aranır, tablo silinmez. | Geçti (26.11.2026): HTTP 200, liste sonra normal açıldı. |

## 5. Hafta – Giriş, oturum ve kayıt sahipliği

| # | Adım | Beklenen | Sonuç |
|---|---|---|---|
| 5.1 | Giriş yapmadan `liste.php`, `ekle.php`, `duzenle.php?id=1` açılır. | `giris.php`'ye yönlendirilir. | Geçti (26.11.2026): Üçü de giriş sayfasına yönlendi. |
| 5.2 | Yanlış parolayla giriş denenir. | Hata mesajı (401), oturum açılmaz. | Geçti (26.11.2026): 401 ve hata mesajı. |
| 5.3 | `test1` / doğru parola ile giriş yapılır. | Liste yalnızca test1'in 3 kaydını gösterir. | Geçti (26.11.2026): Baked Ziti, Baklava, Ayran göründü. |
| 5.4 | test1 yeni kayıt ekler. | `kullanici_id` oturumdan alınır; kayıt test1'in listesinde görünür. | Geçti (26.11.2026): Kayıt eklendi (`?ok=eklendi`) ve listede göründü. |
| 5.5 | test1 kendi kaydını düzenler. | Güncelleme çalışır. | Geçti (26.11.2026): Başlık güncellendi. |
| 5.6 | test1 ile arama yapılır (`q=o`). | Yalnızca test1'in kayıtları gelir. | Geçti (26.11.2026): test2'nin Onigiri/Guacamole kaydı gelmedi. |
| 5.7 | test1, test2'ye ait kaydın düzenleme adresini (`duzenle.php?id=4`) açar. | 403, kayıt formda görünmez. | Geçti (26.11.2026): 403; Onigiri bilgisi görünmedi. |
| 5.8 | test1, test2'nin kaydına POST ile güncelleme ve silme gönderir. | 403, kayıt değişmez. | Geçti (26.11.2026): İkisi de 403; Onigiri değişmedi (test2 girişinde başlık aynıydı). |
| 5.9 | Çıkış yapılıp `test2` ile giriş yapılır. | Liste yalnızca test2'nin 2 kaydını gösterir. | Geçti (26.11.2026): Guacamole ve Onigiri göründü. |
| 5.10 | test2, test1'in kaydına (`id=1`) GET ile erişir, POST ile güncelleme ve silme dener. | Hepsi 403, kayıt değişmez. | Geçti (26.11.2026): Üçü de 403; test1 girişinde Ayran sağlamdı. |
| 5.11 | CSRF jetonu olmadan POST ile silme gönderilir. | 403, işlem yapılmaz. | Geçti (26.11.2026): 403. |
| 5.12 | Çıkış yapılıp `liste.php` açılır. | `giris.php`'ye yönlendirilir. | Geçti (26.11.2026): Giriş sayfasına yönlendi. |
| 5.13 | `kurulum.sql` temiz veritabanına yeniden kurulup temel işlemler tekrarlanır. | Hata yok; giriş, ekleme, düzenleme, silme çalışır. | Geçti (26.11.2026): Hata yok; tüm işlemler çalıştı. |

## Son sürüm – Sitede "Tariflerim" bölümü

Hafta 5'in kodu ana siteye eklendi (`/tariflerim/`, veritabanı `dunya_mutfagi`). Aynı testler site üzerinde yeniden çalıştırıldı.

| # | Adım | Beklenen | Sonuç |
|---|---|---|---|
| S.1 | Giriş yapmadan `tariflerim/liste.php` açılır. | `giris.php`'ye yönlendirilir. | Geçti (26.11.2026) |
| S.2 | `test1` ile giriş yapılır. | Yalnızca test1'in 3 kaydı listelenir. | Geçti (26.11.2026): Baked Ziti, Baklava, Ayran |
| S.3 | Yeni tarif eklenir. | Kayıt eklenir ve listede görünür. | Geçti (26.11.2026) |
| S.4 | Eklenen tarif düzenlenir. | Yeni başlık listede görünür. | Geçti (26.11.2026) |
| S.5 | Arama (`baklava`) ve mutfak filtresi (`Türkiye`) kullanılır. | Doğru kayıtlar gelir. | Geçti (26.11.2026) |
| S.6 | test1, test2'nin kaydını (`id=4`) açmayı ve silmeyi dener. | 403, kayıt değişmez. | Geçti (26.11.2026): ikisi de 403 |
| S.7 | Kendi eklediği kayıt silinir. | Kayıt listeden kalkar. | Geçti (26.11.2026) |
| S.8 | `test2` ile giriş yapılır; test1'in kaydı (`id=1`) açılır. | Yalnızca test2'nin 2 kaydı görünür; `id=1` için 403. | Geçti (26.11.2026) |
| S.9 | Çıkış yapılıp liste açılır. | Giriş ekranına yönlendirilir. | Geçti (26.11.2026) |
