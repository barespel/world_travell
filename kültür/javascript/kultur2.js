// Global değişkenleri tanımla
window.cities = [
{
name: "Adana",
image: "../../images/adana.jpeg",
description: "M.Ö. 6000 yılına uzanan tarihi ile Anadolu'nun en eski yerleşim yerlerinden biri.",
history: "Adana, Hitit, Asur, Pers, Roma ve Osmanlı medeniyetlerine ev sahipliği yapmıştır.",
categories: ["Müzeler", "Tarihi Yerler", "Doğal Güzellikler", "Kültürel Etkinlikler"],
foods: ["Adana Kebap", "Şalgam", "Bici Bici"]
},
{
name: "Adıyaman",
image: "../../images/adiyaman.jpg",
description: "Nemrut Dağı ve tarihi zenginlikleriyle ünlü şehir.",
history: "Kommagene Krallığı'na başkentlik yapmış olan Adıyaman, Nemrut Dağı'ndaki dev heykelleriyle UNESCO Dünya Mirası listesindedir.",
categories: ["Nemrut Dağı", "Tarihi Yerler", "Müzeler"],
foods: ["Çiğ Köfte", "İçli Köfte", "Besni Tava"]
},
{
name: "Afyonkarahisar",
image: "../../images/afyonkarahisar.jpg",
description: "Termal kaynakları ve tarihi dokusuyla öne çıkan şehir.",
history: "Frigya'dan günümüze uzanan zengin geçmişiyle Anadolu'nun önemli kavşak noktalarından biridir.",
categories: ["Kaleler", "Kaplıcalar", "Tarihi Camiler"],
foods: ["Kaymaklı Ekmek Kadayıfı", "Sucuk", "Afyon Lokumu"]
},
{
name: "Ağrı",
image: "../../images/agri.jpg",
description: "Türkiye'nin en yüksek dağına ev sahipliği yapan şehir.",
history: "Tarih boyunca Urartular, Persler ve Osmanlılar tarafından yerleşim yeri olarak kullanılmıştır.",
categories: ["Ağrı Dağı", "Tarihi Yerler", "Doğal Güzellikler"],
foods: ["Abdigör Köftesi", "Haşıl", "Ağrı Ketesi"]
},
{
name: "Aksaray",
image: "../../images/aksaray.jpg",
description: "Kapadokya'nın giriş kapısı olan tarihi şehir.",
history: "Roma ve Bizans dönemlerinde önemli bir yerleşim olan şehir, Selçuklu döneminde de büyük gelişme göstermiştir.",
categories: ["Vadiler", "Kervansaraylar", "Tarihi Yapılar"],
foods: ["Aksaray Tava", "Soğanlama", "Katmer"]
},
{
name: "Amasya",
image: "../../images/amasya.jpg",
description: "Yeşilırmak kıyısında kurulu, Osmanlı şehzadelerinin eğitim aldığı şehir.",
history: "Hitit, Pontus, Roma ve Osmanlı izleri taşıyan tarihiyle dikkat çeker.",
categories: ["Kaya Mezarları", "Kaleler", "Osmanlı Evleri"],
foods: ["Amasya Çöreği", "Bamya Çorbası", "Toyga Çorbası"]
},
{
name: "Ankara",
image: "../../images/ankara.jpg",
description: "Türkiye'nin başkenti, zengin tarihi ve kültürel mirasıyla dikkat çeker.",
history: "Hitit, Frig, Galat, Roma ve Osmanlı dönemlerine tanıklık etmiştir.",
categories: ["Müzeler", "Tarihi Yerler", "Modern Yapılar", "Kültürel Merkezler"],
foods: ["Ankara Tava", "Beypazarı Kurusu", "Çubuk Turşusu"]
},
{
name: "Antalya",
image: "../../images/antalya.jpg",
description: "Roma, Bizans ve Osmanlı dönemlerinin izlerini taşıyan Akdeniz'in incisi.",
history: "M.Ö. 200 yılında Bergama Kralı II. Attalos tarafından kurulmuştur.",
categories: ["Antik Kentler", "Doğal Güzellikler", "Müzeler"],
foods: ["Hibeş", "Gökçesu Pilavı", "Enginarlı Girit Kebabı"]
},
{
name: "Artvin",
image: "../../images/artvin.jpg",
description: "Yeşil doğası ve yüksek dağlarıyla ünlü şehir.",
history: "Gürcü Krallığı, Bizans ve Osmanlı dönemlerinde önemli bir sınır kentiydi.",
categories: ["Doğal Güzellikler", "Kaleler", "Yaylalar"],
foods: ["Kuymak", "Laz Böreği", "Mısır Ekmeği"]
},
{
name: "Aydın",
image: "../../images/aydin.jpg",
description: "Ege'nin bereketli topraklarında kurulu antik şehir.",
history: "İyonya'nın en önemli kentlerinden biri olan Aydın, antik çağlardan bu yana önemli bir yerleşim yeridir.",
categories: ["Antik Kentler", "Müzeler", "Kültürel Alanlar"],
foods: ["Çingene Pilavı", "Aydın Kebabı", "Keşkek"]
},
{
name: "Balıkesir",
image: "../../images/balikesir.jpg",
description: "Marmara ve Ege'nin kesişiminde, tarihi M.Ö. 3000'lere dayanan şehir.",
history: "Lidya, Pers, Roma ve Osmanlı dönemlerine ev sahipliği yapmış, antik Mysia bölgesinde yer alır.",
categories: ["Tarihi Yerler", "Doğal Güzellikler", "Müzeler"],
foods: ["Höşmerim", "Tirit", "Zeytinyağlı Börülce"]
},
{
name: "Bartın",
image: "../../images/bartin.jpg",
description: "Karadeniz kıyısında yer alan, doğası ve ahşap evleriyle bilinen şehir.",
history: "Roma ve Bizans dönemlerinde önemli bir liman kenti olan Amastris'e ev sahipliği yapar.",
categories: ["Doğal Güzellikler", "Tarihi Evler", "Plajlar"],
foods: ["Pumpum Çorbası", "Bartın Usulü Etli Dolma", "Cevizli Börek"]
},
{
name: "Batman",
image: "../../images/batman.jpg",
description: "Hasankeyf gibi antik bir mirasa ev sahipliği yapan Güneydoğu şehri.",
history: "Hasankeyf, M.Ö. 1800'lerden bu yana yerleşim görmüş, Artuklu ve Eyyubi dönemlerinde gelişmiştir.",
categories: ["Antik Kentler", "Tarihi Yapılar", "Nehir Kenarları"],
foods: ["Perde Pilavı", "İçli Köfte", "Kürt Böreği"]
},
{
name: "Bayburt",
image: "../../images/bayburt.jpg",
description: "Tarihi İpek Yolu üzerinde yer alan, kaleleriyle ünlü Anadolu şehri.",
history: "Urartu, Roma ve Osmanlı dönemlerinde askeri ve ticari öneme sahip olmuştur.",
categories: ["Kaleler", "Doğal Güzellikler", "Müzeler"],
foods: ["Tatlı Çorbası", "Lor Dolması", "Süt Böreği"]
},
{
name: "Bilecik",
image: "../../images/bilecik.jpg",
description: "Osmanlı Devleti'nin kurulduğu topraklar.",
history: "Söğüt, Osman Gazi'nin beylik kurduğu yer olarak Osmanlı tarihinin başlangıç noktasıdır.",
categories: ["Tarihi Yerler", "Osmanlı Mirası", "Türbeler"],
foods: ["Bilecik Güveci", "Kaldırık Dolması", "Ovmaç Çorbası"]
},
{
name: "Bingöl",
image: "../../images/bingol.jpg",
description: "Doğal gölleriyle ve dağlarıyla tanınan Doğu Anadolu şehri.",
history: "Hititler, Urartular ve Persler döneminde stratejik bir konumda yer almıştır.",
categories: ["Dağlar", "Doğal Göller", "Kaplıcalar"],
foods: ["Keşkek", "Glorik", "Çorti Aşı"]
},
{
name: "Bitlis",
image: "../../images/bitlis.jpg",
description: "Tarihi kaleleri ve Van Gölü'ne yakınlığıyla bilinen şehir.",
history: "Urartulardan Osmanlılara kadar birçok medeniyete ev sahipliği yapmıştır.",
categories: ["Kaleler", "Camiler", "Doğal Güzellikler"],
foods: ["Bitlis Köftesi", "Büryan Kebabı", "Ciğer Taplaması"]
},
{
name: "Bolu",
image: "../../images/bolu.jpg",
description: "Doğal güzellikleriyle ünlü Batı Karadeniz şehri.",
history: "Bitinya Krallığı, Roma ve Osmanlı dönemlerinden izler taşır.",
categories: ["Yaylalar", "Göller", "Doğa Parkları"],
foods: ["Kabaklı Gözleme", "Abant Kebabı", "Mengen Pilavı"]
},
{
name: "Burdur",
image: "../../images/burdur.jpg",
description: "Tarihi Sagalassos antik kentiyle tanınır.",
history: "Pisidia bölgesinin önemli kentlerinden biri olan Sagalassos'a ev sahipliği yapar.",
categories: ["Antik Kentler", "Göller", "Müzeler"],
foods: ["Burdur Şiş", "Keşkek", "Burdur Usulü Kabak Tatlısı"]
},
{
name: "Bursa",
image: "../../images/bursa.jpg",
description: "Osmanlı'nın ilk başkenti, zengin tarihi ve yeşil doğasıyla tanınır.",
history: "1326'da Osmanlı'nın başkenti olan şehir, tarihi hanlar, camiler ve hamamlarıyla ünlüdür.",
categories: ["Osmanlı Eserleri", "Doğal Güzellikler", "Tarihi Camiler"],
foods: ["İskender Kebap", "Kemalpaşa Tatlısı", "Cantık"]
},
{
name: "Çorum",
image: "../../images/corum.jpg",
description: "Hitit medeniyetinin merkezi, arkeolojik zenginliğiyle öne çıkar.",
history: "Anadolu'nun ilk organize devleti olan Hititler'in başkenti Hattuşa bu şehir sınırları içindedir.",
categories: ["Antik Kentler", "Müzeler", "Tarihi Yerler"],
foods: ["Çorum Leblebisi", "İskilip Dolması", "Katmer"]
},
{
name: "Denizli",
image: "../../images/denizli.jpg",
description: "Pamukkale Travertenleri ve antik kentleriyle tanınan şehir.",
history: "Hierapolis antik kentiyle birlikte Roma döneminden kalma birçok esere sahiptir.",
categories: ["Antik Kentler", "Doğal Güzellikler", "Kaplıcalar"],
foods: ["Tandır Kebabı", "Kuyu Kebabı", "Denizli Tandır Böreği"]
},
{
name: "Diyarbakır",
image: "../../images/diyarbakir.jpg",
description: "Binlerce yıllık surlarıyla tarihi bir kent.",
history: "Asur, Roma, Bizans ve Osmanlı dönemlerine ait çok sayıda yapı ve sur barındırır.",
categories: ["Tarihi Yerler", "Camiler", "Kültürel Miras"],
foods: ["Ciğer Kebabı", "Meftune", "Kaburga Dolması"]
},
{
name: "Düzce",
image: "../../images/duzce.jpg",
description: "Karadeniz'in doğası ile Marmara'nın geçişinde bir yeşil cennet.",
history: "Bitinya, Roma ve Osmanlı dönemlerinde önemli yerleşimlerden biri olmuştur.",
categories: ["Doğal Güzellikler", "Şelaleler", "Yaylalar"],
foods: ["Düzce Köftesi", "Kaldırık Dolması", "Lahana Sarması"]
},
{
name: "Edirne",
image: "../../images/edirne.jpg",
description: "Osmanlı'nın ikinci başkenti, mimari ve kültürel mirasıyla ünlü.",
history: "1361-1453 yılları arasında Osmanlı'ya başkentlik yapmış; Selimiye Camii gibi anıtsal yapılara sahiptir.",
categories: ["Osmanlı Eserleri", "Camiler", "Müzeler"],
foods: ["Edirne Tava Ciğeri", "Badem Ezmesi", "Zerde"]
},
{
name: "Elazığ",
image: "../../images/elazig.jpg",
description: "Harput Kalesi ve zengin folkloru ile tanınır.",
history: "Tarihi Harput yerleşimi, Urartulardan Osmanlılara kadar birçok medeniyete ev sahipliği yapmıştır.",
categories: ["Kaleler", "Tarihi Yerler", "Kültürel Miras"],
foods: ["Harput Köftesi", "İçli Köfte", "Pestil-Kömbe"]
},
{
name: "Erzincan",
image: "../../images/erzincan.jpg",
description: "Doğu Anadolu'nun doğal güzellikleriyle öne çıkan ili.",
history: "Tarihi İpek Yolu güzergahında yer alır; Roma, Selçuklu ve Osmanlı izleri taşır.",
categories: ["Dağlar", "Doğal Güzellikler", "Tarihi Kalıntılar"],
foods: ["Erzincan Tulum Peyniri", "Etli Ekmek", "Kesme Çorba"]
},
{
name: "Erzurum",
image: "../../images/erzurum.jpg",
description: "Anadolu'nun yüksek platosunda, tarihi ve kış turizmiyle bilinir.",
history: "Tarihi Erzurum Kongresi ve Selçuklu mimarisiyle önemli bir kültür merkezidir.",
categories: ["Kış Sporları", "Selçuklu Eserleri", "Camiler"],
foods: ["Cağ Kebabı", "Kadayıf Dolması", "Su Böreği"]
},
{
name: "Eskişehir",
image: "../../images/eskisehir.jpg",
description: "Modern yaşamı ve tarihi mirası birleştiren şehir.",
history: "Frig, Roma ve Osmanlı dönemlerinden kalma eserleriyle dikkat çeker.",
categories: ["Modern Yapılar", "Tarihi Yerler", "Müzeler"],
foods: ["Çibörek", "Balaban Kebabı", "Met Helvası"]
},
{
name: "Gaziantep",
image: "../../images/gaziantep.jpg",
description: "UNESCO gastronomi kenti, binlerce yıllık kültürel mirasa sahip.",
history: "Hititlerden Osmanlıya kadar birçok uygarlığa ev sahipliği yapmıştır.",
categories: ["Müzeler", "Tarihi Yerler", "Kültürel Miras"],
foods: ["Baklava", "Lahmacun", "Yuvalama"]
},
{
name: "Giresun",
image: "../../images/giresun.jpg",
description: "Fındığın anavatanı, yeşil doğası ve adasıyla ünlü Karadeniz şehri.",
history: "Antik dönemde Kerasous adıyla bilinen şehir, Roma ve Bizans dönemlerinde de önemli bir liman kentiydi.",
categories: ["Doğal Güzellikler", "Tarihi Yerler", "Adalar"],
foods: ["Fındık Ezmesi", "Karalahana Çorbası", "Mısır Ekmeği"]
},
{
name: "Gümüşhane",
image: "../../images/gumushane.jpg",
description: "Dağlık yapısı, yaylaları ve tarihi mağaralarıyla dikkat çeker.",
history: "Roma, Bizans ve Selçuklu dönemlerinden kalma kaleler ve yerleşimlerle tarihi bir zenginlik sunar.",
categories: ["Tarihi Kaleler", "Yaylalar", "Mağaralar"],
foods: ["Siron", "Pestil", "Kuymak"]
},
{
name: "Hakkari",
image: "../../images/hakkari.jpg",
description: "Yüksek dağlar ve derin vadilerle çevrili Doğu Anadolu şehri.",
history: "Urartular, Asurlular ve Osmanlı dönemlerinden izler taşır, dağlık yapısı kültürel çeşitliliği korur.",
categories: ["Doğal Güzellikler", "Dağlar", "Tarihi Yerler"],
foods: ["Doğaba", "Kepaye", "Ciğer Kebabı"]
},
{
name: "Hatay",
image: "../../images/hatay.jpg",
description: "Medeniyetler beşiği, farklı dinlerin ve kültürlerin yaşadığı şehir.",
history: "Antakya, Roma döneminde dünyanın en büyük şehirlerinden biriydi. Hristiyanlığın ilk yayıldığı yerlerden biridir.",
categories: ["Mozaik Müzeleri", "Dini Yapılar", "Tarihi Yerler"],
foods: ["Tepsi Kebabı", "Künefe", "Oruk"]
},
{
name: "ığdır",
image: "../../images/igdir.jpg",
description: "Ağrı Dağı'nın eteklerinde, üç ülkeye sınırı olan doğu şehri.",
history: "Urartu, Pers ve Osmanlı dönemlerinde sınır kenti olarak önem kazanmıştır.",
categories: ["Dağlar", "Tarihi Yerler", "Doğal Alanlar"],
foods: ["Ağrı Pilavı", "Katıklı Dolma", "Şalgam Aşı"]
},
{
name: "ısparta",
image: "../../images/isparta.jpg",
description: "Gül diyarı olarak bilinen, doğal güzellikleriyle tanınan Akdeniz şehri.",
history: "Pisidia bölgesinin önemli şehirlerinden biri olan Isparta, Bizans ve Selçuklu izleri taşır.",
categories: ["Göller", "Müzeler", "Tarihi Yerler"],
foods: ["Kabune Pilavı", "Yalvaç Güveci", "Gül Reçeli"]
},
{
name: "istanbul",
image: "../../images/istanbul.jpg",
description: "Üç imparatorluğa başkentlik yapmış, dünyanın en önemli metropollerinden biri.",
history: "Byzantion, Konstantinopolis ve İstanbul adıyla Roma, Bizans ve Osmanlı'ya başkentlik yapmıştır.",
categories: ["Saraylar", "Müzeler", "Tarihi Camiler", "Antik Yapılar"],
foods: ["Simit", "Islak Hamburger", "Balık Ekmek"]
},
{
name: "izmir",
image: "../../images/izmir2.jpg",
description: "Ege'nin incisi, tarih ve modernliğin buluştuğu şehir.",
history: "Antik dönemde Smyrna olarak bilinen İzmir, İyonya uygarlıklarının önemli bir liman kentiydi.",
categories: ["Antik Kentler", "Müzeler", "Tarihi Yerler"],
foods: ["Boyoz", "Kumru", "Söğüş"]
},
{
name: "Kahramanmaraş",
image: "../../images/kahramanmaras.jpg",
description: "Dondurması ve tarihi kaleleriyle meşhur Akdeniz şehri.",
history: "Hitit, Roma ve Osmanlı dönemlerine ait eserler barındırır. Kurtuluş Savaşı'nda gösterdiği kahramanlıkla 'Kahraman' unvanı almıştır.",
categories: ["Kaleler", "Tarihi Yerler", "Kültürel Miras"],
foods: ["Maraş Dondurması", "Eli Böğründe", "Tarhana"]
},
{
name: "Karabük",
image: "../../images/karabuk.jpg",
description: "Safranbolu evleriyle UNESCO mirası listesindeki şehir.",
history: "Osmanlı sivil mimarisinin en güzel örnekleriyle dolu Safranbolu ilçesiyle ünlüdür.",
categories: ["UNESCO Mirası", "Tarihi Evler", "Müzeler"],
foods: ["Safranlı Zerde", "Etli Ekmek", "Peruhi"]
},
{
name: "Karaman",
image: "../../images/karaman.jpg",
description: "Türkçenin resmi dil ilan edildiği kadim şehir.",
history: "Karamanoğulları Beyliği'nin başkenti olan Karaman, Türkçeyi ilk kez resmi dil yapan yönetim olarak tarih sahnesinde önemli yer tutar.",
categories: ["Tarihi Yerler", "Selçuklu Eserleri", "Kale ve Medreseler"],
foods: ["Batırık", "Tahinli Pide", "Calla Yemeği"]
},
{
name: "Kars",
image: "../../images/kars.jpg",
description: "Ani Harabeleri ile tarihî ve kültürel mirasa sahip doğu şehri.",
history: "Ermeni Bagratlı Krallığı'na başkentlik yapmış Ani Antik Kenti, Kars'ın tarihî önemini gözler önüne serer.",
categories: ["Antik Kentler", "Tarihi Kaleler", "Kış Turizmi"],
foods: ["Kaz Eti", "Hangel", "Umaç Helvası"]
},
{
name: "Kastamonu",
image: "../../images/kastamonu.jpg",
description: "Tarihi konakları, kaleleri ve kültürel mirasıyla Karadeniz'in tarihi şehri.",
history: "Tarihi Bizans ve Selçuklu dönemlerine uzanan Kastamonu, Osmanlı'dan kalma birçok eserle zengindir.",
categories: ["Tarihi Konaklar", "Kale ve Camiler", "Müzeler"],
foods: ["Etli Ekmek", "Banduma", "Cırık Tatlısı"]
},
{
name: "Kayseri",
image: "../../images/kayseri.jpg",
description: "Erciyes Dağı eteklerinde yer alan ticaretin ve lezzetin merkezi.",
history: "Mazaka adıyla bilinen Kayseri, Roma, Bizans ve Selçuklu dönemlerinde önemli ticaret merkezidir.",
categories: ["Dağ Sporları", "Tarihi Çarşılar", "Kervansaraylar"],
foods: ["Pastırma", "Mantı", "Sucuk"]
},
{
name: "Kırıkkale",
image: "../../images/kirikkale.jpg",
description: "Anadolu'nun ortasında yer alan genç şehir.",
history: "Cumhuriyet döneminde gelişen bir sanayi şehri olan Kırıkkale, Türkiye'nin silah sanayisinde öncü şehirlerinden biridir.",
categories: ["Modern Yapılar", "Müzeler", "Doğa Alanları"],
foods: ["Tandır", "Tarhana Çorbası", "Madımak"]
},
{
name: "Kırklareli",
image: "../../images/kirklareli.jpg",
description: "Trakya'nın kültür ve doğa cenneti, mağaraları ve longoz ormanlarıyla ünlü.",
history: "Traklar, Roma ve Osmanlı dönemine ait pek çok tarihi kalıntıya ev sahipliği yapar.",
categories: ["Longoz Ormanları", "Tarihi Yerler", "Doğa Yürüyüşü Alanları"],
foods: ["Papara", "Kuzu Etli Kuru Fasulye", "Peynir Helvası"]
},
{
name: "Kırşehir",
image: "../../images/kirsehir.jpg",
description: "Ahi Evran ve Neşet Ertaş'ın memleketi, Anadolu'nun kalbinde kültür şehri.",
history: "Kırşehir, Selçuklu ve Osmanlı dönemlerinde kültür ve eğitim merkezi olmuştur. Ahi Evran ve Türk halk müziği ustası Neşet Ertaş bu topraklarda yetişmiştir.",
categories: ["Tarihi Yerler", "Kültürel Miras", "Müzeler"],
foods: ["Çullama", "Seyfe Kavurması", "Soğan Dolması"]
},
{
name: "Kilis",
image: "../../images/kilis.jpg",
description: "Güneydoğu'nun küçük ama tarihi zengin şehirlerinden biri.",
history: "Kilis, Roma ve Bizans dönemlerinden Osmanlı'ya kadar çeşitli medeniyetlerin izlerini taşır. Aynı zamanda Suriye ile olan kültürel bağıyla dikkat çeker.",
categories: ["Tarihi Evler", "Kiliseler", "Kale Kalıntıları"],
foods: ["Kilis Tava", "Oruk", "Lebeniye Çorbası"]
},
{
name: "Kocaeli",
image: "../../images/kocaeli.jpg",
description: "Sanayi ve doğanın buluştuğu Marmara'nın kalbi.",
history: "Roma döneminden beri yerleşim yeri olan Kocaeli, Osmanlı zamanında önemli liman kentlerinden biri olmuştur.",
categories: ["Sanayi Müzeleri", "Doğa Parkları", "Sahil Yürüyüş Alanları"],
foods: ["Pişmaniye", "Kocaeli Simidi", "Cızlak"]
},
{
name: "Konya",
image: "../../images/konya.jpg",
description: "Mevlana'nın şehri, Selçuklu'nun başkenti.",
history: "Konya, Anadolu Selçuklu Devleti'nin başkentidir. Mevlana Celaleddin Rumi'nin türbesi burada yer alır. Binlerce yıllık geçmişiyle tarih kokan bir şehirdir.",
categories: ["Selçuklu Eserleri", "Mevlana Türbesi", "Antik Yerleşimler"],
foods: ["Etli Ekmek", "Bamya Çorbası", "Tirit"]
},
{
name: "Kütahya",
image: "../../images/kutahya.jpg",
description: "Çini ve seramiğiyle ünlü sanat ve tarih şehri.",
history: "Frigler, Roma ve Osmanlı dönemlerinde önemli bir yerleşim yeri olan Kütahya, özellikle çiniciliğiyle tanınır.",
categories: ["Çini Müzeleri", "Kale ve Camiler", "Tarihi Konaklar"],
foods: ["Tavuk Göğsü", "Sıkıcık Çorbası", "Dolamber Böreği"]
},
{
name: "Malatya",
image: "../../images/malatya.jpg",
description: "Kayısısıyla ünlü, tarih ve doğanın buluştuğu şehir.",
history: "Malatya, Hititler'den günümüze birçok medeniyetin izlerini taşır. Eski Malatya'da yer alan Arslantepe Höyüğü UNESCO miras listesinde yer alır.",
categories: ["Höyükler", "Kale ve Camiler", "Doğa Alanları"],
foods: ["Kağıt Kebabı", "Analı Kızlı", "Kayısılı Tatlılar"]
},
{
name: "Manisa",
image: "../../images/manisa.jpg",
description: "Sultan camileri, mesir macunu ve Spil Dağı ile ünlü tarihi şehir.",
history: "Manisa, antik çağlarda Magnesia adıyla anılmıştır. Osmanlı döneminde şehzadelerin eğitim gördüğü önemli bir merkez olmuştur.",
categories: ["Tarihi Camiler", "Doğal Güzellikler", "Müzeler"],
foods: ["Manisa Kebabı", "Mesir Macunu", "Simit Tatlısı"]
},
{
name: "Kahramanmaraş",
image: "../../images/kahramanmaras.jpg",
description: "Dondurması, tarihi çarşıları ve Kurtuluş Savaşı'ndaki kahramanlığıyla tanınır.",
history: "Roma, Bizans ve Osmanlı dönemlerinde önemli bir yerleşim olan şehir, Kurtuluş Savaşı'nda gösterdiği direnişle 'Kahraman' unvanını almıştır.",
categories: ["Tarihi Çarşılar", "Müzeler", "Milli Mücadele Alanları"],
foods: ["Maraş Dondurması", "Eli Böğründe", "Maraş Çöreği"]
},
{
name: "Mardin",
image: "../../images/mardin.jpg",
description: "Taş evleri, dinler ve diller mozaiğiyle büyüleyici bir şehir.",
history: "Süryani, Arap, Kürt ve Türk kültürlerinin iç içe geçtiği Mardin, Mezopotamya'nın kuzeyinde binlerce yıllık bir tarihe sahiptir.",
categories: ["Tarihi Taş Evler", "Manastırlar", "Tarihi Camiler"],
foods: ["Kaburga Dolması", "İkbebet", "Sembusek"]
},
{
name: "Muğla",
image: "../../images/mugla.jpg",
description: "Bodrum, Fethiye ve Marmaris gibi sahil cennetlerine ev sahipliği yapan şehir.",
history: "Karya, Likya ve Roma dönemlerinde önemli liman şehirlerine sahip olan Muğla, Osmanlı döneminde de idari merkez olmuştur.",
categories: ["Antik Kentler", "Sahil Kasabaları", "Doğal Güzellikler"],
foods: ["Çökertme Kebabı", "Keşkek", "Sura"]
},
{
name: "Muş",
image: "../../images/mus.jpg",
description: "Bahar aylarında açan laleleriyle bilinen, tarihi zenginliğe sahip doğu şehri.",
history: "Urartu, Bizans ve Selçuklu izleri taşıyan Muş, Osmanlı döneminde de önemli bir kale ve yerleşim yeri olmuştur.",
categories: ["Kale Kalıntıları", "Doğal Alanlar", "Tarihi Camiler"],
foods: ["Muş Köftesi", "Herise", "Çorti"]
},
{
name: "Nevşehir",
image: "../../images/nevsehir.jpg",
description: "Kapadokya'nın kalbi, peri bacaları ve yer altı şehirleriyle eşsiz bir doğa harikası.",
history: "Kapadokya bölgesi içerisinde yer alan Nevşehir, Paleolitik Çağ'dan itibaren birçok uygarlığa ev sahipliği yapmıştır. Hristiyanlık döneminde önemli bir sığınak olmuştur.",
categories: ["Peri Bacaları", "Yer Altı Şehirleri", "Açık Hava Müzeleri"],
foods: ["Testi Kebabı", "Düğü Çorbası", "Soğanlama"]
},

{
name: "Niğde",
image: "../../images/nigde.jpg",
description: "Tarihi kaleleri ve doğal güzellikleriyle İç Anadolu'nun gizli hazinesi.",
history: "Niğde, Hititlerden Osmanlılara kadar birçok medeniyete ev sahipliği yapmıştır. Eski adı Nakita olan şehir, Orta Çağ'da önemli bir ticaret merkeziydi.",
categories: ["Tarihi Kaleler", "Doğal Alanlar", "Antik Yerleşimler"],
foods: ["Niğde Tava", "Kaygana", "Soğan Dolması"]
},
{
name: "Ordu",
image: "../../images/ordu.jpg",
description: "Karadeniz'in huzur veren doğası, fındığı ve yaylalarıyla ünlü şehir.",
history: "Ordu, antik çağda Cotyora olarak biliniyordu. Osmanlı döneminde önemli bir liman kenti haline gelmiştir.",
categories: ["Yaylalar", "Kıyı Alanları", "Tarihi Kaleler"],
foods: ["Mısır Ekmeği", "Fasulye Diblesi", "Melocan Kavurması"]
},
{
name: "Osmaniye",
image: "../../images/osmaniye.jpg",
description: "Çukurova'nın verimli topraklarında kurulmuş, kaleleriyle ünlü genç il.",
history: "Osmaniye, Roma döneminden bu yana yerleşim görmüş, 1996 yılında il statüsü kazanmıştır. Anavarza ve Kastabala gibi antik kentlere ev sahipliği yapar.",
categories: ["Antik Kentler", "Tarihi Kaleler", "Doğal Güzellikler"],
foods: ["Kömbe", "Etli Köfte", "Yüksük Çorbası"]
},
{
name: "Rize",
image: "../../images/rize.jpg",
description: "Çayın başkenti, yemyeşil yaylaları ve hırçın dereleriyle Karadeniz'in incisi.",
history: "Antik çağlarda Rhizos olarak bilinen şehir, Bizans ve Osmanlı dönemlerinde önemli bir kıyı yerleşimi olmuştur. Doğu Karadeniz'in kültürel merkezlerinden biridir.",
categories: ["Yaylalar", "Çay Bahçeleri", "Doğal Güzellikler"],
foods: ["Muhlama", "Hamsili Pilav", "Laz Böreği"]
},
{
name: "Sakarya",
image: "../../images/sakarya.jpg",
description: "Doğal güzellikleri, gölleri ve Karasu sahili ile Marmara'nın gözde şehirlerinden.",
history: "Sakarya, tarih boyunca Bitinya, Roma ve Osmanlı gibi medeniyetlerin etkisinde kalmış, 1999'daki büyük depremle yeniden yapılanmaya başlamıştır.",
categories: ["Göller", "Sahil", "Tarihi Yerler"],
foods: ["Islama Köfte", "Kabuklu Pilav", "Ayran Aşı"]
},
{
name: "Samsun",
image: "../../images/samsun.jpg",
description: "Karadeniz'in önemli liman kenti, Kurtuluş Savaşı'nın başladığı şehir.",
history: "M.Ö. 600'lü yıllarda kurulan Amisos antik kenti üzerine kurulu olan Samsun, 19 Mayıs 1919'da Atatürk'ün Samsun'a çıkmasıyla modern Türkiye tarihine yön vermiştir.",
categories: ["Tarihi Yerler", "Müzeler", "Sahil Şeridi"],
foods: ["Bafra Pidesi", "Kaz Tiridi", "Nokul"]
},
{
name: "Siirt",
image: "../../images/siirt.jpg",
description: "Tarihi medreseleri, doğal güzellikleri ve yöresel lezzetleriyle Güneydoğu'nun özgün şehri.",
history: "Siirt, Sümerlerden Osmanlılara kadar birçok uygarlığın etkisi altında kalmıştır. İpek Yolu üzerinde stratejik bir konumda bulunur.",
categories: ["Medreseler", "Mağaralar", "Tarihi Camiler"],
foods: ["Büryan Kebabı", "Perde Pilavı", "Zingil"]
},
{
name: "Sinop",
image: "../../images/sinop.jpg",
description: "Karadeniz'in kuzey ucunda yer alan, tarihi cezaevi ve doğal koylarıyla bilinen şehir.",
history: "Antik çağlarda Sinope olarak bilinen şehir, Roma, Bizans ve Osmanlı dönemlerinde liman kenti olarak önemli rol oynamıştır.",
categories: ["Tarihi Cezaevi", "Koylar", "Kale Kalıntıları"],
foods: ["İçli Tava", "Mısır Çorbası", "Nokul"]
},
{
name: "Sivas",
image: "../../images/sivas.jpg",
description: "Milli Mücadele'nin temel taşlarından biri, Selçuklu eserleriyle öne çıkan Anadolu şehri.",
history: "Hititlerden Osmanlı'ya kadar birçok medeniyetin izlerini taşıyan Sivas, 1919 Sivas Kongresi ile Cumhuriyet tarihine yön vermiştir.",
categories: ["Selçuklu Eserleri", "Kongre Binaları", "Termal Kaynaklar"],
foods: ["Sivas Köftesi", "Hingel", "Katmer"]
},
{
name: "şanlıurfa",
image: "../../images/sanliurfa.jpg",
description: "Peygamberler şehri, Göbeklitepe'nin keşfiyle insanlık tarihinin yeniden yazıldığı yer.",
history: "Urfa, Sümerler, Asurlular, Romalılar, Bizanslılar ve Osmanlı dönemlerinde önemli bir merkez olmuştur. Göbeklitepe ile bilinen insanlık tarihinin en eski tapınak alanına ev sahipliği yapar.",
categories: ["Tarihi Alanlar", "Kutsal Yerler", "Arkeolojik Sitler"],
foods: ["Çiğ Köfte", "Lahmacun", "Küncülü Akıt"]
},
{
name: "şırnak",
image: "../../images/sirnak.jpg",
description: "Dağları, mağaraları ve kültürel çeşitliliği ile Güneydoğu'nun dikkat çeken şehirlerinden.",
history: "Şırnak, Mezopotamya uygarlıklarının etkisinde kalmış, antik çağlardan bugüne kadar gelen bir yerleşim yeridir. Cudi Dağı civarında yer alan Zaho Antik Kenti dikkat çeker.",
categories: ["Dağlık Alanlar", "Mağaralar", "Tarihi Kalıntılar"],
foods: ["Suryaz", "Meftune", "Kutilk"]
},
{
name: "Tekirdağ",
image: "../../images/tekirdag.jpg",
description: "Marmara kıyısında tarihi ve üzüm bağlarıyla ünlü şehir.",
history: "Traklar, Roma ve Osmanlı dönemlerinde önemli bir liman ve bağcılık merkezi olan Tekirdağ, tarihi boyunca ticaretin merkezi olmuştur.",
categories: ["Müzeler", "Bağ Evleri", "Tarihi Yerler"],
foods: ["Tekirdağ Köftesi", "Hayrabolu Tatlısı", "Peynir Helvası"]
},
{
name: "Tokat",
image: "../../images/tokat.jpg",
description: "Tarihi kaleleri, hanları ve yöresel el sanatlarıyla ünlü Karadeniz şehri.",
history: "Tokat, Hititler'den Osmanlılara kadar birçok medeniyetin izlerini taşır. Sulusaray antik kenti ve Zile Kalesi önemli tarihi yerlerdendir.",
categories: ["Kaleler", "Antik Kentler", "Tarihi Çarşılar"],
foods: ["Tokat Kebabı", "Bat", "Zile Pekmezi"]
},
{
name: "Trabzon",
image: "../../images/trabzon2.jpg",
description: "Tarihi M.Ö. 2000'lere dayanan Karadeniz'in kültür ve doğa merkezi.",
history: "Tarihi boyunca Pers, Roma, Bizans ve Osmanlı egemenliğinde kalan Trabzon, Pontus Krallığı'nın da başkentiydi. Sümela Manastırı önemli bir simgedir.",
categories: ["Tarihi Yerler", "Müzeler", "Doğal Güzellikler"],
foods: ["Kuymak", "Hamsi Pilavı", "Akçaabat Köftesi"]
},
{
name: "Tunceli",
image: "../../images/tunceli.jpg",
description: "Munzur Dağları ve doğa sporları ile Doğu Anadolu'nun sakin doğa şehri.",
history: "Tunceli; Urartular, Medler ve Osmanlı dönemlerinden kalma izler taşır. Munzur Vadisi ve çevresi doğal sit alanıdır.",
categories: ["Milli Parklar", "Doğal Güzellikler", "Tarihi Yerler"],
foods: ["Gulik", "Kürt Köftesi", "Kavut"]
},
{
name: "Uşak",
image: "../../images/usak.jpg",
description: "Antik kentleri, halıcılığı ve tarhanası ile Ege'nin köklü şehirlerinden.",
history: "Uşak, Lidya, Pers, Roma ve Bizans medeniyetlerine ev sahipliği yapmıştır. Karun Hazinesi'nin çıkışıyla da bilinmektedir.",
categories: ["Antik Kentler", "Müzeler", "Kültürel Miras"],
foods: ["Uşak Tarhanası", "Keşkek", "Ciğer Sarma"]
},
{
name: "Van",
image: "../../images/van.jpg",
description: "Van Gölü, Akdamar Adası ve zengin tarihiyle Doğu Anadolu'nun incisi.",
history: "Urartuların başkenti olan Van, birçok medeniyete ev sahipliği yapmıştır. Van Kalesi ve Akdamar Kilisesi en önemli tarihi yerlerindendir.",
categories: ["Göl ve Adalar", "Tarihi Yapılar", "Kültürel Alanlar"],
foods: ["Van Kahvaltısı", "Murtuğa", "Kavut"]
},
{
name: "Yalova",
image: "../../images/yalova.jpg",
description: "Marmara Denizi kıyısında, termal kaynaklarıyla tanınan dinlence şehri.",
history: "Bizans ve Osmanlı dönemlerinde termal turizmin merkezi olmuş, Atatürk'ün 'Yalova benim kentimdir' sözüyle anılır.",
categories: ["Termal Tesisler", "Doğal Alanlar", "Tarihi Evler"],
foods: ["Termal Fasulyesi", "Yalova Sütlüsü", "Yalova Köftesi"]
},
{
name: "Yozgat",
image: "../../images/yozgat.jpg",
description: "İç Anadolu'nun tarihi yapıları ve doğasıyla öne çıkan şehri.",
history: "Yozgat, Hititler ve Roma dönemlerinde önemli yerleşim yerlerinden biridir. Çapanoğlu Camii ve tarihi saat kulesi simgelerindendir.",
categories: ["Tarihi Camiler", "Doğal Güzellikler", "Müzeler"],
foods: ["Arabaşı", "Madımak", "Yozgat Böreği"]
},  {
name: "Zonguldak",
image: "../../images/zonguldak.jpg",
description: "Karadeniz'in kıyısında, taş kömürü ile anılan sanayi ve liman şehri.",
history: "Zonguldak, Osmanlı döneminde kömür madenlerinin işletilmeye başlanmasıyla önem kazanmıştır. Cumhuriyet döneminde Türkiye'nin ilk ağır sanayi kentlerinden biri olmuştur.",
categories: ["Maden Müzeleri", "Doğal Kıyılar", "Tarihi Limanlar"],
foods: ["Kömürde Balık", "Pancar Çorbası", "Mancar Kavurması"]
}];
const regionCities = {
    marmara: ["istanbul", "edirne", "kırklareli", "tekirdağ", "kocaeli", "sakarya", "yalova", "bursa", "balıkesir", "çanakkale", "bilecik"],
    ege: ["izmir", "aydın", "muğla", "manisa", "uşak", "kütahya", "Afyonkarahisar", "denizli"],
    akdeniz: ["antalya", "ısparta", "burdur", "mersin", "adana", "osmaniye", "Hatay", "Kahramanmaraş"],
    "ic-anadolu": ["ankara", "konya", "kayseri", "eskişehir", "aksaray", "kırıkkale", "kırşehir", "nevşehir", "niğde", "sivas", "yozgat", "çankırı", "karaman"],
    karadeniz: ["samsun", "sinop", "amasya", "tokat", "ordu", "giresun", "trabzon", "rize", "artvin", "bartın", "zonguldak", "kastamonu", "çorum", "gümüşhane", "bayburt", "bolu", "düzce"],
    "dogu-anadolu": ["erzurum", "erzincan", "ağrı", "kars", "ığdır", "ardahan", "bingöl", "bitlis", "elazığ", "hakkari", "malatya", "muş", "tunceli", "van"],
    "guneydogu-anadolu": ["gaziantep", "adıyaman", "diyarbakır", "mardin", "batman", "şanlıurfa", "siirt", "şırnak", "kilis"],
};


