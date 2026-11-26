# TESTLER – 2. Hafta

Testler XAMPP üzerinde (Apache + MySQL), `kurulum.sql` temiz kurulduktan sonra çalıştırıldı (tarayıcıdan HTTP istekleriyle ve phpMyAdmin üzerinden).

## 2. Hafta – PDO ile listeleme ve kayıt ekleme

| # | Adım | Beklenen | Sonuç |
|---|---|---|---|
| 2.1 | `liste.php` açılır. | Kayıtlar MySQL'den okunup listelenir. | Geçti (26.11.2026): HTTP 200, 5 örnek kayıt (Baklava dahil) listelendi. |
| 2.2 | `ekle.php` formu zorunlu alanlar dolu gönderilir (başlığa `<b>x</b>` yazılır). | Kayıt eklenir, listeye yönlenir (`?ok=eklendi`), kayıt listede görünür; HTML kaçırılır. | Geçti (26.11.2026): Kayıt listede göründü; `&lt;b&gt;x&lt;/b&gt;` olarak gösterildi, etiket çalışmadı. |
| 2.3 | Başlık boş bırakılıp form gönderilir. | Hata mesajı, HTTP 422, kayıt oluşmaz. | Geçti (26.11.2026): 422, hata mesajı gösterildi, liste değişmedi. |
| 2.4 | Zorunlu alanların hepsi boş gönderilir. | Her alan için hata mesajı, kayıt oluşmaz. | Geçti (26.11.2026): Hata mesajları göründü, kayıt oluşmadı, girilen değerler korundu. |
| 2.5 | Sayfa yeniden açılır. | Eklenen kayıt hâlâ listededir. | Geçti (26.11.2026): Kayıt MySQL'de kalıcıydı. |

