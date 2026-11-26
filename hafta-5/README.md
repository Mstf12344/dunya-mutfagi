# Dünya Mutfağı – 5. Hafta (Giriş, oturum ve kayıt sahipliği)

**Mustafa Çakmak – 254309252** · İnternet Programcılığı I, vize sonrası proje görevi

Bu klasör, projenin **5. hafta sürümüdür** ve tek başına çalışır (kendi veritabanı ve `kurulum.sql` dosyası vardır).

**Bu haftada:** `kullanicilar` tablosu, `password_hash()`/`password_verify()`, oturumla giriş-çıkış, kayıt sahipliği (sunucu tarafında), CSRF jetonu.

## XAMPP ile kurulum
1. Bu repoyu indirin (ya da ZIP'i açın) ve `hafta-5` klasörünü `C:\xampp\htdocs\dunya-mutfagi\hafta-5` olarak kopyalayın.
2. XAMPP Control Panel'den **Apache** ve **MySQL**'i başlatın.
3. `http://localhost/phpmyadmin` adresini açın, **SQL** sekmesine `kurulum.sql` içeriğini yapıştırıp **Git**'e basın (ya da **İçe Aktar** ile dosyayı seçin). `dunya_mutfagi_hafta5` veritabanı oluşur; dosya yeniden çalıştırılabilir (tabloları sıfırlar).
4. `http://localhost/dunya-mutfagi/hafta-5/giris.php` adresini açın.

## Veritabanı bağlantı ayarları
`config.php` (XAMPP varsayılanları): sunucu `127.0.0.1`, veritabanı `dunya_mutfagi_hafta5`, kullanıcı `root`, parola boş. Farklıysa `DB_HOST`, `DB_NAME`, `DB_USER`, `DB_PASS` ortam değişkenleriyle değiştirilir. Bağlantı yalnızca `db.php` içindeki `db()` işleviyle (PDO; hazır ifadeler, hata istisnaları) kurulur.

**Test hesapları** (yalnızca bu projede kullanılır, gerçek bir hesap değildir):

| Kullanıcı adı | Parola | Kayıtları |
|---|---|---|
| `test1` | `Test1234!` | Ayran, Baklava, Baked Ziti |
| `test2` | `Test5678!` | Onigiri, Chunky Guacamole |

Veritabanında parolalar açık yazılmaz; `password_hash()` ile üretilmiş özetler vardır.

Giriş sayfası: `http://localhost/dunya-mutfagi/hafta-5/giris.php`

Test adımları ve sonuçları: [TESTLER.md](TESTLER.md)