// Global fonksiyonları tanımla
function createCityCard(city) {
    const card = document.createElement('div');
    card.className = 'city-card';
    
    const image = document.createElement('img');
    image.src = city.image;
    image.alt = city.name;
    image.className = 'city-card-image';
    
    const title = document.createElement('h3');
    title.className = 'city-card-title';
    title.textContent = city.name;
    
    const line = document.createElement('div');
    line.className = 'city-card-line';
    
    const description = document.createElement('p');
    description.className = 'city-card-desc';
    description.textContent = city.description;
    
    const categoriesTitle = document.createElement('h4');
    categoriesTitle.className = 'city-card-section-title';
    categoriesTitle.textContent = 'Kategoriler';
    
    const categoriesList = document.createElement('ul');
    categoriesList.className = 'city-card-list';
    city.categories.forEach(category => {
        const li = document.createElement('li');
        li.textContent = category;
        categoriesList.appendChild(li);
    });

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(line);
    card.appendChild(description);
    card.appendChild(categoriesTitle);
    card.appendChild(categoriesList);
    
    // Kart tıklanabilir yapılıyor
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        // Şehir adını URL'ye uygun formata çeviriyoruz
        const citySlug = city.name.toLowerCase()
          
        // İlgili şehrin HTML sayfasına yönlendir
        window.location.href = `../html/${citySlug}.html`;
    });
    
    return card;
}

