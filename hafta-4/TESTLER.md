# TESTLER – 4. Hafta

Testler XAMPP üzerinde (Apache + MySQL), `kurulum.sql` temiz kurulduktan sonra çalıştırıldı (tarayıcıdan HTTP istekleriyle ve phpMyAdmin üzerinden).

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

