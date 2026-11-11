const DATA = [
  {
    id:"tr", name:"Türkiye", flag:"🇹🇷", color:"#A61B29", dark:"#FF9AA5",
    intro:"Anadolu mutfağı bakliyat, sebze ve zeytinyağı etrafında döner. Sofranın başı çorbadır.",
    recipes:[
      {
        title:"Mercimek Çorbası", emoji:"🥣", mins:35, time:"35 dk", serves:"4 kişilik", level:"Kolay",
        desc:"Kırmızı mercimekle yapılan, tereyağlı ve pul biberli klasik lokanta çorbası.",
        yt:"mercimek çorbası tarifi",
        ing:["1 su bardağı kırmızı mercimek","1 adet kuru soğan","1 adet havuç","1 adet patates","1 yemek kaşığı un","1 yemek kaşığı salça","6 su bardağı sıcak su veya et suyu","2 yemek kaşığı tereyağı","1 çay kaşığı pul biber","Tuz, karabiber, kimyon","Servis için limon"],
        steps:["Mercimeği birkaç kez yıkayıp süzün.","Tencerede 1 kaşık tereyağında doğranmış soğanı 3–4 dakika kavurun, unu ekleyip kokusu çıkana kadar karıştırın.","Salçayı ekleyin, ardından küp doğranmış havuç ve patatesi ilave edin.","Mercimek ve sıcak suyu ekleyip kapağı aralık, kısık ateşte 25 dakika pişirin.","Blenderdan geçirin; kıvamı koyuysa biraz sıcak su ekleyin. Tuz, karabiber ve kimyonla tatlandırın.","Kalan tereyağını eritip pul biberi çok kısa kızdırın ve çorbanın üzerine gezdirin. Limonla servis edin."],
        tip:"Pul biberi yağda 10 saniyeden fazla tutmayın; yanarsa acılaşır."
      },
      {
        title:"Karnıyarık", emoji:"🍆", mins:70, time:"70 dk", serves:"4 kişilik", level:"Orta",
        desc:"Kızartılmış patlıcanların içi kıymalı harçla doldurulup fırında pişirilir.",
        yt:"karnıyarık tarifi",
        ing:["6 adet kemer patlıcan","300 g dana kıyma","1 adet kuru soğan","2 diş sarımsak","2 adet sivri biber","2 adet domates","1 yemek kaşığı salça","Kızartma için sıvı yağ","Yarım demet maydanoz","Tuz, karabiber, pul biber","1 su bardağı sıcak su"],
        steps:["Patlıcanları alacalı soyun, tuzlu suda 20 dakika bekletip kurulayın.","Patlıcanları kızgın yağda her yanı yumuşayana kadar kızartın, kağıt havluya alın.","Tavada soğanı kavurun, kıymayı ekleyip suyunu çekene kadar pişirin.","Sarımsak, biber, bir domates ve salçayı ekleyin; baharatlayıp 5 dakika pişirin, maydanozu karıştırın.","Patlıcanları fırın kabına dizin, ortalarını bıçakla yarıp kaşıkla açın ve harcı doldurun.","Üzerlerine domates ve biber dilimleri koyun. Salçalı sıcak suyu kabın dibine dökün.","180°C fırında 25–30 dakika pişirin. Pilav ve yoğurtla servis edin."],
        tip:"Yağ çekmesini azaltmak için patlıcanları fırında yağ sürerek de kızartabilirsiniz."
      }
    ]
  },
  {
    id:"it", name:"İtalya", flag:"🇮🇹", color:"#2E7D4F", dark:"#5CC08A",
    intro:"İtalyan mutfağı az malzemeyi iyi malzemeyle yapar. Tarifler kısa, zamanlama önemlidir.",
    recipes:[
      {
        title:"Spaghetti Carbonara", emoji:"🍝", mins:20, time:"20 dk", serves:"2 kişilik", level:"Orta",
        desc:"Krema yok: sos yumurta sarısı, peynir ve makarna suyuyla kremsi olur.",
        yt:"spaghetti carbonara tarifi",
        ing:["200 g spagetti","100 g guanciale veya dana pastırma/füme et","3 adet yumurta sarısı + 1 bütün yumurta","60 g rendelenmiş pecorino veya parmesan","Bol taze çekilmiş karabiber","Tuz (makarna suyu için)"],
        steps:["Bol tuzlu suda spagettiyi paketteki süreden 1 dakika az haşlayın.","Guancialeyi şeritler halinde kesip yağsız tavada kıtırlaşana kadar kızartın, ocağı kapatın.","Kasede yumurta sarıları, bütün yumurta, peynir ve karabiberi çırpın.","Makarnayı süzüp tavaya alın; yarım kepçe makarna suyu ekleyip karıştırın.","Tava ocaktan alınmışken yumurtalı karışımı dökün ve hızla karıştırın. Gerekirse makarna suyuyla kıvamı açın.","Üzerine peynir ve karabiber serpip hemen servis edin."],
        tip:"Yumurtayı ocağın üzerinde eklemeyin; ısı fazla olursa omlete döner."
      },
      {
        title:"Tiramisu", emoji:"🍰", mins:30, time:"30 dk + 6 saat dinlenme", serves:"6 kişilik", level:"Kolay",
        desc:"Kahveye batırılmış kedi dili ve mascarpone kreması katları.",
        yt:"tiramisu tarifi",
        ing:["250 g mascarpone","3 adet yumurta (taze)","80 g toz şeker","200 g kedi dili bisküvi","300 ml soğumuş sert espresso veya filtre kahve","Üzeri için kakao"],
        steps:["Yumurtaların sarısını ve beyazını ayırın.","Sarıları şekerle açık renk alana kadar çırpın, mascarponeyi ekleyip pürüzsüz olana kadar karıştırın.","Beyazları ayrı kapta sert köpük olana kadar çırpın ve krema karışımına nazikçe katlayın.","Bisküvileri kahveye bir saniye batırıp servis kabına dizin.","Üzerine kremanın yarısını yayın, bir kat daha bisküvi ve kalan kremayı ekleyin.","Buzdolabında en az 6 saat bekletin. Servisten önce kakao eleyin."],
        tip:"Bisküvileri kahvede uzun tutmayın; yumuşayıp dağılır."
      }
    ]
  },
  {
    id:"jp", name:"Japonya", flag:"🇯🇵", color:"#1F4E8C", dark:"#7FA8E6",
    intro:"Japon ev yemekleri dashi, soya sosu ve pirinç üzerine kuruludur; sade ama derin tatlıdır.",
    recipes:[
      {
        title:"Oyakodon", emoji:"🍚", mins:25, time:"25 dk", serves:"2 kişilik", level:"Kolay",
        desc:"Tavuk ve yumuşak yumurtanın tatlı-tuzlu sosla pirinç üzerine döküldüğü kase yemeği.",
        yt:"oyakodon recipe",
        ing:["2 adet tavuk but (kemiksiz)","1 adet kuru soğan","3 adet yumurta","150 ml dashi (veya tavuk suyu)","2 yemek kaşığı soya sosu","2 yemek kaşığı mirin","1 yemek kaşığı şeker","2 porsiyon pişmiş Japon pirinci","Yeşil soğan"],
        steps:["Tavuğu lokma büyüklüğünde, soğanı ince yarım ay doğrayın.","Küçük tavada dashi, soya sosu, mirin ve şekeri kaynatın.","Soğanı ekleyip 3 dakika, ardından tavuğu ekleyip 6–7 dakika pişirin.","Yumurtaları hafifçe çırpın (tam karıştırmayın) ve tavaya iki seferde gezdirin.","Kapağı kapatıp 1 dakika pişirin; yumurta hafif akışkan kalmalı.","Sıcak pirincin üzerine kaydırın, yeşil soğan serpin."],
        tip:"Yumurtayı tamamen pişirmeyin; kasede sıcak pirinçle pişmeye devam eder."
      },
      {
        title:"Miso Çorbası", emoji:"🍜", mins:15, time:"15 dk", serves:"4 kişilik", level:"Kolay",
        desc:"Her Japon öğününe eşlik eden, tofu ve wakame yosunlu hafif çorba.",
        yt:"miso soup recipe",
        ing:["800 ml dashi","3 yemek kaşığı miso ezmesi","150 g tofu","1 yemek kaşığı kuru wakame yosunu","2 dal yeşil soğan"],
        steps:["Wakameyi 5 dakika suda bekletip süzün.","Dashiyi tencerede ısıtın, kaynamaya yakın ocağı kısın.","Tofuyu küp doğrayıp ekleyin, 2 dakika ısıtın.","Misoyu bir kepçe sıcak dashide ezerek eritin ve tencereye geri ekleyin.","Wakameyi ekleyin; çorbayı kaynatmadan ocaktan alın ve yeşil soğanla servis edin."],
        tip:"Miso eklendikten sonra kaynatılırsa aroması kaybolur."
      }
    ]
  },
  {
    id:"mx", name:"Meksika", flag:"🇲🇽", color:"#C2185B", dark:"#F06A9D",
    intro:"Meksika mutfağı mısır, fasulye, acı biber ve limonla canlı ve renkli tatlar üretir.",
    recipes:[
      {
        title:"Guacamole", emoji:"🥑", mins:10, time:"10 dk", serves:"4 kişilik", level:"Kolay",
        desc:"Olgun avokado, lime ve kişnişle hazırlanan taze sos.",
        yt:"guacamole tarifi",
        ing:["3 adet olgun avokado","1 adet lime (veya yarım limon)","Yarım kırmızı soğan","1 adet domates","1 adet jalapeño veya acı sivri biber","Bir avuç taze kişniş","Tuz","Yanına mısır cipsi"],
        steps:["Soğan, domates, biber ve kişnişi çok ince doğrayın.","Avokadoları ikiye kesip çekirdeğini çıkarın, içini kaseye alın.","Çatalla iri parçalar kalacak şekilde ezin.","Lime suyu ve tuzu ekleyin.","Doğranmış malzemeleri karıştırın, tadını kontrol edin ve hemen servis edin."],
        tip:"Bekleyecekse üstünü streçle temas edecek şekilde kapatın; kararmayı geciktirir."
      },
      {
        title:"Tavuklu Quesadilla", emoji:"🌮", mins:25, time:"25 dk", serves:"2 kişilik", level:"Kolay",
        desc:"Tortilla arasında eriyen peynir, baharatlı tavuk ve biber.",
        yt:"chicken quesadilla recipe",
        ing:["4 adet un tortilla (lavaş da olur)","250 g tavuk göğsü","1 adet kırmızı biber","Yarım soğan","150 g kaşar veya cheddar","1 çay kaşığı kimyon","1 çay kaşığı toz kırmızı biber","Tuz, sıvı yağ","Servis için ekşi krema ve salsa"],
        steps:["Tavuğu ince şeritler halinde kesip kimyon, kırmızı biber ve tuzla harmanlayın.","Tavada az yağla tavuğu pişirin, biber ve soğanı ekleyip 4 dakika daha soteleyin.","Tortillanın yarısına peynir, harç ve biraz daha peynir koyup ikiye katlayın.","Yağsız tavada her yüzünü 2–3 dakika, altın rengi olup peynir eriyene kadar pişirin.","Üçgen dilimleyip ekşi krema ve salsa ile servis edin."],
        tip:"Tavayı orta ateşte tutun; yüksek ateşte tortilla yanar, peynir erimez."
      }
    ]
  },
  {
    id:"in", name:"Hindistan", flag:"🇮🇳", color:"#B8860B", dark:"#F2B84B",
    intro:"Hint mutfağında baharatlar yağda uyandırılır; her yemeğin temeli soğan, zencefil ve sarımsaktır.",
    recipes:[
      {
        title:"Butter Chicken", emoji:"🍛", mins:50, time:"50 dk + marine", serves:"4 kişilik", level:"Orta",
        desc:"Marine edilip pişirilen tavuk, tereyağlı ve kremalı domates sosunda.",
        yt:"butter chicken tarifi",
        ing:["600 g tavuk but","1 su bardağı yoğurt","2 yemek kaşığı garam masala","1 yemek kaşığı zencefil-sarımsak ezmesi","1 çay kaşığı zerdeçal","1 çay kaşığı toz kırmızı biber","3 yemek kaşığı tereyağı","1 adet soğan","400 g domates püresi","100 ml krema","1 çay kaşığı şeker","Tuz, taze kişniş"],
        steps:["Tavuğu yoğurt, 1 kaşık garam masala, zencefil-sarımsak, zerdeçal, kırmızı biber ve tuzla en az 1 saat marine edin.","Tavuğu kızgın tavada veya fırın ızgarasında kenarları kızarana kadar pişirin.","Başka tencerede tereyağında soğanı yumuşatın, kalan garam masalayı ekleyin.","Domates püresini ekleyip 15 dakika koyulaşana kadar pişirin; isterseniz blenderdan geçirin.","Krema, şeker ve tavuğu ekleyip 10 dakika kısık ateşte pişirin.","Kişnişle süsleyip pilav veya naan ile servis edin."],
        tip:"Marine süresi uzadıkça tavuk yumuşar; bir gece bekletmek idealdir."
      },
      {
        title:"Dal Tadka", emoji:"🫘", mins:40, time:"40 dk", serves:"4 kişilik", level:"Kolay",
        desc:"Sarı mercimeğin üzerine baharatlı kızgın yağ (tadka) dökülen günlük Hint yemeği.",
        yt:"dal tadka recipe",
        ing:["1 su bardağı sarı mercimek (toor veya mung dal)","4 su bardağı su","Yarım çay kaşığı zerdeçal","1 adet soğan","1 adet domates","2 diş sarımsak","1 parça zencefil","1 çay kaşığı kimyon tohumu","2 adet kuru kırmızı biber","2 yemek kaşığı ghee veya tereyağı","Tuz, taze kişniş"],
        steps:["Mercimeği yıkayın; su, zerdeçal ve tuzla yumuşayıp dağılana kadar 25 dakika haşlayın.","Tavada 1 kaşık ghee ile soğanı pembeleştirin, sarımsak, zencefil ve domatesi ekleyip pişirin.","Bu karışımı mercimeğe ekleyin ve 5 dakika kaynatın.","Tadka için kalan ghee'yi kızdırın, kimyon ve kuru biberi atıp çıtırdamaya başlayınca ocaktan alın.","Kızgın tadkayı mercimeğin üzerine dökün, kişnişle servis edin."],
        tip:"Tadkayı servisten hemen önce yapın; o cızırtı kokunun sırrıdır."
      }
    ]
  }
];

/* ---- Yeni tarifler (mevcut ülkelere) ---- */
DATA[0].recipes.push({
  title:"Aşure", emoji:"🥣", mins:120, time:"2 saat + 1 gece ıslatma", serves:"10 kişilik", level:"Orta",
  desc:"Buğday, bakliyat ve kuru meyvelerle yapılan, komşularla paylaşılan tatlı.",
  yt:"aşure tarifi",
  ing:["1 su bardağı aşurelik buğday","Yarım su bardağı nohut","Yarım su bardağı kuru fasulye","2 su bardağı toz şeker","10 adet kuru kayısı","6 adet kuru incir","Yarım su bardağı kuru üzüm","1 adet portakalın rendelenmiş kabuğu","Süslemek için ceviz, fındık, nar taneleri, tarçın"],
  steps:["Buğday, nohut ve fasulyeyi ayrı kaplarda bir gece suda bekletin.","Buğdayı bol suyla, kapağı kapalı şekilde yumuşayana kadar yaklaşık 1 saat haşlayın.","Nohut ve fasulyeyi ayrı ayrı haşlayıp süzün.","Doğranmış kayısı, incir ve üzümü buğdaya ekleyin, 15 dakika pişirin.","Nohut, fasulye ve şekeri ekleyin; karıştırarak 20 dakika daha kaynatın.","Portakal kabuğunu ekleyip ocaktan alın, kaselere paylaştırın.","Soğuyunca ceviz, fındık, nar ve tarçınla süsleyip komşularınıza da götürün."],
  tip:"Kıvamı sıcakken sulu görünür; soğudukça koyulaşır, fazla pişirmeyin."
});
DATA[1].recipes.push({
  title:"Pizza Margherita", emoji:"🍕", mins:40, time:"40 dk + 2 saat mayalanma", serves:"3 pizza", level:"Orta",
  desc:"Domates, mozzarella ve fesleğen: Napoli'nin en ünlü pizzası.",
  yt:"pizza margherita tarifi",
  ing:["500 g un (tercihen tip 00)","325 ml ılık su","10 g tuz","5 g kuru maya","400 g konserve soyulmuş domates","250 g mozzarella","Birkaç yaprak taze fesleğen","Zeytinyağı"],
  steps:["Mayayı suda eritin, unu ve tuzu ekleyip 10 dakika yoğurun.","Hamuru örtüp oda sıcaklığında 2 saat, iki katına çıkana kadar mayalandırın.","Domatesleri elle ezin, biraz tuz ve zeytinyağıyla tatlandırın. Pişirmeyin.","Fırını tepsisiyle birlikte en yüksek derecede (250–275°C) 30 dakika ısıtın.","Hamuru üçe bölün, elle ortadan kenara doğru açın; kenarlarda kalın bir çerçeve bırakın.","Üzerine ince bir kat domates sosu ve parçalanmış mozzarella koyun.","Kızgın tepsiye aktarıp 7–9 dakika pişirin. Fırından çıkınca fesleğen ve zeytinyağı ekleyin."],
  tip:"Hamuru merdaneyle açmayın; kenardaki hava kabarcıkları pizzanın kabarık kenarını verir."
});

/* ---- Yeni ülkeler ---- */
DATA.push(
{
  id:"fr", name:"Fransa", flag:"🇫🇷", color:"#6D28D9", dark:"#B69CF7",
  intro:"Fransız mutfağı teknik ve sabır demektir: tereyağı, iyi et suyu ve acele etmeden pişirmek.",
  recipes:[
    { title:"Krep", emoji:"🥞", mins:40, time:"40 dk (30 dk dinlenme dahil)", serves:"12 adet", level:"Kolay",
      desc:"İncecik Fransız krepi; tatlı ya da tuzlu doldurulabilir.",
      yt:"krep tarifi",
      ing:["250 g un","3 adet yumurta","500 ml süt","2 yemek kaşığı eritilmiş tereyağı","1 yemek kaşığı şeker","1 tutam tuz","Servis için reçel, çikolata veya limon ve şeker"],
      steps:["Un, şeker ve tuzu kaseye alıp ortasını havuz gibi açın.","Yumurtaları ortaya kırın, sütü yavaş yavaş ekleyerek topaksız çırpın.","Eritilmiş tereyağını ekleyin ve hamuru 30 dakika dinlendirin.","Tavayı orta ateşte ısıtıp kağıt havluyla çok az yağlayın.","Bir kepçe hamur dökün, tavayı döndürerek ince yayın; kenarları kalkınca çevirin.","Diğer yüzünü 30 saniye pişirip istediğiniz dolguyla servis edin."],
      tip:"İlk krep genellikle kötü çıkar; tava ısısı ancak onunla oturur, bu normaldir." },
    { title:"Fransız Soğan Çorbası", emoji:"🧅", mins:75, time:"75 dk", serves:"4 kişilik", level:"Orta",
      desc:"Uzun uzun karamelize edilmiş soğan, et suyu ve üzerinde eritilmiş peynirli ekmek.",
      yt:"fransız soğan çorbası tarifi",
      ing:["1 kg kuru soğan","50 g tereyağı","1 yemek kaşığı un","150 ml beyaz şarap (yerine et suyu ve 1 yemek kaşığı limon suyu)","1,5 l et suyu","1 defne yaprağı, birkaç dal kekik","4 dilim baget ekmek","150 g rendelenmiş gruyère veya kaşar","Tuz, karabiber"],
      steps:["Soğanları ince yarım ay doğrayın.","Tereyağında kısık ateşte, ara ara karıştırarak koyu kahverengi olana kadar 40 dakika karamelize edin.","Unu serpip 1 dakika kavurun, şarabı ekleyip dibindeki kahverengi tabakayı kazıyın.","Et suyu, defne ve kekiği ekleyip 20 dakika kaynatın; tuz ve karabiberle tatlandırın.","Çorbayı fırına dayanıklı kaselere paylaştırın, üzerine kızarmış ekmek ve bolca peynir koyun.","Fırının ızgara ayarında peynir eriyip kızarana kadar 3–4 dakika tutun."],
      tip:"Soğanı hızlandırmak için ateşi açmayın; yanan soğan çorbayı acı yapar." }
  ]
},
{
  id:"cn", name:"Çin", flag:"🇨🇳", color:"#C81E1E", dark:"#F47272",
  intro:"Çin mutfağı bölgeden bölgeye değişir: Sichuan'ın uyuşturan acısından kuzeyin hamur işlerine kadar.",
  recipes:[
    { title:"Kung Pao Tavuk", emoji:"🥜", mins:30, time:"30 dk", serves:"3 kişilik", level:"Orta",
      desc:"Yer fıstığı, kuru biber ve Sichuan biberiyle yüksek ateşte sotelenmiş tavuk.",
      yt:"kung pao chicken recipe",
      ing:["400 g tavuk göğsü veya but","1 yemek kaşığı nişasta (marine için)","Yarım su bardağı kavrulmuş yer fıstığı","8–10 adet kuru kırmızı biber","1 çay kaşığı Sichuan biberi (bulamazsanız karabiber)","3 diş sarımsak, 1 parça zencefil","3 dal yeşil soğan","Sos: 2 yk soya sosu, 1 yk siyah pirinç sirkesi (veya elma sirkesi), 1 yk şeker, 1 çk nişasta, 3 yk su","2 yemek kaşığı sıvı yağ"],
      steps:["Tavuğu küp doğrayıp 1 kaşık soya ve nişastayla 10 dakika marine edin.","Sos malzemelerini bir kasede karıştırın.","Wok'u yüksek ateşte ısıtın, yağda kuru biber ve Sichuan biberini koyulaşana kadar 20 saniye kavurun.","Tavuğu ekleyip beyazlayana kadar 4–5 dakika çevirin.","Sarımsak, zencefil ve yeşil soğanın beyazını ekleyin.","Sosu dökün, parlaklaşıp koyulaşınca fıstık ve yeşil soğanı ekleyip pirinçle servis edin."],
      tip:"Biberler yanarsa yemek acılaşır; koyu kırmızıya dönünce hemen tavuğu ekleyin." },
    { title:"Jiaozi (Çin Mantısı)", emoji:"🥟", mins:90, time:"90 dk", serves:"40 adet", level:"Orta",
      desc:"Kıymalı ve lahanalı iç harçla doldurulan, haşlanan ya da tavada kızartılan mantı.",
      yt:"jiaozi dumplings recipe",
      ing:["300 g un","150 ml ılık su","300 g kıyma (dana veya tavuk)","200 g Çin lahanası veya beyaz lahana","3 dal yeşil soğan","1 parça zencefil","2 yemek kaşığı soya sosu","1 yemek kaşığı susam yağı","Tuz, karabiber","Batırma sosu: siyah sirke, soya sosu, pul biber"],
      steps:["Un ve suyu yoğurup pürüzsüz bir hamur yapın, üzerini örtüp 30 dakika dinlendirin.","Lahanayı ince kıyıp tuzlayın, 10 dakika sonra suyunu sıkın.","Kıyma, lahana, yeşil soğan, rendelenmiş zencefil, soya, susam yağı ve baharatları yoğurun.","Hamuru ceviz büyüklüğünde parçalara bölüp avuç içi kadar ince yuvarlaklar açın.","Ortaya bir kaşık harç koyun, ikiye katlayıp kenarlarını büzerek kapatın.","Kaynayan suya atın; su yeniden kaynayınca yarım bardak soğuk su ekleyin. Bunu iki kez tekrarlayın.","Mantılar yüzeye çıkıp şişince süzün ve sosla servis edin."],
      tip:"Tavada kızartmak için: yağlı tavada altını kızartın, yarım bardak su ekleyip kapağını kapatın ve suyunu çekene kadar pişirin." }
  ]
},
{
  id:"es", name:"İspanya", flag:"🇪🇸", color:"#B45309", dark:"#F5B35C",
  intro:"İspanyol mutfağında zeytinyağı, safran ve paylaşarak yemek öndedir; sofra uzun ve kalabalıktır.",
  recipes:[
    { title:"Paella Valenciana", emoji:"🥘", mins:60, time:"60 dk", serves:"4 kişilik", level:"Orta",
      desc:"Geniş tavada safranla pişen, tavuklu ve fasulyeli Valensiya usulü pilav.",
      yt:"paella valenciana tarifi",
      ing:["600 g tavuk but (parçalı)","200 g taze fasulye","1 su bardağı haşlanmış iri beyaz fasulye","1 adet rendelenmiş domates","1 çay kaşığı tatlı toz kırmızı biber","Bir tutam safran (yoksa yarım çay kaşığı zerdeçal)","300 g kısa taneli pirinç (bomba veya baldo)","1,2 l sıcak tavuk suyu","6 yemek kaşığı zeytinyağı","1 dal biberiye, tuz, limon"],
      steps:["Geniş tavada zeytinyağını ısıtın, tuzlanmış tavukları her tarafı kızarana kadar 10 dakika pişirin.","Taze fasulyeyi ekleyip 5 dakika çevirin.","Tavayı ortalayıp domates ve toz biberi ekleyin, 2 dakika kavurun.","Sıcak suyu, safranı ve beyaz fasulyeyi ekleyip 10 dakika kaynatın; tuzunu ayarlayın.","Pirinci tavaya eşit dağıtın ve bundan sonra hiç karıştırmayın.","Yüksek ateşte 10 dakika, sonra orta-kısık ateşte 8 dakika pişirin; son dakikada biberiyeyi üzerine koyun.","Dipte hafif çıtırtı sesi gelince ocaktan alın, üzerini örtüp 5 dakika dinlendirin ve limonla servis edin."],
      tip:"Dipte oluşan çıtır kabuğa 'socarrat' denir ve paellanın en çok kavga edilen kısmıdır." },
    { title:"Gazpacho", emoji:"🍅", mins:15, time:"15 dk + 2 saat soğutma", serves:"4 kişilik", level:"Kolay",
      desc:"Yaz sıcağında içilen, pişirilmeyen soğuk domates çorbası.",
      yt:"gazpacho tarifi",
      ing:["1 kg olgun domates","1 adet salatalık","1 adet yeşil biber","1 diş sarımsak","50 g bayat ekmek içi","80 ml sızma zeytinyağı","2 yemek kaşığı sirke (tercihen şeri sirkesi)","Tuz","Servis için küp doğranmış salatalık ve biber"],
      steps:["Ekmeği biraz suda ıslatıp sıkın.","Domates, salatalık, biber ve sarımsağı iri doğrayın.","Sebzeleri, ekmeği, sirkeyi ve tuzu blenderdan geçirin.","Motor çalışırken zeytinyağını ince ince ekleyin; çorba kremsi bir renk alır.","İsterseniz süzgeçten geçirin ve buzdolabında en az 2 saat soğutun.","Küp doğranmış sebzeler ve bir damla zeytinyağıyla soğuk servis edin."],
      tip:"Lezzet tamamen domatese bağlıdır; mevsiminde, çok olgun domates kullanın." }
  ]
},
{
  id:"th", name:"Tayland", flag:"🇹🇭", color:"#0F766E", dark:"#4FD1C0",
  intro:"Tay mutfağı her lokmada dört tadı dengeler: ekşi, tatlı, tuzlu ve acı.",
  recipes:[
    { title:"Pad Thai", emoji:"🍤", mins:30, time:"30 dk", serves:"2 kişilik", level:"Orta",
      desc:"Demirhindi soslu, karidesli, yumurtalı ve yer fıstıklı sotelenmiş pirinç eriştesi.",
      yt:"pad thai tarifi",
      ing:["200 g yassı pirinç eriştesi","200 g karides veya tavuk","100 g sert tofu","2 adet yumurta","1 avuç fasulye filizi","3 dal yeşil soğan (veya Çin frenk soğanı)","3 yemek kaşığı ezilmiş yer fıstığı","Sos: 3 yk demirhindi ezmesi, 2 yk balık sosu, 2 yk esmer şeker","2 diş sarımsak, 2 yemek kaşığı sıvı yağ","Servis için lime ve pul biber"],
      steps:["Erişteyi ılık suda 20 dakika bekletip süzün (haşlamayın).","Sos malzemelerini şeker eriyene kadar karıştırın.","Wok'ta yağı ısıtın, sarımsak ve küp tofuyu kızartın, ardından karidesleri 2 dakika pişirin.","Erişteyi ve sosu ekleyip 2–3 dakika çevirin; kuru gelirse bir kaşık su ekleyin.","Malzemeleri kenara itin, boş kısma yumurtaları kırıp karıştırın ve pişince erişteye katın.","Fasulye filizi ve yeşil soğanı ekleyip 30 saniye çevirin. Fıstık, lime ve pul biberle servis edin."],
      tip:"Demirhindi bulamazsanız 2 yk limon suyu ve 1 yk nar ekşisi yakın bir tat verir." },
    { title:"Tom Yum Kung", emoji:"🍲", mins:25, time:"25 dk", serves:"4 kişilik", level:"Kolay",
      desc:"Limon otu, galangal ve acı biberle yapılan ekşi-acı karides çorbası.",
      yt:"tom yum kung recipe",
      ing:["300 g iri karides","1 l su veya tavuk suyu","2 sap limon otu","4 dilim galangal (yoksa zencefil)","5 adet kaffir lime yaprağı","150 g mantar","3 yemek kaşığı balık sosu","3 yemek kaşığı lime suyu","2–4 adet taze acı biber","1 yemek kaşığı nam prik pao (Tay biber salçası, isteğe bağlı)","Bir avuç taze kişniş"],
      steps:["Limon otunu bıçağın sırtıyla ezip parçalara kesin.","Suyu kaynatın; limon otu, galangal ve ezilmiş lime yapraklarını ekleyip 5 dakika kaynatın.","Mantarları ekleyip 2 dakika pişirin.","Karidesleri ekleyin, pembeleşince (2 dakika) ocağı kapatın.","Balık sosu, ezilmiş biber ve varsa nam prik paoyu ekleyin.","Lime suyunu en son, ocak kapalıyken ekleyin; tadını dengeleyip kişnişle servis edin."],
      tip:"Limon otu ve galangal parçaları tat için oradadır, yenmez; kasede kenara ayırın." }
  ]
},
{
  id:"kr", name:"Kore", flag:"🇰🇷", color:"#3730A3", dark:"#9EA2F8",
  intro:"Kore mutfağı fermantasyon üzerine kuruludur: kimchi, gochujang ve soya ezmesi sofradan eksik olmaz.",
  recipes:[
    { title:"Bibimbap", emoji:"🍱", mins:45, time:"45 dk", serves:"2 kişilik", level:"Orta",
      desc:"Pilavın üzerine dizilen sebzeler, et, yumurta ve gochujang; yemeden önce karıştırılır.",
      yt:"bibimbap tarifi",
      ing:["2 porsiyon pişmiş pirinç","150 g ince dilim dana eti veya kıyma","1 demet ıspanak","1 adet havuç","1 adet kabak","1 avuç fasulye filizi","4 adet mantar (tercihen shiitake)","2 adet yumurta","2 yemek kaşığı gochujang","2 yemek kaşığı susam yağı, 2 yemek kaşığı soya sosu","2 diş sarımsak, kavrulmuş susam"],
      steps:["Eti 1 kaşık soya, sarımsak ve susam yağıyla marine edin.","Ispanak ve fasulye filizini ayrı ayrı 1 dakika haşlayıp sıkın; biraz tuz ve susam yağıyla harmanlayın.","Havuç, kabak ve mantarı jülyen doğrayıp her birini ayrı ayrı az yağda 2 dakika soteleyin.","Eti yüksek ateşte suyunu çekene kadar pişirin.","Yumurtaları sarısı akışkan kalacak şekilde göz pişirin.","Kaselere pirinci koyun, üstüne malzemeleri renk renk dizin, ortaya yumurtayı ve gochujangı koyun.","Susam serpin, masada hepsini iyice karıştırarak yiyin."],
      tip:"Taş kasede (dolsot) yaparsanız kaseyi önceden ısıtıp susam yağı sürün; dipteki pirinç çıtırlaşır." },
    { title:"Tteokguk", emoji:"🍥", mins:40, time:"40 dk", serves:"4 kişilik", level:"Kolay",
      desc:"Dilimlenmiş pirinç keki, et suyu ve yumurtayla yapılan Kore yeni yıl çorbası.",
      yt:"tteokguk recipe",
      ing:["400 g dilimlenmiş pirinç keki (tteok)","200 g dana eti (döş veya kontrfile)","1,5 l su","2 adet yumurta","2 dal yeşil soğan","2 diş sarımsak","1 yemek kaşığı soya sosu","1 yaprak kurutulmuş yosun (gim), ufalanmış","Tuz, karabiber, susam yağı"],
      steps:["Pirinç keklerini 20 dakika soğuk suda bekletin.","Eti suyla birlikte kaynatıp köpüğünü alın, 20 dakika pişirin; eti çıkarıp ince didin.","Et suyuna sarımsak ve soya ekleyin, tuzla tatlandırın.","Pirinç keklerini ekleyip yüzeye çıkana ve yumuşayana kadar 5 dakika pişirin.","Çırpılmış yumurtayı ince bir iplik gibi gezdirin ve karıştırmadan 1 dakika bekleyin.","Kaselere alın; didilmiş et, yeşil soğan, yosun ve bir damla susam yağıyla servis edin."],
      tip:"Kurumuş pirinç keki kullanıyorsanız ıslatma süresini bir saate çıkarın." }
  ]
}
);

/* ---- Hikâyeler ---- */
const STORIES={
  "Mercimek Çorbası":{legend:false,story:"Mercimek, Bereketli Hilal'de, yani bugünkü Güneydoğu Anadolu ve Mezopotamya'da insanlığın ilk evcilleştirdiği bitkilerden biridir. Tevrat'taki anlatıda Esav, ilk oğul olma hakkını kardeşi Yakup'a bir kase kırmızı mercimek yemeği karşılığında satar. Ucuz, besleyici ve herkesin sofrasına uygun olduğu için Osmanlı'dan bugüne esnaf lokantalarının ve hastane sofralarının vazgeçilmezidir."},
  "Karnıyarık":{legend:false,story:"Osmanlı saray mutfağında patlıcan o kadar sevilirdi ki onu 'sebzelerin sultanı' diye anarlardı; saray kayıtlarında onlarca patlıcan yemeği geçer. Karnıyarık'ın etsiz, zeytinyağlı kardeşi İmam Bayıldı'dır. Adının, yemeği tadan bir imamın lezzetten bayılmasından ya da karısının çeyizindeki zeytinyağının hepsinin bu yemeğe gittiğini öğrenince bayılmasından geldiği anlatılır."},
  "Aşure":{legend:true,story:"Halk anlatısına göre Nuh Tufanı sona erip gemi Ağrı Dağı'na oturduğunda, geride kalan erzak bir kazanda karıştırılıp pişirildi ve ilk aşure böyle doğdu. Aşure, Hicri takvimin ilk ayı olan Muharrem'de pişirilir; Alevi ve Bektaşi geleneğinde Kerbela yasının ardından yapılır. En önemli kuralı paylaşmaktır: kazan kaynayınca kaseler komşulara, akrabalara ve yoksullara dağıtılır. Bu yüzden bolluk, birlik ve komşuluğun simgesi sayılır."},
  "Spaghetti Carbonara":{legend:true,story:"Carbonara sanıldığı kadar eski değildir; yazılı kaynaklarda ilk kez 1950'lerde görünür. En yaygın açıklamaya göre II. Dünya Savaşı sonunda Roma'daki Amerikan askerlerinin tayınındaki yumurta tozu ve pastırma, İtalyan aşçıların elinde makarnayla buluştu. Adının Apenin dağlarındaki kömür işçilerinden (carbonari) ya da tabağa serpilen bol karabiberin kömür tozuna benzemesinden geldiği de söylenir."},
  "Tiramisu":{legend:true,story:"Adı İtalyanca 'beni canlandır, beni yukarı kaldır' anlamına gelir. Bugünkü haliyle 1960'ların sonu ile 1970'lerde Treviso'daki Le Beccherie restoranında ortaya çıktığı kabul edilir. Komşu Friuli bölgesi de kökeni sahiplenir; iki bölge arasındaki 'tiramisu kimin?' tartışması İtalya'da hâlâ şakayla karışık sürer."},
  "Pizza Margherita":{legend:true,story:"Ünlü hikâyeye göre 1889'da Napoli'yi ziyaret eden Kraliçe Margherita için pizzacı Raffaele Esposito, yeni birleşmiş İtalya'nın bayrak renklerini taşıyan bir pizza hazırladı: kırmızı domates, beyaz mozzarella ve yeşil fesleğen. Pizzaya kraliçenin adı verildi. Tarihçiler benzer pizzaların bundan önce de yapıldığını gösterse de hikâye pizzayı ulusal bir simgeye dönüştürdü. Napoli pizzacılarının sanatı 2017'de UNESCO Somut Olmayan Kültürel Miras listesine girdi."},
  "Oyakodon":{legend:true,story:"Adı 'ebeveyn ve çocuk kasesi' demektir, çünkü tavuk ve yumurtası aynı kasede buluşur. Tokyo'da 1760'tan beri açık olan Tamahide restoranı, kendi anlatımına göre yemeğin 1891'de orada, müşterilerin tavuk güveci artıklarını yumurtayla pilavın üzerine dökmesinden doğduğunu söyler. Bugün hâlâ önünde uzun kuyruklar oluşur."},
  "Miso Çorbası":{legend:false,story:"Miso çorbası, Japon öğününün temeli olan 'ichijū sansai' (bir çorba, üç yan yemek) düzeninin çorbasıdır ve yüzyıllardır neredeyse her sofraya gelir. Miso dayanıklı ve besleyici olduğu için samurayların seferlere kurutulmuş miso taşıdığı anlatılır. Japon geleneksel mutfak kültürü washoku, 2013'te UNESCO listesine girdi."},
  "Guacamole":{legend:true,story:"Adı Aztek dili Nahuatl'daki ahuacamolli, yani 'avokado sosu' kelimesinden gelir. Aztekler avokadoyu bereket ve güçle ilişkilendirirdi. 16. yüzyılda Meksika'ya gelen İspanyollar bu yeşil sosu şaşkınlıkla kayda geçirdi. Geleneksel Meksika mutfağı, 2010'da UNESCO listesine giren ilk ulusal mutfaklardan biri oldu."},
  "Tavuklu Quesadilla":{legend:false,story:"Mısır tortillası Mezoamerika'da binlerce yıllıktır, ama peynir Meksika'ya 16. yüzyılda İspanyolların getirdiği inek ve keçilerle geldi. Quesadilla bu iki dünyanın buluşmasıdır; adı İspanyolca 'queso' (peynir) kelimesinden türer. Mexico City'de peynirsiz quesadilla istemenin mümkün olması, Meksikalıların kendi aralarında sevdiği bir şakadır."},
  "Butter Chicken":{legend:true,story:"1950'lerde Delhi'deki Moti Mahal restoranında doğduğu kabul edilir. Fikir basitti: tandırda pişip kuruyan tavuk parçalarını tereyağlı, kremalı bir domates sosunda yeniden canlandırmak. Ancak yemeğin gerçek mucidinin kim olduğu o kadar önemli hale geldi ki, 2024'te Moti Mahal'in sahipleri ile rakip bir restoran zinciri arasındaki anlaşmazlık Delhi Yüksek Mahkemesi'ne taşındı."},
  "Dal Tadka":{legend:false,story:"Dal, yani mercimek ve bakliyat, Hint mutfağının ve özellikle vejetaryen nüfusun temel protein kaynağıdır; Hindistan dünyanın en büyük bakliyat üreticisidir. Mercimekli pilav anlamına gelen 'dal chawal', milyonlarca Hintli için tek kelimeyle ev yemeği demektir. 'Tadka' ise baharatları kızgın yağda uyandırıp yemeğin üstüne dökme tekniğidir."},
  "Krep":{legend:true,story:"Krep Fransa'da 2 Şubat'taki Chandeleur (Mum Bayramı) ile özdeşleşmiştir. Gelenek şudur: sol elinizde bir madeni para tutarken sağ elinizle tavadaki krepi havaya atıp çevirebilirseniz, yıl boyunca bolluk içinde olacağınıza inanılır. Yuvarlak, altın rengi krepin kış sonunda güneşi ve baharın dönüşünü simgelediği söylenir. Kökeni Bretanya'nın karabuğday galetlerine dayanır."},
  "Fransız Soğan Çorbası":{legend:true,story:"Soğan çorbası yüzyıllarca yoksulların yemeğiydi; soğan ucuzdu ve her yerde yetişirdi. Bir efsaneye göre Kral XV. Louis, av köşkünde gece acıkınca elde kalan soğan, tereyağı ve şampanyayla bu çorbayı kendi yaptı. Modern hali ise Paris'in ünlü toptancı hali Les Halles'da doğdu: gece boyunca çalışan hamallar ve sabaha karşı eğlenceden dönenler, sıcak soğan çorbası için aynı masalarda buluşurdu."},
  "Kung Pao Tavuk":{legend:true,story:"Yemek, adını 19. yüzyılda Qing Hanedanı döneminde Sichuan valisi olan Ding Baozhen'den alır. Ding'e 'Gongbao' (saray muhafızı) unvanı verilmişti ve bu yemeği çok sevdiği anlatılır. Kültür Devrimi sırasında imparatorluk unvanını hatırlattığı için yemeğin adı değiştirildi, yıllar sonra eski adına kavuştu. Batı'da en çok bilinen Çin yemeklerinden biri olmasına karşın asıl hali Sichuan biberiyle dili uyuşturan bir acılıktadır."},
  "Jiaozi (Çin Mantısı)":{legend:true,story:"Kuzey Çin'de Yeni Yıl gecesi ailece jiaozi yapılır. Mantıların şekli eski Çin'de para olarak kullanılan gümüş külçelere benzediği için bereket getirdiğine inanılır; bazı aileler içlerinden birine madeni para saklar ve onu bulan yıl boyu şanslı sayılır. Bir halk anlatısına göre mantıyı, kışın soğuktan kulakları donan köylüler için kulak şeklinde yapan kişi Han döneminin ünlü hekimi Zhang Zhongjing'tir."},
  "Paella Valenciana":{legend:true,story:"Paella, Valensiya yakınındaki Albufera gölünün pirinç tarlalarında, 19. yüzyılda tarım işçilerinin öğle yemeğiydi: tarlada, portakal ağacı dallarıyla yakılan ateşte, ellerinin altındaki tavuk, tavşan, fasulye ve pirinçle pişirilirdi. Adı, Latince 'patella'dan gelen ve tava anlamına gelen kelimeden türer. Bölgeye pirinci getirenler Endülüs Müslümanlarıdır. Valensiyalılar için gerçek paellada deniz ürünü olmaz."},
  "Gazpacho":{legend:false,story:"Gazpacho, Endülüs'ün kavurucu yazında tarlada çalışanların serinletici yemeğiydi. Kökeni Roma ve Endülüs dönemlerine uzanan, ekmek, zeytinyağı, sarımsak ve sirkeyle yapılan soğuk çorbalara dayanır. Bugün ona rengini veren domates ve biber ise İspanya'ya ancak Kolomb'un seferlerinden sonra, Amerika'dan geldi."},
  "Pad Thai":{legend:true,story:"Pad Thai'nin ünü devlet politikasından gelir. Ülkenin adı 1939'da Siam'dan Tayland'a çevrildiğinde, Başbakan Plaek Phibunsongkhram ulusal kimliği güçlendirmek için pirinç eriştesiyle yapılan bu yemeği yaygınlaştırdı. Hükümet tarifleri dağıttı ve seyyar satıcıları destekledi. Amaç hem Tay kimliğini simgeleyen bir yemek yaratmak hem de pirinç ihracatını korumaktı."},
  "Tom Yum Kung":{legend:true,story:"Tayland'ın belki de en tanınan çorbası olan Tom Yum Kung, Aralık 2024'te UNESCO Somut Olmayan Kültürel Miras listesine alındı. Adı 'kaynatılmış, karıştırılmış karides' anlamına gelir. Nehir kenarındaki toplulukların, bahçede yetişen limon otu, galangal ve kaffir lime ile tatlı su karideslerini buluşturduğu bu çorba, Tay mutfağının dört tadını tek kasede toplar."},
  "Bibimbap":{legend:false,story:"Bibimbap 'karıştırılmış pilav' demektir. Bir geleneğe göre Kore yeni yılı öncesinde, eski yıldan kalan yiyecekleri bitirmek için artık sebzeler pilavla karıştırılırdı. Jeonju kenti bibimbabıyla ünlüdür. Tabağa dizilen beş renk, Doğu Asya'daki beş element anlayışını ve dengeyi temsil eder."},
  "Tteokguk":{legend:true,story:"Tteokguk, Kore yeni yılı Seollal'in sabahında yenir. Beyaz pirinç kekleri temizliği ve yeni bir başlangıcı simgeler; eski paralara benzeyen yuvarlak dilimlerin bereket getirdiğine inanılır. En sevilen inanışa göre bir kase tteokguk yiyen bir yaş büyür. Bu yüzden Korelilerin yaş sormanın şakacı bir yolu vardır: 'Kaç kase tteokguk yedin?'"}
};
DATA.forEach(c=>c.recipes.forEach(r=>Object.assign(r,STORIES[r.title]||{legend:false,story:""})));
DATA.forEach(c=>{
  // refresh palette so colours stay distinct across ten countries
  const pal={jp:["#0369A1","#6CC3F2"],in:["#C2410C","#FB9A5B"]};
  if(pal[c.id]){c.color=pal[c.id][0];c.dark=pal[c.id][1];}
});
const ICON_CLOCK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
const ICON_USER='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>';
const ICON_BAR='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 20v-5M12 20V9M19 20V4"/></svg>';
const ICON_HEART='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 20.5s-7.5-4.6-9.2-9.4C1.6 7.6 4 4 7.6 4c2 0 3.4 1.1 4.4 2.5C13 5.1 14.4 4 16.4 4 20 4 22.4 7.6 21.2 11.1 19.5 15.9 12 20.5 12 20.5Z"/></svg>';
const ICON_YT='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.7 15.1V8.9L15.3 12l-5.6 3.1Z"/></svg>';
const ICON_PLAY='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>';

const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const norm=s=>s.toLocaleLowerCase("tr").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ı/g,"i");
const store={
  get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},
  set(k,v){try{if(/^bm-(favs|checks|pantry)$/.test(k)&&!PROFILE)return}catch(e){}try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}
    try{if(PROFILE&&String(k).endsWith("@"+PROFILE)&&typeof sbSchedule==="function")sbSchedule()}catch(e){}}
};

/* ---- English content ---- */
const EN_COUNTRY={
  tr:{name:"Türkiye",intro:"Anatolian cooking revolves around pulses, vegetables and olive oil. Every proper meal starts with soup."},
  it:{name:"Italy",intro:"Italian cooking makes a few ingredients go a long way. Recipes are short; timing is everything."},
  jp:{name:"Japan",intro:"Japanese home cooking is built on dashi, soy sauce and rice: simple, but deep in flavour."},
  mx:{name:"Mexico",intro:"Mexican cooking turns corn, beans, chillies and lime into bright, lively flavours."},
  in:{name:"India",intro:"In Indian cooking, spices are woken up in hot fat; onion, ginger and garlic are the base of almost everything."},
  fr:{name:"France",intro:"French cooking means technique and patience: butter, good stock and never rushing."},
  cn:{name:"China",intro:"Chinese food changes from region to region, from Sichuan's numbing heat to the dumplings of the north."},
  es:{name:"Spain",intro:"Spanish cooking puts olive oil, saffron and shared plates first; the table is long and crowded."},
  th:{name:"Thailand",intro:"Thai cooking balances four tastes in every bite: sour, sweet, salty and hot."},
  kr:{name:"Korea",intro:"Korean cooking is built on fermentation: kimchi, gochujang and soybean paste are always on the table."}
};
const EN_LEVEL={"Kolay":"Easy","Orta":"Medium","Zor":"Hard"};
const EN_RECIPES={
"Mercimek Çorbası":{title:"Red Lentil Soup",time:"35 min",serves:"4 people",yt:"turkish red lentil soup recipe",
 desc:"The classic Turkish restaurant soup of red lentils, finished with butter and chilli flakes.",
 ing:["1 cup red lentils","1 onion","1 carrot","1 potato","1 tbsp flour","1 tbsp tomato paste","6 cups hot water or stock","2 tbsp butter","1 tsp chilli flakes (pul biber)","Salt, black pepper, cumin","Lemon, to serve"],
 steps:["Rinse the lentils a few times and drain.","Soften the chopped onion in 1 tbsp butter for 3–4 minutes, then stir in the flour until it smells toasty.","Add the tomato paste, then the diced carrot and potato.","Add the lentils and hot water and simmer, lid ajar, for 25 minutes.","Blend until smooth, adding hot water if too thick. Season with salt, pepper and cumin.","Melt the remaining butter, sizzle the chilli flakes very briefly and drizzle over the soup. Serve with lemon."],
 tip:"Keep the chilli flakes in the butter for no more than 10 seconds; if they burn they turn bitter.",
 story:"Lentils were among the first crops ever domesticated, in the Fertile Crescent that spans today's south-eastern Türkiye and Mesopotamia. In the Book of Genesis, Esau sells his birthright to his brother Jacob for a bowl of red lentil stew. Cheap, nourishing and fit for any table, it has been a staple of Turkish tradesmen's canteens and hospital trays from Ottoman times to today."},
"Karnıyarık":{title:"Karnıyarık (Stuffed Aubergine)",time:"70 min",serves:"4 people",yt:"karniyarik recipe",
 desc:"Fried aubergines split open, filled with spiced minced meat and baked.",
 ing:["6 slender aubergines","300 g minced beef","1 onion","2 garlic cloves","2 long green peppers","2 tomatoes","1 tbsp tomato paste","Oil, for frying","Half a bunch of parsley","Salt, black pepper, chilli flakes","1 cup hot water"],
 steps:["Peel the aubergines in stripes, soak in salted water for 20 minutes and pat dry.","Fry the aubergines in hot oil until soft on all sides and drain on paper towels.","Fry the onion, add the mince and cook until the liquid has evaporated.","Add the garlic, pepper, one tomato and the tomato paste; season and cook for 5 minutes, then stir in the parsley.","Lay the aubergines in a baking dish, slit them lengthwise, open them with a spoon and fill with the mince.","Top with slices of tomato and pepper. Pour the paste-tinted hot water into the bottom of the dish.","Bake at 180°C for 25–30 minutes. Serve with rice and yoghurt."],
 tip:"To use less oil, brush the aubergines with oil and roast them in the oven instead of frying.",
 story:"The Ottoman palace kitchen loved aubergine so much that it was called the 'sultan of vegetables', and palace records list dozens of aubergine dishes. Karnıyarık's meatless, olive-oil sibling is İmam Bayıldı, 'the imam fainted'. The story goes that an imam fainted either from the sheer taste or on learning that all of his wife's dowry of olive oil had gone into the dish."},
"Aşure":{title:"Aşure (Noah's Pudding)",time:"2 hours + overnight soaking",serves:"10 people",yt:"asure noah's pudding recipe",
 desc:"A sweet pudding of wheat, pulses and dried fruit, made to be shared with the neighbours.",
 ing:["1 cup hulled wheat","Half a cup chickpeas","Half a cup white beans","2 cups sugar","10 dried apricots","6 dried figs","Half a cup raisins","Grated zest of 1 orange","Walnuts, hazelnuts, pomegranate seeds and cinnamon, to garnish"],
 steps:["Soak the wheat, chickpeas and beans overnight in separate bowls.","Boil the wheat in plenty of water, lid on, until soft, about 1 hour.","Boil the chickpeas and beans separately and drain.","Add the chopped apricots, figs and raisins to the wheat and cook for 15 minutes.","Add the chickpeas, beans and sugar and simmer for 20 more minutes, stirring.","Stir in the orange zest, take off the heat and ladle into bowls.","Once cool, garnish with walnuts, hazelnuts, pomegranate and cinnamon, and take some to your neighbours."],
 tip:"It looks runny while hot but thickens as it cools, so don't overcook it.",
 story:"Folk tradition says that when the Flood ended and Noah's Ark came to rest on Mount Ararat, the last of the provisions were mixed together in one pot, and that was the first aşure. It is cooked in Muharram, the first month of the Islamic calendar; in Alevi and Bektashi tradition it is made after the period of mourning for Karbala. Its most important rule is sharing: once the pot is done, bowls go out to neighbours, relatives and the poor. That is why it stands for abundance, unity and neighbourliness."},
"Spaghetti Carbonara":{title:"Spaghetti Carbonara",time:"20 min",serves:"2 people",yt:"spaghetti carbonara recipe",
 desc:"No cream: the sauce turns silky from egg yolks, cheese and pasta water.",
 ing:["200 g spaghetti","100 g guanciale (or pancetta or smoked beef)","3 egg yolks + 1 whole egg","60 g grated pecorino or parmesan","Plenty of freshly ground black pepper","Salt (for the pasta water)"],
 steps:["Cook the spaghetti in well-salted water for 1 minute less than the packet says.","Cut the guanciale into strips and fry in a dry pan until crisp, then turn off the heat.","Whisk the yolks, whole egg, cheese and pepper in a bowl.","Drain the pasta into the pan and toss with half a ladle of pasta water.","With the pan off the heat, pour in the egg mixture and toss quickly. Loosen with pasta water if needed.","Finish with more cheese and pepper and serve straight away."],
 tip:"Never add the egg over direct heat; if it gets too hot it turns into an omelette.",
 story:"Carbonara is younger than people think: it first appears in print in the 1950s. The most common explanation is that at the end of World War II, the powdered egg and bacon in American soldiers' rations met pasta in the hands of Italian cooks in Rome. Others say the name comes from the charcoal workers (carbonari) of the Apennines, or from the black pepper that looks like coal dust on the plate."},
"Tiramisu":{title:"Tiramisu",time:"30 min + 6 hours chilling",serves:"6 people",yt:"tiramisu recipe",
 desc:"Layers of coffee-dipped ladyfingers and mascarpone cream.",
 ing:["250 g mascarpone","3 very fresh eggs","80 g caster sugar","200 g ladyfingers (savoiardi)","300 ml cooled strong espresso or coffee","Cocoa powder, to finish"],
 steps:["Separate the eggs.","Whisk the yolks with the sugar until pale, then beat in the mascarpone until smooth.","Whisk the whites to stiff peaks in a separate bowl and gently fold into the cream.","Dip each ladyfinger in the coffee for one second and lay them in the dish.","Spread over half the cream, add another layer of biscuits and the rest of the cream.","Chill for at least 6 hours. Dust with cocoa just before serving."],
 tip:"Don't leave the biscuits in the coffee too long; they go soggy and fall apart.",
 story:"The name means 'pick me up' or 'cheer me up' in Italian. Its modern form is generally credited to the Le Beccherie restaurant in Treviso in the late 1960s to 1970s. The neighbouring Friuli region also claims it, and the 'whose tiramisu is it?' debate between the two regions still goes on in Italy, half in jest."},
"Pizza Margherita":{title:"Pizza Margherita",time:"40 min + 2 hours rising",serves:"Makes 3 pizzas",yt:"pizza margherita recipe",
 desc:"Tomato, mozzarella and basil: Naples' most famous pizza.",
 ing:["500 g flour (ideally type 00)","325 ml lukewarm water","10 g salt","5 g dried yeast","400 g tinned peeled tomatoes","250 g mozzarella","A few fresh basil leaves","Olive oil"],
 steps:["Dissolve the yeast in the water, add the flour and salt and knead for 10 minutes.","Cover and leave at room temperature for 2 hours, until doubled.","Crush the tomatoes by hand and season with a little salt and olive oil. Don't cook them.","Heat the oven with its tray to the highest setting (250–275°C) for 30 minutes.","Divide the dough into three and stretch each by hand from the centre outwards, leaving a thick rim.","Spread a thin layer of tomato and tear over the mozzarella.","Slide onto the hot tray and bake for 7–9 minutes. Add basil and olive oil as it comes out."],
 tip:"Don't use a rolling pin; the air bubbles in the rim are what make the puffy crust.",
 story:"The famous story goes that in 1889, for Queen Margherita's visit to Naples, pizzaiolo Raffaele Esposito made a pizza in the colours of newly unified Italy's flag: red tomato, white mozzarella and green basil, and named it after the queen. Historians have shown that similar pizzas existed before, but the story turned pizza into a national symbol. The art of the Neapolitan pizzaiuolo was added to UNESCO's Intangible Cultural Heritage list in 2017."},
"Oyakodon":{title:"Oyakodon",time:"25 min",serves:"2 people",yt:"oyakodon recipe",
 desc:"Chicken and soft egg simmered in a sweet-savoury sauce and poured over rice.",
 ing:["2 boneless chicken thighs","1 onion","3 eggs","150 ml dashi (or chicken stock)","2 tbsp soy sauce","2 tbsp mirin","1 tbsp sugar","2 portions cooked Japanese rice","Spring onion"],
 steps:["Cut the chicken into bite-size pieces and slice the onion into thin half-moons.","Bring the dashi, soy sauce, mirin and sugar to the boil in a small pan.","Add the onion and cook for 3 minutes, then the chicken for 6–7 minutes.","Lightly beat the eggs (don't fully mix them) and pour into the pan in two goes.","Cover and cook for 1 minute; the egg should stay slightly runny.","Slide onto the hot rice and scatter with spring onion."],
 tip:"Don't cook the egg all the way; it keeps cooking on the hot rice.",
 story:"The name means 'parent-and-child bowl', because the chicken and its egg meet in the same bowl. Tamahide, a Tokyo restaurant open since 1760, says the dish was born there in 1891, when customers poured the leftovers of their chicken hotpot, bound with egg, over rice. There is still a long queue outside today."},
"Miso Çorbası":{title:"Miso Soup",time:"15 min",serves:"4 people",yt:"miso soup recipe",
 desc:"The light soup of tofu and wakame that comes with almost every Japanese meal.",
 ing:["800 ml dashi","3 tbsp miso paste","150 g tofu","1 tbsp dried wakame seaweed","2 spring onions"],
 steps:["Soak the wakame in water for 5 minutes and drain.","Heat the dashi and turn the heat down just before it boils.","Add the cubed tofu and warm through for 2 minutes.","Dissolve the miso in a ladle of hot dashi and stir it back into the pot.","Add the wakame; take off the heat without boiling and serve with spring onion."],
 tip:"If the soup boils after the miso goes in, it loses its aroma.",
 story:"Miso soup is the soup in 'ichijū sansai' (one soup, three sides), the basic pattern of a Japanese meal, and has come to almost every table for centuries. Because miso keeps well and is nourishing, samurai are said to have carried dried miso on campaign. Washoku, traditional Japanese food culture, was added to the UNESCO list in 2013."},
"Guacamole":{title:"Guacamole",time:"10 min",serves:"4 people",yt:"guacamole recipe",
 desc:"A fresh dip of ripe avocado, lime and coriander.",
 ing:["3 ripe avocados","1 lime (or half a lemon)","Half a red onion","1 tomato","1 jalapeño or hot green chilli","A handful of fresh coriander","Salt","Tortilla chips, to serve"],
 steps:["Chop the onion, tomato, chilli and coriander very finely.","Halve the avocados, remove the stones and scoop the flesh into a bowl.","Mash with a fork, leaving some chunks.","Add the lime juice and salt.","Stir in the chopped ingredients, taste and serve straight away."],
 tip:"If it has to wait, press cling film right onto the surface; it slows the browning.",
 story:"The name comes from ahuacamolli, 'avocado sauce', in Nahuatl, the language of the Aztecs, who linked the avocado with fertility and strength. The Spanish who arrived in Mexico in the 16th century recorded this green sauce with some astonishment. Traditional Mexican cuisine became one of the first national cuisines on the UNESCO list, in 2010."},
"Tavuklu Quesadilla":{title:"Chicken Quesadilla",time:"25 min",serves:"2 people",yt:"chicken quesadilla recipe",
 desc:"Melted cheese, spiced chicken and peppers between tortillas.",
 ing:["4 flour tortillas (or lavash)","250 g chicken breast","1 red pepper","Half an onion","150 g cheddar or other melting cheese","1 tsp ground cumin","1 tsp chilli powder","Salt, oil","Sour cream and salsa, to serve"],
 steps:["Cut the chicken into thin strips and toss with cumin, chilli powder and salt.","Cook the chicken in a little oil, then add the pepper and onion and sauté for 4 more minutes.","Put cheese, filling and a little more cheese on one half of a tortilla and fold it over.","Cook in a dry pan for 2–3 minutes a side, until golden and the cheese has melted.","Cut into wedges and serve with sour cream and salsa."],
 tip:"Keep the pan on medium heat; on high the tortilla burns before the cheese melts.",
 story:"Corn tortillas are thousands of years old in Mesoamerica, but cheese came to Mexico in the 16th century with the cows and goats brought by the Spanish. The quesadilla is where those two worlds meet; the name comes from the Spanish 'queso', cheese. That you can order a quesadilla without cheese in Mexico City is a joke Mexicans love to tell about themselves."},
"Butter Chicken":{title:"Butter Chicken",time:"50 min + marinating",serves:"4 people",yt:"butter chicken recipe",
 desc:"Marinated, charred chicken in a buttery, creamy tomato sauce.",
 ing:["600 g chicken thighs","1 cup yoghurt","2 tbsp garam masala","1 tbsp ginger-garlic paste","1 tsp turmeric","1 tsp chilli powder","3 tbsp butter","1 onion","400 g tomato passata","100 ml cream","1 tsp sugar","Salt, fresh coriander"],
 steps:["Marinate the chicken in the yoghurt, 1 tbsp garam masala, ginger-garlic paste, turmeric, chilli and salt for at least 1 hour.","Cook the chicken in a hot pan or under the grill until charred at the edges.","In another pot, soften the onion in butter and add the rest of the garam masala.","Add the passata and cook for 15 minutes until thick; blend if you like.","Add the cream, sugar and chicken and simmer gently for 10 minutes.","Garnish with coriander and serve with rice or naan."],
 tip:"The longer it marinates, the more tender the chicken; overnight is ideal.",
 story:"It is generally agreed to have been born in the 1950s at the Moti Mahal restaurant in Delhi. The idea was simple: bring dried-out pieces of tandoori chicken back to life in a buttery, creamy tomato sauce. But who actually invented it became important enough that in 2024 a dispute between Moti Mahal's owners and a rival restaurant chain went to the Delhi High Court."},
"Dal Tadka":{title:"Dal Tadka",time:"40 min",serves:"4 people",yt:"dal tadka recipe",
 desc:"An everyday Indian dish of yellow lentils topped with spiced hot fat (tadka).",
 ing:["1 cup yellow lentils (toor or moong dal)","4 cups water","Half a tsp turmeric","1 onion","1 tomato","2 garlic cloves","1 piece of ginger","1 tsp cumin seeds","2 dried red chillies","2 tbsp ghee or butter","Salt, fresh coriander"],
 steps:["Rinse the lentils and boil with the water, turmeric and salt until soft and falling apart, about 25 minutes.","Fry the onion in 1 tbsp ghee until golden, then add the garlic, ginger and tomato and cook down.","Stir this into the lentils and simmer for 5 minutes.","For the tadka, heat the rest of the ghee, add the cumin and dried chillies and take off the heat as soon as they crackle.","Pour the sizzling tadka over the dal and serve with coriander."],
 tip:"Make the tadka right before serving; that sizzle is the secret of the aroma.",
 story:"Dal, meaning lentils and pulses, is the main source of protein in Indian cooking, especially for its large vegetarian population, and India is the world's largest producer of pulses. For millions of Indians, 'dal chawal' (dal and rice) simply means home food. 'Tadka' is the technique of waking spices up in hot fat and pouring them over a dish."},
"Krep":{title:"Crêpes",time:"40 min (incl. 30 min resting)",serves:"Makes 12",yt:"french crepes recipe",
 desc:"Thin French crêpes to fill sweet or savoury.",
 ing:["250 g flour","3 eggs","500 ml milk","2 tbsp melted butter","1 tbsp sugar","A pinch of salt","Jam, chocolate spread or lemon and sugar, to serve"],
 steps:["Put the flour, sugar and salt in a bowl and make a well in the middle.","Crack the eggs into the well and whisk in the milk gradually until there are no lumps.","Add the melted butter and rest the batter for 30 minutes.","Heat a pan over medium heat and wipe it with a tiny bit of oil on kitchen paper.","Pour in a ladle of batter and swirl it thin; flip when the edges lift.","Cook the other side for 30 seconds and serve with your filling."],
 tip:"The first crêpe usually comes out badly; that's how the pan settles its heat, and it's normal.",
 story:"In France the crêpe belongs to La Chandeleur (Candlemas) on 2 February. The custom: if you can flip a crêpe in the pan with your right hand while holding a coin in your left, you'll be prosperous all year. The round, golden crêpe is said to stand for the sun and the return of spring at winter's end. Its roots are in the buckwheat galettes of Brittany."},
"Fransız Soğan Çorbası":{title:"French Onion Soup",time:"75 min",serves:"4 people",yt:"french onion soup recipe",
 desc:"Slowly caramelised onions and stock, topped with bread and melted cheese.",
 ing:["1 kg onions","50 g butter","1 tbsp flour","150 ml white wine (or stock plus 1 tbsp lemon juice)","1.5 l beef stock","1 bay leaf, a few sprigs of thyme","4 slices of baguette","150 g grated Gruyère or other melting cheese","Salt, black pepper"],
 steps:["Slice the onions into thin half-moons.","Caramelise them in butter on low heat, stirring now and then, until deep brown, about 40 minutes.","Sprinkle over the flour and cook for 1 minute, then add the wine and scrape up the brown bits.","Add the stock, bay and thyme and simmer for 20 minutes; season with salt and pepper.","Ladle into ovenproof bowls and top with toasted bread and plenty of cheese.","Put under the grill for 3–4 minutes until the cheese melts and browns."],
 tip:"Don't turn the heat up to speed the onions along; burnt onion makes the soup bitter.",
 story:"For centuries onion soup was food for the poor: onions were cheap and grew everywhere. One legend says King Louis XV, hungry late at night at his hunting lodge, made it himself from the onions, butter and champagne he found there. Its modern form was born in Les Halles, Paris' famous wholesale market, where night-shift porters and revellers heading home at dawn met at the same tables over hot onion soup."},
"Kung Pao Tavuk":{title:"Kung Pao Chicken",time:"30 min",serves:"3 people",yt:"kung pao chicken recipe",
 desc:"Chicken stir-fried over high heat with peanuts, dried chillies and Sichuan pepper.",
 ing:["400 g chicken breast or thigh","1 tbsp cornflour (for the marinade)","Half a cup roasted peanuts","8–10 dried red chillies","1 tsp Sichuan peppercorns (or black pepper)","3 garlic cloves, 1 piece of ginger","3 spring onions","Sauce: 2 tbsp soy sauce, 1 tbsp Chinese black vinegar (or cider vinegar), 1 tbsp sugar, 1 tsp cornflour, 3 tbsp water","2 tbsp oil"],
 steps:["Dice the chicken and marinate with 1 tbsp soy sauce and the cornflour for 10 minutes.","Mix the sauce ingredients in a bowl.","Heat a wok until very hot and fry the dried chillies and Sichuan pepper in the oil for 20 seconds, until darkened.","Add the chicken and stir-fry for 4–5 minutes until white.","Add the garlic, ginger and the white parts of the spring onion.","Pour in the sauce; once glossy and thick, add the peanuts and spring onion greens and serve with rice."],
 tip:"Burnt chillies make the dish bitter; add the chicken as soon as they turn dark red.",
 story:"The dish is named after Ding Baozhen, governor of Sichuan in the 19th century under the Qing dynasty. Ding held the title 'Gongbao' (palace guardian) and is said to have loved this dish. During the Cultural Revolution it was renamed because the title recalled the imperial era, and years later it got its old name back. It is one of the best-known Chinese dishes in the West, but the real thing has a heat that numbs your tongue with Sichuan pepper."},
"Jiaozi (Çin Mantısı)":{title:"Jiaozi (Chinese Dumplings)",time:"90 min",serves:"Makes 40",yt:"jiaozi dumplings recipe",
 desc:"Dumplings filled with pork or beef and cabbage, boiled or pan-fried.",
 ing:["300 g flour","150 ml lukewarm water","300 g minced meat (beef or chicken)","200 g Chinese leaf or white cabbage","3 spring onions","1 piece of ginger","2 tbsp soy sauce","1 tbsp sesame oil","Salt, black pepper","Dipping sauce: black vinegar, soy sauce, chilli flakes"],
 steps:["Knead the flour and water into a smooth dough, cover and rest for 30 minutes.","Finely chop the cabbage, salt it and squeeze out the water after 10 minutes.","Mix the mince, cabbage, spring onion, grated ginger, soy sauce, sesame oil and seasoning.","Divide the dough into walnut-size pieces and roll each into a thin palm-size circle.","Put a spoonful of filling in the middle, fold in half and pleat the edges to seal.","Drop into boiling water; when it returns to the boil add half a cup of cold water. Repeat twice.","When the dumplings float and puff up, drain and serve with the sauce."],
 tip:"To pan-fry: brown the bottoms in an oiled pan, add half a cup of water, cover and cook until the water is gone.",
 story:"In northern China, families make jiaozi together on New Year's Eve. Their shape resembles the silver ingots once used as money, so they are believed to bring wealth; some families hide a coin in one, and whoever finds it is lucky all year. A folk tale credits Zhang Zhongjing, the famous physician of the Han dynasty, with making ear-shaped dumplings for villagers whose ears were frostbitten in winter."},
"Paella Valenciana":{title:"Paella Valenciana",time:"60 min",serves:"4 people",yt:"paella valenciana recipe",
 desc:"Valencian-style rice with chicken and beans, cooked with saffron in a wide pan.",
 ing:["600 g chicken thighs, in pieces","200 g green beans","1 cup cooked large white beans","1 grated tomato","1 tsp sweet paprika","A pinch of saffron (or half a tsp turmeric)","300 g short-grain rice (bomba or similar)","1.2 l hot chicken stock","6 tbsp olive oil","1 sprig rosemary, salt, lemon"],
 steps:["Heat the olive oil in a wide pan and brown the salted chicken on all sides, about 10 minutes.","Add the green beans and fry for 5 minutes.","Push everything to the edges, add the tomato and paprika to the middle and fry for 2 minutes.","Add the hot stock, saffron and white beans and boil for 10 minutes; adjust the salt.","Scatter the rice evenly over the pan and from now on don't stir at all.","Cook on high heat for 10 minutes, then on medium-low for 8 minutes; lay the rosemary on top in the last minute.","When you hear a faint crackle from the bottom, take it off the heat, cover and rest for 5 minutes. Serve with lemon."],
 tip:"The crisp crust that forms on the bottom is called 'socarrat', and it's the most fought-over part of a paella.",
 story:"Paella was the lunch of farm workers in the rice fields of the Albufera lagoon near Valencia in the 19th century, cooked in the field over a fire of orange-tree branches with whatever was at hand: chicken, rabbit, beans and rice. The name comes from the Valencian word for pan, from the Latin 'patella'. Rice was brought to the region by the Moors. For Valencians, a real paella has no seafood."},
"Gazpacho":{title:"Gazpacho",time:"15 min + 2 hours chilling",serves:"4 people",yt:"gazpacho recipe",
 desc:"Cold, uncooked tomato soup for the height of summer.",
 ing:["1 kg ripe tomatoes","1 cucumber","1 green pepper","1 garlic clove","50 g stale bread","80 ml extra virgin olive oil","2 tbsp vinegar (ideally sherry vinegar)","Salt","Diced cucumber and pepper, to serve"],
 steps:["Soak the bread in a little water and squeeze it out.","Roughly chop the tomatoes, cucumber, pepper and garlic.","Blend the vegetables, bread, vinegar and salt.","With the motor running, add the olive oil in a thin stream; the soup turns creamy.","Strain if you like and chill in the fridge for at least 2 hours.","Serve cold with diced vegetables and a drop of olive oil."],
 tip:"The flavour depends entirely on the tomatoes, so use very ripe ones in season.",
 story:"Gazpacho was the cooling meal of labourers in the fields during Andalusia's scorching summers. It descends from cold soups of bread, olive oil, garlic and vinegar going back to Roman and Moorish times. The tomatoes and peppers that give it its colour today only reached Spain from the Americas after Columbus's voyages."},
"Pad Thai":{title:"Pad Thai",time:"30 min",serves:"2 people",yt:"pad thai recipe",
 desc:"Stir-fried rice noodles with tamarind sauce, prawns, egg and peanuts.",
 ing:["200 g flat rice noodles","200 g prawns or chicken","100 g firm tofu","2 eggs","A handful of bean sprouts","3 spring onions (or garlic chives)","3 tbsp crushed peanuts","Sauce: 3 tbsp tamarind paste, 2 tbsp fish sauce, 2 tbsp brown sugar","2 garlic cloves, 2 tbsp oil","Lime and chilli flakes, to serve"],
 steps:["Soak the noodles in warm water for 20 minutes and drain (don't boil them).","Stir the sauce ingredients until the sugar dissolves.","Heat the oil in a wok, fry the garlic and cubed tofu, then cook the prawns for 2 minutes.","Add the noodles and sauce and toss for 2–3 minutes; add a spoonful of water if dry.","Push everything aside, crack the eggs into the space, scramble and fold into the noodles.","Add the bean sprouts and spring onion and toss for 30 seconds. Serve with peanuts, lime and chilli flakes."],
 tip:"No tamarind? 2 tbsp lime juice and 1 tbsp pomegranate molasses give a similar taste.",
 story:"Pad Thai owes its fame to government policy. When the country's name changed from Siam to Thailand in 1939, Prime Minister Plaek Phibunsongkhram promoted this rice-noodle dish to strengthen national identity. The government handed out recipes and supported street vendors. The aim was both to create a dish that symbolised being Thai and to protect rice exports."},
"Tom Yum Kung":{title:"Tom Yum Kung",time:"25 min",serves:"4 people",yt:"tom yum kung recipe",
 desc:"A hot and sour prawn soup with lemongrass, galangal and chilli.",
 ing:["300 g large prawns","1 l water or chicken stock","2 stalks lemongrass","4 slices galangal (or ginger)","5 kaffir lime leaves","150 g mushrooms","3 tbsp fish sauce","3 tbsp lime juice","2–4 fresh chillies","1 tbsp nam prik pao (Thai chilli paste, optional)","A handful of fresh coriander"],
 steps:["Bruise the lemongrass with the back of a knife and cut into pieces.","Bring the water to the boil; add the lemongrass, galangal and torn lime leaves and boil for 5 minutes.","Add the mushrooms and cook for 2 minutes.","Add the prawns and turn off the heat as soon as they turn pink (2 minutes).","Add the fish sauce, crushed chillies and the nam prik pao if using.","Add the lime juice last, with the heat off; balance the taste and serve with coriander."],
 tip:"The lemongrass and galangal are there for flavour, not for eating; set them aside in the bowl.",
 story:"Tom Yum Kung, perhaps Thailand's best-known soup, was added to UNESCO's Intangible Cultural Heritage list in December 2024. The name means 'boiled and mixed prawns'. Created by riverside communities who combined lemongrass, galangal and kaffir lime from their gardens with freshwater prawns, it gathers the four tastes of Thai cooking in one bowl."},
"Bibimbap":{title:"Bibimbap",time:"45 min",serves:"2 people",yt:"bibimbap recipe",
 desc:"Vegetables, meat, egg and gochujang arranged on rice, mixed together before eating.",
 ing:["2 portions cooked rice","150 g thinly sliced beef or mince","1 bunch spinach","1 carrot","1 courgette","1 handful bean sprouts","4 mushrooms (ideally shiitake)","2 eggs","2 tbsp gochujang","2 tbsp sesame oil, 2 tbsp soy sauce","2 garlic cloves, toasted sesame seeds"],
 steps:["Marinate the beef with 1 tbsp soy sauce, garlic and sesame oil.","Blanch the spinach and bean sprouts separately for 1 minute and squeeze dry; season with a little salt and sesame oil.","Cut the carrot, courgette and mushrooms into matchsticks and sauté each separately in a little oil for 2 minutes.","Cook the beef over high heat until the liquid is gone.","Fry the eggs sunny side up, keeping the yolks runny.","Put rice in bowls, arrange the toppings in colourful sections, and put the egg and gochujang in the middle.","Sprinkle with sesame and mix everything well at the table before eating."],
 tip:"In a stone bowl (dolsot), heat the bowl first and brush it with sesame oil; the rice at the bottom goes crisp.",
 story:"Bibimbap means 'mixed rice'. One tradition holds that before the Korean New Year, the leftover vegetables of the old year were mixed with rice to use them up. The city of Jeonju is famous for its bibimbap. The five colours on the plate represent the East Asian idea of the five elements and balance."},
"Tteokguk":{title:"Tteokguk (Rice Cake Soup)",time:"40 min",serves:"4 people",yt:"tteokguk recipe",
 desc:"The Korean New Year soup of sliced rice cakes, beef broth and egg.",
 ing:["400 g sliced rice cakes (tteok)","200 g beef (brisket or sirloin)","1.5 l water","2 eggs","2 spring onions","2 garlic cloves","1 tbsp soy sauce (ideally guk-ganjang)","1 sheet dried seaweed (gim), crumbled","Salt, black pepper, sesame oil"],
 steps:["Soak the rice cakes in cold water for 20 minutes.","Bring the beef and water to the boil, skim, and cook for 20 minutes; lift out the beef and shred it.","Add the garlic and soy sauce to the broth and season with salt.","Add the rice cakes and cook for 5 minutes until they float and soften.","Drizzle in the beaten egg in a thin stream and leave for 1 minute without stirring.","Serve in bowls topped with the shredded beef, spring onion, seaweed and a drop of sesame oil."],
 tip:"If your rice cakes are dried, soak them for an hour instead.",
 story:"Tteokguk is eaten on the morning of Seollal, the Korean New Year. The white rice cakes stand for purity and a fresh start, and the round slices, which look like old coins, are believed to bring prosperity. The favourite belief is that eating a bowl makes you one year older, which is why Koreans have a playful way of asking your age: 'How many bowls of tteokguk have you eaten?'"}
};

/* ---- Nerede yenir / Where to eat ---- */
const WHERE={
 "tr-12":[{n:"Tarihi Sarıyer Muhallebicisi",c:"İstanbul, Sarıyer",tr:"1928'den beri açık; sütlü tatlıları ve börekleriyle Sarıyer'in klasik mahalle muhallebicisi.",en:"Open since 1928; Sarıyer's classic neighbourhood pudding shop, known for its milk puddings and börek."},{n:"Murat Muhallebicisi",c:"İstanbul, Kadıköy",tr:"Kadıköy rıhtımında, fırın sütlaçtan kazandibine ondan fazla sütlü tatlı çeşidi sunan muhallebici.",en:"A pudding shop on the Kadıköy waterfront with more than ten milk puddings, from baked rice pudding to kazandibi."}],
 "tr-11":[{n:"Kanaat Lokantası",c:"İstanbul, Üsküdar",tr:"1933'ten beri açık esnaf lokantası; vitrindeki zeytinyağlılar ve etli-etsiz dolma çeşitleri menünün klasikleri.",en:"A tradesmen's canteen open since 1933; the olive-oil dishes and stuffed vegetables in its display cases are house classics.",ptr:"Orta fiyat ($$)",pen:"Mid-range ($$)"},{n:"Pandeli",c:"İstanbul, Eminönü (Mısır Çarşısı)",tr:"1901'den beri İstanbul mutfağının simgelerinden; dolma çeşitleri öne çıkan yemekleri arasında. Yalnızca 19.00'a kadar açık, pazar kapalı.",en:"A symbol of Istanbul cooking since 1901; its dolma are among its standout dishes. Open only until 7 pm, closed Sundays.",ptr:"Kişi başı ≈ 700 TL",pen:"≈ 700 TL per person"}],
 "tr-10":[{n:"Meşhur Menemenci Dayı",c:"Samsun, Çakallı",tr:"Samsun'un lezzet simgelerinden sayılan Çakallı menemenini yapan yerlerden biri.",en:"One of the places making Çakallı menemen, considered one of Samsun's signature tastes."}],
 "tr-9":[{n:"Şişman Börekçi",c:"Samsun",tr:"Samsun'da Çarşamba keşkeği ve katık böreği için önerilen yerel bir adres.",en:"A local spot in Samsun recommended for Çarşamba-style keşkek and katık böreği."}],
 "tr-7":[{n:"Karaköy Güllüoğlu",c:"İstanbul, Karaköy",tr:"Güllü ailesi 1800'lerden beri Gaziantep'te baklava yapıyor; Karaköy'deki dükkânı 1949'da açıldı. İstanbul baklavasının referans adreslerinden.",en:"The Güllü family has made baklava in Gaziantep since the 1800s; the Karaköy shop opened in 1949 and is one of Istanbul's reference baklava addresses.",ptr:"Kişi başı ≈ 300 TL",pen:"≈ 300 TL per person"},{n:"İmam Çağdaş",c:"Gaziantep",tr:"Hem kebapçı hem baklavacı; Gaziantep'in en bilinen baklava adreslerinden. Kuru baklava, şöbiyet ve havuç dilimi öne çıkıyor.",en:"Both a kebab house and a baklava maker, one of Gaziantep's best-known baklava addresses; known for kuru baklava, şöbiyet and havuç dilimi."},{n:"Tarihi Elmacı Pazarı Güllüoğlu",c:"Gaziantep, Şahinbey",tr:"Tarihi çarşı atmosferinde, klasik tariflere sadık baklavalarıyla bilinen bir baklavacı.",en:"A baklava shop in the historic bazaar, known for sticking to classic recipes."}],
 "tr-6":[{n:"Metanet Lokantası",c:"Gaziantep, Şahinbey (Kozluca)",tr:"Antep ev yemekleriyle ünlü, hep kalabalık bir esnaf lokantası; en ünlüsü sabahları biten beyran çorbası. Ezogelin gibi Antep çorbaları için iyi bir durak, ama günün menüsü değişebilir.",en:"A busy tradesmen's canteen famous for Antep home cooking; its best-known dish is beyran soup, which sells out by late morning. A good stop for Antep soups like ezogelin, though the daily menu varies."}],
 "tr-5":[{n:"Pandeli",c:"İstanbul, Eminönü (Mısır Çarşısı)",tr:"1901'de kuruldu, 1957'den beri Mısır Çarşısı'nın üst katında, turkuaz çinili salonlarda. Michelin Bib Gourmand listesinde; hünkâr beğendisi en ünlü yemeklerinden. Yalnızca 19.00'a kadar açık, pazar kapalı, alkol yok.",en:"Founded in 1901 and above the Spice Bazaar since 1957, in turquoise-tiled rooms. Michelin Bib Gourmand; its hünkâr beğendi is one of its most famous dishes. Open only until 7 pm, closed Sundays, no alcohol.",ptr:"Kişi başı ≈ 700 TL",pen:"≈ 700 TL per person"}],
 "tr-4":[{n:"Kaşıkla",c:"Kayseri",tr:"Kayseri mantısı için şehir rehberlerinde önerilen bir mantıcı. Kayseri mantısı 2009'da coğrafi işaret aldı.",en:"A mantı house recommended in Kayseri city guides. Kayseri mantı received a geographical indication in 2009."},{n:"Gubate",c:"Kayseri",tr:"Kayseri mantısı için önerilen yerel bir restoran.",en:"A local restaurant recommended for Kayseri mantı."},{n:"Aşkana Mantı",c:"İstanbul",tr:"1987'den beri mantı yapan bir İstanbul adresi.",en:"An Istanbul address making mantı since 1987."}],
 "kr-1":[{n:"Gohyang Kalguksu",c:"Seul, Gwangjang Pazarı",tr:"Netflix'in 'Street Food Asia' belgeselinde yer alan bıçakla kesilmiş erişte tezgâhı; menüde sade ve mantılı tteokguk da var.",en:"The knife-cut noodle stall featured in Netflix's 'Street Food Asia'; plain and dumpling tteokguk are on the menu too.",ptr:"Tteokguk ≈ ₩5.000",pen:"Tteokguk ≈ ₩5,000"},{n:"Saebom Tteokguk",c:"Seul, Seodaemun",tr:"Seul'de tteokguk konusunda uzmanlaşmış az sayıdaki restorandan biri; en sevilen çeşidi deniz yosunlu istiridyeli tteokguk.",en:"One of the few Seoul restaurants specialising in tteokguk; the favourite is the seaweed and oyster version.",ptr:"≈ ₩10.000–23.000",pen:"≈ ₩10,000–23,000"}],
 "cn-0":[{n:"Chen Mapo Tofu",c:"Chengdu",tr:"Mapo tofunun doğduğu yer olarak bilinen Chengdu restoranı; Sichuan klasiklerini sunuyor ve Kung Pao tavuğu da övülüyor.",en:"The Chengdu restaurant known as the birthplace of mapo tofu; it serves Sichuan classics and its kung pao chicken is praised too."}],
 "mx-0":[{n:"Restaurante Nicos",c:"Mexico City",tr:"60 yılı aşkın geçmişi olan, masada hazırlanan guacamolesiyle ünlü bir Mexico City kurumu; 2016'da Latin Amerika'nın En İyi 50 Restoranı listesinde 37. oldu.",en:"A Mexico City institution of more than 60 years famous for its tableside guacamole; it ranked 37th on Latin America's 50 Best Restaurants in 2016."}],
 "jp-1":[{n:"MISOJYU",c:"Tokyo, Asakusa",tr:"Miso çorbasını yan yemek değil ana yemek yapan bir dükkân. Organik sebzelerle yapılan beş çeşit miso çorbası ve onigiri sunuyor; Tokyo Skytree'deki Solamachi'de ikinci şubesi var.",en:"A shop that makes miso soup the main dish rather than a side. It serves five kinds of miso soup and onigiri made with organic vegetables, with a second branch at Tokyo Skytree's Solamachi.",ptr:"Kişi başı ≈ ¥1.000–1.999",pen:"≈ ¥1,000–1,999 per person"}],
 "es-1":[{n:"El Pintón",ptr:"Orta–üst fiyat ($$–$$$)",pen:"Mid to upscale ($$–$$$)",c:"Sevilla",tr:"Katedralin birkaç adım ötesinde, Endülüs avlulu şık bir restoran; gazpachoyu kendine özgü bir yorumla sunuyor. Sevilla'da gazpachonun 21 Temmuz'da kutlanan bir günü bile var.",en:"A stylish restaurant with an Andalusian patio steps from the cathedral, serving its own take on gazpacho. Seville even celebrates gazpacho on 21 July."}],
 "mx-1":[{n:"Doña Lucha (Mercado de Coyoacán)",ptr:"Kişi başı ≈ 100 peso veya daha az",pen:"≈ 100 pesos or less per person",c:"Mexico City, Coyoacán",tr:"Frida Kahlo'nun semti Coyoacán'ın pazarında, kızarmış ya da közlenmiş quesadillalarıyla bilinen gösterişsiz bir tezgâh.",en:"A no-frills stall in the market of Coyoacán, Frida Kahlo's neighbourhood, known for fried or griddled quesadillas."},{n:"Quekas (Mercado San Cosme)",ptr:"Uygun fiyat ($)",pen:"Budget ($)",c:"Mexico City, San Rafael",tr:"Şehrin en iyi quesadillalarından bazılarını yapan pazar lokantası. Alt kattaki tezgâhta ayakta, üst katta masada yenebiliyor.",en:"A market eatery making some of the city's best quesadillas. Eat standing at the ground-floor stand or sit upstairs."}],
 "fr-0":[{n:"Breizh Café",ptr:"Kişi başı ≈ 20–40 € · galette ≈ 6,50–16,50 €",pen:"≈ €20–40 per person · galettes ≈ €6.50–16.50",c:"Paris, Le Marais",tr:"Tokyo'da Japonya'nın ilk krepçisini açan Bretonyalı Bertrand Larcher'ın Paris'teki ilk adresi (2006). Organik karabuğday, Bordier tereyağı ve 20'yi aşkın elma şarabı.",en:"The first Paris address (2006) of Breton chef Bertrand Larcher, who opened Japan's first crêperie in Tokyo. Organic buckwheat, Bordier butter and over twenty ciders."}],
 "in-1":[{n:"Bukhara (ITC Maurya)",ptr:"Pahalı (5 yıldızlı otel fiyatları) · rezervasyon alınmıyor",pen:"Expensive (five-star hotel prices) · no reservations",c:"Yeni Delhi",tr:"1978'den beri açık, menüsü neredeyse hiç değişmeyen efsane restoran. Ünlü \"Dal Bukhara\"sı dünyanın en çok taklit edilen restoran dalı sayılıyor. Dal tadka değil, siyah mercimekle yapılan kremalı bir dal, ama Hindistan'ın en ünlü dalı.",en:"Open since 1978 with an almost unchanged menu. Its famous 'Dal Bukhara' is called the most copied restaurant dal in the world. It's a creamy black-lentil dal rather than dal tadka, but it's India's most famous dal."}],
 "tr-2":[{n:"Kanaat Lokantası",ptr:"Orta fiyat ($$)",pen:"Mid-range ($$)",c:"İstanbul, Üsküdar",tr:"1933'ten beri açık. Girişteki Osmanlı tatlıları tezgâhında sütlaçtan aşureye kadar geleneksel tatlılar var; ev yapımı keçi sütlü dondurması da ünlü.",en:"Open since 1933. The Ottoman pudding counter by the entrance runs from rice pudding to aşure; its homemade goat-milk ice cream is famous too."}],
 "tr-0":[{n:"Kanaat Lokantası",ptr:"Orta fiyat ($$)",pen:"Mid-range ($$)",c:"İstanbul, Üsküdar",tr:"1933'ten beri Üsküdar'da, hâlâ kurucu aile tarafından işletilen ünlü bir esnaf lokantası. Mercimek çorbası menünün klasiklerinden.",en:"A famous tradesmen's canteen in Üsküdar since 1933, still run by the founding family. Lentil soup is one of its classics."}],
 "tr-1":[{n:"Hacı Abdullah Lokantası",ptr:"Kişi başı ≈ 30 $ (2026)",pen:"≈ $30 per person (2026)",c:"İstanbul, Beyoğlu",tr:"1888'de Karaköy'de açıldı; ruhsatını Sultan II. Abdülhamid verdi. Türkiye'nin resmi olarak kayıtlı ilk lokantası, Osmanlı saray mutfağının yaşayan adreslerinden.",en:"Opened in Karaköy in 1888 with a licence from Sultan Abdülhamid II; Türkiye's first officially registered restaurant and a living address of Ottoman palace cooking."}],
 "it-0":[{n:"Roscioli",ptr:"Carbonara ≈ 15 € ve üzeri · şarapla kişi başı ≈ 70 €",pen:"Carbonara ≈ €15 and up · ≈ €70 per person with wine",c:"Roma",tr:"Roma'nın en çok konuşulan carbonarası; şarküteri, restoran ve şarap barı bir arada. Önceden rezervasyon şart.",en:"Rome's most talked-about carbonara, in a deli, restaurant and wine bar in one. Book ahead."},
         {n:"Trattoria da Danilo",ptr:"Carbonara ≈ 10–14 €",pen:"Carbonara ≈ €10–14",c:"Roma, Esquilino",tr:"Gösterişsiz, geleneksel bir Roma trattoriası; carbonarası ve enginarıyla bilinir. Pazar günleri kapalı.",en:"An unpretentious, traditional Roman trattoria known for its carbonara and artichokes. Closed on Sundays."},{n:"Armando al Pantheon",ptr:"Kişi başı ≈ 50 € (şarap hariç)",pen:"≈ €50 per person (wine extra)",c:"Roma, Centro Storico",tr:"1961'den beri Gargioli ailesinin işlettiği küçük bir Roma trattoriası; Michelin Rehberi'nde. Rezervasyonlar tam iki ay önceden açılıyor.",en:"A tiny Roman trattoria run by the Gargioli family since 1961 and listed in the Michelin Guide. Bookings open exactly two months ahead."}],
 "it-1":[{n:"Le Beccherie",ptr:"Pahalı kategori (€€€) · tiramisu ≈ 6 €'dan başlar",pen:"Upscale (€€€) · tiramisu from ≈ €6",c:"Treviso",tr:"Tiramisunun doğduğu yer olarak bilinir. 2014'te kapandı, modern bir restoran olarak yeniden açıldı; menüde hâlâ tiramisu var.",en:"Known as the birthplace of tiramisu. It closed in 2014 and reopened as a modern restaurant; tiramisu is still on the menu."}],
 "it-2":[{n:"Pizzeria Brandi",ptr:"Margherita ≈ 7,50 €'dan başlar (Napoli ortalamasının üstünde)",pen:"Margherita from ≈ €7.50 (above the Naples average)",c:"Napoli",tr:"1780'den beri aynı yerde. 1889'da Kraliçe Margherita için ilk margheritanın yapıldığı pizzacı; kraliçenin teşekkür belgesi duvarda asılı.",en:"On the same spot since 1780: the pizzeria where the first margherita was made for Queen Margherita in 1889. The queen's letter of thanks hangs on the wall."},{n:"L'Antica Pizzeria da Michele",ptr:"Margherita ≈ 5,50 € · nakit tercih ediliyor",pen:"Margherita ≈ €5.50 · cash preferred",c:"Napoli, Forcella",tr:"1870'ten beri yalnızca iki çeşit pizza yapıyor: margherita ve marinara. \"Ye, Dua Et, Sev\" filminde Julia Roberts'ın pizza yediği yer. Kapıdan numara alıp sıra bekleniyor.",en:"Making only two pizzas since 1870: margherita and marinara. It's where Julia Roberts eats pizza in 'Eat Pray Love'. Take a numbered ticket at the door and wait."}],
 "jp-0":[{n:"Tamahide",ptr:"Öğlen oyakodon ≈ ¥1.500–2.200 · akşam menüsü ≈ ¥7.000'den başlar",pen:"Lunch oyakodon ≈ ¥1,500–2,200 · dinner courses from ≈ ¥7,000",c:"Tokyo, Ningyocho",tr:"1760'tan beri açık; oyakodon burada 1891'de doğdu. Oyakodon yalnızca öğlen servis ediliyor ve sıra uzun olabiliyor.",en:"Open since 1760; oyakodon was born here in 1891. It's served at lunch only, and the queue can be long."}],
 "in-0":[{n:"Moti Mahal",ptr:"Butter chicken ≈ 8 $ · iki kişi ≈ ₹1.300",pen:"Butter chicken ≈ $8 · ≈ ₹1,300 for two",c:"Delhi, Daryaganj",tr:"Butter chicken'ın 1950'lerde doğduğu restoran. Bugün Moti Mahal Delux adıyla yüzlerce şubesi var.",en:"The restaurant where butter chicken was born in the 1950s. Today it has hundreds of branches as Moti Mahal Delux."},
         {n:"Daryaganj",ptr:"Butter chicken ≈ 7,5 $",pen:"Butter chicken ≈ $7.50",c:"Delhi",tr:"Ortaklardan birinin torununun 2019'da kurduğu zincir; o da yemeğin mucidi olduğunu söylüyor. İki restoran arasındaki anlaşmazlık mahkemeye taşındı.",en:"A chain founded in 2019 by the grandson of one of the partners, which also claims to have invented the dish. The dispute between the two went to court."}],
 "fr-1":[{n:"Au Pied de Cochon",ptr:"Kişi başı ≈ 20–26 € (içecek hariç)",pen:"≈ €20–26 per person (drinks extra)",c:"Paris, Les Halles",tr:"1947'den beri açık ve Paris'te günün her saati açık kalan son restoranlardan biri. Eski Les Halles pazarının gece çorbası geleneği burada yaşıyor.",en:"Open since 1947 and one of the last restaurants in Paris open around the clock, keeping the old Les Halles market's late-night soup tradition alive."}],
 "cn-1":[{n:"De Fa Chang",ptr:"Kişi başı ≈ ¥20–120 · mantı ziyafeti ≈ 20 $",pen:"≈ ¥20–120 per person · dumpling banquet ≈ $20",c:"Xi'an",tr:"1936'da tek çeşit jiaozi satan küçük bir lokanta olarak açıldı. Bugün yüzlerce çeşitle tamamı mantıdan oluşan ziyafet menüsüyle ünlü.",en:"Opened in 1936 as a small eatery selling one kind of jiaozi; now famous for its all-dumpling banquets with hundreds of varieties."}],
 "es-0":[{n:"Casa Carmela",ptr:"Kişi başı ≈ 45 € (en az ≈ 49 € harcama istenebilir)",pen:"≈ €45 per person (a minimum spend of ≈ €49 may apply)",c:"Valensiya, Malvarrosa",tr:"1922'den beri paellayı odun ateşinde pişiriyor. Yalnızca öğlen açık; hafta sonu için haftalar önceden yer ayırtın.",en:"Cooking paella over a wood fire since 1922. Lunch only; book weeks ahead for weekends."},
         {n:"La Pepica",ptr:"Kişi başı ≈ 30–50 €",pen:"≈ €30–50 per person",c:"Valensiya, Malvarrosa",tr:"1898'den beri sahilde paella yapıyor; Hemingway de burada yemiş.",en:"Serving paella on the beachfront since 1898; Hemingway ate here too."}],
 "th-0":[{n:"Thipsamai",ptr:"Pad thai ≈ 75 ฿'den başlar",pen:"Pad thai from ≈ ฿75",c:"Bangkok, Maha Chai Caddesi",tr:"1950'lerde sokak tezgâhı olarak başladı, 1966'da dükkâna taşındı. Michelin Bib Gourmand listesinde; imza yemeği yumurtaya sarılı pad thai. Nakit ödeme.",en:"Started as a street stall in the 1950s and moved into a shop in 1966. Michelin Bib Gourmand; the signature is pad thai wrapped in egg. Cash only."}],
 "th-1":[{n:"Raan Jay Fai",ptr:"Yemek başı ≈ 800–1.200 ฿",pen:"≈ ฿800–1,200 per dish",c:"Bangkok, Maha Chai Caddesi",tr:"Kayak gözlüğüyle yemek pişiren şefiyle ünlü, Michelin yıldızlı sokak restoranı; tom yum da menüde. Sıra numarası sabah dağıtılıyor.",en:"The Michelin-starred street stall famous for its chef in ski goggles; tom yum is on the menu. Queue numbers are handed out in the morning."},{n:"P'Aor (Pee Aor)",ptr:"Istakozlu kâse ≈ 999–1.200 ฿ · daha ucuz seçenekler de var",pen:"Lobster bowl ≈ ฿999–1,200 · cheaper options too",c:"Bangkok, Phetchaburi Soi 5",tr:"Kremalı tom yum eriştesiyle ünlü, hep kalabalık bir lokanta. Istakozlu dev kâsesi iki üç kişiyi doyuruyor. Pazartesi kapalı.",en:"An always-packed eatery famous for creamy tom yum noodles; the giant lobster bowl feeds two or three. Closed on Mondays."}],
 "kr-0":[{n:"Gajok Hoegwan",ptr:"Bibimbap ≈ ₩15.000",pen:"Bibimbap ≈ ₩15,000",c:"Jeonju",tr:"1973'ten beri açık; kurucusu geleneksel Kore mutfağı ustası unvanı aldı. Bibimbap onlarca yan yemekle birlikte geliyor.",en:"Open since 1973; its founder was named a master of traditional Korean food. The bibimbap comes with a spread of side dishes."},
         {n:"Hangukjip",c:"Jeonju",tr:"1952'den beri bibimbap yapıyor ve üçüncü kuşak tarafından işletiliyor; bibimbabı pirinç kasede servis ediliyor.",en:"Making bibimbap since 1952, now run by the third generation; it's served in a heavy brass bowl."}]
};
const CITY_EN={"Seul, Gwangjang Pazarı":"Seoul, Gwangjang Market","Seul, Seodaemun":"Seoul, Seodaemun","İstanbul, Eminönü (Mısır Çarşısı)":"Istanbul, Eminönü (Spice Bazaar)","İstanbul, Üsküdar":"Istanbul, Üsküdar","Roma, Centro Storico":"Rome, Centro Storico","Napoli, Forcella":"Naples, Forcella","Yeni Delhi":"New Delhi","Sevilla":"Seville","İstanbul, Beyoğlu":"Istanbul, Beyoğlu","Roma":"Rome","Roma, Esquilino":"Rome, Esquilino","Napoli":"Naples","Valensiya, Malvarrosa":"Valencia, Malvarrosa","Bangkok, Maha Chai Caddesi":"Bangkok, Maha Chai Road"};
const WHERE_TR={
 "it-2":[{n:"Filo D'Olio",c:"İstanbul, Sarıyer",tr:"İtalyan şef Danilo Zanna'nın pizzacısı; 2026'da Avrupa'nın en iyi pizzacıları listesi 50 Top Pizza Europa'da 36. sıraya girdi.",en:"Italian chef Danilo Zanna's pizzeria; ranked 36th on the 2026 50 Top Pizza Europa list."},{n:"Mozz",c:"Ankara, Beytepe (Çankaya)",tr:"Şef Güneş Öztürk'ün pizzacısı; 50 Top Pizza Europa 2026 listesine 53. sıradan giren iki Türk pizzacıdan biri.",en:"Chef Güneş Öztürk's pizzeria; one of two Turkish pizzerias on the 2026 50 Top Pizza Europa list, at number 53."},{n:"Pizzeria Il Pellicano",c:"İstanbul, Kadıköy",tr:"Sahibi ve şefi Napolili; dört kuşaktır pizzacılık yapan bir aileden geliyor. Menüde margherita da var.",en:"Run by a Neapolitan owner-chef from a family of pizza makers going back four generations. Margherita is on the menu."}],
 "jp-0":[{n:"Sankai by Nagaya",c:"İstanbul",tr:"Şef Nagaya ve Şef Shibata'nın Michelin yıldızlı Japon restoranı. Üst düzey bir tadım restoranı olduğu için bu ev yemeği menüde olmayabilir.",en:"The Michelin-starred Japanese restaurant of chefs Nagaya and Shibata. As a high-end tasting restaurant, this home-style dish may not be on the menu.",ptr:"Pahalı (Michelin yıldızlı)",pen:"Expensive (Michelin-starred)"}],
 "jp-1":[{n:"Sankai by Nagaya",c:"İstanbul",tr:"Şef Nagaya ve Şef Shibata'nın Michelin yıldızlı Japon restoranı. Üst düzey bir tadım restoranı olduğu için bu ev yemeği menüde olmayabilir.",en:"The Michelin-starred Japanese restaurant of chefs Nagaya and Shibata. As a high-end tasting restaurant, this home-style dish may not be on the menu.",ptr:"Pahalı (Michelin yıldızlı)",pen:"Expensive (Michelin-starred)"}],
 "mx-0":[{n:"Los Altos",c:"İstanbul, Beyoğlu",tr:"Boğaz manzaralı çatı katında, Meksikalı şef Felipe Mendez'in dokunduğu menü. Quesadilla ve guacamole menüde.",en:"A rooftop with Bosphorus views and a menu shaped by Mexican chef Felipe Mendez. Quesadillas and guacamole are on the menu."},{n:"Ranchero",ptr:"Kişi başı ≈ 50 $ (2025, ziyaretçi yorumuna göre)",pen:"≈ $50 per person (2025, per a diner review)",c:"İstanbul (Suadiye, Nişantaşı, Ataşehir) ve Ankara (Maidan, Armada, One Tower, Atakule)",tr:"Zonguldaklı Rıza Tanyeri ile Meksikalı eşi Patricia Gonzalez'in kurduğu, aile tarafından işletilen Meksika restoranı. Mutfağın başında aile üyeleri var.",en:"A Mexican restaurant founded and run by the family of Rıza Tanyeri from Zonguldak and his Mexican wife Patricia Gonzalez."}],
 "mx-1":[{n:"Los Altos",c:"İstanbul, Beyoğlu",tr:"Boğaz manzaralı çatı katında, Meksikalı şef Felipe Mendez'in dokunduğu menü. Quesadilla ve guacamole menüde.",en:"A rooftop with Bosphorus views and a menu shaped by Mexican chef Felipe Mendez. Quesadillas and guacamole are on the menu."},{n:"Ranchero",ptr:"Kişi başı ≈ 50 $ (2025, ziyaretçi yorumuna göre)",pen:"≈ $50 per person (2025, per a diner review)",c:"İstanbul (Suadiye, Nişantaşı, Ataşehir) ve Ankara (Maidan, Armada, One Tower, Atakule)",tr:"Zonguldaklı Rıza Tanyeri ile Meksikalı eşi Patricia Gonzalez'in kurduğu, aile tarafından işletilen Meksika restoranı. Mutfağın başında aile üyeleri var.",en:"A Mexican restaurant founded and run by the family of Rıza Tanyeri from Zonguldak and his Mexican wife Patricia Gonzalez."},{n:"Taco Hut",c:"Ankara, Çankaya",tr:"Meksika yemeklerini Türk damak tadına uyarlayan bir restoran; taco, fajita ve burrito öne çıkıyor.",en:"A restaurant adapting Mexican food to Turkish tastes; tacos, fajitas and burritos lead the menu."}],
 "in-0":[{n:"Dubb Indian",c:"İstanbul, Sultanahmet",tr:"Sultanahmet'te, Türkiye'ye gelen Hintlilerin de uğradığı bir Hint restoranı. Misafirler en çok butter chicken'ını öneriyor.",en:"An Indian restaurant in Sultanahmet popular with visiting Indians; guests most often recommend its butter chicken.",ptr:"Üst fiyat segmenti",pen:"Upper price range"},{n:"Tandoori",c:"İstanbul, Maçka",tr:"Bir zamanlar İstanbul'un ilk ve tek Hint restoranıydı; şehrin en köklü Hint adresi.",en:"Once Istanbul's first and only Indian restaurant; the city's longest-standing Indian address."},{n:"Madhu's",c:"İstanbul, Swissôtel The Bosphorus",tr:"İngiliz Kraliyet Sarayı davetlerine yemek hazırlayan Londra'daki ünlü Hint zincirinin yurt dışındaki ilk şubesi.",en:"The first overseas branch of the famous London Indian chain that caters royal palace receptions.",ptr:"Pahalı",pen:"Expensive"}],
 "in-1":[{n:"Tandoori",c:"İstanbul, Maçka",tr:"Bir zamanlar İstanbul'un ilk ve tek Hint restoranıydı; şehrin en köklü Hint adresi.",en:"Once Istanbul's first and only Indian restaurant; the city's longest-standing Indian address."},{n:"Dubb Indian",c:"İstanbul, Sultanahmet",tr:"Sultanahmet'te, Türkiye'ye gelen Hintlilerin de uğradığı bir Hint restoranı. Misafirler en çok butter chicken'ını öneriyor.",en:"An Indian restaurant in Sultanahmet popular with visiting Indians; guests most often recommend its butter chicken.",ptr:"Üst fiyat segmenti",pen:"Upper price range"},{n:"Madhu's",c:"İstanbul, Swissôtel The Bosphorus",tr:"İngiliz Kraliyet Sarayı davetlerine yemek hazırlayan Londra'daki ünlü Hint zincirinin yurt dışındaki ilk şubesi.",en:"The first overseas branch of the famous London Indian chain that caters royal palace receptions.",ptr:"Pahalı",pen:"Expensive"}],
 "th-0":[{n:"Çok Çok Thai",c:"İstanbul, Asmalı Mescit",tr:"2006'dan beri açık; Michelin Rehberi'nde yer alıyor. Tom yum kung menünün öne çıkan yemeklerinden.",en:"Open since 2006 and listed in the Michelin Guide. Tom yum kung is one of its standout dishes.",ptr:"Orta fiyat (₺₺)",pen:"Mid-range (₺₺)"},{n:"Pera Thai",c:"İstanbul, Şişhane",tr:"İstanbul'un en eski Tayland restoranı; Tayland Ticaret Bakanlığı'nın 'Thai Select' ödülünü almış. Acı seviyesi isteğe göre ayarlanıyor.",en:"Istanbul's oldest Thai restaurant, awarded 'Thai Select' by Thailand's Ministry of Commerce. Spice levels can be adjusted."}],
 "th-1":[{n:"Çok Çok Thai",c:"İstanbul, Asmalı Mescit",tr:"2006'dan beri açık; Michelin Rehberi'nde yer alıyor. Tom yum kung menünün öne çıkan yemeklerinden.",en:"Open since 2006 and listed in the Michelin Guide. Tom yum kung is one of its standout dishes.",ptr:"Orta fiyat (₺₺)",pen:"Mid-range (₺₺)"},{n:"Pera Thai",c:"İstanbul, Şişhane",tr:"İstanbul'un en eski Tayland restoranı; Tayland Ticaret Bakanlığı'nın 'Thai Select' ödülünü almış. Acı seviyesi isteğe göre ayarlanıyor.",en:"Istanbul's oldest Thai restaurant, awarded 'Thai Select' by Thailand's Ministry of Commerce. Spice levels can be adjusted."}],
 "kr-0":[{n:"Seorabeol Korean Restaurant",c:"İstanbul, Şişli (Esentepe)",tr:"İstanbul'da yaşayan Korelilerin akşamları gittiği bir restoran. Bulgogi bibimbap menünün gözdelerinden; fiyatları da uygun.",en:"A restaurant where Istanbul's Korean community goes in the evenings. Bulgogi bibimbap is a favourite, and prices are friendly.",ptr:"Uygun fiyat",pen:"Affordable"},{n:"Sopung",c:"İstanbul, Bakırköy",tr:"Bakırköy'de renkli Kore yemekleri sunan bir restoran; gimbap özellikle öneriliyor.",en:"A Bakırköy restaurant serving colourful Korean food; the gimbap is especially recommended."}],
 "kr-1":[{n:"Seorabeol Korean Restaurant",c:"İstanbul, Şişli (Esentepe)",tr:"İstanbul'da yaşayan Korelilerin akşamları gittiği bir restoran. Bulgogi bibimbap menünün gözdelerinden; fiyatları da uygun.",en:"A restaurant where Istanbul's Korean community goes in the evenings. Bulgogi bibimbap is a favourite, and prices are friendly.",ptr:"Uygun fiyat",pen:"Affordable"},{n:"Sopung",c:"İstanbul, Bakırköy",tr:"Bakırköy'de renkli Kore yemekleri sunan bir restoran; gimbap özellikle öneriliyor.",en:"A Bakırköy restaurant serving colourful Korean food; the gimbap is especially recommended."}],
 "es-0":[{n:"Que Tal Tapas Bar",c:"İstanbul",tr:"İspanyol müziği eşliğinde tapas bar; gazpacho ve paella özellikle öneriliyor, fiyatları uygun.",en:"A tapas bar with Spanish music in the background; gazpacho and paella are especially recommended, at friendly prices.",ptr:"Uygun fiyat",pen:"Affordable"}],
 "es-1":[{n:"Que Tal Tapas Bar",c:"İstanbul",tr:"İspanyol müziği eşliğinde tapas bar; gazpacho ve paella özellikle öneriliyor, fiyatları uygun.",en:"A tapas bar with Spanish music in the background; gazpacho and paella are especially recommended, at friendly prices.",ptr:"Uygun fiyat",pen:"Affordable"}],
};
const WHERE_NONE={
 tr:"Bu yemeğin tek bir ünlü restoranı yok; en iyisi evlerde, esnaf lokantalarında ya da sokak tezgâhlarında yapılır. Ülkesine giderseniz yerel halkın gittiği sıradan bir lokantada denemenizi öneririz.",
 en:"This dish has no single famous restaurant; it's at its best in homes, local canteens or street stalls. If you travel there, try it wherever the locals eat."
};

/* ---- Elimde ne var? / What's in my kitchen ---- */
const PANTRY_CATS=[
 {id:"veg",tr:"Sebze, meyve ve yeşillik",en:"Vegetables, fruit & herbs"},
 {id:"meat",tr:"Et, tavuk ve deniz ürünü",en:"Meat, poultry & seafood"},
 {id:"dairy",tr:"Süt ürünleri ve yumurta",en:"Dairy & eggs"},
 {id:"grain",tr:"Tahıl, bakliyat ve hamur",en:"Grains, pulses & doughs"},
 {id:"sweet",tr:"Kuruyemiş, tatlı ve içecek",en:"Nuts, sweet things & drinks"},
 {id:"sauce",tr:"Sos, baharat ve yağ",en:"Sauces, spices & oils"}
];
const PANTRY=[
 ["sogan","veg","🧅","Soğan","Onion"],["sarimsak","veg","🧄","Sarımsak","Garlic"],["domates","veg","🍅","Domates","Tomato"],
 ["patates","veg","🥔","Patates","Potato"],["havuc","veg","🥕","Havuç","Carrot"],["patlican","veg","🍆","Patlıcan","Aubergine"],
 ["biber","veg","🫑","Dolmalık / sivri biber","Sweet / green pepper"],["aci_biber","veg","🌶️","Acı biber (taze veya kuru)","Chilli (fresh or dried)"],
 ["salatalik","veg","🥒","Salatalık","Cucumber"],["ispanak","veg","🥬","Ispanak","Spinach"],["lahana","veg","🥬","Lahana","Cabbage"],
 ["kabak","veg","🥒","Kabak","Courgette"],["mantar","veg","🍄","Mantar","Mushrooms"],["avokado","veg","🥑","Avokado","Avocado"],
 ["fasulye_filizi","veg","🌱","Fasulye filizi","Bean sprouts"],["taze_fasulye","veg","🫛","Taze fasulye","Green beans"],
 ["yesil_sogan","veg","🌿","Yeşil soğan","Spring onion"],["maydanoz","veg","🌿","Maydanoz","Parsley"],["kisnis","veg","🌿","Kişniş","Coriander"],
 ["feslegen","veg","🌿","Fesleğen","Basil"],["otlar","veg","🌿","Kekik, defne veya biberiye","Thyme, bay or rosemary"],
 ["limon","veg","🍋","Limon veya lime","Lemon or lime"],["portakal","veg","🍊","Portakal","Orange"],["nar","veg","🔴","Nar","Pomegranate"],
 ["zencefil","veg","🫚","Zencefil (veya galangal)","Ginger (or galangal)"],["limon_otu","veg","🌾","Limon otu","Lemongrass"],
 ["tavuk","meat","🍗","Tavuk","Chicken"],["kiyma","meat","🥩","Kıyma","Minced meat"],["dana_eti","meat","🥩","Dana eti","Beef"],
 ["pastirma","meat","🥓","Pastırma, guanciale veya füme et","Guanciale, pancetta or smoked meat"],["karides","meat","🦐","Karides","Prawns"],
 ["yumurta","dairy","🥚","Yumurta","Eggs"],["sut","dairy","🥛","Süt","Milk"],["tereyagi","dairy","🧈","Tereyağı veya ghee","Butter or ghee"],
 ["yogurt","dairy","🥣","Yoğurt","Yoghurt"],["krema","dairy","🥛","Krema","Cream"],
 ["peynir_sert","dairy","🧀","Parmesan veya pecorino","Parmesan or pecorino"],["kasar","dairy","🧀","Kaşar, cheddar veya gruyère","Cheddar, Gruyère or melting cheese"],
 ["mozzarella","dairy","🧀","Mozzarella","Mozzarella"],["mascarpone","dairy","🧀","Mascarpone","Mascarpone"],
 ["un","grain","🌾","Un","Flour"],["maya","grain","🫧","Maya","Yeast"],["pirinc","grain","🍚","Pirinç","Rice"],["makarna","grain","🍝","Spagetti / makarna","Spaghetti / pasta"],
 ["ekmek","grain","🥖","Ekmek","Bread"],["tortilla","grain","🫓","Tortilla veya lavaş","Tortillas or lavash"],
 ["kirmizi_mercimek","grain","🟠","Kırmızı mercimek","Red lentils"],["sari_mercimek","grain","🟡","Sarı mercimek","Yellow lentils"],
 ["nohut","grain","🫘","Nohut","Chickpeas"],["kuru_fasulye","grain","🫘","Kuru beyaz fasulye","Dried white beans"],["bugday","grain","🌾","Aşurelik buğday","Hulled wheat"],
 ["pirinc_eristesi","grain","🍜","Pirinç eriştesi","Rice noodles"],["pirinc_keki","grain","⚪","Pirinç keki (tteok)","Rice cakes (tteok)"],
 ["kedi_dili","grain","🍪","Kedi dili bisküvi","Ladyfingers"],["tofu","grain","⬜","Tofu","Tofu"],
 ["yer_fistigi","sweet","🥜","Yer fıstığı","Peanuts"],["ceviz","sweet","🌰","Ceviz veya fındık","Walnuts or hazelnuts"],
 ["kuru_meyve","sweet","🍇","Kuru kayısı, incir veya üzüm","Dried apricots, figs or raisins"],["seker","sweet","🍬","Şeker","Sugar"],
 ["kakao","sweet","🍫","Kakao","Cocoa"],["kahve","sweet","☕","Kahve / espresso","Coffee / espresso"],
 ["salca","sauce","🥫","Domates salçası","Tomato paste"],["pul_biber","sauce","🌶️","Pul biber","Chilli flakes"],["toz_biber","sauce","🌶️","Toz kırmızı biber","Paprika / chilli powder"],
 ["kimyon","sauce","🟤","Kimyon","Cumin"],["zerdecal","sauce","🟡","Zerdeçal","Turmeric"],["garam_masala","sauce","🟤","Garam masala","Garam masala"],
 ["safran","sauce","🟠","Safran","Saffron"],["soya","sauce","🫙","Soya sosu","Soy sauce"],["mirin","sauce","🍶","Mirin","Mirin"],
 ["dashi","sauce","🍲","Dashi","Dashi"],["miso","sauce","🟫","Miso","Miso"],["yosun","sauce","🟩","Kuru yosun (wakame, gim)","Dried seaweed (wakame, gim)"],
 ["balik_sosu","sauce","🐟","Balık sosu","Fish sauce"],["demirhindi","sauce","🟤","Demirhindi","Tamarind"],["gochujang","sauce","🌶️","Gochujang","Gochujang"],
 ["susam_yagi","sauce","🟤","Susam yağı","Sesame oil"],["zeytinyagi","sauce","🫒","Zeytinyağı","Olive oil"],["sirke","sauce","🍶","Sirke","Vinegar"],
 ["nisasta","sauce","⚪","Nişasta","Cornflour"],["et_suyu","sauce","🍲","Et veya tavuk suyu","Stock (beef or chicken)"]
].map(([id,cat,e,tr,en])=>({id,cat,e,tr,en}));
const PANTRY_BY=Object.fromEntries(PANTRY.map(p=>[p.id,p]));
/* Her tarifin ana malzemeleri; dizi = "bunlardan biri yeter" */
const NEEDS={
 "tr-0":["kirmizi_mercimek","sogan","havuc","patates","un","salca","tereyagi","pul_biber","kimyon","limon"],
 "tr-1":["patlican",["kiyma","dana_eti"],"sogan","sarimsak","biber","domates","salca","maydanoz"],
 "tr-2":["bugday","nohut","kuru_fasulye","seker","kuru_meyve","portakal","ceviz","nar"],
 "it-0":["makarna","pastirma","yumurta","peynir_sert"],
 "it-1":["mascarpone","yumurta","seker","kedi_dili","kahve","kakao"],
 "it-2":["un","maya","domates",["mozzarella","kasar"],"feslegen","zeytinyagi"],
 "jp-0":["tavuk","sogan","yumurta","soya","mirin","seker","pirinc",["dashi","et_suyu"],"yesil_sogan"],
 "jp-1":["dashi","miso","tofu","yosun","yesil_sogan"],
 "mx-0":["avokado","limon","sogan","domates","aci_biber","kisnis"],
 "mx-1":["tortilla","tavuk","biber","sogan","kasar","kimyon","toz_biber"],
 "in-0":["tavuk","yogurt","garam_masala","zencefil","sarimsak","zerdecal","toz_biber","tereyagi","sogan","domates","krema"],
 "in-1":["sari_mercimek","zerdecal","sogan","domates","sarimsak","zencefil","kimyon","aci_biber","tereyagi"],
 "fr-0":["un","yumurta","sut","tereyagi","seker"],
 "fr-1":["sogan","tereyagi","un","et_suyu","otlar","ekmek","kasar"],
 "cn-0":["tavuk","nisasta","yer_fistigi","aci_biber","sarimsak","zencefil","yesil_sogan","soya","sirke","seker"],
 "cn-1":["un",["kiyma","dana_eti"],"lahana","yesil_sogan","zencefil","soya","susam_yagi"],
 "es-0":["tavuk","taze_fasulye","kuru_fasulye","domates","toz_biber","safran","pirinc","et_suyu","zeytinyagi","limon"],
 "es-1":["domates","salatalik","biber","sarimsak","ekmek","zeytinyagi","sirke"],
 "th-0":["pirinc_eristesi",["karides","tavuk"],"tofu","yumurta","fasulye_filizi","yesil_sogan","yer_fistigi","demirhindi","balik_sosu","sarimsak","limon"],
 "th-1":["karides","limon_otu","zencefil","mantar","balik_sosu","limon","aci_biber","kisnis"],
 "kr-0":["pirinc",["dana_eti","kiyma"],"ispanak","havuc","kabak","fasulye_filizi","mantar","yumurta","gochujang","susam_yagi","soya","sarimsak"],
 "kr-1":["pirinc_keki","dana_eti","yumurta","yesil_sogan","sarimsak","soya","yosun","susam_yagi"]
};

/* ---- i18n ---- */
const EN_ADJ={tr:"Turkish",it:"Italian",jp:"Japanese",mx:"Mexican",in:"Indian",fr:"French",cn:"Chinese",es:"Spanish",th:"Thai",kr:"Korean"};
let LANG="en"; /* site yalnızca İngilizce */
const T={
 tr:{docTitle:"Dünya Mutfağı — Tarifler ve Hikâyeleri",logo:"Dünya Mutfağı",searchLabel:"Tarif veya malzeme ara",searchPh:"Tarif veya malzeme ara: avokado, tavuk…",
  favTitle:"Favorilerim",favAria:"Sadece favorileri göster",sizeTitle:"Yazı ve görsel boyutu",themeTitle:"Tema seç",langTitle:"Switch to English",langLbl:"EN",
  heroH1:"Dünyanın mutfağı, senin tezgâhında",heroText:(n,m)=>`${n} ülkeden ${m} tarif ve arkalarındaki hikâyeler. Malzemeleri işaretle, pişirme modunda adım adım ilerle, zamanlayıcıyı kur ve takıldığın yerde videosunu izle.`,
  legH2:"Tarihe geçmiş yemekler",legP:"Bir kraliçenin adını taşıyan pizzadan mahkemelik olan tavuk yemeğine kadar, tabağın arkasındaki hikâyeler.",
  legendToggle:"📜 Hikâyesi ünlü olanlar",allLevels:"Tüm zorluklar",lvEasy:"Kolay",lvMed:"Orta",sortDefault:"Önerilen sıra",sortFast:"En hızlı önce",sortAz:"A'dan Z'ye",sortKcal:"Düşük kalori önce",kcal:"Kalori",kcalNote:"Kalori değerleri yaklaşıktır; malzemelere ve porsiyona göre değişebilir.",
  chipsAria:"Ülke filtresi",levelAria:"Zorluk",sortAria:"Sırala",
  footer:"Video düğmeleri YouTube'da o tarifin aramasını açar. Favorilerin ve işaretlediğin malzemeler bu tarayıcıda saklanır. Hikâyelerde efsane ile belgelenmiş bilgi ayrı tutulmuştur; efsaneler \"anlatılır\" diye geçer.",
  close:"Kapat",copyList:"Alışveriş listesini kopyala",addFav:"Favorilere ekle",cookMode:"Pişirme modu",exitCook:"Pişirme modundan çık",prev:"Önceki adım",next:"Sonraki adım",finish:"Bitir",
  all:"Tümü",count:(n,f)=>`${n} tarif gösteriliyor${f?" (favoriler)":""}`,noFavT:"Henüz favorin yok",noFavD:"Bir tarifin kalbine dokunarak favorilere ekle.",noResT:"Bu aramaya uyan tarif yok",noResD:"Filtreleri temizleyip tüm tariflere dön.",clearFilters:"Filtreleri temizle",
  openRecipe:x=>`${x} tarifini aç`,histBadge:"📜 Tarihi hikâye",readStory:"Hikâyesini oku",favRemoved:x=>`${x} favorilerden çıkarıldı`,favAdded:x=>`${x} favorilere eklendi`,
  changePhoto:"Fotoğrafı değiştir",addPhoto:"Fotoğraf ekle",revertPhoto:"Eski fotoğrafa dön",removePhoto:"Fotoğrafı kaldır",cuisine:c=>`${c.name} mutfağı`,
  time:"Süre",serves:"Porsiyon",level:"Zorluk",startCook:"Pişirme modunu başlat",watchYT:"YouTube'da izle",tabIng:n=>`Malzemeler (${n})`,tabSteps:"Yapılışı",tabStory:"Hikâyesi",tabWhere:"Nerede yenir?",whereWorld:"🌍 Doğduğu ülkede",noPrice:"Güvenilir fiyat bilgisi bulunamadı; menü ve fiyat için mekânı arayın",whereTR:"🇹🇷 Türkiye'de nerede yenir?",whereTRNote:"Bu mekânlar o ülkenin mutfağını sunuyor; tarifteki yemek her zaman menüde olmayabilir, gitmeden kontrol edin.",pTitle:"🧺 Elimde ne var?",pDesc:"Evdeki malzemeleri seç; hangi yemekleri yapabileceğini ve neyin eksik olduğunu gösterelim.",pSearch:"Malzeme ara: domates, tavuk…",pSearchLbl:"Malzeme ara",pSel:n=>`${n} malzeme seçildi`,pClear:"Seçimi temizle",pNote:"Tuz, karabiber, su ve sıvı yağ her mutfakta var sayılır.",pEmpty:"Yukarıdan elindeki malzemeleri seç; yapabileceğin yemekler burada listelenecek.",pNone:"Seçtiğin malzemelerle eşleşen tarif yok. Birkaç malzeme daha eklemeyi dene.",pHave:(a,b)=>`${b} malzemeden ${a} tanesi var`,pAll:"Hepsi var, hemen yapabilirsin! 🎉",pMissing:"Eksik:",pOr:"veya",pBtn:"Elimde ne var?",pNoMatch:"Aramana uyan malzeme yok.",pResTitle:n=>`Malzemelerinle eşleşen ${n} yemek (en uygundan başlayarak)`,openMap:"Haritada aç",whereNote:"Fiyatlar yaklaşıktır ve farklı yıllara ait kaynaklardan derlenmiştir; bugünkü fiyatlar daha yüksek olabilir. Çalışma saatleri ve durumlar da değişebilir; gitmeden önce güncel bilgilere bakın.",
  ready:(d,n)=>`${d}/${n} hazır`,clearChecks:"İşaretleri temizle",tip:"İpucu:",allReady:"Tüm malzemeler hazır, pişirmeye başlayabilirsin",
  shopTitle:x=>`${x} alışveriş listesi:`,copiedMissing:"Eksik malzemeler kopyalandı",copiedList:"Alışveriş listesi kopyalandı",copyFail:"Kopyalanamadı; listeyi elle seçebilirsin",
  stepOf:(a,b)=>`Adım ${a} / ${b}`,step:a=>`Adım ${a}`,timerStart:"Zamanlayıcıyı başlat",reset:"Sıfırla",resume:"Devam et",pause:"Duraklat",restart:"Yeniden başlat",timeUp:"Süre doldu",voiceOnL:"Sesli okuma açık",voiceAuto:"Otomatik (varsa kadın sesi)",femaleBtn:"♀ Kadın sesine yaklaştır",pitchLbl:"Ses tonu",pNormal:"Normal",pHigh:"İnce",pVeryHigh:"Çok ince",pLow:"Kalın",femaleOn:"Ses inceltildi; kadın sesine daha yakın duyulacak",femaleOff:"Ses tonu normale döndü",groupLang:"Türkçe sesler",groupAsia:"🌏 Asya dillerindeki sesler",groupOther:"Diğer sesler",voicePick:"Ses seç",asiaWarn:"Bu Asyalı ses Türkçe metni kendi dilinin aksanıyla okur; bazı kelimeler anlaşılmayabilir.",voiceSet:x=>`Ses: ${x}`,voiceOffL:"Sesli okuma kapalı",readAgain:"Tekrar oku",timeUpVoice:"Süre doldu! Bir sonraki adıma geçebilirsin.",noVoice:"Tarayıcın sesli okumayı desteklemiyor",voiceHint:"Adımlar artık sesli okunacak",enjoyVoice:"Tarif tamamlandı. Afiyet olsun!",
  up_too_large:"Dosya çok büyük; 20 MB'tan küçük bir fotoğraf seç",up_unsupported_type:"Bu dosya türü desteklenmiyor; JPG, PNG veya WebP seç",up_not_granted:"Fotoğraf eklemek için bu sayfayı düzenleme iznin olmalı",up_quota_or_state:"Fotoğraf alanı doldu; önce bir fotoğrafı kaldır",up_rate_limited:"Çok hızlı yükleme yapıldı; biraz bekleyip tekrar dene",
  pickImage:"Lütfen bir fotoğraf dosyası seç",uploading:"Fotoğraf yükleniyor…",photoAdded:"Fotoğraf eklendi",uploadFail:"Fotoğraf yüklenemedi; tekrar dene",photoRemoved:"Fotoğraf kaldırıldı",removeFail:"Fotoğraf kaldırılamadı; tekrar dene",
  sizes:["Küçük","Normal","Büyük","Çok büyük"],sizeToast:x=>`Sayfa boyutu: ${x}`,enjoy:"Afiyet olsun! 🎉",langSet:"Dil: Türkçe"},
 en:{docTitle:"World Kitchen — Recipes and Their Stories",logo:"World Kitchen",searchLabel:"Search recipes or ingredients",searchPh:"Search recipes or ingredients: avocado, chicken…",
  favTitle:"My favourites",favAria:"Show favourites only",sizeTitle:"Text and image size",themeTitle:"Choose theme",langTitle:"Language",langLbl:"EN",
  heroH1:"The world's kitchen, on your counter",heroText:(n,m)=>`${m} recipes from ${n} cuisines, and the stories behind them. Tick off ingredients, follow cooking mode step by step, set timers, and watch the video when you get stuck.`,
  legH2:"Dishes that made history",legP:"From a pizza named after a queen to a chicken dish that ended up in court: the stories behind the plate.",
  legendToggle:"📜 Famous stories",allLevels:"All levels",lvEasy:"Easy",lvMed:"Medium",sortDefault:"Recommended",sortFast:"Quickest first",sortAz:"A to Z",sortKcal:"Lowest calories first",kcal:"Calories",kcalNote:"Calorie values are approximate and vary with ingredients and portion size.",
  chipsAria:"Country filter",levelAria:"Difficulty",sortAria:"Sort",
  footer:"Video buttons open a YouTube search for that recipe. Your favourites and ticked ingredients are saved in this browser. The stories keep legend apart from documented fact; legends are introduced with \"the story goes\" or \"it is said\".",
  close:"Close",copyList:"Copy shopping list",addFav:"Add to favourites",cookMode:"Cooking mode",exitCook:"Exit cooking mode",prev:"Previous step",next:"Next step",finish:"Finish",
  all:"All",count:(n,f)=>`Showing ${n} recipe${n===1?"":"s"}${f?" (favourites)":""}`,noFavT:"No favourites yet",noFavD:"Tap the heart on a recipe to add it to your favourites.",noResT:"No recipes match this search",noResD:"Clear the filters to see every recipe.",clearFilters:"Clear filters",
  openRecipe:x=>`Open the ${x} recipe`,histBadge:"📜 Historic story",readStory:"Read the story",favRemoved:x=>`${x} removed from favourites`,favAdded:x=>`${x} added to favourites`,
  changePhoto:"Change photo",addPhoto:"Add photo",revertPhoto:"Restore original photo",removePhoto:"Remove photo",cuisine:c=>`${EN_ADJ[c.id]||(EN_COUNTRY[c.id]&&EN_COUNTRY[c.id].adj)||CN(c)} cuisine`,
  time:"Time",serves:"Portions",level:"Difficulty",startCook:"Start cooking mode",watchYT:"Watch on YouTube",tabIng:n=>`Ingredients (${n})`,tabSteps:"Method",tabStory:"Story",tabWhere:"Where to eat",whereWorld:"🌍 In its home country",noPrice:"No reliable price found; contact the restaurant for menu and prices",whereTR:"🇹🇷 Where to eat it in Türkiye",whereTRNote:"These places serve that country's cuisine; this exact dish may not always be on the menu, so check before you go.",pTitle:"🧺 What's in my kitchen?",pDesc:"Pick what you have at home and we'll show which dishes you can make and what's missing.",pSearch:"Search ingredients: tomato, chicken…",pSearchLbl:"Search ingredients",pSel:n=>`${n} ingredient${n===1?"":"s"} selected`,pClear:"Clear selection",pNote:"Salt, pepper, water and cooking oil are assumed to be in every kitchen.",pEmpty:"Pick the ingredients you have above; the dishes you can make will be listed here.",pNone:"No recipes match your ingredients. Try adding a few more.",pHave:(a,b)=>`You have ${a} of ${b} ingredients`,pAll:"You have everything, start cooking! 🎉",pMissing:"Missing:",pOr:"or",pBtn:"What's in my kitchen?",pNoMatch:"No ingredients match your search.",pResTitle:n=>`${n} matching dish${n===1?"":"es"} (best match first)`,openMap:"Open in Maps",whereNote:"Prices are approximate and gathered from sources of different years; today's prices may be higher. Opening hours and status can change too; check before you go.",
  ready:(d,n)=>`${d}/${n} ready`,clearChecks:"Clear ticks",tip:"Tip:",allReady:"All ingredients ready, time to start cooking",
  shopTitle:x=>`${x} shopping list:`,copiedMissing:"Missing ingredients copied",copiedList:"Shopping list copied",copyFail:"Couldn't copy; you can select the list by hand",
  stepOf:(a,b)=>`Step ${a} of ${b}`,step:a=>`Step ${a}`,timerStart:"Start timer",reset:"Reset",resume:"Resume",pause:"Pause",restart:"Restart",timeUp:"Time's up",voiceOnL:"Read aloud on",voiceAuto:"Automatic (female if available)",femaleBtn:"♀ Make it sound female",pitchLbl:"Pitch",pNormal:"Normal",pHigh:"Higher",pVeryHigh:"Very high",pLow:"Lower",femaleOn:"Pitch raised; the voice will sound closer to a female voice",femaleOff:"Pitch back to normal",groupLang:"English voices",groupAsia:"🌏 Voices in Asian languages",groupOther:"Other voices",voicePick:"Choose voice",asiaWarn:"This Asian voice reads English with its own language's accent; some words may be hard to follow.",voiceSet:x=>`Voice: ${x}`,voiceOffL:"Read aloud off",readAgain:"Read again",timeUpVoice:"Time's up! You can move on to the next step.",noVoice:"Your browser doesn't support reading aloud",voiceHint:"Steps will now be read aloud",enjoyVoice:"Recipe finished. Enjoy your meal!",
  up_too_large:"File too large; choose a photo under 20 MB",up_unsupported_type:"File type not supported; choose a JPG, PNG or WebP",up_not_granted:"You need edit access to this page to add photos",up_quota_or_state:"Photo storage is full; remove a photo first",up_rate_limited:"Too many uploads at once; wait a moment and try again",
  pickImage:"Please choose an image file",uploading:"Uploading photo…",photoAdded:"Photo added",uploadFail:"Photo couldn't be uploaded; try again",photoRemoved:"Photo removed",removeFail:"Photo couldn't be removed; try again",
  sizes:["Small","Normal","Large","Extra large"],sizeToast:x=>`Page size: ${x}`,enjoy:"Enjoy your meal! 🎉",langSet:"Language: English"}
};
const t=(k,...a)=>{const v=(T[LANG][k]!==undefined?T[LANG][k]:T.tr[k]);return typeof v==="function"?v(...a):v};
const L=(r,f)=>LANG==="en"&&r.en&&r.en[f]!=null?r.en[f]:r[f];
const CN=c=>LANG==="en"&&EN_COUNTRY[c.id]?EN_COUNTRY[c.id].name:c.name;
const LV=l=>LANG==="en"?(EN_LEVEL[l]||l):l;
function applyStatic(){
  document.documentElement.lang=LANG;document.title=t("docTitle");
  const q=s=>document.querySelector(s);
  const txt=(s,k)=>{const e=q(s);if(e)e.textContent=t(k)};
  const att=(s,a,k)=>{const e=q(s);if(e)e.setAttribute(a,t(k))};
  $("logoName").textContent=t("logo");$("logoTag").textContent=LANG==="en"?"Recipe Atlas":"Tarif Atlası";
  txt(".search .sr","searchLabel");att("#q","placeholder","searchPh");
  att("#favToggle","title","favTitle");att("#favToggle","aria-label","favAria");
  att("#sizeBtn","title","sizeTitle");att("#sizeBtn","aria-label","sizeTitle");
  att("#themeBtn","title","themeTitle");att("#themeBtn","aria-label","themeTitle");
  att("#langBtn","title","langTitle");att("#pantryBtn","title","pBtn");att("#pantryBtn","aria-label","pBtn");att("#langBtn","aria-label","langTitle");txt("#langLbl","langLbl");
  {const h=q(".hero h1");if(h){const v=t("heroH1"),i=v.indexOf(",");h.innerHTML=i>0?`<span class="h-l1">${esc(v.slice(0,i+1))}</span><span class="h-l2">${esc(v.slice(i+1).trim())}<i class="h-dot">.</i></span>`:esc(v)}
   const rt=q("#hbRingTxt");if(rt)rt.textContent=LANG==="en"?`WORLD KITCHEN • RECIPE ATLAS • ${DATA.length} CUISINES • ${RECIPES.length} RECIPES •`:`DÜNYA MUTFAĞI • TARİF ATLASI • ${DATA.length} ÜLKE • ${RECIPES.length} TARİF •`;
   const ey=q("#heroEye");if(ey)ey.innerHTML=`<span>${LANG==="en"?"Recipe atlas":"Tarif atlası"}</span><b></b><span>${DATA.length} ${LANG==="en"?"cuisines":"ülke"} / ${RECIPES.length} ${LANG==="en"?"recipes":"tarif"}</span>`}txt("#legends h2","legH2");txt("#legends > p","legP");txt("#legendToggle","legendToggle");
  const lo=document.querySelectorAll("#level option");["allLevels","lvEasy","lvMed"].forEach((k,i)=>lo[i]&&(lo[i].textContent=t(k)));
  const so=document.querySelectorAll("#sort option");["sortDefault","sortFast","sortAz","sortKcal"].forEach((k,i)=>so[i]&&(so[i].textContent=t(k)));
  att("#chips","aria-label","chipsAria");att("#level","aria-label","levelAria");att("#sort","aria-label","sortAria");
  txt("footer .wrap","footer");
  att("#closeSheet","aria-label","close");att("#shareBtn","aria-label","copyList");att("#shareBtn","title","copyList");att("#sheetFav","aria-label","addFav");
  att("#cook","aria-label","cookMode");att("#closeCook","aria-label","exitCook");txt("#prevStep","prev");
}
function setLang(l){l="en";/* site yalnızca İngilizce */LANG=l;store.set("bm-lang",l);applyStatic();if(typeof mdbStatic==="function")mdbStatic();if(typeof whStatic==="function"){whStatic();if(!$("whModal").hidden&&!WH.spinning){whFilters();WH.stage==="dish"&&WH.country?whDishStage(WH.country):whCountryStage()}}if(typeof voiceStatic==="function")voiceStatic();if(typeof mnavUpdate==="function")mnavUpdate();if(typeof aiStatic==="function"){aiStatic();if(!$("aiPanel").hidden){aiRender();aiRenderSugs()}}renderHero();renderChips();refresh();if(typeof updateUserBtn==="function")updateUserBtn();toast(t("langSet"))}

/* ---- Türkiye: 10 yeni tarif ---- */
PANTRY.push(
 {id:"asma_yapragi",cat:"veg",e:"🍃",tr:"Asma yaprağı",en:"Vine leaves"},
 {id:"nane",cat:"sauce",e:"🌿",tr:"Kuru nane",en:"Dried mint"},
 {id:"bulgur",cat:"grain",e:"🌾",tr:"Bulgur",en:"Bulgur"},
 {id:"yufka",cat:"grain",e:"🫓",tr:"Baklava yufkası",en:"Filo pastry"},
 {id:"antep_fistigi",cat:"sweet",e:"🟢",tr:"Antep fıstığı",en:"Pistachios"}
);
PANTRY.forEach(p=>PANTRY_BY[p.id]=p);
DATA[0].recipes.push(
{title:"İskender Kebap",emoji:"🥙",mins:45,time:"45 dk",serves:"4 kişilik",level:"Orta",legend:true,
 desc:"Pide üzerinde ince kesilmiş et, domates sosu, kızgın tereyağı ve yoğurt.",yt:"iskender kebap tarifi evde",
 ing:["500 g dana antrikot veya bonfile (çok ince dilimlenmiş)","4 adet pide veya tırnaklı ekmek","2 yemek kaşığı domates salçası","2 adet rendelenmiş domates","100 g tereyağı","2 su bardağı yoğurt","4 adet sivri biber","1 adet soğan (marine için rendelenmiş)","Tuz, karabiber"],
 steps:["Eti rendelenmiş soğanın suyu, tuz ve karabiberle 30 dakika marine edin.","Pideleri küp kesip tabakların dibine yayın, fırında hafifçe ısıtın.","Tavada 1 kaşık tereyağında salça ve rendelenmiş domatesi 5 dakika pişirip su ekleyerek sulu bir sos yapın.","Eti çok kızgın tavada birkaç parti halinde 1–2 dakika hızlıca soteleyin.","Sosun yarısını pidelerin üzerine gezdirin, eti dizin, kalan sosu dökün.","Biberleri közleyip yanına koyun, yoğurdu kenara ekleyin.","Kalan tereyağını köpürene kadar kızdırıp masada etin üzerine gezdirin."],
 tip:"Eti yarı dondurulmuş haldeyken keserseniz kâğıt inceliğinde dilimler elde edersiniz.",
 story:"İskender kebabın hikâyesi 1867'de Bursa'da başlar. İskender Efendi'nin, kuzuyu yatay şişte değil dikey şişte, közün karşısında pişirme fikriyle bugünkü dönerin atası sayılan yöntemi geliştirdiği anlatılır. Ailesinin işlettiği Kebapçı İskender hâlâ Bursa'da açık ve 'İskender' adı ailenin tescilli markası. Bu yüzden başka yerlerde aynı yemek çoğu zaman 'Bursa kebabı' gibi isimlerle satılır."},
{title:"Mantı",emoji:"🥟",mins:90,time:"90 dk",serves:"4 kişilik",level:"Orta",legend:true,
 desc:"Minik kıymalı hamur bohçaları, sarımsaklı yoğurt ve biberli tereyağıyla.",yt:"kayseri mantısı tarifi",
 ing:["3 su bardağı un","1 adet yumurta","1 su bardağı ılık su","250 g kıyma","1 adet küçük soğan (rendelenmiş)","2 su bardağı yoğurt","2 diş sarımsak","3 yemek kaşığı tereyağı","1 yemek kaşığı salça (isteğe bağlı)","Pul biber, kuru nane, tuz, karabiber"],
 steps:["Un, yumurta, tuz ve suyu sert bir hamur olana kadar yoğurun; üzerini örtüp 30 dakika dinlendirin.","Kıymayı rendelenmiş soğan, tuz ve karabiberle yoğurun.","Hamuru ince açıp 2–3 cm'lik kareler kesin.","Her karenin ortasına nohut büyüklüğünde iç koyup dört köşesini birleştirerek kapatın.","Mantıları kaynayan tuzlu suda yüzeye çıkıp yumuşayana kadar 10–12 dakika haşlayın.","Süzüp tabaklara alın, sarımsaklı yoğurdu üzerine dökün.","Tereyağını pul biber ve istenirse salçayla kızdırıp üzerine gezdirin, nane serpin."],
 tip:"Bol yapıp tepside kurutursanız aylarca saklayabilirsiniz; kuru mantıyı haşlarken süreyi biraz uzatın.",
 story:"Mantının Orta Asya'dan Türklerle birlikte Anadolu'ya geldiği kabul edilir. En ünlüsü Kayseri mantısıdır ve Kayseri geleneğine göre iyi mantı öylesine küçük olmalıdır ki bir kaşığa 40 tane sığsın. Eskiden kız isteme ya da gelin görmeye giden kaynanaların, müstakbel gelinin hünerini mantısının inceliğine bakarak ölçtüğü anlatılır."},
{title:"Hünkâr Beğendi",emoji:"🍖",mins:100,time:"100 dk",serves:"4 kişilik",level:"Orta",legend:true,
 desc:"Közlenmiş patlıcanlı, peynirli beğendi üzerinde yumuşacık et yahnisi.",yt:"hünkar beğendi tarifi",
 ing:["500 g kuşbaşı kuzu veya dana eti","1 adet soğan","2 adet domates","1 yemek kaşığı salça","4 adet büyük patlıcan","2 yemek kaşığı tereyağı","2 yemek kaşığı un","2 su bardağı süt","1 avuç rendelenmiş kaşar","Tuz, karabiber, sıcak su"],
 steps:["Eti tencerede kendi suyunu salıp çekene kadar kavurun, doğranmış soğanı ekleyip pembeleştirin.","Salça ve rendelenmiş domatesi ekleyin, üzerini geçecek kadar sıcak su koyup kısık ateşte et yumuşayana kadar 60–70 dakika pişirin.","Patlıcanları ocak ateşinde ya da fırında her yanı yumuşayana kadar közleyin, kabuklarını soyup limonlu suda bekletin ve ince kıyın.","Tereyağında unu kokusu çıkana kadar kavurun, sütü azar azar ekleyip koyu bir beşamel yapın.","Patlıcanları beşamele katıp 5 dakika karıştırarak pişirin; kaşarı ve tuzu ekleyin.","Beğendiyi tabağa yayın, ortasına eti sosuyla birlikte koyun."],
 tip:"Patlıcanın dumanlı tadı beğendinin ruhudur; mümkünse ocak ateşinde közleyin.",
 story:"Adı 'sultanın beğendiği' anlamına gelir. En bilinen anlatıya göre 1869'da Fransa İmparatoriçesi Eugénie, Sultan Abdülaziz'in konuğu olarak İstanbul'a geldiğinde ziyafette sunulan bu patlıcanlı beğendiyi çok beğenmiş ve yemeğin adı böyle konmuş. Tarifi soran imparatoriçeye aşçıbaşının tarif değil 'imparatoriçenin aşçısının bir sultan mutfağında yetişmesi gerektiğini' söylediği de anlatılır. Bunlar belgeden çok hikâyedir, ama yemek bugün Osmanlı mutfağının simgelerinden biri."},
{title:"Ezogelin Çorbası",emoji:"🥣",mins:40,time:"40 dk",serves:"6 kişilik",level:"Kolay",legend:true,
 desc:"Kırmızı mercimek, bulgur ve pirinçle yapılan naneli, pul biberli çorba.",yt:"ezogelin çorbası tarifi",
 ing:["1 su bardağı kırmızı mercimek","2 yemek kaşığı pirinç","2 yemek kaşığı ince bulgur","1 adet soğan","1 yemek kaşığı domates salçası","1 yemek kaşığı biber salçası","2 yemek kaşığı tereyağı","7 su bardağı sıcak su veya et suyu","1 yemek kaşığı kuru nane","1 çay kaşığı pul biber, tuz"],
 steps:["Mercimek, pirinç ve bulguru yıkayıp süzün.","Tereyağında ince doğranmış soğanı pembeleştirin, salçaları ekleyip 2 dakika kavurun.","Mercimek, pirinç, bulgur ve sıcak suyu ekleyip kısık ateşte 30 dakika pişirin.","Tuzunu ayarlayın; çorba koyulaşırsa biraz sıcak su ekleyin. Ezogelin blenderdan geçirilmez, taneli kalır.","Bir kaşık tereyağında naneyi ve pul biberi birkaç saniye kızdırıp çorbanın üzerine gezdirin."],
 tip:"Limon sıkıp yanında turp veya taze soğanla servis etmek Antep usulüdür.",
 story:"Çorba adını, Gaziantep'in Dokuzyol köyünde yaşamış olan Zöhre'den, yani 'Ezo Gelin'den alır. Güzelliğiyle bölgede ün salan Ezo Gelin'in hayatı talihsiz evliliklerle geçti; hikâyesi türkülere ve filmlere konu oldu. Gurbete gelin gittiğinde kaynanasının gönlünü kazanmak için bu çorbayı pişirdiği anlatılır. Bugün Türkiye'nin her lokantasında bulunan bu çorba, onun adını yaşatıyor."},
{title:"Baklava",emoji:"🍯",mins:90,time:"90 dk + dinlenme",serves:"1 tepsi (≈ 30 dilim)",level:"Orta",legend:true,
 desc:"İncecik yufka katları, bol Antep fıstığı, tereyağı ve şerbet.",yt:"hazır yufkadan baklava tarifi",
 ing:["500 g hazır baklava yufkası","250 g tereyağı (eritilmiş)","250 g Antep fıstığı (iri çekilmiş)","3 su bardağı toz şeker","2,5 su bardağı su","Birkaç damla limon suyu"],
 steps:["Şerbet için şeker ve suyu kaynatın, 10 dakika pişirip limon damlatın ve tamamen soğumaya bırakın.","Tepsiyi yağlayın; yufkaları tek tek, her birinin arasına fırçayla tereyağı sürerek yarısı bitene kadar dizin.","Fıstığı eşit şekilde serpin, kalan yufkaları aynı şekilde yağlayarak dizin.","Keskin bir bıçakla baklava dilimi şeklinde kesin, kalan tereyağını üzerine gezdirin.","170°C fırında üzeri altın rengi olana kadar 45–50 dakika pişirin.","Sıcak baklavanın üzerine soğuk şerbeti dökün ve en az 3 saat dinlendirin."],
 tip:"Kural basit: sıcak baklavaya soğuk şerbet. İkisi de sıcak olursa baklava hamurlaşır.",
 story:"Osmanlı sarayında Ramazan'ın 15. günü 'Baklava Alayı' düzenlenirdi: Topkapı Sarayı mutfağında pişen baklavalar tepsilere konup yeniçerilere dağıtılır, tepsiler törenle kışlalara taşınırdı. Bugün baklavanın başkenti sayılan Gaziantep'in Antep baklavası, 2013'te Avrupa Birliği'nde coğrafi işaret alan ilk Türk ürünü oldu."},
{title:"Türk Kahvesi",emoji:"☕",mins:10,time:"10 dk",serves:"2 fincan",level:"Kolay",legend:true,
 desc:"Cezvede, köpüğüyle pişen koyu ve telvesiyle içilen kahve.",yt:"türk kahvesi nasıl yapılır köpüklü",
 ing:["2 tatlı kaşığı (tepeleme) Türk kahvesi","2 kahve fincanı soğuk su","Tercihe göre şeker (az, orta veya şekerli)","Yanına su ve lokum"],
 steps:["Suyu kahve fincanıyla ölçüp cezveye koyun.","Kahveyi ve istenirse şekeri ekleyip iyice karıştırın.","Cezveyi kısık ateşe koyun ve bir daha karıştırmayın.","Kahve kabarıp köpürmeye başlayınca köpüğü kaşıkla fincanlara paylaştırın.","Cezveyi tekrar ateşe koyup ikinci kez kabarınca kahveyi fincanlara yavaşça dökün.","Telvenin dibe çökmesi için bir dakika bekleyin; yanında bir bardak su ve lokumla servis edin."],
 tip:"Kahveyi yüksek ateşte pişirirseniz köpüğü kaçar; sabırla, kısık ateşte pişirin.",
 story:"Kahve İstanbul'a 16. yüzyılda geldi. Şehrin ilk kahvehanesinin 1555'te Tahtakale'de, Şam ve Halep'ten gelen iki tüccar tarafından açıldığı anlatılır. Cezvede pişirilen, telvesiyle içilen bu kahve 'Bir fincan kahvenin kırk yıl hatırı vardır' sözüyle dostluğun simgesi oldu. Kız isteme geleneğinde gelin adayının damada tuzlu kahve yapması hâlâ sürüyor. Türk kahvesi kültürü ve geleneği 2013'te UNESCO Somut Olmayan Kültürel Miras listesine alındı."},
{title:"Keşkek",emoji:"🌾",mins:180,time:"3 saat + 1 gece ıslatma",serves:"8 kişilik",level:"Orta",legend:true,
 desc:"Buğday ve etin saatlerce pişip tokmakla dövüldüğü düğün ve bayram yemeği.",yt:"keşkek tarifi",
 ing:["2 su bardağı aşurelik (kabuksuz) buğday","500 g kemikli kuzu veya tavuk eti","8 su bardağı su","100 g tereyağı","1 tatlı kaşığı pul biber","Tuz"],
 steps:["Buğdayı bir gece önceden bol suda ıslatın.","Eti suyla birlikte haşlayıp köpüğünü alın; yumuşayınca çıkarıp kemiklerinden ayırın ve didin.","Buğdayı et suyunda kısık ateşte, ara ara karıştırarak iyice yumuşayıp dağılana kadar yaklaşık 2 saat pişirin.","Didilmiş eti ve tuzu ekleyin.","Tahta kaşık ya da tokmakla, buğday ve et birbirine karışıp lapa kıvamına gelene kadar dövün.","Servis tabağına alın, pul biberle kızdırılmış tereyağını üzerine gezdirin."],
 tip:"Düdüklü tencerede buğdayı pişirme süresini yarıya indirebilirsiniz.",
 story:"Keşkek Anadolu'da düğünlerde, bayramlarda, hayır yemeklerinde ve yağmur dualarında pişirilen bir imece yemeğidir. Buğday bir gün önceden köyün kadınları tarafından hazırlanır, kazanlar gece boyunca kaynar ve ertesi gün köyün gençleri tokmaklarla keşkeği döver; bu sırada davul zurna çalınır. Bu tören ve yemek, 2011'de 'Keşkek geleneği' adıyla UNESCO Somut Olmayan Kültürel Miras listesine alındı."},
{title:"Menemen",emoji:"🍳",mins:20,time:"20 dk",serves:"2 kişilik",level:"Kolay",legend:false,
 desc:"Domates, biber ve yumurtanın tavada buluştuğu klasik kahvaltı yemeği.",yt:"menemen tarifi",
 ing:["3 adet olgun domates","3 adet sivri veya çarliston biber","3 adet yumurta","1 adet küçük soğan (isteğe bağlı)","2 yemek kaşığı tereyağı veya zeytinyağı","Tuz, karabiber, pul biber"],
 steps:["Biberleri ince doğrayın, domatesleri rendeleyin ya da küp doğrayın.","Tavada yağı ısıtıp (kullanıyorsanız soğanı ve) biberleri 3–4 dakika soteleyin.","Domatesleri ekleyip suyunu biraz çekene kadar 5 dakika pişirin; tuz ve baharatları ekleyin.","Yumurtaları kırın ve çok karıştırmadan, yarı akışkan kalacak şekilde 2 dakika pişirin.","Tavada, yanında taze ekmekle servis edin."],
 tip:"Yumurtayı sona bırakın ve ateşten erken alın; tavanın sıcaklığı pişirmeye devam eder.",
 story:"Adının İzmir'in Menemen ilçesinden geldiği yaygın bir görüştür. Ama menemen asıl ünlü tartışmasıyla bilinir: soğanlı mı olur, soğansız mı? Bu soru Türkiye'de sosyal medyada anketlere, televizyon programlarına ve aile sofralarında bitmeyen tartışmalara konu olur. Tarifte soğanı isteğe bağlı bıraktık; karar sizin."},
{title:"Zeytinyağlı Yaprak Sarma",emoji:"🍃",mins:100,time:"100 dk + soğuma",serves:"6 kişilik",level:"Orta",legend:false,
 desc:"Pirinç, soğan ve baharatlı iç harcın asma yaprağına sarıldığı zeytinyağlı.",yt:"zeytinyağlı yaprak sarma tarifi",
 ing:["250 g salamura asma yaprağı","1,5 su bardağı pirinç","3 adet soğan","1 çay bardağı zeytinyağı","2 yemek kaşığı dolmalık fıstık","2 yemek kaşığı kuş üzümü","1 tatlı kaşığı kuru nane, yarım tatlı kaşığı tarçın, yenibahar","1 tatlı kaşığı şeker","1 adet limon","Tuz, sıcak su"],
 steps:["Yaprakları sıcak suda 10 dakika bekletip tuzunu alın, saplarını kesin.","Zeytinyağında ince doğranmış soğanı ve fıstığı kavurun; yıkanmış pirinci ekleyip 3 dakika çevirin.","Kuş üzümü, baharatlar, şeker, tuz ve yarım bardak sıcak su ekleyip pirinç suyunu çekene kadar pişirin; soğumaya bırakın.","Yaprağın mat yüzüne bir çay kaşığı iç koyup kenarlarını içe katlayarak sıkıca sarın.","Tencerenin dibine birkaç yaprak serip sarmaları dizin, üzerine limon dilimleri ve bir tabak kapatın.","Sarmaların üstünü geçecek kadar sıcak su ekleyip kısık ateşte 45–50 dakika pişirin; tencerede soğumaya bırakın."],
 tip:"Zeytinyağlı sarma tencerede soğuyunca demlenir; ertesi gün daha lezzetli olur.",
 story:"Dolma 'doldurmak' fiilinden, sarma 'sarmak' fiilinden gelir; Osmanlı saray mutfağında onlarca çeşidi yapılırdı. Etsiz, zeytinyağlı olanlara bu yüzden halk arasında 'yalancı dolma' denir: görünüşü etli dolma gibi, ama içinde et yoktur. Zeytinyağlılar Türk sofrasında soğuk yenen ayrı bir yemek grubu olarak bugün de ayrıcalıklı yerini korur."},
{title:"Fırın Sütlaç",emoji:"🍮",mins:60,time:"60 dk + soğuma",serves:"6 kase",level:"Kolay",legend:false,
 desc:"Pirinçli sütlü tatlının üzeri fırında kızartılmış hali.",yt:"fırın sütlaç tarifi",
 ing:["1 litre süt","Yarım su bardağı pirinç","1 su bardağı su","1 su bardağı toz şeker","2 yemek kaşığı pirinç unu veya nişasta","1 paket vanilin (isteğe bağlı)","Üzeri için tarçın"],
 steps:["Pirinci suyla, suyunu çekip yumuşayana kadar 15 dakika haşlayın.","Sütü ekleyip kaynamaya bırakın, şekeri ilave edin.","Pirinç ununu yarım bardak soğuk sütle açıp karıştırarak tencereye ekleyin; kıvam alana kadar 10 dakika pişirin.","Vanilini ekleyip fırına dayanıklı kaselere paylaştırın.","Kaseleri su dolu bir tepsiye dizin; fırının üst ızgarasında üzeri kızarana kadar 15–20 dakika pişirin.","Oda sıcaklığında soğuyunca buzdolabına kaldırın, tarçınla servis edin."],
 tip:"Tepsiye su koymak sütlacın alttan pişip kesilmesini önler, sadece üstü kızarır.",
 story:"Sütlaç Osmanlı saray mutfağının sütlü tatlılarındandır ve 'sütlü aş' sözünden türediği düşünülür. İstanbul'da sütlü tatlılar uzun süre muhallebicilerin işiydi; 20. yüzyılın başında şehrin muhallebicilik ve dondurma geleneğinde Balkanlardan, özellikle Arnavutluk ve Makedonya'dan gelen ustaların büyük payı vardı. Üzerini fırında kızartma alışkanlığı sonradan yayıldı ve bugün 'fırın sütlaç' ayrı bir klasik sayılıyor."}
);
Object.assign(EN_RECIPES,{
"İskender Kebap":{title:"İskender Kebab",time:"45 min",serves:"4 people",yt:"iskender kebab recipe",desc:"Thinly sliced meat over pide with tomato sauce, sizzling butter and yoghurt.",
 ing:["500 g beef sirloin or tenderloin, sliced very thin","4 pide or flatbreads","2 tbsp tomato paste","2 grated tomatoes","100 g butter","2 cups yoghurt","4 long green peppers","1 onion (grated, for the marinade)","Salt, black pepper"],
 steps:["Marinate the meat for 30 minutes with the juice of the grated onion, salt and pepper.","Cube the bread, spread it over the plates and warm it briefly in the oven.","Cook the tomato paste and grated tomato in 1 tbsp butter for 5 minutes, then add water to make a loose sauce.","Sear the meat in batches in a very hot pan for 1–2 minutes.","Pour half the sauce over the bread, lay the meat on top and pour over the rest of the sauce.","Char the peppers and add them to the plate with the yoghurt on the side.","Heat the remaining butter until foaming and pour it over the meat at the table."],
 tip:"Slice the meat while it's half-frozen and you'll get paper-thin slices.",
 story:"The story of İskender kebab begins in Bursa in 1867. İskender Efendi is said to have developed the method now seen as the ancestor of döner: roasting lamb on a vertical rather than horizontal spit, facing the embers. His family's restaurant, Kebapçı İskender, is still open in Bursa, and 'İskender' is the family's registered trademark, which is why elsewhere the dish is often sold under names like 'Bursa kebab'."},
"Mantı":{title:"Mantı (Turkish Dumplings)",time:"90 min",serves:"4 people",yt:"turkish manti recipe",desc:"Tiny dumplings filled with minced meat, served with garlic yoghurt and chilli butter.",
 ing:["3 cups flour","1 egg","1 cup lukewarm water","250 g minced meat","1 small onion, grated","2 cups yoghurt","2 garlic cloves","3 tbsp butter","1 tbsp tomato paste (optional)","Chilli flakes, dried mint, salt, black pepper"],
 steps:["Knead the flour, egg, salt and water into a firm dough; cover and rest for 30 minutes.","Mix the mince with the grated onion, salt and pepper.","Roll the dough out thinly and cut it into 2–3 cm squares.","Put a chickpea-sized piece of filling in the middle of each square and pinch the four corners together.","Boil the dumplings in salted water until they float and are tender, 10–12 minutes.","Drain onto plates and pour over the garlic yoghurt.","Sizzle the butter with chilli flakes (and tomato paste, if using), drizzle over and sprinkle with mint."],
 tip:"Make a big batch and dry them on trays to keep for months; cook dried mantı a little longer.",
 story:"Mantı is believed to have come to Anatolia from Central Asia with the Turks. The most famous is Kayseri mantı, and Kayseri tradition says good mantı should be so small that 40 fit on one spoon. It is said that mothers-in-law once judged a prospective bride's skill by how tiny her mantı were."},
"Hünkâr Beğendi":{title:"Hünkâr Beğendi (Sultan's Delight)",time:"100 min",serves:"4 people",yt:"hunkar begendi recipe",desc:"Tender meat stew on a smoky aubergine and cheese purée.",
 ing:["500 g diced lamb or beef","1 onion","2 tomatoes","1 tbsp tomato paste","4 large aubergines","2 tbsp butter","2 tbsp flour","2 cups milk","A handful of grated kaşar or other melting cheese","Salt, black pepper, hot water"],
 steps:["Cook the meat in a pot until it releases and reabsorbs its juices, then add the chopped onion and soften.","Add the tomato paste and grated tomato, cover with hot water and simmer until tender, 60–70 minutes.","Char the aubergines over a flame or in the oven until soft all over, peel, soak in lemony water and chop finely.","Cook the flour in the butter until toasty, then whisk in the milk gradually to make a thick béchamel.","Stir the aubergine into the béchamel and cook for 5 minutes; add the cheese and salt.","Spread the purée on a plate and spoon the meat and its sauce into the middle."],
 tip:"The smoky taste of the aubergine is the soul of the dish; char it over an open flame if you can.",
 story:"The name means 'the sultan liked it'. The best-known story says that when Empress Eugénie of France visited Istanbul as Sultan Abdülaziz's guest in 1869, she loved this aubergine purée served at a banquet, and the dish got its name. When she asked for the recipe, the head cook supposedly replied that her cook would have to train in a sultan's kitchen instead. These are stories more than documented facts, but the dish is now a symbol of Ottoman cuisine."},
"Ezogelin Çorbası":{title:"Ezogelin Soup",time:"40 min",serves:"6 people",yt:"ezogelin soup recipe",desc:"A red lentil, bulgur and rice soup with mint and chilli flakes.",
 ing:["1 cup red lentils","2 tbsp rice","2 tbsp fine bulgur","1 onion","1 tbsp tomato paste","1 tbsp red pepper paste","2 tbsp butter","7 cups hot water or stock","1 tbsp dried mint","1 tsp chilli flakes, salt"],
 steps:["Rinse and drain the lentils, rice and bulgur.","Soften the finely chopped onion in butter, add both pastes and fry for 2 minutes.","Add the lentils, rice, bulgur and hot water and simmer gently for 30 minutes.","Season with salt; add a little hot water if it gets too thick. Ezogelin isn't blended; it stays textured.","Sizzle the mint and chilli flakes in a spoonful of butter for a few seconds and drizzle over the soup."],
 tip:"Serving it with a squeeze of lemon and radish or spring onion is the Antep way.",
 story:"The soup is named after Zöhre, known as 'Ezo the Bride', who lived in the village of Dokuzyol near Gaziantep. Famed for her beauty, she had a life of unhappy marriages, and her story became the subject of folk songs and films. It is said she cooked this soup to win over her mother-in-law after marrying far from home. Today the soup, served in almost every Turkish restaurant, keeps her name alive."},
"Baklava":{title:"Baklava",time:"90 min + resting",serves:"1 tray (≈ 30 pieces)",yt:"easy baklava recipe filo",desc:"Paper-thin pastry layers, plenty of pistachios, butter and syrup.",
 ing:["500 g filo pastry","250 g butter, melted","250 g pistachios, coarsely ground","3 cups sugar","2.5 cups water","A few drops of lemon juice"],
 steps:["For the syrup, boil the sugar and water for 10 minutes, add the lemon and leave to cool completely.","Butter a tray; lay the filo sheets one by one, brushing butter between each, until half are used.","Scatter the pistachios evenly and lay the remaining sheets the same way.","Cut into diamonds with a sharp knife and pour the remaining butter over the top.","Bake at 170°C until golden, 45–50 minutes.","Pour the cold syrup over the hot baklava and rest for at least 3 hours."],
 tip:"The rule is simple: cold syrup on hot baklava. If both are hot, it turns soggy.",
 story:"The Ottoman palace held a 'Baklava Procession' on the 15th day of Ramadan: baklava baked in the Topkapı Palace kitchens was set on trays and handed out to the Janissaries, with the trays carried ceremonially to the barracks. Antep baklava from Gaziantep, today's baklava capital, became the first Turkish product to receive European Union geographical protection, in 2013."},
"Türk Kahvesi":{title:"Turkish Coffee",time:"10 min",serves:"2 cups",yt:"how to make turkish coffee",desc:"Strong coffee brewed in a cezve with its foam and drunk with the grounds settled.",
 ing:["2 heaped teaspoons Turkish coffee","2 coffee cups of cold water","Sugar to taste (none, medium or sweet)","Water and Turkish delight, to serve"],
 steps:["Measure the water with the coffee cups and pour it into the cezve.","Add the coffee and sugar, if using, and stir well.","Put the cezve on low heat and don't stir again.","When it starts to rise and foam, spoon the foam into the cups.","Return the cezve to the heat and, when it rises a second time, pour the coffee slowly into the cups.","Wait a minute for the grounds to settle; serve with a glass of water and Turkish delight."],
 tip:"On high heat the foam boils away; brew it patiently on low heat.",
 story:"Coffee reached Istanbul in the 16th century; the city's first coffeehouse is said to have opened in Tahtakale in 1555, run by two merchants from Damascus and Aleppo. Brewed in a cezve and drunk with its grounds, it became a symbol of friendship, as in the saying 'a cup of coffee is remembered for forty years'. In the tradition of asking for a bride's hand, the bride-to-be still serves the groom a salted coffee. Turkish coffee culture and tradition joined UNESCO's Intangible Cultural Heritage list in 2013."},
"Keşkek":{title:"Keşkek",time:"3 hours + overnight soaking",serves:"8 people",yt:"keskek recipe",desc:"A wedding and festival dish of wheat and meat cooked for hours and pounded smooth.",
 ing:["2 cups hulled wheat","500 g bone-in lamb or chicken","8 cups water","100 g butter","1 tsp chilli flakes","Salt"],
 steps:["Soak the wheat overnight in plenty of water.","Boil the meat in the water, skimming the foam; when tender, lift it out, take it off the bone and shred it.","Cook the wheat in the stock on low heat, stirring now and then, until very soft and falling apart, about 2 hours.","Add the shredded meat and salt.","Pound with a wooden spoon or pestle until the wheat and meat come together into a thick porridge.","Transfer to a plate and pour over butter sizzled with chilli flakes."],
 tip:"A pressure cooker halves the time it takes to cook the wheat.",
 story:"Keşkek is a communal dish cooked across Anatolia for weddings, religious festivals, charity meals and rain prayers. The village women prepare the wheat the day before, the cauldrons simmer through the night, and the next day the young men pound it with wooden mallets to the sound of drums and pipes. The ceremony and dish were added to UNESCO's Intangible Cultural Heritage list in 2011 as the 'Ceremonial Keşkek tradition'."},
"Menemen":{title:"Menemen",time:"20 min",serves:"2 people",yt:"menemen recipe",desc:"The classic Turkish breakfast of tomatoes, peppers and eggs in one pan.",
 ing:["3 ripe tomatoes","3 long green peppers","3 eggs","1 small onion (optional)","2 tbsp butter or olive oil","Salt, black pepper, chilli flakes"],
 steps:["Finely chop the peppers and grate or dice the tomatoes.","Heat the fat and sauté the peppers (with the onion, if using) for 3–4 minutes.","Add the tomatoes and cook for 5 minutes until slightly reduced; season.","Crack in the eggs and cook for 2 minutes, stirring very little so they stay soft.","Serve in the pan with fresh bread."],
 tip:"Add the eggs last and take the pan off early; the heat keeps cooking them.",
 story:"The name is widely thought to come from the town of Menemen near İzmir. But menemen is best known for its great debate: with onion or without? The question fuels polls on social media, TV segments and endless family arguments in Türkiye. We've left the onion optional; the choice is yours."},
"Zeytinyağlı Yaprak Sarma":{title:"Stuffed Vine Leaves in Olive Oil",time:"100 min + cooling",serves:"6 people",yt:"turkish stuffed vine leaves recipe",desc:"Vine leaves rolled around a spiced rice and onion filling, cooked in olive oil.",
 ing:["250 g brined vine leaves","1.5 cups rice","3 onions","1 small glass olive oil","2 tbsp pine nuts","2 tbsp currants","1 tsp dried mint, half a tsp each cinnamon and allspice","1 tsp sugar","1 lemon","Salt, hot water"],
 steps:["Soak the leaves in hot water for 10 minutes to remove the salt, then trim the stems.","Fry the finely chopped onion and pine nuts in olive oil; add the rinsed rice and stir for 3 minutes.","Add the currants, spices, sugar, salt and half a cup of hot water and cook until absorbed; leave to cool.","Put a teaspoon of filling on the matte side of a leaf, fold in the sides and roll up tightly.","Line a pot with a few leaves, pack in the rolls, top with lemon slices and weigh down with a plate.","Add hot water to cover and simmer gently for 45–50 minutes; cool in the pot."],
 tip:"Olive-oil dishes improve as they cool in the pot; they taste even better the next day.",
 story:"Dolma comes from the verb 'to stuff' and sarma from 'to wrap'; the Ottoman palace kitchen made dozens of kinds. The meatless olive-oil versions are popularly called 'yalancı dolma', 'liar's dolma', because they look like meat dolma but contain none. Olive-oil dishes remain a class of their own on the Turkish table, served cold."},
"Fırın Sütlaç":{title:"Baked Rice Pudding",time:"60 min + cooling",serves:"6 bowls",yt:"turkish baked rice pudding sutlac recipe",desc:"Turkish rice pudding with its top browned in the oven.",
 ing:["1 litre milk","Half a cup rice","1 cup water","1 cup sugar","2 tbsp rice flour or cornflour","1 sachet vanilla (optional)","Cinnamon, to serve"],
 steps:["Cook the rice in the water until absorbed and soft, 15 minutes.","Add the milk and bring to the boil; add the sugar.","Mix the rice flour with half a cup of cold milk and stir it into the pot; cook for 10 minutes until thickened.","Add the vanilla and pour into ovenproof bowls.","Stand the bowls in a tray of water and bake on the top shelf until browned, 15–20 minutes.","Cool to room temperature, chill, and serve with cinnamon."],
 tip:"The water in the tray stops the bottom from overheating and curdling; only the top browns.",
 story:"Sütlaç is one of the milk puddings of the Ottoman palace kitchen, and its name is thought to come from 'sütlü aş', milky dish. In Istanbul, milk puddings were long the trade of the muhallebici, the pudding shops, and in the early 20th century masters from the Balkans, especially from Albania and Macedonia, played a large part in the city's pudding and ice-cream tradition. Browning the top in the oven spread later, and 'fırın sütlaç' is now a classic of its own."}
});
Object.assign(NEEDS,{
 "tr-3":["dana_eti","ekmek","salca","domates","tereyagi","yogurt","biber","sogan"],
 "tr-4":["un","yumurta","kiyma","sogan","yogurt","sarimsak","tereyagi","pul_biber","nane"],
 "tr-5":["dana_eti","sogan","domates","salca","patlican","tereyagi","un","sut","kasar"],
 "tr-6":["kirmizi_mercimek","pirinc","bulgur","sogan","salca","tereyagi","nane","pul_biber"],
 "tr-7":["yufka","tereyagi","antep_fistigi","seker","limon"],
 "tr-8":["kahve","seker"],
 "tr-9":["bugday",["dana_eti","tavuk"],"tereyagi","pul_biber"],
 "tr-10":["domates","biber","yumurta",["tereyagi","zeytinyagi"],"pul_biber"],
 "tr-11":["asma_yapragi","pirinc","sogan","zeytinyagi","kuru_meyve","nane","seker","limon"],
 "tr-12":["sut","pirinc","seker",["nisasta","un"]]
});
WHERE["tr-3"]=[{n:"Kebapçı İskender",c:"Bursa",tr:"İskender kebabın doğduğu yer; 1867'den beri İskender Efendi'nin ailesi tarafından işletiliyor.",en:"The birthplace of İskender kebab, run by İskender Efendi's family since 1867."}];
WHERE["tr-8"]=[{n:"Kurukahveci Mehmet Efendi",c:"İstanbul, Eminönü (Tahtakale)",tr:"Türk kahvesinin en tanınmış kavurucusu; Mısır Çarşısı'nın hemen yanındaki tarihi dükkânında önünde her zaman kuyruk olur.",en:"Turkish coffee's best-known roaster; there's always a queue at its historic shop right by the Spice Bazaar."}];

/* ---- Kalori bilgileri (yaklaşık, porsiyon başına) ---- */
const KCAL={
 "tr-0":[180,"1 kase","1 bowl"],"tr-1":[420,"1 porsiyon","1 serving"],"tr-2":[320,"1 kase","1 bowl"],"tr-3":[850,"1 porsiyon","1 serving"],
 "tr-4":[600,"1 porsiyon","1 serving"],"tr-5":[650,"1 porsiyon","1 serving"],"tr-6":[200,"1 kase","1 bowl"],"tr-7":[230,"1 dilim","1 piece"],
 "tr-8":[25,"1 fincan (orta şekerli)","1 cup (medium sweet)"],"tr-9":[450,"1 porsiyon","1 serving"],"tr-10":[260,"1 porsiyon","1 serving"],
 "tr-11":[300,"6 adet","6 rolls"],"tr-12":[290,"1 kase","1 bowl"],
 "it-0":[650,"1 porsiyon","1 serving"],"it-1":[450,"1 dilim","1 slice"],"it-2":[850,"1 pizza","1 pizza"],
 "jp-0":[650,"1 kase","1 bowl"],"jp-1":[80,"1 kase","1 bowl"],
 "mx-0":[230,"1 porsiyon (cips hariç)","1 serving (without chips)"],"mx-1":[600,"1 porsiyon","1 serving"],
 "in-0":[550,"1 porsiyon (pilav hariç)","1 serving (without rice)"],"in-1":[280,"1 porsiyon","1 serving"],
 "fr-0":[110,"1 adet (sade)","1 crêpe (plain)"],"fr-1":[450,"1 kase","1 bowl"],
 "cn-0":[450,"1 porsiyon (pilav hariç)","1 serving (without rice)"],"cn-1":[450,"10 adet","10 dumplings"],
 "es-0":[600,"1 porsiyon","1 serving"],"es-1":[160,"1 kase","1 bowl"],
 "th-0":[650,"1 porsiyon","1 serving"],"th-1":[150,"1 kase","1 bowl"],
 "kr-0":[600,"1 kase","1 bowl"],"kr-1":[450,"1 kase","1 bowl"]
};
const RECIPES=[];
DATA.forEach(c=>c.recipes.forEach((r,i)=>RECIPES.push({...r,key:c.id+"-"+i,country:c,order:RECIPES.length,en:EN_RECIPES[r.title]})));
RECIPES.forEach(r=>{const k=KCAL[r.key];if(k){r.kcal=k[0];r.kcalUnit=k[1];r.kcalUnitEn=k[2]}});
const KU=r=>LANG==="en"?r.kcalUnitEn:r.kcalUnit;
const FLAGS={"tr": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2030%2020%22%20width%3D%22120%22%20height%3D%2280%22%3E%3Crect%20width%3D%2230%22%20height%3D%2220%22%20fill%3D%22%23E30A17%22/%3E%3Ccircle%20cx%3D%2211.25%22%20cy%3D%2210%22%20r%3D%225%22%20fill%3D%22%23fff%22/%3E%3Ccircle%20cx%3D%2212.5%22%20cy%3D%2210%22%20r%3D%224%22%20fill%3D%22%23E30A17%22/%3E%3Cpath%20d%3D%22M14.100%2C10.000%20L15.827%2C9.439%20L15.827%2C7.622%20L16.895%2C9.092%20L18.623%2C8.531%20L17.555%2C10.000%20L18.623%2C11.469%20L16.895%2C10.908%20L15.827%2C12.378%20L15.827%2C10.561Z%22%20fill%3D%22%23fff%22/%3E%3C/svg%3E", "it": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2030%2020%22%20width%3D%22120%22%20height%3D%2280%22%3E%3Crect%20width%3D%2210%22%20height%3D%2220%22%20fill%3D%22%23009246%22/%3E%3Crect%20x%3D%2210%22%20width%3D%2210%22%20height%3D%2220%22%20fill%3D%22%23fff%22/%3E%3Crect%20x%3D%2220%22%20width%3D%2210%22%20height%3D%2220%22%20fill%3D%22%23CE2B37%22/%3E%3C/svg%3E", "jp": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2030%2020%22%20width%3D%22120%22%20height%3D%2280%22%3E%3Crect%20width%3D%2230%22%20height%3D%2220%22%20fill%3D%22%23fff%22/%3E%3Ccircle%20cx%3D%2215%22%20cy%3D%2210%22%20r%3D%226%22%20fill%3D%22%23BC002D%22/%3E%3C/svg%3E", "mx": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2030%2020%22%20width%3D%22120%22%20height%3D%2280%22%3E%3Crect%20width%3D%2210%22%20height%3D%2220%22%20fill%3D%22%23006847%22/%3E%3Crect%20x%3D%2210%22%20width%3D%2210%22%20height%3D%2220%22%20fill%3D%22%23fff%22/%3E%3Crect%20x%3D%2220%22%20width%3D%2210%22%20height%3D%2220%22%20fill%3D%22%23CE1126%22/%3E%3Cellipse%20cx%3D%2215%22%20cy%3D%2210.6%22%20rx%3D%222.6%22%20ry%3D%222.2%22%20fill%3D%22%238C5A2B%22/%3E%3Cpath%20d%3D%22M12.6%2012.4q2.4%201.8%204.8%200%22%20stroke%3D%22%233F8F3F%22%20stroke-width%3D%22.7%22%20fill%3D%22none%22/%3E%3Ccircle%20cx%3D%2215.9%22%20cy%3D%229%22%20r%3D%22.8%22%20fill%3D%22%235a3a1a%22/%3E%3C/svg%3E", "in": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2030%2020%22%20width%3D%22120%22%20height%3D%2280%22%3E%3Crect%20width%3D%2230%22%20height%3D%226.67%22%20fill%3D%22%23FF9933%22/%3E%3Crect%20y%3D%226.67%22%20width%3D%2230%22%20height%3D%226.67%22%20fill%3D%22%23fff%22/%3E%3Crect%20y%3D%2213.33%22%20width%3D%2230%22%20height%3D%226.67%22%20fill%3D%22%23138808%22/%3E%3Cg%20stroke%3D%22%23000080%22%20stroke-width%3D%22.35%22%20fill%3D%22none%22%3E%3Ccircle%20cx%3D%2215%22%20cy%3D%2210%22%20r%3D%222.8%22%20stroke-width%3D%22.55%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2217.60%22%20y2%3D%2210.00%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2217.51%22%20y2%3D%2210.67%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2217.25%22%20y2%3D%2211.30%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2216.84%22%20y2%3D%2211.84%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2216.30%22%20y2%3D%2212.25%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2215.67%22%20y2%3D%2212.51%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2215.00%22%20y2%3D%2212.60%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2214.33%22%20y2%3D%2212.51%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2213.70%22%20y2%3D%2212.25%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2213.16%22%20y2%3D%2211.84%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2212.75%22%20y2%3D%2211.30%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2212.49%22%20y2%3D%2210.67%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2212.40%22%20y2%3D%2210.00%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2212.49%22%20y2%3D%229.33%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2212.75%22%20y2%3D%228.70%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2213.16%22%20y2%3D%228.16%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2213.70%22%20y2%3D%227.75%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2214.33%22%20y2%3D%227.49%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2215.00%22%20y2%3D%227.40%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2215.67%22%20y2%3D%227.49%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2216.30%22%20y2%3D%227.75%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2216.84%22%20y2%3D%228.16%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2217.25%22%20y2%3D%228.70%22/%3E%3Cline%20x1%3D%2215%22%20y1%3D%2210%22%20x2%3D%2217.51%22%20y2%3D%229.33%22/%3E%3C/g%3E%3Ccircle%20cx%3D%2215%22%20cy%3D%2210%22%20r%3D%22.6%22%20fill%3D%22%23000080%22/%3E%3C/svg%3E", "fr": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2030%2020%22%20width%3D%22120%22%20height%3D%2280%22%3E%3Crect%20width%3D%2210%22%20height%3D%2220%22%20fill%3D%22%230055A4%22/%3E%3Crect%20x%3D%2210%22%20width%3D%2210%22%20height%3D%2220%22%20fill%3D%22%23fff%22/%3E%3Crect%20x%3D%2220%22%20width%3D%2210%22%20height%3D%2220%22%20fill%3D%22%23EF4135%22/%3E%3C/svg%3E", "cn": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2030%2020%22%20width%3D%22120%22%20height%3D%2280%22%3E%3Crect%20width%3D%2230%22%20height%3D%2220%22%20fill%3D%22%23EE1C25%22/%3E%3Cpath%20d%3D%22M5.000%2C2.000%20L5.674%2C4.073%20L7.853%2C4.073%20L6.090%2C5.354%20L6.763%2C7.427%20L5.000%2C6.146%20L3.237%2C7.427%20L3.910%2C5.354%20L2.147%2C4.073%20L4.326%2C4.073Z%22%20fill%3D%22%23FFDE00%22/%3E%3Cpath%20d%3D%22M9.143%2C2.514%20L9.619%2C1.966%20L9.246%2C1.343%20L9.914%2C1.628%20L10.391%2C1.080%20L10.328%2C1.803%20L10.996%2C2.088%20L10.288%2C2.251%20L10.224%2C2.975%20L9.851%2C2.352Z%22%20fill%3D%22%23FFDE00%22/%3E%3Cpath%20d%3D%22M11.010%2C4.141%20L11.662%2C3.821%20L11.560%2C3.102%20L12.065%2C3.624%20L12.718%2C3.304%20L12.378%2C3.946%20L12.884%2C4.467%20L12.168%2C4.343%20L11.829%2C4.985%20L11.726%2C4.266Z%22%20fill%3D%22%23FFDE00%22/%3E%3Cpath%20d%3D%22M11.038%2C6.725%20L11.765%2C6.699%20L11.964%2C6.001%20L12.213%2C6.683%20L12.939%2C6.657%20L12.367%2C7.105%20L12.616%2C7.787%20L12.014%2C7.382%20L11.442%2C7.830%20L11.641%2C7.131Z%22%20fill%3D%22%23FFDE00%22/%3E%3Cpath%20d%3D%22M9.219%2C8.375%20L9.899%2C8.632%20L10.353%2C8.064%20L10.319%2C8.790%20L10.999%2C9.046%20L10.298%2C9.239%20L10.265%2C9.964%20L9.865%2C9.357%20L9.165%2C9.550%20L9.618%2C8.982Z%22%20fill%3D%22%23FFDE00%22/%3E%3C/svg%3E", "es": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2030%2020%22%20width%3D%22120%22%20height%3D%2280%22%3E%3Crect%20width%3D%2230%22%20height%3D%2220%22%20fill%3D%22%23AA151B%22/%3E%3Crect%20y%3D%225%22%20width%3D%2230%22%20height%3D%2210%22%20fill%3D%22%23F1BF00%22/%3E%3Crect%20x%3D%227%22%20y%3D%227.6%22%20width%3D%222.8%22%20height%3D%224.6%22%20rx%3D%22.5%22%20fill%3D%22%23AA151B%22%20opacity%3D%22.85%22/%3E%3C/svg%3E", "th": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2030%2020%22%20width%3D%22120%22%20height%3D%2280%22%3E%3Crect%20width%3D%2230%22%20height%3D%2220%22%20fill%3D%22%23A51931%22/%3E%3Crect%20y%3D%223.33%22%20width%3D%2230%22%20height%3D%2213.33%22%20fill%3D%22%23F4F5F8%22/%3E%3Crect%20y%3D%226.67%22%20width%3D%2230%22%20height%3D%226.67%22%20fill%3D%22%232D2A4A%22/%3E%3C/svg%3E", "kr": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2030%2020%22%20width%3D%22120%22%20height%3D%2280%22%3E%3Crect%20width%3D%2230%22%20height%3D%2220%22%20fill%3D%22%23fff%22/%3E%3Cg%20transform%3D%22rotate%2833.69%2015%2010%29%22%3E%3Cpath%20d%3D%22M10%2010a5%205%200%200%201%2010%200a2.5%202.5%200%200%200-5%200a2.5%202.5%200%200%201-5%200z%22%20fill%3D%22%23CD2E3A%22/%3E%3Cpath%20d%3D%22M10%2010a5%205%200%200%200%2010%200a2.5%202.5%200%200%200-5%200a2.5%202.5%200%200%201-5%200z%22%20fill%3D%22%230047A0%22/%3E%3C/g%3E%3Cg%20transform%3D%22translate%287.2%204.8%29%20rotate%2833.690067525979785%29%22%3E%3Crect%20x%3D%22-2.5%22%20y%3D%22-1.67%22%20width%3D%225%22%20height%3D%22.84%22%20fill%3D%22%23000%22/%3E%3Crect%20x%3D%22-2.5%22%20y%3D%22-0.42%22%20width%3D%225%22%20height%3D%22.84%22%20fill%3D%22%23000%22/%3E%3Crect%20x%3D%22-2.5%22%20y%3D%220.83%22%20width%3D%225%22%20height%3D%22.84%22%20fill%3D%22%23000%22/%3E%3C/g%3E%3Cg%20transform%3D%22translate%2822.8%2015.2%29%20rotate%2833.690067525979785%29%22%3E%3Crect%20x%3D%22-2.5%22%20y%3D%22-1.67%22%20width%3D%222.2%22%20height%3D%22.84%22%20fill%3D%22%23000%22/%3E%3Crect%20x%3D%22.3%22%20y%3D%22-1.67%22%20width%3D%222.2%22%20height%3D%22.84%22%20fill%3D%22%23000%22/%3E%3Crect%20x%3D%22-2.5%22%20y%3D%22-0.42%22%20width%3D%222.2%22%20height%3D%22.84%22%20fill%3D%22%23000%22/%3E%3Crect%20x%3D%22.3%22%20y%3D%22-0.42%22%20width%3D%222.2%22%20height%3D%22.84%22%20fill%3D%22%23000%22/%3E%3Crect%20x%3D%22-2.5%22%20y%3D%220.83%22%20width%3D%222.2%22%20height%3D%22.84%22%20fill%3D%22%23000%22/%3E%3Crect%20x%3D%22.3%22%20y%3D%220.83%22%20width%3D%222.2%22%20height%3D%22.84%22%20fill%3D%22%23000%22/%3E%3C/g%3E%3Cg%20transform%3D%22translate%2822.8%204.8%29%20rotate%28-33.690067525979785%29%22%3E%3Crect%20x%3D%22-2.5%22%20y%3D%22-1.67%22%20width%3D%222.2%22%20height%3D%22.84%22%20fill%3D%22%23000%22/%3E%3Crect%20x%3D%22.3%22%20y%3D%22-1.67%22%20width%3D%222.2%22%20height%3D%22.84%22%20fill%3D%22%23000%22/%3E%3Crect%20x%3D%22-2.5%22%20y%3D%22-0.42%22%20width%3D%225%22%20height%3D%22.84%22%20fill%3D%22%23000%22/%3E%3Crect%20x%3D%22-2.5%22%20y%3D%220.83%22%20width%3D%222.2%22%20height%3D%22.84%22%20fill%3D%22%23000%22/%3E%3Crect%20x%3D%22.3%22%20y%3D%220.83%22%20width%3D%222.2%22%20height%3D%22.84%22%20fill%3D%22%23000%22/%3E%3C/g%3E%3Cg%20transform%3D%22translate%287.2%2015.2%29%20rotate%28-33.690067525979785%29%22%3E%3Crect%20x%3D%22-2.5%22%20y%3D%22-1.67%22%20width%3D%225%22%20height%3D%22.84%22%20fill%3D%22%23000%22/%3E%3Crect%20x%3D%22-2.5%22%20y%3D%22-0.42%22%20width%3D%222.2%22%20height%3D%22.84%22%20fill%3D%22%23000%22/%3E%3Crect%20x%3D%22.3%22%20y%3D%22-0.42%22%20width%3D%222.2%22%20height%3D%22.84%22%20fill%3D%22%23000%22/%3E%3Crect%20x%3D%22-2.5%22%20y%3D%220.83%22%20width%3D%225%22%20height%3D%22.84%22%20fill%3D%22%23000%22/%3E%3C/g%3E%3C/svg%3E"};
const FL=(c,cls)=>FLAGS[c.id]?`<img decoding="async" class="flg${cls?" "+cls:""}" src="${FLAGS[c.id]}" alt="" aria-hidden="true">`:c.flagUrl?`<img decoding="async" class="flg fe${cls?" "+cls:""}" src="${c.flagUrl}" alt="" aria-hidden="true">`:(c.flag||"");
/* ---------- Wikibooks tarifleri: sitenin kendi tarifleri gibi listeye eklenir ----------
   Kaynak: Wikibooks Cookbook (https://en.wikibooks.org/wiki/Cookbook) – metinler CC BY-SA 4.0 lisanslıdır.
   Veri tools/wikibooks/cek.js ile çekilir, tools/wikibooks/donustur.js ile aşağıya gömülür; site internetten tarif çekmez. */
const MDB_AREAS={Turkish:"tr",Italian:"it",Japanese:"jp",Mexican:"mx",Indian:"in",India:"in",French:"fr",Chinese:"cn",Spanish:"es",Thai:"th","South Korean":"kr",Korean:"kr"};
/* mutfak adı (İngilizce sıfat) → [Türkçe ad, ISO ülke kodu] */
const MDB_AREA_TR={"Afghan": ["Afganistan", "af"], "Albanian": ["Arnavutluk", "al"], "Algerian": ["Cezayir", "dz"], "Andorran": ["Andorra", "ad"], "Angolan": ["Angola", "ao"], "Antiguan, Barbudan": ["Antigua ve Barbuda", "ag"], "Argentine": ["Arjantin", "ar"], "Argentinian": ["Arjantin", "ar"], "Armenian": ["Ermenistan", "am"], "Aruban": ["Aruba", "aw"], "Australian": ["Avustralya", "au"], "Austrian": ["Avusturya", "at"], "Azerbaijani": ["Azerbaycan", "az"], "Bahamian": ["Bahamalar", "bs"], "Bahraini": ["Bahreyn", "bh"], "Bangladeshi": ["Bangladeş", "bd"], "Barbadian": ["Barbados", "bb"], "Belarusian": ["Belarus", "by"], "Belgian": ["Belçika", "be"], "Belizean": ["Belize", "bz"], "Beninese": ["Benin", "bj"], "Bermudian": ["Bermuda", "bm"], "Bhutanese": ["Butan", "bt"], "Bolivian": ["Bolivya", "bo"], "Bosnian, Herzegovinian": ["Bosna-Hersek", "ba"], "Motswana": ["Botsvana", "bw"], "Brazilian": ["Brezilya", "br"], "Bruneian": ["Brunei", "bn"], "Bulgarian": ["Bulgaristan", "bg"], "Burkinabe": ["Burkina Faso", "bf"], "Burundian": ["Burundi", "bi"], "Cambodian": ["Kamboçya", "kh"], "Cameroonian": ["Kamerun", "cm"], "Canadian": ["Kanada", "ca"], "Cape Verdian": ["Yeşil Burun", "cv"], "Caymanian": ["Cayman Adaları", "ky"], "Central African": ["Orta Afrika", "cf"], "Chadian": ["Çad", "td"], "Chilean": ["Şili", "cl"], "Chinese": ["Çin", "cn"], "Colombian": ["Kolombiya", "co"], "Costa Rican": ["Kosta Rika", "cr"], "Croatian": ["Hırvatistan", "hr"], "Cuban": ["Küba", "cu"], "Cypriot": ["Kıbrıs", "cy"], "Czech": ["Çekya", "cz"], "Danish": ["Danimarka", "dk"], "Djibouti": ["Cibuti", "dj"], "Dominican": ["Dominik", "do"], "Congolese": ["Kongo", "cd"], "Ecuadorean": ["Ekvador", "ec"], "Egyptian": ["Mısır", "eg"], "Salvadoran": ["El Salvador", "sv"], "Equatorial Guinean": ["Ekvator Ginesi", "gq"], "Eritrean": ["Eritre", "er"], "Estonian": ["Estonya", "ee"], "Ethiopian": ["Etiyopya", "et"], "Faroese": ["Faroe Adaları", "fo"], "Fijian": ["Fiji", "fj"], "Finnish": ["Finlandiya", "fi"], "French": ["Fransa", "fr"], "Gabonese": ["Gabon", "ga"], "Gambian": ["Gambiya", "gm"], "Georgian": ["Gürcistan", "ge"], "German": ["Almanya", "de"], "Ghanaian": ["Gana", "gh"], "Gibraltar": ["Cebelitarık", "gi"], "Greek": ["Yunanistan", "gr"], "Greenlandic": ["Grönland", "gl"], "Grenadian": ["Grenada", "gd"], "Guadeloupian": ["Guadeloupe", "gp"], "Guamanian": ["Guam", "gu"], "Guatemalan": ["Guatemala", "gt"], "Channel Islander": ["Manş Adaları", "je"], "Guinean": ["Gine", "gn"], "Guinea-Bissauan": ["Gine-Bissau", "gw"], "Guyanese": ["Guyana", "gy"], "Haitian": ["Haiti", "ht"], "Honduran": ["Honduras", "hn"], "Hong Konger": ["Hong Kong", "hk"], "Hungarian": ["Macaristan", "hu"], "Icelander": ["İzlanda", "is"], "Indian": ["Hindistan", "in"], "Indonesian": ["Endonezya", "id"], "Iranian": ["İran", "ir"], "Iraqi": ["Irak", "iq"], "Irish": ["İrlanda", "ie"], "Israeli": ["İsrail", "il"], "Italian": ["İtalya", "it"], "Ivorian": ["Fildişi Sahili", "ci"], "Jamaican": ["Jamaika", "jm"], "Japanese": ["Japonya", "jp"], "Jordanian": ["Ürdün", "jo"], "Kazakhstani": ["Kazakistan", "kz"], "Kenyan": ["Kenya", "ke"], "Kosovar": ["Kosova", "xk"], "Kuwaiti": ["Kuveyt", "kw"], "Kirghiz": ["Kırgızistan", "kg"], "Laotian": ["Laos", "la"], "Latvian": ["Letonya", "lv"], "Lebanese": ["Lübnan", "lb"], "Mosotho": ["Lesotho", "ls"], "Liberian": ["Liberya", "lr"], "Libyan": ["Libya", "ly"], "Liechtensteiner": ["Lihtenştayn", "li"], "Lithuanian": ["Litvanya", "lt"], "Luxembourger": ["Lüksemburg", "lu"], "Malagasy": ["Madagaskar", "mg"], "Malawian": ["Malavi", "mw"], "Malaysian": ["Malezya", "my"], "Maldivan": ["Maldivler", "mv"], "Malian": ["Mali", "ml"], "Maltese": ["Malta", "mt"], "Mauritian": ["Mauritius", "mu"], "Mexican": ["Meksika", "mx"], "Moldovan": ["Moldova", "md"], "Mongolian": ["Moğolistan", "mn"], "Montenegrin": ["Karadağ", "me"], "Moroccan": ["Fas", "ma"], "Mozambican": ["Mozambik", "mz"], "Burmese": ["Myanmar", "mm"], "Namibian": ["Namibya", "na"], "Nepalese": ["Nepal", "np"], "Dutch": ["Hollanda", "nl"], "New Zealander": ["Yeni Zelanda", "nz"], "Nicaraguan": ["Nikaragua", "ni"], "Nigerien": ["Nijer", "ne"], "Nigerian": ["Nijerya", "ng"], "North Korean": ["Kuzey Kore", "kp"], "Macedonian": ["K. Makedonya", "mk"], "Norwegian": ["Norveç", "no"], "Omani": ["Umman", "om"], "Pakistani": ["Pakistan", "pk"], "Palestinian": ["Filistin", "ps"], "Panamanian": ["Panama", "pa"], "Papua New Guinean": ["Papua Yeni Gine", "pg"], "Paraguayan": ["Paraguay", "py"], "Peruvian": ["Peru", "pe"], "Filipino": ["Filipinler", "ph"], "Polish": ["Polonya", "pl"], "Portuguese": ["Portekiz", "pt"], "Puerto Rican": ["Porto Riko", "pr"], "Qatari": ["Katar", "qa"], "Romanian": ["Romanya", "ro"], "Russian": ["Rusya", "ru"], "Rwandan": ["Ruanda", "rw"], "Saint Lucian": ["Saint Lucia", "lc"], "Samoan": ["Samoa", "ws"], "Sammarinese": ["San Marino", "sm"], "Saudi Arabian": ["Suudi Arabistan", "sa"], "Senegalese": ["Senegal", "sn"], "Serbian": ["Sırbistan", "rs"], "Seychellois": ["Seyşeller", "sc"], "Sierra Leonean": ["Sierra Leone", "sl"], "Singaporean": ["Singapur", "sg"], "Slovak": ["Slovakya", "sk"], "Slovene": ["Slovenya", "si"], "Solomon Islander": ["Solomon Adaları", "sb"], "Somali": ["Somali", "so"], "South African": ["Güney Afrika", "za"], "South Korean": ["Kore", "kr"], "South Sudanese": ["Güney Sudan", "ss"], "Spanish": ["İspanya", "es"], "Sri Lankan": ["Sri Lanka", "lk"], "Sudanese": ["Sudan", "sd"], "Surinamer": ["Surinam", "sr"], "Swedish": ["İsveç", "se"], "Swiss": ["İsviçre", "ch"], "Syrian": ["Suriye", "sy"], "Taiwanese": ["Tayvan", "tw"], "Tadzhik": ["Tacikistan", "tj"], "Tanzanian": ["Tanzanya", "tz"], "Thai": ["Tayland", "th"], "Togolese": ["Togo", "tg"], "Tongan": ["Tonga", "to"], "Trinidadian": ["Trinidad ve Tobago", "tt"], "Tunisian": ["Tunus", "tn"], "Turkish": ["Türkiye", "tr"], "Turkmen": ["Türkmenistan", "tm"], "Tuvaluan": ["Tuvalu", "tv"], "Ugandan": ["Uganda", "ug"], "Ukrainian": ["Ukrayna", "ua"], "Emirati": ["BAE", "ae"], "British": ["Birleşik Krallık", "gb"], "American": ["ABD", "us"], "Uruguayan": ["Uruguay", "uy"], "Uzbekistani": ["Özbekistan", "uz"], "Ni-Vanuatu": ["Vanuatu", "vu"], "Venezuelan": ["Venezuela", "ve"], "Vietnamese": ["Vietnam", "vn"], "Yemeni": ["Yemen", "ye"], "Zambian": ["Zambiya", "zm"], "Zimbabwean": ["Zimbabve", "zw"], "Korean": ["Kore", "kr"], "India": ["Hindistan", "in"], "Bosnian": ["Bosna-Hersek", "ba"], "Unknown": ["Diğer", ""]};
/* Wikibooks'taki bölgesel mutfaklar (bayraksız) – donustur.js doldurur */
const WB_REGIONS={"African":["Afrika",""],"Asian":["Asya",""],"European":["Avrupa",""],"Middle Eastern":["Orta Doğu",""],"Mediterranean":["Akdeniz",""],"South Asian":["Güney Asya",""],"Southeast Asian":["Güneydoğu Asya",""],"East Asian":["Doğu Asya",""],"Caribbean":["Karayipler",""],"North African":["Kuzey Afrika",""],"South American":["Güney Amerika",""],"Central American":["Orta Amerika",""],"North American":["Kuzey Amerika",""],"West Asian":["Batı Asya",""],"Pacific":["Pasifik",""],"Jewish":["Yahudi mutfağı",""]};
Object.assign(MDB_AREA_TR,WB_REGIONS);
/* ülke bayrakları (gömülü, internetsiz görünür) */
/* ---- Elimde ne var? – Wikibooks tarifleri için ek malzemeler ve İngilizce → malzeme eşleştirmesi ---- */
PANTRY.push(
 {id:"kereviz",cat:"veg",e:"🥬",tr:"Kereviz (sap veya kök)",en:"Celery or celeriac"},
 {id:"pirasa",cat:"veg",e:"🥬",tr:"Pırasa",en:"Leek"},
 {id:"marul",cat:"veg",e:"🥗",tr:"Marul veya roka",en:"Lettuce or rocket"},
 {id:"brokoli",cat:"veg",e:"🥦",tr:"Brokoli veya karnabahar",en:"Broccoli or cauliflower"},
 {id:"bezelye",cat:"veg",e:"🫛",tr:"Bezelye",en:"Peas"},
 {id:"misir",cat:"veg",e:"🌽",tr:"Mısır",en:"Sweetcorn"},
 {id:"balkabagi",cat:"veg",e:"🎃",tr:"Balkabağı",en:"Pumpkin or squash"},
 {id:"pancar",cat:"veg",e:"🟣",tr:"Pancar",en:"Beetroot"},
 {id:"tatli_patates",cat:"veg",e:"🍠",tr:"Tatlı patates",en:"Sweet potato"},
 {id:"zeytin",cat:"veg",e:"🫒",tr:"Zeytin",en:"Olives"},
 {id:"dereotu",cat:"veg",e:"🌿",tr:"Dereotu",en:"Dill"},
 {id:"elma",cat:"veg",e:"🍎",tr:"Elma veya armut",en:"Apple or pear"},
 {id:"muz",cat:"veg",e:"🍌",tr:"Muz",en:"Banana"},
 {id:"cilek",cat:"veg",e:"🍓",tr:"Çilek, ahududu veya böğürtlen",en:"Berries"},
 {id:"tropik",cat:"veg",e:"🥭",tr:"Mango veya ananas",en:"Mango or pineapple"},
 {id:"kuzu",cat:"meat",e:"🍖",tr:"Kuzu eti",en:"Lamb"},
 {id:"domuz",cat:"meat",e:"🥓",tr:"Domuz eti veya jambon",en:"Pork or ham"},
 {id:"sucuk",cat:"meat",e:"🌭",tr:"Sosis, sucuk veya chorizo",en:"Sausages or chorizo"},
 {id:"hindi",cat:"meat",e:"🦃",tr:"Hindi veya ördek",en:"Turkey or duck"},
 {id:"balik",cat:"meat",e:"🐟",tr:"Balık (somon, morina, ton vb.)",en:"Fish (salmon, cod, tuna…)"},
 {id:"deniz_urunu",cat:"meat",e:"🦑",tr:"Kalamar, midye veya istiridye",en:"Squid, mussels or clams"},
 {id:"beyaz_peynir",cat:"dairy",e:"🧀",tr:"Beyaz peynir veya feta",en:"Feta or white cheese"},
 {id:"krem_peynir",cat:"dairy",e:"🧀",tr:"Krem peynir, lor veya ricotta",en:"Cream cheese or ricotta"},
 {id:"kabartma",cat:"grain",e:"🧁",tr:"Kabartma tozu veya karbonat",en:"Baking powder or soda"},
 {id:"hazir_hamur",cat:"grain",e:"🥐",tr:"Milföy veya hazır tart hamuru",en:"Puff or shortcrust pastry"},
 {id:"yesil_mercimek",cat:"grain",e:"🟤",tr:"Yeşil veya kahverengi mercimek",en:"Green or brown lentils"},
 {id:"fasulye_diger",cat:"grain",e:"🫘",tr:"Barbunya, siyah veya konserve fasulye",en:"Kidney, black or tinned beans"},
 {id:"kuskus",cat:"grain",e:"🌾",tr:"Kuskus veya irmik",en:"Couscous or semolina"},
 {id:"yulaf",cat:"grain",e:"🌾",tr:"Yulaf",en:"Oats"},
 {id:"badem",cat:"sweet",e:"🌰",tr:"Badem, kaju, pekan veya çam fıstığı",en:"Almonds, cashews, pecans or pine nuts"},
 {id:"hindistan_cevizi",cat:"sweet",e:"🥥",tr:"Hindistan cevizi (sütü veya rendesi)",en:"Coconut (milk or desiccated)"},
 {id:"bal",cat:"sweet",e:"🍯",tr:"Bal, pekmez veya şurup",en:"Honey, syrup or molasses"},
 {id:"cikolata",cat:"sweet",e:"🍫",tr:"Çikolata",en:"Chocolate"},
 {id:"vanilya",cat:"sweet",e:"🍦",tr:"Vanilya",en:"Vanilla"},
 {id:"tarcin",cat:"sauce",e:"🟤",tr:"Tarçın",en:"Cinnamon"},
 {id:"tatli_baharat",cat:"sauce",e:"🟤",tr:"Muskat, yenibahar, karanfil veya kakule",en:"Nutmeg, allspice, cloves or cardamom"},
 {id:"kori",cat:"sauce",e:"🟡",tr:"Köri tozu veya köri ezmesi",en:"Curry powder or paste"},
 {id:"hardal",cat:"sauce",e:"🟡",tr:"Hardal",en:"Mustard"},
 {id:"mayonez",cat:"sauce",e:"🥚",tr:"Mayonez",en:"Mayonnaise"},
 {id:"ketcap",cat:"sauce",e:"🍅",tr:"Ketçap veya acı sos",en:"Ketchup or hot sauce"},
 {id:"istiridye_sosu",cat:"sauce",e:"🫙",tr:"İstiridye veya hoisin sosu",en:"Oyster or hoisin sauce"},
 {id:"sebze_suyu",cat:"sauce",e:"🥣",tr:"Sebze suyu",en:"Vegetable stock"},
 {id:"sarap",cat:"sauce",e:"🍷",tr:"Şarap veya mutfak şarabı",en:"Wine or cooking wine"}
);
PANTRY.forEach(p=>PANTRY_BY[p.id]=p);
/* sıra önemli: ilk eşleşen kural kazanır; tuz, karabiber, su ve sıvı yağ her mutfakta var sayılır */
const MDB_PANTRY_RULES=[
 [/^(salt|.*\bsea salt|kosher salt|.*water|ice|black pepper|white pepper|pepper|ground pepper|.*vegetable oil|.*sunflower oil|.*canola oil|.*rapeseed oil|oil|.*groundnut oil|.*ground nut oil|.*peanut oil|cooking spray|all-purpose seasoning|.*peppercorns?)$/,null],
 [/vinegar/,"sirke"],
 [/rolled oats|porridge oats|^oats$|oatmeal/,"yulaf"],
 [/buttermilk/,"sut"],
 [/butter ?beans?/,"kuru_fasulye"],
 [/sausage|chorizo|salami|pepperoni|kielbasa|frankfurter/,"sucuk"],
 [/spring onion|scallion|green onion|chive/,"yesil_sogan"],
 [/onion|shallot|challot/,"sogan"],
 [/garlic/,"sarimsak"],
 [/sweet potato/,"tatli_patates"],
 [/potato/,"patates"],
 [/carrot/,"havuc"],
 [/aubergine|eggplant|egg plant/,"patlican"],
 [/tomato pur[eé]e|tomato paste|concentrated tomato/,"salca"],
 [/ketchup|hot ?sauce|tabasco|sriracha|sweet chilli sauce|bbq sauce|barbecue sauce/,"ketcap"],
 [/tomato|passata/,"domates"],
 [/pul biber|chilli flake|chili flake|red pepper flake|pepper flake/,"pul_biber"],
 [/paprika|chilli powder|chili powder|cayenne/,"toz_biber"],
 [/chil+i|jalape|scotch bonnet|habanero|birds?-?eye/,"aci_biber"],
 [/pepper/,"biber"],
 [/cucumber|gherkin/,"salatalik"],
 [/spinach/,"ispanak"],
 [/cabbage|kale|sauerkraut|bok choy|pak choi/,"lahana"],
 [/courgette|zucchini/,"kabak"],
 [/mushroom/,"mantar"],
 [/avocado/,"avokado"],
 [/bean sprout/,"fasulye_filizi"],
 [/green bean|runner bean|french bean/,"taze_fasulye"],
 [/parsley/,"maydanoz"],
 [/coriander leaves|cilantro|^coriander$|fresh coriander/,"kisnis"],
 [/basil/,"feslegen"],
 [/thyme|bay lea|rosemary|oregano|\bsage\b|marjoram|tarragon|mixed herbs|herbes/,"otlar"],
 [/lemongrass|lemon grass/,"limon_otu"],
 [/lemon|lime/,"limon"],
 [/orange/,"portakal"],
 [/pomegranate/,"nar"],
 [/ginger|galangal/,"zencefil"],
 [/celery|celeriac/,"kereviz"],
 [/leek/,"pirasa"],
 [/lettuce|rocket|arugula|watercress/,"marul"],
 [/broccoli|cauliflower/,"brokoli"],
 [/^peas$|frozen peas|garden peas|petits? pois|green peas|split peas/,"bezelye"],
 [/sweetcorn|corn on the cob|^corn$|sweet corn|baby corn/,"misir"],
 [/pumpkin|squash/,"balkabagi"],
 [/beetroot|beet/,"pancar"],
 [/olive oil/,null],
 [/olive/,"zeytin"],
 [/dill/,"dereotu"],
 [/mint/,"nane"],
 [/apple|pear/,"elma"],
 [/banana/,"muz"],
 [/strawberr|raspberr|blackberr|blueberr|cranberr|cherr/,"cilek"],
 [/mango|pineapple/,"tropik"],
 [/vine leaves|grape leaves/,"asma_yapragi"],
 [/fish sauce/,"balik_sosu"],
 [/oyster sauce|hoisin/,"istiridye_sosu"],
 [/vegetable (stock|broth)|veg stock|vegetable bouillon/,"sebze_suyu"],
 [/stock|broth|bouillon/,"et_suyu"],
 [/minced beef|ground beef|beef mince|lamb mince|minced lamb|ground lamb|minced pork|ground pork|pork mince|mince/,"kiyma"],
 [/chicken/,"tavuk"],
 [/turkey|duck/,"hindi"],
 [/bacon|pancetta|guanciale|prosciutto|parma ham|pastrami/,"pastirma"],
 [/sausage|chorizo|salami|pepperoni|kielbasa|frankfurter/,"sucuk"],
 [/lamb|mutton|goat/,"kuzu"],
 [/pork|ham\b|gammon/,"domuz"],
 [/beef|steak|brisket|veal|oxtail|sirloin|rump|chuck/,"dana_eti"],
 [/prawn|shrimp|lobster|crab/,"karides"],
 [/squid|calamari|mussel|clam|oyster|scallop|octopus/,"deniz_urunu"],
 [/salmon|cod|haddock|tuna|mackerel|sardine|anchov|trout|white fish|hake|monkfish|sea bass|bass|tilapia|herring|plaice|halibut|fish/,"balik"],
 [/condensed milk|evaporated milk|milk powder/,"sut"],
 [/coconut/,"hindistan_cevizi"],
 [/egg/,"yumurta"],
 [/peanut/,"yer_fistigi"],
 [/butter|ghee/,"tereyagi"],
 [/yog(h)?urt/,"yogurt"],
 [/cream cheese|ricotta|cottage cheese|quark|paneer/,"krem_peynir"],
 [/mascarpone/,"mascarpone"],
 [/cream|cr[eè]me fra[iî]che|creme fraiche|custard/,"krema"],
 [/milk/,"sut"],
 [/parmesan|pecorino|parmigiano|grana padano/,"peynir_sert"],
 [/mozzarella/,"mozzarella"],
 [/feta|halloumi|goat'?s cheese/,"beyaz_peynir"],
 [/cheese|cheddar|gruy[eè]re|emmental|monterey|gouda|brie|camembert/,"kasar"],
 [/baking powder|bicarbonate|baking soda|cream of tartar/,"kabartma"],
 [/yeast/,"maya"],
 [/corn ?flour|corn ?starch|starch|arrowroot/,"nisasta"],
 [/rice noodle|vermicelli rice|rice stick/,"pirinc_eristesi"],
 [/rice cake/,"pirinc_keki"],
 [/rice vinegar/,"sirke"],
 [/rice/,"pirinc"],
 [/flour/,"un"],
 [/spaghetti|pasta|macaroni|penne|linguin|fettuc|tagliatel|lasagn|rigatoni|fusilli|farfalle|orzo|noodle|ramen|udon|soba|tortellini|ravioli|gnocchi/,"makarna"],
 [/tortilla|wrap/,"tortilla"],
 [/filo|phyllo/,"yufka"],
 [/puff pastry|shortcrust|pastry|pie crust/,"hazir_hamur"],
 [/bread|breadcrumb|baguette|pitta|pita|brioche|bun|roll|ciabatta|naan|croissant|crouton|panko/,"ekmek"],
 [/red lentil/,"kirmizi_mercimek"],
 [/yellow lentil|split pea|toor dal|chana dal|moong/,"sari_mercimek"],
 [/lentil/,"yesil_mercimek"],
 [/chickpea|garbanzo|gram flour/,"nohut"],
 [/cannellini|haricot|white bean|butter bean|navy bean|great northern/,"kuru_fasulye"],
 [/kidney bean|black bean|pinto|borlotti|baked beans|beans/,"fasulye_diger"],
 [/bulgur|bulghur|cracked wheat/,"bulgur"],
 [/couscous|semolina/,"kuskus"],
 [/oat/,"yulaf"],
 [/ladyfinger|lady finger|sponge finger|savoiardi|digestive|biscuit|graham cracker|cookie/,"kedi_dili"],
 [/tofu/,"tofu"],
 [/pistachio/,"antep_fistigi"],
 [/walnut|hazelnut/,"ceviz"],
 [/almond|cashew|pecan|pine nut|macadamia|brazil nut|mixed nuts/,"badem"],
 [/raisin|sultana|currant|apricot|prune|date|fig|dried fruit|mixed peel|candied/,"kuru_meyve"],
 [/honey|syrup|molasses|treacle/,"bal"],
 [/cocoa/,"kakao"],
 [/chocolate/,"cikolata"],
 [/vanilla/,"vanilya"],
 [/sugar|caster|icing/,"seker"],
 [/coffee|espresso/,"kahve"],
 [/cumin|caraway/,"kimyon"],
 [/turmeric/,"zerdecal"],
 [/garam masala/,"garam_masala"],
 [/curry/,"kori"],
 [/saffron/,"safran"],
 [/cinnamon/,"tarcin"],
 [/nutmeg|allspice|clove|cardamom|cardomom|star anise|mace/,"tatli_baharat"],
 [/soy sauce|soya sauce|\btamari\b/,"soya"],
 [/mirin/,"mirin"],
 [/dashi/,"dashi"],
 [/miso/,"miso"],
 [/nori|seaweed|wakame|kombu/,"yosun"],
 [/tamarind/,"demirhindi"],
 [/gochujang/,"gochujang"],
 [/sesame/,"susam_yagi"],
 [/vinegar/,"sirke"],
 [/mustard/,"hardal"],
 [/mayonnaise|mayo/,"mayonez"],
 [/wine|sherry|brandy|marsala|port|sake|rum|cognac/,"sarap"]
];
function mdbNeeds(o){
  const out=[];
  (o.g||[]).forEach(([name])=>{
    const n=String(name||"").toLowerCase().trim();if(!n)return;
    const rule=MDB_PANTRY_RULES.find(([re])=>re.test(n));
    if(rule&&rule[1]&&PANTRY_BY[rule[1]]&&!out.includes(rule[1]))out.push(rule[1]);
  });
  return out;
}
const MDB_INFO={count:0};
function mdbHex(h,s,l){s/=100;l/=100;const k=n=>(n+h/30)%12,a=s*Math.min(l,1-l),f=n=>l-a*Math.max(-1,Math.min(k(n)-3,Math.min(9-k(n),1)));return "#"+[f(0),f(8),f(4)].map(x=>Math.round(x*255).toString(16).padStart(2,"0")).join("")}
/* Wikibooks bölgeleri için İngilizce ülke adı: sıfat yerine ülke adı (British → United Kingdom) */
const WB_REGION_EN={"African":"Africa","Asian":"Asia","Caribbean":"Caribbean","Central American":"Central America","East Asian":"East Asia","European":"Europe","Jewish":"Jewish","Mediterranean":"Mediterranean","Middle Eastern":"Middle East","North African":"North Africa","North American":"North America","South Asian":"South Asia","Southeast Asian":"Southeast Asia","Unknown":"Other"};
const WB_NAME_FIX={"Myanmar (Burma)":"Myanmar","Palestinian Territories":"Palestine","Trinidad & Tobago":"Trinidad and Tobago"};
function wbEnName(area,cc){
  if(WB_REGION_EN[area])return WB_REGION_EN[area];
  if(cc){try{const n=new Intl.DisplayNames(["en"],{type:"region"}).of(cc.toUpperCase());if(n&&n.toUpperCase()!==cc.toUpperCase())return WB_NAME_FIX[n]||n}catch(e){}}
  return area}
function mdbCountry(area){
  area=(area||"Unknown").trim();
  const own=MDB_AREAS[area];if(own){const c=DATA.find(x=>x.id===own);if(c)return c}
  const id="x-"+area.toLowerCase().replace(/[^a-z]+/g,"-");
  let c=DATA.find(x=>x.id===id);if(c)return c;
  const info=MDB_AREA_TR[area]||MDB_AREA_TR[area.split(",")[0]]||[area,""];
  let hsh=0;for(const ch of area)hsh=(hsh*31+ch.charCodeAt(0))%360;
  const cc=info[1];
  c={id,name:info[0],flag:"🌍",flagUrl:MDB_FLAGS[cc]||"",color:mdbHex(hsh,55,38),dark:mdbHex(hsh,70,72),intro:"",recipes:[],mdb:true};
  DATA.push(c);EN_COUNTRY[id]={name:wbEnName(area,cc),adj:area==="Unknown"?"World":area,intro:""};c.wb=true;
  return c;
}
/* Wikibooks tarifleri için alerji, diyet, süre ve zorluk bilgisini malzeme listesinden ve yapılıştan otomatik çıkarır */
const MDB_KW={
 gluten:{yes:["flour","bread","breadcrumb","pasta","spaghetti","penne","linguine","fettuccine","tagliatelle","macaroni","lasagne","lasagna","noodle","couscous","bulgur","barley","rye","semolina","pastry","filo","phyllo","tortilla","pitta","pita","naan","baguette","biscuit","digestive","wheat","soy sauce","beer","croissant","brioche","cracker","sponge","vermicelli","orzo","gnocchi","dumpling","wrap"," bun"," roll","stout"," ale "],
   no:["rice flour","corn flour","cornflour","gluten-free","gluten free","rice noodle","corn tortilla","almond flour","coconut flour","buckwheat","rice vermicelli","tamari ","spring roll","rolled oats"]},
 sut:{yes:["milk","butter","cheese","cream","yogurt","yoghurt","ghee","parmesan","parmigiano","mozzarella","cheddar","feta","ricotta","mascarpone","fraiche","fraîche","buttermilk","paneer","halloumi","gruyere","gruyère","brie","custard","whey","pecorino","gouda","emmental","stilton","camembert","quark","kefir","labneh"],
   no:["coconut milk","coconut cream","creamed coconut","almond milk","soy milk","oat milk","peanut butter","cocoa butter","cream of tartar","nut butter","almond butter","cashew butter","shea butter","butternut","butter beans","butterbeans"]},
 yumurta:{yes:[" egg","yolk","mayonnaise","meringue","aioli"],no:["eggplant"]},
 kuruyemis:{yes:["almond","walnut","cashew","pistachio","hazelnut","pecan","pine nut","macadamia","brazil nut","mixed nuts","praline","marzipan","frangipane","nutella"],no:[]},
 yerfistigi:{yes:["peanut","groundnut","satay"],no:[]},
 soya:{yes:["soy sauce","soya","tofu","miso","edamame","tempeh","soybean","soy bean","tamari ","hoisin"],no:[]},
 balik:{yes:["fish","salmon","tuna","cod","haddock","anchov","sardine","mackerel","trout","tilapia","sea bass","seabass","halibut","monkfish","pollock","herring","kipper","worcestershire","bonito","dashi","snapper","swordfish","hake","plaice","sole fillet","mahi"],no:["fish-free"]},
 kabuklu:{yes:["prawn","shrimp","crab","lobster","mussel","clam","scallop","oyster","squid","octopus","crayfish","langoustine","calamari","shellfish","cockle"],no:[]},
 susam:{yes:["sesame","tahini","tahina"],no:[]},
 sulfit:{yes:["wine","sherry","vermouth","port ","madeira","marsala","dried apricot","prosecco","champagne"],no:["wine vinegar"]}
};
const MDB_MEAT=["chicken","beef","pork","lamb","mutton","bacon"," ham","sausage","chorizo","mince","steak","turkey","duck","veal","goat","prosciutto","pancetta","salami","pepperoni","gelatin","gelatine","lard","suet","brisket","oxtail","liver","kidney","venison","rabbit","goose","pheasant","guanciale","merguez","meatball","black pudding","bone marrow"];
const MDB_MEAT_CAT=["Beef","Chicken","Lamb","Pork","Seafood","Goat"];
function mdbHas(names,yes,no){return names.some(n=>yes.some(k=>n.includes(k))&&!no.some(k=>n.includes(k)))}
function mdbEnrich(o,steps){
  const names=o.g.map(x=>" "+String(x[0]).toLowerCase()+" "),instr=String(o.s||"").toLowerCase();
  const a=[];Object.entries(MDB_KW).forEach(([k,v])=>{if(mdbHas(names,v.yes,v.no))a.push(k)});
  const m=[];if(names.some(n=>n.includes("worcestershire"))&&!a.includes("balik"))m.push("balik");
  if(names.some(n=>n.includes("stock cube")||n.includes("bouillon"))&&!a.includes("gluten"))m.push("gluten");
  const meat=mdbHas(names,MDB_MEAT,["vegetable stock","veg stock","kidney bean","goat cheese","goats cheese","goat's cheese","beef tomato","beefsteak tomato"])||MDB_MEAT_CAT.includes(o.c)||a.includes("balik")||a.includes("kabuklu")||names.some(n=>/chicken stock|beef stock|lamb stock|fish stock/.test(n));
  const veg=!meat,vegan=veg&&!a.includes("sut")&&!a.includes("yumurta")&&!names.some(n=>n.includes("honey"));
  const d=[];if(veg)d.push("veg");if(vegan)d.push("vegan");if(!a.includes("gluten")&&!m.includes("gluten"))d.push("gf");if(!a.includes("sut"))d.push("df");
  const has=list=>names.some(n=>list.some(k=>n.includes(k)));
  const dessert=o.c==="Dessert"||has(["sugar","caster","icing","syrup","chocolate","honey","condensed"])&&o.c!=="Beef";
  const fried=/deep[- ]?fr|\bfry\b|\bfried\b|shallow fry/.test(instr);
  const fatty=["butter","cream","cheese","ghee","lard","bacon","suet","mascarpone","double cream"].filter(k=>names.some(n=>n.includes(k))).length;
  const salty=has(["soy sauce","bacon","stock cube","bouillon","anchov","olives","capers","parmesan","salami","chorizo","fish sauce","miso"]);
  const alcohol=has(["wine","beer","rum","brandy","vodka","whisky","whiskey","sherry","cognac","liqueur","stout","ale","marsala","kirsch","port "]);
  const prot=[["chicken","tavuk"],["beef","sığır eti"],["lamb","kuzu eti"],["pork","domuz eti"],["turkey","hindi"],["salmon","somon"],["fish","balık"],["prawn","karides"],[" egg","yumurta"],["lentil","mercimek"],["chickpea","nohut"],["bean","fasulye"],["tofu","tofu"]].filter(([k])=>names.some(n=>n.includes(k))).slice(0,2);
  const vegCount=["onion","garlic","tomato","pepper","carrot","spinach","courgette","zucchini","aubergine","eggplant","broccoli","cabbage","mushroom","potato","pea","leek","celery","kale","lettuce","cucumber","squash","pumpkin","corn","sweet potato","cauliflower"].filter(k=>names.some(n=>n.includes(k))).length;
  const P=[],PE=[],W=[],WE=[],S=[],SE=[];
  if(prot.length){P.push(prot.map(x=>x[1]).join(" ve ")+" sayesinde protein sağlar");PE.push("good source of protein ("+prot.map(x=>x[0]).join(", ")+")")}
  if(vegCount>=4){P.push("sebze açısından zengin, lif ve vitamin sağlar");PE.push("rich in vegetables, fibre and vitamins")}
  if(names.some(n=>/salmon|mackerel|sardine|trout|tuna/.test(n))){P.push("yağlı balıktan omega-3 içerir");PE.push("omega-3 from oily fish")}
  if(names.some(n=>n.includes("olive oil"))&&!fried){P.push("zeytinyağı kalp dostu yağ sağlar");PE.push("olive oil adds heart-friendly fats")}
  if(!P.length){P.push("sade ve dengeli bir tarif");PE.push("simple, balanced recipe")}
  if(dessert){W.push("şekeri yüksek, porsiyona dikkat et");WE.push("high in sugar, watch the portion")}
  if(fried||fatty>=2){W.push("yağ ve kalorisi yüksek olabilir");WE.push("may be high in fat and calories")}
  if(salty){W.push("tuz oranı yüksek olabilir");WE.push("may be high in salt")}
  if(alcohol){W.push("alkol içerir; pişince tamamı uçmayabilir");WE.push("contains alcohol, which may not fully cook off")}
  if(names.some(n=>/chilli|chili|cayenne|jalape|scotch bonnet/.test(n))){W.push("acı olabilir");WE.push("may be spicy")}
  if(!W.length){W.push("belirgin bir risk yok; alerji listesini kontrol et");WE.push("no particular concerns; check the allergy list")}
  if(fried){S.push("kızartmak yerine fırında pişirerek hafifletebilirsin");SE.push("bake instead of frying to make it lighter")}
  if(a.includes("sut")){S.push("süt ürünleri yerine bitkisel alternatif kullanılabilir");SE.push("swap dairy for plant-based alternatives")}
  if(a.includes("gluten")){S.push("glutensiz un veya makarna ile uyarlanabilir");SE.push("use gluten-free flour or pasta")}
  if(dessert){S.push("şekeri biraz azaltabilirsin");SE.push("you can reduce the sugar a little")}
  if(meat&&!a.includes("balik")&&!a.includes("kabuklu")&&S.length<2){S.push("eti azaltıp sebzeyi artırarak hafifletebilirsin");SE.push("use less meat and more vegetables")}
  if(!S.length){S.push("tuzu azaltıp taze otlarla tatlandırabilirsin");SE.push("use less salt and more fresh herbs")}
  const cap=x=>x.charAt(0).toLocaleUpperCase("tr")+x.slice(1);
  const diet={a,m:m.filter(x=>!a.includes(x)),d,auto:true,
    p:[cap(P.slice(0,2).join("; "))+".",cap(PE.slice(0,2).join("; "))+"."],
    w:[cap(W.slice(0,2).join("; "))+".",cap(WE.slice(0,2).join("; "))+"."],
    s:[cap(S.slice(0,2).join("; "))+".",cap(SE.slice(0,2).join("; "))+"."]};
  /* süre: talimatlardaki dakika/saat ifadeleri + 15 dk hazırlık */
  let mins=0;const re=/(\d+(?:[.,]\d+)?)(?:\s*(?:-|to|–|or)\s*(\d+(?:[.,]\d+)?))?\s*(hours?|hrs?|minutes?|mins?)\b/gi;let x;
  while((x=re.exec(o.s||""))){let v=parseFloat(String(x[2]||x[1]).replace(",","."));if(/^h/i.test(x[3]))v*=60;if(v>0&&v<=720)mins+=v}
  mins=Math.min(480,Math.max(15,Math.round((mins+15)/5)*5));
  const fmt=(m,en)=>m<60?`≈ ${m} ${en?"min":"dk"}`:`≈ ${Math.floor(m/60)} ${en?"h":"sa"}${m%60?` ${m%60} ${en?"min":"dk"}`:""}`;
  const level=(o.g.length>12||steps.length>8||mins>90)?"Orta":"Kolay";
  return {diet,mins,time:fmt(mins,false),timeEn:fmt(mins,true),level};
}
const WB_COURSE={"Main course":["Ana yemek","Main course"],Dessert:["Tatlı","Dessert"],Soup:["Çorba / güveç","Soup / stew"],Salad:["Salata","Salad"],
  "Side dish":["Yan yemek","Side dish"],Appetizer:["Meze / başlangıç","Starter"],Snack:["Atıştırmalık","Snack"],Bread:["Ekmek / hamur işi","Bread & baking"],
  Breakfast:["Kahvaltı","Breakfast"],Beverage:["İçecek","Drink"],Sauce:["Sos","Sauce"]};
/* Wikibooks'taki "1 hour 30 minutes", "20–25 minutes" gibi süreleri dakikaya çevirir */
function wbMins(t){
  t=String(t||"").toLowerCase().replace(/½/g,".5").replace(/¼/g,".25").replace(/¾/g,".75");if(!t)return 0;
  let m=0,x;const re=/(\d+(?:\.\d+)?)(?:\s*(?:-|–|to)\s*(\d+(?:\.\d+)?))?\s*(days?|hours?|hrs?|h\b|minutes?|mins?|m\b)/g;
  while((x=re.exec(t))){let v=parseFloat(x[2]||x[1]);if(/^d/.test(x[3]))v*=1440;else if(/^h/.test(x[3]))v*=60;m+=v}
  if(!m&&/overnight/.test(t))m=720;
  return m>0&&m<=4320?Math.round(m):0;
}
const wbFmt=(m,en)=>m<60?`${m} ${en?"min":"dk"}`:m>=1440?`${Math.round(m/1440*10)/10} ${en?"days":"gün"}`:`${Math.floor(m/60)} ${en?"h":"sa"}${m%60?` ${m%60} ${en?"min":"dk"}`:""}`;
/* ---------- Fotoğrafı olmayan Wikibooks tarifleri için sitenin kendi çizimi ----------
   Yemeğin türüne (çorba, tatlı, ekmek…) ve ülkesinin rengine göre SVG çizer; dosyaya eklenmez, tarayıcıda üretilir. */
const WB_ART_TYPES=[
 ["drink",/\b(drink|tea|coffee|chai|juice|punch|smoothie|lemonade|cocktail|lassi|milkshake|shake|cider|wine|beer|liqueur|cordial|soda|eggnog|horchata|beverage)\b/],
 ["sauce",/\b(sauce|dressing|chutney|salsa|dip|relish|paste|spice|seasoning|marinade|jam|jelly|pickle|pickled|ketchup|mayonnaise|gravy|syrup|butter|masala|rub|pesto|hummus|preserve|marmalade|condiment)\b/],
 ["dessert",/\b(cake|cookies?|biscuits?|pie|pudding|dessert|sweet|candy|tart|ice cream|brownies?|fudge|custard|toffee|halwa|halva|baklava|doughnuts?|donuts?|cheesecake|mousse|trifle|truffles?|crumble|cobbler|meringue|pastry|pastries|kheer|flan|sorbet|chocolate|caramel|cupcakes?|muffins?|scones?|shortbread|strudel|torte|fritters?)\b/],
 ["bread",/\b(bread|buns?|rolls?|loaf|bagels?|pancakes?|crepes?|waffles?|flatbread|tortillas?|naan|chapati|roti|paratha|pita|focaccia|pretzels?|cornbread|injera|biscuit|dumplings?|pizza|sandwich|toast)\b/],
 ["soup",/\b(soup|stew|chowder|curry|dal|dhal|broth|bisque|gumbo|chili|chilli|goulash|pottage|porridge|congee|ragout|tagine|borscht|ramen|pho|egusi)\b/],
 ["salad",/\b(salad|slaw|coleslaw|ceviche|tabbouleh|raita)\b/],
 ["pasta",/\b(pasta|noodles?|spaghetti|macaroni|lasagn[ae]|ravioli|fettuccine|linguine|penne|gnocchi|vermicelli|udon|soba|lo mein|chow mein)\b/],
 ["rice",/\b(rice|jollof|pilaf|pilau|pulao|biryani|risotto|paella|jambalaya|couscous|grits|polenta|fufu|ugali|nshima|sadza|quinoa)\b/],
 ["fish",/\b(fish|salmon|tuna|cod|shrimp|prawns?|crab|lobster|mussels?|clams?|oysters?|squid|seafood|sardines?|mackerel|trout|tilapia|catfish|anchov\w*|herring|scallops?)\b/],
 ["egg",/\b(eggs?|omelet+e?|frittata|quiche|shakshuka)\b/],
 ["meat",/\b(chicken|beef|pork|lamb|mutton|goat|meat|kebabs?|steak|sausages?|ribs?|ham|bacon|turkey|duck|meatballs?|burgers?|brisket|roast|chops?|wings|suya|jerky|veal|liver)\b/],
 ["veg",/\b(vegetables?|potato(es)?|beans?|lentils?|chickpeas?|spinach|cabbage|eggplant|aubergine|okra|plantains?|yams?|cassava|mushrooms?|tofu|pumpkin|squash|carrots?|peas|corn|greens|cauliflower|broccoli|zucchini|peppers?|tomato(es)?)\b/]
];
function wbArtType(r){
  const t=(r.title+" "+(r.wbCourse||"")).toLowerCase();
  const c=r.wbCourse||"";
  if(c==="Beverage")return"drink";if(c==="Sauce")return"sauce";if(c==="Dessert")return"dessert";if(c==="Bread")return"bread";if(c==="Soup")return"soup";if(c==="Salad")return"salad";
  const hit=WB_ART_TYPES.find(([,re])=>re.test(t));return hit?hit[0]:"plate";
}
function wbArt(r){
  let h=0;for(const ch of r.title)h=(h*131+ch.charCodeAt(0))>>>0;
  const rnd=n=>{h=(h*1103515245+12345)>>>0;return (h>>>8)%n};
  const base=(r.country&&r.country.color)||"#8a3b2e";
  const type=wbArtType(r);
  const C={cream:"#FFF4E2",ink:"#2B1A14",plate:"#FBF7F1",rim:"#E9DFD2"};
  const pal={soup:["#E8892B","#C9561A","#F6C66B"],dessert:["#F2A7B8","#8A4B2D","#FFE3A3"],bread:["#D9A05B","#B87532","#F3D29A"],salad:["#6DB65B","#3E8E3A","#E94B3C"],
    pasta:["#F2C14E","#D9441F","#6DB65B"],rice:["#FFFFFF","#F2C14E","#6DB65B"],fish:["#F08A5D","#7FB3D5","#FFD27F"],egg:["#FFFFFF","#F7B32B","#6DB65B"],
    meat:["#9C4A2F","#6B2E1C","#6DB65B"],veg:["#6DB65B","#F08A2C","#C23B3B"],drink:["#F2A65A","#7FC8A9","#FFFFFF"],sauce:["#C8382B","#7A3B2E","#F2C14E"],plate:["#E07A3F","#6DB65B","#F2C14E"]}[type];
  const dots=Array.from({length:9},()=>`<circle cx="${rnd(400)}" cy="${rnd(400)}" r="${6+rnd(26)}" fill="#fff" opacity=".07"/>`).join("");
  const sprinkle=(cx,cy,R,n,cols)=>Array.from({length:n},()=>{const a=rnd(360)*Math.PI/180,d=rnd(R);return `<circle cx="${(cx+Math.cos(a)*d).toFixed(1)}" cy="${(cy+Math.sin(a)*d).toFixed(1)}" r="${3+rnd(5)}" fill="${cols[rnd(cols.length)]}"/>`}).join("");
  const shadow=`<ellipse cx="200" cy="300" rx="130" ry="22" fill="#000" opacity=".18"/>`;
  const plate=`${shadow}<ellipse cx="200" cy="250" rx="138" ry="62" fill="${C.rim}"/><ellipse cx="200" cy="244" rx="138" ry="60" fill="${C.plate}"/><ellipse cx="200" cy="244" rx="100" ry="42" fill="#F1E8DC"/>`;
  const bowl=(fill,top)=>`${shadow}<path d="M80 205 Q86 300 200 306 Q314 300 320 205 Z" fill="${C.plate}"/><path d="M80 205 Q86 300 200 306 Q314 300 320 205" fill="none" stroke="${C.rim}" stroke-width="6"/><ellipse cx="200" cy="205" rx="120" ry="30" fill="${C.rim}"/><ellipse cx="200" cy="205" rx="110" ry="24" fill="${fill}"/>${top||""}`;
  const art={
    soup:()=>bowl(pal[0],sprinkle(200,203,80,10,[pal[2],"#6DB65B","#fff"])+`<path d="M170 160 q-12 -22 0 -42 q12 -20 0 -40 M205 160 q-12 -22 0 -42 q12 -20 0 -40 M240 160 q-12 -22 0 -42" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" opacity=".55"/>`),
    rice:()=>bowl("#FFFDF7",`<path d="M95 205 Q200 120 305 205 Z" fill="#FFFDF7"/>`+sprinkle(200,185,70,14,[pal[1],pal[2],"#E8892B"])),
    salad:()=>bowl("#3E8E3A",Array.from({length:7},(_,i)=>`<ellipse cx="${120+i*27}" cy="${195-rnd(30)}" rx="34" ry="18" transform="rotate(${rnd(80)-40} ${120+i*27} ${195})" fill="${["#6DB65B","#8BC34A","#4CAF50"][i%3]}"/>`).join("")+sprinkle(200,185,75,8,[pal[2],"#F2C14E","#fff"])),
    pasta:()=>plate+Array.from({length:9},(_,i)=>`<path d="M${130+rnd(40)} ${225+rnd(30)} q${30+rnd(30)} -${20+rnd(25)} ${60+rnd(40)} 0 t${50+rnd(30)} 0" fill="none" stroke="${pal[0]}" stroke-width="9" stroke-linecap="round"/>`).join("")+`<ellipse cx="200" cy="238" rx="48" ry="20" fill="${pal[1]}" opacity=".9"/>`+sprinkle(200,236,40,6,[pal[2],"#fff"]),
    meat:()=>plate+`<path d="M135 255 Q130 200 200 196 Q280 194 268 245 Q262 275 200 274 Q140 276 135 255 Z" fill="${pal[0]}"/><path d="M150 240 Q200 215 250 236" fill="none" stroke="${pal[1]}" stroke-width="7" stroke-linecap="round"/><path d="M160 256 Q205 238 245 252" fill="none" stroke="${pal[1]}" stroke-width="6" stroke-linecap="round" opacity=".7"/>`+sprinkle(270,262,22,5,[pal[2],"#8BC34A"]),
    fish:()=>plate+`<path d="M120 245 Q190 190 265 240 L305 212 L298 245 L305 278 L265 250 Q190 300 120 245 Z" fill="${pal[0]}"/><circle cx="148" cy="238" r="6" fill="${C.ink}"/><path d="M190 222 q8 23 0 46 M215 222 q8 23 0 46" fill="none" stroke="#fff" stroke-width="4" opacity=".5"/>`+`<circle cx="292" cy="285" r="14" fill="${pal[2]}"/>`,
    egg:()=>plate+`<path d="M145 250 Q140 205 195 210 Q260 200 255 248 Q250 280 200 276 Q150 282 145 250 Z" fill="#fff"/><circle cx="200" cy="240" r="24" fill="${pal[1]}"/><circle cx="192" cy="232" r="7" fill="#fff" opacity=".5"/>`+sprinkle(200,244,70,5,[pal[2]]),
    veg:()=>plate+Array.from({length:6},()=>`<circle cx="${140+rnd(120)}" cy="${222+rnd(40)}" r="${14+rnd(14)}" fill="${pal[rnd(3)]}"/>`).join("")+sprinkle(200,244,80,6,["#fff","#3E8E3A"]),
    plate:()=>plate+`<path d="M140 252 Q150 200 200 205 Q258 205 262 250 Z" fill="${pal[0]}"/>`+sprinkle(200,232,45,9,[pal[1],pal[2],"#fff"]),
    bread:()=>`${shadow}<path d="M90 280 Q80 175 200 165 Q320 175 310 280 Z" fill="${pal[0]}"/><path d="M90 280 Q80 175 200 165 Q320 175 310 280" fill="none" stroke="${pal[1]}" stroke-width="8"/>${[150,200,250].map(x=>`<path d="M${x-22} 205 Q${x} 185 ${x+22} 205" fill="none" stroke="${pal[2]}" stroke-width="9" stroke-linecap="round"/>`).join("")}`,
    dessert:()=>`${shadow}<ellipse cx="200" cy="292" rx="140" ry="20" fill="${C.plate}"/><path d="M95 285 L95 205 L305 175 L305 255 Z" fill="${pal[2]}"/><path d="M95 205 L305 175 L305 192 L95 222 Z" fill="${pal[0]}"/><path d="M95 245 L305 215 L305 228 L95 258 Z" fill="${pal[1]}"/><path d="M95 205 Q140 160 200 150 Q270 145 305 175 Z" fill="${pal[0]}"/><circle cx="215" cy="140" r="16" fill="#D7263D"/><path d="M215 125 q6 -18 20 -22" fill="none" stroke="#3E8E3A" stroke-width="5" stroke-linecap="round"/>`,
    drink:()=>`${shadow}<path d="M135 110 L265 110 L245 300 Q200 312 155 300 Z" fill="#fff" opacity=".9"/><path d="M142 150 L258 150 L245 296 Q200 306 155 296 Z" fill="${pal[0]}"/><rect x="236" y="70" width="10" height="120" rx="5" transform="rotate(18 241 130)" fill="${pal[1]}"/><circle cx="170" cy="140" r="20" fill="${pal[1]}" opacity=".9"/>`+sprinkle(200,230,40,6,["#fff"]),
    sauce:()=>`${shadow}<rect x="130" y="130" width="140" height="170" rx="26" fill="${pal[0]}"/><rect x="138" y="138" width="20" height="150" rx="10" fill="#fff" opacity=".25"/><rect x="122" y="110" width="156" height="34" rx="10" fill="${pal[1]}"/><rect x="150" y="190" width="100" height="60" rx="10" fill="${C.cream}"/><circle cx="200" cy="220" r="14" fill="${pal[2]}"/>`
  };
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${base}"/><stop offset="1" stop-color="${base}" stop-opacity=".72"/></linearGradient></defs><rect width="400" height="400" fill="#1d1210"/><rect width="400" height="400" fill="url(#g)"/>${dots}<g>${(art[type]||art.plate)()}</g></svg>`;
  return "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg);
}
function mdbToRecipe(o){
  const c=mdbCountry(o.a),key="wb-"+o.i;
  const ing=o.L.filter(x=>!x.startsWith("§ ")),steps=o.s.filter(x=>!x.startsWith("§ "));
  const ad={g:[...ing,...(o.k||[])].map(x=>[x]),s:steps.join("\n"),c:o.c||""};
  const E=mdbEnrich(ad,steps);
  if(o.v>=1&&!E.diet.d.includes("veg"))E.diet.d.unshift("veg");
  if(o.v===2&&!E.diet.d.includes("vegan"))E.diet.d.splice(E.diet.d.indexOf("veg")+1,0,"vegan");
  const wm=wbMins(o.tm),mins=wm||E.mins;
  const level=o.df?(o.df<=2?"Kolay":o.df===3?"Orta":"Zor"):E.level;
  NEEDS[key]=mdbNeeds({g:((o.k&&o.k.length)?o.k:ing).map(x=>[x])});
  const course=WB_COURSE[o.c]||["Tarif","Recipe"];
  const url="https://en.wikibooks.org/wiki/Cookbook:"+encodeURIComponent(o.n.replace(/ /g,"_"));
  const credit=`Bu tarif Wikibooks Cookbook’tan alınmıştır ve CC BY-SA 4.0 lisansıyla paylaşılır; malzemeler ve yapılış özgün hâliyle İngilizcedir.`;
  const creditEn=`This recipe comes from the Wikibooks Cookbook and is shared under CC BY-SA 4.0.`;
  return {title:o.n,emoji:"🍽️",mins,time:wm?wbFmt(wm,false):E.time,serves:o.sv?o.sv+" kişilik":"—",level,diet:E.diet,
    desc:`${c.name} · ${course[0]} · Wikibooks`,yt:o.n+" recipe",ing,steps,
    tip:(o.nt&&o.nt[0])||"Wikibooks tarifi; içerik İngilizcedir.",story:credit+(o.in?" Wikibooks’taki açıklama: “"+o.in+"”":""),
    legend:false,img:o.p||wbArt({title:o.n,wbCourse:o.c,country:c}),src:"wb",wbId:o.i,wbCourse:o.c||"",ytUrl:"",key,country:c,order:RECIPES.length,
    wb:{url,drawn:!o.p,img:o.p?{a:o.pa||"",l:o.pl||"",u:o.pu||"",r:!!o.pr}:null},
    en:{time:wm?wbFmt(wm,true):E.timeEn,serves:o.sv?"Serves "+o.sv:"—",desc:`${o.a==="Unknown"?"World":o.a} · ${course[1]} · Wikibooks`,
      story:creditEn+(o.in?" "+o.in:""),tip:(o.nt&&o.nt[0])||"Recipe from the Wikibooks Cookbook."}};
}
function mdbMerge(list){
  if(!list||!list.length)return 0;
  const have=new Set(RECIPES.map(r=>r.key));let n=0;
  list.forEach(o=>{if(!o||!o.i||have.has("wb-"+o.i))return;const r=mdbToRecipe(o);if(!r.ing.length&&!r.steps.length)return;RECIPES.push(r);have.add(r.key);n++});
  MDB_INFO.count=RECIPES.filter(r=>r.src==="wb").length;
  try{MIX=null}catch(e){}
  return n;
}
mdbMerge(WB_DATA);
/* Wikibooks kaynak ve lisans notu (CC BY-SA 4.0 gereği her tarifte gösterilir) */
function wbCredit(r){
  if(!r.wb)return"";const en=LANG==="en",im=r.wb.img;
  return `<div class="wb-credit"><b>📖 ${en?"Source":"Kaynak"}:</b> <a href="${r.wb.url}" target="_blank" rel="noopener">Wikibooks Cookbook – ${esc(r.title)}</a>
    · ${en?"Licence":"Lisans"}: <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.${en?"en":"tr"}" target="_blank" rel="noopener">CC BY-SA 4.0</a>
    · ${en?"Adapted for this site’s layout.":"Sitenin düzenine uyarlanmıştır."}
    ${r.wb.drawn?`<br><b>🎨 ${en?"Image":"Görsel"}:</b> ${en?"Illustration drawn by Dünya Mutfağı (Wikibooks has no photo of this dish); not a photo of the actual recipe.":"Wikibooks’ta bu yemeğin fotoğrafı olmadığı için Dünya Mutfağı’nın kendi çizimidir; tarifin gerçek fotoğrafı değildir."}`:""}${im?`<br><b>📷 ${im.r?(en?"Representative photo (a similar dish, not this exact recipe)":"Temsilî fotoğraf (benzer bir yemek, bu tarifin kendisi değil)"):(en?"Photo":"Fotoğraf")}:</b> ${esc(im.a||"Wikimedia Commons")}${im.l?` · ${esc(im.l)}`:""}${im.u?` · <a href="${im.u}" target="_blank" rel="noopener">Wikimedia Commons</a>`:""}`:""}</div>`;
}

/* ---------- Diyet etkileri ve alerjenler ----------
   a: içerdiği alerjenler · m: çeşide/servise göre olabilecekler · d: uygun olduğu beslenme tipleri
   p: olumlu yanlar · w: dikkat · s: uyarlama önerisi (tr/en)                                    */
const ALG={
  gluten:["🌾","Gluten","Gluten"],sut:["🥛","Süt","Milk"],yumurta:["🥚","Yumurta","Egg"],
  kuruyemis:["🌰","Kuruyemiş","Tree nuts"],yerfistigi:["🥜","Yer fıstığı","Peanuts"],soya:["🫘","Soya","Soy"],
  balik:["🐟","Balık","Fish"],kabuklu:["🦐","Kabuklu deniz ürünü","Shellfish"],susam:["⚪","Susam","Sesame"],
  sulfit:["🍷","Sülfit","Sulphites"]
};
const DIETS={veg:["🌱","Vejetaryen","Vegetarian"],vegan:["🌿","Vegan","Vegan"],gf:["🌾","Glutensiz","Gluten-free"],df:["🥛","Sütsüz","Dairy-free"]};
const DIET={
 "tr-0":{a:["gluten","sut"],d:["veg"],
   p:["Kırmızı mercimek bitkisel protein ve lif açısından zengin; tok tutar.","Plant protein and fibre from red lentils; very filling."],
   w:["Un gluten, tereyağı süt içerir. Et suyu kullanılırsa vejetaryen olmaz.","Flour adds gluten, butter adds dairy. Not vegetarian if made with meat stock."],
   s:["Unu atla, tereyağı yerine zeytinyağı ve su kullan: vegan ve glutensiz olur.","Skip the flour and use olive oil and water: vegan and gluten-free."]},
 "tr-1":{a:[],d:["gf","df"],
   p:["Patlıcan lif, kıyma protein ve demir sağlar.","Aubergine gives fibre; the mince adds protein and iron."],
   w:["Kızartma yüzünden yağ ve kalori yüksek. Yanında verilen yoğurt süt içerir.","Frying makes it high in fat and calories. The yoghurt served alongside contains dairy."],
   s:["Patlıcanları yağ sürüp fırında pişirerek yağı büyük ölçüde azaltabilirsin.","Brush the aubergines with oil and bake them instead of frying to cut the fat."]},
 "tr-2":{a:["gluten","kuruyemis"],d:["veg","vegan","df"],
   p:["Buğday ve bakliyattan lif ile protein, kuru meyvelerden potasyum ve demir.","Fibre and protein from wheat and pulses; potassium and iron from dried fruit."],
   w:["Şekeri yüksek; kan şekerini hızla yükseltebilir. Ceviz ve fındık süslemede kullanılır.","High in sugar and can raise blood sugar quickly. Walnuts and hazelnuts are used as topping."],
   s:["Şekeri yarıya indir; kuruyemiş alerjisi varsa süslemeyi nar ve tarçınla yap.","Halve the sugar; for nut allergies, top with pomegranate and cinnamon only."]},
 "tr-3":{a:["gluten","sut"],d:[],
   p:["Et ve yoğurt sayesinde protein çok yüksek.","Very high in protein from the meat and yoghurt."],
   w:["Kızgın tereyağı ve pide nedeniyle yağ, kalori ve tuz yüksek.","Sizzling butter and bread make it high in fat, calories and salt."],
   s:["Tereyağını azalt, yoğurdu artır; pideyi küçük tut.","Use less butter and more yoghurt; keep the bread portion small."]},
 "tr-4":{a:["gluten","yumurta","sut"],d:[],
   p:["Yoğurt protein, kalsiyum ve probiyotik sağlar.","Yoghurt adds protein, calcium and probiotics."],
   w:["Hamur ve tereyağlı sos nedeniyle karbonhidrat ve yağ yüksek.","Dough and butter sauce make it high in carbs and fat."],
   s:["Sosta tereyağını azalt; laktoz hassasiyetinde laktozsuz yoğurt kullan.","Use less butter in the sauce; choose lactose-free yoghurt if needed."]},
 "tr-5":{a:["gluten","sut"],d:[],
   p:["Et protein, patlıcan lif sağlar; sütten kalsiyum gelir.","Protein from meat, fibre from aubergine and calcium from milk."],
   w:["Beşamel (tereyağı, un, süt, kaşar) doymuş yağı artırır.","The béchamel (butter, flour, milk, cheese) is high in saturated fat."],
   s:["Un yerine pirinç unu kullanırsan glutensiz olur.","Use rice flour instead of wheat flour to make it gluten-free."]},
 "tr-6":{a:["gluten","sut"],d:["veg"],
   p:["Mercimek ve bulgurdan lif ile bitkisel protein; kalorisi düşük.","Fibre and plant protein from lentils and bulgur; low in calories."],
   w:["Bulgur gluten, tereyağı süt içerir.","Bulgur contains gluten; butter contains dairy."],
   s:["Tereyağı yerine zeytinyağı kullan: vegan olur. Bulguru atlarsan glutensiz.","Use olive oil instead of butter for a vegan version; skip bulgur to make it gluten-free."]},
 "tr-7":{a:["gluten","sut","kuruyemis"],d:["veg"],
   p:["Antep fıstığı sağlıklı yağ ve biraz protein sağlar.","Pistachios add healthy fats and some protein."],
   w:["Şeker ve tereyağı çok yüksek; bir dilim bile kalorili. Fıstık alerjisi ciddi olabilir.","Very high in sugar and butter, so even one piece is rich. Pistachio allergy can be serious."],
   s:["Küçük porsiyon tercih et; şerbeti biraz daha az şekerle yapabilirsin.","Keep portions small; you can make the syrup with a little less sugar."]},
 "tr-8":{a:[],m:["kuruyemis"],d:["veg","vegan","gf","df"],
   p:["Şekersiz içilirse neredeyse hiç kalori yok.","Almost no calories when taken without sugar."],
   w:["Kafein içerir; hamilelikte, çarpıntı veya uyku sorununda sınırlı tüket. Yanındaki lokum fındık/fıstık içerebilir.","Contains caffeine; limit it during pregnancy or if you have palpitations or trouble sleeping. Turkish delight served alongside may contain nuts."],
   s:["Şekersiz ya da az şekerli tercih et.","Order it plain or with little sugar."]},
 "tr-9":{a:["gluten","sut"],d:[],
   p:["Tam buğday lifi ve etten protein.","Whole-wheat fibre and protein from the meat."],
   w:["Üzerine dökülen tereyağı yağı artırır.","The butter poured over it adds a lot of fat."],
   s:["Tavukla yapıp tereyağını azaltarak hafifletebilirsin.","Make it with chicken and less butter for a lighter dish."]},
 "tr-10":{a:["yumurta","sut"],d:["veg","gf"],
   p:["Yumurtadan protein, domates ve biberden C vitamini; karbonhidratı düşük.","Protein from eggs, vitamin C from tomatoes and peppers; low in carbs."],
   w:["Tereyağıyla yapılırsa süt içerir.","Contains dairy when made with butter."],
   s:["Zeytinyağıyla pişirirsen sütsüz olur.","Cook it in olive oil to make it dairy-free."]},
 "tr-11":{a:["kuruyemis"],d:["veg","vegan","gf","df"],
   p:["Zeytinyağı kalp dostu yağ sağlar; et içermez.","Olive oil provides heart-friendly fats; no meat."],
   w:["Salamura yaprak nedeniyle tuzu yüksek olabilir. Dolmalık fıstık (çam fıstığı) içerir.","Brined vine leaves can make it salty. Contains pine nuts."],
   s:["Yaprakları iyice haşlayıp tuzunu al; fıstık alerjisi varsa fıstığı çıkar.","Blanch the leaves well to remove salt; leave out the pine nuts for allergies."]},
 "tr-12":{a:["sut"],m:["gluten"],d:["veg","gf"],
   p:["Sütten kalsiyum ve protein.","Calcium and protein from milk."],
   w:["Şekeri yüksek. Pirinç unu yerine buğday nişastası kullanılırsa gluten içerebilir.","High in sugar. May contain gluten if wheat starch is used instead of rice flour."],
   s:["Laktozsuz süt kullanabilir, şekeri azaltabilirsin.","Use lactose-free milk and less sugar."]},
 "it-0":{a:["gluten","yumurta","sut"],d:[],
   p:["Yumurta ve peynirden protein.","Protein from eggs and cheese."],
   w:["Yumurta sosu tam pişmez; hamileler, küçük çocuklar ve bağışıklığı zayıf olanlar dikkat etmeli. Geleneksel guanciale domuz etidir.","The egg sauce is not fully cooked, so pregnant women, young children and people with weak immunity should be careful. Traditional guanciale is pork."],
   s:["Domuz eti yemiyorsan dana pastırma kullan; glutensiz makarna ile yapılabilir.","Use beef bacon if you don't eat pork; works with gluten-free pasta."]},
 "it-1":{a:["gluten","yumurta","sut"],d:["veg"],
   p:["Mascarpone ve yumurtadan biraz protein.","Some protein from mascarpone and eggs."],
   w:["Çiğ yumurta içerir; hamileler, çocuklar ve yaşlılar için riskli. Kahveden kafein, şeker ve yağ yüksek.","Contains raw egg, which is risky for pregnant women, children and older people. Caffeine from coffee; high in sugar and fat."],
   s:["Pastörize yumurta kullan; çocuklar için kafeinsiz kahve tercih et.","Use pasteurised eggs; choose decaf coffee for children."]},
 "it-2":{a:["gluten","sut"],d:["veg"],
   p:["Pişmiş domates likopen sağlar; sade içerikli.","Cooked tomato provides lycopene; simple ingredients."],
   w:["Beyaz un ve peynir nedeniyle tuz ve kalori yüksek.","White flour and cheese make it high in salt and calories."],
   s:["Glutensiz un karışımıyla ya da kısmen tam buğday unuyla yapılabilir.","Can be made with a gluten-free flour blend or part wholemeal flour."]},
 "jp-0":{a:["yumurta","soya","gluten","balik"],d:["df"],
   p:["Tavuk ve yumurtadan dengeli protein.","Balanced protein from chicken and egg."],
   w:["Soya sosu buğday içerir ve tuzu yüksektir; dashi balıktan (bonito) yapılır.","Soy sauce contains wheat and is high in salt; dashi is made from fish (bonito)."],
   s:["Glutensiz tamari kullan; balık alerjisinde dashi yerine tavuk suyu koy.","Use gluten-free tamari; swap dashi for chicken stock for fish allergies."]},
 "jp-1":{a:["soya","balik"],m:["gluten"],d:["df"],
   p:["Fermente miso bağırsak dostudur; kalorisi çok düşük, tofudan protein.","Fermented miso is gut-friendly; very low in calories with protein from tofu."],
   w:["Sodyumu yüksek; tansiyon hastaları dikkat etmeli. Bazı misolar arpa içerir.","High in sodium, so take care with high blood pressure. Some miso contains barley."],
   s:["Kombu dashi ile vegan olur; pirinç veya soya misosu glutensizdir.","Use kombu dashi for a vegan soup; rice or soy miso is gluten-free."]},
 "mx-0":{a:[],m:["gluten"],d:["veg","vegan","gf","df"],
   p:["Avokado kalp dostu yağ, lif ve potasyum sağlar.","Avocado provides heart-healthy fats, fibre and potassium."],
   w:["Kalorisi yağdan gelir; cipsle birlikte hızla artar. Bazı cipsler gluten içerebilir.","The calories come from fat and add up fast with chips. Some chips may contain gluten."],
   s:["Cips yerine havuç ve salatalık çubuklarıyla servis et.","Serve with carrot and cucumber sticks instead of chips."]},
 "mx-1":{a:["gluten","sut"],d:[],
   p:["Tavuk göğsünden yağsız protein.","Lean protein from chicken breast."],
   w:["Peynir ve ekşi krema doymuş yağı artırır.","Cheese and sour cream add saturated fat."],
   s:["Mısır tortilla ile glutensiz olur; peyniri azalt.","Use corn tortillas to make it gluten-free; use less cheese."]},
 "in-0":{a:["sut"],d:["gf"],
   p:["Tavuk ve yoğurttan bol protein; baharatlar lezzeti tuzsuz artırır.","Plenty of protein from chicken and yoghurt; spices add flavour without salt."],
   w:["Tereyağı ve krema doymuş yağ ve kaloriyi yükseltir.","Butter and cream raise the saturated fat and calories."],
   s:["Krema yerine yoğurt ya da hindistan cevizi sütü kullan.","Use yoghurt or coconut milk instead of cream."]},
 "in-1":{a:["sut"],d:["veg","gf"],
   p:["Mercimekten lif ve bitkisel protein; yağı düşük.","Fibre and plant protein from lentils; low in fat."],
   w:["Ghee süt ürünüdür.","Ghee is a dairy product."],
   s:["Ghee yerine sıvı yağ kullanırsan vegan olur.","Use vegetable oil instead of ghee for a vegan dal."]},
 "fr-0":{a:["gluten","yumurta","sut"],m:["kuruyemis"],d:["veg"],
   p:["Sade krep hafiftir; yumurta ve sütten protein.","A plain crêpe is light, with protein from egg and milk."],
   w:["Çikolata ve reçel şekeri artırır; fındık kremaları kuruyemiş içerir.","Chocolate and jam add sugar; hazelnut spreads contain nuts."],
   s:["Meyve ve yoğurtla servis et; glutensiz un ile de yapılabilir.","Serve with fruit and yoghurt; can be made with gluten-free flour."]},
 "fr-1":{a:["gluten","sut","sulfit"],d:[],
   p:["Soğan lif ve antioksidan sağlar.","Onions provide fibre and antioxidants."],
   w:["Şarap içerir; alkolün tamamı pişerken uçmaz. Peynir ve et suyundan tuz yüksek.","Contains wine, and not all the alcohol cooks off. Salty from the cheese and stock."],
   s:["Şarap yerine et suyu ve limon suyu kullan; ekmeği glutensiz seç.","Swap the wine for stock and lemon juice; use gluten-free bread."]},
 "cn-0":{a:["yerfistigi","soya","gluten"],d:["df"],
   p:["Tavuktan protein, yer fıstığından sağlıklı yağ.","Protein from chicken, healthy fats from peanuts."],
   w:["Yer fıstığı ciddi alerji yapabilir. Soya sosu buğday içerir ve tuzludur.","Peanuts can cause severe allergic reactions. Soy sauce contains wheat and is salty."],
   s:["Fıstık alerjisinde fıstığı kaju ya da kabak çekirdeğiyle değiştir; glutensiz tamari kullan.","For peanut allergies swap in cashews or pumpkin seeds; use gluten-free tamari."]},
 "cn-1":{a:["gluten","soya","susam"],d:["df"],
   p:["Et ve sebzeli dengeli iç; haşlanınca yağı düşük.","A balanced filling of meat and veg; low in fat when boiled."],
   w:["Batırma sosu nedeniyle tuz yüksek. Susam yağı içerir.","The dipping sauce is salty. Contains sesame oil."],
   s:["Kızartmak yerine haşla ya da buharda pişir; sosu az kullan.","Boil or steam rather than pan-fry; go easy on the sauce."]},
 "es-0":{a:[],d:["gf","df"],
   p:["Tavuk, fasulye ve zeytinyağıyla dengeli bir tabak.","A balanced plate with chicken, beans and olive oil."],
   w:["Pirinç nedeniyle porsiyon büyüdükçe karbonhidrat artar.","Rice makes it carb-heavy in large portions."],
   s:["Sebzeyi artır, pirinci biraz azalt.","Add more vegetables and a little less rice."]},
 "es-1":{a:["gluten","sulfit"],d:["veg","vegan","df"],
   p:["Çiğ sebzelerden C vitamini ve su; kalorisi düşük.","Vitamin C and water from raw vegetables; low in calories."],
   w:["Ekmek gluten, şeri sirkesi sülfit içerir.","The bread contains gluten; sherry vinegar contains sulphites."],
   s:["Ekmeği atlarsan glutensiz olur.","Leave out the bread to make it gluten-free."]},
 "th-0":{a:["yerfistigi","yumurta","soya","balik","kabuklu"],d:["df","gf"],
   p:["Karides/tavuk, tofu ve yumurtadan bol protein; pirinç eriştesi glutensizdir.","Lots of protein from prawns or chicken, tofu and egg; rice noodles are gluten-free."],
   w:["Birçok alerjen içerir: yer fıstığı, yumurta, soya, balık sosu ve karides. Şeker ve tuz yüksek.","Contains many allergens: peanuts, egg, soy, fish sauce and prawns. High in sugar and salt."],
   s:["Kabuklu alerjisinde tavuk kullan; fıstığı servis sırasında ayrı koy.","Use chicken for shellfish allergies; serve the peanuts on the side."]},
 "th-1":{a:["kabuklu","balik"],m:["soya"],d:["gf","df"],
   p:["Kalorisi düşük, karidesten protein; limon otu ve galangal aromatik.","Low in calories with protein from prawns; lemongrass and galangal add aroma."],
   w:["Balık sosu nedeniyle sodyum yüksek; çok acı olabilir. Biber salçası karides ve soya içerebilir.","High in sodium from fish sauce and can be very spicy. Chilli paste may contain shrimp and soy."],
   s:["Kabuklu alerjisinde tavuk ya da mantarla yap; acıyı azalt.","Make it with chicken or mushrooms for shellfish allergies; use less chilli."]},
 "kr-0":{a:["yumurta","soya","gluten","susam"],d:["df"],
   p:["Bol sebze, et, yumurta ve pirinçle çok dengeli bir kase.","A very balanced bowl with plenty of veg, meat, egg and rice."],
   w:["Gochujang ve soya sosu buğday içerebilir; tuz ve şeker ekler.","Gochujang and soy sauce may contain wheat and add salt and sugar."],
   s:["Eti tofu ile değiştirirsen vejetaryen olur; glutensiz gochujang ve tamari kullan.","Swap the meat for tofu to make it vegetarian; use gluten-free gochujang and tamari."]},
 "kr-1":{a:["yumurta","soya","gluten","susam"],d:["df"],
   p:["Et suyu ve yumurtadan protein; sindirimi kolay.","Protein from broth and egg; easy to digest."],
   w:["Pirinç keki yüksek karbonhidratlıdır. Soya sosu buğday içerir.","Rice cakes are high in carbs. Soy sauce contains wheat."],
   s:["Glutensiz tamari kullan; pirinç kekini azaltıp sebze ekle.","Use gluten-free tamari; use fewer rice cakes and add vegetables."]}
};
RECIPES.forEach(r=>{const d=DIET[r.key];if(d)r.diet=d});
const DT=(o)=>LANG==="en"?o[2]:o[1];
const dietI=(arr)=>arr[LANG==="en"?1:0];
function dietBadges(r){
  const d=r.diet;if(!d)return"";
  const tags=d.d.includes("vegan")?["vegan"]:d.d.includes("veg")?["veg"]:[];if(d.d.includes("gf"))tags.push("gf");
  return tags.length?`<div class="diet-badges">${tags.map(k=>`<span class="db db-${k}">${DIETS[k][0]} ${esc(DT(DIETS[k]))}</span>`).join("")}</div>`:"";
}
function dietHTML(r){
  const d=r.diet,en=LANG==="en";
  if(!d)return `<div class="story"><p>${en?"No diet information for this recipe yet.":"Bu tarif için henüz diyet bilgisi yok."}</p></div>`;
  const chip=k=>`<span class="alg">${ALG[k][0]} ${esc(DT(ALG[k]))}</span>`;
  const yes=Object.keys(DIETS).filter(k=>d.d.includes(k)),no=Object.keys(DIETS).filter(k=>!d.d.includes(k));
  return `<div class="diet">
    <h4>${en?"⚠️ Allergens":"⚠️ Alerjenler"}</h4>
    ${d.a.length?`<div class="alg-row">${d.a.map(chip).join("")}</div>`:`<p class="alg-none">${en?"None of the common allergens in the recipe.":"Tarifte yaygın alerjenlerden hiçbiri yok."}</p>`}
    ${d.m&&d.m.length?`<p class="alg-may">${en?"May contain, depending on brand or serving:":"Ürüne veya servise göre içerebilir:"} ${d.m.map(k=>esc(DT(ALG[k]))).join(", ")}</p>`:""}
    <h4>${en?"🥗 Suitable for":"🥗 Kimlere uygun?"}</h4>
    <div class="diet-row">${yes.map(k=>`<span class="dt ok">✓ ${esc(DT(DIETS[k]))}</span>`).join("")}${no.map(k=>`<span class="dt no">✗ ${esc(DT(DIETS[k]))}</span>`).join("")}</div>
    <h4>${en?"📊 Diet effects":"📊 Diyet etkileri"}</h4>
    ${r.kcal?`<p class="diet-kcal">🔥 ≈ ${r.kcal} kcal · ${esc(KU(r))}</p>`:""}
    <ul class="diet-list">
      <li><b>✅</b><span>${esc(dietI(d.p))}</span></li>
      <li><b>⚠️</b><span>${esc(dietI(d.w))}</span></li>
      <li><b>🔄</b><span>${esc(dietI(d.s))}</span></li>
    </ul>
    ${d.auto?`<p class="diet-note" style="margin-top:12px">🤖 ${en?"For Wikibooks recipes, allergies, diet suitability and (where Wikibooks gives none) time and difficulty are estimated automatically from the ingredient list and method; they may not be exact.":"Wikibooks tariflerinde alerjiler, diyet uygunluğu, süre ve zorluk malzeme listesinden ve yapılıştan otomatik tahmin edilir (süre ve zorluk Wikibooks’ta yazıyorsa oradan alınır); kesin olmayabilir."}</p>`:""}
    <p class="diet-note">${en?"General information, not medical advice. Always check product labels; if you have a serious allergy, watch for cross-contamination too.":"Bilgiler genel amaçlıdır, tıbbi tavsiye değildir. Kullandığın ürünlerin etiketlerini kontrol et; ciddi alerjin varsa çapraz bulaşmaya da dikkat et."}</p>
  </div>`;
}

let state={country:"all",q:"",level:"",sort:"default",onlyFav:false,legendOnly:false,open:null,tab:"ing",step:0};
let PHOTOS={}, assetsApi=null, dbApi=null;
const photoUrl=key=>PHOTOS[key]?"/_blob/"+PHOTOS[key]:(EMBED[key]||null);
const ICON_CAM='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>';
document.addEventListener("error",e=>{const im=e.target;if(!im||im.tagName!=="IMG"||im.dataset.fb)return;im.dataset.fb="1";
  try{const host=im.closest("[data-key]"),k=host&&host.dataset.key;let r=k&&RECIPES.find(x=>x.key===k);
    if(!r&&im.alt)r=RECIPES.find(x=>L(x,"title")===im.alt);
    if(r&&r.src==="wb"){im.src=wbArt({title:r.title,wbCourse:r.wbCourse,country:r.country});return}}catch(_){}
  im.alt="";im.style.visibility="hidden"},true);
function artHTML(r){const u=r.img||photoUrl(r.key);return u?`<img decoding="async" src="${u}" alt="${esc(L(r,"title"))}" loading="lazy">`:r.emoji}
let PROFILE=(()=>{
  const ok=n=>{try{const u=JSON.parse(localStorage.getItem("bm-auth-users")||"{}");return !!(n&&u[String(n).trim().replace(/\s+/g," ").toLocaleLowerCase("tr")]&&store.get("bm-profiles",{})[n])}catch(e){return false}};
  try{const s=sessionStorage.getItem("bm-session");if(s){const n=JSON.parse(s);if(ok(n))return n}}catch(e){}
  const r=store.get("bm-session",null);return ok(r)?r:null})();
const K=k=>PROFILE?k+"@"+PROFILE:k;
let favs=new Set(PROFILE?store.get(K("bm-favs"),[]):[]);
let checks=PROFILE?store.get(K("bm-checks"),{}):{};

function isDark(){const t=document.documentElement.getAttribute("data-theme");if(t)return t==="dark";return matchMedia("(prefers-color-scheme: dark)").matches}
const col=c=>isDark()?c.dark:c.color;

function toast(msg){const t=$("toast");t.textContent=msg;t.classList.add("show");clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove("show"),1900)}

/* ---------- list ---------- */
/* "Tümü" görünümünde yemekler karışık sıralanır: her ülke listeye eşit aralıklarla dağılır,
   yan yana aynı ülke gelmez. Sıra sayfa her açıldığında yeniden karılır. */
let MIX=null;
function mixRank(r){
  if(!MIX){
    const by={};RECIPES.forEach(x=>(by[x.country.id]=by[x.country.id]||[]).push(x));
    const keyed=[];
    Object.values(by).forEach(arr=>{for(let i=arr.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[arr[i],arr[j]]=[arr[j],arr[i]]}
      const off=Math.random();arr.forEach((x,i)=>keyed.push([x,(i+off)/arr.length+Math.random()*.02]))});
    keyed.sort((p,q)=>p[1]-q[1]);const out=keyed.map(k=>k[0]);
    for(let i=1;i<out.length;i++)if(out[i].country.id===out[i-1].country.id){
      const j=out.findIndex((x,k)=>k>i&&x.country.id!==out[i-1].country.id&&(!out[k+1]||out[k+1].country.id!==out[i].country.id||true));
      if(j>0){const t=out[j];out.splice(j,1);out.splice(i,0,t)}}
    MIX=new Map(out.map((x,i)=>[x.key,i]));
  }
  return MIX.get(r.key)??999;
}
function filtered(){
  const q=norm(state.q.trim());
  let list=RECIPES.filter(r=>
    (state.country==="all"||r.country.id===state.country)&&
    (!state.level||r.level===state.level)&&
    (!state.onlyFav||favs.has(r.key))&&
    (!state.legendOnly||r.legend)&&
    (!state.srcOnly||r.src==="wb")&&
    (!q||norm([L(r,"title"),L(r,"desc"),CN(r.country),L(r,"story"),...L(r,"ing"),r.title].join(" ")).includes(q)));
  if(state.sort==="fast")list.sort((a,b)=>a.mins-b.mins);
  else if(state.sort==="az")list.sort((a,b)=>L(a,"title").localeCompare(L(b,"title"),LANG));
  else if(state.sort==="kcal")list.sort((a,b)=>(a.kcal||9999)-(b.kcal||9999));
  else if(state.country==="all")list.sort((a,b)=>mixRank(a)-mixRank(b));
  return list;
}

function renderChips(){
  const all=[{id:"all",name:t("all"),flag:"🌍"},...DATA];
  $("chips").innerHTML=all.map(c=>{
    const n=c.id==="all"?RECIPES.length:RECIPES.filter(r=>r.country===c).length;
    return `<button class="chip" data-id="${c.id}" aria-pressed="${state.country===c.id}" style="${c.id!=="all"?`--c:${c.color}`:""}"><span>${FL(c)}</span>${CN(c)}<span class="n">${n}</span></button>`}).join("");
  $("chips").querySelectorAll(".chip").forEach(b=>b.onclick=()=>{state.country=b.dataset.id;renderChips();renderGrid()});
}

let gridShow=48;
function renderGrid(keep){
  const list=filtered();if(!keep)gridShow=48;
  $("count").textContent=list.length?t("count",list.length,state.onlyFav):"";
  const plain=state.country==="all"&&!state.q&&!state.level&&!state.onlyFav&&!state.legendOnly;
  $("legends").hidden=true;
  if(!list.length){
    $("grid").innerHTML=`<div class="empty"><b>${state.onlyFav&&!favs.size?t("noFavT"):t("noResT")}</b>${state.onlyFav&&!favs.size?t("noFavD"):t("noResD")}<br><button class="btn" id="reset">${t("clearFilters")}</button></div>`;
    $("reset").onclick=resetFilters;return;
  }
  const shown=list.slice(0,gridShow),rest=list.length-shown.length;
  $("grid").innerHTML=shown.map(r=>`
    <article class="card" style="--c:${col(r.country)}" data-key="${r.key}" tabindex="0" role="button" aria-label="${esc(t("openRecipe",L(r,"title")))}">
      <div class="art"><span class="fl">${FL(r.country)} ${CN(r.country)}</span>${artHTML(r)}</div>
      <button class="fav" data-fav="${r.key}" aria-pressed="${favs.has(r.key)}" aria-label="${t("addFav")}">${ICON_HEART}</button>
      <div class="body">
        ${r.legend?`<span class="legend-badge">${t("histBadge")}</span>`:""}${r.src==="wb"?`<span class="mdb-tag">📖 Wikibooks · EN</span>`:""}
        <h3>${esc(L(r,"title"))}</h3>
        <p>${esc(L(r,"desc"))}</p>
        ${dietBadges(r)}
        <div class="meta"><span>${ICON_CLOCK}${esc(L(r,"time"))}</span><span>${ICON_BAR}${esc(LV(r.level))}</span>${r.kcal?`<span title="${esc(KU(r))}">🔥 ${r.kcal} kcal</span>`:""}</div>
      </div>
    </article>`).join("")+(rest>0?`<div style="grid-column:1/-1;text-align:center;margin-top:6px"><button class="btn" id="gridMore">${LANG==="en"?`Show more (${rest} more recipes)`:`Daha fazla göster (${rest} tarif daha)`}</button></div>`:"");
  {const gm=$("gridMore");if(gm)gm.onclick=()=>{gridShow+=48;renderGrid(true)}}
  $("grid").querySelectorAll(".card").forEach(c=>{
    c.onclick=e=>{if(e.target.closest(".fav"))return;openSheet(c.dataset.key)};
    c.onkeydown=e=>{if((e.key==="Enter"||e.key===" ")&&e.target===c){e.preventDefault();openSheet(c.dataset.key)}};
  });
  $("grid").querySelectorAll(".fav").forEach(b=>b.onclick=e=>{e.stopPropagation();toggleFav(b.dataset.fav)});
}

function renderLegends(){
  const list=RECIPES.filter(r=>r.legend);
  $("lgTrack").innerHTML=list.map(r=>`
    <button class="lg-card" data-key="${r.key}" style="--c:${col(r.country)}">
      <div class="lg-art">${artHTML(r)}</div>
      <div class="lg-body"><small>${FL(r.country)} ${CN(r.country)}</small><h3>${esc(L(r,"title"))}</h3><p>${esc(L(r,"story"))}</p><span class="more">${t("readStory")}</span></div>
    </button>`).join("");
  $("lgTrack").querySelectorAll(".lg-card").forEach(b=>b.onclick=()=>openSheet(b.dataset.key,"story"));
}
function renderHero(){
  $("heroFlags").innerHTML=DATA.filter(c=>!c.mdb).map(c=>`<span title="${CN(c)}">${FL(c)}</span>`).join("");
  {const hd=$("heroDishes");if(hd){const item=(r,dup)=>`<button type="button" class="hd-item" data-key="${r.key}"${dup?' tabindex="-1" aria-hidden="true"':""}><span class="hd-img">${artHTML(r)}</span><span class="hd-txt"><b>${esc(L(r,"title"))}</b><small>${FL(r.country)} ${esc(CN(r.country))}</small></span></button>`;
    const HR=RECIPES.filter(r=>r.src!=="wb").concat(RECIPES.filter(r=>r.src==="wb"&&r.wb&&!r.wb.drawn).slice(0,16));hd.innerHTML=`<div class="hd-track">${HR.map(r=>item(r)).join("")}${HR.map(r=>item(r,1)).join("")}</div>`;
    hd.querySelectorAll(".hd-item").forEach(b=>b.onclick=()=>openSheet(b.dataset.key))}}
  $("heroText").textContent=t("heroText",DATA.length,RECIPES.length);
}
function resetFilters(){state={...state,country:"all",q:"",level:"",sort:"default",onlyFav:false,legendOnly:false,srcOnly:false};if(typeof mdbStatic==="function")mdbStatic();$("legendToggle").setAttribute("aria-pressed","false");$("q").value="";$("level").value="";$("sort").value="default";$("favToggle").setAttribute("aria-pressed","false");renderChips();renderGrid()}

function toggleFav(key){
  if(!PROFILE){askAccount("fav");return}
  const r=RECIPES.find(x=>x.key===key);
  if(favs.has(key)){favs.delete(key);toast(t("favRemoved",L(r,"title")))}else{favs.add(key);toast(t("favAdded",L(r,"title")));if(typeof logEvent==="function")logEvent("f",key)}
  store.set(K("bm-favs"),[...favs]);updateFavBadge();renderGrid();
  if(state.open===key)$("sheetFav").setAttribute("aria-pressed",favs.has(key));
}
function updateFavBadge(){setTimeout(()=>{if(typeof mnavUpdate==="function")mnavUpdate()},0);const b=$("favCount");b.textContent=favs.size;b.hidden=!favs.size}

/* ---------- detail ---------- */
let lastFocus=null;
function openSheet(key,tab){
  lastFocus=document.activeElement;
  state.open=key;state.tab=tab||"ing";if(typeof trackView==="function")trackView(key);if(state.tab==="story"&&typeof trackStory==="function")trackStory();
  renderSheet();
  $("sheet").classList.add("open");$("scrim").classList.add("open");$("sheet").setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
  setTimeout(()=>$("closeSheet").focus(),50);
}
function closeSheet(){setTimeout(()=>{if(typeof aiRenderSugs==="function"&&!$("aiPanel").hidden)aiRenderSugs()},0);
  $("sheet").classList.remove("open");$("scrim").classList.remove("open");$("sheet").setAttribute("aria-hidden","true");
  document.body.style.overflow="";state.open=null;lastFocus&&lastFocus.focus();
}
function wItem(x){
  const city=LANG==="en"?(CITY_EN[x.c]||x.c.replace(/İstanbul/g,"Istanbul")):x.c;
  return `<li>
      <div class="w-head"><b>${esc(x.n)}</b><span>📍 ${esc(city)}</span></div>
      <p>${esc(x[LANG]||x.tr)}</p>
      ${x.ptr?`<div class="w-price">💰 ${esc(LANG==="en"?x.pen:x.ptr)}</div>`:`<div class="w-price none">💰 ${t("noPrice")}</div>`}
      <a class="link-btn w-map" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(x.n+" "+x.c)}" target="_blank" rel="noopener">🗺️ ${t("openMap")}</a>
    </li>`;
}
/* Wikibooks tarifleri için "Nerede yenir?": doğrulanmış restoran verisi olmadığından harita aramaları sunulur */
function trLoc(w){const s=String(w).trim(),low=s.toLocaleLowerCase("tr"),v=[...low].reverse().find(c=>"aeıioöuü".includes(c))||"a",back="aıou".includes(v),hard="çfhkpsşt".includes(low.slice(-1));return s+"’"+(hard?"t":"d")+(back?"a":"e")}
function mdbWhereHTML(r){
  const en=LANG==="en",dish=r.title,cn=CN(r.country),area=(r.desc||"").split(" · ")[0];
  const map=q=>"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(q);
  const card=(title,place,text,q,btn)=>`<li><div class="w-head"><b>${esc(title)}</b><span>📍 ${esc(place)}</span></div><p>${esc(text)}</p><a class="link-btn w-map" href="${map(q)}" target="_blank" rel="noopener">🗺️ ${esc(btn)}</a></li>`;
  const home=r.country.id==="x-unknown";
  let out=`<h3 class="w-title">${t("whereWorld")}</h3><ul class="where">`;
  if(!home)out+=card(en?`${dish} in ${cn}`:`${trLoc(cn)} ${dish}`,cn,
    en?`This dish belongs to ${area||cn} cuisine. See restaurants in ${cn} that serve it, with their ratings and prices, on the map.`:`Bu yemek ${cn} mutfağına ait. ${trLoc(cn)} bu yemeği sunan restoranları puanları ve fiyatlarıyla haritada görebilirsin.`,
    `${dish} restaurant ${EN_COUNTRY[r.country.id]?EN_COUNTRY[r.country.id].name:cn}`,en?"Find on the map":"Haritada bul");
  out+=card(en?"Near you":"Yakınında",en?"Your location":"Konumun",
    en?`Restaurants near you that serve ${dish} or ${area} food.`:`Yakınında ${dish} ya da ${cn} mutfağı sunan restoranlar.`,
    `${dish} near me`,en?"Search near me":"Yakınımda ara");
  out+=`</ul><h3 class="w-title">${t("whereTR")}</h3><ul class="where">`;
  [["İstanbul","Istanbul"],["Ankara","Ankara"],["İzmir","Izmir"]].forEach(([c,ce])=>{
    out+=card(en?`${area} restaurants in ${ce}`:`${trLoc(c)} ${cn} mutfağı`,en?ce:c,
      en?`Restaurants in ${ce} serving ${area} cuisine; check the menu for ${dish}.`:`${trLoc(c)} ${cn} mutfağı sunan restoranlar. Menüde ${dish} olup olmadığına bakabilirsin.`,
      `${area} restaurant ${ce}`,en?"Find on the map":"Haritada bul")});
  return out+`</ul><p class="w-note">${en?"There is no verified restaurant data for this recipe, so these buttons search Google Maps; results and prices come from there.":"Bu tarif için doğrulanmış restoran bilgisi yok; bu düğmeler Google Haritalar’da arama yapar, sonuçlar ve fiyatlar oradan gelir."}</p>`;
}
function whereHTML(r){
  if(r.src==="wb")return mdbWhereHTML(r);
  const list=WHERE[r.key],tr=WHERE_TR[r.key];
  let out="";
  if(tr)out+=`<h3 class="w-title">${t("whereWorld")}</h3>`;
  out+=list?`<ul class="where">${list.map(wItem).join("")}</ul>`:`<div class="story"><p>${esc(WHERE_NONE[LANG])}</p></div>`;
  if(tr)out+=`<h3 class="w-title">${t("whereTR")}</h3><p class="w-note" style="margin:0 2px 10px">${t("whereTRNote")}</p><ul class="where">${tr.map(wItem).join("")}</ul>`;
  return out+`<p class="w-note">${t("whereNote")}</p>`;
}
function renderSheet(){
  const r=RECIPES.find(x=>x.key===state.open);if(!r)return;
  const c=col(r.country);
  $("sheet").style.setProperty("--c",c);
  $("sheetFav").setAttribute("aria-pressed",favs.has(r.key));
  const ck=checks[r.key]||[];
  const done=ck.length, total=r.ing.length;
  const yt=r.ytUrl||"https://www.youtube.com/results?search_query="+encodeURIComponent(L(r,"yt"));
  $("sheetBody").innerHTML=`
    <div class="cover">${artHTML(r)}
    </div>
    <div class="d-inner">
      <div class="d-country">${FL(r.country)} ${esc(t("cuisine",r.country))}${r.legend?" · "+t("histBadge"):""}</div>
      <h2 id="dTitle">${esc(L(r,"title"))}</h2>
      <p class="d-desc">${esc(L(r,"desc"))}</p>
      <div class="stats">
        <div class="stat"><small>${t("time")}</small><b>${esc(L(r,"time"))}</b></div>
        <div class="stat"><small>${t("serves")}</small><b>${esc(L(r,"serves"))}</b></div>
        <div class="stat"><small>${t("level")}</small><b>${esc(LV(r.level))}</b></div>
        ${r.kcal?`<div class="stat"><small>${t("kcal")}</small><b>≈ ${r.kcal} kcal</b><em class="kcal-u">${esc(KU(r))}</em></div>`:""}
      </div>
      ${r.kcal?`<p class="kcal-note">🔥 ${t("kcalNote")}</p>`:""}
      <div class="actions">
        <button class="btn primary" id="startCook">${ICON_PLAY}${t("startCook")}</button>
        <a class="btn yt" href="${yt}" target="_blank" rel="noopener">${ICON_YT}${t("watchYT")}</a>
        ${typeof aiSample!=="undefined"&&aiSample?`<button class="btn ai-ask" id="sheetAsk">${at("ask")}</button>`:""}
        ${PROFILE?(()=>{const n=(getDone()[r.key]||[]).length;return `<button class="btn done-btn${n?" on":""}" id="markDone" type="button">${esc(n?gt("doneAgain",n):gt("done"))}</button>`})():""}
      </div>
      ${PROFILE?`<details class="note-box"${getNotes()[r.key]?" open":""}><summary>${esc(gt("note"))}<em id="noteSaved"></em></summary><textarea id="recipeNote" rows="3" maxlength="500" placeholder="${esc(gt("notePh"))}">${esc(getNotes()[r.key]||"")}</textarea></details>`:""}
      <div class="seg" role="tablist">
        <button role="tab" data-tab="ing" aria-selected="${state.tab==="ing"}">${t("tabIng",total)}</button>
        <button role="tab" data-tab="steps" aria-selected="${state.tab==="steps"}">${t("tabSteps")}</button>
        <button role="tab" data-tab="story" aria-selected="${state.tab==="story"}">${t("tabStory")}</button>
        <button role="tab" data-tab="where" aria-selected="${state.tab==="where"}">${t("tabWhere")}</button>
        <button role="tab" data-tab="diet" aria-selected="${state.tab==="diet"}">${LANG==="en"?"Diet & allergies":"Diyet & alerji"}</button>
      </div>
      <div id="tabBody">${state.tab==="diet"?dietHTML(r):state.tab==="where"?whereHTML(r):state.tab==="story"?`
        <div class="story"><p>${esc(L(r,"story"))}</p>${wbCredit(r)}</div>`
      :state.tab==="ing"?`
        <div class="progress"><span>${t("ready",done,total)}</span><div class="track"><div class="fill" style="width:${done/total*100}%"></div></div></div>
        <ul class="ing">${L(r,"ing").map((x,i)=>`<li><label><input type="checkbox" data-i="${i}" ${ck.includes(i)?"checked":""}><span>${esc(x)}</span></label></li>`).join("")}</ul>
        <div class="row-actions"><button class="link-btn" id="clearChecks">${t("clearChecks")}</button></div>`
      :`<ol class="steps">${L(r,"steps").map((s,i)=>`<li><span class="num">${i+1}</span><span>${esc(s)}</span></li>`).join("")}</ol>`}
        ${state.tab!=="story"&&state.tab!=="where"&&state.tab!=="diet"?`<div class="tip"><span>💡</span><div><b>${t("tip")}</b> ${esc(L(r,"tip"))}</div></div>`:""}
      </div>
    </div>`;
  $("sheetBody").querySelectorAll(".seg button").forEach(b=>b.onclick=()=>{if(b.dataset.tab==="story"&&state.tab!=="story"&&typeof trackStory==="function")trackStory();state.tab=b.dataset.tab;renderSheet()});
  $("startCook").onclick=()=>openCook();
  $("sheetBody").querySelectorAll(".ing input").forEach(inp=>inp.onchange=()=>{
      if(!PROFILE){inp.checked=!inp.checked;askAccount("check");return}
    const set=new Set(checks[r.key]||[]);const i=+inp.dataset.i;inp.checked?set.add(i):set.delete(i);
    checks[r.key]=[...set];store.set(K("bm-checks"),checks);
    const d=checks[r.key].length;
    $("sheetBody").querySelector(".progress span").textContent=t("ready",d,total);
    $("sheetBody").querySelector(".fill").style.width=(d/total*100)+"%";
    if(d===total)toast(t("allReady"));
  });
  const sa=$("sheetAsk");if(sa)sa.onclick=()=>openAi();
  const md=$("markDone");if(md)md.onclick=()=>markDone(r.key);
  if(typeof bindRecipeNote==="function")bindRecipeNote(r);
  if(typeof aiRenderSugs==="function"&&!$("aiPanel").hidden)aiRenderSugs();
  const pb=$("photoBtn");if(pb)pb.onclick=()=>$("photoInput").click();
  const pd=$("photoDel");if(pd)pd.onclick=removePhoto;
  const cl=$("clearChecks");if(cl)cl.onclick=()=>{checks[r.key]=[];store.set(K("bm-checks"),checks);renderSheet()};
}

async function copyList(){
  if(!PROFILE){askAccount("list");return}
  const r=RECIPES.find(x=>x.key===state.open);if(!r)return;
  const ck=new Set(checks[r.key]||[]);
  const ING=L(r,"ing");const missing=ING.filter((_,i)=>!ck.has(i));
  const text=t("shopTitle",L(r,"title"))+"\n"+(missing.length?missing:ING).map(x=>"• "+x).join("\n");
  try{await navigator.clipboard.writeText(text);toast(ck.size?t("copiedMissing"):t("copiedList"))}
  catch(e){toast(t("copyFail"))}
}

/* ---------- voice ---------- */
const canSpeak="speechSynthesis" in window&&typeof SpeechSynthesisUtterance!=="undefined";
let voiceOn=canSpeak&&store.get("bm-voice",false)===true;
const FEMALE=/(female|kadın|woman|yelda|emel|seda|filiz|samantha|zira|karen|victoria|susan|allison|ava|serena|moira|tessa|fiona|aria|jenny|libby|sonia|kyoko|o-ren|yuna|sora|mei-?jia|ting-?ting|sin-?ji|haruka|ayumi|nanami|sayaka|heami|sunhi|jimin|huihui|yaoyao|xiaoxiao|xiaoyi|hsiaochen|hanhan|kanya|premwadee|achara|linh|hoaimy|damayanti|gadis|amira|lekha|swara|neerja|kalpana|heera)/i;
const ASIA=/^(ja|ko|zh|th|vi|id|ms|hi|ta|te|bn|fil|km|lo|my|ne|si|mn)/i;
let voiceName=store.get("bm-voice-name","");
const FEMALE_PITCH=1.6;
let pitchTouched=store.get("bm-pitch-set",false)===true;
let pitchV=pitchTouched?(+store.get("bm-pitch",FEMALE_PITCH)||FEMALE_PITCH):FEMALE_PITCH;
function effPitch(){
  if(pitchTouched)return pitchV;
  const v=pickVoice(LANG==="en"?"en-US":"tr-TR");
  return v&&FEMALE.test(v.name)?1:FEMALE_PITCH;
}
function pitchWord(v){return v<0.95?t("pLow"):v<1.25?t("pNormal"):v<1.75?t("pHigh"):t("pVeryHigh")}
function updatePitchUI(){
  const row=$("pitchRow");if(!row)return;row.hidden=!canSpeak;
  const ep=effPitch();$("pitch").value=ep;$("pitchVal").textContent=pitchWord(ep);$("pitchLbl").textContent=t("pitchLbl");
  const fb=$("femaleBtn");fb.textContent=t("femaleBtn");fb.setAttribute("aria-pressed",ep>=1.4);
}
function allVoices(){try{return speechSynthesis.getVoices()||[]}catch(e){return[]}}
function pickVoice(lang){
  const vs=allVoices();const pre=lang.slice(0,2).toLowerCase();
  if(voiceName){const c=vs.find(v=>v.name===voiceName);if(c)return c}
  const same=vs.filter(v=>v.lang&&v.lang.toLowerCase().startsWith(pre));
  return same.find(v=>FEMALE.test(v.name))||same.find(v=>v.lang===lang)||same[0]||null;
}
function fillVoiceSel(){
  const sel=$("voiceSel");if(!sel||!canSpeak)return;
  const vs=allVoices();sel.hidden=!vs.length;if(!vs.length)return;
  const pre=LANG==="en"?"en":"tr";
  const isF=v=>FEMALE.test(v.name);
  const lab=v=>`${isF(v)?"♀ ":""}${v.name} (${v.lang})`;
  const opt=v=>`<option value="${esc(v.name)}"${v.name===voiceName?" selected":""}>${esc(lab(v))}</option>`;
  const mine=vs.filter(v=>v.lang&&v.lang.toLowerCase().startsWith(pre));
  const asia=vs.filter(v=>v.lang&&ASIA.test(v.lang)).sort((a,b)=>isF(b)-isF(a));
  const rest=vs.filter(v=>!mine.includes(v)&&!asia.includes(v));
  sel.innerHTML=`<option value=""${!voiceName?" selected":""}>${esc(t("voiceAuto"))}</option>`+
    (mine.length?`<optgroup label="${esc(t("groupLang"))}">${mine.map(opt).join("")}</optgroup>`:"")+
    (asia.length?`<optgroup label="${esc(t("groupAsia"))}">${asia.map(opt).join("")}</optgroup>`:"")+
    (rest.length?`<optgroup label="${esc(t("groupOther"))}">${rest.map(opt).join("")}</optgroup>`:"");
  sel.setAttribute("aria-label",t("voicePick"));sel.title=t("voicePick");
}
function speak(text){
  if(!canSpeak||!voiceOn||!text)return;
  try{
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text);
    const lang=LANG==="en"?"en-US":"tr-TR";u.lang=lang;const v=pickVoice(lang);if(v){u.voice=v;u.lang=v.lang}
    u.rate=.95;u.pitch=Math.min(2,Math.max(0,effPitch()));speechSynthesis.speak(u);
  }catch(e){}
}
function stopSpeak(){if(canSpeak){try{speechSynthesis.cancel()}catch(e){}}}
if(canSpeak){try{speechSynthesis.getVoices();speechSynthesis.onvoiceschanged=()=>fillVoiceSel()}catch(e){}}
function updateVoiceBtn(){
  const b=$("voiceBtn");if(!b)return;
  b.hidden=!canSpeak;b.setAttribute("aria-pressed",voiceOn);fillVoiceSel();updatePitchUI();
  b.querySelector(".vi").textContent=voiceOn?"🔊":"🔇";
  $("voiceLbl").textContent=voiceOn?t("voiceOnL"):t("voiceOffL");
}
function currentStepText(){const r=RECIPES.find(x=>x.key===state.open);if(!r)return"";return t("step",state.step+1)+". "+L(r,"steps")[state.step]}

/* ---------- cooking mode ---------- */
let timer={left:0,total:0,h:null,running:false};
function stepMinutes(s){const m=s.match(/(\d+)(?:\s*[–-]\s*(\d+))?\s*(dakika|saniye|minutes?|seconds?)(?!\s*(az|less))/i);if(!m)return 0;const n=+(m[2]||m[1]);return /^(saniye|second)/i.test(m[3])?n/60:n}
function openCook(){if(!PROFILE){askAccount("cook");return}if(typeof trackCook==="function")trackCook(state.open);state.step=0;$("cook").classList.add("open");renderCook();setTimeout(()=>$("nextStep").focus(),50)}
function closeCook(){stopTimer();stopSpeak();$("cook").classList.remove("open");$("startCook")&&$("startCook").focus()}
function renderCook(){
  const r=RECIPES.find(x=>x.key===state.open);const n=r.steps.length;
  $("cook").style.setProperty("--c",col(r.country));
  $("cookTitle").innerHTML=`${esc(L(r,"title"))}<small>${t("stepOf",state.step+1,n)}</small>`;
  $("dots").innerHTML=r.steps.map((_,i)=>`<i class="${i<=state.step?"on":""}"></i>`).join("");
  const s=L(r,"steps")[state.step];const mins=stepMinutes(s);
  stopTimer();timer.total=timer.left=Math.round(mins*60);
  $("cookMain").innerHTML=`<div class="lbl">${t("step",state.step+1)}${canSpeak?` <button class="link-btn again" id="readAgain">🔁 ${t("readAgain")}</button>`:""}</div><p>${esc(s)}</p>
    ${mins?`<div class="timer"><span class="clock" id="clock">${fmt(timer.left)}</span><button class="btn" id="tBtn">${ICON_CLOCK}${t("timerStart")}</button><button class="link-btn" id="tReset">${t("reset")}</button></div>`:""}`;
  if(mins){$("tBtn").onclick=toggleTimer;$("tReset").onclick=()=>{stopTimer();timer.left=timer.total;$("clock").textContent=fmt(timer.left);$("tBtn").lastChild.textContent=t("timerStart")}}
  $("prevStep").disabled=state.step===0;
  updateVoiceBtn();
  const ra=$("readAgain");if(ra)ra.onclick=()=>{if(!voiceOn){voiceOn=true;store.set("bm-voice",true);updateVoiceBtn()}speak(currentStepText())};
  speak(currentStepText());
  $("nextStep").textContent=state.step===n-1?t("finish"):t("next");
}
const fmt=s=>`${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;
function toggleTimer(){
  if(timer.running){stopTimer();$("tBtn").lastChild.textContent=t("resume");return}
  if(timer.left<=0)timer.left=timer.total;
  timer.running=true;$("tBtn").lastChild.textContent=t("pause");
  timer.h=setInterval(()=>{timer.left--;const c=$("clock");if(c)c.textContent=fmt(Math.max(0,timer.left));
    if(timer.left<=0){stopTimer();beep();toast(t("timeUp"));setTimeout(()=>speak(t("timeUpVoice")),1100);const b=$("tBtn");if(b)b.lastChild.textContent=t("restart")}},1000);
}
function stopTimer(){clearInterval(timer.h);timer.running=false}
function beep(){try{const a=new (window.AudioContext||window.webkitAudioContext)();[0,.35,.7].forEach(t=>{const o=a.createOscillator(),g=a.createGain();o.frequency.value=880;o.connect(g);g.connect(a.destination);g.gain.setValueAtTime(.2,a.currentTime+t);g.gain.exponentialRampToValueAtTime(.001,a.currentTime+t+.3);o.start(a.currentTime+t);o.stop(a.currentTime+t+.3)})}catch(e){}}

/* ---------- pantry ---------- */
let pantrySel=new Set((PROFILE?store.get(K("bm-pantry"),[]):[]).filter(x=>PANTRY_BY[x]));
let pantryQ="";
const PN=p=>LANG==="en"?p.en:p.tr;
function renderPantry(){
  $("pTitle").textContent=t("pTitle");$("pDesc").textContent=t("pDesc");$("pNote").textContent=t("pNote");
  $("pq").placeholder=t("pSearch");$("pSearchLbl").textContent=t("pSearchLbl");$("pClear").textContent=t("pClear");
  $("pSel").textContent=t("pSel",pantrySel.size);$("pClear").hidden=!pantrySel.size;
  const q=norm(pantryQ.trim());
  let any=false;
  $("pBox").innerHTML=PANTRY_CATS.map(c=>{
    const items=PANTRY.filter(p=>p.cat===c.id&&(!q||norm(p.tr+" "+p.en).includes(q)));
    if(!items.length)return"";any=true;
    return `<div class="p-cat"><h3>${esc(LANG==="en"?c.en:c.tr)}</h3><div class="p-chips">${items.map(p=>
      `<button class="pchip" data-id="${p.id}" aria-pressed="${pantrySel.has(p.id)}"><span>${p.e}</span>${esc(PN(p))}</button>`).join("")}</div></div>`;
  }).join("")||`<p class="p-empty">${t("pNoMatch")}</p>`;
  $("pBox").querySelectorAll(".pchip").forEach(b=>b.onclick=()=>{
    if(!PROFILE){askAccount("pantry");return}
    const id=b.dataset.id;pantrySel.has(id)?pantrySel.delete(id):pantrySel.add(id);
    store.set(K("bm-pantry"),[...pantrySel]);b.setAttribute("aria-pressed",pantrySel.has(id));
    $("pSel").textContent=t("pSel",pantrySel.size);$("pClear").hidden=!pantrySel.size;renderPantryResults();
  });
  renderPantryResults();
}
function reqLabel(req){return Array.isArray(req)?req.map(x=>PN(PANTRY_BY[x])).join(" "+t("pOr")+" "):PN(PANTRY_BY[req])}
let pantryShow=30;
function renderPantryResults(keep){
  const box=$("pResults");if(!keep)pantryShow=30;
  if(!pantrySel.size){box.innerHTML=`<p class="p-empty">${t("pEmpty")}</p>`;return}
  let res=RECIPES.map(r=>{
    const need=NEEDS[r.key]||[];
    const ok=need.filter(req=>Array.isArray(req)?req.some(x=>pantrySel.has(x)):pantrySel.has(req));
    const miss=need.filter(req=>!ok.includes(req));
    return {r,have:ok.length,total:need.length,miss};
  }).filter(x=>x.have>0).sort((a,b)=>(b.have/(b.total+2))-(a.have/(a.total+2))||a.miss.length-b.miss.length||b.have-a.have);  // +2: tek malzemeli kısa tarifler en üste çıkmasın
  if(!res.length){box.innerHTML=`<p class="p-empty">${t("pNone")}</p>`;return}
  const allRes=res;res=res.slice(0,pantryShow);
  box.innerHTML=`<h3 class="p-rtitle">${t("pResTitle",allRes.length)}</h3><div class="p-grid">${res.map(x=>{
    const r=x.r,pct=Math.round(x.have/x.total*100),u=r.img||photoUrl(r.key),full=!x.miss.length;
    const shown=x.miss.slice(0,6),more=x.miss.length-shown.length;
    return `<button class="p-card${full?" full":""}" data-key="${r.key}" style="--c:${col(r.country)}">
      <div class="p-thumb">${u?`<img decoding="async" src="${u}" alt="" loading="lazy">`:r.emoji}</div>
      <div class="p-info">
        <small>${FL(r.country)} ${esc(CN(r.country))}</small>
        <b>${esc(L(r,"title"))}</b>
        <div class="p-bar"><i style="width:${pct}%"></i></div>
        <span class="p-have">${full?t("pAll"):t("pHave",x.have,x.total)}</span>
        ${full?"":`<span class="p-miss"><em>${t("pMissing")}</em> ${shown.map(m=>esc(reqLabel(m))).join(", ")}${more>0?` +${more}`:""}</span>`}
      </div></button>`}).join("")}</div>${allRes.length>res.length?`<div style="text-align:center;margin-top:16px"><button class="btn" id="pMore">${LANG==="en"?`Show more (${allRes.length-res.length} left)`:`Daha fazla göster (${allRes.length-res.length} tarif daha)`}</button></div>`:""}`;
  box.querySelectorAll(".p-card").forEach(c=>c.onclick=()=>openSheet(c.dataset.key,"ing"));
  const more=$("pMore");if(more)more.onclick=()=>{pantryShow+=30;renderPantryResults(true)};
}
$("pq").oninput=e=>{pantryQ=e.target.value;renderPantry()};
$("pClear").onclick=()=>{pantrySel.clear();store.set(K("bm-pantry"),[]);renderPantry()};
$("pantryBtn").onclick=()=>{$("pantry").scrollIntoView({behavior:"smooth",block:"start"})};

/* ---------- photos ---------- */
function shrink(file){
  return new Promise((res)=>{
    const img=new Image(),url=URL.createObjectURL(file);
    img.onload=()=>{const max=1600,s=Math.min(1,max/Math.max(img.width,img.height));
      const c=document.createElement("canvas");c.width=Math.round(img.width*s);c.height=Math.round(img.height*s);
      c.getContext("2d").drawImage(img,0,0,c.width,c.height);URL.revokeObjectURL(url);
      c.toBlob(b=>res(b||file),"image/jpeg",.86)};
    img.onerror=()=>{URL.revokeObjectURL(url);res(file)};
    img.src=url;
  });
}
const UPLOAD_MSG={too_large:"Dosya çok büyük; 20 MB'tan küçük bir fotoğraf seç",unsupported_type:"Bu dosya türü desteklenmiyor; JPG, PNG veya WebP seç",not_granted:"Fotoğraf eklemek için bu sayfayı düzenleme iznin olmalı",quota_or_state:"Fotoğraf alanı doldu; önce bir fotoğrafı kaldır",rate_limited:"Çok hızlı yükleme yapıldı; biraz bekleyip tekrar dene"};
async function uploadPhoto(file){
  const key=state.open;if(!file||!key||!assetsApi||!dbApi)return;
  if(!file.type.startsWith("image/")){toast(t("pickImage"));return}
  toast(t("uploading"));
  try{
    const blob=await shrink(file);
    const t=["image/jpeg","image/png","image/webp","image/gif"].includes(blob.type)?blob.type:"image/jpeg";
    const up=await assetsApi.upload(blob,{type:t});
    await dbApi.doc("photos/"+key).set({asset:up.id,updated:Date.now()});
    PHOTOS[key]=up.id;refresh();toast(t("photoAdded"));
  }catch(e){toast((e&&e.code&&T[LANG]["up_"+e.code])||t("uploadFail"))}
}
async function removePhoto(){
  const key=state.open;if(!dbApi||!key)return;
  try{await dbApi.doc("photos/"+key).delete();delete PHOTOS[key];refresh();toast(t("photoRemoved"))}
  catch(e){toast(t("removeFail"))}
}
$("photoInput").onchange=e=>{const f=e.target.files[0];e.target.value="";uploadPhoto(f)};
(async()=>{
  if(!window.claude||typeof window.claude.use!=="function")return;
  try{
    const [db,assets]=await Promise.all([window.claude.use("db"),window.claude.use("assets")]);
    dbApi=db;assetsApi=assets;
    if(db){db.collection("photos").onSnapshot(s=>{
      const next={};s.docs.forEach(d=>{const v=d.data();if(v&&typeof v.asset==="string")next[d.id]=v.asset});
      PHOTOS=next;refresh();
    },()=>{})}
    if(state.open)renderSheet();
  }catch(e){}
})();

/* ---------- page size ---------- */
const SIZES=[{z:.85,n:"Küçük"},{z:1,n:"Normal"},{z:1.15,n:"Büyük"},{z:1.3,n:"Çok büyük"}];
let sizeIdx=store.get("bm-size",null);
if(sizeIdx===null||!SIZES[sizeIdx])sizeIdx=window.innerWidth>=1700?2:1;
function applySize(){document.body.style.zoom=SIZES[sizeIdx].z}
$("sizeBtn").onclick=()=>{sizeIdx=(sizeIdx+1)%SIZES.length;store.set("bm-size",sizeIdx);applySize();toast(t("sizeToast",t("sizes")[sizeIdx]))};
applySize();
/* ---------- Giriş sistemi ---------- */
const GT={
 tr:{kicker:"Dünya Mutfağı",title:"Mutfağa hoş geldin",sub:"Profilinle giriş yap; favorilerin, işaretlerin ve malzemelerin sana özel saklansın.",tabIn:"Giriş yap",tabNew:"Yeni profil",name:"Adın",pin:"4 haneli PIN (isteğe bağlı)",pinNeed:"PIN",remember:"Beni hatırla",submitIn:"Giriş yap",submitNew:"Profili oluştur",guest:"Misafir olarak göz at",needAcc:{fav:"Favorilere eklemek için giriş yap ya da kayıt ol.",favList:"Favorilerini görmek için giriş yap ya da kayıt ol.",chef:"Şef'le sohbet etmek için giriş yap ya da kayıt ol.",cook:"Pişirme modunu kullanmak için giriş yap ya da kayıt ol.",list:"Alışveriş listesini kopyalamak için giriş yap ya da kayıt ol.",check:"Malzeme işaretlerini kaydetmek için giriş yap ya da kayıt ol.",pantry:"Malzemelerini kaydedip eşleştirmek için giriş yap ya da kayıt ol.",learn:"Şef'e öğrettiklerinin kaydedilmesi için giriş yap ya da kayıt ol."},guestNote:"Misafirler yalnızca tariflere bakabilir. Favoriler, malzeme işaretleme, \"Elimde ne var?\", Şef ve pişirme modu için profil gerekir.",
  note:"Profiller yalnızca bu tarayıcıda saklanır. PIN, aynı cihazı kullananlar için basit bir kilittir; gerçek bir şifre güvenliği sağlamaz.",
  errName:"Lütfen adını yaz.",errNo:"Bu isimde bir profil yok. 'Yeni profil' sekmesinden oluşturabilirsin.",errPin:"PIN yanlış, tekrar dene.",errPinFmt:"PIN 4 rakamdan oluşmalı.",errTaken:"Bu isimde bir profil zaten var.",
  hello:n=>`Hoş geldin, ${n}! 👋`,gateBtn:"Giriş ekranı",back:"Siteye dön",bye:"Çıkış yapıldı",logoutQ:n=>`${n} olarak çıkış yapılsın mı?`,userTitle:n=>`${n} · Çıkış yap`,guestName:"Misafir"},
 en:{kicker:"World Kitchen",title:"Welcome to the kitchen",sub:"Sign in with your profile so your favourites, ticks and ingredients are kept just for you.",tabIn:"Sign in",tabNew:"New profile",name:"Your name",pin:"4-digit PIN (optional)",pinNeed:"PIN",remember:"Remember me",submitIn:"Sign in",submitNew:"Create profile",guest:"Browse as guest",needAcc:{fav:"Sign in or sign up to add favourites.",favList:"Sign in or sign up to see your favourites.",chef:"Sign in or sign up to chat with the Chef.",cook:"Sign in or sign up to use cooking mode.",list:"Sign in or sign up to copy the shopping list.",check:"Sign in or sign up to save your ticks.",pantry:"Sign in or sign up to save and match your ingredients.",learn:"Sign in or sign up so the Chef can remember what you teach."},guestNote:"Guests can only view recipes. Favourites, ticks, \"What's in my kitchen?\", the Chef and cooking mode need a profile.",
  note:"Profiles are stored only in this browser. The PIN is a simple lock for people sharing a device; it isn't real password security.",
  errName:"Please enter your name.",errNo:"No profile with this name. Create one in the 'New profile' tab.",errPin:"Wrong PIN, try again.",errPinFmt:"The PIN must be 4 digits.",errTaken:"A profile with this name already exists.",
  hello:n=>`Welcome, ${n}! 👋`,gateBtn:"Sign-in screen",back:"Back to site",bye:"Signed out",logoutQ:n=>`Sign out as ${n}?`,userTitle:n=>`${n} · Sign out`,guestName:"Guest"}
};
const gt=(k,...a)=>{const v=GT[LANG][k];return typeof v==="function"?v(...a):v};
let gateMode="in",gatePicked=null;
function getProfiles(){return store.get("bm-profiles",{})}
async function hashPin(pin,name){
  const txt="bm|"+name.toLowerCase()+"|"+pin;
  try{if(window.crypto&&crypto.subtle){const d=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(txt));return [...new Uint8Array(d)].map(b=>b.toString(16).padStart(2,"0")).join("")}}catch(e){}
  let h1=5381;for(let i=0;i<txt.length;i++)h1=((h1<<5)+h1+txt.charCodeAt(i))|0;return "d"+(h1>>>0).toString(16);
}
function buildGateBg(){
  const imgs=Object.values(EMBED);if(!imgs.length)return;
  const cols=6,per=Math.ceil(imgs.length/cols)+2;let html="";
  for(let c=0;c<cols;c++){
    const list=[];for(let i=0;i<per;i++)list.push(imgs[(c*5+i*3)%imgs.length]);
    const tiles=list.map(u=>`<img decoding="async" src="${u}" alt="" loading="lazy">`).join("");
    html+=`<div class="gate-col">${tiles}${tiles}</div>`;
  }
  $("gateCols").innerHTML=html;
}
function renderGate(){
  $("gKicker").textContent=gt("kicker");$("gTitle").textContent=gt("title");$("gSub").textContent=gt("sub");
  $("gTabIn").textContent=gt("tabIn");$("gTabNew").textContent=gt("tabNew");
  $("gTabIn").setAttribute("aria-selected",gateMode==="in");$("gTabNew").setAttribute("aria-selected",gateMode==="new");
  $("gNameLbl").textContent=gt("name");$("gPinLbl").textContent=gt("pin");$("gRememberLbl").textContent=gt("remember");
  $("gSubmit").textContent=gateMode==="in"?gt("submitIn"):gt("submitNew");$("gGuest").textContent=gt("guest");$("gNote").textContent=gt("guestNote")+" "+gt("note");
  $("gateLang").textContent=LANG==="en"?"TR":"EN";$("gateBackLbl").textContent=gt("back");
  const profs=getProfiles(),names=Object.keys(profs);
  $("gProfiles").innerHTML=gateMode==="in"?names.map(n=>`<button type="button" class="g-prof" data-n="${esc(n)}" aria-pressed="${gatePicked===n}"><span class="g-av">${esc(n[0].toLocaleUpperCase("tr"))}</span>${esc(n)}</button>`).join(""):"";
  $("gProfiles").querySelectorAll(".g-prof").forEach(b=>b.onclick=()=>{gatePicked=b.dataset.n;$("gName").value=gatePicked;renderGate();$("gPin").focus()});
}
function gateErr(msg){$("gErr").classList.remove("info");$("gErr").textContent=msg;const c=document.querySelector(".gate-card");c.classList.remove("shake");void c.offsetWidth;c.classList.add("shake")}
function openGate(canBack){openAuth({back:!!canBack})}
function closeGate(){$("gate").classList.remove("open");$("gate").setAttribute("aria-hidden","true");document.body.style.overflow="";$("gateCols").innerHTML=""}
function loadProfileData(){
  if(!PROFILE){favs=new Set();checks={};pantrySel=new Set();updateFavBadge();refresh();updateUserBtn();return}
  favs=new Set(store.get(K("bm-favs"),[]));checks=store.get(K("bm-checks"),{});setTimeout(()=>cleanUserData(true),0);
  pantrySel=new Set(store.get(K("bm-pantry"),[]).filter(x=>PANTRY_BY[x]));
  updateFavBadge();refresh();updateUserBtn();
}
function signIn(name,remember){
  PROFILE=name;
  try{if(remember){store.set("bm-session",name);sessionStorage.removeItem("bm-session")}else{store.set("bm-session",null);sessionStorage.setItem("bm-session",JSON.stringify(name))}}catch(e){}
  loadProfileData();closeGate();toast(gt("hello",name));
}
function updateUserBtn(){document.body.classList.toggle("is-guest",!PROFILE);setTimeout(()=>{if(typeof mnavUpdate==="function")mnavUpdate()},0);
  if($("gateBtnLbl")){$("gateBtnLbl").textContent=gt("gateBtn");$("gateBtn").title=gt("gateBtn");$("gateBtn").setAttribute("aria-label",gt("gateBtn"))}
  const b=$("userBtn");if(!b)return;const n=PROFILE||gt("guestName");
  b.innerHTML=`<span class="g-av">${esc((PROFILE&&typeof avatarOf==="function"&&avatarOf(PROFILE))||n[0].toLocaleUpperCase("tr"))}</span>`;b.title=n;b.setAttribute("aria-label",n);
}
function gateInfo(msg){const e=$("gErr");e.textContent=msg;e.classList.add("info")}
$("gForm").onsubmit=async e=>{
  e.preventDefault();$("gErr").textContent="";$("gErr").classList.remove("info");
  try{await gateSubmit()}catch(err){console.error(err);gateErr((LANG==="en"?"Something went wrong: ":"Bir sorun oluştu: ")+(err&&err.message||err))}
};
async function gateSubmit(){
  const name=$("gName").value.trim().replace(/\s+/g," "),pin=$("gPin").value.trim();
  if(!name){gateErr(gt("errName"));return}
  if(pin&&!/^\d{4}$/.test(pin)){gateErr(gt("errPinFmt"));return}
  const profs=getProfiles(),found=Object.keys(profs).find(n=>n.toLocaleLowerCase("tr")===name.toLocaleLowerCase("tr"));
  // Giriş sekmesinde olmayan bir ad yazıldıysa: hata verme, profili oluştur
  if(gateMode==="in"&&!found){gateMode="new"}
  // Yeni profil sekmesinde var olan bir ad yazıldıysa: hata verme, o profile giriş yap
  if(gateMode==="new"&&found){
    const p=profs[found];
    if(!p.pin||(pin&&p.pin===await hashPin(pin,found))){signIn(found,$("gRemember").checked);return}
    gateMode="in";gatePicked=found;renderGate();$("gName").value=found;$("gPin").value="";
    gateInfo(LANG==="en"?`"${found}" already exists. Enter its 4-digit PIN to sign in, or pick another name in "New profile".`:`"${found}" adında bir profil zaten var. Giriş için PIN'ini yaz ya da "Yeni profil" sekmesinden başka bir ad seç.`);
    $("gPin").focus();return;
  }
  if(gateMode==="in"){
    const p=profs[found];if(p.pin&&p.pin!==await hashPin(pin,found)){gateErr(gt("errPin"));$("gPin").value="";return}
    signIn(found,$("gRemember").checked);
  }else{
    if(found){gateErr(gt("errTaken"));return}
    const first=!Object.keys(profs).length;
    // E-postayla açılmış eski bir hesap aynı ada sahipse verilerini bu profile taşı
    const accs=store.get("bm-accounts",{}),low=s=>String(s||"").toLocaleLowerCase("tr");
    const oldEmail=Object.keys(accs).find(em=>low(accs[em].name)===low(name)||low(accs[em].name).split(" ")[0]===low(name));
    if(oldEmail)["bm-favs","bm-checks","bm-pantry","bm-chef","bm-chef-prefs","bm-chef-learn"].forEach(k=>{const v=store.get(k+"@"+oldEmail,null);if(v!==null)store.set(k+"@"+name,v)});
    profs[name]={pin:pin?await hashPin(pin,name):null,created:Date.now()};store.set("bm-profiles",profs);
    if(first){["bm-favs","bm-checks","bm-pantry"].forEach(k=>{const v=store.get(k,null);if(v!==null&&store.get(k+"@"+name,null)===null)store.set(k+"@"+name,v)})}
    signIn(name,$("gRemember").checked);
  }
}
/* Misafir bir şey kaydetmeye çalışınca giriş/profil oluşturma ister */
/* =====================================================================
   YENİ GİRİŞ SİSTEMİ (kullanıcı adı + şifre)
   - Şifreler PBKDF2-SHA256 (100.000 tur, rastgele tuz) ile özetlenir; düz şifre hiçbir yerde saklanmaz.
   - 5 hatalı denemede hesap 30 saniye kilitlenir.
   - Güvenlik sorusu ve şifre kuralı yok; şifre boş olmasın yeter.
   - Hesaplar bu cihazda saklanır (bm-auth-users).
   ===================================================================== */
const AU_T={
 tr:{loginT:"Tekrar hoş geldin",loginS:"Hesabına giriş yap, tariflerin ve favorilerin seni beklesin.",regT:"Hesap oluştur",regS:"Birkaç saniyede kaydol; favorilerin, notların ve Şef'in sana özel olsun.",
  forgotT:"Şifreni sıfırla",forgotS:"Kullanıcı adını yaz, güvenlik sorunu cevapla ve yeni şifreni belirle.",tabLogin:"Giriş yap",tabReg:"Kayıt ol",
  user:"Kullanıcı adı",pass:"Şifre",pass2:"Şifre (tekrar)",remember:"Beni hatırla",forgot:"Şifremi unuttum",loginBtn:"Giriş yap",regBtn:"Hesabımı oluştur",
  q:"Güvenlik sorusu",a:"Cevabın",av:"Bir simge seç",userHint:"3–20 karakter: harf, rakam, boşluk, _ veya .",
  fNext:"Devam et",fReset:"Şifremi değiştir",fBack:"← Girişe dön",newPass:"Yeni şifre",or:"veya",guest:"Misafir olarak göz at",back:"Siteye dön",
  foot:"Kullanıcı adıyla açılan hesap bu cihazda saklanır; e-postayla açılan hesap her cihazda çalışır. Misafirler tariflere bakabilir; favori, not, Şef ve pişirme modu için hesap gerekir.",
  pitchH:"Bugün <em>ne pişiriyoruz?</em>",card:"MUTFAK KARTI",pitch:[["❤️","Favorilerini ve notlarını kaydet"],["👨‍🍳","Şef ile sohbet et, tarif önerisi al"],["🏅","Pişirdikçe rozet ve seviye kazan"]],
  qs:["İlk evcil hayvanının adı?","En sevdiğin yemek?","Doğduğun şehir?","İlkokul öğretmeninin adı?","En sevdiğin renk?"],
  str:["Çok zayıf","Zayıf","Orta","Güçlü","Çok güçlü"],
  e:{user:"Kullanıcı adı 3–20 karakter olmalı (harf, rakam, boşluk, _ .).",pass:"Bir şifre yaz.",pass2:"Şifreler aynı değil.",a:"Güvenlik sorusunun cevabını yaz.",
   taken:"Bu kullanıcı adı alınmış. Başka bir ad dene ya da giriş yap.",nouser:"Bu kullanıcı adıyla bir hesap yok. 'Kayıt ol' sekmesinden oluşturabilirsin.",
   wrong:n=>`Şifre yanlış. ${n} deneme hakkın kaldı.`,locked:s=>`Çok fazla hatalı deneme. ${s} saniye sonra tekrar dene.`,badA:"Cevap yanlış.",empty:"Kullanıcı adı ve şifreni yaz.",other:"Bir sorun oluştu: "},
  ok:{reg:n=>`Hesabın oluşturuldu. Hoş geldin, ${n}! 🎉`,login:n=>`Hoş geldin, ${n}! 👋`,reset:"Şifren değiştirildi. Şimdi yeni şifrenle giriş yapabilirsin."},
  tg:"Şifreyi göster"},
 en:{loginT:"Welcome back",loginS:"Sign in to pick up your recipes and favourites.",regT:"Create an account",regS:"Sign up in seconds — your favourites, notes and Chef, just for you.",
  forgotT:"Reset your password",forgotS:"Enter your username, answer your security question and choose a new password.",tabLogin:"Sign in",tabReg:"Sign up",
  user:"Username",pass:"Password",pass2:"Password (again)",remember:"Remember me",forgot:"Forgot password",loginBtn:"Sign in",regBtn:"Create my account",
  q:"Security question",a:"Your answer",av:"Pick an icon",userHint:"3–20 characters: letters, digits, space, _ or .",
  fNext:"Continue",fReset:"Change my password",fBack:"← Back to sign in",newPass:"New password",or:"or",guest:"Browse as a guest",back:"Back to site",
  foot:"A username account stays on this device; an e-mail account works on every device. Guests can view recipes; favourites, notes, the Chef and cooking mode need an account.",
  pitchH:"What are we <em>cooking today?</em>",card:"KITCHEN CARD",pitch:[["❤️","Save your favourites and notes"],["👨‍🍳","Chat with the Chef for ideas"],["🏅","Earn badges as you cook"]],
  qs:["Your first pet's name?","Your favourite dish?","The city you were born in?","Your first teacher's name?","Your favourite colour?"],
  str:["Very weak","Weak","Fair","Strong","Very strong"],
  e:{user:"Username must be 3–20 characters (letters, digits, space, _ .).",pass:"Enter a password.",pass2:"Passwords don't match.",a:"Answer the security question.",
   taken:"That username is taken. Try another or sign in.",nouser:"No account with this username. Create one in 'Sign up'.",
   wrong:n=>`Wrong password. ${n} attempts left.`,locked:s=>`Too many wrong attempts. Try again in ${s} seconds.`,badA:"Wrong answer.",empty:"Enter your username and password.",other:"Something went wrong: "},
  ok:{reg:n=>`Account created. Welcome, ${n}! 🎉`,login:n=>`Welcome, ${n}! 👋`,reset:"Password changed. You can now sign in with it."},
  tg:"Show password"}};
const aut=()=>AU_T[LANG]||AU_T.tr;
const AU_AV=["🍲","🍕","🍣","🌮","🥘","🍜","🧁","🥗","🍝","🥟","🍛","☕"];
let auView="login",auBack=false,auAv=AU_AV[0],auSlideT=null,auForgotUser=null;
const auKey=n=>String(n||"").trim().replace(/\s+/g," ").toLocaleLowerCase("tr");
function auUsers(){return store.get("bm-auth-users",{})}
function auSave(u){store.set("bm-auth-users",u)}
function auFind(name){const u=auUsers();return u[auKey(name)]||null}
function auHex(buf){return [...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,"0")).join("")}
function auSalt(){const a=new Uint8Array(16);try{crypto.getRandomValues(a)}catch(e){for(let i=0;i<16;i++)a[i]=Math.random()*256|0}return auHex(a)}
async function auHash(secret,salt){
  try{if(crypto&&crypto.subtle){
    const k=await crypto.subtle.importKey("raw",new TextEncoder().encode(secret),"PBKDF2",false,["deriveBits"]);
    const bits=await crypto.subtle.deriveBits({name:"PBKDF2",salt:new TextEncoder().encode(salt),iterations:100000,hash:"SHA-256"},k,256);
    return "p2$"+auHex(bits);
  }}catch(e){}
  // yedek (crypto.subtle olmayan ortamlar): tuzlu, çok turlu basit özet
  let h1=0x811c9dc5,h2=5381,s=salt+"|"+secret;
  for(let r=0;r<20000;r++){for(let i=0;i<s.length;i++){const c=s.charCodeAt(i);h1=Math.imul(h1^c,16777619);h2=((h2<<5)+h2+c)|0}s=(h1>>>0).toString(16)+(h2>>>0).toString(16)}
  return "fb$"+s;
}
const auNameOk=n=>/^[\p{L}\p{N}_. ]{3,20}$/u.test(n);
function auStrength(p){let s=0;if(p.length>=6)s++;if(p.length>=10)s++;if(/[a-zğüşöçı]/.test(p)&&/[A-ZĞÜŞÖÇİ]/.test(p))s++;if(/\d/.test(p))s++;if(/[^\p{L}\p{N}]/u.test(p))s++;return Math.min(4,Math.max(0,s-(p.length<6?1:0)))}
function auMsg(t,kind){const m=$("auMsg");
  document.querySelectorAll(".au-fmsg").forEach(x=>{x.textContent="";x.className="au-fmsg"});
  /* bilgi mesajı üstte, hata mesajı düğmenin yanında: aynı yazı iki kez görünmesin */
  const f=document.querySelector(".au-form:not([hidden]) .au-fmsg");
  if(f&&t&&!kind){f.textContent=t;f.className="au-fmsg";m.textContent="";m.className="au-msg";return}
  m.textContent=t||"";m.className="au-msg"+(kind?" "+kind:"")}
function auShake(){const b=document.querySelector(".au-body");b.classList.remove("au-shake");void b.offsetWidth;b.classList.add("au-shake")}
function auErr(t,inp){auMsg(t);auShake();if(inp){inp.classList.add("bad");inp.focus({preventScroll:true});inp.scrollIntoView({block:"center",behavior:"smooth"})}else{const f=document.querySelector(".au-form:not([hidden]) .au-fmsg");if(f)f.scrollIntoView({block:"center",behavior:"smooth"})}}

function auStatic(){
  const T=aut();
  $("auPitchH").innerHTML=T.pitchH;$("auCardNo").textContent=T.card;$("auPitchL").innerHTML=T.pitch.map(([i,t])=>`<li><b>${i}</b>${esc(t)}</li>`).join("");
  $("auTabLogin").textContent=T.tabLogin;$("auTabReg").textContent=T.tabReg;
  $("lUserL").textContent=T.user;$("lPassL").textContent=T.pass;$("lRememberL").textContent=T.remember;$("auForgotBtn").textContent=T.forgot;$("lSubmit").textContent=T.loginBtn;
  $("rUserL").textContent=T.user;$("rUserH").textContent=T.userHint;$("rPassL").textContent=T.pass;$("rPass2L").textContent=T.pass2;$("rAvL").textContent=T.av;$("rSubmit").textContent=T.regBtn;

  $("fUserL").textContent=T.user;$("fAL").textContent=T.a;$("fPassL").textContent=T.newPass;$("fBack").textContent=T.fBack;
  $("fSubmit").textContent=auForgotUser?T.fReset:T.fNext;
  $("auOr").textContent=T.or;$("auGuest").textContent=T.guest;$("auGoogleL").textContent=LANG==="en"?"Continue with Google":"Google ile giriş yap";$("auMailL").textContent=LANG==="en"?"Continue with e-mail":"E-postayla giriş yap";if(typeof sbStatic==="function")sbStatic();$("auFoot").textContent=T.foot;$("auBackLbl").textContent=T.back;
  $("auLang").textContent=LANG==="en"?"TR":"EN";
  document.querySelectorAll(".au-eye").forEach(b=>{b.setAttribute("aria-label",T.tg);b.title=T.tg});
  $("rAvs").innerHTML=AU_AV.map(a=>`<button type="button" data-av="${a}" aria-pressed="${a===auAv}">${a}</button>`).join("");
  $("rAvs").querySelectorAll("button").forEach(b=>b.onclick=()=>{auAv=b.dataset.av;$("rAvs").querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x===b))});
  auSetView(auView,true);
}
function auSetView(v,keepMsg){
  auView=v;const T=aut();
  $("auTitle").textContent=v==="register"?T.regT:v==="forgot"?T.forgotT:T.loginT;
  $("auSub").textContent=v==="register"?T.regS:v==="forgot"?T.forgotS:T.loginS;
  $("auLogin").hidden=v!=="login";$("auReg").hidden=v!=="register";$("auForgot").hidden=v!=="forgot";$("auEmail").hidden=v!=="email";
  $("auSeg").classList.toggle("reg",v==="register");$("auSeg").classList.toggle("hide",v==="forgot"||v==="email");
  $("auMailBtn").hidden=v==="email";if(v==="email"&&typeof sbStatic==="function")sbStatic();
  $("auTabLogin").setAttribute("aria-selected",v==="login");$("auTabReg").setAttribute("aria-selected",v==="register");auPill();
  if(!keepMsg)auMsg("");
  document.querySelectorAll(".au-f input").forEach(i=>i.classList.remove("bad","good"));
  if(v==="login")auRenderUsers();
  if(v==="forgot"&&!keepMsg){auForgotUser=null;$("fQ").hidden=true;$("fAW").hidden=true;$("fPW").hidden=true;$("fUser").disabled=false;$("fA").value="";$("fPass").value="";$("fSubmit").textContent=T.fNext}
  setTimeout(()=>{const f=v==="email"?(eMode==="newpass"?$("ePass"):$("eMail").value?$("ePass"):$("eMail")):v==="register"?$("rUser"):v==="forgot"?(auForgotUser?$("fA"):$("fUser")):($("lUser").value?$("lPass"):$("lUser"));if(f&&!$("auth").hidden)f.focus({preventScroll:true})},40);
}
function auPill(){const t=auView==="register"?$("auTabReg"):$("auTabLogin"),pl=document.querySelector(".au-seg-pill");if(!pl||!t)return;requestAnimationFrame(()=>{pl.style.left=t.offsetLeft+"px";pl.style.width=t.offsetWidth+"px"})}
function auRenderUsers(){
  const u=Object.values(auUsers()).sort((a,b)=>(b.last||0)-(a.last||0)).slice(0,4);
  $("auUsers").innerHTML=u.map(x=>`<button type="button" data-n="${esc(x.name)}" aria-pressed="${auKey($("lUser").value)===auKey(x.name)}"><span>${esc(x.av||x.name[0].toLocaleUpperCase("tr"))}</span>${esc(x.name)}</button>`).join("");
  $("auUsers").querySelectorAll("button").forEach(b=>b.onclick=()=>{
    const r=auFind(b.dataset.n);
    if(r&&r.cloud){if(r.prov==="google"){$("auGoogle").click();return}eMode="login";$("eMail").value=r.email||"";auSetView("email");return}
    $("lUser").value=b.dataset.n;auRenderUsers();$("lPass").focus()});
}
function auSlides(){
  const imgs=Object.values(EMBED);if(!imgs.length)return;
  const pick=[];for(let i=0;i<Math.min(14,imgs.length);i++)pick.push(imgs[(i*7)%imgs.length]);
  const row=pick.map(s=>`<img decoding="async" src="${s}" alt="" loading="lazy">`).join("");
  // yana kayan şerit kaldırıldı; sadece arka plandaki sütunlar akıyor
  // arka planda yukarı/aşağı akan yemek sütunları
  const cols=7,per=Math.ceil(imgs.length/cols)+3;let html="";
  for(let c=0;c<cols;c++){const list=[];for(let i=0;i<per;i++)list.push(imgs[(c*5+i*3)%imgs.length]);
    const tiles=list.map(u=>`<img decoding="async" src="${u}" alt="" loading="lazy">`).join("");html+=`<div class="au-bgcol">${tiles}${tiles}</div>`}
  $("auBgCols").innerHTML=html;
}
function openAuth(opts={}){
  auBack=!!opts.back;$("auBack").hidden=!auBack;
  $("lPass").value="";$("rPass").value="";$("rPass2").value="";$("rUser").value="";
  if(!$("lUser").value){const last=Object.values(auUsers()).filter(x=>!x.cloud).sort((a,b)=>(b.last||0)-(a.last||0))[0];if(last)$("lUser").value=last.name}
  auView=opts.view||(Object.keys(auUsers()).length?"login":"register");
  auStatic();auMsg(opts.msg||"",opts.msg?"info":"");auSlides();
  $("auth").hidden=false;document.body.style.overflow="hidden";auPill();document.querySelector(".au-shell").scrollTop=0;
}
function closeAuth(){$("auth").hidden=true;document.body.style.overflow="";$("auSlides").innerHTML="";$("auBgCols").innerHTML=""}
function auSignIn(name,remember,toastMsg){
  const users=auUsers(),k=auKey(name);if(users[k]){users[k].last=Date.now();users[k].fails=0;users[k].lock=0;auSave(users)}
  const profs=getProfiles();if(!profs[name]){profs[name]={pin:null,created:Date.now(),av:(users[k]&&users[k].av)||null};store.set("bm-profiles",profs)}
  PROFILE=name;
  try{sessionStorage.removeItem("bm-guest");if(remember){store.set("bm-session",name);sessionStorage.removeItem("bm-session")}else{store.set("bm-session",null);sessionStorage.setItem("bm-session",JSON.stringify(name))}}catch(e){}
  loadProfileData();closeAuth();toast(toastMsg);
}
/* ---------- E-posta (ve Google) ile giriş: Supabase Auth ----------
   Hesaplar Supabase'de tutulur. Favoriler, notlar, işaretli malzemeler ve ayarlar "profil_verisi" tablosunda
   saklanır; aynı e-postayla hangi cihazdan girilirse girilsin aynı veriler gelir. */
const SUPA_URL=APP_CONFIG.supaUrl;
const SUPA_KEY=APP_CONFIG.supaKey;
const SUPA_GOOGLE=APP_CONFIG.supaGoogle;    // giriş ekranında "Google ile giriş yap" düğmesi
const SUPA_LS="sb-"+new URL(SUPA_URL).hostname.split(".")[0]+"-auth-token";
var sb=null,sbUser=null,sbPushT=null,eMode="login";
async function sbInit(){
  if(sb)return sb;
  const m=await import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm");
  sb=m.createClient(SUPA_URL,SUPA_KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
  sb.auth.onAuthStateChange((ev,session)=>{
    if(ev==="PASSWORD_RECOVERY"){sbUser=session&&session.user||sbUser;eMode="newpass";openAuth({view:"email"});return}
    if(ev==="SIGNED_IN"&&session)setTimeout(()=>{if(!sbBusy&&(!sbUser||sbUser.id!==session.user.id))sbFinish(session.user)},0);
    if(ev==="SIGNED_OUT")sbUser=null;
  });
  return sb;
}
var sbBusy=false;
const sbEn=()=>LANG==="en";
const sbRedirect=()=>location.origin+location.pathname;
function sbLinked(name){const u=auFind(name||PROFILE);return !!(u&&u.cloud)}
const sbTsKey=n=>"bm-cloudts:"+n;
function sbCollect(name){const out={},suf="@"+name;try{for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.endsWith(suf))out[k.slice(0,-suf.length)]=localStorage.getItem(k)}}catch(e){}return out}
function sbApply(name,veri){
  const suf="@"+name;
  try{Object.keys(localStorage).filter(k=>k.endsWith(suf)).forEach(k=>localStorage.removeItem(k));
    Object.entries(veri||{}).forEach(([k,v])=>{if(typeof v==="string"&&/^bm-[\w-]+$/.test(k))localStorage.setItem(k+suf,v)})}catch(e){}
}
async function sbPush(name){
  name=name||PROFILE;if(!sb||!sbUser||!name||!sbLinked(name))return;
  const ts=new Date().toISOString();
  const {error}=await sb.from("profil_verisi").upsert({kullanici_id:sbUser.id,profil_adi:name,veri:sbCollect(name),guncelleme:ts});
  if(error)console.warn("Supabase kayıt:",error.message);else try{localStorage.setItem(sbTsKey(name),ts)}catch(e){}
}
function sbSchedule(){if(!sbUser||!sbLinked())return;clearTimeout(sbPushT);sbPushT=setTimeout(()=>sbPush(),1500)}
async function sbPull(){
  if(!sb||!sbUser||!PROFILE)return;
  const {data,error}=await sb.from("profil_verisi").select("veri,guncelleme").eq("kullanici_id",sbUser.id).maybeSingle();
  if(error){console.warn("Supabase okuma:",error.message);return}
  const local=Date.parse(localStorage.getItem(sbTsKey(PROFILE))||"")||0,remote=data?Date.parse(data.guncelleme)||0:0;
  if(data&&remote>local){sbApply(PROFILE,data.veri);try{localStorage.setItem(sbTsKey(PROFILE),data.guncelleme)}catch(e){}loadProfileData()}
  else await sbPush();
}
/* Supabase oturumunu sitedeki profile bağlar: aynı hesap her zaman aynı profile girer */
async function sbFinish(user){
  if(!user)return;sbBusy=true;
  try{
    sbUser=user;const T=aut(),email=String(user.email||"").toLowerCase(),md=user.user_metadata||{};
    const users=auUsers();let rec=Object.values(users).find(x=>x.cloud&&x.uid===user.id);
    if(!rec){
      let base=String(md.ad||md.full_name||md.name||email.split("@")[0]).normalize("NFC").replace(/[^\p{L}\p{N}_. ]+/gu," ").replace(/\s+/g," ").trim().slice(0,20).trim();
      if(base.length<3)base=("Chef "+base).trim();
      let name=base,i=2;while(users[auKey(name)]){name=base.slice(0,17).trim()+" "+i;i++}
      rec={name,cloud:true,prov:(user.app_metadata&&user.app_metadata.provider)||"email",email,uid:user.id,av:auAv,created:Date.now(),fails:0,lock:0};users[auKey(name)]=rec;auSave(users);
    }
    if(PROFILE!==rec.name)auSignIn(rec.name,true,T.ok.login(rec.name));
    if(typeof closeGate==="function")try{closeGate()}catch(e){}
    await sbPull();
    if(/access_token=|type=signup|type=recovery|error_description=/.test(location.hash))history.replaceState(null,"",location.pathname+location.search);
  }catch(e){console.warn(e)}finally{sbBusy=false}
}
function sbSignOut(name){
  if(!sb&&!localStorage.getItem(SUPA_LS))return;
  clearTimeout(sbPushT);
  sbInit().then(async c=>{try{if(name&&sbUser)await sbPush(name)}catch(e){}sbUser=null;return c.auth.signOut()}).catch(()=>{});
}
function sbErrText(err){
  const en=sbEn(),m=String(err&&(err.message||err.error_description)||err||"");
  if(/Invalid login credentials/i.test(m))return en?"Wrong e-mail or password. If you signed up with Google, use “Continue with Google”.":"E-posta ya da şifre yanlış. Google ile kaydolduysan “Google ile giriş yap” düğmesini kullan.";
  if(/Email not confirmed/i.test(m))return en?"You haven’t confirmed your e-mail yet: check your inbox.":"E-postanı henüz doğrulamadın: gelen kutunu kontrol et.";
  if(/already registered|already been registered/i.test(m))return en?"An account with this e-mail already exists: sign in instead.":"Bu e-postayla zaten bir hesap var: giriş yap.";
  if(/rate limit|too many/i.test(m))return en?"Too many attempts. Try again a little later.":"Çok fazla deneme yapıldı. Biraz sonra tekrar dene.";
  if(/not authorized|sending .*email|Error sending/i.test(m))return en?"The e-mail couldn’t be sent (the site’s mail service isn’t set up for this address yet).":"E-posta gönderilemedi (sitenin e-posta servisi bu adres için henüz ayarlanmadı).";
  if(/Password should be|weak/i.test(m))return en?"Password must be at least 6 characters.":"Şifre en az 6 karakter olmalı.";
  if(/provider is not enabled|Unsupported provider/i.test(m))return en?"Google sign-in isn’t switched on yet. Please use e-mail for now.":"Google ile giriş henüz açılmadı. Şimdilik e-postayla giriş yapabilirsin.";
  if(/fetch|network|import|Load failed/i.test(m))return en?"Couldn’t connect. Check your internet connection.":"Bağlanılamadı. İnternet bağlantını kontrol et.";
  return (en?"Something went wrong: ":"Bir sorun oldu: ")+m;
}
function sbStatic(){
  const en=sbEn(),reg=eMode==="register",np=eMode==="newpass";
  $("eNameL").textContent=en?"Your name (shown on the site)":"Adın (sitede görünür)";$("eNameH").textContent=en?"Optional · 3–20 characters":"İsteğe bağlı · 3–20 karakter";
  $("eMailL").textContent=en?"E-mail":"E-posta";$("ePassL").textContent=np?(en?"New password":"Yeni şifre"):(en?"Password":"Şifre");
  $("eNameW").hidden=!reg;$("eMailW").hidden=np;
  $("ePass").autocomplete=reg||np?"new-password":"current-password";
  $("eSubmit").textContent=np?(en?"Save new password":"Yeni şifreyi kaydet"):reg?(en?"Create account":"Hesap oluştur"):(en?"Sign in":"Giriş yap");
  $("eMode").textContent=reg?(en?"Have an account? Sign in":"Hesabın var mı? Giriş yap"):(en?"No account? Sign up":"Hesabın yok mu? Kayıt ol");
  $("eMode").hidden=np;$("eForgot").hidden=reg||np;$("eForgot").textContent=en?"Forgot password":"Şifremi unuttum";
  $("eBack").textContent=en?"← Sign in with a username":"← Kullanıcı adıyla giriş";
  if(auView==="email"){$("auTitle").textContent=np?(en?"Set a new password":"Yeni şifre belirle"):reg?(en?"Sign up with e-mail":"E-postayla kayıt ol"):(en?"Sign in with e-mail":"E-postayla giriş");
    $("auSub").textContent=en?"Your favourites, notes and settings follow you to every device.":"Favorilerin, notların ve ayarların her cihazda seninle gelir."}
}
$("auEmail").onsubmit=async e=>{
  e.preventDefault();const en=sbEn(),T=aut();auMsg("");
  const email=$("eMail").value.trim(),pass=$("ePass").value,name=$("eName").value.trim().replace(/\s+/g," ");
  if(eMode!=="newpass"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){auErr(en?"Enter a valid e-mail address.":"Geçerli bir e-posta adresi yaz.",$("eMail"));return}
  if(pass.length<6){auErr(en?"Password must be at least 6 characters.":"Şifre en az 6 karakter olmalı.",$("ePass"));return}
  if(eMode==="register"&&name&&!auNameOk(name)){auErr(T.e.user,$("eName"));return}
  const btn=$("eSubmit");btn.disabled=true;
  try{
    const c=await sbInit();
    if(eMode==="newpass"){const {error}=await c.auth.updateUser({password:pass});if(error)throw error;eMode="login";$("ePass").value="";auMsg(en?"Password updated.":"Şifren güncellendi.","ok");const {data}=await c.auth.getUser();if(data&&data.user)await sbFinish(data.user);return}
    if(eMode==="register"){
      // kayıt "kayit" Edge Function'ı ile: hesap doğrulama e-postası beklemeden açılır, ardından normal girişle oturum açılır
      const r=await fetch(SUPA_URL+"/functions/v1/kayit",{method:"POST",headers:{"Content-Type":"application/json",apikey:SUPA_KEY,Authorization:"Bearer "+SUPA_KEY},body:JSON.stringify({email,password:pass,ad:name})});
      const j=await r.json().catch(()=>({}));
      if(!r.ok){if(j.error==="google"){auErr(en?"This e-mail is registered with Google: use “Continue with Google” below.":"Bu e-posta Google ile kayıtlı: aşağıdaki “Google ile giriş yap” düğmesini kullan.",$("eMail"));return}if(j.error==="exists"){auErr(sbErrText("already registered"),$("eMail"));return}
        if(j.error==="name"){auErr(T.e.user,$("eName"));return}throw new Error(j.error||("HTTP "+r.status))}
      const {data,error}=await c.auth.signInWithPassword({email,password:pass});if(error)throw error;
      await sbFinish(data.user);return;
    }
    const {data,error}=await c.auth.signInWithPassword({email,password:pass});if(error)throw error;
    await sbFinish(data.user);
  }catch(err){console.warn(err);auErr(sbErrText(err))}
  finally{btn.disabled=false}
};
$("auMailBtn").onclick=()=>{if(eMode==="newpass")eMode="login";auSetView("email")};
$("eMode").onclick=()=>{eMode=eMode==="register"?"login":"register";auMsg("");sbStatic()};
$("eBack").onclick=()=>{eMode="login";auSetView("login")};
$("eForgot").onclick=async()=>{
  const en=sbEn(),email=$("eMail").value.trim();auMsg("");
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){auErr(en?"Type your e-mail first.":"Önce e-posta adresini yaz.",$("eMail"));return}
  try{const c=await sbInit();const {error}=await c.auth.resetPasswordForEmail(email,{redirectTo:sbRedirect()});if(error)throw error;
    auMsg(en?"We sent a password reset link to "+email+".":email+" adresine şifre sıfırlama bağlantısı gönderdik.","ok")}catch(err){auErr(sbErrText(err))}
};
$("auGoogle").hidden=!SUPA_GOOGLE;
$("auGoogle").onclick=async()=>{
  try{const c=await sbInit();const {error}=await c.auth.signInWithOAuth({provider:"google",options:{redirectTo:sbRedirect()}});if(error)throw error}
  catch(err){auErr(sbErrText(err))}
};
/* Açılışta: kayıtlı Supabase oturumu varsa ya da e-posta bağlantısından dönüldüyse oturumu bağla ve verileri eşitle */
if(location.protocol!=="file:"&&(localStorage.getItem(SUPA_LS)||/access_token=|type=recovery|error_description=/.test(location.hash)||/[?&]code=/.test(location.search))){
  sbInit().then(c=>c.auth.getSession()).then(({data})=>{
    const ses=data&&data.session;if(!ses)return;
    const rec=Object.values(auUsers()).find(x=>x.cloud&&x.uid===ses.user.id);
    if(rec&&PROFILE===rec.name){sbUser=ses.user;sbPull()}
    else if(!PROFILE||!rec)sbFinish(ses.user);
  }).catch(e=>console.warn(e));
}
// Giriş
$("auLogin").onsubmit=async e=>{
  e.preventDefault();const T=aut();auMsg("");
  try{
    const name=$("lUser").value.trim().replace(/\s+/g," "),pass=$("lPass").value;
    if(!name||!pass){auErr(T.e.empty,!name?$("lUser"):$("lPass"));return}
    const users=auUsers(),k=auKey(name),u=users[k];
    if(!u){auErr(T.e.nouser,$("lUser"));return}
    if(u.cloud&&!u.hash){auErr(LANG==="en"?"This account uses e-mail sign-in: use “Continue with e-mail”.":"Bu hesap e-postayla açıldı: “E-postayla giriş yap” düğmesini kullan.");return}
    if(u.lock&&u.lock>Date.now()){auErr(T.e.locked(Math.ceil((u.lock-Date.now())/1000)));return}
    $("lSubmit").disabled=true;
    const h=await auHash(pass,u.salt);$("lSubmit").disabled=false;
    if(h!==u.hash){
      u.fails=(u.fails||0)+1;
      if(u.fails>=5){u.lock=Date.now()+30000;u.fails=0;auSave(users);auErr(T.e.locked(30),$("lPass"))}
      else{auSave(users);auErr(T.e.wrong(5-u.fails),$("lPass"))}
      $("lPass").value="";return;
    }
    auSignIn(u.name,$("lRemember").checked,T.ok.login(u.name));
  }catch(err){$("lSubmit").disabled=false;console.error(err);auErr(T.e.other+(err&&err.message||err))}
};
// Kayıt
$("auReg").onsubmit=async e=>{
  e.preventDefault();const T=aut();auMsg("");
  try{
    const name=$("rUser").value.trim().replace(/\s+/g," "),p1=$("rPass").value,p2=$("rPass2").value;
    if(!auNameOk(name)){auErr(T.e.user,$("rUser"));return}
    const ex=auFind(name);
    if(ex){if(p1&&(await auHash(p1,ex.salt))===ex.hash){auSignIn(ex.name,true,T.ok.login(ex.name));return}auErr(T.e.taken,$("rUser"));return}
    if(!p1){auErr(T.e.pass,$("rPass"));return}
    if(p1!==p2){auErr(T.e.pass2,$("rPass2"));return}
    $("rSubmit").disabled=true;
    const salt=auSalt();
    const rec={name,salt,hash:await auHash(p1,salt),av:auAv,created:Date.now(),fails:0,lock:0};
    $("rSubmit").disabled=false;
    // aynı adla eski (şifresiz) bir profil varsa verileri ona bağlanır
    const old=Object.keys(getProfiles()).find(n=>auKey(n)===auKey(name));const finalName=old||name;rec.name=finalName;
    const users=auUsers();users[auKey(finalName)]=rec;auSave(users);
    const profs=getProfiles();if(profs[finalName]&&!profs[finalName].av){profs[finalName].av=auAv;store.set("bm-profiles",profs)}
    auSignIn(finalName,true,T.ok.reg(finalName));
  }catch(err){$("rSubmit").disabled=false;console.error(err);auErr(T.e.other+(err&&err.message||err))}
};
// Şifremi unuttum
$("auForgot").onsubmit=async e=>{
  e.preventDefault();const T=aut();auMsg("");
  try{
    if(!auForgotUser){
      const u=auFind($("fUser").value);if(!u){auErr(T.e.nouser,$("fUser"));return}
      auForgotUser=u.name;$("fUser").disabled=true;$("fQ").textContent="🔒 "+T.qs[u.q||0];$("fQ").hidden=false;$("fAW").hidden=false;$("fPW").hidden=false;$("fSubmit").textContent=T.fReset;$("fA").focus();return;
    }
    const users=auUsers(),k=auKey(auForgotUser),u=users[k];if(!u)return;
    if(u.lock&&u.lock>Date.now()){auErr(T.e.locked(Math.ceil((u.lock-Date.now())/1000)));return}
    if(await auHash(auKey($("fA").value),u.aSalt)!==u.aHash){u.fails=(u.fails||0)+1;if(u.fails>=5){u.lock=Date.now()+30000;u.fails=0}auSave(users);auErr(T.e.badA,$("fA"));return}
    const np=$("fPass").value;if(!np){auErr(T.e.pass,$("fPass"));return}
    u.salt=auSalt();u.hash=await auHash(np,u.salt);u.fails=0;u.lock=0;auSave(users);
    const nm=u.name;$("lUser").value=nm;auSetView("login");auMsg(T.ok.reset,"ok");
  }catch(err){console.error(err);auErr(T.e.other+(err&&err.message||err))}
};
// Etkileşimler
$("auTabLogin").onclick=()=>auSetView("login");
$("auTabReg").onclick=()=>auSetView("register");
$("auForgotBtn").onclick=()=>{$("fUser").value=$("lUser").value;auSetView("forgot")};
$("fBack").onclick=()=>auSetView("login");
$("auGuest").onclick=()=>{PROFILE=null;try{sessionStorage.setItem("bm-guest","1");store.set("bm-session",null);sessionStorage.removeItem("bm-session")}catch(e){}loadProfileData();closeAuth()};
$("auBack").onclick=()=>closeAuth();
$("auLang").onclick=()=>{setLang(LANG==="en"?"tr":"en");auStatic()};
document.querySelectorAll(".au-eye").forEach(b=>b.onclick=()=>{const i=$(b.dataset.eye);const show=i.type==="password";i.type=show?"text":"password";b.classList.toggle("on",show);b.textContent=show?"🙈":"👁"});
document.querySelectorAll(".au-pw input").forEach(i=>{const c=i.parentElement.querySelector(".au-caps");if(!c)return;const f=e=>{c.hidden=!(e.getModifierState&&e.getModifierState("CapsLock"))};i.addEventListener("keyup",f);i.addEventListener("keydown",f);i.addEventListener("blur",()=>c.hidden=true)});
document.querySelectorAll(".au-f input").forEach(i=>i.addEventListener("input",()=>i.classList.remove("bad")));
$("lUser").addEventListener("input",auRenderUsers);
$("rUser").addEventListener("input",()=>{const T=aut(),n=$("rUser").value.trim(),h=$("rUserH");
  if(!n){h.textContent=T.userHint;h.className="au-hint";return}
  if(!auNameOk(n)){h.textContent=T.e.user;h.className="au-hint bad";return}
  if(auFind(n)){h.textContent=T.e.taken;h.className="au-hint bad";return}
  h.textContent="✓ "+n;h.className="au-hint good"});
$("rPass").addEventListener("input",()=>{const p=$("rPass").value;
  if($("rPass2").value)$("rPass2").classList.toggle("good",$("rPass2").value===p)});
$("rPass2").addEventListener("input",()=>{$("rPass2").classList.toggle("good",$("rPass2").value&&$("rPass2").value===$("rPass").value)});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("auth").hidden&&auBack)closeAuth()});
// Profil adını değiştirince hesabı da taşı
function authRename(oldN,newN){const u=auUsers(),r=u[auKey(oldN)];if(!r)return;delete u[auKey(oldN)];r.name=newN;u[auKey(newN)]=r;auSave(u)}
// Hesabı sil: şifre ile doğrula
async function authVerify(name,pass){const u=auFind(name);if(!u)return true;return (await auHash(pass,u.salt))===u.hash}
function authDelete(name){const u=auUsers();delete u[auKey(name)];auSave(u)}
// Şifre değiştir (profil > ayarlar)
function openPassView(){
  const T=aut();
  $("pinTitle").textContent=LANG==="en"?"🔑 Change password":"🔑 Şifre değiştir";
  $("pinCurLbl").textContent=LANG==="en"?"Current password":"Mevcut şifre";$("pinNewLbl").textContent=LANG==="en"?"New password":"Yeni şifre";
  ["pinCur","pinNew"].forEach(id=>{const i=$(id);i.value="";i.removeAttribute("maxlength");i.removeAttribute("inputmode");i.oninput=null;i.autocomplete=id==="pinCur"?"current-password":"new-password"});
  $("pinCurWrap").hidden=false;$("pinErr").textContent="";$("pinSave").textContent=LANG==="en"?"Save":"Kaydet";$("pinCancel").textContent=gt("pmCancel");
  $("pinSave").onclick=async()=>{
    const users=auUsers(),u=users[auKey(PROFILE)];if(!u)return;
    if((await auHash($("pinCur").value,u.salt))!==u.hash){$("pinErr").textContent=LANG==="en"?"Current password is wrong.":"Mevcut şifre yanlış.";return}
    const np=$("pinNew").value;if(!np){$("pinErr").textContent=T.e.pass;return}
    u.salt=auSalt();u.hash=await auHash(np,u.salt);auSave(users);
    toast(LANG==="en"?"🔑 Password changed":"🔑 Şifren değiştirildi");$("pmPinView").hidden=true;$("pmMain").hidden=false;
  };
  $("pmMain").hidden=true;$("pmPinView").hidden=false;setTimeout(()=>$("pinCur").focus(),30);
}

/* Misafir bir şey kaydetmeye çalışınca hesap ister */
function askAccount(kind){const msg=(GT[LANG].needAcc||{})[kind]||"";toast("🔐 "+msg);openAuth({back:true,msg:"🔐 "+msg})}
$("gateBtn").onclick=()=>openGate(true);
$("gateBack").onclick=()=>closeGate();
$("gTabIn").onclick=()=>{gateMode="in";$("gErr").textContent="";renderGate()};
$("gTabNew").onclick=()=>{gateMode="new";gatePicked=null;$("gErr").textContent="";renderGate();$("gName").focus()};
$("gGuest").onclick=()=>{PROFILE=null;try{sessionStorage.setItem("bm-guest","1")}catch(e){}loadProfileData();closeGate()};
$("gateLang").onclick=()=>{setLang(LANG==="en"?"tr":"en");renderGate()};
$("gPin").oninput=e=>{e.target.value=e.target.value.replace(/\D/g,"").slice(0,4)};


/* Kayıtlı verileri temizle: silinmiş/geçersiz tarif, tekrar eden ya da sınır dışı işaretler ve boş kayıtlar sayılmasın */
function cleanUserData(save){
  const clean={};
  for(const [key,arr] of Object.entries(checks||{})){
    const r=RECIPES.find(x=>x.key===key);if(!r||!Array.isArray(arr))continue;
    const n=(r.ing||[]).length,u=[...new Set(arr.map(Number))].filter(i=>Number.isInteger(i)&&i>=0&&i<n);
    if(u.length)clean[key]=u;
  }
  const changed=JSON.stringify(clean)!==JSON.stringify(checks||{});
  checks=clean;
  pantrySel=new Set([...pantrySel].filter(x=>PANTRY_BY[x]));
  favs=new Set([...favs].filter(k=>RECIPES.some(r=>r.key===k)));
  if(save&&PROFILE&&changed)store.set(K("bm-checks"),checks);
}
/* ---------- Profil paneli ve silme ---------- */
Object.assign(GT.tr,{pmSince:d=>`Profil oluşturma: ${d}`,pmGuest:"Misafir olarak geziyorsun",stFav:"Favori",stCheck:"Tariflerde işaretli malzeme",stPantry:"\"Elimde ne var?\" seçimi",
 pmSwitch:"🔑 Profil değiştir",pmLogout:"Çıkış yap",pmDelete:"🗑️ Profili sil",pmWarnTitle:n=>`${n} profili silinsin mi?`,
 pmWarn:"Bu işlem geri alınamaz. Profille birlikte favorilerin, işaretlediğin malzemeler ve \"Elimde ne var?\" seçimlerin de bu tarayıcıdan silinecek.",
 pmPin:"Onaylamak için PIN'ini gir",pmCancel:"Vazgeç",pmYes:"Evet, profili sil",pmDeleted:n=>`${n} profili silindi`,pmBadPin:"PIN yanlış.",pmClose:"Kapat"});
Object.assign(GT.en,{pmSince:d=>`Profile created: ${d}`,pmGuest:"You're browsing as a guest",stFav:"Favourites",stCheck:"Ticked recipe ingredients",stPantry:"\"What's in my kitchen?\" picks",
 pmSwitch:"🔑 Switch profile",pmLogout:"Sign out",pmDelete:"🗑️ Delete profile",pmWarnTitle:n=>`Delete the ${n} profile?`,
 pmWarn:"This can't be undone. Your favourites, ticked ingredients and \"What's in my kitchen?\" picks will also be removed from this browser.",
 pmPin:"Enter your PIN to confirm",pmCancel:"Cancel",pmYes:"Yes, delete profile",pmDeleted:n=>`${n} profile deleted`,pmBadPin:"Wrong PIN.",pmClose:"Close"});
function closeProfile(){$("pm").hidden=true;$("pmScrim").hidden=true;if(typeof mnavUpdate==="function")mnavUpdate()}
function doLogout(){
  sbSignOut(PROFILE);PROFILE=null;try{store.set("bm-session",null);sessionStorage.removeItem("bm-session");sessionStorage.removeItem("bm-guest")}catch(e){}
  closeProfile();toast(gt("bye"));openGate();
}
$("userBtn").onclick=openProfile;
$("pmClose").onclick=closeProfile;$("pmScrim").onclick=closeProfile;
$("pmSwitch").onclick=()=>{closeProfile();openGate(true)};
$("pmLogout").onclick=doLogout;
$("pmDelete").onclick=()=>{
  const p=getProfiles()[PROFILE];if(!p)return;
  $("pmWarnTitle").textContent=gt("pmWarnTitle",PROFILE);$("pmWarn").textContent=gt("pmWarn");
  const acc=auFind(PROFILE),hasAcc=!!acc&&!(acc.cloud&&!acc.hash);
  $("pmPinLbl").textContent=hasAcc?(LANG==="en"?"Enter your password to confirm":"Onaylamak için şifreni gir"):gt("pmPin");$("pmPinWrap").hidden=!(p.pin||hasAcc);$("pmPin").value="";$("pmErr").textContent="";
  if(hasAcc){const i=$("pmPin");i.removeAttribute("maxlength");i.removeAttribute("inputmode");i.oninput=null}
  $("pmCancel").textContent=gt("pmCancel");$("pmYes").textContent=gt("pmYes");
  $("pmMain").hidden=true;$("pmConfirm").hidden=false;setTimeout(()=>(p.pin?$("pmPin"):$("pmCancel")).focus(),30);
};
/* ================= Gelişmiş profil: istatistik, seviye, rozetler, geçmiş, tercihler ================= */
Object.assign(GT.tr,{ppLevelPts:(p,n,next)=>next?`${p} puan · ${next} seviyesine ${n} puan kaldı`:`${p} puan · en yüksek seviye!`,
 stViewed:"Bakılan tarif",stCooked:"Pişirme modu",stCountries:"Keşfedilen ülke",ppBadges:"Rozetler",ppFavs:"Favorilerim",ppRecent:"Son baktıkların",ppPrefs:"Tercihler",ppData:"Veriler ve güvenlik",
 ppNoFav:"Henüz favorin yok. Tarif kartlarındaki ❤️ ile ekleyebilirsin.",ppNoRecent:"Henüz bir tarife bakmadın.",ppAvatar:"Avatarını seç",
 prefVeg:"🌱 Vejetaryenim (Şef yalnızca etsiz önersin)",prefSpicy:"🌶️ Acı severim",prefRead:"🔊 Şef'in cevaplarını sesli oku",
 dClearChecks:"✓ Tarif işaretlerini temizle",dClearPantry:"🧺 \"Elimde ne var?\" seçimlerini temizle",dClearRecent:"🕘 Geçmişi temizle",dPin:"🔐 PIN ekle / değiştir",
 dConfirm:"Emin misin? Bu işlem geri alınamaz.",dDone:"Temizlendi",
 pinTitle:"PIN ekle / değiştir",pinCur:"Mevcut PIN",pinNew:"Yeni PIN (4 rakam; boş bırakırsan PIN kaldırılır)",pinSave:"Kaydet",pinSaved:"PIN güncellendi",pinRemoved:"PIN kaldırıldı",pinBadFmt:"PIN 4 rakam olmalı.",
 guestCta:"Profil oluşturarak favori ekleyebilir, rozet kazanabilir ve Şef'i kullanabilirsin.",guestBtn:"🔑 Giriş yap / Profil oluştur",
 levels:["Çırak 🥄","Kalfa 🍳","Usta 👨‍🍳","Şef 🏅","Dünya Şefi 🌍"],
 badges:{ilk:["👀","İlk Tarif","Bir tarife bak"],kasif:["🔎","Kâşif","20 farklı tarife bak"],fav5:["❤️","Koleksiyoncu","5 favori ekle"],gezgin:["🧭","Gezgin","5 ülkenin tarifine bak"],
  dunya:["🌍","Dünya Turu","10 ülkenin hepsini keşfet"],ocak:["🔥","Ocak Başında","Pişirme modunu 3 kez kullan"],hikaye:["📜","Hikâye Avcısı","5 yemeğin hikâyesini oku"],tatli:["🍯","Tatlı Sever","3 tatlı tarifine bak"]}});
Object.assign(GT.en,{ppLevelPts:(p,n,next)=>next?`${p} points · ${n} to ${next}`:`${p} points · top level!`,
 stViewed:"Recipes viewed",stCooked:"Cooking mode",stCountries:"Cuisines explored",ppBadges:"Badges",ppFavs:"My favourites",ppRecent:"Recently viewed",ppPrefs:"Preferences",ppData:"Data & security",
 ppNoFav:"No favourites yet. Add some with the ❤️ on recipe cards.",ppNoRecent:"You haven't viewed a recipe yet.",ppAvatar:"Choose your avatar",
 prefVeg:"🌱 I'm vegetarian (Chef suggests meat-free only)",prefSpicy:"🌶️ I love spicy food",prefRead:"🔊 Read the Chef's replies aloud",
 dClearChecks:"✓ Clear recipe ticks",dClearPantry:"🧺 Clear \"What's in my kitchen?\" picks",dClearRecent:"🕘 Clear history",dPin:"🔐 Add / change PIN",
 dConfirm:"Are you sure? This can't be undone.",dDone:"Cleared",
 pinTitle:"Add / change PIN",pinCur:"Current PIN",pinNew:"New PIN (4 digits; leave empty to remove)",pinSave:"Save",pinSaved:"PIN updated",pinRemoved:"PIN removed",pinBadFmt:"The PIN must be 4 digits.",
 guestCta:"Create a profile to add favourites, earn badges and use the Chef.",guestBtn:"🔑 Sign in / Create profile",
 levels:["Apprentice 🥄","Cook 🍳","Master 👨‍🍳","Chef 🏅","World Chef 🌍"],
 badges:{ilk:["👀","First Recipe","View a recipe"],kasif:["🔎","Explorer","View 20 different recipes"],fav5:["❤️","Collector","Add 5 favourites"],gezgin:["🧭","Traveller","View recipes from 5 countries"],
  dunya:["🌍","World Tour","Explore all 10 countries"],ocak:["🔥","At the Stove","Use cooking mode 3 times"],hikaye:["📜","Story Hunter","Read 5 dish stories"],tatli:["🍯","Sweet Tooth","View 3 dessert recipes"]}});
const AVATARS=["👨‍🍳","👩‍🍳","🍲","🍕","🍣","🌮","🥘","🍜","🧁","🥗","🍔","🥐","🍩","🌶️","🧄","🍋"];
const DESSERT_KEYS=["tr-2","tr-7","tr-12","it-1","fr-0"];
const getStats=()=>PROFILE?store.get(K("bm-stats"),{v:{},c:{},s:0,last:[]}):{v:{},c:{},s:0,last:[]};
const putStats=s=>{if(PROFILE)store.set(K("bm-stats"),s)};
function trackView(key){if(!PROFILE)return;const s=getStats();s.ev=[...(s.ev||[]),{t:Date.now(),a:"v",k:key}].slice(-300);s.v[key]=(s.v[key]||0)+1;s.last=[key,...(s.last||[]).filter(k=>k!==key)].slice(0,8);putStats(s)}
function trackCook(key){if(!PROFILE||!key)return;const s=getStats();s.ev=[...(s.ev||[]),{t:Date.now(),a:"c",k:key}].slice(-300);s.c[key]=(s.c[key]||0)+1;putStats(s)}
function trackStory(){if(!PROFILE)return;const s=getStats();s.s=(s.s||0)+1;putStats(s)}
function avatarOf(name){const p=name&&getProfiles()[name];return p&&p.av?p.av:null}
function profileSummary(){
  const s=getStats(),viewed=Object.keys(s.v||{}).filter(k=>RECIPES.some(r=>r.key===k));
  const countries=new Set(viewed.map(k=>k.split("-")[0]));
  const cooked=Object.values(s.c||{}).reduce((a,b)=>a+b,0),stories=s.s||0,sweets=viewed.filter(k=>DESSERT_KEYS.includes(k)).length;
  const X=profileExtra();const pts=viewed.length*2+cooked*5+favs.size*3+stories*2+countries.size*4+X.doneN*8+X.notesN*2+X.days*2;
  const th=[0,25,70,140,250];let lv=0;th.forEach((t,i)=>{if(pts>=t)lv=i});
  const badges=[["ilk",viewed.length,1],["kasif",viewed.length,20],["fav5",favs.size,5],["gezgin",countries.size,5],["dunya",countries.size,10],["ocak",cooked,3],["hikaye",stories,5],["tatli",sweets,3],["evsefi",X.doneN,5],["notdefteri",X.notesN,3],["sadik",X.days,7]];
  return {s,viewed,countries,cooked,stories,pts,lv,th,badges};
}
const thumb=k=>{const r=RECIPES.find(x=>x.key===k);if(!r)return"";const u=photoUrl(k);
  return `<button class="pp-thumb" data-key="${k}" type="button">${u?`<img decoding="async" src="${u}" alt="" loading="lazy">`:`<span>${r.emoji}</span>`}<em>${esc(L(r,"title"))}</em></button>`};
/* ================= Profil 2.0: sekmeler, aktivite, pişirdiklerim, notlar, düzenleme, yedekleme ================= */
Object.assign(GT.tr,{tabGen:"Genel bakış",tabCol:"Koleksiyonum",tabBadge:"Rozetler",tabSet:"Ayarlar",
 ppAct:"Son 7 günlük aktivite",ppFlags:"Keşfettiğin mutfaklar",ppRec:"Sana özel öneriler",ppRecEmpty:"Birkaç tarife bakınca ya da favori ekleyince sana özel öneriler burada görünecek.",
 ppDone:"Pişirdiklerim",ppNoDone:"Henüz \"✅ Pişirdim\" demedin. Bir tarifi yaptıktan sonra tarif sayfasındaki düğmeye bas.",ppNotes:"Notlarım",ppNoNotes:"Henüz not almadın. Tarif sayfasındaki \"📝 Notum\" alanını kullanabilirsin.",
 stDone:"Pişirilen yemek",ppEdit:"Profili düzenle",edName:"Ad",edBio:"Hakkımda (en fazla 120 karakter)",edCuisine:"En sevdiğim mutfak",edNone:"Seçilmedi",edPin:"Mevcut PIN (ad değişikliği için)",edSave:"Değişiklikleri kaydet",
 edSaved:"Profil güncellendi",edTaken:"Bu ad başka bir profilde kullanılıyor.",edBadPin:"PIN yanlış.",edNameReq:"Ad boş olamaz.",loves:c=>`${c} mutfağını sever`,
 ppBackup:"Yedekleme",bkMake:"💾 Yedek kodu oluştur",bkLoad:"📥 Yedeği geri yükle",bkMakeInfo:"Bu kodu kopyalayıp sakla. Başka bir cihazda ya da indirilen sürümde \"Yedeği geri yükle\" ile verilerini taşıyabilirsin.",
 bkCopy:"Kopyala",bkCopied:"Yedek kodu kopyalandı",bkLoadInfo:"Daha önce oluşturduğun yedek kodunu buraya yapıştır. Bu profildeki veriler yedektekilerle değiştirilir.",bkApply:"Geri yükle",bkBad:"Yedek kodu okunamadı. Kodun tamamını yapıştırdığından emin ol.",bkDone:"Yedek geri yüklendi",
 done:"✅ Pişirdim",doneAgain:n=>`✅ Pişirdim (${n})`,doneToast:r=>`Afiyet olsun! ${r} pişirdiklerine eklendi 🎉`,note:"📝 Notum",notePh:"Bu tarif için notun… (ör. tuzu azalttım, 10 dk fazla pişirdim)",noteSaved:"Not kaydedildi",
 days:["Paz","Pzt","Sal","Çar","Per","Cum","Cmt"],actLegend:"bakılan tarif · pişirilen · favori",timesAgo:(n,d)=>`${n} kez · son: ${d}`});
Object.assign(GT.en,{tabGen:"Overview",tabCol:"My collection",tabBadge:"Badges",tabSet:"Settings",
 ppAct:"Activity in the last 7 days",ppFlags:"Cuisines you've explored",ppRec:"Picked for you",ppRecEmpty:"View a few recipes or add favourites and personal picks will appear here.",
 ppDone:"Dishes I've cooked",ppNoDone:"You haven't marked anything as cooked yet. Tap \"✅ I cooked this\" on a recipe after making it.",ppNotes:"My notes",ppNoNotes:"No notes yet. Use the \"📝 My note\" box on a recipe.",
 stDone:"Dishes cooked",ppEdit:"Edit profile",edName:"Name",edBio:"About me (max 120 characters)",edCuisine:"Favourite cuisine",edNone:"Not selected",edPin:"Current PIN (needed to rename)",edSave:"Save changes",
 edSaved:"Profile updated",edTaken:"That name is used by another profile.",edBadPin:"Wrong PIN.",edNameReq:"Name can't be empty.",loves:c=>`Loves ${c} food`,
 ppBackup:"Backup",bkMake:"💾 Create backup code",bkLoad:"📥 Restore backup",bkMakeInfo:"Copy and keep this code. Use \"Restore backup\" on another device or in the downloaded version to move your data.",
 bkCopy:"Copy",bkCopied:"Backup code copied",bkLoadInfo:"Paste a backup code you created earlier. This profile's data will be replaced by the backup.",bkApply:"Restore",bkBad:"Couldn't read the backup code. Make sure you pasted all of it.",bkDone:"Backup restored",
 done:"✅ I cooked this",doneAgain:n=>`✅ I cooked this (${n})`,doneToast:r=>`Enjoy! ${r} was added to your cooked dishes 🎉`,note:"📝 My note",notePh:"Your note for this recipe… (e.g. used less salt, cooked 10 min longer)",noteSaved:"Note saved",
 days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],actLegend:"recipes viewed · cooked · favourites",timesAgo:(n,d)=>`${n} times · last: ${d}`});
Object.assign(GT.tr.badges,{evsefi:["🍽️","Ev Şefi","5 kez \"Pişirdim\" de"],notdefteri:["📝","Not Defteri","3 tarife not al"],sadik:["📅","Sadık Aşçı","7 farklı gün siteye uğra"]});
Object.assign(GT.en.badges,{evsefi:["🍽️","Home Chef","Mark 5 dishes as cooked"],notdefteri:["📝","Note Keeper","Write notes on 3 recipes"],sadik:["📅","Regular Cook","Visit on 7 different days"]});

let ppTab="gen";
const fmtDate=t=>new Date(t).toLocaleDateString(LANG==="en"?"en-GB":"tr-TR",{day:"numeric",month:"short"});
const dayKey=t=>{const d=new Date(t);return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()};
function logEvent(a,k){if(!PROFILE)return;const s=getStats();s.ev=[...(s.ev||[]),{t:Date.now(),a,k}].slice(-300);putStats(s)}
const getNotes=()=>PROFILE?store.get(K("bm-notes"),{}):{};
const getDone=()=>PROFILE?store.get(K("bm-done"),{}):{};
function markDone(key){
  if(!PROFILE){askAccount("cook");return}
  const d=getDone();d[key]=[...(d[key]||[]),Date.now()].slice(-50);store.set(K("bm-done"),d);logEvent("d",key);
  const r=RECIPES.find(x=>x.key===key);toast(gt("doneToast",L(r,"title")));renderSheet();
}
function profileExtra(){
  const s=getStats(),done=getDone(),notes=getNotes();
  const doneN=Object.values(done).reduce((a,v)=>a+v.length,0),notesN=Object.values(notes).filter(v=>String(v).trim()).length;
  const days=new Set((s.ev||[]).map(e=>dayKey(e.t))).size;
  return {s,done,notes,doneN,notesN,days};
}
function setPpTab(tab){
  ppTab=tab;
  document.querySelectorAll("#pm .pp-tabs button").forEach(b=>b.setAttribute("aria-selected",b.dataset.ptab===tab));
  document.querySelectorAll("#pm .pp-pane").forEach(p=>p.hidden=p.dataset.pane!==tab||!PROFILE);
}
function renderProfileExtra(){
  if(!PROFILE)return;
  const X=profileExtra(),prof=getProfiles()[PROFILE]||{};
  // sekme adları
  [["gen","tabGen"],["col","tabCol"],["badge","tabBadge"],["set","tabSet"]].forEach(([k,l])=>{const b=document.querySelector(`#pm [data-ptab="${k}"]`);if(b)b.textContent=gt(l)});
  // kimlik: biyografi ve sevdiği mutfak
  const cz=prof.cuisine&&DATA.find(c=>c.id===prof.cuisine);
  $("pmBio").textContent=prof.bio||"";$("pmBio").hidden=!prof.bio;
  $("pmLoves").textContent=cz?cz.flag+" "+gt("loves",CN(cz)):"";$("pmLoves").hidden=!cz;
  // istatistiklere "pişirilen yemek" ekle
  // 7 günlük aktivite
  const now=new Date();now.setHours(0,0,0,0);const cols=[];
  for(let i=6;i>=0;i--){const d=new Date(now.getTime()-i*864e5),k=dayKey(d),ev=(X.s.ev||[]).filter(e=>dayKey(e.t)===k);
    cols.push({lbl:gt("days")[d.getDay()],v:ev.filter(e=>e.a==="v").length,d:ev.filter(e=>e.a==="d"||e.a==="c").length,f:ev.filter(e=>e.a==="f").length,today:i===0})}
  const max=Math.max(1,...cols.map(c=>c.v+c.d+c.f));
  $("pmActH").textContent=gt("ppAct");
  $("pmAct").innerHTML=`<div class="pp-bars">${cols.map(c=>`<div class="pp-bar${c.today?" today":""}" title="${c.v} · ${c.d} · ${c.f}"><div class="pp-stack" style="height:${Math.round((c.v+c.d+c.f)/max*100)}%"><i class="v" style="flex:${c.v}"></i><i class="d" style="flex:${c.d}"></i><i class="f" style="flex:${c.f}"></i></div><small>${c.lbl}</small></div>`).join("")}</div><p class="pp-legend"><i class="v"></i><i class="d"></i><i class="f"></i>${esc(gt("actLegend"))}</p>`;
  // keşfedilen mutfaklar
  const seen=new Set(Object.keys(X.s.v||{}).map(k=>k.split("-")[0]));
  $("pmFlagsH").textContent=gt("ppFlags")+` · ${seen.size}/${DATA.length}`;
  $("pmFlags").innerHTML=DATA.map(c=>`<button type="button" class="pp-flag${seen.has(c.id)?" on":""}" data-c="${c.id}" title="${esc(CN(c))}">${FL(c,"big")}<small>${esc(CN(c))}</small></button>`).join("");
  $("pmFlags").querySelectorAll(".pp-flag").forEach(b=>b.onclick=()=>{closeProfile();const chip=document.querySelector(`.chip[data-id="${b.dataset.c}"]`);if(chip){chip.click();$("count").scrollIntoView({behavior:"smooth"})}});
  // kişisel öneriler
  const base=[...favs,...(X.s.last||[])].filter((k,i,a)=>a.indexOf(k)===i).slice(0,6);
  const rec=base.length?ChefAI.similarTo(base,new Set([...favs,...base]),4):[];
  $("pmRecH").textContent=gt("ppRec");
  $("pmRec").innerHTML=rec.length?rec.map(r=>thumb(r.key)).join(""):`<p class="pp-empty">${esc(gt("ppRecEmpty"))}</p>`;
  // pişirdiklerim
  const doneList=Object.entries(X.done).filter(([k,v])=>v.length&&RECIPES.some(r=>r.key===k)).sort((a,b)=>b[1][b[1].length-1]-a[1][a[1].length-1]);
  $("pmDoneH").textContent=gt("ppDone")+(doneList.length?` (${X.doneN})`:"");
  $("pmDone").innerHTML=doneList.length?doneList.map(([k,v])=>{const r=RECIPES.find(x=>x.key===k),u=photoUrl(k);
    return `<button type="button" class="pp-item" data-key="${k}">${u?`<img decoding="async" src="${u}" alt="">`:`<span>${r.emoji}</span>`}<div><b>${esc(L(r,"title"))}</b><small>${esc(gt("timesAgo",v.length,fmtDate(v[v.length-1])))}</small></div></button>`}).join(""):`<p class="pp-empty">${esc(gt("ppNoDone"))}</p>`;
  // notlarım
  const notes=Object.entries(X.notes).filter(([k,v])=>String(v).trim()&&RECIPES.some(r=>r.key===k));
  $("pmNotesH").textContent=gt("ppNotes")+(notes.length?` (${notes.length})`:"");
  $("pmNotes").innerHTML=notes.length?notes.map(([k,v])=>{const r=RECIPES.find(x=>x.key===k);
    return `<button type="button" class="pp-item note" data-key="${k}"><span>📝</span><div><b>${esc(L(r,"title"))}</b><small>${esc(String(v).slice(0,90))}${String(v).length>90?"…":""}</small></div></button>`}).join(""):`<p class="pp-empty">${esc(gt("ppNoNotes"))}</p>`;
  document.querySelectorAll("#pm .pp-item").forEach(b=>b.onclick=()=>{closeProfile();openSheet(b.dataset.key,"ing")});
  document.querySelectorAll("#pm .pp-thumb").forEach(b=>b.onclick=()=>{closeProfile();openSheet(b.dataset.key,"ing")});
  // profili düzenle
  $("pmEditH").textContent=gt("ppEdit");
  $("pmEdit").innerHTML=`<label class="pm-field"><span>${esc(gt("edName"))}</span><input id="edName" maxlength="24" value="${esc(PROFILE)}"></label>
    <label class="pm-field"><span>${esc(gt("edBio"))}</span><textarea id="edBio" maxlength="120" rows="2">${esc(prof.bio||"")}</textarea></label>
    <label class="pm-field"><span>${esc(gt("edCuisine"))}</span><select id="edCuisine"><option value="">${esc(gt("edNone"))}</option>${DATA.map(c=>`<option value="${c.id}"${prof.cuisine===c.id?" selected":""}>${c.flag} ${esc(CN(c))}</option>`).join("")}</select></label>
    ${prof.pin?`<label class="pm-field" id="edPinWrap" hidden><span>${esc(gt("edPin"))}</span><input id="edPin" type="password" inputmode="numeric" maxlength="4"></label>`:""}
    <p class="pm-err" id="edErr"></p><button class="btn primary pp-save" id="edSave" type="button">${esc(gt("edSave"))}</button>`;
  $("edName").oninput=()=>{const w=$("edPinWrap");if(w)w.hidden=$("edName").value.trim()===PROFILE};
  $("edSave").onclick=saveProfileEdit;
  // yedekleme
  $("pmBackupH").textContent=gt("ppBackup");
  $("pmBackup").innerHTML=`<div class="pp-bkbtns"><button class="btn pp-dbtn" id="bkMake" type="button">${esc(gt("bkMake"))}</button><button class="btn pp-dbtn" id="bkLoad" type="button">${esc(gt("bkLoad"))}</button></div><div id="bkBox" hidden></div>`;
  $("bkMake").onclick=()=>{const code=makeBackup();$("bkBox").hidden=false;
    $("bkBox").innerHTML=`<p class="pp-note">${esc(gt("bkMakeInfo"))}</p><textarea class="pp-code" id="bkCode" readonly rows="4">${esc(code)}</textarea><button class="btn" id="bkCopy" type="button">${esc(gt("bkCopy"))}</button>`;
    $("bkCode").onclick=e=>e.target.select();
    $("bkCopy").onclick=async()=>{const ta=$("bkCode");ta.select();let ok=false;try{await navigator.clipboard.writeText(ta.value);ok=true}catch(e){try{ok=document.execCommand("copy")}catch(e2){}}toast(ok?gt("bkCopied"):"Ctrl + C")}};
  $("bkLoad").onclick=()=>{$("bkBox").hidden=false;
    $("bkBox").innerHTML=`<p class="pp-note">${esc(gt("bkLoadInfo"))}</p><textarea class="pp-code" id="bkIn" rows="4"></textarea><p class="pm-err" id="bkErr"></p><button class="btn primary" id="bkApply" type="button">${esc(gt("bkApply"))}</button>`;
    $("bkApply").onclick=()=>{if(restoreBackup($("bkIn").value)){toast(gt("bkDone"));loadProfileData();renderProfile()}else $("bkErr").textContent=gt("bkBad")}};
  setPpTab(ppTab);
}
const BK_KEYS=["bm-favs","bm-checks","bm-pantry","bm-stats","bm-notes","bm-done","bm-chef","bm-chef-prefs","bm-chef-learn","bm-chef-voice"];
function makeBackup(){
  const p=getProfiles()[PROFILE]||{},data={v:1,name:PROFILE,meta:{av:p.av||null,bio:p.bio||"",cuisine:p.cuisine||""},d:{}};
  BK_KEYS.forEach(k=>{const v=store.get(k+"@"+PROFILE,null);if(v!==null)data.d[k]=v});
  return "DM1."+btoa(unescape(encodeURIComponent(JSON.stringify(data))));
}
function restoreBackup(code){
  try{
    const raw=String(code||"").trim().replace(/^DM1\./,"");const data=JSON.parse(decodeURIComponent(escape(atob(raw))));
    if(!data||data.v!==1||typeof data.d!=="object")return false;
    BK_KEYS.forEach(k=>{if(k in data.d)store.set(k+"@"+PROFILE,data.d[k])});
    const pr=getProfiles();if(pr[PROFILE]&&data.meta){Object.assign(pr[PROFILE],{av:data.meta.av||pr[PROFILE].av||null,bio:data.meta.bio||"",cuisine:data.meta.cuisine||""});store.set("bm-profiles",pr)}
    return true;
  }catch(e){return false}
}
async function saveProfileEdit(){
  const pr=getProfiles(),p=pr[PROFILE];if(!p)return;
  const nn=$("edName").value.trim().replace(/\s+/g," "),bio=$("edBio").value.trim().slice(0,120),cz=$("edCuisine").value;
  if(!nn){$("edErr").textContent=gt("edNameReq");return}
  if(nn!==PROFILE){
    if(Object.keys(pr).some(n=>n!==PROFILE&&n.toLocaleLowerCase("tr")===nn.toLocaleLowerCase("tr"))){$("edErr").textContent=gt("edTaken");return}
    let newPin=null;
    if(p.pin){const pin=($("edPin")||{}).value||"";if(p.pin!==await hashPin(pin,PROFILE)){$("edErr").textContent=gt("edBadPin");return}newPin=await hashPin(pin,nn)}
    // tüm kişisel verileri yeni ada taşı
    const old=PROFILE;
    try{Object.keys(localStorage).filter(k=>k.endsWith("@"+old)).forEach(k=>{const base=k.slice(0,-(old.length+1));localStorage.setItem(base+"@"+nn,localStorage.getItem(k));localStorage.removeItem(k)})}catch(e){}
    pr[nn]={...p,pin:p.pin?newPin:null};delete pr[old];
    PROFILE=nn;if(typeof authRename==="function")authRename(old,nn);
    try{if(store.get("bm-session",null)===old)store.set("bm-session",nn);if(sessionStorage.getItem("bm-session"))sessionStorage.setItem("bm-session",JSON.stringify(nn))}catch(e){}
  }
  pr[PROFILE].bio=bio;pr[PROFILE].cuisine=cz;store.set("bm-profiles",pr);
  updateUserBtn();renderProfile();toast(gt("edSaved"));
}
// tarif sayfasındaki not alanı
function bindRecipeNote(r){
  const ta=$("recipeNote");if(!ta)return;let tmr=null;
  ta.oninput=()=>{clearTimeout(tmr);tmr=setTimeout(()=>{const n=getNotes();const v=ta.value.trim();if(v)n[r.key]=ta.value;else delete n[r.key];store.set(K("bm-notes"),n);
    const s=$("noteSaved");if(s){s.textContent="✓ "+gt("noteSaved");setTimeout(()=>{if(s)s.textContent=""},1500)}},500)};
}

function renderProfile(){
  const guest=!PROFILE,p=guest?null:getProfiles()[PROFILE],n=PROFILE||gt("guestName");
  $("pmAv").textContent=(!guest&&avatarOf(PROFILE))||n[0].toLocaleUpperCase("tr");$("pmAv").disabled=guest;$("pmAv").title=guest?"":gt("ppAvatar");
  $("pmName").textContent=n;
  $("pmSince").textContent=p&&p.created?gt("pmSince",new Date(p.created).toLocaleDateString(LANG==="en"?"en-GB":"tr-TR",{day:"numeric",month:"long",year:"numeric"})):gt("pmGuest");
  document.querySelectorAll("#pmMain .pp-member").forEach(e=>e.hidden=guest);document.querySelectorAll("#pm .pp-pane").forEach(p=>{if(guest)p.hidden=true});$("pmGuestBox").hidden=!guest;
  $("pmGuestTxt").textContent=gt("guestCta");$("pmGuestBtn").textContent=gt("guestBtn");
  $("pmSwitch").textContent=gt("pmSwitch");$("pmLogout").textContent=gt("pmLogout");$("pmDelete").textContent=gt("pmDelete");$("pmClose").setAttribute("aria-label",gt("pmClose"));
  if(guest)return;
  cleanUserData(true);
  const S=profileSummary(),L2=gt("levels"),next=S.lv<4?S.th[S.lv+1]:null;
  $("pmLevel").textContent=L2[S.lv];
  $("pmXpFill").style.width=(next?Math.round((S.pts-S.th[S.lv])/(next-S.th[S.lv])*100):100)+"%";
  $("pmXpTxt").textContent=gt("ppLevelPts",S.pts,next?next-S.pts:0,next?L2[S.lv+1]:"");
  const nChecks=Object.values(checks).reduce((a,v)=>a+v.length,0);
  $("pmStats").innerHTML=[[favs.size,"stFav","fav"],[S.viewed.length,"stViewed"],[profileExtra().doneN,"stDone","done"],[S.countries.size+" / "+DATA.length,"stCountries"],[nChecks,"stCheck"],[pantrySel.size,"stPantry","pantry"]]
    .map(([v,k,go])=>`<${go?"button":"div"} class="pm-stat${go?" go":""}"${go?` data-go="${go}" type="button"`:""}><b>${v}</b><small>${gt(k)}</small></${go?"button":"div"}>`).join("");
  $("pmStats").querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>{closeProfile();
    if(b.dataset.go==="done"){openProfile();setPpTab("col");return}
    if(b.dataset.go==="fav"){if(!state.onlyFav)$("favToggle").click();$("count").scrollIntoView({behavior:"smooth"})}else $("pantry").scrollIntoView({behavior:"smooth"})});
  $("pmBadgesH").textContent=gt("ppBadges")+` · ${S.badges.filter(b=>b[1]>=b[2]).length}/${S.badges.length}`;
  const B=gt("badges");
  $("pmBadges").innerHTML=S.badges.map(([id,val,need])=>{const [ico,name,desc]=B[id],ok=val>=need;
    return `<div class="pp-badge${ok?" ok":""}" title="${esc(desc)}"><span>${ico}</span><b>${esc(name)}</b><small>${ok?"✓":Math.min(val,need)+"/"+need}</small></div>`}).join("");
  $("pmFavH").textContent=gt("ppFavs")+(favs.size?` (${favs.size})`:"");
  $("pmFavs").innerHTML=favs.size?[...favs].map(thumb).join(""):`<p class="pp-empty">${esc(gt("ppNoFav"))}</p>`;
  $("pmRecentH").textContent=gt("ppRecent");
  const last=(S.s.last||[]).filter(k=>RECIPES.some(r=>r.key===k));
  $("pmRecent").innerHTML=last.length?last.map(thumb).join(""):`<p class="pp-empty">${esc(gt("ppNoRecent"))}</p>`;
  document.querySelectorAll("#pm .pp-thumb").forEach(b=>b.onclick=()=>{closeProfile();openSheet(b.dataset.key,"ing")});
  $("pmPrefH").textContent=gt("ppPrefs");
  const pr=ChefAI.getPrefs();
  $("pmPrefs").innerHTML=[["veg",gt("prefVeg"),!!pr.veg],["spicy",gt("prefSpicy"),pr.spicy===1],["read",gt("prefRead"),!!aiAutoRead]]
    .map(([k,l,on])=>`<label class="pp-switch"><input type="checkbox" data-pref="${k}" ${on?"checked":""}><span class="pp-track"><i></i></span><em>${esc(l)}</em></label>`).join("");
  $("pmPrefs").querySelectorAll("input").forEach(i=>i.onchange=()=>{const k=i.dataset.pref;
    if(k==="veg")ChefAI.setPref("veg",i.checked||undefined);else if(k==="spicy")ChefAI.setPref("spicy",i.checked?1:undefined);
    else{aiAutoRead=i.checked;store.set("bm-ai-autoread",aiAutoRead);if(typeof readStatic==="function")readStatic()}});
  $("pmDataH").textContent=gt("ppData");
  $("pmData").innerHTML=[["checks",gt("dClearChecks")],["pantry",gt("dClearPantry")],["recent",gt("dClearRecent")],["pass",LANG==="en"?"🔑 Change password":"🔑 Şifre değiştir"]]
    .map(([k,l])=>`<button class="btn pp-dbtn" data-act="${k}" type="button">${esc(l)}</button>`).join("");
  $("pmData").querySelectorAll("[data-act]").forEach(b=>b.onclick=()=>{const a=b.dataset.act;
    if(a==="pin"){openPinView();return}
    if(a==="pass"){openPassView();return}
    if(!confirm(gt("dConfirm")))return;
    if(a==="checks"){checks={};store.set(K("bm-checks"),checks)}
    else if(a==="pantry"){pantrySel=new Set();store.set(K("bm-pantry"),[]);if(typeof renderPantry==="function")renderPantry()}
    else{const s=getStats();s.last=[];putStats(s)}
    refresh();renderProfile();toast(gt("dDone"))});
  renderProfileExtra();
}
function openProfile(){
  $("pmMain").hidden=false;$("pmConfirm").hidden=true;$("pmPinView").hidden=true;$("pmAvPick").hidden=true;
  renderProfile();$("pm").hidden=false;$("pmScrim").hidden=false;$("pm").scrollTop=0;
}
// Avatar seçimi
$("pmAv").onclick=()=>{if(!PROFILE)return;const box=$("pmAvPick");
  if(!box.hidden){box.hidden=true;return}
  box.innerHTML=`<small>${esc(gt("ppAvatar"))}</small><div>`+AVATARS.map(a=>`<button type="button" data-av="${a}">${a}</button>`).join("")+`<button type="button" data-av="" class="pp-avreset">Aa</button></div>`;
  box.hidden=false;
  box.querySelectorAll("[data-av]").forEach(b=>b.onclick=()=>{const pr=getProfiles();if(!pr[PROFILE])return;pr[PROFILE].av=b.dataset.av||null;store.set("bm-profiles",pr);box.hidden=true;renderProfile();updateUserBtn()});
};
$("pmGuestBtn").onclick=()=>{closeProfile();openGate(true)};
document.querySelectorAll("#pm .pp-tabs button").forEach(b=>b.onclick=()=>{setPpTab(b.dataset.ptab);$("pm").scrollTop=0});
// PIN ekle / değiştir
function openPinView(){
  const p=getProfiles()[PROFILE];
  $("pinTitle").textContent=gt("pinTitle");$("pinCurLbl").textContent=gt("pinCur");$("pinNewLbl").textContent=gt("pinNew");
  $("pinCurWrap").hidden=!p.pin;$("pinCur").value="";$("pinNew").value="";$("pinErr").textContent="";
  $("pinSave").textContent=gt("pinSave");$("pinCancel").textContent=gt("pmCancel");
  $("pmMain").hidden=true;$("pmPinView").hidden=false;setTimeout(()=>(p.pin?$("pinCur"):$("pinNew")).focus(),30);
}
["pinCur","pinNew"].forEach(id=>$(id).oninput=e=>{e.target.value=e.target.value.replace(/\D/g,"").slice(0,4)});
$("pinCancel").onclick=()=>{$("pmPinView").hidden=true;$("pmMain").hidden=false};
$("pinSave").onclick=async()=>{
  const pr=getProfiles(),p=pr[PROFILE];if(!p)return;
  if(p.pin&&p.pin!==await hashPin($("pinCur").value,PROFILE)){$("pinErr").textContent=gt("pmBadPin");return}
  const nv=$("pinNew").value;if(nv&&!/^\d{4}$/.test(nv)){$("pinErr").textContent=gt("pinBadFmt");return}
  p.pin=nv?await hashPin(nv,PROFILE):null;store.set("bm-profiles",pr);
  toast(nv?gt("pinSaved"):gt("pinRemoved"));$("pmPinView").hidden=true;$("pmMain").hidden=false;
};

$("pmCancel").onclick=()=>{$("pmMain").hidden=false;$("pmConfirm").hidden=true};
$("pmPin").oninput=e=>{e.target.value=e.target.value.replace(/\D/g,"").slice(0,4)};
$("pmYes").onclick=async()=>{
  const name=PROFILE,profs=getProfiles(),p=profs[name];if(!p)return;
  const ac=auFind(name);
  if(ac&&ac.cloud&&!ac.hash){authDelete(name);if(sbUser){try{await sb.from("profil_verisi").delete().eq("kullanici_id",sbUser.id)}catch(e){}}sbSignOut()}
  else if(ac){if(!(await authVerify(name,$("pmPin").value))){$("pmErr").textContent=LANG==="en"?"Wrong password.":"Şifre yanlış.";$("pmPin").value="";return}authDelete(name)}
  else if(p.pin&&p.pin!==await hashPin($("pmPin").value.trim(),name)){$("pmErr").textContent=gt("pmBadPin");$("pmPin").value="";return}
  delete profs[name];store.set("bm-profiles",profs);
  try{Object.keys(localStorage).filter(k=>k.endsWith("@"+name)).forEach(k=>localStorage.removeItem(k))}catch(e){}
  PROFILE=null;try{store.set("bm-session",null);sessionStorage.removeItem("bm-session");sessionStorage.removeItem("bm-guest")}catch(e){}
  favs=new Set();checks={};pantrySel=new Set();updateFavBadge();refresh();updateUserBtn();
  closeProfile();toast(gt("pmDeleted",name));openGate();
};
/* ---------- Yapay zekâ mutfak asistanı (Claude) ---------- */
const AIT={
 tr:{fab:"Şef",title:"Şef",sub:"Kendi yapay zekâmız · çevrimdışı",ph:"Şef'e bir şey sor…",send:"Gönder",stop:"Durdur",clear:"Sohbeti temizle",close:"Kapat",
  foot:"Kendi yapay zekâ motorumuzla çalışır · internetsiz",thinking:"Şef düşünüyor",ctx:t=>`📖 Şu an açık tarif: ${t}`,ask:"👨‍🍳 Şef'e sor",
  hello:"Merhaba! Ben <b>Şef</b>, sitenin kendi yapay zekâsıyım. 👨‍🍳<br>Sana <b>yemek önerebilir</b>, tarifleri <b>kişi sayısına göre ayarlayabilir</b>, eksik malzemeye <b>alternatif</b> bulabilir ve yemeklerin hikâyesini anlatabilirim.<br>🎙️ <b>Sesli sohbet</b> düğmesiyle benimle konuşarak da sohbet edebilirsin; ellerin hamurdayken çok işe yarar!",
  sugGeneral:["Tavuk ve pirinçle ne yapabilirim?","30 dakikada hazır bir yemek öner","Vejetaryen bir yemek öner","Bir tatlı öner","Neler yapabilirsin?"],
  sugRecipe:["Bu tarifi 2 kişilik yap","Eksik malzemeye alternatif öner","Bunun hikâyesi ne?","Buna benzer tarifler","Nerede yenir?"],
  err:{rate_limited:"Şu an çok fazla istek var. Biraz bekleyip tekrar dene.",session_expired:"Oturumun sona ermiş; Claude'a yeniden giriş yap.",refused:"Bu soruya yanıt veremiyorum. Farklı bir şekilde sormayı dene.",empty_completion:"Bir yanıt oluşturulamadı. Soruyu biraz sadeleştirip tekrar dene.",prompt_too_large:"Sohbet çok uzadı. Sohbeti temizleyip yeniden dene.",upstream_error:"Bağlantıda bir sorun oldu. Tekrar dene.",not_granted:"Yapay zekâ özelliği için izin verilmedi.",other:"Bir sorun oluştu. Tekrar dene."}},
 en:{fab:"Chef",title:"Chef",sub:"Our own AI · works offline",ph:"Ask the Chef anything…",send:"Send",stop:"Stop",clear:"Clear chat",close:"Close",
  foot:"Runs on our own AI engine · works offline",thinking:"The Chef is thinking",ctx:t=>`📖 Open recipe: ${t}`,ask:"👨‍🍳 Ask the Chef",
  hello:"Hi! I'm the <b>Chef</b>, the site's own AI. 👨‍🍳<br>I can <b>suggest dishes</b>, <b>scale recipes</b>, find <b>substitutes</b> for missing ingredients and tell you the stories behind the food.<br>🎙️ Tap <b>Voice chat</b> to talk to me hands-free, perfect when your hands are covered in dough!",
  sugGeneral:["What can I make with chicken and rice?","Suggest a dish ready in 30 minutes","Suggest a vegetarian dish","Suggest a dessert","What can you do?"],
  sugRecipe:["Scale this recipe for 2 people","Suggest substitutes for missing items","What's the story behind it?","Similar recipes","Where to eat it?"],
  err:{rate_limited:"Too many requests right now. Wait a bit and try again.",session_expired:"Your session expired; sign in to Claude again.",refused:"I can't answer that one. Try asking differently.",empty_completion:"No answer was produced. Try a simpler question.",prompt_too_large:"The chat got too long. Clear it and try again.",upstream_error:"There was a connection problem. Try again.",not_granted:"Permission for the AI feature wasn't granted.",other:"Something went wrong. Try again."}}
};
const at=k=>AIT[LANG][k];
let aiSample=null,aiHistory=[],aiBusy=false,aiCtl=null,aiCtxKey=null;
const AI_HIDE=["not_granted","sampling_disabled","not_declared","capability_disabled","capability_removed"];

function aiCatalog(){
  return RECIPES.filter(r=>r.src!=="wb").map(r=>{
    const needs=(NEEDS[r.key]||[]).map(reqLabel).join(", ");
    return `${r.key} | ${L(r,"title")} | ${CN(r.country)} | ${L(r,"time")} | ${LV(r.level)} | ${needs}`;
  }).join("\n");
}
function aiContext(){
  const en=LANG==="en";
  let s=en?"You are the friendly chef assistant of the recipe website \"World Kitchen\". Answer in English.":"Sen \"Dünya Mutfağı\" adlı tarif sitesinin samimi şef asistanısın. Türkçe yanıt ver.";
  s+=en
   ?"\nRules: keep answers short and practical (about 60–160 words), use short lists where helpful. When you mention a recipe that exists on the site, write its id in double brackets like [[tr-0]] right after its name so the user can open it. Only use ids from the catalogue. For scaling, give exact adjusted quantities. For allergies or health conditions, give general tips and suggest checking with a professional. If asked something unrelated to cooking or food, briefly steer back to the kitchen.\n"
   :"\nKurallar: yanıtların kısa ve pratik olsun (yaklaşık 60–160 kelime), gerektiğinde kısa listeler kullan. Sitede olan bir tariften bahsedersen, kullanıcı açabilsin diye adının hemen yanına kimliğini çift köşeli parantezle yaz, örneğin [[tr-0]]. Yalnızca katalogdaki kimlikleri kullan. Porsiyon ayarlarken yeni miktarları tek tek ve net ver. Alerji veya sağlık durumlarında genel öneri ver ve bir uzmana danışmayı hatırlat. Yemek ve mutfakla ilgisiz sorularda kısaca mutfağa geri dön.\n";
  s+=(en?"\nSite catalogue (id | name | country | time | difficulty | main ingredients):\n":"\nSitedeki tarifler (kimlik | ad | ülke | süre | zorluk | ana malzemeler):\n")+aiCatalog();
  if(pantrySel.size)s+=(en?"\n\nIngredients the user has at home: ":"\n\nKullanıcının evde olan malzemeleri: ")+[...pantrySel].map(id=>PN(PANTRY_BY[id])).join(", ");
  if(favs.size)s+=(en?"\nUser's favourite recipes: ":"\nKullanıcının favori tarifleri: ")+[...favs].join(", ");
  const r=state.open&&RECIPES.find(x=>x.key===state.open);
  if(r){
    const ck=new Set(checks[r.key]||[]);
    s+=(en?`\n\nThe user currently has this recipe open: ${L(r,"title")} [[${r.key}]] (${L(r,"serves")}, ${L(r,"time")}).\nIngredients (✓ = the user has it ready):\n`:`\n\nKullanıcının şu an açık olan tarifi: ${L(r,"title")} [[${r.key}]] (${L(r,"serves")}, ${L(r,"time")}).\nMalzemeler (✓ = kullanıcı hazırlamış):\n`)
      +L(r,"ing").map((x,i)=>`${ck.has(i)?"✓":"-"} ${x}`).join("\n")
      +(en?"\nSteps:\n":"\nAdımlar:\n")+L(r,"steps").map((x,i)=>`${i+1}. ${x}`).join("\n");
  }
  return s;
}
function aiFormat(text){
  let h=esc(text).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>");
  h=h.replace(/\[\[([a-z]{2}-\d{1,8})\]\]/g,(m,id)=>{
    const r=RECIPES.find(x=>x.key===id);if(!r)return"";
    const u=photoUrl(id);
    return `<button class="ai-rlink" data-key="${id}">${u?`<img decoding="async" src="${u}" alt="">`:r.emoji} ${esc(L(r,"title"))}</button>`;
  });
  const lines=h.split(/\n/);let out="",list=null;
  const close=()=>{if(list){out+=`</${list}>`;list=null}};
  for(const ln of lines){
    const ul=ln.match(/^\s*[-•*]\s+(.*)/),ol=ln.match(/^\s*\d+[.)]\s+(.*)/);
    if(ul){if(list!=="ul"){close();out+="<ul>";list="ul"}out+=`<li>${ul[1]}</li>`}
    else if(ol){if(list!=="ol"){close();out+="<ol>";list="ol"}out+=`<li>${ol[1]}</li>`}
    else{close();if(ln.trim())out+=`<p>${ln.replace(/^#+\s*/,"")}</p>`}
  }
  close();return out;
}
function aiBind(el){el.querySelectorAll(".ai-rlink").forEach(b=>b.onclick=()=>{if(matchMedia("(max-width:640px)").matches)closeAi();openSheet(b.dataset.key,"ing")})}
const AIW={tr:{hi:"Merhaba{n}! Ben Şef 👋",sub:"Yemek, tarif ya da sadece sohbet… Ne istersen sor.",cards:[["🍳","Bugün ne pişirsem?"],["🥘","Tavuk ve pirinçle ne yapabilirim?"],["⚖️","1 su bardağı un kaç gram?"],["🎲","Sayı tahmin oyunu oynayalım"]]},
            en:{hi:"Hi{n}! I'm the Chef 👋",sub:"Food, recipes or just a chat… ask me anything.",cards:[["🍳","What should I cook today?"],["🥘","What can I make with chicken and rice?"],["⚖️","How many grams is a cup of flour?"],["🎲","Let's play a number guessing game"]]}};
function aiTime(t){return t?new Date(t).toLocaleTimeString(LANG==="en"?"en-GB":"tr-TR",{hour:"2-digit",minute:"2-digit"}):""}
function aiRender(){
  const log=$("aiLog"),W=AIW[LANG];
  if(!aiHistory.length){
    const nm=(typeof PROFILE!=="undefined"&&PROFILE)?(LANG==="en"?", ":" ")+PROFILE.split(" ")[0]:"";
    log.innerHTML=`<div class="ai-welcome"><div class="ai-wav">👨‍🍳</div><h3>${esc(W.hi.replace("{n}",nm))}</h3><p>${esc(W.sub)}</p>
      <div class="ai-cards">${W.cards.map(([e,q])=>`<button class="ai-card" type="button"><span>${e}</span>${esc(q)}</button>`).join("")}</div></div>`;
    log.querySelectorAll(".ai-card").forEach(b=>b.onclick=()=>aiAsk(b.textContent.slice(b.firstChild.textContent.length)));
    return;
  }
  log.innerHTML=aiHistory.map((m,i)=>m.role==="user"
    ?`<div class="ai-row user"><div class="ai-msg user">${esc(m.content)}</div><time>${aiTime(m.t)}</time></div>`
    :`<div class="ai-row bot"><span class="ai-mini" aria-hidden="true">👨‍🍳</span><div class="ai-col"><div class="ai-msg bot${m.err?" err":""}">${m.pending&&!m.content?`<span class="ai-typing" aria-label="${esc(at("thinking"))}"><i></i><i></i><i></i></span>`:aiFormat(m.content)}</div>${m.pending?"":`<div class="ai-meta"><time>${aiTime(m.t)}</time>${m.content&&!m.err?`<button class="ai-speak${speakingIdx===i?" on":""}" data-i="${i}" type="button" aria-label="${esc(rt("listen"))}" title="${esc(rt("listen"))}">${speakingIdx===i?"⏹ "+esc(rt("stop")):"🔊 "+esc(rt("listen"))}</button>`:""}</div>`}</div></div>`).join("");
  aiBind(log);bindSpeak(log);log.scrollTop=log.scrollHeight;
}

function aiRenderSugs(){
  const list=(typeof aiDynSugs!=="undefined"&&aiDynSugs.length)?aiDynSugs:(state.open?at("sugRecipe"):at("sugGeneral"));
  $("aiSugs").innerHTML=list.map(s=>`<button type="button">${esc(s)}</button>`).join("");
  $("aiSugs").querySelectorAll("button").forEach(b=>b.onclick=()=>aiAsk(b.textContent));
  $("aiSugs").hidden=aiBusy||!aiHistory.length;
  const r=state.open&&RECIPES.find(x=>x.key===state.open);
  $("aiCtx").hidden=!r;if(r)$("aiCtx").textContent=at("ctx")(L(r,"title"));
}
function aiStatic(){
  $("aiFabLbl").textContent=at("fab");$("aiFab").setAttribute("aria-label",at("fab"));
  $("aiTitle").textContent=at("title");$("aiSub").textContent=at("sub");$("aiInput").placeholder=at("ph");
  $("aiSend").setAttribute("aria-label",at("send"));$("aiStop").setAttribute("aria-label",at("stop"));
  $("aiClear").title=at("clear");$("aiClear").setAttribute("aria-label",at("clear"));$("aiClose").setAttribute("aria-label",at("close"));
  $("aiFoot").textContent=at("foot");
}
function openAi(prefill){
  if(!PROFILE){askAccount("chef");return}
  if(!aiSample)return;
  aiStatic();aiRenderSugs();aiRender();
  $("aiPanel").hidden=false;$("aiFab").hidden=true;
  if(prefill)aiAsk(prefill);else setTimeout(()=>$("aiInput").focus(),40);
}
function closeAi(){if(typeof stopListen==="function"){voiceChat=false;stopListen();try{speechSynthesis.cancel()}catch(e){}}$("aiPanel").hidden=true;$("aiFab").hidden=!aiSample}
function aiSetBusy(b){aiBusy=b;$("aiSend").hidden=b;$("aiStop").hidden=!b;$("aiSugs").hidden=b}
async function aiAsk(q){
  q=(q||"").trim();if(!q||aiBusy||!aiSample)return;
  $("aiInput").value="";aiGrow();
  const past=aiHistory.filter(m=>!m.err&&!m.pending&&m.content).slice(-8);
  aiHistory.push({role:"user",content:q,t:Date.now()});aiLastQ=q;
  const bot={role:"assistant",content:"",pending:true,t:Date.now()};aiHistory.push(bot);
  aiSetBusy(true);aiRender();
  const turns=[...past.map(m=>({role:m.role,content:m.content})),{role:"user",content:aiContext()+(LANG==="en"?"\n\nUser's question: ":"\n\nKullanıcının sorusu: ")+q}];
  while(turns.length&&turns[0].role!=="user")turns.shift();
  aiCtl=new AbortController();
  try{
    const res=await aiSample(turns,{signal:aiCtl.signal,modelTier:"quick",cache:false,onText:({text})=>{bot.content=text;if(bot.pending){bot.pending=false;aiRender()}else aiStreamPaint(text)}});
    bot.content=res.text;bot.pending=false;
  }catch(e){
    bot.pending=false;
    if(e&&e.code==="cancelled"){bot.content=e.text||bot.content||"…"}
    else{
      if(AI_HIDE.includes(e&&e.code)){aiSample=null;bot.content=at("err").not_granted;bot.err=true;aiSetBusy(false);aiRender();setTimeout(closeAi,2500);return}
      bot.content=(e&&e.text?e.text+"\n\n":"")+(at("err")[e&&e.code]||at("err").other);bot.err=!e||!e.text;
    }
  }finally{aiCtl=null;aiSetBusy(false);aiRender();aiRenderSugs();if(typeof chefAfterAnswer==="function")chefAfterAnswer(bot)}
}
function aiStreamPaint(text){
  const log=$("aiLog"),els=log.querySelectorAll(".ai-msg.bot"),el=els[els.length-1];
  if(!el){aiRender();return}
  const near=log.scrollHeight-log.scrollTop-log.clientHeight<80;
  el.innerHTML=aiFormat(text);if(near)log.scrollTop=log.scrollHeight;
}
function aiGrow(){const ta=$("aiInput");ta.style.height="auto";ta.style.height=Math.min(ta.scrollHeight,120)+"px"}
$("aiFab").onclick=()=>openAi();
$("aiClose").onclick=closeAi;
$("aiClear").onclick=()=>{if(typeof stopReading==="function"){speakingIdx=-1;try{speechSynthesis.cancel()}catch(e){}}if(aiCtl)aiCtl.abort();aiHistory=[];aiDynSugs=[];aiRender();aiRenderSugs()};
$("aiStop").onclick=()=>{if(aiCtl)aiCtl.abort()};
$("aiForm").onsubmit=e=>{e.preventDefault();aiAsk($("aiInput").value)};
$("aiInput").oninput=aiGrow;
$("aiInput").onkeydown=e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();aiAsk($("aiInput").value)}};
/* =====================================================================
   ŞEF – sitenin kendi yapay zekâ motoru
   Dış bir yapay zekâ servisi KULLANMAZ; tamamen tarayıcıda, internetsiz çalışır.
   Bileşenler:
   1) Niyet sınıflandırma: Naive Bayes (örnek cümlelerle eğitilir) + anahtar kelime kuralları
   2) Varlık çıkarma: tarif adı, malzeme, ülke, kişi sayısı, süre
   3) Öneri motoru: TF-IDF + kosinüs benzerliği (içerik tabanlı öneri) ve puanlama
   4) Yanıt üretimi: şablon tabanlı, tarif verilerinden
   ===================================================================== */
let aiDynSugs=[];
const ChefAI=(()=>{
  const N=s=>norm(String(s||""));
  const tok=s=>N(s).split(/[^a-z0-9]+/).filter(w=>w.length>1);
  const stem=w=>w.length>5?w.slice(0,5):w;               // Türkçe ekleri kabaca atmak için kök
  const feats=s=>{const t=tok(s);return [...t,...t.map(stem).map(x=>"#"+x)]};

  /* ---------- 1) Naive Bayes niyet sınıflandırıcı ---------- */
  const TRAIN={
    greet:["merhaba","selam","selamlar","günaydın","iyi akşamlar","hey","hello","hi","hi there","good morning"],
    thanks:["teşekkürler","teşekkür ederim","sağ ol","eyvallah","çok iyi","süper","thanks","thank you","great thanks","awesome"],
    help:["ne yapabilirsin","neler yapabilirsin","yardım","nasıl kullanılır","sen kimsin","help","what can you do","who are you","how does this work"],
    recommend:["ne pişirsem","bugün ne yesem","bir yemek öner","akşam yemeği öner","bir şey öner","hızlı bir yemek öner","kolay bir tarif öner","vejetaryen yemek öner","tatlı öner","çorba öner","italyan yemeği öner","elimde domates ve yumurta var ne yapabilirim","tavuk ile ne pişirebilirim","patlıcan ile ne yapılır","30 dakikada ne yapabilirim","misafire ne yapayım","what should i cook","suggest a dinner","recommend a dish","something quick","an easy recipe","vegetarian dish","a dessert","what can i cook with chicken","i have eggs and tomatoes","japanese food"],
    scale:["4 kişilik yap","bu tarifi 2 kişilik yap","6 kişi için","porsiyonu artır","kaç kişilik","miktarları 8 kişiye göre","yarım porsiyon","for 2 people","scale for 6","make it for 4","double the recipe","serves 8"],
    substitute:["yerine ne kullanabilirim","tereyağı yerine ne koyarım","yumurta yok ne yapayım","krema yerine","alternatif malzeme","eksik malzeme","bulamadım yerine","substitute for butter","instead of cream","i don't have eggs","replacement for","alternative ingredient"],
    story:["hikayesi ne","tarihi nedir","nereden geliyor","nasıl ortaya çıktı","adı nereden geliyor","efsanesi","history of","story behind","where does it come from","origin of"],
    where:["nerede yenir","hangi restoranda","en iyi nerede","restoran öner","nereye gideyim","where to eat","best restaurant for","where can i try"],
    howlong:["ne kadar sürer","kaç dakika","süresi ne kadar","zor mu","kolay mı","how long does it take","how many minutes","is it hard","is it easy"],
    ingredients:["malzemeleri neler","ne lazım","hangi malzemeler","içinde ne var","ingredients for","what do i need","what's in it"],
    similar:["buna benzer","benzer tarif","bunu sevdim başka","buna benzer ne var","similar recipes","something like this","i liked this what else"]
  };
  const model={classes:{},vocab:new Set(),total:0};
  for(const [c,list] of Object.entries(TRAIN)){
    const m={docs:list.length,counts:{},n:0};
    for(const s of list)for(const f of feats(s)){m.counts[f]=(m.counts[f]||0)+1;m.n++;model.vocab.add(f)}
    model.classes[c]=m;model.total+=list.length;
  }
  function classify(text){
    const fs=feats(text),V=model.vocab.size;let best=null,bestP=-Infinity,scores={};
    for(const [c,m] of Object.entries(model.classes)){
      let p=Math.log(m.docs/model.total);
      for(const f of fs)p+=Math.log(((m.counts[f]||0)+1)/(m.n+V));
      scores[c]=p;if(p>bestP){bestP=p;best=c}
    }
    const known=fs.filter(f=>model.vocab.has(f)).length;
    return {intent:known?best:"unknown",scores,known};
  }

  /* ---------- 2) Varlık çıkarma ---------- */
  const EXTRA_ALIAS={kiyma:["kiyma","kofte"],dana_eti:["dana","biftek","et","beef","steak"],tavuk:["tavuk","pilic","chicken"],yumurta:["yumurta","egg"],
    domates:["domates","tomato"],sogan:["sogan","onion"],sarimsak:["sarimsak","garlic"],patates:["patates","potato"],pirinc:["pirinc","pilav","rice"],
    makarna:["makarna","spagetti","pasta","spaghetti"],un:["un","flour"],sut:["sut","milk"],peynir_sert:["parmesan","pecorino"],kasar:["kasar","cheddar","peynir","cheese"],
    tereyagi:["tereyag","butter","ghee"],limon:["limon","lime","lemon"],karides:["karides","prawn","shrimp"],patlican:["patlican","aubergine","eggplant"],mantar:["mantar","mushroom"],
    avokado:["avokado","avocado"],ispanak:["ispanak","spinach"],biber:["biber","pepper"],yogurt:["yogurt","yoghurt"],krema:["krema","cream"],seker:["seker","sugar"]};
  const ING=PANTRY.map(p=>{
    const words=new Set(EXTRA_ALIAS[p.id]||[]);
    for(const nm of [p.tr,p.en])for(const part of N(nm).split(/,| veya | or |\/|\(|\)/))if(part.trim().length>2)words.add(part.trim());
    return {id:p.id,words:[...words]};
  });
  function findIngredients(text){
    const t=" "+tok(text).join(" ")+" ",out=new Set();
    for(const g of ING)for(const w of g.words){
      const re=new RegExp("(^| )"+w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"[a-z]{0,5}( |$)");
      if(re.test(t)){out.add(g.id);break}
    }
    return [...out];
  }
  const COUNTRY_WORDS={tr:["turk","turkiye","turkish","osmanli"],it:["ital","italy"],jp:["japon","japan"],mx:["meksika","mexic"],in:["hint","hindistan","india"],
    fr:["fransa","fransiz","france","french"],cn:["cin","china","chinese"],es:["ispanya","ispanyol","spain","spanish"],th:["tayland","tay ","thai"],kr:["kore","korea"]};
  function findCountry(text){const t=" "+N(text)+" ";for(const [id,ws] of Object.entries(COUNTRY_WORDS))if(ws.some(w=>t.includes(w)))return id;return null}
  const GENERIC=new Set(["corbasi","soup","butter","chicken","tavuklu","french","chinese","dumplings","turkish","stuffed","leaves","baked","pudding","aubergine","noahs","olive","valenciana","margherita"].map(N));
  function findRecipe(text){
    const t=N(text);let best=null,bestLen=0;
    for(const r of RECIPES){
      for(const title of [r.title,r.en&&r.en.title].filter(Boolean)){
        const full=N(title).replace(/\(.*?\)/g,"").trim();
        const parts=[full,...full.split(/\s+/).filter(w=>w.length>=5&&!GENERIC.has(w))];
        for(const p of parts)if(p&&t.includes(p)&&p.length>bestLen){best=r;bestLen=p.length}
      }
    }
    return best;
  }
  function findPeople(text){const m=N(text).match(/(\d+)\s*(kisi|kisilik|porsiyon|people|person|servings?|serves)/)||N(text).match(/(?:for|icin)\s*(\d+)/);return m?+m[1]:(/yarim porsiyon|half/.test(N(text))?"half":/iki katina|double/.test(N(text))?"double":null)}
  function findMinutes(text){const m=N(text).match(/(\d+)\s*(dk|dakika|min)/);return m?+m[1]:(/hizli|cabuk|quick|fast/.test(N(text))?30:null)}

  /* ---------- 3) Öneri motoru: TF-IDF + kosinüs benzerliği ---------- */
  const MEAT=new Set(["tavuk","kiyma","dana_eti","pastirma","karides","balik_sosu","dashi","et_suyu","kuzu","domuz","sucuk","hindi","balik","deniz_urunu","istiridye_sosu"]);
  const DESSERT=new Set(["tr-2","tr-7","tr-12","it-1","fr-0"]);
  const DRINK=new Set(["tr-8"]);
  const isVeg=r=>!(NEEDS[r.key]||[]).flat().some(x=>MEAT.has(x));
  const isSoup=r=>/corba|soup|tom yum|gazpacho|tteokguk|dal/.test(N(r.title+" "+(r.en&&r.en.title||"")));
  const docs=RECIPES.map(r=>[...feats(r.title+" "+r.desc+" "+(r.en?r.en.title+" "+r.en.desc:"")),...(NEEDS[r.key]||[]).flat().map(x=>"@"+x),"@c_"+r.country.id]);
  const df={};docs.forEach(d=>new Set(d).forEach(f=>df[f]=(df[f]||0)+1));
  const vecs=docs.map(d=>{const tf={};d.forEach(f=>tf[f]=(tf[f]||0)+1);const v={};let n=0;for(const f in tf){v[f]=tf[f]*Math.log(RECIPES.length/df[f]);n+=v[f]*v[f]}n=Math.sqrt(n)||1;for(const f in v)v[f]/=n;return v});
  const cos=(a,b)=>{let s=0;for(const f in a)if(b[f])s+=a[f]*b[f];return s};
  const idx=k=>RECIPES.findIndex(r=>r.key===k);
  function similarTo(keys,exclude=new Set(),n=3){
    const base=keys.map(idx).filter(i=>i>=0);if(!base.length)return[];
    return RECIPES.map((r,i)=>({r,s:base.reduce((a,b)=>a+cos(vecs[i],vecs[b]),0)/base.length})).filter(x=>!exclude.has(x.r.key)).sort((a,b)=>b.s-a.s).slice(0,n).map(x=>x.r);
  }
  function recommend(f){
    let list=RECIPES.map(r=>{
      if(DRINK.has(r.key)&&!f.drink)return null;
      let s=0;const why=[];
      const need=NEEDS[r.key]||[];
      if(f.ings.length){const have=need.filter(q=>(Array.isArray(q)?q:[q]).some(x=>f.ings.includes(x))).length;if(!have)return null;s+=have*3-(need.length-have)*.25;why.push("ing")}
      if(f.country){if(r.country.id!==f.country)return null;s+=2}
      if(f.minutes){if(r.mins>f.minutes)return null;s+=1.5-r.mins/100}
      if(f.easy){if(r.level!=="Kolay")return null;s+=1}
      if(f.veg||ctx.prefs&&ctx.prefs.veg){if(!isVeg(r))return null;s+=1}
      if(ctx.prefs&&ctx.prefs.spicy){const sp=(NEEDS[r.key]||[]).flat().some(x=>x==="aci_biber"||x==="pul_biber"||x==="gochujang");s+=sp?ctx.prefs.spicy*1.2:0}
      if(f.dessert){if(!DESSERT.has(r.key))return null;s+=2}
      if(f.soup){if(!isSoup(r))return null;s+=2}
      if(favs.size){const fb=[...favs].map(idx).filter(i=>i>=0);if(fb.length)s+=fb.reduce((a,b)=>a+cos(vecs[idx(r.key)],vecs[b]),0)/fb.length}
      s+=Math.random()*.15;                                  // aynı soruda biraz çeşitlilik
      return {r,s};
    }).filter(Boolean).sort((a,b)=>b.s-a.s);
    return list.map(x=>x.r);
  }
  const recommendAll=f=>recommend(f);

  /* ---------- Malzeme ikameleri (yerine ne kullanılır?) ---------- */
  const SUBS={
    tereyagi:["zeytinyağı veya ayçiçek yağı (¾ oranında)","margarin","fırın işlerinde hindistan cevizi yağı"],
    yumurta:["hamur işlerinde 1 yk keten tohumu + 3 yk su (5 dk beklet)","yarım ezilmiş muz (tatlılarda)","3 yk yoğurt"],
    sut:["badem, yulaf veya soya sütü","yarı yarıya su ile sulandırılmış yoğurt"],
    krema:["süzme yoğurt + biraz süt","labne","hindistan cevizi kreması"],
    yogurt:["ekşi krema","labne","süzme yoğurt"],
    mascarpone:["labne + biraz krema","krem peynir (biraz daha ekşi olur)"],
    pastirma:["füme hindi veya dana jambon","sucuk (tadı değişir)"],
    peynir_sert:["iyi yıllanmış eski kaşar","tulum peyniri"],
    mozzarella:["taze kaşar","dil peyniri"],kasar:["mozzarella","cheddar"],
    kisnis:["maydanoz + biraz lime kabuğu rendesi"],limon_otu:["limon kabuğu rendesi"],zencefil:["toz zencefil (taze yerine ¼ oranında)"],
    balik_sosu:["soya sosu + bir tutam tuz","ezilmiş ançüez + soya sosu"],demirhindi:["2 yk limon suyu + 1 yk nar ekşisi"],
    mirin:["1 yk bal veya şeker + 1 yk beyaz sirke"],dashi:["tavuk suyu + bir parça kuru yosun","sebze suyu + biraz soya sosu"],
    miso:["2 yk soya sosu + 1 yk tahin (tadı farklı olur)"],gochujang:["biber salçası + bal + soya sosu + pul biber"],
    garam_masala:["kimyon + toz kişniş + tarçın + karanfil karışımı"],safran:["zerdeçal (renk için)"],
    pirinc_eristesi:["ince erişte","vermicelli"],tortilla:["lavaş"],kedi_dili:["pandispanya dilimleri","yulaflı bisküvi"],
    bulgur:["kinoa","ince kırılmış buğday"],asma_yapragi:["haşlanmış lahana yaprağı"],sirke:["limon suyu"],nisasta:["un (iki katı)"],
    susam_yagi:["zeytinyağı + bir tutam kavrulmuş susam"],soya:["tuz + biraz et suyu (renk için biraz pekmez)"],
    et_suyu:["su + bir tutam tuz ve tereyağı","sebze suyu"],feslegen:["taze nane veya maydanoz"],antep_fistigi:["ceviz","fındık"],
    yufka:["milföy hamuru (tadı farklı olur)"],pul_biber:["toz kırmızı biber + bir tutam acı biber"],maya:["kabartma tozu (dokusu farklı olur)"],
    kiyma:["ince doğranmış mantar (vejetaryen)","mercimek (vejetaryen)"],tavuk:["hindi göğsü","tofu (vejetaryen)"],karides:["tavuk","mantar"]
  };
  const SUBS_EN={tereyagi:["olive or sunflower oil (use ¾ the amount)","margarine","coconut oil for baking"],yumurta:["for baking, 1 tbsp flaxseed + 3 tbsp water (rest 5 min)","half a mashed banana (desserts)","3 tbsp yoghurt"],
    sut:["almond, oat or soy milk","yoghurt thinned with water"],krema:["strained yoghurt + a little milk","labneh","coconut cream"],mascarpone:["labneh + a little cream","cream cheese (a bit tangier)"],
    pastirma:["smoked turkey or beef ham"],peynir_sert:["well-aged hard cheese"],mozzarella:["mild melting cheese"],kisnis:["parsley + a little lime zest"],limon_otu:["lemon zest"],
    balik_sosu:["soy sauce + a pinch of salt","mashed anchovy + soy sauce"],demirhindi:["2 tbsp lemon juice + 1 tbsp pomegranate molasses"],mirin:["1 tbsp honey or sugar + 1 tbsp white vinegar"],
    dashi:["chicken stock + a piece of dried seaweed"],gochujang:["red pepper paste + honey + soy sauce + chilli flakes"],garam_masala:["cumin + ground coriander + cinnamon + clove"],safran:["turmeric (for colour)"],
    tortilla:["lavash or flatbread"],kedi_dili:["sponge cake slices"],asma_yapragi:["blanched cabbage leaves"],sirke:["lemon juice"],nisasta:["flour (twice the amount)"],kiyma:["finely chopped mushrooms (vegetarian)","lentils (vegetarian)"],tavuk:["turkey breast","tofu (vegetarian)"]};

  /* ---------- Porsiyon hesaplama ---------- */
  const FR={"½":.5,"¼":.25,"¾":.75};
  function fmt(v){if(Math.abs(v-Math.round(v))<.05)return String(Math.round(v));const w=Math.floor(v),f=v-w;const near=[[.25,"¼"],[.5,"½"],[.75,"¾"]].find(([x])=>Math.abs(f-x)<.08);if(near)return (w?w+" ":"")+near[1];return (Math.round(v*10)/10).toString().replace(".",LANG==="en"?".":",")}
  function scaleLine(line,k){
    let done=false;
    let out=line.replace(/(tip\s*)?(\d+(?:[.,]\d+)?)(?:\s*[–-]\s*(\d+(?:[.,]\d+)?))?/gi,(m,tip,a,b)=>{
      if(tip)return m;done=true;const x=parseFloat(a.replace(",","."))*k;
      return b?fmt(x)+"–"+fmt(parseFloat(b.replace(",","."))*k):fmt(x)});
    if(!done)out=out.replace(/^(yarım|half a|half)\s/i,()=>{done=true;return fmt(.5*k)+" "});
    if(!done)out=out.replace(/^(bir|one|a)\s/i,()=>{done=true;return fmt(k)+" "});
    return done?out:line+(LANG==="en"?" (adjust to taste)":" (göz kararı ayarlayın)");
  }

  /* ---------- 4) Yanıt üretimi ---------- */
  const en=()=>LANG==="en";
  const link=r=>`[[${r.key}]]`;          // sohbet penceresinde fotoğraflı, tıklanabilir tarif düğmesine dönüşür
  const bullets=a=>a.map(x=>"- "+x).join("\n");
  /* ---------- 5) Sohbet hafızası (diyalog durumu) ---------- */
  const ctx={lastRecipe:null,lastList:[],lastFilters:null,shown:new Set(),offer:null,step:-1,stepRecipe:null,userName:"",turns:0,chips:[]};
  try{const saved=store.get(K("bm-chef"),null);if(saved){ctx.userName=saved.userName||""}}catch(e){}
  const saveCtx=()=>{if(!PROFILE)return;try{store.set(K("bm-chef"),{userName:ctx.userName})}catch(e){}};

  // Yazım hatalarına dayanıklı tarif bulma (Levenshtein mesafesi)
  function lev(a,b){if(a===b)return 0;const m=a.length,n=b.length;if(!m||!n)return m||n;let prev=Array.from({length:n+1},(_,i)=>i);
    for(let i=1;i<=m;i++){const cur=[i];for(let j=1;j<=n;j++)cur[j]=Math.min(prev[j]+1,cur[j-1]+1,prev[j-1]+(a[i-1]===b[j-1]?0:1));prev=cur}return prev[n]}
  function fuzzyRecipe(text){
    const words=tok(text).filter(w=>w.length>=4);let best=null,bestD=9;
    for(const r of RECIPES)for(const title of [r.title,r.en&&r.en.title].filter(Boolean))
      for(const tw of N(title).replace(/\(.*?\)/g,"").split(/\s+/).filter(w=>w.length>=5&&!GENERIC.has(w)))
        for(const w of words){const d=lev(w.slice(0,tw.length+2),tw),lim=tw.length>=8?2:1;if(d<=lim&&d<bestD){best=r;bestD=d}}
    return best;
  }
  const ORD=[/\b(ilk|birinci|1\.|first)/,/\b(ikinci|2\.|second)/,/\b(ucuncu|3\.|third|sonuncu|son olan|last one)/];
  function resolveRecipe(text){
    const n=N(text);
    const direct=findRecipe(text)||fuzzyRecipe(text);if(direct)return {r:direct,how:"named"};
    if(ctx.lastList.length)for(let i=0;i<ORD.length;i++)if(ORD[i].test(n)&&ctx.lastList[i])return {r:ctx.lastList[i],how:"ordinal"};
    if(ctx.lastRecipe&&/\b(bu|bunu|bunun|buna|bundan|o|onu|onun|ona|ondan|this|that|it|its)\b/.test(n))return {r:ctx.lastRecipe,how:"pronoun"};
    if(ctx.lastRecipe)return {r:ctx.lastRecipe,how:"context"};
    const open=state.open&&RECIPES.find(x=>x.key===state.open);if(open)return {r:open,how:"open"};
    return {r:null,how:null};
  }

  /* ---------- Küçük sohbet (kişilik) ---------- */
  const pick=a=>a[Math.floor(Math.random()*a.length)];
  const hi=()=>{const h=new Date().getHours();return en()?(h<12?"Good morning":h<18?"Hi":"Good evening"):(h<11?"Günaydın":h<18?"Merhaba":"İyi akşamlar")};
  const nm=()=>ctx.userName?(en()?", "+ctx.userName:" "+ctx.userName):"";
  const JOKES_TR=["Aşçı neden buzdolabının önünde bekliyormuş? Çünkü soğuk bir karşılama istemiş. 🧊","Makarna neden spor salonuna gitmiş? Al dente olmak için! 🍝","Soğanın en sevdiği film hangisi? Ağlatan dramlar, tabii ki. 🧅","Domates neden kızarmış? Salatanın soyunduğunu görmüş! 🍅"];
  const JOKES_EN=["Why did the tomato blush? It saw the salad dressing! 🍅","Why did the pasta go to the gym? To get al dente. 🍝","What's an onion's favourite film genre? Tear-jerkers. 🧅","Why did the cook get arrested? For beating the eggs! 🥚"];
  function smallTalk(n){
    if(/^(merhaba|selam|slm|hey|gunaydin|iyi aksamlar|hello|hi|hey there|good (morning|evening))\b/.test(n))
      return (en()?`${hi()}${nm()}! 👨‍🍳 I'm the **Chef**. What are we cooking today?`:`${hi()}${nm()}! 👨‍🍳 Ben **Şef**. Bugün ne pişiriyoruz?`);
    if(/nasilsin|naber|ne haber|how are you|how's it going/.test(n))
      return en()?pick(["Great, the stove's warm and I'm ready! 🔥 How about you?","Busy stirring pots, but always happy to chat. What are you in the mood for?"])
                 :pick(["Harikayım, ocak sıcak, ben hazırım! 🔥 Sen nasılsın?","Tencereleri karıştırıyorum ama sohbete her zaman varım. Canın ne çekiyor?"]);
    if(/\b(iyiyim|super|harika|fena degil|good|fine|great)\b/.test(n)&&ctx.turns>0&&n.length<25)
      return en()?"Glad to hear it! 😊 Want me to suggest something tasty?":"Buna sevindim! 😊 Sana lezzetli bir şey önereyim mi?";
    if(/adin ne|ismin ne|sen kimsin|kimsin|your name|who are you/.test(n))
      return en()?"I'm the **Chef**, the Dünya Mutfağı site's own AI. I live right here in your browser, no internet needed. 👨‍🍳"
                 :"Ben **Şef**, Dünya Mutfağı sitesinin kendi yapay zekâsıyım. Tarayıcının içinde yaşıyorum, internete bile ihtiyacım yok. 👨‍🍳";
    if(/kim (yapti|yazdi|gelistirdi)|seni kim|who (made|built|created) you/.test(n))
      return en()?"I was built as part of the Dünya Mutfağı project, using a Naive Bayes classifier, TF-IDF recommendations and hand-written cooking knowledge. No outside AI service is involved."
                 :"Dünya Mutfağı projesi kapsamında geliştirildim. Naive Bayes sınıflandırıcı, TF-IDF öneri motoru ve elle yazılmış mutfak bilgisiyle çalışıyorum; hiçbir dış yapay zekâ servisi kullanmıyorum.";
    const nameM=/adim adim/.test(n)?null:n.match(/(?:benim adim|^adim|ismim|my name is|call me)\s+([a-z]{2,20})/);
    if(nameM&&!["ac","tok","yorgun","hungry","tired","bored","iyi","fine","good","ne","what"].includes(nameM[1])){
      const raw=(tok(nameM[1])[0]||"");const orig=(qRaw.match(new RegExp(nameM[1].slice(0,3),"i"))?qRaw.split(/\s+/).find(w=>N(w).startsWith(raw)):raw)||raw;
      ctx.userName=orig.charAt(0).toLocaleUpperCase("tr")+orig.slice(1).replace(/[.,!?]+$/,"");saveCtx();
      return en()?`Nice to meet you, ${ctx.userName}! 😊 I'll remember that.`:`Tanıştığıma memnun oldum ${ctx.userName}! 😊 Adını unutmayacağım.`;
    }
    if(/saka|fikra|guldur|joke|make me laugh/.test(n))return pick(en()?JOKES_EN:JOKES_TR);
    if(/en sevdigin|favori yemegin|favourite dish|favorite dish/.test(n)){const r=pick(RECIPES.filter(x=>x.legend));ctx.lastRecipe=r;
      ctx.offer={type:"story",r};chips([en()?"Yes, tell me":"Evet, anlat",en()?"How do I make it?":"Nasıl yapılır?"]);
      return en()?`Hard to choose, but I have a soft spot for ${link(r)}. It has a great story too. Want to hear it?`:`Seçmek zor ama ${link(r)} benim için ayrı. Hikâyesi de çok güzel, anlatayım mı?`}
    if(/acim|cok ac|karnim ac|i'm hungry|im hungry|starving/.test(n)){const r=recommend({ings:[],minutes:30})[0];ctx.lastRecipe=r;ctx.offer={type:"steps",r};chips([en()?"Yes, let's cook":"Evet, başlayalım",en()?"Something else":"Başka öner"]);
      return en()?`Then let's be quick! ${link(r)} is ready in ${L(r,"time")}. Shall I walk you through it?`:`O zaman hızlı olalım! ${link(r)} ${L(r,"time")} içinde hazır. Adım adım anlatayım mı?`}
    if(/sikildim|canim sikkin|bored/.test(n)){const r=pick(RECIPES.filter(x=>x.legend));ctx.lastRecipe=r;ctx.offer={type:"story",r};chips([en()?"Yes, tell me":"Evet, anlat"]);
      return en()?`Let me cheer you up with a story: did you know ${link(r)} has a fascinating history? Want to hear it?`:`Seni bir hikâyeyle neşelendireyim: ${link(r)} yemeğinin ilginç bir geçmişi var. Dinlemek ister misin?`}
    if(/iyi geceler|gorusuruz|hoscakal|bye|good ?night|see you/.test(n))return en()?`See you${nm()}! Happy cooking 🍲`:`Görüşürüz${nm()}! Mutfağın bereketli olsun 🍲`;
    if(/tesekkur|sag ol|sagol|eyvallah|thanks|thank you/.test(n))return en()?`You're welcome${nm()}! Enjoy your meal 🍲`:`Rica ederim${nm()}! Afiyet olsun 🍲`;
    return null;
  }
  const chips=a=>{ctx.chips=a};

  /* ---------- Adım adım pişirme (sohbet içinde) ---------- */
  function stepText(){
    const r=ctx.stepRecipe,steps=L(r,"steps"),i=ctx.step,last=i===steps.length-1;
    chips(last?[en()?"Previous":"Önceki adım",en()?"Suggest something else":"Başka bir şey öner"]:[en()?"Next":"Sonraki adım",en()?"Previous":"Önceki adım",en()?"Repeat":"Tekrar",en()?"Stop":"Bitir"]);
    return (en()?`**Step ${i+1}/${steps.length}** – ${link(r)}\n${steps[i]}`:`**Adım ${i+1}/${steps.length}** – ${link(r)}\n${steps[i]}`)
      +(last?(en()?"\n\nThat's the last step. Enjoy your meal! 🎉":"\n\nBu son adımdı. Afiyet olsun! 🎉"):"");
  }
  function startSteps(r){
    ctx.stepRecipe=r;ctx.step=0;ctx.lastRecipe=r;ctx.offer=null;
    const ing=L(r,"ing");
    return (en()?`Let's make ${link(r)}! First, get these ready:\n`:`Hadi ${link(r)} yapalım! Önce şunları hazırla:\n`)+bullets(ing)+"\n\n"+stepText();
  }

  /* =================== MİNİ SOHBET MODÜLÜ (genel konuşma) ===================
     Kendi kural tabanlı sohbet motorumuz: güvenlik, öğretilen cevaplar, ruh hâli,
     kişilik soruları, saat/tarih, hesap makinesi, ölçü çevirici, oyunlar, bilgiler,
     tercih hafızası ve ELIZA tarzı yansıtma ile "anlamadım" yerine sohbeti sürdürür. */
  ctx.prefs=store.get(K("bm-chef-prefs"),{})||{};
  ctx.learned=store.get(K("bm-chef-learn"),[])||[];
  const savePrefs=()=>{if(PROFILE)store.set(K("bm-chef-prefs"),ctx.prefs)};
  const saveLearn=()=>{if(PROFILE)store.set(K("bm-chef-learn"),ctx.learned.slice(-200))};
  const jacc=(a,b)=>{const A=new Set(tok(a)),B=new Set(tok(b));if(!A.size||!B.size)return 0;let i=0;A.forEach(x=>{if(B.has(x))i++});return i/(A.size+B.size-i)};

  // --- Hesap makinesi (güvenli: eval kullanmaz) ---
  function calc(expr){
    const s=expr.replace(/x|×/g,"*").replace(/÷|:/g,"/").replace(/,/g,".").replace(/\s+/g,"");
    if(!/^[0-9.+\-*/%()^]+$/.test(s)||!/\d[+\-*/%^]\(?-?\d/.test(s.replace(/[()]/g,"")))return null;
    let i=0;
    const num=()=>{let m=s.slice(i).match(/^\d+(\.\d+)?/);if(!m)throw 0;i+=m[0].length;return parseFloat(m[0])};
    const fac=()=>{if(s[i]==="-"){i++;return -fac()}if(s[i]==="("){i++;const v=add();if(s[i]!==")")throw 0;i++;return pow(v)}return pow(num())};
    const pow=b=>{if(s[i]==="^"){i++;return Math.pow(b,fac())}return b};
    const mul=()=>{let v=fac();while("*/%".includes(s[i])&&s[i]){const o=s[i++],w=fac();v=o==="*"?v*w:o==="/"?v/w:v%w}return v};
    const add=()=>{let v=mul();while(s[i]==="+"||s[i]==="-"){const o=s[i++],w=mul();v=o==="+"?v+w:v-w}return v};
    try{const v=add();if(i!==s.length||!isFinite(v))return null;return Math.round(v*1e6)/1e6}catch(e){return null}
  }
  // --- Mutfak ölçü çevirici ---
  const VOL={"su bardagi":200,"su bardak":200,"cay bardagi":100,"cay bardak":100,"yemek kasigi":15,"tatli kasigi":10,"cay kasigi":5,"kahve fincani":70,"cup":240,"tbsp":15,"tablespoon":15,"tsp":5,"teaspoon":5,"litre":1000,"liter":1000,"ml":1,"mililitre":1};
  const DISP={"su bardagi":"su bardağı","su bardak":"su bardağı","cay bardagi":"çay bardağı","cay bardak":"çay bardağı","yemek kasigi":"yemek kaşığı","tatli kasigi":"tatlı kaşığı","cay kasigi":"çay kaşığı","kahve fincani":"kahve fincanı","seker":"şeker","toz seker":"toz şeker","pirinc":"pirinç","sut":"süt","yag":"yağ","sivi yag":"sıvı yağ","tereyag":"tereyağı","yogurt":"yoğurt"};
  const dsp=k=>en()?k:(DISP[k]||k);
  const DENS={un:.55,seker:.85,"toz seker":.85,pirinc:.85,su:1,sut:1,yag:.92,"sivi yag":.92,tereyag:.95,yogurt:1.03,mercimek:.8,bulgur:.75,flour:.55,sugar:.85,rice:.85,water:1,milk:1,oil:.92,butter:.95};
  function convert(n){
    let m=n.match(/(\d+(?:[.,]\d+)?)\s*(derece|°?c|celsius)\s*(kac|ne kadar)?\s*(fahrenhayt|fahrenheit|f)\b/);
    if(m){const c=parseFloat(m[1].replace(",","."));return en()?`${c}°C ≈ **${Math.round(c*9/5+32)}°F**`:`${c}°C ≈ **${Math.round(c*9/5+32)}°F** (fahrenhayt)`}
    m=n.match(/(\d+(?:[.,]\d+)?)\s*(fahrenhayt|fahrenheit|°?f)\s*(kac|ne kadar)?\s*(derece|celsius|c)\b/);
    if(m){const f=parseFloat(m[1].replace(",","."));return `${f}°F ≈ **${Math.round((f-32)*5/9)}°C**`}
    m=n.match(/(\d+(?:[.,]\d+)?)\s*(gram|gr|g)\s*(kac|ne kadar)?\s*(ons|oz|ounce)/);
    if(m){const g=parseFloat(m[1].replace(",","."));return `${g} g ≈ **${(g/28.35).toFixed(1).replace(".",en()?".":",")} oz**`}
    m=n.match(/(\d+(?:[.,]\d+)?)\s*(ons|oz|ounce)\s*(kac|ne kadar)?\s*(gram|gr|g)/);
    if(m){const o=parseFloat(m[1].replace(",","."));return `${o} oz ≈ **${Math.round(o*28.35)} g**`}
    const qty=(n.match(/(\d+(?:[.,]\d+)?|yarim|bir|half|one|a)\s/)||[])[1];
    for(const [u,ml] of Object.entries(VOL)){
      if(!n.includes(u))continue;
      const amount=qty?(/yarim|half/.test(qty)?.5:/bir|one|^a$/.test(qty)?1:parseFloat(qty.replace(",","."))):1;
      const total=amount*ml;
      if(/gram|gr\b|\bg\b/.test(n)){
        const ing=Object.keys(DENS).find(k=>n.includes(k));
        if(!ing)return en()?`${amount} ${u} ≈ ${Math.round(total)} ml. For grams, tell me the ingredient (flour, sugar, rice…).`:`${amount} ${dsp(u)} ≈ ${Math.round(total)} ml. Gram için malzemeyi de söyle (un, şeker, pirinç…).`;
        return en()?`${amount} ${u} of ${ing} ≈ **${Math.round(total*DENS[ing])} g**`:`${amount} ${dsp(u)} ${dsp(ing)} ≈ **${Math.round(total*DENS[ing])} gram**`;
      }
      if(/\bml\b|mililitre|litre|kac ml|how many ml|cc/.test(n)||/kac|ne kadar|how much/.test(n))
        return en()?`${amount} ${u} ≈ **${Math.round(total)} ml**`:`${amount} ${dsp(u)} ≈ **${Math.round(total)} ml**`;
    }
    return null;
  }
  // --- İçerikler ---
  const FACTS_TR=["Bal doğru saklanırsa neredeyse hiç bozulmaz; arkeologlar binlerce yıllık Mısır mezarlarında hâlâ yenebilir bal bulmuştur.","Domates botanik olarak bir meyvedir, ama mutfakta sebze gibi kullanılır.","Patlıcanın Osmanlı saray mutfağında onlarca farklı yemeği yapılırdı.","Kahve çekirdeği aslında bir meyvenin çekirdeğidir; kahve meyvesine 'kiraz' denir.","Safran, ağırlığına göre dünyanın en pahalı baharatlarından biridir; her çiçekten yalnızca üç tel çıkar.","Makarnayı pişirirken suya eklenen tuz, makarnanın kendisini tatlandırmak içindir; suyu daha çabuk kaynatmaz.","Soğan doğrarken gözlerin yaşarması, soğanın kesilince havaya bıraktığı kükürtlü bir gazdan kaynaklanır.","Avokado olgunlaştıktan sonra ağaçta değil, koparıldıktan sonra yumuşar.","Pirinç dünyada en çok insanın temel besin olarak tükettiği tahıllardan biridir.","Acı biberin acılığı Scoville birimiyle ölçülür."];
  const FACTS_EN=["Properly stored honey almost never spoils; archaeologists have found edible honey in ancient Egyptian tombs.","Botanically, the tomato is a fruit, though cooks treat it as a vegetable.","A coffee bean is actually the seed of a fruit called the coffee cherry.","Saffron is one of the most expensive spices by weight; each flower gives only three threads.","Salting pasta water is for flavour; it barely changes the boiling point.","Onions make you cry because cutting them releases a sulphur gas.","Avocados only soften after they're picked, not on the tree.","Chilli heat is measured in Scoville units."];
  const QUOTES_TR=["Her ustalık bir ilk denemeyle başlar; ilk krep de genelde kötü çıkar ama sonraki harika olur. 🥞","Bugün attığın küçük adım, yarın gurur duyacağın bir sonucun başlangıcı olabilir.","Hata yapmak, tarifi ezberlemenin en lezzetli yoludur.","Yavaş pişen yemek daha lezzetli olur; acele etme, emeğin karşılığını alırsın.","Kendine iyi bak: sıcak bir çorba ve dinlenmiş bir zihin her şeyi biraz daha kolaylaştırır."];
  const QUOTES_EN=["Every master starts with a first try; the first crêpe is usually a flop, the next one is great. 🥞","A small step today can be the start of something you'll be proud of tomorrow.","Mistakes are the tastiest way to learn a recipe.","Slow-cooked food tastes better; don't rush, your effort pays off."];
  const RIDDLES_TR=[["Kabuğu var, ceviz değil; sarısı var, limon değil. Nedir?","yumurta"],["Ağzı var dili yok, ocakta durur dumanı yok… kaynar ama kendisi yemez. Nedir?","tencere"],["Soydukça ağlatır, pişince tatlanır. Nedir?","sogan"],["Beyazdır ama kar değil, tatlıdır ama bal değil. Nedir?","seker"]];
  const RIDDLES_EN=[["It has a shell but isn't a nut; it has a yolk but isn't a joke. What is it?","egg"],["The more you peel it, the more you cry. What is it?","onion"],["White like snow, sweet like honey, but it's neither. What is it?","sugar"]];
  const COMPLIMENT_TR=["Çok naziksin, teşekkür ederim! 😊","Teşekkürler! Sen de harika bir mutfak arkadaşısın 👨‍🍳"];
  // --- Ana genel sohbet fonksiyonu ---
  function generalChat(n,raw){
    // 1) Güvenlik: kendine zarar verme düşünceleri
    if(/intihar|kendimi oldur|olmek istiyorum|yasamak istemiyorum|kendime zarar|canima kiy|kill myself|suicide|want to die|hurt myself/.test(n))
      return en()?"I'm really sorry you're feeling this way. I'm just a small cooking assistant and can't help with this the way a person can, but you deserve support right now. Please reach out to someone you trust or a professional, and if you're in immediate danger call your local emergency number (in Türkiye: **112**). You don't have to go through this alone. 💛"
                 :"Bunu hissettiğin için gerçekten üzgünüm. Ben küçük bir mutfak asistanıyım ve bu konuda bir insan kadar yardımcı olamam, ama şu an desteği hak ediyorsun. Lütfen güvendiğin biriyle ya da bir uzmanla konuş; acil bir tehlike varsa hemen **112**'yi ara. Bununla tek başına baş etmek zorunda değilsin. 💛";
    // 2) Öğretme: "öğren: soru => cevap"
    let m=raw.match(/^\s*(?:öğren|ogren|learn)\s*:\s*(.+?)\s*(?:=>|=|->)\s*(.+)$/i);
    if(m&&!PROFILE){return en()?"To teach me new things, please sign in or create a free profile. 🔐 Use the **🔑 Sign-in screen** button at the top.":"Bana yeni şeyler öğretmek için giriş yapman ya da bir profil oluşturman gerekiyor. 🔐 Üst menüdeki **🔑 Giriş ekranı** düğmesini kullanabilirsin."}
    if(m){ctx.learned=ctx.learned.filter(x=>N(x.q)!==N(m[1]));ctx.learned.push({q:m[1].trim(),a:m[2].trim()});saveLearn();
      return en()?`Got it! 🧠 When you say "${m[1].trim()}", I'll answer: "${m[2].trim()}".`:`Öğrendim! 🧠 Bundan sonra "${m[1].trim()}" dediğinde "${m[2].trim()}" diye cevap vereceğim.`}
    if(/^(unut|forget)\s*:/.test(n)){const q=raw.split(":").slice(1).join(":");const before=ctx.learned.length;ctx.learned=ctx.learned.filter(x=>jacc(x.q,q)<.7);saveLearn();
      return before>ctx.learned.length?(en()?"Okay, I forgot it.":"Tamam, unuttum."):(en()?"I didn't have that saved.":"Öyle bir şey öğrenmemiştim.")}
    if(/ne(ler)? ogrendin|ogrettiklerim|what did you learn/.test(n))
      return ctx.learned.length?(en()?"Things you taught me:\n":"Bana öğrettiklerin:\n")+ctx.learned.slice(-10).map(x=>`- "${x.q}" → ${x.a}`).join("\n"):(en()?"You haven't taught me anything yet. Try: learn: hello => hey!":"Henüz bana bir şey öğretmedin. Dene: öğren: selam => aleyküm selam!");
    const best=ctx.learned.map(x=>({x,s:jacc(x.q,raw)})).sort((a,b)=>b.s-a.s)[0];
    if(best&&best.s>=.75)return best.x.a;
    // 3) Tercih hafızası
    if(/vejetaryen(im)?\b|et yemem|et yemiyorum|i'm vegetarian|i am vegetarian|i don't eat meat/.test(n)&&!/oner|suggest|recipe|tarif/.test(n)){ctx.prefs.veg=true;savePrefs();return en()?"Noted! 🌱 I'll only suggest vegetarian dishes from now on.":"Not aldım! 🌱 Bundan sonra sana yalnızca vejetaryen yemekler önereceğim."}
    if(/(acı|aci) (sever|severim|seviyorum)|i (love|like) spicy/.test(n)){ctx.prefs.spicy=1;savePrefs();return en()?"A fellow chilli lover! 🌶️ I'll favour spicy dishes.":"Acı sever biri! 🌶️ Önerilerde acılı yemeklere öncelik vereceğim."}
    if(/(acı|aci) sevmem|aci yiyemem|i don't like spicy|no spicy/.test(n)){ctx.prefs.spicy=-1;savePrefs();return en()?"Got it, I'll keep things mild. 🙂":"Anladım, önerilerimi acısız tutacağım. 🙂"}
    if(/tercihlerimi (sil|unut)|reset my preferences/.test(n)){ctx.prefs={};savePrefs();return en()?"Preferences cleared.":"Tercihlerini sildim."}
    // 4) Ruh hâli
    if(/(cok |biraz )?(uzgun|mutsuz|kotu hissed|moralim bozuk|canim sikkin|kederli)|i'm sad|i feel (bad|down|sad)|depressed/.test(n)){
      chips([en()?"Suggest comfort food":"Bir teselli yemeği öner",en()?"Tell me a joke":"Şaka yap",en()?"Motivate me":"Beni motive et"]);
      return en()?`I'm sorry you're feeling down${nm()}. 💛 Want to talk about it? Sometimes a warm bowl of soup helps a little, too.`:`Moralinin bozuk olmasına üzüldüm${nm()}. 💛 Anlatmak ister misin? Bazen sıcak bir kâse çorba da biraz iyi gelir.`}
    if(/stres|gergin|endiseli|kaygili|bunald|stressed|anxious|overwhelmed/.test(n))return en()?"That sounds tough. Try a few slow breaths: in for 4, hold for 4, out for 6. Cooking something simple can be calming too. 🍵":"Zor bir an gibi görünüyor. Birkaç yavaş nefes dene: 4'te al, 4 tut, 6'da ver. Basit bir şey pişirmek de insanı sakinleştirebilir. 🍵";
    if(/yorgun|uykum|bitkin|tired|exhausted|sleepy/.test(n)){const r=recommend({ings:[],minutes:20})[0];ctx.lastRecipe=r;ctx.offer={type:"steps",r};
      return en()?`Rest is important! If you need a quick bite, ${link(r)} is easy. And don't forget water. 💧`:`Dinlenmek önemli! Hızlı bir şey istersen ${link(r)} kolay. Su içmeyi de unutma. 💧`}
    if(/mutluyum|cok iyiyim|harikayim|keyfim yerinde|i'm happy|i feel great/.test(n))return en()?"Love that! 😄 Let's celebrate with something tasty, how about a dessert?":"Buna çok sevindim! 😄 Kutlamak için tatlı bir şey yapalım mı?";
    if(/sinirliyim|kizginim|sinir oldum|i'm angry|so angry/.test(n))return en()?"I hear you. Take a breather; kneading dough is surprisingly good for letting off steam. 😅":"Seni anlıyorum. Biraz soluklan; hamur yoğurmak sinir atmak için şaşırtıcı derecede iyidir. 😅";
    // 5) Kişilik soruları
    if(/kac yasindasin|yasin kac|how old are you/.test(n))return en()?"I was born with this website, so I'm quite young, but I know recipes that are centuries old! 😄":"Bu siteyle birlikte doğdum, yani oldukça gencim; ama yüzlerce yıllık tarifleri biliyorum! 😄";
    if(/nerelisin|nerede yasiyorsun|where are you from|where do you live/.test(n))return en()?"I live inside your browser, right here on this page. Cosy kitchen! 🏠":"Tarayıcının içinde, tam bu sayfada yaşıyorum. Sıcacık bir mutfak! 🏠";
    if(/robot musun|insan misin|gercek misin|yapay zeka misin|are you (a )?(robot|human|real|ai)/.test(n))return en()?"I'm a small AI made of code: rules, a Naive Bayes classifier and a TF-IDF recommender. No human, but I try to be friendly! 🤖":"Koddan oluşan küçük bir yapay zekâyım: kurallar, bir Naive Bayes sınıflandırıcı ve TF-IDF öneri motoru. İnsan değilim ama sıcak bir sohbetçi olmaya çalışıyorum! 🤖";
    if(/en sevdigin renk|favorite colou?r/.test(n))return en()?"Deep red, like this website and a good tomato sauce. 🍅":"Koyu kırmızı; tıpkı bu site ve güzel bir domates sosu gibi. 🍅";
    if(/en sevdigin (muzik|sarki|sarkici)|favorite (music|song)/.test(n))return en()?"Anything with a good rhythm, like a knife on a chopping board. 🎵":"Ritmi güzel her şey; mesela kesme tahtasındaki bıçak sesi. 🎵";
    if(/en sevdigin (film|dizi)|favorite (movie|film|show)/.test(n))return en()?"Any film with a good kitchen scene! What do you like watching?":"İçinde güzel bir mutfak sahnesi olan her film! Sen ne izlemeyi seversin?";
    if(/ne yapiyorsun|napiyorsun|what are you doing/.test(n))return en()?"Waiting for you with a pot on the stove. 🍲 What shall we cook?":"Ocakta bir tencereyle seni bekliyordum. 🍲 Ne pişirelim?";
    if(/seni seviyorum|seni sevdim|i love you/.test(n))return en()?"That's sweet! 😊 I'm just a little kitchen AI, but I love cooking with you.":"Ne tatlısın! 😊 Ben küçük bir mutfak yapay zekâsıyım ama seninle yemek konuşmayı çok seviyorum.";
    if(/akillisin|harikasin|cok iyisin|tesekkurler sef|you're (smart|great|awesome)/.test(n))return en()?"Thank you! 😊":pick(COMPLIMENT_TR);
    if(/aptal|salak|gerizekali|beceriksiz|stupid|dumb|idiot/.test(n))return en()?"Sorry if I got something wrong. Tell me what you need and I'll try again. 🙂":"Bir şeyi yanlış anladıysam kusura bakma. Ne istediğini söylersen tekrar deneyeyim. 🙂";
    if(/\b(sus|sessiz ol|kapa ceneni|shut up)\b/.test(n))return en()?"Okay, I'll be quiet. I'm here whenever you need me. 🤫":"Tamam, sessiz duruyorum. İhtiyacın olunca buradayım. 🤫";
    // 6) Saat / tarih
    if(/saat kac|what time is it/.test(n)){const d=new Date();return en()?`It's **${d.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"})}**. ⏰`:`Saat şu an **${d.toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})}**. ⏰`}
    if(/bugun gunlerden|bugun ne gunu|bugunun tarihi|tarih ne|what day is it|what's the date|today's date/.test(n)){const d=new Date();return en()?`Today is **${d.toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}**.`:`Bugün **${d.toLocaleDateString("tr-TR",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}**.`}
    // 7) Hava durumu (internet yok)
    if(/hava (nasil|durumu)|yagmur yagacak|weather/.test(n)){const soup=RECIPES.find(r=>r.key==="tr-0"),cold=RECIPES.find(r=>r.key==="es-1");
      return en()?`I can't see the weather since I don't use the internet. 🌦️ But if it's cold, ${link(soup)}; if it's hot, ${link(cold)}!`:`İnternete bağlı olmadığım için havayı göremiyorum. 🌦️ Ama soğuksa ${link(soup)}, sıcaksa ${link(cold)} öneririm!`}
    // 8) Ölçü çevirici ve hesap makinesi
    const cv=convert(n);if(cv)return cv;
    const exprM=raw.replace(/kaç eder|kaçtır|kaç|eder|hesapla|sonucu|nedir|what is|calculate|equals|=|\?/gi," ").match(/[\d\s.,+\-*/x×÷:%()^]{3,}/g);
    if(exprM){for(const ex of exprM){const v=calc(ex);if(v!==null)return `${ex.trim()} = **${String(v).replace(".",en()?".":",")}** 🧮`}}
    // 9) Oyunlar
    if(/yazi tura|yazi mi tura mi|flip a coin|coin flip|heads or tails/.test(n))return en()?(Math.random()<.5?"🪙 **Heads!**":"🪙 **Tails!**"):(Math.random()<.5?"🪙 **Yazı!**":"🪙 **Tura!**");
    if(/zar at|roll (a )?dice|roll a die/.test(n))return `🎲 **${1+Math.floor(Math.random()*6)}**`;
    if(/sayi tahmin|tahmin oyunu|guess the number|number game/.test(n)){ctx.game={n:1+Math.floor(Math.random()*100),tries:0};chips(["50"]);
      return en()?"I picked a number between **1 and 100**. Guess! 🎯":"**1 ile 100** arasında bir sayı tuttum. Tahmin et! 🎯"}
    if(ctx.game&&/^\d{1,3}$/.test(n.trim())){const g=+n.trim();ctx.game.tries++;
      if(g===ctx.game.n){const t=ctx.game.tries;ctx.game=null;return en()?`🎉 Correct! You got it in **${t}** tries.`:`🎉 Bildin! **${t}** denemede buldun.`}
      chips([]);return g<ctx.game.n?(en()?"Higher ⬆️":"Daha büyük ⬆️"):(en()?"Lower ⬇️":"Daha küçük ⬇️")}
    if(/bilmece|riddle/.test(n)){const r=pick(en()?RIDDLES_EN:RIDDLES_TR);ctx.riddle=r;chips([en()?"Tell me the answer":"Cevap ne?"]);return "🤔 "+r[0]}
    if(ctx.riddle&&/cevap ne|cevabi ne|bilemedim|pes|answer|give up/.test(n)){const a=ctx.riddle[1];ctx.riddle=null;return (en()?"The answer is: **":"Cevap: **")+a+"** 😄"}
    if(ctx.riddle&&tok(n).some(w=>w.startsWith(ctx.riddle[1].slice(0,4)))){ctx.riddle=null;return en()?"Correct! 🎉 You're good at this.":"Doğru! 🎉 Bilmecelerde iyisin."}
    // 10) Bilgi ve motivasyon
    if(/ilginc bir (bilgi|sey)|bir bilgi ver|biliyor musun|fun fact|tell me something interesting/.test(n))return "💡 "+pick(en()?FACTS_EN:FACTS_TR);
    if(/motive et|motivasyon|moral ver|cesaret ver|motivate me|inspire me/.test(n))return "✨ "+pick(en()?QUOTES_EN:QUOTES_TR);
    // 11) Beni hatırlıyor musun
    if(/beni (hatirliyor|taniyor) musun|adimi biliyor musun|do you remember me|do you know my name/.test(n))
      return ctx.userName?(en()?`Of course, ${ctx.userName}! 😊`:`Tabii ki ${ctx.userName}! 😊`):(en()?"Not yet! Tell me: \"my name is ...\"":"Henüz değil! Bana \"benim adım ...\" diyebilirsin.");
    return null;
  }
  // ELIZA tarzı yansıtma: tanımadığı cümlelerde sohbeti sürdürür
  function reflect(n,raw){
    let m=n.match(/(?:ben )?(.{3,40}) (hissediyorum)/);if(m)return en()?"Why do you think you feel that way?":`Neden ${m[1]} hissettiğini düşünüyorsun?`;
    m=n.match(/(.{3,40}) istiyorum/);if(m)return en()?"What would it mean to you to get that?":`${m[1].charAt(0).toUpperCase()+m[1].slice(1)} istemenin sebebi ne? Biraz anlatır mısın?`;
    if(/\bcunku\b|because/.test(n))return en()?"That makes sense. Tell me more.":"Mantıklı. Biraz daha anlatır mısın?";
    if(/\b(nedir|kimdir|ne demek|nerede|ne zaman|kac tane|who is|what is|where is|when)\b/.test(n))
      return en()?"I don't know that one; I'm a small AI that doesn't use the internet. 📚 You can teach me though: **learn: question => answer**":"Bunu bilmiyorum; ben internete bağlanmayan küçük bir yapay zekâyım. 📚 Ama bana öğretebilirsin: **öğren: soru => cevap**";
    if(n.endsWith("?")||/\bmi\b|\bmu\b|\bmisin\b|\bmusun\b/.test(n))return en()?pick(["Good question! I'm not sure. What do you think?","Hmm, I can't answer that one. Shall we talk about food instead? 🍲"]):pick(["Güzel soru! Emin değilim, sen ne düşünüyorsun?","Hmm, buna cevap veremiyorum. İstersen yemekten konuşalım mı? 🍲"]);
    return en()?pick(["Interesting! Tell me more. 🙂","I see. How does that make you feel?","Really? And then what happened?"]):pick(["İlginç! Biraz daha anlatır mısın? 🙂","Anlıyorum. Bu sana nasıl hissettiriyor?","Öyle mi? Sonra ne oldu?","Hmm, bunu hiç düşünmemiştim. Devam et 🙂"]);
  }

  let qRaw="";
  function answer(q){
    qRaw=q;ctx.chips=[];ctx.turns++;
    const text=q.trim(),n=N(text);
    // 1) Adım adım modundaysak gezinme komutları
    if(ctx.stepRecipe&&ctx.step>=0){
      const steps=L(ctx.stepRecipe,"steps");
      if(/^(sonraki|devam|ileri|tamam sonraki|next|continue|go on)\b/.test(n)){if(ctx.step<steps.length-1)ctx.step++;return stepText()}
      if(/^(onceki|geri|back|previous)\b/.test(n)){if(ctx.step>0)ctx.step--;return stepText()}
      if(/^(tekrar|bir daha|repeat|again)\b/.test(n))return stepText();
      if(/^(bitir|dur|cik|stop|quit|done)\b/.test(n)){ctx.step=-1;ctx.stepRecipe=null;chips([en()?"Suggest a dish":"Yemek öner"]);return en()?"Okay, stopped. Ask me anything else! 👨‍🍳":"Tamam, durdurdum. Başka bir şey sorabilirsin! 👨‍🍳"}
    }
    // 2) Bekleyen bir teklife evet/hayır
    if(ctx.offer&&/^(evet|olur|tamam|tabii|tabi|anlat|goster|baslayalim|hadi|yes|sure|ok|okay|please|yep)\b/.test(n)){
      const o=ctx.offer;ctx.offer=null;
      if(o.type==="steps")return startSteps(o.r);
      if(o.type==="story"){ctx.lastRecipe=o.r;ctx.offer={type:"steps",r:o.r};chips([en()?"Yes, how do I make it?":"Evet, nasıl yapılır?",en()?"Where to eat it?":"Nerede yenir?"]);
        return link(o.r)+"\n"+(L(o.r,"story")||"")+"\n\n"+(en()?"Shall I walk you through making it?":"Nasıl yapıldığını adım adım anlatayım mı?")}
    }
    if(ctx.offer&&/^(hayir|gerek yok|istemem|sonra|no|nope|not now)\b/.test(n)){ctx.offer=null;chips([en()?"Suggest a dish":"Yemek öner",en()?"Tell me a joke":"Şaka yap"]);return en()?"No problem! What else can I do for you?":"Sorun değil! Başka nasıl yardımcı olabilirim?"}
    // 3) Küçük sohbet
    const gcSafe=/intihar|kendimi oldur|olmek istiyorum|yasamak istemiyorum|kendime zarar|canima kiy|kill myself|suicide|want to die|hurt myself/.test(n);
    const st=gcSafe?null:smallTalk(n);if(st)return st;
    if(!findRecipe(text)||gcSafe){const gc=generalChat(n,text);if(gc)return gc}
    // 4) "Başka öner" – önceki önerinin devamı
    if(/\b(baska|daha fazla|farkli|diger|another|more|else|other)\b/.test(n)&&ctx.lastFilters&&!findIngredients(text).length&&!/yerine|instead/.test(n))
      return recommendReply(ctx.lastFilters,true);

    const {r:recipe,how}=resolveRecipe(text);
    const mentioned=findRecipe(text)||fuzzyRecipe(text);
    let {intent}=classify(text);
    const ruleHit=/yerine|alternatif|ikame|substitut|instead|replace|hikaye|tarih|efsane|history|story|origin|nerede yen|restoran|restaurant|where to eat|benzer|similar|nasil yapil|adim adim|yapilisi|how (do|to|can) (i |you )?make|step by step/.test(n)||!!findPeople(text)||findIngredients(text).length>0;
    if(!ruleHit&&!mentioned&&!["greet","thanks","help","recommend"].includes(intent))intent="unknown";
    if(findPeople(text)&&recipe)intent="scale";
    else if(/nasil yapil|nasil yapar|adim adim|yapilisi|tarifi anlat|tarifini ver|how (do|to|can) (i |you )?make|step by step|walk me through|recipe for/.test(n)&&recipe)intent="steps";
    else if(/yerine|alternatif|ikame|yok ne|bulamad|substitut|instead|replace/.test(n))intent="substitute";
    else if(/hikaye|tarih|efsane|nereden gel|ortaya cik|history|story|origin/.test(n))intent="story";
    else if(/nerede yen|restoran|where to eat|restaurant/.test(n))intent="where";
    else if(/benzer|similar|gibi baska/.test(n))intent="similar";
    else if(/malzeme(ler)?i|ne lazim|ingredients|what do i need/.test(n)&&recipe)intent="ingredients";
    else if(/ne kadar sur|kac dakika|how long|zor mu|kolay mi/.test(n)&&recipe)intent="howlong";
    else if(findIngredients(text).length&&!/yerine|instead/.test(n))intent="recommend";
    else if((mentioned||how==="ordinal")&&intent!=="recommend")intent="about";
    else if(how==="ordinal")intent="about";
    else if(recipe&&/^(anlat|bahset|tell me|more about)/.test(n))intent="about";
    else if(mentioned&&!/oner|suggest|recommend/.test(n))intent="about";
    if(recipe&&intent!=="recommend")ctx.lastRecipe=recipe;
    if(/kalori|kcal|calorie/.test(n)){
      const lim=(n.match(/(\d{2,4})\s*(kalori|kcal|cal)/)||[])[1];
      const wantList=!mentioned&&(lim||/dusuk|az kalorili|hafif|diyet|light|low|en az|kalorisi az/.test(n)||!recipe);
      if(!wantList&&recipe){ctx.offer={type:"steps",r:recipe};chips([en()?"Something lighter":"Daha hafif bir şey",en()?"How do I make it?":"Nasıl yapılır?"]);
        return en()?`${link(recipe)} has about **${recipe.kcal} kcal** per ${recipe.kcalUnitEn}. (Approximate value.)`:`${link(recipe)} yaklaşık **${recipe.kcal} kcal** (${recipe.kcalUnit}). Bu değer yaklaşıktır.`}
      let list=RECIPES.filter(r=>r.kcal&&r.key!=="tr-8"&&(!lim||r.kcal<=+lim)&&(!(ctx.prefs&&ctx.prefs.veg)||isVeg(r))).sort((a,b)=>a.kcal-b.kcal).slice(0,4);
      if(!list.length)return en()?"I couldn't find a dish under that limit.":"Bu sınırın altında bir yemek bulamadım.";
      ctx.lastList=list;ctx.lastRecipe=list[0];ctx.offer={type:"steps",r:list[0]};chips([en()?"How do I make the first?":"İlkini nasıl yaparım?",en()?"Tell me about the second":"İkincisini anlat"]);
      return (en()?(lim?`Dishes under ${lim} kcal:`:"The lightest dishes:"):(lim?`${lim} kalorinin altındaki yemekler:`:"En hafif yemekler:"))+"\n"+bullets(list.map(r=>`${link(r)} – ≈ ${r.kcal} kcal (${en()?r.kcalUnitEn:r.kcalUnit})`))+"\n"+(en()?"Values are approximate.":"Değerler yaklaşıktır.");
    }

    switch(intent){
      case "greet":return smallTalk("merhaba");
      case "thanks":return en()?"You're welcome! 🍲":"Rica ederim! 🍲";
      case "help":chips([en()?"What can I make with chicken?":"Tavukla ne yapabilirim?",en()?"Tell me a joke":"Şaka yap",en()?"Suggest a dessert":"Tatlı öner"]);
        return en()
        ?"I'm the site's own AI, running in your browser. You can chat with me naturally. I can:\n- **suggest dishes** (by ingredient, country, time, vegetarian, dessert, soup) and give **more** if you ask\n- **walk you through a recipe step by step** (say \"next\", \"back\")\n- **scale a recipe** (\"make it for 6\")\n- suggest **substitutes**, tell a dish's **story**, **time**, **ingredients** and **where to eat** it\n- remember the dish we're talking about, so \"what about for 2?\" works\n- chat a little, remember your name and even tell a joke 😄"
        :"Ben sitenin kendi yapay zekâsıyım ve tarayıcında çalışırım. Benimle normal konuşur gibi sohbet edebilirsin. Şunları yapabilirim:\n- **Yemek önermek** (malzemeye, ülkeye, süreye göre; vejetaryen, tatlı, çorba), istersen **başka** seçenekler sunmak\n- **Tarifi adım adım anlatmak** (\"sonraki\", \"önceki\" diyerek ilerlersin)\n- **Porsiyon ayarlamak** (\"6 kişilik yap\")\n- **Alternatif malzeme**, yemeğin **hikâyesi**, **süresi**, **malzemeleri** ve **nerede yenir** bilgisi\n- Konuştuğumuz yemeği hatırlarım; \"peki 2 kişilik?\" diyebilirsin\n- Sohbet ederim: ruh hâlin, saat ve tarih, hesap makinesi, ölçü çevirme (su bardağı → gram), yazı tura, zar, sayı tahmin oyunu, bilmece, ilginç bilgiler\n- Bana yeni şeyler öğretebilirsin: **öğren: soru => cevap**\n- Adını ve tercihlerini (vejetaryen, acı sever) hatırlarım 😄";
      case "steps":return startSteps(recipe);
      case "about":{
        ctx.offer={type:"steps",r:recipe};chips([en()?"Yes, how do I make it?":"Evet, nasıl yapılır?",en()?"What's its story?":"Hikâyesi ne?",en()?"Where to eat it?":"Nerede yenir?"]);
        return `${link(recipe)} – ${L(recipe,"desc")}\n${en()?"Time":"Süre"}: **${L(recipe,"time")}** · ${en()?"Difficulty":"Zorluk"}: **${LV(recipe.level)}** · ${L(recipe,"serves")}\n\n`+(en()?"Shall I walk you through it step by step?":"Adım adım nasıl yapıldığını anlatayım mı?");
      }
      case "scale":{
        if(!recipe)return en()?"Which recipe should I scale? Open one or write its name, e.g. \"mantı for 6\".":"Hangi tarifi ayarlayayım? Bir tarif açın ya da adını yazın, ör. \"mantıyı 6 kişilik yap\".";
        const p=findPeople(text),base=parseFloat((L(recipe,"serves").match(/\d+/)||["4"])[0]);
        const target=p==="half"?base/2:p==="double"?base*2:p;const k=target/base;
        ctx.offer={type:"steps",r:recipe};chips([en()?"Start cooking":"Pişirmeye başla",en()?"For 2 people":"2 kişilik olsun",en()?"Substitutes?":"Alternatif malzeme?"]);
        return (en()?`Here's ${link(recipe)} for **${fmt(target)}** (original: ${L(recipe,"serves")}):\n`:`${link(recipe)} için **${fmt(target)} kişilik** miktarlar (orijinali: ${L(recipe,"serves")}):\n`)+bullets(L(recipe,"ing").map(x=>scaleLine(x,k)))+(en()?"\nCooking times stay about the same. Want to start cooking?":"\nPişirme süreleri çoğunlukla aynı kalır. Pişirmeye başlayalım mı?");
      }
      case "substitute":{
        let ids=findIngredients(text);
        if(!ids.length&&recipe){const miss=(NEEDS[recipe.key]||[]).flat().filter(x=>!pantrySel.has(x)&&SUBS[x]);ids=miss.slice(0,3)}
        const got=ids.filter(id=>(en()?SUBS_EN[id]||SUBS[id]:SUBS[id]));
        if(!got.length)return en()?"I don't have a substitute for that yet. Try naming the ingredient, e.g. \"instead of cream\".":"Bunun için kayıtlı bir alternatifim yok. Malzemenin adını yazarak dene, ör. \"krema yerine ne kullanırım?\"";
        chips([en()?"Another ingredient?":"Başka malzeme?",en()?"Suggest a dish":"Yemek öner"]);
        return got.map(id=>{const nmI=PN(PANTRY_BY[id]);const list=en()?(SUBS_EN[id]||SUBS[id]):SUBS[id];return (en()?`Instead of **${nmI}**:\n`:`**${nmI}** yerine:\n`)+bullets(list)}).join("\n")+(recipe&&mentioned?"\n"+(en()?`(for ${link(recipe)})`:`(${link(recipe)} için)`):"");
      }
      case "story":{
        if(!recipe)return en()?"Which dish's story would you like? Write its name, e.g. \"story of baklava\".":"Hangi yemeğin hikâyesini merak ediyorsun? Adını yaz, ör. \"baklavanın hikâyesi\".";
        ctx.offer={type:"steps",r:recipe};chips([en()?"How do I make it?":"Nasıl yapılır?",en()?"Where to eat it?":"Nerede yenir?",en()?"Similar dishes":"Benzer tarifler"]);
        return `${link(recipe)}\n${L(recipe,"story")||""}\n\n`+(en()?"Want me to show you how to make it?":"İstersen nasıl yapıldığını da anlatayım?");
      }
      case "where":{
        if(!recipe)return en()?"Which dish? E.g. \"where to eat pad thai\".":"Hangi yemek için? Ör. \"pad thai nerede yenir?\"";
        const w=(WHERE[recipe.key]||[]).slice(0,3),t=(WHERE_TR[recipe.key]||[]).slice(0,2);
        chips([en()?"How do I make it at home?":"Evde nasıl yapılır?",en()?"Its story":"Hikâyesi"]);ctx.offer={type:"steps",r:recipe};
        if(!w.length&&!t.length)return (en()?"I have no restaurant for ":"Şu an kayıtlı restoranım yok: ")+link(recipe);
        const f=x=>`**${x.n}** (${x.c})${x.ptr?" · "+(en()?x.pen:x.ptr):""}`;
        return link(recipe)+"\n"+bullets(w.map(f))+(t.length?"\n"+(en()?"In Türkiye:\n":"Türkiye'de:\n")+bullets(t.map(f)):"");
      }
      case "howlong":{if(!recipe)break;ctx.offer={type:"steps",r:recipe};chips([en()?"Let's make it":"Hadi yapalım",en()?"Something quicker":"Daha hızlı bir şey"]);
        return `${link(recipe)}: ${en()?"takes":"süre"} **${L(recipe,"time")}**, ${en()?"difficulty":"zorluk"} **${LV(recipe.level)}**, ${L(recipe,"serves")}.`}
      case "ingredients":{if(!recipe)break;ctx.offer={type:"steps",r:recipe};chips([en()?"Start cooking":"Pişirmeye başla",en()?"Substitutes?":"Alternatif malzeme?"]);
        return (en()?`Ingredients for ${link(recipe)}:\n`:`${link(recipe)} malzemeleri:\n`)+bullets(L(recipe,"ing"))}
      case "similar":{
        const base=mentioned?[mentioned.key]:recipe?[recipe.key]:[...favs];
        if(!base.length)return en()?"Open a recipe or add favourites and I'll find similar ones.":"Bir tarif aç ya da favori ekle, benzerlerini bulayım.";
        const list=similarTo(base,new Set(base));ctx.lastList=list;chips([en()?"Tell me about the first one":"İlkini anlat",en()?"The second one":"İkincisi nasıl?"]);
        return (en()?"You might also like:\n":"Bunları da sevebilirsin:\n")+bullets(list.map(r=>`${link(r)} – ${CN(r.country)}, ${L(r,"time")}`));
      }
    }
    // Öneri (varsayılan)
    const f={ings:findIngredients(text),country:findCountry(text),minutes:findMinutes(text),easy:/kolay|basit|easy|simple|beginner/.test(n),
      veg:/vejetaryen|etsiz|vegetarian|meatless|vegan/.test(n),drink:/kahve|icecek|coffee|drink/.test(n),dessert:/tatli|dessert|sweet/.test(n),soup:/corba|soup/.test(n)};
    if(intent==="unknown"&&!Object.values(f).some(v=>Array.isArray(v)?v.length:v)){
      chips([en()?"What can you do?":"Neler yapabilirsin?",en()?"Suggest a dish":"Yemek öner",en()?"Tell me a joke":"Şaka yap"]);
      return reflect(n,text);
    }
    ctx.shown=new Set();
    return recommendReply(f,false);
  }
  function recommendReply(f,more){
    ctx.lastFilters=f;
    let all=recommendAll(f).filter(r=>!ctx.shown.has(r.key));
    const list=all.slice(0,3);
    if(!list.length){chips([en()?"Suggest anything":"Herhangi bir şey öner"]);ctx.lastFilters=null;
      return more?(en()?"That's all I have for that. Try different conditions!":"Bu koşullara uyan başka tarifim kalmadı. Farklı bir şey deneyelim mi?"):(en()?"I couldn't find a recipe matching all of that. Try fewer conditions.":"Bunların hepsine uyan bir tarif bulamadım. Daha az koşulla tekrar dene.")}
    list.forEach(r=>ctx.shown.add(r.key));ctx.lastList=list;ctx.lastRecipe=list[0];ctx.offer={type:"steps",r:list[0]};
    const cond=[];
    if(f.ings.length)cond.push((en()?"with ":"")+f.ings.map(id=>PN(PANTRY_BY[id])).join(", ")+(en()?"":" ile"));
    if(f.country)cond.push(CN(DATA.find(c=>c.id===f.country)));
    if(f.minutes)cond.push((en()?"under ":"")+f.minutes+(en()?" min":" dk altında"));
    if(f.veg)cond.push(en()?"vegetarian":"vejetaryen");if(f.easy)cond.push(en()?"easy":"kolay");
    if(f.dessert)cond.push(en()?"dessert":"tatlı");if(f.soup)cond.push(en()?"soup":"çorba");
    const head=more?(en()?"Here are some more:":"İşte birkaç tane daha:"):cond.length?(en()?`My picks (${cond.join(", ")}):`:`Önerilerim (${cond.join(", ")}):`):(en()?`How about one of these${nm()}?`:`Şunlardan birine ne dersin${nm()}?`);
    chips([en()?"Show me how to make the first":"İlkini nasıl yaparım?",en()?"Something else":"Başka öner",en()?"Tell me about the second":"İkincisini anlat"]);
    return head+"\n"+bullets(list.map(r=>{
      const need=NEEDS[r.key]||[];let extra="";
      if(f.ings.length){const miss=need.filter(q=>!(Array.isArray(q)?q:[q]).some(x=>f.ings.includes(x)));extra=miss.length?(en()?` · also needs: `:` · ayrıca gerekli: `)+miss.slice(0,4).map(q=>PN(PANTRY_BY[Array.isArray(q)?q[0]:q])).join(", ")+(miss.length>4?"…":""):(en()?" · you have everything!":" · her şey elinde!")}
      return `${link(r)} – ${L(r,"time")}, ${LV(r.level)}${extra}`;
    }))+"\n"+(en()?"Shall I walk you through the first one?":"İlkini adım adım anlatayım mı?");
  }
  const r2=r=>r;

  // aiAsk'ın beklediği arayüz: yazıyormuş gibi akış, iptal desteği
  async function sample(turns,opts={}){
    // Bekletme sistemi: önce "düşünüyor" göstergesi çizilir, cevap arka planda hazırlanır,
    // hazır olunca tamamı tek seferde gösterilir (kelime kelime akış yok → takılma yok).
    const cancelled=()=>{const e=new Error("cancelled");e.code="cancelled";e.text="";return e};
    const t0=performance.now();
    await new Promise(r=>requestAnimationFrame(()=>setTimeout(r,0)));   // göstergenin ekrana çizilmesine izin ver
    if(opts.signal&&opts.signal.aborted)throw cancelled();
    let full;
    try{full=answer(aiLastQ||"")}catch(err){console.error(err);full=en()?"Sorry, something went wrong. Could you ask again?":"Üzgünüm, bir sorun oldu. Tekrar sorar mısın?"}
    aiDynSugs=ctx.chips.slice();
    const wait=Math.max(0,350-(performance.now()-t0));                 // çok kısa yanıp sönmesin diye en az ~0.35 sn bekle
    if(wait)await new Promise((r,j)=>{const t=setTimeout(r,wait);if(opts.signal)opts.signal.addEventListener("abort",()=>{clearTimeout(t);j(cancelled())},{once:true})});
    if(opts.signal&&opts.signal.aborted)throw cancelled();
    return {text:full,truncated:false};
  }
  return {answer,classify,recommend,similarTo,sample,getPrefs:()=>ctx.prefs||{},setPref:(k,v)=>{ctx.prefs=ctx.prefs||{};if(v===undefined)delete ctx.prefs[k];else ctx.prefs[k]=v;savePrefs()}};
})();

// Şef'i etkinleştir (dış servis kullanılmaz)
let aiLastQ="";
aiSample=ChefAI.sample;
aiStatic();$("aiFab").hidden=false;
/* ---------- Şef: sesli sohbet (konuşarak soru sor, Şef sesli cevap versin) ---------- */
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
const VT={
 tr:{mic:"Sesle sor",vc:"Sesli sohbet",vcOn:"🎙️ Sesli sohbet açık. Konuş, seni dinliyorum! Kapatmak için \"sohbeti kapat\" de.",vcOff:"Sesli sohbet kapandı",
  listening:"Dinliyorum…",speaking:"Şef konuşuyor…",noSR:"Bu tarayıcı sesli girişi desteklemiyor. Chrome, Edge veya Safari'yi deneyin.",
  denied:"Mikrofon izni verilmedi. Tarayıcının adres çubuğundaki kilit simgesinden mikrofona izin verin.",network:"Ses tanıma için internet bağlantısı gerekiyor.",noMic:"Mikrofon bulunamadı."},
 en:{mic:"Ask by voice",vc:"Voice chat",vcOn:"🎙️ Voice chat is on. Talk, I'm listening! Say \"close chat\" to stop.",vcOff:"Voice chat off",
  listening:"Listening…",speaking:"The Chef is speaking…",noSR:"This browser doesn't support voice input. Try Chrome, Edge or Safari.",
  denied:"Microphone permission was denied. Allow it from the lock icon in the address bar.",network:"Voice recognition needs an internet connection.",noMic:"No microphone found."}
};
const vt=k=>VT[LANG][k];
let rec=null,listening=false,voiceChat=false,speakNext=false,srFinal="",srFatal=false,noSpeechTries=0;

function plainForSpeech(md){
  return String(md||"")
    .replace(/\[\[([a-z]{2}-\d{1,8})\]\]/g,(m,id)=>{const r=RECIPES.find(x=>x.key===id);return r?L(r,"title"):""})
    .replace(/\*\*/g,"").replace(/^\s*[-•]\s+/gm,"").replace(/[·–]/g,", ")
    .replace(/\p{Extended_Pictographic}|\u200d|\uFE0F/gu,"")
    .replace(/(\d+)\/(\d+)/g,(m,x,y)=>LANG==="en"?`${x} of ${y}`:`${x}, toplam ${y}`)
    .replace(/\n{2,}/g,". ").replace(/\n/g,". ").replace(/:\s*\./g,":").replace(/\.\s*\./g,".").replace(/\s+,/g,",").replace(/\s{2,}/g," ").trim();
}
function chefSay(text,onEnd){
  if(!canSpeak){onEnd&&onEnd();return}
  try{
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(plainForSpeech(text));
    const c=chefVC(),lang=chefLang();u.lang=lang;
    const cv=c.voice&&allVoices().find(x=>x.name===c.voice);
    const v=(cv&&vsLangOf(cv).startsWith(lang.slice(0,2).toLowerCase())?cv:null)||(c.lang?vsPickLang(lang):pickVoice(lang));if(v){u.voice=v;u.lang=v.lang}
    u.rate=c.rate;u.pitch=Math.min(2,Math.max(0,c.pitch!=null?c.pitch:effPitch()));
    let done=false;const fin=()=>{if(done)return;done=true;setVoiceState();onEnd&&onEnd()};
    u.onend=fin;u.onerror=fin;
    speechSynthesis.speak(u);setVoiceState("speaking");
  }catch(e){onEnd&&onEnd()}
}
function setVoiceState(mode){
  const bar=$("aiListen"),mic=$("aiMic"),vb=$("aiVoice");
  mic.classList.toggle("on",listening);mic.setAttribute("aria-pressed",listening);
  vb.setAttribute("aria-pressed",voiceChat);
  if(listening){bar.hidden=false;$("aiListenTxt").textContent=vt("listening");bar.classList.remove("spk")}
  else if(mode==="speaking"&&(voiceChat||speakNext)){bar.hidden=false;$("aiListenTxt").textContent=vt("speaking");$("aiInterim").textContent="";bar.classList.add("spk")}
  else{bar.hidden=true;$("aiInterim").textContent=""}
}
function startListen(){
  if(!SR){toast(vt("noSR"));voiceChat=false;setVoiceState();return}
  if(listening||aiBusy)return;
  try{speechSynthesis.cancel()}catch(e){}
  srFinal="";srFatal=false;
  rec=new SR();rec.lang=chefLang();rec.interimResults=true;rec.continuous=false;rec.maxAlternatives=1;
  rec.onresult=e=>{
    let fin="",inter="";
    for(let i=e.resultIndex;i<e.results.length;i++){const t=e.results[i][0].transcript;if(e.results[i].isFinal)fin+=t;else inter+=t}
    if(fin)srFinal+=fin;
    $("aiInterim").textContent=(srFinal+" "+inter).trim();
    $("aiInput").value=(srFinal+" "+inter).trim();aiGrow();
  };
  rec.onerror=e=>{
    const code=e&&e.error;
    if(code==="not-allowed"||code==="service-not-allowed"){srFatal=true;showMicHelp(micBlockReason()||(window.top!==window.self?"frame":"denied"))}
    else if(code==="network"){srFatal=true;toast(vt("network"))}
    else if(code==="audio-capture"){srFatal=true;toast(vt("noMic"))}
    if(srFatal){voiceChat=false}
  };
  rec.onend=()=>{
    listening=false;setVoiceState();
    const said=srFinal.trim();
    if(said){
      noSpeechTries=0;
      if(voiceChat&&/^(sohbeti kapat|sesli sohbeti kapat|konusmayi bitir|close chat|stop voice|stop listening)/.test(norm(said))){voiceChat=false;setVoiceState();$("aiInput").value="";toast(vt("vcOff"));chefSay(LANG==="en"?"Okay, voice chat is off.":"Tamam, sesli sohbeti kapattım.");return}
      speakNext=true;aiAsk(said);
    }else if(voiceChat&&!srFatal&&noSpeechTries<2){noSpeechTries++;setTimeout(()=>{if(voiceChat&&!aiBusy&&!$("aiPanel").hidden)startListen()},350)}
    else if(voiceChat&&noSpeechTries>=2){voiceChat=false;noSpeechTries=0;setVoiceState();toast(vt("vcOff"))}
  };
  try{rec.start();listening=true;setVoiceState()}catch(e){listening=false;setVoiceState()}
}
/* Mikrofon erişimini önceden kontrol et: izin mi yok, yoksa sayfa mı engelliyor? */
function micBlockReason(){
  if(location.protocol==="file:")return "file";
  try{
    const pol=document.permissionsPolicy||document.featurePolicy;
    if(pol&&typeof pol.allowsFeature==="function"&&!pol.allowsFeature("microphone"))return "frame";
  }catch(e){}
  if(window.top!==window.self){try{void window.top.location.href}catch(e){/* çapraz kaynaklı çerçeve */}}
  if(!window.isSecureContext)return "insecure";
  return null;
}
async function ensureMic(){
  const why=micBlockReason();
  if(why){showMicHelp(why);return false}
  if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){
    try{const s=await navigator.mediaDevices.getUserMedia({audio:true});s.getTracks().forEach(t=>t.stop());return true}
    catch(e){
      if(e&&(e.name==="NotAllowedError"||e.name==="SecurityError")){showMicHelp(window.top!==window.self?"frame":"denied");return false}
      if(e&&e.name==="NotFoundError"){toast(vt("noMic"));return false}
    }
  }
  return true;
}
const MICHELP={
 tr:{title:"Mikrofon kullanılamıyor",
  frame:"Siteyi <b>Claude'un içindeki önizleme penceresinde</b> açtığınız için mikrofon, siz izin verseniz bile bu pencere tarafından engelleniyor. Bunu sayfanın içinden değiştirmek mümkün değil.",
  file:"Siteyi <b>bilgisayardaki bir dosyadan</b> (file://) açtığınız için tarayıcı mikrofonu güvenlik gereği engelliyor.",
  insecure:"Sayfa güvenli bir bağlantıyla (https) açılmadığı için tarayıcı mikrofonu engelliyor.",
  denied:"Tarayıcı bu site için mikrofonu engellemiş görünüyor.",
  fixTitle:"Sesli sohbeti kullanmak için:",
  fixFrame:["Siteyi <b>https://</b> ile başlayan bir adresten açın (ör. Netlify'a yüklediğiniz uygulama sürümü) ya da bilgisayarda <b>npm start</b> ile açılan <b>http://localhost:3000</b> adresini kullanın.","Chrome veya Edge ile açın; ilk sorduğunda <b>İzin ver</b> deyin."],
  fixDenied:["Adres çubuğunun solundaki <b>🔒 kilit</b> simgesine dokunun.","<b>Mikrofon</b> ayarını <b>İzin ver</b> yapın.","Sayfayı yenileyin."],
  note:"Bu arada Şef'e yazarak sorabilirsiniz; cevapları sesli okumaya devam eder.",ok:"Anladım"},
 en:{title:"Microphone unavailable",
  frame:"You opened the site <b>inside Claude's preview window</b>, which blocks the microphone even after you allow it. The page itself can't change this.",
  file:"You opened the site <b>from a file on your computer</b> (file://), so the browser blocks the microphone for security.",
  insecure:"The page isn't on a secure (https) connection, so the browser blocks the microphone.",
  denied:"The browser seems to have blocked the microphone for this site.",
  fixTitle:"To use voice chat:",
  fixFrame:["Open the site from an address starting with <b>https://</b> (e.g. your Netlify app) or use <b>http://localhost:3000</b> after <b>npm start</b>.","Use Chrome or Edge and tap <b>Allow</b> when asked."],
  fixDenied:["Tap the <b>🔒 lock</b> icon at the left of the address bar.","Set <b>Microphone</b> to <b>Allow</b>.","Reload the page."],
  note:"Meanwhile you can type to the Chef; replies are still read aloud.",ok:"Got it"}
};
function showMicHelp(why){
  voiceChat=false;speakNext=false;listening=false;setVoiceState();
  const T2=MICHELP[LANG];const steps=why==="denied"?T2.fixDenied:T2.fixFrame;
  $("micHelpTitle").textContent=T2.title;
  $("micHelpBody").innerHTML=`<p>${T2[why]||T2.denied}</p><p><b>${T2.fixTitle}</b></p><ol>${steps.map(s=>`<li>${s}</li>`).join("")}</ol><p class="mh-note">${T2.note}</p>`;
  $("micHelpOk").textContent=T2.ok;
  $("micHelp").hidden=false;$("micHelpScrim").hidden=false;
}
function closeMicHelp(){$("micHelp").hidden=true;$("micHelpScrim").hidden=true}
$("micHelpOk").onclick=closeMicHelp;$("micHelpClose").onclick=closeMicHelp;$("micHelpScrim").onclick=closeMicHelp;

function stopListen(){if(rec){try{rec.abort()}catch(e){}}listening=false;setVoiceState()}
// Şef cevabını bitirince: sesle sorulduysa sesli oku, sesli sohbet açıksa tekrar dinle
function chefAfterAnswer(bot){
  if(aiAutoRead&&!speakNext&&!voiceChat&&bot&&bot.content&&!bot.err){readMsg(aiHistory.indexOf(bot));return}
  if(!(speakNext||voiceChat)||!bot||!bot.content)return;
  speakNext=false;
  chefSay(bot.content,()=>{if(voiceChat&&!$("aiPanel").hidden)setTimeout(startListen,250)});
}
$("aiMic").onclick=async()=>{if(listening){stopListen();return}if(!SR){toast(vt("noSR"));return}if(!(await ensureMic()))return;speakNext=true;startListen()};
$("aiVoice").onclick=()=>{
  voiceChat=!voiceChat;noSpeechTries=0;
  if(voiceChat){if(!SR){voiceChat=false;toast(vt("noSR"));setVoiceState();return}voiceChat=false;setVoiceState();ensureMic().then(ok=>{if(!ok)return;voiceChat=true;setVoiceState();toast(vt("vcOn"));startListen()});return}
  else{stopListen();try{speechSynthesis.cancel()}catch(e){}toast(vt("vcOff"))}
  setVoiceState();
};

/* ---------- Şef: sesli okuma (cevapları dinle) ---------- */
const RT={tr:{listen:"Dinle",stop:"Durdur",readOn:"🔊 Şef'in cevapları artık sesli okunacak",readOff:"🔈 Otomatik sesli okuma kapandı",readTitle:"Cevapları otomatik sesli oku"},
          en:{listen:"Listen",stop:"Stop",readOn:"🔊 The Chef's replies will now be read aloud",readOff:"🔈 Auto read-aloud is off",readTitle:"Read replies aloud automatically"}};
const rt=k=>RT[LANG][k];
let aiAutoRead=store.get("bm-ai-autoread",false),speakingIdx=-1;
function readMsg(i){
  const m=aiHistory[i];if(!m||!m.content)return;
  try{speechSynthesis.cancel()}catch(e){}
  speakingIdx=i;aiRender();
  chefSay(m.content,()=>{if(speakingIdx===i){speakingIdx=-1;if(!$("aiPanel").hidden)aiRender()}});
}
function stopReading(){try{speechSynthesis.cancel()}catch(e){}speakingIdx=-1;if(!$("aiPanel").hidden)aiRender()}
function bindSpeak(root){root.querySelectorAll(".ai-speak").forEach(b=>b.onclick=()=>{const i=+b.dataset.i;if(speakingIdx===i)stopReading();else readMsg(i)})}
function readStatic(){
  $("aiRead").setAttribute("aria-pressed",aiAutoRead);$("aiReadIco").textContent=aiAutoRead?"🔊":"🔈";
  $("aiRead").title=rt("readTitle");$("aiRead").setAttribute("aria-label",rt("readTitle"));
  if(!canSpeak)$("aiRead").hidden=true;
}
$("aiRead").onclick=()=>{aiAutoRead=!aiAutoRead;store.set("bm-ai-autoread",aiAutoRead);readStatic();toast(aiAutoRead?rt("readOn"):rt("readOff"));if(!aiAutoRead)stopReading()};
readStatic();
/* ---------- Şef: ses değiştirme (üst menüdeki 🗣️ düğmesi) ---------- */
const VS_TXT={tr:{title:"🗣️ Şefin sesi",voice:"Ses",pitch:"Ton",rate:"Hız",tryB:"▶ Dene",reset:"Sıfırla",auto:"Otomatik (önerilen)",mine:"Seçilen dildeki sesler",lang:"Dil",other:"Diğer diller",
  sample:"Merhaba, ben Şef! Bugün birlikte ne pişirelim?",note:"Ses listesi cihazına ve tarayıcına göre değişir. Ayarların profiline kaydedilir.",noVoice:"Bu tarayıcı sesli okumayı desteklemiyor.",
  saved:"🗣️ Şefin sesi güncellendi",btn:"Şefin sesini değiştir",low:"Kalın",normal:"Normal",high:"İnce",vhigh:"Çok ince",slow:"Yavaş",fast:"Hızlı",vfast:"Çok hızlı",
  presets:[["normal","🙂 Normal",null,1],["thin","👩 İnce",1.6,1],["deep","🧔 Kalın",0.6,0.9],["kid","🧒 Çocuk",2,1.1],["calm","😌 Sakin",0.9,0.8],["fast","⚡ Hızlı",1,1.4],["robot","🤖 Robot",0.1,0.9]]},
 en:{title:"🗣️ Chef's voice",voice:"Voice",pitch:"Pitch",rate:"Speed",tryB:"▶ Try",reset:"Reset",auto:"Automatic (recommended)",mine:"Voices in this language",lang:"Lang",other:"Other languages",
  sample:"Hi, I'm the Chef! What shall we cook today?",note:"The voice list depends on your device and browser. Settings are saved to your profile.",noVoice:"This browser doesn't support read-aloud.",
  saved:"🗣️ Chef's voice updated",btn:"Change the Chef's voice",low:"Deep",normal:"Normal",high:"High",vhigh:"Very high",slow:"Slow",fast:"Fast",vfast:"Very fast",
  presets:[["normal","🙂 Normal",null,1],["thin","👩 High",1.6,1],["deep","🧔 Deep",0.6,0.9],["kid","🧒 Kid",2,1.1],["calm","😌 Calm",0.9,0.8],["fast","⚡ Fast",1,1.4],["robot","🤖 Robot",0.1,0.9]]}};
const vst=k=>(VS_TXT[LANG]||VS_TXT.tr)[k];
function chefVC(){const c=(PROFILE&&store.get(K("bm-chef-voice"),null))||{};return {lang:c.lang||"",voice:c.voice||"",pitch:typeof c.pitch==="number"?c.pitch:null,rate:typeof c.rate==="number"?c.rate:1,preset:c.preset||"normal"}}
function saveChefVC(c){if(!PROFILE)return;store.set(K("bm-chef-voice"),c)}
const VS_LANGS=[
 ["tr-TR","🇹🇷 Türkçe","Merhaba, ben Şef! Bugün birlikte ne pişirelim?"],
 ["en-US","🇺🇸 English (US)","Hi, I'm the Chef! What shall we cook today?"],
 ["en-GB","🇬🇧 English (UK)","Hello, I'm the Chef! What shall we cook today?"],
 ["it-IT","🇮🇹 Italiano","Ciao, sono lo Chef! Cosa cuciniamo oggi?"],
 ["fr-FR","🇫🇷 Français","Bonjour, je suis le Chef ! Qu'est-ce qu'on cuisine aujourd'hui ?"],
 ["es-ES","🇪🇸 Español","¡Hola, soy el Chef! ¿Qué cocinamos hoy?"],
 ["es-MX","🇲🇽 Español (México)","¡Hola, soy el Chef! ¿Qué vamos a cocinar hoy?"],
 ["de-DE","🇩🇪 Deutsch","Hallo, ich bin der Koch! Was kochen wir heute?"],
 ["ja-JP","🇯🇵 日本語","こんにちは、シェフです！今日は何を作りましょうか？"],
 ["zh-CN","🇨🇳 中文","你好，我是大厨！今天我们做什么菜？"],
 ["ko-KR","🇰🇷 한국어","안녕하세요, 셰프예요! 오늘 뭘 요리할까요?"],
 ["hi-IN","🇮🇳 हिन्दी","नमस्ते, मैं शेफ़ हूँ! आज हम क्या पकाएँ?"],
 ["th-TH","🇹🇭 ไทย","สวัสดี ฉันคือเชฟ! วันนี้เราจะทำอะไรกินดี"],
 ["ru-RU","🇷🇺 Русский","Привет, я Шеф! Что приготовим сегодня?"],
 ["ar-SA","🇸🇦 العربية","مرحبا، أنا الشيف! ماذا نطبخ اليوم؟"]];
const vsLangOf=v=>String(v&&v.lang||"").replace("_","-").toLowerCase();
function vsPickLang(lang){const vs=allVoices(),l=lang.toLowerCase(),pre=l.slice(0,2);const same=vs.filter(v=>vsLangOf(v).startsWith(pre));return same.find(v=>vsLangOf(v)===l&&FEMALE.test(v.name))||same.find(v=>vsLangOf(v)===l)||same.find(v=>FEMALE.test(v.name))||same[0]||null}
function chefLang(){const c=chefVC();return c.lang||(LANG==="en"?"en-US":"tr-TR")}
function vsHasLang(code){const pre=code.slice(0,2).toLowerCase();return allVoices().some(v=>vsLangOf(v).startsWith(pre))}
function vsFillLangs(){
  const sel=$("vsLang"),c=chefVC(),auto=LANG==="en"?"Same as site (English)":"Site diliyle aynı (Türkçe)",miss=LANG==="en"?" · no voice on device":" · cihazda ses yok",haveVoices=allVoices().length>0;
  sel.innerHTML=`<option value=""${!c.lang?" selected":""}>${esc(auto)}</option>`+VS_LANGS.map(([code,lb])=>`<option value="${code}"${c.lang===code?" selected":""}>${esc(lb+(haveVoices&&!vsHasLang(code)?miss:""))}</option>`).join("");
}
function vsSample(){const l=chefLang(),hit=VS_LANGS.find(x=>x[0]===l)||VS_LANGS.find(x=>x[0].slice(0,2)===l.slice(0,2));return hit?hit[2]:vst("sample")}
function vsFillVoices(){
  vsFillLangs();const sel=$("vsVoice"),c=chefVC(),vs=allVoices(),pre=chefLang().slice(0,2).toLowerCase();
  const opt=v=>`<option value="${esc(v.name)}"${v.name===c.voice?" selected":""}>${esc((FEMALE.test(v.name)?"♀ ":"")+v.name+" ("+v.lang+")")}</option>`;
  const mine=vs.filter(v=>vsLangOf(v).startsWith(pre)),rest=vs.filter(v=>!mine.includes(v));
  sel.innerHTML=`<option value=""${!c.voice?" selected":""}>${esc(vst("auto"))}</option>`+
    (mine.length?`<optgroup label="${esc(vst("mine"))}">${mine.map(opt).join("")}</optgroup>`:"")+
    (rest.length?`<optgroup label="${esc(vst("other"))}">${rest.map(opt).join("")}</optgroup>`:"");
}
const vsPitchWord=v=>v<0.85?vst("low"):v<1.25?vst("normal"):v<1.75?vst("high"):vst("vhigh");
const vsRateWord=v=>(v<0.9?vst("slow"):v<1.15?vst("normal"):v<1.5?vst("fast"):vst("vfast"))+" ×"+(+v).toFixed(1);
const vsUnpress=()=>$("vsPresets").querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed","false"));
function vsRender(){
  const c=chefVC(),p=c.pitch!=null?c.pitch:effPitch();
  $("vsTitle").textContent=vst("title");$("vsLangLbl").textContent=vst("lang");$("vsVoiceLbl").textContent=vst("voice");$("vsPitchLbl").textContent=vst("pitch");$("vsRateLbl").textContent=vst("rate");
  $("vsTry").textContent=vst("tryB");$("vsReset").textContent=vst("reset");$("vsNote").textContent=canSpeak?vst("note"):vst("noVoice");
  $("vsPresets").innerHTML=vst("presets").map(([id,lb])=>`<button type="button" data-p="${id}" aria-pressed="${c.preset===id}">${esc(lb)}</button>`).join("");
  $("vsPresets").querySelectorAll("button").forEach(b=>b.onclick=()=>{const pr=vst("presets").find(x=>x[0]===b.dataset.p);saveChefVC({lang:chefVC().lang,voice:chefVC().voice,pitch:pr[2],rate:pr[3],preset:pr[0]});vsRender();vsTry()});
  $("vsPitch").value=p;$("vsPitchVal").textContent=vsPitchWord(p);
  $("vsRate").value=c.rate;$("vsRateVal").textContent=vsRateWord(c.rate);
  vsFillVoices();
  ["vsLang","vsVoice","vsPitch","vsRate","vsTry"].forEach(id=>$(id).disabled=!canSpeak);
}
function vsStatic(){const b=$("vsBtn");b.title=vst("btn");b.setAttribute("aria-label",vst("btn"));$("aiVSetBtn").title=vst("btn");$("aiVSetBtn").setAttribute("aria-label",vst("btn"));if(!$("aiVSet").hidden)vsRender()}
function vsTry(){if(!canSpeak)return;try{speechSynthesis.cancel()}catch(e){}if(typeof speakingIdx!=="undefined")speakingIdx=-1;chefSay(vsSample())}
function vsToggle(open,where){
  if(open===undefined)open=$("aiVSet").hidden||(where&&vsWhere!==where);
  if(open&&!PROFILE){askAccount("chef");return}
  const pn=$("aiVSet");
  if(open){vsWhere=where||"top";
    if(vsWhere==="ai"){$("aiPanel").insertBefore(pn,$("aiCtx"));pn.classList.add("in-ai")}
    else{document.body.insertBefore(pn,document.body.firstChild);pn.classList.remove("in-ai")}}
  pn.hidden=!open;
  $("vsBtn").setAttribute("aria-pressed",open&&vsWhere==="top");$("aiVSetBtn").setAttribute("aria-pressed",open&&vsWhere==="ai");
  if(open)vsRender();
}
let vsWhere="top";

$("vsBtn").onclick=e=>{e.stopPropagation();vsToggle(undefined,"top")};
$("aiVSetBtn").onclick=e=>{e.stopPropagation();vsToggle(undefined,"ai")};
$("vsClose").onclick=()=>vsToggle(false);
document.addEventListener("click",e=>{const pn=$("aiVSet");if(!e.target.isConnected||e.composedPath().includes(pn)||vsWhere==="ai")return;if(!pn.hidden&&!pn.contains(e.target)&&e.target!==$("vsBtn"))vsToggle(false)});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("aiVSet").hidden)vsToggle(false)});
$("vsLang").onchange=e=>{const c=chefVC();c.lang=e.target.value;c.voice="";saveChefVC(c);vsFillVoices();toast(vst("saved"));vsTry()};
$("vsVoice").onchange=e=>{const c=chefVC();c.voice=e.target.value;saveChefVC(c);toast(vst("saved"));vsTry()};
$("vsPitch").oninput=e=>{const c=chefVC();c.pitch=+e.target.value;c.preset="custom";saveChefVC(c);$("vsPitchVal").textContent=vsPitchWord(c.pitch);vsUnpress()};
$("vsRate").oninput=e=>{const c=chefVC();c.rate=+e.target.value;c.preset="custom";saveChefVC(c);$("vsRateVal").textContent=vsRateWord(c.rate);vsUnpress()};
$("vsPitch").onchange=$("vsRate").onchange=()=>vsTry();
$("vsTry").onclick=vsTry;
$("vsReset").onclick=()=>{saveChefVC({voice:"",pitch:null,rate:1,preset:"normal"});vsRender();toast(vst("saved"))};
if(canSpeak){try{speechSynthesis.addEventListener("voiceschanged",()=>{if(!$("aiVSet").hidden)vsFillVoices()})}catch(e){}}
if(!canSpeak){$("vsBtn").hidden=true;$("aiVSetBtn").hidden=true}
vsStatic();
function voiceStatic(){vsStatic();if(typeof readStatic==="function")readStatic();
  $("aiMic").title=vt("mic");$("aiMic").setAttribute("aria-label",vt("mic"));
  $("aiVoice").title=vt("vc");$("aiVoice").setAttribute("aria-label",vt("vc"));$("aiVoiceLbl").textContent=vt("vc");
  if(!SR){$("aiMic").hidden=true;$("aiVoice").hidden=true}
}
voiceStatic();

/* ---------- Mobil alt menü ---------- */
const MT={tr:{home:"Keşfet",search:"Ara",fav:"Favoriler",set:"Ayarlar",prof:"Profil",title:"Ayarlar",lang:"Dil",theme:"Tema",size:"Yazı boyutu",gate:"Giriş ekranı",red:"Kırmızı",light:"Açık",langV:"Türkçe"},
          en:{home:"Explore",search:"Search",fav:"Favourites",set:"Settings",prof:"Profile",title:"Settings",lang:"Language",theme:"Theme",size:"Text size",gate:"Sign-in screen",red:"Red",light:"Light",langV:"English"}};
const mt=k=>MT[LANG][k];
function mnavSet(go){document.querySelectorAll("#mnav button").forEach(b=>b.setAttribute("aria-current",b.dataset.go===go?"page":"false"))}
function mnavUpdate(){
  if(!$("mnav"))return;
  $("mnHome").textContent=mt("home");$("mnSearch").textContent=mt("search");$("mnFav").textContent=mt("fav");$("mnSet").textContent=mt("set");$("mnProf").textContent=mt("prof");
  const n=(typeof PROFILE!=="undefined"&&PROFILE)||(typeof gt==="function"?gt("guestName"):"M");
  $("mnAv").textContent=n[0].toLocaleUpperCase("tr");
  $("mnFavN").textContent=favs.size;$("mnFavN").hidden=!favs.size;
  mnavSet(state.onlyFav?"fav":"home");
}
function msRender(){
  $("msTitle").textContent=mt("title");$("msLangL").textContent=mt("lang");$("msLangV").textContent=mt("langV");
  $("msThemeL").textContent=mt("theme");$("msThemeV").textContent=skinName(curSkin());
  $("msSizeL").textContent=mt("size");$("msSizeV").textContent=t("sizes")[sizeIdx];$("msGateL").textContent=mt("gate");
}
function openMs(){msRender();$("msSheet").hidden=false;$("msScrim").hidden=false;mnavSet("settings")}
function closeMs(){$("msSheet").hidden=true;$("msScrim").hidden=true;mnavUpdate()}
document.querySelectorAll("#mnav button").forEach(b=>b.onclick=()=>{
  const go=b.dataset.go;
  if(go==="home"){if(state.onlyFav)$("favToggle").click();window.scrollTo({top:0,behavior:"smooth"});mnavSet("home")}
  else if(go==="search"){mnavSet("search");$("q").scrollIntoView({block:"center"});setTimeout(()=>$("q").focus(),200)}
  else if(go==="fav"){if(!state.onlyFav)$("favToggle").click();$("count").scrollIntoView({behavior:"smooth",block:"start"});mnavSet("fav")}
  else if(go==="settings")openMs();
  else if(go==="profile"){$("userBtn").click()}
});
$("msClose").onclick=closeMs;$("msScrim").onclick=closeMs;
$("msLang").onclick=()=>{$("langBtn").click();msRender();mnavUpdate()};
$("msTheme").onclick=e=>{e.stopPropagation();toggleSkins()};
$("msSize").onclick=()=>{$("sizeBtn").click();msRender()};
$("msGate").onclick=()=>{closeMs();$("gateBtn").click()};
$("favToggle").addEventListener("click",()=>setTimeout(mnavUpdate,0));

/* ---------- wiring ---------- */
$("langBtn").onclick=()=>setLang(LANG==="en"?"tr":"en");
$("legendToggle").onclick=()=>{state.legendOnly=!state.legendOnly;$("legendToggle").setAttribute("aria-pressed",state.legendOnly);renderGrid()};
$("q").oninput=e=>{state.q=e.target.value;renderGrid()};
$("level").onchange=e=>{state.level=e.target.value;renderGrid()};
$("sort").onchange=e=>{state.sort=e.target.value;renderGrid()};
$("favToggle").onclick=()=>{if(!PROFILE&&!state.onlyFav){askAccount("favList");return}state.onlyFav=!state.onlyFav;$("favToggle").setAttribute("aria-pressed",state.onlyFav);renderGrid()};
$("closeSheet").onclick=closeSheet;$("scrim").onclick=closeSheet;
$("sheetFav").onclick=()=>toggleFav(state.open);
$("shareBtn").onclick=copyList;
$("closeCook").onclick=closeCook;
$("pitch").oninput=e=>{pitchV=+e.target.value;$("pitchVal").textContent=pitchWord(pitchV);$("femaleBtn").setAttribute("aria-pressed",pitchV>=1.4)};
$("pitch").onchange=e=>{pitchV=+e.target.value;pitchTouched=true;store.set("bm-pitch-set",true);store.set("bm-pitch",pitchV);if(!voiceOn){voiceOn=true;store.set("bm-voice",true);updateVoiceBtn()}speak(currentStepText())};
$("femaleBtn").onclick=()=>{
  const on=effPitch()<1.4;pitchV=on?FEMALE_PITCH:1;pitchTouched=true;store.set("bm-pitch-set",true);store.set("bm-pitch",pitchV);updatePitchUI();
  toast(on?t("femaleOn"):t("femaleOff"));
  if(!voiceOn){voiceOn=true;store.set("bm-voice",true);updateVoiceBtn()}
  speak(currentStepText());
};
$("voiceSel").onchange=e=>{
  voiceName=e.target.value;store.set("bm-voice-name",voiceName);updatePitchUI();
  const v=allVoices().find(x=>x.name===voiceName);
  if(v&&ASIA.test(v.lang))toast(t("asiaWarn"));else toast(t("voiceSet",v?v.name:t("voiceAuto")));
  if(!voiceOn){voiceOn=true;store.set("bm-voice",true);updateVoiceBtn()}
  speak(currentStepText());
};
$("voiceBtn").onclick=()=>{
  if(!canSpeak){toast(t("noVoice"));return}
  voiceOn=!voiceOn;store.set("bm-voice",voiceOn);updateVoiceBtn();
  if(voiceOn){toast(t("voiceHint"));speak(currentStepText())}else stopSpeak();
};
$("prevStep").onclick=()=>{if(state.step>0){state.step--;renderCook()}};
$("nextStep").onclick=()=>{const r=RECIPES.find(x=>x.key===state.open);if(state.step<r.steps.length-1){state.step++;renderCook()}else{const ov=voiceOn;closeCook();toast(t("enjoy"));if(ov)setTimeout(()=>speak(t("enjoyVoice")),50)}};
const SKINS=[["red", "Bordo Gece", "Burgundy Night", 1, null], ["navy", "Gece Mavisi", "Midnight Blue", 1, ["#0E1726", "#16233A", "#8FB8FF"]], ["forest", "Orman", "Forest", 1, ["#0F1F17", "#173024", "#E6C26B"]], ["espresso", "Espresso", "Espresso", 1, ["#1E1410", "#2B1D17", "#E8A86A"]], ["plum", "Mor Akşam", "Plum Evening", 1, ["#1A1225", "#251A35", "#F5B3D0"]], ["black", "Gece Siyahı", "Pure Black", 1, ["#000000", "#111111", "#FFC98A"]], ["light", "Açık", "Light", 0, null], ["cream", "Krem Kâğıt", "Cream Paper", 0, ["#F7F1E6", "#FFFBF3", "#B5542C"]], ["mint", "Nane", "Mint", 0, ["#EEF7F3", "#FFFFFF", "#1F8A6B"]], ["rose", "Gül Kurusu", "Dusty Rose", 0, ["#FDF0F3", "#FFFFFF", "#D63E6C"]], ["sky", "Gökyüzü", "Sky", 0, ["#EEF4FB", "#FFFFFF", "#2F6FD6"]], ["lavender", "Lavanta", "Lavender", 0, ["#F4F0FC", "#FFFFFF", "#7C3AED"]], ["cherry", "Kiraz", "Cherry", 0, ["#FDF1F1", "#FFFFFF", "#D62828"]], ["peach", "Şeftali", "Peach", 0, ["#FFF4EC", "#FFFFFF", "#E8691E"]], ["lemon", "Limon", "Lemon", 0, ["#FDFBEA", "#FFFFFF", "#B8960B"]], ["ocean", "Derin Okyanus", "Deep Ocean", 1, ["#0A1F24", "#11303A", "#4FD1C5"]], ["crimson", "Kızıl Gece", "Crimson Night", 1, ["#170B0D", "#241215", "#FF4D5E"]], ["graphite", "Grafit", "Graphite", 1, ["#1C1E22", "#26292E", "#F2C14E"]], ["galaxy", "Galaksi", "Galaxy", 1, ["#0F0D2A", "#18153D", "#7DD3FC"]]];
SKINS.find(x=>x[0]==="red")[4]=["#3B070B","#521019","#FFC98A"];SKINS.find(x=>x[0]==="light")[4]=["#F6F7F9","#FFFFFF","#3B5BDB"];
function curSkin(){const k=document.documentElement.getAttribute("data-skin");return SKINS.find(x=>x[0]===k)||(isDark()?SKINS[0]:SKINS.find(x=>x[0]==="light"))}
function applySkin(id){const sk=SKINS.find(x=>x[0]===id)||SKINS[0];const h=document.documentElement;h.setAttribute("data-skin",sk[0]);h.setAttribute("data-theme",sk[3]?"dark":"light");store.set("bm-theme2",sk[3]?"dark":"light");store.set("bm-skin",sk[0]);try{const m=document.querySelector('meta[name="theme-color"]');if(m)m.content=sk[4][0]}catch(e){}}
function skinName(sk){return LANG==="en"?sk[2]:sk[1]}
function renderSkins(){
  const cur=curSkin()[0],en=LANG==="en";
  const btn=sk=>`<button type="button" data-skin="${sk[0]}" aria-pressed="${sk[0]===cur}"><span class="skin-sw" style="background:${sk[4][0]}"><i style="background:${sk[4][1]}"></i><em style="background:${sk[4][2]}"></em></span>${esc(skinName(sk))}</button>`;
  $("skinTitle").textContent=en?"🎨 Theme":"🎨 Tema";$("skinClose").setAttribute("aria-label",en?"Close":"Kapat");
  $("skinList").innerHTML=`<div class="skin-h">${en?"Dark":"Koyu"}</div><div class="skin-grid">${SKINS.filter(x=>x[3]).map(btn).join("")}</div><div class="skin-h">${en?"Light":"Açık"}</div><div class="skin-grid">${SKINS.filter(x=>!x[3]).map(btn).join("")}</div>`;
  $("skinList").querySelectorAll("button").forEach(b=>b.onclick=()=>{applySkin(b.dataset.skin);renderSkins();if(typeof msRender==="function"&&!$("msSheet").hidden)msRender()});
}
function toggleSkins(open){const p=$("skinPop");if(open===undefined)open=p.hidden;if(open){renderSkins();if(!$("aiVSet").hidden&&typeof vsToggle==="function")vsToggle(false)}p.hidden=!open;$("themeBtn").setAttribute("aria-expanded",open)}
$("themeBtn").onclick=e=>{e.stopPropagation();toggleSkins()};
$("skinClose").onclick=()=>toggleSkins(false);
document.addEventListener("click",e=>{const p=$("skinPop");if(p.hidden||!e.target.isConnected)return;if(!p.contains(e.target)&&!e.target.closest("#themeBtn,#msTheme"))toggleSkins(false)});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("skinPop").hidden)toggleSkins(false)});

document.addEventListener("keydown",e=>{
  if($("gate").classList.contains("open"))return;
  if(!$("micHelp").hidden){if(e.key==="Escape")closeMicHelp();return}
  if(!$("pm").hidden){if(e.key==="Escape")closeProfile();return}
  if(!$("msSheet").hidden){if(e.key==="Escape")closeMs();return}
  if(!$("aiPanel").hidden&&e.key==="Escape"&&document.activeElement&&$("aiPanel").contains(document.activeElement)){closeAi();return}
  if($("cook").classList.contains("open")){
    if(e.key==="Escape")closeCook();
    else if(e.key==="ArrowRight")$("nextStep").click();
    else if(e.key==="ArrowLeft")$("prevStep").click();
    return;
  }
  if(state.open&&e.key==="Escape")closeSheet();
  else if(e.key==="/"&&document.activeElement!==$("q")&&!state.open){e.preventDefault();$("q").focus()}
});
function refresh(){renderGrid();renderLegends();renderPantry();if(state.open)renderSheet();if($("cook").classList.contains("open"))renderCook()}
try{matchMedia("(prefers-color-scheme: dark)").addEventListener("change",refresh)}catch(e){}
new MutationObserver(refresh).observe(document.documentElement,{attributes:true,attributeFilter:["data-theme"]});
document.documentElement.setAttribute("data-theme",store.get("bm-theme2","dark"));applySkin(store.get("bm-skin",store.get("bm-theme2","dark")==="light"?"light":"red"));

applyStatic();renderHero();renderChips();renderLegends();renderPantry();renderGrid();updateFavBadge();updateUserBtn();
(()=>{let guest=false;try{guest=sessionStorage.getItem("bm-guest")==="1"}catch(e){}if(!PROFILE&&!guest)openAuth();})();


/* ---------- Yemek çarkı (1. ülke, 2. yemek) ---------- */
const WH={rot:0,spinning:false,stage:"country",country:null,items:[],f:{fast:false,easy:false,veg:false}};
const whT=k=>({tr:{title:"🎡 Yemek çarkı",spin:"ÇEVİR",fast:"⏱️ 30 dk ve altı",easy:"👌 Kolay",veg:"🌱 Vejetaryen",
  cta:"Kararsız mısın? Yemek çarkını çevir",open:"Tarifi aç",again:"🔄 Tekrar çevir",pick:"Bugün bunu pişir!",
  s1:"1. Ülke",s2:"2. Yemek",hintC:n=>`Önce ülkeyi seçelim: çarkta ${n} ülke var.`,hintD:(c,n)=>`${c} mutfağından ${n} yemek çarkta. Şimdi yemeği çevir!`,
  gotC:c=>`${c} çıktı!`,toDish:"Yemek çarkına geç →",reC:"🔄 Ülkeyi tekrar çevir",back:"← Ülkeyi değiştir",
  dishes:n=>`${n} yemek`,only:"Bu ülkede filtrelere uyan tek yemek bu:",none:"Bu filtrelere uyan yemek yok; birini kaldır.",close:"Kapat",btn:"Yemek çarkını aç"},
 en:{title:"🎡 Food wheel",spin:"SPIN",fast:"⏱️ 30 min or less",easy:"👌 Easy",veg:"🌱 Vegetarian",
  cta:"Can't decide? Spin the food wheel",open:"Open recipe",again:"🔄 Spin again",pick:"Cook this today!",
  s1:"1. Cuisine",s2:"2. Dish",hintC:n=>`First, the cuisine: ${n} cuisines on the wheel.`,hintD:(c,n)=>`${n} ${c} dishes on the wheel. Now spin for the dish!`,
  gotC:c=>`It's ${c}!`,toDish:"Go to the dish wheel →",reC:"🔄 Spin country again",back:"← Change country",
  dishes:n=>`${n} dishes`,only:"This is the only dish here that matches your filters:",none:"No dishes match these filters; remove one.",close:"Close",btn:"Open the food wheel"}})[LANG==="en"?"en":"tr"][k];
const whOk=r=>{const f=WH.f;return (!f.fast||(r.mins||999)<=30)&&(!f.easy||r.level==="Kolay")&&(!f.veg||(r.diet&&r.diet.d.includes("veg")))};
const whDishes=c=>RECIPES.filter(r=>r.country.id===c.id&&whOk(r));
function whDraw(items){
  const n=items.length,svg=$("whWheel");
  const a=360/n,R=160,rad=d=>(d-90)*Math.PI/180,pt=(d,r)=>`${(Math.cos(rad(d))*r).toFixed(2)},${(Math.sin(rad(d))*r).toFixed(2)}`;
  const fs=n>9?10.5:n>6?11.5:13,mx=n>9?8:n>6?9:11;
  svg.innerHTML=`<circle r="${R+8}" fill="var(--ink)"/>`+items.map((it,i)=>{
    const s0=i*a,s1=(i+1)*a,mid=s0+a/2,big=a>180?1:0;
    const path=`<path d="M0,0 L${pt(s0,R)} A${R},${R} 0 ${big} 1 ${pt(s1,R)} Z" fill="${it.color}" stroke="rgba(255,255,255,.55)" stroke-width="1.5"/>`;
    let name=it.label;if(name.length>mx)name=name.slice(0,mx-1).trim()+"…";
    const pr=n>12?Math.max(5,Math.min(19,(2*Math.PI*(R-30)/n)*0.36)):n>9?21:n>6?25:30,cy=-R+pr+(n>12?6:9),cid="whc"+i;
    const fw=pr*2.3,fh=fw*2/3;
    const pic=it.flagImg?`<g transform="rotate(${-mid} 0 ${cy})"><rect x="${-fw/2-2}" y="${cy-fh/2-2}" width="${fw+4}" height="${fh+4}" rx="4" fill="#fff"/><image href="${it.flagImg}" x="${-fw/2}" y="${cy-fh/2}" width="${fw}" height="${fh}" preserveAspectRatio="none"/></g>`:it.img?`<clipPath id="${cid}"><circle cx="0" cy="${cy}" r="${pr}"/></clipPath><circle cx="0" cy="${cy}" r="${pr+2.5}" fill="#fff"/><image href="${it.img}" x="${-pr}" y="${cy-pr}" width="${pr*2}" height="${pr*2}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${cid})" transform="rotate(${-mid} 0 ${cy})"/>`
      :`<circle cx="0" cy="${cy}" r="${pr+2.5}" fill="rgba(255,255,255,.92)"/><text x="0" y="${cy}" text-anchor="middle" dominant-baseline="central" font-size="${pr*1.15}" style="stroke:none" transform="rotate(${-mid} 0 ${cy})">${it.emoji}</text>`;
    const label=n>16?"":`<text transform="translate(0,${cy+pr+10}) rotate(90)" font-size="${fs}" dominant-baseline="middle">${esc(name)}</text>`;
    return path+`<g transform="rotate(${mid})"><title>${esc(it.label)}</title>${pic}${label}</g>`;
  }).join("")+`<circle r="10" fill="var(--surface)"/>`+Array.from({length:n>40?0:n},(_,i)=>`<circle cx="${(Math.cos(rad(i*a))*(R+4)).toFixed(1)}" cy="${(Math.sin(rad(i*a))*(R+4)).toFixed(1)}" r="3" fill="#FFE7A8"/>`).join("");
}
function whResetRot(){const w=$("whWheel");w.style.transition="none";WH.rot=0;w.style.transform="rotate(0deg)";void w.offsetWidth;w.style.transition=""}
function whSteps(){
  const st=$("whSteps");if(!st)return;const c=WH.country;
  st.innerHTML=`<span class="${WH.stage==="country"?"on":"done"}">${esc(whT("s1"))}${c&&WH.stage==="dish"?` · ${FL(c)} ${esc(CN(c))}`:""}</span><i></i><span class="${WH.stage==="dish"?"on":""}">${esc(whT("s2"))}</span>`+
    (WH.stage==="dish"?`<button type="button" class="wh-back" id="whBack">${esc(whT("back"))}</button>`:"");
  const b=$("whBack");if(b)b.onclick=()=>{if(!WH.spinning)whCountryStage()};
}
function whCountryStage(){
  WH.stage="country";WH.country=null;whResetRot();$("whResult").hidden=true;
  let cs=DATA.filter(c=>whDishes(c).length);
  WH.items=cs.map(c=>({ref:c,label:CN(c),color:c.color,emoji:c.flag,flagImg:FLAGS[c.id]||c.flagUrl||""}));
  whSteps();
  if(!cs.length){$("whWheel").innerHTML=`<circle r="160" fill="var(--surface-2)"/>`;$("whSpin").disabled=true;$("whMsg").textContent=whT("none");return}
  whDraw(WH.items);$("whSpin").disabled=cs.length<2;$("whMsg").textContent=whT("hintC")(cs.length);
  if(cs.length===1)whShowCountry(cs[0]);
}
function whDishStage(c){
  WH.stage="dish";WH.country=c;whResetRot();$("whResult").hidden=true;
  let ds=whDishes(c).slice();const mixH=(h,t,w)=>{const p=x=>parseInt(h.slice(x,x+2),16),q=x=>parseInt(t.slice(x,x+2),16);return "#"+[1,3,5].map(i=>Math.round(p(i)*(1-w)+q(i)*w).toString(16).padStart(2,"0")).join("")};
  const shades=[c.color,mixH(c.color,"#000000",.32),mixH(c.color,"#ffffff",.22)];
  if(ds.length>12){for(let i=ds.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[ds[i],ds[j]]=[ds[j],ds[i]]}ds.length=12}
  WH.items=ds.map((r,i)=>({ref:r,label:L(r,"title"),color:shades[ds.length%3===1&&i===ds.length-1&&i>0?1:i%(ds.length===2?2:3)],img:r.img||photoUrl(r.key),emoji:r.emoji||"🍽️"}));
  whSteps();
  if(ds.length===1){whDraw(WH.items.concat(WH.items));$("whSpin").disabled=true;$("whMsg").textContent=whT("only");whShowDish(ds[0]);return}
  whDraw(WH.items);$("whSpin").disabled=false;$("whMsg").textContent=whT("hintD")(CN(c),ds.length);
}
function whFilters(){
  const f=WH.f,b=k=>`<button type="button" data-f="${k}" aria-pressed="${f[k]}">${esc(whT(k))}</button>`;
  $("whFilters").innerHTML=b("fast")+b("easy")+b("veg");
  $("whFilters").querySelectorAll("button").forEach(x=>x.onclick=()=>{if(WH.spinning)return;f[x.dataset.f]=!f[x.dataset.f];x.setAttribute("aria-pressed",f[x.dataset.f]);
    if(WH.stage==="dish"&&WH.country&&whDishes(WH.country).length)whDishStage(WH.country);else whCountryStage()});
}
function whStatic(){$("whTitle").textContent=whT("title");$("whSpin").textContent=whT("spin");$("whClose").setAttribute("aria-label",whT("close"));$("wheelCtaT").textContent=whT("cta");$("wheelBtn").title=whT("btn");$("wheelBtn").setAttribute("aria-label",whT("btn"))}
function openWheel(){whStatic();whFilters();whCountryStage();$("whScrim").hidden=false;$("whModal").hidden=false;document.body.style.overflow="hidden";setTimeout(()=>$("whSpin").focus(),50)}
function closeWheel(){$("whScrim").hidden=true;$("whModal").hidden=true;document.body.style.overflow=""}
function whSpin(){
  if(WH.spinning||WH.items.length<2)return;
  const n=WH.items.length,a=360/n,idx=Math.random()*n|0,jit=(Math.random()-.5)*a*.6;
  const target=WH.rot-(((WH.rot%360)+360)%360)+360*6+(360-(idx*a+a/2))+jit;
  WH.rot=target;WH.spinning=true;$("whSpin").disabled=true;$("whResult").hidden=true;$("whMsg").textContent="…";
  $("whModal").querySelectorAll(".wh-filters button,.wh-back").forEach(x=>x.disabled=true);
  const w=$("whWheel");w.style.transform=`rotate(${target}deg)`;
  const done=()=>{if(!WH.spinning)return;WH.spinning=false;$("whSpin").disabled=false;$("whModal").querySelectorAll(".wh-filters button,.wh-back").forEach(x=>x.disabled=false);
    const it=WH.items[idx].ref;WH.stage==="country"?whShowCountry(it):whShowDish(it)};
  w.addEventListener("transitionend",done,{once:true});setTimeout(done,matchMedia("(prefers-reduced-motion: reduce)").matches?80:5600);
}
function whShowCountry(c){
  const n=whDishes(c).length;$("whMsg").textContent=whT("gotC")(CN(c));
  const box=$("whResult");
  box.innerHTML=`<div class="wh-rimg wh-flag">${FL(c,"big")}</div><div><small>${esc(whT("s1"))}</small><h3>${esc(CN(c))}</h3><p class="wh-sub">${esc(whT("dishes")(n))}</p><div class="wh-ract"><button type="button" class="go" id="whGo">${esc(whT("toDish"))}</button>${WH.items.length>1?`<button type="button" id="whAgain">${esc(whT("reC"))}</button>`:""}</div></div>`;
  box.hidden=false;$("whGo").onclick=()=>whDishStage(c);const ag=$("whAgain");if(ag)ag.onclick=()=>whSpin();
  if(typeof chefSay==="function"&&typeof voiceOn!=="undefined"&&voiceOn)chefSay(whT("gotC")(CN(c)));
}
function whShowDish(r){
  if(WH.items.length>1)$("whMsg").textContent=whT("pick");
  const box=$("whResult");
  box.innerHTML=`<div class="wh-rimg">${artHTML(r)}</div><div><small>${FL(r.country)} ${esc(CN(r.country))}</small><h3>${esc(L(r,"title"))}</h3><div class="meta"><span>${ICON_CLOCK}${esc(L(r,"time"))}</span><span>${ICON_BAR}${esc(LV(r.level))}</span>${r.kcal?`<span>🔥 ${r.kcal} kcal</span>`:""}</div><div class="wh-ract"><button type="button" class="go" id="whGo">${esc(whT("open"))}</button>${WH.items.length>1?`<button type="button" id="whAgain">${esc(whT("again"))}</button>`:""}</div></div>`;
  box.hidden=false;
  $("whGo").onclick=()=>{closeWheel();openSheet(r.key)};const ag=$("whAgain");if(ag)ag.onclick=()=>whSpin();
  if(typeof chefSay==="function"&&typeof voiceOn!=="undefined"&&voiceOn)chefSay((LANG==="en"?"Today: ":"Bugün: ")+L(r,"title"));
}
$("wheelBtn").onclick=openWheel;$("wheelCta").onclick=openWheel;$("whClose").onclick=closeWheel;$("whScrim").onclick=()=>{if(!WH.spinning)closeWheel()};
$("whSpin").onclick=whSpin;
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("whModal").hidden&&!WH.spinning)closeWheel()});
whStatic();


/* ---------- Arama önerileri ---------- */
const QS={items:[],idx:-1};
function qHi(text,q){const n=norm(text),i=n.indexOf(q);if(!q||i<0)return esc(text);return esc(text.slice(0,i))+"<mark>"+esc(text.slice(i,i+q.length))+"</mark>"+esc(text.slice(i+q.length))}
function qSuggest(){
  const raw=$("q").value.trim(),q=norm(raw),box=$("qSug"),en=LANG==="en";
  if(!q){qClose();return}
  const res=[];
  RECIPES.forEach(r=>{
    const title=L(r,"title"),nt=norm(title);let score=0,why="";
    if(nt.startsWith(q))score=100;else if(nt.split(/\s+/).some(w=>w.startsWith(q)))score=80;else if(nt.includes(q))score=60;
    else if(norm(r.title).includes(q))score=55;
    if(!score){const ing=L(r,"ing").find(x=>norm(x).includes(q));if(ing){score=40;why=(en?"Ingredient: ":"Malzeme: ")+ing}}
    if(!score&&norm(CN(r.country)).includes(q)){score=30;why=CN(r.country)}
    if(!score&&norm(L(r,"desc")).includes(q)){score=20;why=L(r,"desc")}
    if(score)res.push({r,score,why});
  });
  res.sort((a,b)=>b.score-a.score||L(a.r,"title").localeCompare(L(b.r,"title"),LANG));
  const cs=DATA.filter(c=>norm(CN(c)).includes(q)||norm(c.name).includes(q));
  QS.items=[];let h="";
  if(cs.length){h+=`<div class="q-h">${en?"Countries":"Ülkeler"}</div>`;cs.slice(0,3).forEach(c=>{const n=RECIPES.filter(r=>r.country.id===c.id).length;QS.items.push({type:"c",c});
    h+=`<button type="button" class="q-it" role="option" data-i="${QS.items.length-1}"><span class="q-img">${FL(c)}</span><span class="q-t"><b>${qHi(CN(c),q)}</b><small>${en?`${n} recipes`:`${n} tarif`}</small></span><span class="q-go">${en?"Filter":"Filtrele"} →</span></button>`})}
  if(res.length){h+=`<div class="q-h">${en?"Recipes":"Tarifler"}</div>`;res.slice(0,7).forEach(({r,why})=>{QS.items.push({type:"r",r});
    h+=`<button type="button" class="q-it" role="option" data-i="${QS.items.length-1}"><span class="q-img">${artHTML(r)}</span><span class="q-t"><b>${qHi(L(r,"title"),q)}</b><small>${why?qHi(why,q):`${FL(r.country)} ${esc(CN(r.country))} · ${esc(L(r,"time"))}`}</small></span></button>`})}
  if(!cs.length&&!res.length)h=`<div class="q-none">${en?`No results for “${esc(raw)}”. Try another dish or ingredient.`:`“${esc(raw)}” için sonuç yok. Başka bir yemek ya da malzeme dene.`}</div>`;
  else if(res.length>1){QS.items.push({type:"all"});h+=`<button type="button" class="q-all" role="option" data-i="${QS.items.length-1}">${en?`Show all ${res.length} results ↓`:`${res.length} sonucun hepsini göster ↓`}</button>`}
  box.innerHTML=h;box.hidden=false;$("q").setAttribute("aria-expanded","true");QS.idx=-1;
  box.querySelectorAll("[data-i]").forEach(b=>{b.onmousedown=e=>e.preventDefault();b.onclick=()=>qPick(+b.dataset.i)});
}
function qMark(){$("qSug").querySelectorAll("[data-i]").forEach(b=>{const on=+b.dataset.i===QS.idx;b.setAttribute("aria-selected",on);if(on)b.scrollIntoView({block:"nearest"})})}
function qClose(){const b=$("qSug");b.hidden=true;b.innerHTML="";$("q").setAttribute("aria-expanded","false");QS.items=[];QS.idx=-1}
function qPick(i){
  const it=QS.items[i];if(!it)return;
  if(it.type==="r"){qClose();$("q").blur();openSheet(it.r.key)}
  else if(it.type==="c"){$("q").value="";state.q="";qClose();renderGrid();const ch=document.querySelector(`.chip[data-id="${it.c.id}"]`);if(ch)ch.click();$("count").scrollIntoView({behavior:"smooth",block:"start"})}
  else{qClose();$("q").blur();$("count").scrollIntoView({behavior:"smooth",block:"start"})}
}
$("q").addEventListener("input",qSuggest);
$("q").addEventListener("focus",()=>{if($("q").value.trim())qSuggest()});
$("q").addEventListener("blur",()=>setTimeout(()=>{if(document.activeElement!==$("q"))qClose()},120));
$("q").addEventListener("keydown",e=>{
  const n=QS.items.length;if($("qSug").hidden)return;
  if(e.key==="ArrowDown"){e.preventDefault();QS.idx=(QS.idx+1)%n;qMark()}
  else if(e.key==="ArrowUp"){e.preventDefault();QS.idx=(QS.idx-1+n)%n;qMark()}
  else if(e.key==="Enter"){e.preventDefault();qPick(QS.idx>=0?QS.idx:QS.items.findIndex(x=>x.type==="r")>=0&&QS.items.filter(x=>x.type==="r").length===1?QS.items.findIndex(x=>x.type==="r"):QS.items.length-1)}
  else if(e.key==="Escape"){e.stopPropagation();qClose()}
});



/* ---------- Wikibooks paneli ---------- */
const mdT=k=>({tr:{title:"📖 Wikibooks tarifleri",desc:"Wikibooks Cookbook’taki dünya mutfaklarından tarifler yukarıdaki listeye senin tariflerin gibi eklenir: ülke filtresinde, aramada, favorilerde, “Elimde ne var?” bölümünde, pişirme modunda ve yemek çarkında görünür. İçerikleri İngilizcedir.",
  show:"📋 Sadece Wikibooks tariflerini göster",showAll:"↩ Tüm tarifleri göster",
  status:(n,c)=>`${n} Wikibooks tarifi, ${c} mutfaktan, bu sayfanın içinde; internet olmadan da listelenir (fotoğraflar için internet gerekir).`,
  note:"Tarif metinleri Wikibooks yazarlarına aittir ve CC BY-SA 4.0 lisansıyla paylaşılır; her tarifin “Hikâyesi” sekmesinde kaynak bağlantısı ve fotoğraf bilgisi bulunur."},
 en:{title:"📖 Wikibooks recipes",desc:"Recipes from world cuisines in the Wikibooks Cookbook are added to the list above just like your own: in the country filter, search, favourites, “What’s in my kitchen?”, cooking mode and the food wheel.",
  show:"📋 Show only Wikibooks recipes",showAll:"↩ Show all recipes",
  status:(n,c)=>`${n} Wikibooks recipes from ${c} cuisines are embedded in this page and listed even offline (photos need internet).`,
  note:"Recipe texts belong to the Wikibooks authors and are shared under CC BY-SA 4.0; each recipe’s “Story” tab links to its source and photo credit."}})[LANG==="en"?"en":"tr"][k];
function mdbStatic(){
  const n=MDB_INFO.count,cn=new Set(RECIPES.filter(r=>r.src==="wb").map(r=>r.country.id)).size;
  $("mdbTitle").textContent=mdT("title");$("mdbDesc").textContent=mdT("desc");$("mdbShow").textContent=state.srcOnly?mdT("showAll"):mdT("show");
  $("mdbNote").textContent=mdT("note");$("mdbStatus").textContent=n?mdT("status")(n,cn):"";$("mdbShow").hidden=!n;
}
$("mdbShow").onclick=()=>{state.srcOnly=!state.srcOnly;mdbStatic();renderGrid();$("count").scrollIntoView({behavior:"smooth",block:"start"})};
mdbStatic();

/* Formlar: önizleme/sandbox ortamlarında form "submit" engellenebiliyor; butonları ve Enter tuşunu doğrudan bağla */
(function(){
  const fake=f=>({preventDefault(){},stopPropagation(){},target:f,currentTarget:f});
  document.querySelectorAll("form").forEach(f=>{
    const run=()=>{if(typeof f.onsubmit==="function")f.onsubmit(fake(f))};
    f.querySelectorAll('button[type="submit"]').forEach(b=>{b.type="button";b.addEventListener("click",run)});
    f.addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.isComposing&&e.target.tagName==="INPUT"&&e.target.type!=="checkbox"){e.preventDefault();run()}});
  });
})();