window.filterCities = function(searchTerm) {
    // Arama terimini küçük harfe çevir
    searchTerm = searchTerm.toLowerCase().trim();
    
    // Şehirleri filtrele
    const filteredCities = window.cities.filter(city => 
        city.name.toLowerCase().startsWith(searchTerm)
    );

    const resultsContainer = document.getElementById('resultsContainer');
    if (!resultsContainer) return;

    if (filteredCities.length === 0) {
        resultsContainer.innerHTML = '<div class="no-results">Sonuç bulunamadı</div>';
        return;
    }
    
    // Slider yapısı
    resultsContainer.innerHTML = `
        <button class="slider-arrow left-arrow">&#10094;</button>
        <div class="slider-track"></div>
        <button class="slider-arrow right-arrow">&#10095;</button>
    `;
    
    const track = resultsContainer.querySelector('.slider-track');
    
    // Filtrelenmiş şehirlerin kartlarını oluştur
    filteredCities.forEach(city => {
        const card = createCityCard(city);
        track.appendChild(card);
    });

    // Slider fonksiyonu
    const leftBtn = resultsContainer.querySelector('.left-arrow');
    const rightBtn = resultsContainer.querySelector('.right-arrow');
    let scrollAmount = 0;
    const cardWidth = 360; // Kart genişliği + margin
    
    leftBtn.onclick = () => {
        scrollAmount -= cardWidth;
        if (scrollAmount < 0) scrollAmount = 0;
        track.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    };
    
    rightBtn.onclick = () => {
        scrollAmount += cardWidth;
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (scrollAmount > maxScroll) scrollAmount = maxScroll;
        track.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    };
};

