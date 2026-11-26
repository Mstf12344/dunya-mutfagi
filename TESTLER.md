# TESTLER

Test hesapları: `test1` / `Test1234!` ve `test2` / `Test5678!` (yalnızca bu projede kullanılır).
Her testin **Sonuç** sütunu, testi çalıştırdıktan sonra doldurulur.

## 1. Hafta – Veritabanı

| # | Adım | Beklenen | Sonuç |
|---|---|---|---|
| 1.1 | XAMPP'te Apache ve MySQL başlatılır, `http://localhost/phpmyadmin` açılır. | phpMyAdmin açılır. | Geçti (26.11.2026) |
| 1.2 | `kurulum.sql` SQL sekmesinden çalıştırılır. | Hata yok; `dunya_mutfagi` veritabanında `kullanicilar` ve `tarifler` tabloları oluşur. | Geçti (26.11.2026): hata yok, `dunya_mutfagi` oluştu. |
| 1.3 | `tarifler` tablosu açılır. | 3 kayıt görünür (Ayran, Baklava, Börek); `id` 1, 2, 3 otomatik artar. | Geçti (26.11.2026): 3 kayıt, id 1-2-3 (PDO sayfasıyla görüldü). |
| 1.4 | `SELECT * FROM tarifler;` çalıştırılır. | 3 kayıt listelenir. | Geçti (26.11.2026): PDO ile 3 kayıt listelendi. |
| 1.5 | `SELECT * FROM tarifler WHERE id = 2;` çalıştırılır. | Yalnızca "Baklava with Pistachio Nuts" kaydı gelir. | Geçti (26.11.2026): `id=2` Baklava kaydını getirdi. |
| 1.6 | `kullanicilar` tablosu açılır. | `test1` ve `test2` görünür; `parola_hash` sütunu `$2y$…` ile başlar, açık parola yoktur. | |
| 1.7 | `http://localhost/dunya-mutfagi/baglanti-test.php?id=2` açılır. | "Bağlantı tamam", 3 kayıt ve `id=2: Baklava with Pistachio Nuts (Türkiye)` yazar. | Geçti (26.11.2026) |
| 1.8 | `…/baglanti-test.php?id=999` açılır. | `id=999: kayıt yok` yazar. | Geçti (26.11.2026) |

## Sonraki haftalar (uygulama yazıldıkça doldurulacak)

| # | Konu | Adım | Beklenen | Sonuç |
|---|---|---|---|---|
| 2.1 | Ekleme | Giriş yapılıp yeni tarif eklenir. | Kayıt listede görünür, sahibi giriş yapan kullanıcıdır. | |
| 2.2 | Güncelleme | Kendi tarifinin başlığı değiştirilir. | Değişiklik kaydedilir. | |
| 2.3 | Silme | Kendi tarifi silinir. | Kayıt listeden kalkar. | |
| 2.4 | Arama + filtre | Arama kutusuna "börek" yazılıp mutfak filtresi birlikte seçilir. | Yalnızca iki koşula da uyan kayıtlar gelir. | |
| 2.5 | Erişim | `test1` ile giriş yapılır, `test2`'nin tarifinin düzenleme adresi açılır. | Erişim reddedilir. | |
| 2.6 | Erişim | `test2` ile giriş yapılır, `test1`'in tarifi silinmeye çalışılır. | Erişim reddedilir, kayıt silinmez. | |
