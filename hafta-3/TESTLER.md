# TESTLER – 3. Hafta

Testler XAMPP üzerinde (Apache + MySQL), `kurulum.sql` temiz kurulduktan sonra çalıştırıldı (tarayıcıdan HTTP istekleriyle ve phpMyAdmin üzerinden).

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