window.showCityDetail = function(cityName) {
    const city = window.cities.find(c => c.name === cityName);
    const cityDetail = document.getElementById('cityDetail');
    
    if (cityName === 'İstanbul') {
        window.location.href = 'istanbul_kulturel_yeni.html';
        return;
    }
    
    console.log('Şehir detayı gösteriliyor:', cityName);
    if (!city) {
        console.error('Şehir bulunamadı:', cityName);
        return;
    }

    cityDetail.innerHTML = `
        <h2>${city.name}</h2>
        <p>${city.history}</p>
        <div class="category-buttons">
            ${city.categories.map(category => 
                `<button class="category-button" onclick="showCategoryContent('${cityName}', '${category}')">${category}</button>`
            ).join('')}
        </div>
        <div id="categoryContent"></div>
        <button class="create-route-button" onclick="createRoute('${cityName}')">Size Özel Rota Oluştur</button>
        <div id="routeSuggestion" class="route-suggestion"></div>
    `;
    cityDetail.classList.add('active');
};

function showCategoryContent(cityName, category) {
    const city = window.cities.find(c => c.name === cityName);
    const categoryContent = document.getElementById('categoryContent');
    
    // Kategori içeriğini oluştur
    let content = '';
    switch(category) {
        case 'Müzeler':
            content = getMuseumsContent(cityName);
            break;
        case 'Tarihi Yerler':
            content = getHistoricalPlacesContent(cityName);
            break;
        case 'Kültürel Merkezler':
            content = getCulturalCentersContent(cityName);
            break;
        // Diğer kategoriler için benzer case'ler eklenebilir
        default:
            content = `<p>${category} kategorisi için içerik yakında eklenecektir.</p>`;
    }

    categoryContent.innerHTML = `
        <div class="category-content active">
            <h3>${category}</h3>
            ${content}
        </div>
    `;
}

