# TESTLER – 1. Hafta

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

