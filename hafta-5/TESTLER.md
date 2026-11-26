# TESTLER – 5. Hafta

Testler XAMPP üzerinde (Apache + MySQL), `kurulum.sql` temiz kurulduktan sonra çalıştırıldı (tarayıcıdan HTTP istekleriyle ve phpMyAdmin üzerinden).

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