function createRoute(cityName) {
    const city = window.cities.find(c => c.name === cityName);
    const routeSuggestion = document.getElementById('routeSuggestion');
    
    // Şehre özel rota oluştur
    let route = generateRoute(cityName);
    
    routeSuggestion.innerHTML = `
        <h3>${cityName} İçin Önerilen Rota</h3>
        ${route.map((item, index) => `
            <div class="route-item">
                <h4>${index + 1}. ${item.name}</h4>
                <p>${item.description}</p>
            </div>
        `).join('')}
    `;
    routeSuggestion.classList.add('active');
}

function getMuseumsContent(cityName) {
    const museums = {
        'İstanbul': [
            { 
                name: 'Topkapı Sarayı Müzesi', 
                description: 'Osmanlı İmparatorluğu\'nun yönetim merkezi olan saray, günümüzde müze olarak hizmet vermektedir.',
                details: 'Harem bölümü, hazine dairesi ve kutsal emanetler bölümü mutlaka görülmelidir. Mimarisi ve süslemeleriyle Osmanlı sanatının en güzel örneklerini barındırır.'
            },
            { 
                name: 'Ayasofya Müzesi', 
                description: '1500 yıllık tarihi ile dünyanın en önemli mimari yapılarından biridir.',
                details: 'Bizans döneminde kilise, Osmanlı döneminde cami olarak kullanılmıştır. Mozaikleri ve mimarisi ile dünya sanat tarihinin başyapıtlarından biridir.'
            },
            { 
                name: 'İstanbul Arkeoloji Müzeleri', 
                description: 'Türkiye\'nin en büyük müze komplekslerinden biridir.',
                details: 'Üç ana binadan oluşan kompleks, antik dönemden Osmanlı\'ya uzanan geniş bir koleksiyona sahiptir. İskender Lahdi gibi dünya çapında önemli eserler bulunmaktadır.'
            }
        ],
        'Ankara': [
            { 
                name: 'Anadolu Medeniyetleri Müzesi', 
                description: 'Anadolu\'nun zengin tarihini yansıtan önemli bir müzedir.',
                details: 'Hitit, Frig, Urartu gibi Anadolu\'nun en eski medeniyetlerine ait eserler sergilenmektedir. 1997 yılında "Avrupa\'da Yılın Müzesi" seçilmiştir.'
            },
            { 
                name: 'Etnografya Müzesi', 
                description: 'Türk kültürünün zenginliğini sergileyen önemli bir müzedir.',
                details: 'Türk halk sanatı, el sanatları ve günlük yaşam objeleri sergilenmektedir. Atatürk\'ün naaşı 1953 yılına kadar burada kalmıştır.'
            }
        ]
    };

    const cityMuseums = museums[cityName] || [
        { 
            name: 'Şehir Müzesi', 
            description: 'Şehrin tarihini ve kültürünü yansıtan önemli bir müzedir.',
            details: 'Yerel tarih ve kültür hakkında detaylı bilgiler sunan müze, şehrin geçmişini anlamak için ideal bir başlangıç noktasıdır.'
        },
        { 
            name: 'Arkeoloji Müzesi', 
            description: 'Bölgenin arkeolojik zenginliklerini sergileyen müzedir.',
            details: 'Bölgede yapılan kazılardan çıkarılan eserler sergilenmektedir. Antik dönem yaşamı hakkında önemli bilgiler sunar.'
        }
    ];

    return cityMuseums.map(museum => `
        <div class="place-item">
            <h4>${museum.name}</h4>
            <p>${museum.description}</p>
            <p class="details">${museum.details}</p>
        </div>
    `).join('');
}

