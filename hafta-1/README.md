# Dünya Mutfağı – 1. Hafta (Veritabanı ve tablo)

**Mustafa Çakmak – 254309252** · İnternet Programcılığı I, vize sonrası proje görevi

Bu klasör, projenin **1. hafta sürümüdür** ve tek başına çalışır (kendi veritabanı ve `kurulum.sql` dosyası vardır).

**Bu haftada:** Veritabanı ve `tarifler` tablosu, 5 örnek kayıt, `kurulum.sql`; PDO bağlantı denemesi.

## XAMPP ile kurulum
1. Bu repoyu indirin (ya da ZIP'i açın) ve `hafta-1` klasörünü `C:\xampp\htdocs\dunya-mutfagi\hafta-1` olarak kopyalayın.
2. XAMPP Control Panel'den **Apache** ve **MySQL**'i başlatın.
3. `http://localhost/phpmyadmin` adresini açın, **SQL** sekmesine `kurulum.sql` içeriğini yapıştırıp **Git**'e basın (ya da **İçe Aktar** ile dosyayı seçin). `dunya_mutfagi_hafta1` veritabanı oluşur; dosya yeniden çalıştırılabilir (tabloları sıfırlar).
4. `http://localhost/dunya-mutfagi/hafta-1/baglanti-test.php?id=2` adresini açın.

## Veritabanı bağlantı ayarları
`config.php` (XAMPP varsayılanları): sunucu `127.0.0.1`, veritabanı `dunya_mutfagi_hafta1`, kullanıcı `root`, parola boş. Farklıysa `DB_HOST`, `DB_NAME`, `DB_USER`, `DB_PASS` ortam değişkenleriyle değiştirilir. Bağlantı yalnızca `db.php` içindeki `db()` işleviyle (PDO; hazır ifadeler, hata istisnaları) kurulur.

Test adımları ve sonuçları: [TESTLER.md](TESTLER.md)
