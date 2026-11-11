# Dünya Mutfağı (World Kitchen) – PHP sürümü

Mustafa Çakmak (254309252) – Mesleki Çözümleme I dönem projesi.

Dünya mutfaklarından tarifleri, hikâyeleriyle birlikte sunan tarif sitesinin PHP sürümü. Arayüz İngilizcedir (World Kitchen).

## Özellikler
- 32 özel tarif: malzemeler, adım adım yapılış, hikâye, "Nerede yenir?", diyet ve alerji bilgisi
- Wikibooks Cookbook'tan yaklaşık 1.900 dünya mutfağı tarifi (kaynak ve lisans her tarifte gösterilir)
- Pişirme modu, zamanlayıcı, sesli okuma
- Şef: soru-cevap ve sesli sohbet asistanı
- Yemek çarkı, arama önerileri, "Elimde ne var?"
- Hesap sistemi (kullanıcı adı, e-posta veya Google ile giriş), favoriler, notlar, rozetler
- 19 tema
- Başlık yanında hamburger-patates kovalama animasyonu (`assets/js/hero.js`)
- Açılan pencerelerde, tarif panelinde, pişirme modunda ve kartlarda animasyonlar (hareketi azalt ayarı açıksa kapanır)

## Çalıştırma

### XAMPP ile
1. Bu klasörü `C:\xampp\htdocs\dunya-mutfagi` olarak kopyalayın.
2. XAMPP Control Panel'den **Apache**'yi başlatın.
3. Tarayıcıda `http://localhost/dunya-mutfagi/` adresini açın.

### PHP yerleşik sunucusuyla
```bash
php -S localhost:8000
```
Sonra `http://localhost:8000` adresini açın. PHP 7.4 veya üstü yeterlidir, ek eklenti gerekmez (`zlib` varsa veri dosyaları sıkıştırılır).

## Dosyalar
| Dosya / klasör | Görevi |
|---|---|
| `index.php` | Sayfa iskeleti: parçaları, ayarları ve betikleri birleştirir |
| `config.php` | `SITE_URL`, `SUPA_URL`, `SUPA_KEY`, `SUPA_GOOGLE` ayarları (ortam değişkeniyle değiştirilebilir) ve yardımcı işlevler |
| `data.php` | Büyük veri kümelerini (`?set=wb`, `flags`, `embed`) önbelleğe alınabilir, sıkıştırılmış JS olarak sunar |
| `partials/` | `<head>`, sayfa gövdesi ve yasal sayfa parçaları |
| `gizlilik.php`, `kosullar.php` | Gizlilik ve koşullar sayfaları |
| `assets/css/` | Stiller (`motion.css` animasyon katmanıdır) |
| `assets/js/app.js`, `assets/js/motion.js`, `assets/js/hero.js` | Uygulama kodu, animasyon yardımcıları ve başlık animasyonu |
| `data/*.json` | Wikibooks tarifleri, bayraklar, gömülü fotoğraflar (yalnızca `data.php` üzerinden sunulur) |

## Vercel Web Analytics (isteğe bağlı)
Ziyaret istatistiği yalnızca Vercel'de çalışır. Varsayılan olarak kapalıdır; açmak için `VERCEL_ANALYTICS=true` ortam değişkenini tanımlayın. Açıkken gizlilik sayfasında "Visit statistics" bölümü de görünür.

## E-postayla ve Google ile giriş (Supabase)
E-posta hesapları [Supabase Auth](https://supabase.com/docs/guides/auth) ile tutulur. `config.php` içindeki `SUPA_KEY` herkese açık "anon" anahtarıdır. Google ile girişin çalışması için Supabase'de izin verilen adreslere sitenin adresi (ör. `http://localhost`) eklenmelidir.

## Lisans
Wikibooks tarif metinleri [Wikibooks Cookbook](https://en.wikibooks.org/wiki/Cookbook) yazarlarına aittir ve [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.tr) lisansıyla paylaşılır. Fotoğraflar Wikimedia Commons'tandır; her birinin yazarı ve lisansı tarifin yanında gösterilir. Sitenin kodu ve kendi 32 tarifi bu lisansın dışındadır.