function getHistoricalPlacesContent(cityName) {
    const historicalPlaces = {
        'İstanbul': [
            { 
                name: 'Sultanahmet Meydanı', 
                description: 'Bizans ve Osmanlı dönemlerinin önemli yapılarına ev sahipliği yapan tarihi meydan.',
                details: 'Ayasofya, Sultanahmet Camii, Topkapı Sarayı gibi önemli yapıları çevreleyen meydan, İstanbul\'un kalbidir. Tarihi hipodrom kalıntıları da burada bulunmaktadır.'
            },
            { 
                name: 'Galata Kulesi', 
                description: 'İstanbul\'un en eski kulelerinden biri, şehrin panoramik manzarasını sunar.',
                details: '1348 yılında Cenevizliler tarafından inşa edilen kule, 67 metre yüksekliğindedir. Üst katındaki restoran ve seyir terasından muhteşem bir İstanbul manzarası sunar.'
            }
        ],
        'Ankara': [
            { 
                name: 'Ankara Kalesi', 
                description: 'Şehrin en eski yapılarından biri, tarihi dokuyu yansıtır.',
                details: 'Roma, Bizans, Selçuklu ve Osmanlı dönemlerine ait izler taşıyan kale, şehrin en yüksek noktasında yer alır. Kale içindeki tarihi evler ve sokaklar görülmeye değerdir.'
            },
            { 
                name: 'Roma Hamamı', 
                description: 'Roma döneminden kalma önemli bir tarihi yapı.',
                details: '3. yüzyılda inşa edilen hamam, Roma dönemi mimarisinin önemli örneklerindendir. Soğukluk, ılıklık ve sıcaklık bölümleri hala görülebilmektedir.'
            }
        ]
    };

    const cityPlaces = historicalPlaces[cityName] || [
        { 
            name: 'Tarihi Kale', 
            description: 'Şehrin tarihi dokusunu yansıtan önemli bir yapı.',
            details: 'Farklı medeniyetlerin izlerini taşıyan kale, şehrin en eski yerleşim yerlerinden biridir. Tarihi sokakları ve evleriyle ziyaretçilerini geçmişe götürür.'
        },
        { 
            name: 'Eski Çarşı', 
            description: 'Geleneksel ticaret merkezi, tarihi dokuyu korumaktadır.',
            details: 'Yüzyıllardır ticaretin merkezi olan çarşı, geleneksel el sanatları ve yerel ürünlerin satıldığı dükkanlarla doludur. Tarihi atmosferi ve lezzetli yemekleriyle ünlüdür.'
        }
    ];

    return cityPlaces.map(place => `
        <div class="place-item">
            <h4>${place.name}</h4>
            <p>${place.description}</p>
            <p class="details">${place.details}</p>
        </div>
    `).join('');
}

