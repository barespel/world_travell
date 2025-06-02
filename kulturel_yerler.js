// Global değişkenleri tanımla
window.cities = [
    { 
        name: 'Adana', 
        image: 'images/adana.jpeg', 
        description: 'M.Ö. 6000 yılına uzanan tarihi ile Anadolu\'nun en eski yerleşim yerlerinden biri. Hitit, Asur, Pers, Roma ve Osmanlı medeniyetlerine ev sahipliği yapmıştır.',
        history: 'Adana, tarih boyunca birçok medeniyete ev sahipliği yapmış önemli bir şehirdir. Hitit döneminde "Adaniya" olarak bilinen şehir, daha sonra Asurlular, Persler, Romalılar ve Bizanslılar tarafından yönetilmiştir. 1517 yılında Osmanlı İmparatorluğu\'na katılan şehir, stratejik konumu sayesinde önemli bir ticaret merkezi haline gelmiştir.',
        categories: ['Müzeler', 'Tarihi Yerler', 'Doğal Güzellikler', 'Kültürel Etkinlikler']
    },
    { 
        name: 'Ankara', 
        image: 'images/ankara.jpg', 
        description: 'Türkiye\'nin başkenti, M.Ö. 2000\'li yıllara uzanan tarihi ile Hitit, Frig, Galat, Roma ve Osmanlı medeniyetlerinin izlerini taşır.',
        history: 'Ankara\'nın tarihi M.Ö. 2000\'li yıllara kadar uzanmaktadır. Hititler döneminde "Ankuwa" olarak bilinen şehir, daha sonra Frigler, Galatlar, Romalılar ve Bizanslılar tarafından yönetilmiştir. 1923 yılında Türkiye Cumhuriyeti\'nin başkenti olan Ankara, modern Türkiye\'nin kalbi haline gelmiştir.',
        categories: ['Müzeler', 'Tarihi Yerler', 'Modern Yapılar', 'Kültürel Merkezler']
    },
    { 
        name: 'İstanbul', 
        image: 'images/istanbul.jpg', 
        description: 'M.Ö. 660\'da kurulan Byzantion\'dan günümüze, Roma, Bizans ve Osmanlı İmparatorluklarına başkentlik yapmış dünya şehri.',
        history: 'İstanbul, tarihi M.Ö. 660\'a kadar uzanan, dünyanın en önemli şehirlerinden biridir. Byzantion, Konstantinopolis ve İstanbul olarak bilinen şehir, Roma, Bizans ve Osmanlı İmparatorluklarına başkentlik yapmıştır. İki kıtayı birleştiren stratejik konumu, onu her dönemde önemli bir merkez haline getirmiştir.',
        categories: ['Saraylar', 'Müzeler', 'Tarihi Camiler', 'Antik Yapılar']
    },
    { 
        name: 'İzmir', 
        image: 'images/izmir2.jpg', 
        description: 'M.Ö. 3000\'li yıllara uzanan tarihi ile İyon, Lidya, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan Ege\'nin incisi.',
        history: 'İzmir, tarihi M.Ö. 3000\'li yıllara kadar uzanan, Ege\'nin en önemli şehirlerinden biridir. Antik dönemde "Smyrna" olarak bilinen şehir, İyon, Lidya, Pers, Roma ve Bizans medeniyetlerine ev sahipliği yapmıştır. 15. yüzyılda Osmanlı İmparatorluğu\'na katılan şehir, önemli bir ticaret merkezi olmuştur.',
        categories: ['Antik Kentler', 'Müzeler', 'Tarihi Yerler', 'Kültürel Merkezler']
    },
    { 
        name: 'Antalya', 
        image: 'images/antalya.jpg', 
        description: 'M.Ö. 200\'de Bergama Kralı II. Attalos tarafından kurulan, Roma, Bizans ve Osmanlı dönemlerinin izlerini taşıyan Akdeniz\'in incisi.',
        history: 'Antalya, M.Ö. 200 yılında Bergama Kralı II. Attalos tarafından kurulmuştur. Roma, Bizans ve Osmanlı dönemlerinde önemli bir liman şehri olan Antalya, günümüzde Türkiye\'nin en önemli turizm merkezlerinden biridir. Antik kentleri, doğal güzellikleri ve tarihi yapılarıyla ziyaretçilerini büyülemektedir.',
        categories: ['Antik Kentler', 'Müzeler', 'Tarihi Yerler', 'Doğal Güzellikler']
    },
    { 
        name: 'Bursa', 
        image: 'images/bursa.jpg', 
        description: 'M.Ö. 4000\'li yıllara uzanan tarihi ile Osmanlı İmparatorluğu\'nun ilk başkenti, ipekyolu\'nun önemli durağı.',
        history: 'Bursa, tarihi M.Ö. 4000\'li yıllara kadar uzanan, Osmanlı İmparatorluğu\'nun ilk başkentidir. 1326 yılında Osmanlılar tarafından fethedilen şehir, 1365 yılına kadar imparatorluğun başkenti olmuştur. İpekyolu üzerindeki konumu sayesinde önemli bir ticaret merkezi haline gelmiştir.',
        categories: ['Osmanlı Eserleri', 'Müzeler', 'Tarihi Yerler', 'Doğal Güzellikler']
    },
    { 
        name: 'Trabzon', 
        image: 'images/trabzon2.jpg', 
        description: 'M.Ö. 2000\'li yıllara uzanan tarihi ile Pers, Roma, Bizans ve Osmanlı medeniyetlerinin izlerini taşıyan Karadeniz\'in incisi.',
        history: 'Trabzon, tarihi M.Ö. 2000\'li yıllara kadar uzanan, Karadeniz\'in en önemli şehirlerinden biridir. Pers, Roma, Bizans ve Osmanlı dönemlerinde önemli bir liman şehri olan Trabzon, İpekyolu\'nun Karadeniz\'deki önemli duraklarından biri olmuştur.',
        categories: ['Tarihi Yerler', 'Müzeler', 'Doğal Güzellikler', 'Kültürel Merkezler']
    },
    { 
        name: 'Konya', 
        image: 'images/konya.jpg', 
        description: 'M.Ö. 7000\'li yıllara uzanan tarihi ile Hitit, Frig, Pers, Roma ve Selçuklu medeniyetlerinin izlerini taşıyan mistik şehir.',
        history: 'Konya, tarihi M.Ö. 7000\'li yıllara kadar uzanan, Anadolu\'nun en eski yerleşim yerlerinden biridir. Hitit, Frig, Pers, Roma ve Selçuklu dönemlerinde önemli bir merkez olan şehir, Mevlana\'nın yaşadığı ve eserlerini verdiği yer olarak önem kazanmıştır.',
        categories: ['Selçuklu Eserleri', 'Müzeler', 'Tarihi Yerler', 'Kültürel Merkezler']
    },
    { 
        name: 'Eskişehir', 
        image: 'images/eskisehir.jpg', 
        description: 'M.Ö. 1000\'li yıllara uzanan tarihi ile Frig, Roma, Bizans ve Osmanlı medeniyetlerinin izlerini taşıyan modern şehir.',
        history: 'Eskişehir, tarihi M.Ö. 1000\'li yıllara kadar uzanan, Anadolu\'nun önemli şehirlerinden biridir. Frig, Roma, Bizans ve Osmanlı dönemlerinde önemli bir yerleşim yeri olan şehir, günümüzde modern yüzüyle öne çıkmaktadır.',
        categories: ['Müzeler', 'Tarihi Yerler', 'Modern Yapılar', 'Kültürel Merkezler']
    },
    { 
        name: 'Gaziantep', 
        image: 'images/gaziantep.jpg', 
        description: 'M.Ö. 4000\'li yıllara uzanan tarihi ile Hitit, Asur, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan kadim şehir.',
        history: 'Gaziantep, tarihi M.Ö. 4000\'li yıllara kadar uzanan, Anadolu\'nun en eski yerleşim yerlerinden biridir. Hitit, Asur, Pers, Roma ve Osmanlı dönemlerinde önemli bir merkez olan şehir, zengin kültürel mirasıyla dikkat çekmektedir.',
        categories: ['Tarihi Yerler', 'Müzeler', 'Kültürel Merkezler', 'Doğal Güzellikler']
    },
    {
        name: "Adıyaman",
        image: "images/adiyaman.jpg",
        description: "Nemrut Dağı ve tarihi zenginlikleriyle ünlü şehir",
        categories: ["Nemrut Dağı", "Cendere Köprüsü", "Perre Antik Kenti"]
    },
    {
        name: "Afyonkarahisar",
        image: "images/afyonkarahisar.jpg",
        description: "Termal kaynakları ve tarihi dokusuyla öne çıkan şehir",
        categories: ["Afyon Kalesi", "Ulu Camii", "İscehisar Peri Bacaları"]
    },
    {
        name: "Ağrı",
        image: "images/agri.jpg",
        description: "Türkiye'nin en yüksek dağına ev sahipliği yapan şehir",
        categories: ["Ağrı Dağı", "İshak Paşa Sarayı", "Doğubayazıt Kalesi"]
    },
    {
        name: "Aksaray",
        image: "images/aksaray.jpg",
        description: "Kapadokya'nın giriş kapısı olan tarihi şehir",
        categories: ["Ihlara Vadisi", "Sultanhanı Kervansarayı", "Aksaray Müzesi"]
    },
    {
        name: "Amasya",
        image: "images/amasya.jpg",
        description: "Yeşilırmak'ın kıyısında kurulu tarihi şehir",
        categories: ["Kral Kaya Mezarları", "Amasya Kalesi", "Ferhat Su Kanalı"]
    },
    {
        name: "Ardahan",
        image: "images/ardahan.jpg",
        description: "Doğu Anadolu'nun yüksek platolarında yer alan şehir",
        categories: ["Ardahan Kalesi", "Çıldır Gölü", "Posof Kalesi"]
    },
    {
        name: "Artvin",
        image: "images/artvin.jpg",
        description: "Yeşil doğası ve yüksek dağlarıyla ünlü şehir",
        categories: ["Hatila Vadisi", "Artvin Kalesi", "Şavşat Karagöl"]
    },
    {
        name: "Aydın",
        image: "images/aydin.jpg",
        description: "Ege'nin bereketli topraklarında kurulu antik şehir",
        categories: ["Didim Apollon Tapınağı", "Milet Antik Kenti", "Priene Antik Kenti"]
    },
    {
        name: "Balıkesir",
        image: "images/balikesir.jpg",
        description: "Marmara ve Ege bölgelerinin kesişiminde yer alan, tarihi M.Ö. 3000'lere uzanan kadim şehir",
        history: "Balıkesir, tarihi M.Ö. 3000'lere kadar uzanan, Lidya, Pers, Roma ve Osmanlı medeniyetlerine ev sahipliği yapmış önemli bir şehirdir. Antik dönemde 'Mysia' olarak bilinen bölgede yer alan şehir, stratejik konumu sayesinde her dönemde önemli bir merkez olmuştur.",
        categories: ["Müzeler", "Tarihi Yerler", "Doğal Güzellikler", "Kültürel Merkezler"]
    },
    {
        name: "Bartın",
        image: "images/bartin.jpg",
        description: "Karadeniz'in batısında, tarihi dokusu ve doğal güzellikleriyle öne çıkan şehir",
        history: "Bartın, tarihi M.Ö. 1200'lere kadar uzanan, Hitit, Frig, Pers ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Parthenios' olarak bilinen şehir, önemli bir liman kenti olarak gelişmiştir.",
        categories: ["Amasra Kalesi", "Tarihi Evler", "Doğal Plajlar", "Müzeler"]
    },
    {
        name: "Batman",
        image: "images/batman.jpg",
        description: "Dicle Nehri'nin kıyısında, zengin petrol yatakları ve tarihi dokusuyla öne çıkan şehir",
        history: "Batman, tarihi M.Ö. 7000'lere kadar uzanan, Sümer, Asur, Pers ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Iluh' olarak bilinen şehir, önemli bir ticaret merkezi olmuştur.",
        categories: ["Hasankeyf", "Malabadi Köprüsü", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Bayburt",
        image: "images/bayburt.jpg",
        description: "Doğu Anadolu'nun yüksek platolarında, tarihi İpek Yolu üzerinde yer alan şehir",
        history: "Bayburt, tarihi M.Ö. 3000'lere kadar uzanan, Urartu, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. İpek Yolu üzerindeki konumu sayesinde önemli bir ticaret merkezi olmuştur.",
        categories: ["Bayburt Kalesi", "Aydıntepe Yeraltı Şehri", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Bilecik",
        image: "images/bilecik.jpg",
        description: "Osmanlı İmparatorluğu'nun kuruluşuna tanıklık eden, tarihi dokusuyla öne çıkan şehir",
        history: "Bilecik, tarihi M.Ö. 3000'lere kadar uzanan, Hitit, Frig, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Osmanlı İmparatorluğu'nun kuruluşuna tanıklık eden şehir, önemli bir tarihi merkezdir.",
        categories: ["Söğüt Ertuğrul Gazi Müzesi", "Tarihi Camiler", "Müzeler", "Doğal Güzellikler"]
    },
    {
        name: "Bingöl",
        image: "images/bingol.jpg",
        description: "Doğu Anadolu'nun yüksek dağları arasında, doğal güzellikleriyle öne çıkan şehir",
        history: "Bingöl, tarihi M.Ö. 2000'lere kadar uzanan, Urartu, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Dağlık coğrafyası ve doğal güzellikleriyle dikkat çekmektedir.",
        categories: ["Bingöl Kalesi", "Doğal Güzellikler", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Bitlis",
        image: "images/bitlis.jpg",
        description: "Van Gölü'nün güneyinde, tarihi dokusu ve doğal güzellikleriyle öne çıkan şehir",
        history: "Bitlis, tarihi M.Ö. 2000'lere kadar uzanan, Urartu, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Stratejik konumu sayesinde önemli bir merkez olmuştur.",
        categories: ["Bitlis Kalesi", "Ahlat Mezarlığı", "Müzeler", "Doğal Güzellikler"]
    },
    {
        name: "Bolu",
        image: "images/bolu.jpg",
        description: "Batı Karadeniz'in yüksek platolarında, doğal güzellikleriyle ünlü şehir",
        history: "Bolu, tarihi M.Ö. 1200'lere kadar uzanan, Hitit, Frig, Pers ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Bithynion' olarak bilinen şehir, önemli bir yerleşim merkezi olmuştur.",
        categories: ["Abant Gölü", "Yedigöller", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Burdur",
        image: "images/burdur.jpg",
        description: "Göller Bölgesi'nin önemli şehirlerinden, tarihi ve doğal güzellikleriyle öne çıkan şehir",
        history: "Burdur, tarihi M.Ö. 7000'lere kadar uzanan, Hitit, Frig, Pers ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Limobrama' olarak bilinen şehir, önemli bir yerleşim merkezi olmuştur.",
        categories: ["Burdur Müzesi", "İnsuyu Mağarası", "Tarihi Yerler", "Doğal Güzellikler"]
    },
    {
        name: "Çanakkale",
        image: "images/canakkale.jpg",
        description: "İki kıtayı birleştiren boğazın kıyısında, tarihi ve kültürel zenginliğiyle öne çıkan şehir",
        history: "Çanakkale, tarihi M.Ö. 3000'lere kadar uzanan, Troya, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Stratejik konumu sayesinde her dönemde önemli bir merkez olmuştur.",
        categories: ["Truva Antik Kenti", "Çanakkale Şehitleri Anıtı", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Çankırı",
        image: "images/cankiri.jpg",
        description: "İç Anadolu'nun kuzeyinde, tarihi İpek Yolu üzerinde yer alan kadim şehir",
        history: "Çankırı, tarihi M.Ö. 3000'lere kadar uzanan, Hitit, Frig, Pers ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Gangra' olarak bilinen şehir, İpek Yolu üzerindeki konumu sayesinde önemli bir ticaret merkezi olmuştur.",
        categories: ["Çankırı Kalesi", "Taş Mescit", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Çorum",
        image: "images/corum.jpg",
        description: "Hitit medeniyetinin başkenti Hattuşa'ya ev sahipliği yapan, tarihi zenginliğiyle öne çıkan şehir",
        history: "Çorum, tarihi M.Ö. 5000'lere kadar uzanan, Hitit, Frig, Pers ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Hitit İmparatorluğu'nun başkenti Hattuşa'nın bulunduğu bölge, dünya tarihi açısından büyük önem taşımaktadır.",
        categories: ["Hattuşa Antik Kenti", "Alacahöyük", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Denizli",
        image: "images/denizli.jpg",
        description: "Ege Bölgesi'nin iç kesimlerinde, termal kaynakları ve antik kentleriyle ünlü şehir",
        history: "Denizli, tarihi M.Ö. 4000'lere kadar uzanan, Lidya, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Laodikeia' olarak bilinen şehir, önemli bir ticaret ve kültür merkezi olmuştur.",
        categories: ["Pamukkale", "Hierapolis", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Diyarbakır",
        image: "images/diyarbakir.jpg",
        description: "Dicle Nehri'nin kıyısında, tarihi surları ve kültürel zenginliğiyle öne çıkan kadim şehir",
        history: "Diyarbakır, tarihi M.Ö. 3000'lere kadar uzanan, Hurri, Asur, Pers ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Amida' olarak bilinen şehir, önemli bir ticaret ve kültür merkezi olmuştur.",
        categories: ["Diyarbakır Kalesi", "Ulu Camii", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Düzce",
        image: "images/duzce.jpg",
        description: "Batı Karadeniz'in verimli topraklarında, doğal güzellikleriyle öne çıkan şehir",
        history: "Düzce, tarihi M.Ö. 2000'lere kadar uzanan, Hitit, Frig, Pers ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Verimli toprakları ve stratejik konumu sayesinde önemli bir yerleşim merkezi olmuştur.",
        categories: ["Konuralp Antik Kenti", "Müzeler", "Doğal Güzellikler", "Tarihi Yerler"]
    },
    {
        name: "Edirne",
        image: "images/edirne.jpg",
        description: "Osmanlı İmparatorluğu'na başkentlik yapmış, tarihi ve kültürel zenginliğiyle öne çıkan şehir",
        history: "Edirne, tarihi M.Ö. 4000'lere kadar uzanan, Trak, Roma, Bizans ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. 1365-1453 yılları arasında Osmanlı İmparatorluğu'na başkentlik yapmıştır.",
        categories: ["Selimiye Camii", "Edirne Sarayı", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Elazığ",
        image: "images/elazig.jpg",
        description: "Doğu Anadolu'nun önemli şehirlerinden, tarihi ve doğal güzellikleriyle öne çıkan şehir",
        history: "Elazığ, tarihi M.Ö. 2000'lere kadar uzanan, Urartu, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Harput' olarak bilinen şehir, önemli bir kültür merkezi olmuştur.",
        categories: ["Harput Kalesi", "Hazar Gölü", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Erzincan",
        image: "images/erzincan.jpg",
        description: "Doğu Anadolu'nun yüksek platolarında, tarihi İpek Yolu üzerinde yer alan şehir",
        history: "Erzincan, tarihi M.Ö. 2000'lere kadar uzanan, Urartu, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. İpek Yolu üzerindeki konumu sayesinde önemli bir ticaret merkezi olmuştur.",
        categories: ["Erzincan Kalesi", "Girlevik Şelalesi", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Erzurum",
        image: "images/erzurum.jpg",
        description: "Doğu Anadolu'nun en büyük şehirlerinden, tarihi ve kültürel zenginliğiyle öne çıkan şehir",
        history: "Erzurum, tarihi M.Ö. 4000'lere kadar uzanan, Urartu, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Stratejik konumu sayesinde her dönemde önemli bir merkez olmuştur.",
        categories: ["Çifte Minareli Medrese", "Erzurum Kalesi", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Giresun",
        image: "images/giresun.jpg",
        description: "Karadeniz'in incisi, fındık bahçeleri ve tarihi dokusuyla öne çıkan şehir",
        history: "Giresun, tarihi M.Ö. 2000'lere kadar uzanan, Hitit, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Kerasus' olarak bilinen şehir, önemli bir liman kenti olmuştur.",
        categories: ["Giresun Kalesi", "Giresun Adası", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Gümüşhane",
        image: "images/gumushane.jpg",
        description: "Doğu Karadeniz'in yüksek dağları arasında, gümüş madenleriyle ünlü tarihi şehir",
        history: "Gümüşhane, tarihi M.Ö. 2000'lere kadar uzanan, Hitit, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Argyropolis' olarak bilinen şehir, zengin gümüş madenleriyle ünlü olmuştur.",
        categories: ["Gümüşhane Kalesi", "Santa Harabeleri", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Hakkari",
        image: "images/hakkari.jpg",
        description: "Doğu Anadolu'nun en yüksek dağları arasında, doğal güzellikleriyle öne çıkan şehir",
        history: "Hakkari, tarihi M.Ö. 2000'lere kadar uzanan, Urartu, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Dağlık coğrafyası ve stratejik konumu sayesinde önemli bir merkez olmuştur.",
        categories: ["Hakkari Kalesi", "Cilo Dağları", "Müzeler", "Doğal Güzellikler"]
    },
    {
        name: "Hatay",
        image: "images/hatay.jpg",
        description: "Akdeniz'in doğusunda, farklı din ve kültürlerin buluştuğu kadim şehir",
        history: "Hatay, tarihi M.Ö. 4000'lere kadar uzanan, Hitit, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Antakya' olarak bilinen şehir, önemli bir kültür ve ticaret merkezi olmuştur.",
        categories: ["St. Pierre Kilisesi", "Antakya Arkeoloji Müzesi", "Tarihi Yerler", "Kültürel Merkezler"]
    },
    {
        name: "Iğdır",
        image: "images/igdir.jpg",
        description: "Doğu Anadolu'nun en doğusunda, Ağrı Dağı'nın eteklerinde yer alan şehir",
        history: "Iğdır, tarihi M.Ö. 2000'lere kadar uzanan, Urartu, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Stratejik konumu sayesinde önemli bir ticaret merkezi olmuştur.",
        categories: ["Iğdır Kalesi", "Ağrı Dağı", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Isparta",
        image: "images/isparta.jpg",
        description: "Göller Bölgesi'nin önemli şehirlerinden, gül bahçeleriyle ünlü şehir",
        history: "Isparta, tarihi M.Ö. 2000'lere kadar uzanan, Hitit, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Baris' olarak bilinen şehir, önemli bir yerleşim merkezi olmuştur.",
        categories: ["Eğirdir Gölü", "Gül Müzesi", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Kahramanmaraş",
        image: "images/kahramanmaras.jpg",
        description: "Akdeniz ve Doğu Anadolu bölgelerinin kesişiminde, tarihi dokusuyla öne çıkan şehir",
        history: "Kahramanmaraş, tarihi M.Ö. 3000'lere kadar uzanan, Hitit, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Germanikeia' olarak bilinen şehir, önemli bir kültür merkezi olmuştur.",
        categories: ["Kahramanmaraş Kalesi", "Ulu Camii", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Karabük",
        image: "images/karabuk.jpg",
        description: "Batı Karadeniz'in iç kesimlerinde, Safranbolu evleriyle ünlü şehir",
        history: "Karabük, tarihi M.Ö. 2000'lere kadar uzanan, Hitit, Frig, Pers ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Safranbolu ilçesi, UNESCO Dünya Mirası Listesi'nde yer almaktadır.",
        categories: ["Safranbolu Evleri", "Bulak Mencilis Mağarası", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Karaman",
        image: "images/karaman.jpg",
        description: "İç Anadolu'nun güneyinde, Karamanoğulları Beyliği'ne başkentlik yapmış şehir",
        history: "Karaman, tarihi M.Ö. 8000'lere kadar uzanan, Hitit, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Laranda' olarak bilinen şehir, önemli bir kültür merkezi olmuştur.",
        categories: ["Karaman Kalesi", "Aktekke Camii", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Kars",
        image: "images/kars.jpg",
        description: "Doğu Anadolu'nun kuzeydoğusunda, Ani Harabeleri ile ünlü şehir",
        history: "Kars, tarihi M.Ö. 3000'lere kadar uzanan, Urartu, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Karin' olarak bilinen şehir, önemli bir ticaret merkezi olmuştur.",
        categories: ["Ani Harabeleri", "Kars Kalesi", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Kastamonu",
        image: "images/kastamonu.jpg",
        description: "Batı Karadeniz'in iç kesimlerinde, tarihi evleriyle ünlü şehir",
        history: "Kastamonu, tarihi M.Ö. 2000'lere kadar uzanan, Hitit, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Timonion' olarak bilinen şehir, önemli bir kültür merkezi olmuştur.",
        categories: ["Kastamonu Kalesi", "Nasrullah Camii", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Kayseri",
        image: "images/kayseri.jpg",
        description: "İç Anadolu'nun önemli şehirlerinden, Selçuklu eserleriyle ünlü şehir",
        history: "Kayseri, tarihi M.Ö. 4000'lere kadar uzanan, Hitit, Pers, Roma ve Selçuklu medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Kaisareia' olarak bilinen şehir, önemli bir ticaret merkezi olmuştur.",
        categories: ["Kayseri Kalesi", "Hunat Hatun Camii", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Kırıkkale",
        image: "images/kirikkale.jpg",
        description: "İç Anadolu'nun kuzeyinde, sanayi şehri olarak gelişen modern şehir",
        history: "Kırıkkale, tarihi M.Ö. 2000'lere kadar uzanan, Hitit, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Cumhuriyet döneminde sanayi şehri olarak gelişmiştir.",
        categories: ["Kırıkkale Müzesi", "Tarihi Yerler", "Modern Yapılar", "Kültürel Merkezler"]
    },
    {
        name: "Kırklareli",
        image: "images/kirklareli.jpg",
        description: "Trakya'nın kuzeydoğusunda, tarihi dokusuyla öne çıkan şehir",
        history: "Kırklareli, tarihi M.Ö. 3000'lere kadar uzanan, Trak, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Saranta Eklesies' olarak bilinen şehir, önemli bir yerleşim merkezi olmuştur.",
        categories: ["Kırklareli Müzesi", "Dupnisa Mağarası", "Tarihi Yerler", "Doğal Güzellikler"]
    },
    {
        name: "Kırşehir",
        image: "images/kirsehir.jpg",
        description: "İç Anadolu'nun ortasında, Ahi Evran'ın yaşadığı şehir",
        history: "Kırşehir, tarihi M.Ö. 3000'lere kadar uzanan, Hitit, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Mokissos' olarak bilinen şehir, önemli bir kültür merkezi olmuştur.",
        categories: ["Cacabey Camii", "Ahi Evran Türbesi", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Kilis",
        image: "images/kilis.jpg",
        description: "Güneydoğu Anadolu'nun batısında, zeytin bahçeleriyle ünlü şehir",
        history: "Kilis, tarihi M.Ö. 2000'lere kadar uzanan, Hitit, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Ciliza' olarak bilinen şehir, önemli bir yerleşim merkezi olmuştur.",
        categories: ["Kilis Kalesi", "Ulu Camii", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Kocaeli",
        image: "images/kocaeli.jpg",
        description: "Marmara Bölgesi'nin doğusunda, sanayi ve liman şehri",
        history: "Kocaeli, tarihi M.Ö. 3000'lere kadar uzanan, Bitinya, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Nikomedia' olarak bilinen şehir, önemli bir ticaret merkezi olmuştur.",
        categories: ["Kocaeli Müzesi", "Saat Kulesi", "Tarihi Yerler", "Modern Yapılar"]
    },
    {
        name: "Kütahya",
        image: "images/kutahya.jpg",
        description: "Ege Bölgesi'nin iç kesimlerinde, çini sanatıyla ünlü şehir",
        history: "Kütahya, tarihi M.Ö. 3000'lere kadar uzanan, Frig, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Kotiaeion' olarak bilinen şehir, önemli bir kültür merkezi olmuştur.",
        categories: ["Kütahya Kalesi", "Ulu Camii", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Malatya",
        image: "images/malatya.jpg",
        description: "Doğu Anadolu'nun batısında, kayısı bahçeleriyle ünlü şehir",
        history: "Malatya, tarihi M.Ö. 6000'lere kadar uzanan, Hitit, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Melitene' olarak bilinen şehir, önemli bir ticaret merkezi olmuştur.",
        categories: ["Malatya Kalesi", "Battalgazi Ulu Camii", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Manisa",
        image: "images/manisa.jpg",
        description: "Ege Bölgesi'nin iç kesimlerinde, mesir macunuyla ünlü şehir",
        history: "Manisa, tarihi M.Ö. 3000'lere kadar uzanan, Lidya, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Magnesia' olarak bilinen şehir, önemli bir kültür merkezi olmuştur.",
        categories: ["Manisa Kalesi", "Ulu Camii", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Mardin",
        image: "images/mardin.jpg",
        description: "Güneydoğu Anadolu'nun en eski şehirlerinden, taş evleriyle ünlü şehir",
        history: "Mardin, tarihi M.Ö. 4000'lere kadar uzanan, Sümer, Asur, Pers ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Marde' olarak bilinen şehir, önemli bir kültür merkezi olmuştur.",
        categories: ["Mardin Kalesi", "Deyrulzafaran Manastırı", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Mersin",
        image: "images/mersin.jpg",
        description: "Akdeniz'in önemli liman şehirlerinden, antik kentleriyle ünlü şehir",
        history: "Mersin, tarihi M.Ö. 7000'lere kadar uzanan, Hitit, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Zephyrion' olarak bilinen şehir, önemli bir liman kenti olmuştur.",
        categories: ["Kızkalesi", "Cennet-Cehennem Obrukları", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Muğla",
        image: "images/mugla.jpg",
        description: "Ege Bölgesi'nin güneyinde, turistik beldeleriyle ünlü şehir",
        history: "Muğla, tarihi M.Ö. 3000'lere kadar uzanan, Karya, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Mobolla' olarak bilinen şehir, önemli bir kültür merkezi olmuştur.",
        categories: ["Muğla Kalesi", "Ulu Camii", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Muş",
        image: "images/mus.jpg",
        description: "Doğu Anadolu'nun önemli şehirlerinden, tarihi dokusuyla öne çıkan şehir",
        history: "Muş, tarihi M.Ö. 2000'lere kadar uzanan, Urartu, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Taron' olarak bilinen şehir, önemli bir yerleşim merkezi olmuştur.",
        categories: ["Muş Kalesi", "Ulu Camii", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Nevşehir",
        image: "images/nevsehir.jpg",
        description: "İç Anadolu'nun ortasında, Kapadokya bölgesinin merkezi",
        history: "Nevşehir, tarihi M.Ö. 3000'lere kadar uzanan, Hitit, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Nyssa' olarak bilinen şehir, önemli bir kültür merkezi olmuştur.",
        categories: ["Nevşehir Kalesi", "Damat İbrahim Paşa Külliyesi", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Niğde",
        image: "images/nigde.jpg",
        description: "İç Anadolu'nun güneyinde, Aladağlar'ın eteklerinde yer alan şehir",
        history: "Niğde, tarihi M.Ö. 3000'lere kadar uzanan, Hitit, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Nahita' olarak bilinen şehir, önemli bir yerleşim merkezi olmuştur.",
        categories: ["Niğde Kalesi", "Aladağlar Milli Parkı", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Ordu",
        image: "images/ordu.jpg",
        description: "Karadeniz'in önemli şehirlerinden, fındık bahçeleriyle ünlü şehir",
        history: "Ordu, tarihi M.Ö. 2000'lere kadar uzanan, Hitit, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Kotyora' olarak bilinen şehir, önemli bir liman kenti olmuştur.",
        categories: ["Ordu Kalesi", "Çiseli Şelalesi", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Osmaniye",
        image: "images/osmaniye.jpg",
        description: "Akdeniz Bölgesi'nin doğusunda, doğal güzellikleriyle öne çıkan şehir",
        history: "Osmaniye, tarihi M.Ö. 2000'lere kadar uzanan, Hitit, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Flaviopolis' olarak bilinen şehir, önemli bir yerleşim merkezi olmuştur.",
        categories: ["Kastabala Antik Kenti", "Karatepe Aslantaş", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Rize",
        image: "images/rize.jpg",
        description: "Karadeniz'in doğusunda, çay bahçeleriyle ünlü şehir",
        history: "Rize, tarihi M.Ö. 2000'lere kadar uzanan, Hitit, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Rizos' olarak bilinen şehir, önemli bir liman kenti olmuştur.",
        categories: ["Rize Kalesi", "Zil Kalesi", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Sakarya",
        image: "images/sakarya.jpg",
        description: "Marmara Bölgesi'nin doğusunda, doğal güzellikleriyle öne çıkan şehir",
        history: "Sakarya, tarihi M.Ö. 3000'lere kadar uzanan, Bitinya, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Adapazarı' olarak bilinen şehir, önemli bir yerleşim merkezi olmuştur.",
        categories: ["Sakarya Müzesi", "Sapanca Gölü", "Tarihi Yerler", "Doğal Güzellikler"]
    },
    {
        name: "Samsun",
        image: "images/samsun.jpg",
        description: "Karadeniz'in en büyük şehri, Kurtuluş Savaşı'nın başlangıç noktası",
        history: "Samsun, tarihi M.Ö. 3000'lere kadar uzanan, Hitit, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Amisos' olarak bilinen şehir, önemli bir liman kenti olmuştur.",
        categories: ["Bandırma Vapuru", "Samsun Müzesi", "Tarihi Yerler", "Kültürel Merkezler"]
    },
    {
        name: "Siirt",
        image: "images/siirt.jpg",
        description: "Güneydoğu Anadolu'nun doğusunda, tarihi dokusuyla öne çıkan şehir",
        history: "Siirt, tarihi M.Ö. 2000'lere kadar uzanan, Hurri, Asur, Pers ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Saird' olarak bilinen şehir, önemli bir kültür merkezi olmuştur.",
        categories: ["Siirt Kalesi", "Ulu Camii", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Sinop",
        image: "images/sinop.jpg",
        description: "Karadeniz'in en kuzeyinde, tarihi liman şehri",
        history: "Sinop, tarihi M.Ö. 3000'lere kadar uzanan, Hitit, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Sinope' olarak bilinen şehir, önemli bir liman kenti olmuştur.",
        categories: ["Sinop Kalesi", "Tarihi Cezaevi", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Sivas",
        image: "images/sivas.jpg",
        description: "İç Anadolu'nun önemli şehirlerinden, Selçuklu eserleriyle ünlü şehir",
        history: "Sivas, tarihi M.Ö. 2000'lere kadar uzanan, Hitit, Pers, Roma ve Selçuklu medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Sebasteia' olarak bilinen şehir, önemli bir kültür merkezi olmuştur.",
        categories: ["Sivas Kalesi", "Gök Medrese", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Şanlıurfa",
        image: "images/sanliurfa.jpg",
        description: "Güneydoğu Anadolu'nun en eski şehirlerinden, peygamberler şehri",
        history: "Şanlıurfa, tarihi M.Ö. 9000'lere kadar uzanan, Sümer, Asur, Pers ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Edessa' olarak bilinen şehir, önemli bir kültür merkezi olmuştur.",
        categories: ["Balıklıgöl", "Urfa Kalesi", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Şırnak",
        image: "images/sirnak.jpg",
        description: "Güneydoğu Anadolu'nun en doğusunda, doğal güzellikleriyle öne çıkan şehir",
        history: "Şırnak, tarihi M.Ö. 2000'lere kadar uzanan, Hurri, Asur, Pers ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Şehr-i Nuh' olarak bilinen şehir, önemli bir yerleşim merkezi olmuştur.",
        categories: ["Cizre Ulu Camii", "Beyaz Köprü", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Tekirdağ",
        image: "images/tekirdag.jpg",
        description: "Trakya'nın önemli şehirlerinden, şarap üretimiyle ünlü şehir",
        history: "Tekirdağ, tarihi M.Ö. 3000'lere kadar uzanan, Trak, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Bisanthe' olarak bilinen şehir, önemli bir liman kenti olmuştur.",
        categories: ["Tekirdağ Müzesi", "Rakoczi Müzesi", "Tarihi Yerler", "Kültürel Merkezler"]
    },
    {
        name: "Tokat",
        image: "images/tokat.jpg",
        description: "Karadeniz'in iç kesimlerinde, tarihi dokusuyla öne çıkan şehir",
        history: "Tokat, tarihi M.Ö. 3000'lere kadar uzanan, Hitit, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Eudoxia' olarak bilinen şehir, önemli bir kültür merkezi olmuştur.",
        categories: ["Tokat Kalesi", "Ulu Camii", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Tunceli",
        image: "images/tunceli.jpg",
        description: "Doğu Anadolu'nun batısında, doğal güzellikleriyle öne çıkan şehir",
        history: "Tunceli, tarihi M.Ö. 2000'lere kadar uzanan, Urartu, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Dersim' olarak bilinen şehir, önemli bir yerleşim merkezi olmuştur.",
        categories: ["Tunceli Kalesi", "Munzur Vadisi", "Müzeler", "Doğal Güzellikler"]
    },
    {
        name: "Uşak",
        image: "images/usak.jpg",
        description: "Ege Bölgesi'nin iç kesimlerinde, halı dokumacılığıyla ünlü şehir",
        history: "Uşak, tarihi M.Ö. 2000'lere kadar uzanan, Frig, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Temenothyrae' olarak bilinen şehir, önemli bir ticaret merkezi olmuştur.",
        categories: ["Uşak Müzesi", "Clandras Köprüsü", "Tarihi Yerler", "Kültürel Merkezler"]
    },
    {
        name: "Van",
        image: "images/van.jpg",
        description: "Doğu Anadolu'nun en büyük şehirlerinden, Van Gölü kıyısında yer alan şehir",
        history: "Van, tarihi M.Ö. 3000'lere kadar uzanan, Urartu, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Tuspa' olarak bilinen şehir, önemli bir kültür merkezi olmuştur.",
        categories: ["Van Kalesi", "Akdamar Adası", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Yalova",
        image: "images/yalova.jpg",
        description: "Marmara Bölgesi'nin güneydoğusunda, termal kaynaklarıyla ünlü şehir",
        history: "Yalova, tarihi M.Ö. 3000'lere kadar uzanan, Bitinya, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Pylai' olarak bilinen şehir, önemli bir yerleşim merkezi olmuştur.",
        categories: ["Termal Kaplıcaları", "Yalova Müzesi", "Tarihi Yerler", "Doğal Güzellikler"]
    },
    {
        name: "Yozgat",
        image: "images/yozgat.jpg",
        description: "İç Anadolu'nun kuzeydoğusunda, tarihi dokusuyla öne çıkan şehir",
        history: "Yozgat, tarihi M.Ö. 2000'lere kadar uzanan, Hitit, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Bozok' olarak bilinen şehir, önemli bir yerleşim merkezi olmuştur.",
        categories: ["Yozgat Kalesi", "Saat Kulesi", "Müzeler", "Tarihi Yerler"]
    },
    {
        name: "Zonguldak",
        image: "images/zonguldak.jpg",
        description: "Batı Karadeniz'in önemli şehirlerinden, kömür madenleriyle ünlü şehir",
        history: "Zonguldak, tarihi M.Ö. 2000'lere kadar uzanan, Hitit, Pers, Roma ve Osmanlı medeniyetlerinin izlerini taşıyan bir şehirdir. Antik dönemde 'Sandrake' olarak bilinen şehir, önemli bir liman kenti olmuştur.",
        categories: ["Gökgöl Mağarası", "Zonguldak Müzesi", "Tarihi Yerler", "Doğal Güzellikler"]
    }
];

// Global fonksiyonları tanımla
window.createCityCard = function(city) {
    return `
        <div class="city-card">
            <img src="${city.image}" alt="${city.name}" class="city-card-image" onerror="this.src='images/default-city.jpg'">
            <h3 class="city-card-title">${city.name}</h3>
            <div class="city-card-line"></div>
            <p class="city-card-desc">${city.description}</p>
            <div class="city-card-section-title">Gezilmesi gereken yerler</div>
            <ul class="city-card-list">
                ${city.categories.map(place => `<li>${place}</li>`).join('')}
            </ul>
        </div>
    `;
};

window.filterCities = function(searchTerm) {
    const filteredCities = window.cities.filter(city => 
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        <div class="slider-track">
            ${filteredCities.map(city => window.createCityCard(city)).join('')}
        </div>
        <button class="slider-arrow right-arrow">&#10095;</button>
    `;
    // Slider fonksiyonu
    const track = document.querySelector('.slider-track');
    const leftBtn = document.querySelector('.left-arrow');
    const rightBtn = document.querySelector('.right-arrow');
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
    console.log('Sayfa yüklendi');
    
    // Elementlerin varlığını kontrol et
    const searchBox = document.getElementById('citySearch');
    const resultsContainer = document.getElementById('resultsContainer');
    const cityDetail = document.getElementById('cityDetail');

    if (!searchBox || !resultsContainer || !cityDetail) {
        console.error('Gerekli elementler bulunamadı!');
        return;
    }

    console.log('Şehir sayısı:', window.cities.length);
    
    // Arama kutusu event listener'ı
    searchBox.addEventListener('input', (e) => {
        const searchTerm = e.target.value;
        console.log('Arama terimi:', searchTerm);
        window.filterCities(searchTerm);
    });

    // Sayfa yüklendiğinde tüm şehirleri göster
    console.log('Tüm şehirler gösteriliyor...');
    window.filterCities('');
});

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