function getCulturalCentersContent(cityName) {
    const culturalCenters = {
        'İstanbul': [
            { name: 'Süreyya Operası', description: 'Türkiye\'nin en eski opera binalarından biri.' },
            { name: 'İstanbul Modern', description: 'Modern sanatın önemli merkezlerinden biri.' }
        ],
        'Ankara': [
            { name: 'CSO Konser Salonu', description: 'Türkiye\'nin önemli klasik müzik merkezlerinden biri.' },
            { name: 'CerModern', description: 'Modern sanatın önemli sergi ve etkinlik merkezi.' }
        ],
        // Diğer şehirler için benzer içerikler eklenebilir
    };

    const cityCenters = culturalCenters[cityName] || [
        { name: 'Kültür Merkezi', description: 'Şehrin kültürel etkinliklerinin düzenlendiği önemli bir merkez.' },
        { name: 'Sanat Galerisi', description: 'Yerel ve ulusal sanatçıların eserlerinin sergilendiği galeri.' }
    ];

    return cityCenters.map(center => `
        <div class="route-item">
            <h4>${center.name}</h4>
            <p>${center.description}</p>
        </div>
    `).join('');
}

function generateRoute(cityName) {
    const routes = {
        'İstanbul': [
            { name: 'Topkapı Sarayı', description: 'Sabah 09:00 - Osmanlı İmparatorluğu\'nun yönetim merkezi' },
            { name: 'Ayasofya', description: 'Öğle 12:00 - Dünyanın en önemli mimari yapılarından biri' },
            { name: 'Sultanahmet Camii', description: 'Öğleden sonra 14:00 - Mavi Camii olarak bilinen muhteşem yapı' },
            { name: 'Kapalıçarşı', description: 'Akşam 16:00 - Dünyanın en büyük kapalı çarşılarından biri' }
        ],
        'Ankara': [
            { name: 'Anıtkabir', description: 'Sabah 09:00 - Türkiye Cumhuriyeti\'nin kurucusu Atatürk\'ün anıt mezarı' },
            { name: 'Anadolu Medeniyetleri Müzesi', description: 'Öğle 12:00 - Anadolu\'nun zengin tarihini yansıtan müze' },
            { name: 'Kızılay Meydanı', description: 'Öğleden sonra 14:00 - Ankara\'nın kalbi' },
            { name: 'Hamamönü', description: 'Akşam 16:00 - Tarihi dokuyu koruyan semt' }
        ],
        // Diğer şehirler için benzer rotalar eklenebilir
    };

    return routes[cityName] || [
        { name: 'Şehir Müzesi', description: 'Sabah 09:00 - Şehrin tarihini yansıtan müze' },
        { name: 'Tarihi Kale', description: 'Öğle 12:00 - Şehrin en eski yapılarından biri' },
        { name: 'Eski Çarşı', description: 'Öğleden sonra 14:00 - Geleneksel ticaret merkezi' },
        { name: 'Kültür Merkezi', description: 'Akşam 16:00 - Kültürel etkinliklerin düzenlendiği merkez' }
    ];
}

// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener('DOMContentLoaded', function() {
    const resultsContainer = document.getElementById('resultsContainer');
    if (!resultsContainer) return;

    // Slider yapısını oluştur
    resultsContainer.innerHTML = `
        <button class="slider-arrow left-arrow">&#10094;</button>
        <div class="slider-track"></div>
        <button class="slider-arrow right-arrow">&#10095;</button>
    `;

    const track = resultsContainer.querySelector('.slider-track');
    
    // Tüm şehirlerin kartlarını oluştur
    window.cities.forEach(city => {
        const card = createCityCard(city);
        track.appendChild(card);
    });

    // Slider fonksiyonları
    const leftBtn = resultsContainer.querySelector('.left-arrow');
    const rightBtn = resultsContainer.querySelector('.right-arrow');
    let scrollAmount = 0;
    const cardWidth = 316; // Kart genişliği (300px) + gap (16px)
    
    leftBtn.onclick = () => {
        scrollAmount -= cardWidth;
        if (scrollAmount < 0) scrollAmount = 0;
        track.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    };
    
    rightBtn.onclick = () => {
        scrollAmount += cardWidth;
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (scrollAmount > maxScroll) scrollAmount = maxScroll;
        track.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    };

    // Otomatik slider'ı başlat
    startAutoScroll();
    
    // Mouse hover olduğunda slider'ı durdur
    track.addEventListener('mouseenter', () => {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
        }
    });

    // Mouse ayrıldığında slider'ı tekrar başlat
    track.addEventListener('mouseleave', () => {
        startAutoScroll();
    });
});

let currentIndex = 0;
let autoScrollInterval;

function startAutoScroll() {
    const sliderTrack = document.querySelector('.slider-track');
    const cityCards = document.querySelectorAll('.city-card');
    
    if (!sliderTrack || !cityCards.length) {
        console.error('Slider elementleri bulunamadı!');
        return;
    }

    // Önceki interval'i temizle
    if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
    }

    const cardWidth = 316; // Kart genişliği (300px) + gap (16px)
    const maxScroll = sliderTrack.scrollWidth - sliderTrack.clientWidth;

    autoScrollInterval = setInterval(() => {
        currentIndex++;
        const scrollPosition = currentIndex * cardWidth;

        // Eğer son karta geldiyse başa dön
        if (scrollPosition >= maxScroll) {
            currentIndex = 0;
            sliderTrack.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        } else {
            sliderTrack.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    }, 3000); // her 3 saniyede bir kart kaydır
}

// Navbar scroll kontrolü için yeni fonksiyon
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 100) {
        // Aşağı scroll
        navbar.classList.add('hidden');
    } else {
        // Yukarı scroll
        navbar.classList.remove('hidden');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Arama fonksiyonu
function searchCity(query) {
    query = query.toLowerCase().trim();
    const results = window.cities.filter(city => 
        city.name.toLowerCase().includes(query)
    );
    return results;
}

// Arama sonuçlarını gösterme fonksiyonu
function displaySearchResults(results) {
    const searchResults = document.getElementById('search-results');
    const resultsContainer = document.getElementById('resultsContainer');
    
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="no-results">Sonuç bulunamadı</div>';
        resultsContainer.innerHTML = '<div class="no-results">Sonuç bulunamadı</div>';
        return;
    }
    
    // Arama sonuçlarını göster
    results.forEach(city => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.textContent = city.name;
        searchResults.appendChild(resultItem);
    });

    // City card'ları güncelle
    resultsContainer.innerHTML = `
        <button class="slider-arrow left-arrow">&#10094;</button>
        <div class="slider-track"></div>
        <button class="slider-arrow right-arrow">&#10095;</button>
    `;
    
    const track = resultsContainer.querySelector('.slider-track');
    
    // Filtrelenmiş şehirlerin kartlarını oluştur
    results.forEach(city => {
        const card = createCityCard(city);
        track.appendChild(card);
    });

    // Slider fonksiyonu
    const leftBtn = resultsContainer.querySelector('.left-arrow');
    const rightBtn = resultsContainer.querySelector('.right-arrow');
    let scrollAmount = 0;
    const cardWidth = 360; // Kart genişliği + margin
    
    leftBtn.onclick = () => {
        scrollAmount -= cardWidth;
        if (scrollAmount < 0) scrollAmount = 0;
        track.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    };
    
    rightBtn.onclick = () => {
        scrollAmount += cardWidth;
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (scrollAmount > maxScroll) scrollAmount = maxScroll;
        track.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    };
}

// Event listener'ları ekle
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('city-search');
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        if (query.length >= 1) {
            const results = searchCity(query);
            displaySearchResults(results);
        } else {
            document.getElementById('search-results').innerHTML = '';
            // Tüm şehirleri göster
            const results = window.cities;
            displaySearchResults(results);
        }
    });
});

// Şehir detaylarını gösterme fonksiyonu
function showCityDetail(city) {
    const cityDetail = document.getElementById('cityDetail');
    cityDetail.innerHTML = `
        <div class="city-info">
            <h2>${city.name}</h2>
            <img src="${city.image}" alt="${city.name}" class="city-image">
            <p class="description">${city.description}</p>
            <p class="history">${city.history}</p>
            <div class="categories">
                <h3>Kategoriler:</h3>
                <ul>
                    ${city.categories.map(category => `<li>${category}</li>`).join('')}
                </ul>
            </div>
            <div class="foods">
                <h3>Yöresel Yemekler:</h3>
                <ul>
                    ${city.foods.map(food => `<li>${food}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    cityDetail.style.display = 'block';
}

// Event listener'ları ekle
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('city-search');
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        // Hem arama sonuçlarını hem de city card'ları güncelle
        if (query.length >= 1) {
            const results = searchCity(query);
            displaySearchResults(results);
            window.filterCities(query);
        } else {
            document.getElementById('search-results').innerHTML = '';
            window.filterCities(''); // Tüm şehirleri göster
        }
    });
    
    // Arama kutusu dışına tıklandığında sonuçları gizle
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            document.getElementById('search-results').innerHTML = '';
        }
    });
});
const style = document.createElement('style');
style.textContent = `
    .city-card {
        background: white;
        border-radius: 20px;
        box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        padding: 25px;
        margin: 20px;
        
        transition: all 0.3s ease;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        position: relative;
        border: 1px solid rgba(0,0,0,0.05);
    }

   
`;
document.head.appendChild(style);