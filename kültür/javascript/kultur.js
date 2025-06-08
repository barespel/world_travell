document.addEventListener('DOMContentLoaded', function() {
    // Logo ve başlık tıklama olayı
    const navBrand = document.querySelector('.nav-brand');
    if (navBrand) {
        navBrand.style.cursor = 'pointer';
        navBrand.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    // Yer kartlarına hover efekti
    const placeCards = document.querySelectorAll('.place-card');
    placeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Sayfa yüklendiğinde animasyon
    const header = document.querySelector('.adiyaman-header');
    const categories = document.querySelectorAll('.category-section');

    if (header) header.style.opacity = '0';
    categories.forEach(category => {
        category.style.opacity = '0';
    });

    setTimeout(() => {
        if (header) {
            header.style.transition = 'opacity 1s ease';
            header.style.opacity = '1';
        }
    }, 100);

    categories.forEach((category, index) => {
        setTimeout(() => {
            category.style.transition = 'opacity 1s ease';
            category.style.opacity = '1';
        }, 300 + (index * 200));
    });
});

// Müze detayları için veri
const museumDetails = {
    'trabzon-muzesi': {
        title: 'Trabzon Müzesi',
        description: 'Trabzon Müzesi, 1917 yılında Kostaki Konağı olarak inşa edilmiş bir yapıda hizmet vermektedir. Müzede, Trabzon ve çevresinden toplanan arkeolojik ve etnografik eserler sergilenmektedir.',
        image: 'images/trabzon_kulturel/trabzonmuzesi.jpg',
        address: 'Zeytinlik Mahallesi, Trabzon Müzesi Caddesi, Ortahisar/Trabzon',
        visitingHours: '09:00 - 17:00',
        entryFee: 'Ücretli'
    },
    'ayasofya-muzesi': {
        title: 'Ayasofya Müzesi',
        description: 'Ayasofya Müzesi, Bizans döneminden kalma freskleri ve mozaikleriyle ünlüdür. Müze, Hristiyan sanatının en güzel örneklerinden birini sunmaktadır.',
        image: 'images/trabzon_kulturel/trabzonayasofyamuzesi.jpg',
        address: 'Fatih Mahallesi, Ayasofya Caddesi, Ortahisar/Trabzon',
        visitingHours: '09:00 - 17:00',
        entryFee: 'Ücretsiz'
    },
    'osmaniye-muzesi': {
        title: 'Osmaniye Müzesi',
        description: 'Osmaniye Müzesi, bölgenin zengin tarihini ve kültürünü yansıtan modern bir müzedir. Arkeolojik ve etnografik eserlerin sergilendiği müze, Osmaniye\'nin merkezinde yer almaktadır.',
        image: 'images/osmaniye_kulturel/osmaniye-muzesi.jpg',
        address: 'Merkez Mahallesi, Osmaniye',
        visitingHours: '09:00 - 17:00',
        entryFee: 'Ücretsiz',
        phone: '0328 456 78 90'
    },
    'karatepe-muzesi': {
        title: 'Karatepe Müzesi',
        description: 'Karatepe Müzesi, Hitit dönemine ait eserlerin sergilendiği açık hava müzesidir. Müze, Karatepe Aslantaş Açık Hava Müzesi\'nin bir parçası olarak hizmet vermektedir.',
        image: 'images/osmaniye_kulturel/karatepe-muzesi.jpg',
        address: 'Karatepe Mahallesi, Kadirli/Osmaniye',
        visitingHours: '08:00 - 17:00',
        entryFee: 'Ücretsiz',
        phone: '0328 567 89 01'
    },
    'mardinmuzesi': {
        title: 'Mardin Müzesi',
        description: 'Mardin ve çevresinin zengin tarihini ve kültürel mirasını sergileyen müze, arkeolojik eserler ve etnografik koleksiyonlar içeriyor.',
        visitingHours: '09:00 - 17:00 (Pazartesi hariç)',
        entryFee: 'Ücretsiz',
        address: 'Cumhuriyet Meydanı, Artuklu/Mardin',
        contact: '0482 212 16 64'
    },
    'sabancı': {
        title: 'Sakıp Sabancı Kent Müzesi',
        description: 'Mardin\'in kentsel ve kültürel tarihini yansıtan müze, şehrin sosyal ve ekonomik yaşamını belgeleyen eserler sergiliyor.',
        visitingHours: '09:00 - 17:00 (Pazartesi hariç)',
        entryFee: 'Ücretsiz',
        address: 'Cumhuriyet Meydanı, Artuklu/Mardin',
        contact: '0482 212 16 64'
    },
    'gumushane': {
        title: 'Zeugma Mozaik Müzesi',
        description: 'Dünyanın en büyük mozaik müzelerinden biri olan Zeugma Mozaik Müzesi, Roma döneminden kalma eşsiz mozaikleri barındırmaktadır. Müze, Zeugma antik kentinden çıkarılan mozaiklerin yanı sıra, freskler, heykeller ve diğer arkeolojik eserleri de sergilemektedir. Özellikle "Çingene Kızı" mozaiği müzenin en değerli eserlerinden biridir.',
        hours: '09:00 - 17:00',
        price: '30 TL',
        address: 'Mithatpaşa Mahallesi, Hacı Sani Konukoğlu Bulvarı No:275, Şehitkamil, Gaziantep',
        contact: '0342 325 27 27'
    },
    'etnografya10': {
        title: 'Emine Göğüş Mutfak Müzesi',
        description: 'Geleneksel Gaziantep mutfağının tüm detaylarını yansıtan, Türkiye\'nin ilk mutfak müzesidir. Müze, 19. yüzyıldan kalma bir evde kurulmuş olup, dönemin mutfak eşyaları, yemek tarifleri ve mutfak kültürü hakkında detaylı bilgiler sunmaktadır. Ziyaretçiler, Gaziantep\'in zengin mutfak kültürünü yakından tanıma fırsatı bulmaktadır.',
        hours: '09:00 - 17:00',
        price: '10 TL',
        address: 'Kozluca Mahallesi, Hanifi Oğlu Sokak No:64, Şahinbey, Gaziantep',
        contact: '0342 230 47 21'
    },
    'madenmuzesi': {
            title: 'Odunpazarı Modern Müze',
            description: 'Modern sanat eserlerinin sergilendiği, mimari tasarımıyla dikkat çeken müze. Japon mimar Kengo Kuma tarafından tasarlanan müze, ahşap yapısı ve modern mimarisiyle öne çıkmaktadır. Çağdaş sanat eserlerinin yanı sıra, düzenli olarak geçici sergilere de ev sahipliği yapmaktadır.',
            hours: '10:00 - 18:00',
            price: '20 TL',
            address: 'Akarbaşı Mahallesi, Atatürk Bulvarı No:37, Odunpazarı, Eskişehir',
            contact: '0222 220 26 05'
        },
    'zeugma-muzesi': {
        title: 'Zeugma Mozaik Müzesi',
        description: 'Dünyanın en büyük mozaik müzelerinden biri olan Zeugma Mozaik Müzesi, Roma döneminden kalma eşsiz mozaikleri barındırmaktadır. Müze, Zeugma antik kentinden çıkarılan mozaiklerin yanı sıra, freskler, heykeller ve diğer arkeolojik eserleri de sergilemektedir. Özellikle "Çingene Kızı" mozaiği müzenin en değerli eserlerinden biridir.',
        hours: '09:00 - 17:00',
        price: '30 TL',
        address: 'Mithatpaşa Mahallesi, Hacı Sani Konukoğlu Bulvarı No:275, Şehitkamil, Gaziantep',
        contact: '0342 325 27 27'
    },
    'emine-gogus-muzesi': {
        title: 'Emine Göğüş Mutfak Müzesi',
        description: 'Geleneksel Gaziantep mutfağının tüm detaylarını yansıtan, Türkiye\'nin ilk mutfak müzesidir. Müze, 19. yüzyıldan kalma bir evde kurulmuş olup, dönemin mutfak eşyaları, yemek tarifleri ve mutfak kültürü hakkında detaylı bilgiler sunmaktadır. Ziyaretçiler, Gaziantep\'in zengin mutfak kültürünü yakından tanıma fırsatı bulmaktadır.',
        hours: '09:00 - 17:00',
        price: '10 TL',
        address: 'Kozluca Mahallesi, Hanifi Oğlu Sokak No:64, Şahinbey, Gaziantep',
        contact: '0342 230 47 21'
    },
    'odunpazari-muzesi': {
            title: 'Odunpazarı Modern Müze',
            description: 'Modern sanat eserlerinin sergilendiği, mimari tasarımıyla dikkat çeken müze. Japon mimar Kengo Kuma tarafından tasarlanan müze, ahşap yapısı ve modern mimarisiyle öne çıkmaktadır. Çağdaş sanat eserlerinin yanı sıra, düzenli olarak geçici sergilere de ev sahipliği yapmaktadır.',
            hours: '10:00 - 18:00',
            price: '20 TL',
            address: 'Akarbaşı Mahallesi, Atatürk Bulvarı No:37, Odunpazarı, Eskişehir',
            contact: '0222 220 26 05'
        },
        'balmumu-muzesi': {
            title: 'Balmumu Müzesi',
            description: 'Türk ve dünya tarihinden önemli kişilerin balmumu heykellerinin sergilendiği müze. Atatürk\'ten Einstein\'a, Mevlana\'dan Shakespeare\'e kadar birçok önemli ismin balmumu heykelleri bulunmaktadır. Müze, ziyaretçilerine tarihi kişiliklerle yakından tanışma fırsatı sunmaktadır.',
            hours: '10:00 - 18:00',
            price: '15 TL',
            address: 'Akarbaşı Mahallesi, Atatürk Bulvarı No:37, Odunpazarı, Eskişehir',
            contact: '0222 220 26 06'
        },
    'erzurum-muzesi': {
        title: 'Erzurum Müzesi',
        description: 'Erzurum Müzesi, bölgenin zengin tarihini ve kültürel mirasını yansıtan önemli bir müzedir. Arkeolojik eserler, etnografik koleksiyonlar ve tarihi belgeler sergilenmektedir. Müze, Erzurum\'ın tarih öncesi dönemlerden günümüze kadar olan sürecini kapsamlı bir şekilde ele almaktadır.',
        hours: '09:00 - 17:00',
        price: '15 TL',
        address: 'Müze Caddesi No:1, Erzurum',
        contact: '0442 234 11 69'
    },
    'ataturk-evi': {
        title: 'Atatürk Evi',
        description: 'Mustafa Kemal Atatürk\'ün Erzurum Kongresi sırasında kaldığı tarihi ev, günümüzde müze olarak hizmet vermektedir. Kongre dönemine ait eşyalar ve belgeler sergilenmektedir. Milli mücadele döneminin önemli tanıklarından biri olan ev, ziyaretçilerine tarihi bir yolculuk sunmaktadır.',
        hours: '09:00 - 17:00',
        price: 'Ücretsiz',
        address: 'Kongre Caddesi No:1, Erzurum',
        contact: '0442 234 11 70'
    },
    'erzincan-muzesi': {
        title: 'Erzincan Müzesi',
        description: 'Erzincan Müzesi, şehrin zengin tarihini ve kültürel mirasını yansıtan önemli bir müzedir. Arkeolojik eserler, etnografik koleksiyonlar ve tarihi belgeler sergilenmektedir. Müze, Erzincan\'ın tarih öncesi dönemlerden günümüze kadar olan sürecini kapsamlı bir şekilde ele almaktadır.',
        hours: '09:00 - 17:00',
        price: '15 TL',
        address: 'Müze Caddesi No:1, Erzincan',
        contact: '0446 214 11 69'
    },
    'refahiye-muzesi': {
        title: 'Refahiye Müzesi',
        description: 'Refahiye Müzesi, ilçenin tarihi ve kültürel değerlerini sergileyen önemli bir müzedir. Yöresel eserler, arkeolojik buluntular ve etnografik materyaller müzenin koleksiyonunu oluşturmaktadır. Müze, Refahiye\'nin zengin kültürel mirasını ziyaretçilerine sunmaktadır.',
        hours: '09:00 - 17:00',
        price: '10 TL',
        address: 'Refahiye Merkez, Erzincan',
        contact: '0446 311 20 00'
    },
    'arkeolojik': {
        title: 'Elazığ Arkeoloji ve Etnografya Müzesi',
        description: 'Elazığ ve çevresinin zengin tarihini ve kültürel mirasını sergileyen müze, arkeolojik eserler ve etnografik koleksiyonlar sunmaktadır.',
        visitingHours: '09:00 - 17:00 (Pazartesi hariç)',
        entryFee: 'Ücretsiz',
        address: 'Kültür Mahallesi, Müze Sokak No:1, Elazığ',
        contact: '0424 212 27 48'
    },
    'harputmuzesi': {
        title: 'Harput Müzesi',
        description: 'Harput\'un tarihi ve kültürel mirasını sergileyen müze, bölgenin zengin tarihini yansıtan eserler barındırmaktadır.',
        visitingHours: '09:00 - 17:00 (Pazartesi hariç)',
        entryFee: 'Ücretsiz',
        address: 'Harput Mahallesi, Müze Sokak No:1, Elazığ',
        contact: '0424 212 27 49'
    },
    'edirne-muzesi': {
        title: 'Edirne Müzesi',
        description: 'Edirne Müzesi, şehrin zengin tarihini ve kültürel mirasını yansıtan önemli bir müzedir. Osmanlı döneminden kalma eserler, arkeolojik buluntular ve etnografik koleksiyonlar sergilenmektedir.',
        hours: '09:00 - 17:00',
        price: '20 TL',
        address: 'Meydan Mahallesi, Kadirpaşa Mektep Sokak No:7, Edirne',
        contact: '0284 225 11 20'
    },
    'saglik-muzesi': {
        title: 'Sağlık Müzesi',
        description: 'Edirne Sağlık Müzesi, Osmanlı döneminde tıp eğitiminin verildiği Darüşşifa binasında yer almaktadır. Dönemin tıp aletleri, tedavi yöntemleri ve sağlık hizmetleri hakkında bilgi veren önemli bir müzedir.',
        hours: '09:00 - 17:00',
        price: '15 TL',
        address: 'Darüşşifa Caddesi No:1, Edirne',
        contact: '0284 224 09 22'
    },
    'arkeoloji3': {
        title: 'Diyarbakır Arkeoloji Müzesi',
        description: 'Diyarbakır ve çevresinin zengin arkeolojik mirasını sergileyen müze, Mezopotamya\'nın kadim medeniyetlerine ait eserleri barındırıyor.',
        visitingHours: '09:00 - 17:00 (Pazartesi hariç)',
        entryFee: 'Ücretsiz',
        address: 'Cahit Sıtkı Tarancı Mahallesi, Elazığ Caddesi No:1, Sur/Diyarbakır',
        contact: '0412 228 30 00'
    },
    'cahitsitki': {
        title: 'Cahit Sıtkı Tarancı Müzesi',
        description: 'Ünlü şair Cahit Sıtkı Tarancı\'nın doğduğu ve çocukluğunu geçirdiği ev, şairin kişisel eşyaları ve eserleriyle birlikte ziyaretçilere açık.',
        visitingHours: '09:00 - 17:00 (Pazartesi hariç)',
        entryFee: 'Ücretsiz',
        address: 'Cami Kebir Mahallesi, Cahit Sıtkı Tarancı Sokak No:1, Sur/Diyarbakır',
        contact: '0412 228 30 00'
    },
    'arkeoloji4': {
        title: 'Çankırı Müzesi',
        description: 'Çankırının tarihi ve kültürel mirasını yansıtan müze, arkeolojik eserler ve etnografik koleksiyonlar sunmaktadır.',
        hours: '09:00 - 17:00',
        price: 'Ücretsiz',
        address: 'Merkez, Çankırı',
        contact: '0376 213 45 67'
    },
    'bogazköy': {
        title: 'Çankırı Tarih Müzesi',
        description: 'Şehrin tarihini ve kültürel gelişimini anlatan müze, önemli tarihi eserleri barındırmaktadır.',
        hours: '09:00 - 17:00',
        price: 'Ücretsiz',
        address: 'Merkez, Çankırı',
        contact: '0376 213 45 68'
    },
    'etnografya4': {
            title: 'Çanakkale Arkeoloji Müzesi',
            description: 'Çanakkale Arkeoloji Müzesi, bölgenin zengin arkeolojik eserlerini sergileyen önemli bir müzedir. Troya, Assos ve diğer antik kentlerden çıkarılan eserler bulunmaktadır.',
            hours: '09:00 - 17:00',
            price: 'Ücretsiz',
            address: 'Merkez, Çanakkale',
            contact: '0286 217 65 65'
        },
    'cankiri': {
        title: 'Çankırı Müzesi',
        description: 'Çankırının tarihi ve kültürel mirasını yansıtan müze, arkeolojik eserler ve etnografik koleksiyonlar sunmaktadır.',
        hours: '09:00 - 17:00',
        price: 'Ücretsiz',
        address: 'Merkez, Çankırı',
        contact: '0376 213 45 67'
    },
    'karatekin': {
        title: 'Çankırı Tarih Müzesi',
        description: 'Şehrin tarihini ve kültürel gelişimini anlatan müze, önemli tarihi eserleri barındırmaktadır.',
        hours: '09:00 - 17:00',
        price: 'Ücretsiz',
        address: 'Merkez, Çankırı',
        contact: '0376 213 45 68'
    },
    'arkeoloji2': {
            title: 'Çanakkale Arkeoloji Müzesi',
            description: 'Çanakkale Arkeoloji Müzesi, bölgenin zengin arkeolojik eserlerini sergileyen önemli bir müzedir. Troya, Assos ve diğer antik kentlerden çıkarılan eserler bulunmaktadır.',
            hours: '09:00 - 17:00',
            price: 'Ücretsiz',
            address: 'Merkez, Çanakkale',
            contact: '0286 217 65 65'
        },
        'troy': {
            title: 'Troya Müzesi',
            description: 'Troya Müzesi, Troya antik kentinden çıkarılan eserlerin sergilendiği modern bir müzedir. Müze, Troya\'nın 5000 yıllık tarihini anlatan zengin bir koleksiyona sahiptir.',
            hours: '09:00 - 17:00',
            price: '50 TL',
            address: 'Tevfikiye, Çanakkale',
            contact: '0286 217 65 65'
        },
    'arkeoloji': {
        title: 'Bursa Arkeoloji Müzesi',
        description: 'Bursa Arkeoloji Müzesi, bölgenin zengin arkeolojik eserlerini sergileyen önemli bir müzedir. Roma, Bizans ve Osmanlı dönemlerine ait eserler bulunmaktadır.',
        hours: '09:00 - 17:00',
        price: 'Ücretsiz',
        address: 'Merkez, Bursa',
        contact: '0224 234 49 18'
    },
    'osmanli': {
        title: 'Osmanlı Evi Müzesi',
        description: 'Osmanlı Evi Müzesi, Osmanlı dönemi yaşamını yansıtan etnografik bir müzedir. Dönemin ev yaşamı, gelenekleri ve kültürü hakkında detaylı bilgiler sunmaktadır.',
        hours: '09:00 - 17:00',
        price: 'Ücretsiz',
        address: 'Merkez, Bursa',
        contact: '0224 234 49 18'
    },
    'burdur': {
            title: 'Burdur Müzesi',
            description: 'Burdur Müzesi, bölgenin zengin arkeolojik ve etnografik eserlerini sergileyen önemli bir müzedir. Sagalassos ve Kremna antik kentlerinden çıkarılan eserler ile yöresel kültürü yansıtan etnografik koleksiyonlar bulunmaktadır.',
            hours: '09:00 - 17:00',
            price: 'Ücretsiz',
            address: 'Merkez, Burdur',
            contact: '0248 233 10 42'
        },
        'sagalassos': {
            title: 'Sagalassos Antik Kenti',
            description: 'Sagalassos Antik Kenti, Roma döneminden kalma önemli bir antik kenttir. Açık hava müzesi olarak ziyaret edilebilen kentte, tiyatro, kütüphane, hamam gibi yapılar bulunmaktadır.',
            hours: '08:00 - 19:00',
            price: '50 TL',
            address: 'Ağlasun, Burdur',
            contact: '0248 233 10 42'
        },
    'bolu': {
        title: 'Bolu Müzesi',
        description: 'Bolu Müzesi, şehrin zengin tarihini ve kültürel mirasını sergileyen önemli bir müzedir. Arkeolojik eserler, etnografik koleksiyonlar ve tarihi objeler bulunmaktadır.',
        hours: '09:00 - 17:00',
        price: 'Ücretsiz',
        address: 'Merkez, Bolu',
        contact: '0374 215 11 96'
    },
    'seben': {
        title: 'Seben Müzesi',
        description: 'Seben Müzesi, bölgenin tarihi ve kültürel zenginliklerini yansıtan önemli bir müzedir. Yerel tarih ve kültür hakkında detaylı bilgiler sunmaktadır.',
        hours: '09:00 - 17:00',
        price: 'Ücretsiz',
        address: 'Seben, Bolu',
        contact: '0374 411 20 00'
    },
    'bitlis': {
        title: 'Bitlis Müzesi',
        description: 'Bölgenin zengin tarihini yansıtan müze, Paleolitik dönemden günümüze kadar uzanan eserleri barındırır. Özellikle Urartu ve Selçuklu dönemine ait eserler dikkat çekicidir.',
        hours: '09:00 - 17:00',
        price: '20 TL',
        address: 'Cumhuriyet Caddesi No:1, Merkez/Bitlis',
        contact: '0434 226 11 91'
    },
    'ahlat': {
        title: 'Ahlat Müzesi',
        description: 'Selçuklu dönemine ait eserlerin sergilendiği müze, özellikle mezar taşları ve anıtlar açısından zengin bir koleksiyona sahiptir.',
        hours: '09:00 - 17:00',
        price: '20 TL',
        address: 'Ahlat/Bitlis',
        contact: '0434 226 11 92'
    },
    'bingol': {
        title: 'Bingöl Müzesi',
        description: 'Bölgenin zengin tarihini yansıtan müze, Paleolitik dönemden günümüze kadar uzanan eserleri barındırır. Özellikle Urartu dönemine ait eserler dikkat çekicidir.',
        hours: '09:00 - 17:00',
        price: '20 TL',
        address: 'Cumhuriyet Caddesi No:1, Merkez/Bingöl',
        contact: '0426 213 11 91'
    },
    'etnografya3': {
        title: 'Etnografya Müzesi',
        description: 'Yöresel kültürü ve tarihi yansıtan etnografik eserlerin sergilendiği müze, geleneksel el sanatları ve günlük yaşam objelerini içerir.',
        hours: '09:00 - 17:00',
        price: '20 TL',
        address: 'Cumhuriyet Caddesi No:2, Merkez/Bingöl',
        contact: '0426 213 11 92'
    },
    'adiyaman': {
        title: 'Adıyaman Müzesi',
        description: 'Bölgenin zengin tarihini yansıtan müze, Paleolitik dönemden günümüze kadar uzanan eserleri barındırır. Özellikle Kommagene Krallığı dönemine ait eserler dikkat çekicidir.',
        hours: '09:00 - 17:00',
        price: '20 TL',
        address: 'Atatürk Bulvarı No:1, Merkez/Adıyaman',
        contact: '0416 216 29 29'
    },
    'kommagene': {
        title: 'Kommagene Müzesi',
        description: 'Nemrut Dağı\'ndan çıkarılan eserlerin sergilendiği özel müze, Kommagene Krallığı\'nın zengin kültürel mirasını yansıtır. Devasa heykeller ve kabartmalar müzenin en önemli eserleridir.',
        hours: '09:00 - 17:00',
        price: '30 TL',
        address: 'Kahta Yolu Üzeri, Kahta/Adıyaman',
        contact: '0416 725 50 07'
    },
    'arkeoloji3': {
        title: 'Adana Arkeoloji Müzesi',
        description: 'Çukurova\'nın zengin tarihini yansıtan müze, Hitit, Roma, Bizans ve Osmanlı dönemlerine ait önemli eserleri barındırır. Özellikle Roma dönemi mozaikleri ve heykelleriyle ünlüdür.',
        hours: '09:00 - 17:00',
        price: '20 TL',
        address: 'Döşeme Mahallesi, 7 Ocak Bulvarı No:1, Seyhan/Adana',
        contact: '0322 454 38 55'
    } ,
    'ataturk': {
        title: 'Atatürk Müzesi',
        description: 'Mustafa Kemal Atatürk\'ün Adana\'ya gelişlerinde konakladığı tarihi ev, 19. yüzyıl sonlarında inşa edilmiştir. Müzede Atatürk\'ün kişisel eşyaları ve dönemin mobilyaları sergilenmektedir.',
        hours: '09:00 - 17:00',
        price: 'Ücretsiz',
        address: 'Kayalıbağ Mahallesi, Seyhan Caddesi No:1, Seyhan/Adana',
        contact: '0322 359 78 66'
    },
     'etnografya2': {
        title: 'Etnografya Müzesi',
        description: 'Adana\'nın geleneksel yaşamını ve kültürünü yansıtan etnografik eserlerin sergilendiği müze, yöresel el sanatları, giysiler ve günlük yaşam objelerini içerir.',
        hours: '09:00 - 17:00',
        price: '20 TL',
        address: 'Kuruköprü Mahallesi, Seyhan Caddesi No:1, Seyhan/Adana',
        contact: '0322 454 38 56'
    },
    'anitkabir': {
        title: 'Anıtkabir',
        description: 'Türkiye Cumhuriyeti\'nin kurucusu Mustafa Kemal Atatürk\'ün anıt mezarı. Modern Türk mimarisinin en önemli örneklerinden biri olan Anıtkabir, 1944-1953 yılları arasında inşa edilmiştir.',
        hours: '09:00 - 17:00',
        price: 'Ücretsiz',
        address: 'Anıt Cad. Tandoğan, 06520 Çankaya/Ankara',
        contact: '0312 231 79 75'
    },
    'etnografya': {
        title: 'Etnografya Müzesi',
        description: 'Türk kültürünün zengin mirasını yansıtan önemli bir müze. Selçuklu ve Osmanlı dönemlerine ait etnografik eserler sergilenmektedir.',
        hours: '08:30 - 17:30',
        price: '20 TL',
        address: 'Talatpaşa Bulvarı, Opera, 06050 Altındağ/Ankara',
        contact: '0312 311 30 07'
    },
    'cer': {
        title: 'Cumhuriyet Eğitim Müzesi',
        description: 'Eğitim tarihimizin önemli belgelerini barındıran müze. Cumhuriyet dönemi eğitim materyalleri ve belgeleri sergilenmektedir.',
        hours: '09:00 - 17:00',
        price: 'Ücretsiz',
        address: 'Atatürk Bulvarı No:98, 06680 Çankaya/Ankara',
        contact: '0312 425 24 50'
    }
};

// Tarihi yapılar için veri
const historicalDetails = {
    'ayasofya': {
        title: 'Ayasofya Müzesi',
        description: 'Trabzon Ayasofya Müzesi, 13. yüzyılda Bizans İmparatorluğu döneminde inşa edilmiş bir kilise olarak yapılmıştır. 1461 yılında Trabzon\'un fethinden sonra camiye çevrilmiş, 1964 yılında ise müze olarak hizmet vermeye başlamıştır. Yapı, eşsiz freskleri ve mozaikleriyle ünlüdür.',
        image: 'images/trabzon_kulturel/trabzonayasofyamuzesi.jpg',
        address: 'Fatih Mahallesi, Ayasofya Caddesi, Ortahisar/Trabzon',
        visitingHours: '09:00 - 17:00',
        entryFee: 'Ücretsiz'
    },
    'ataturk-kosku': {
        title: 'Atatürk Köşkü',
        description: 'Atatürk Köşkü, 1890 yılında Konstantin Kabayanidis tarafından yazlık ev olarak yaptırılmıştır. Atatürk, 1924 ve 1937 yıllarında Trabzon\'u ziyaretlerinde bu köşkte konaklamıştır. 1943 yılında Trabzon Belediyesi tarafından satın alınarak müze haline getirilmiştir.',
        image: 'images/trabzon_kulturel/ataturkkosku.jpg',
        address: 'Soğuksu Mahallesi, Atatürk Köşkü Caddesi, Ortahisar/Trabzon',
        visitingHours: '08:00 - 19:00',
        entryFee: 'Ücretsiz'
    },
    'gulbahar-hatun': {
        title: 'Gülbahar Hatun Camii',
        description: 'Gülbahar Hatun Camii, Yavuz Sultan Selim\'in annesi Gülbahar Hatun adına 1514 yılında yaptırılmıştır. Cami, klasik Osmanlı mimarisi özelliklerini taşımaktadır. Yanında Gülbahar Hatun\'un türbesi de bulunmaktadır.',
        image: 'images/trabzon_kulturel/gulbaharhatuncami.jpg',
        address: 'Gülbahar Hatun Mahallesi, Ortahisar/Trabzon',
        visitingHours: 'Her zaman açık',
        entryFee: 'Ücretsiz'
    },
    'kastabala': {
        title: 'Kastabala Antik Kenti',
        description: 'Kastabala Antik Kenti, Roma döneminden kalma önemli bir yerleşim yeridir. Sütunlu caddesi, tiyatrosu ve diğer yapılarıyla dikkat çeken antik kent, Osmaniye\'nin en önemli arkeolojik alanlarından biridir. Kent, M.Ö. 1. yüzyılda kurulmuş ve Roma döneminde önemli bir yerleşim merkezi olmuştur.',
        image: 'images/osmaniye_kulturel/kastabala.jpg',
        address: 'Kastabala Mahallesi, Kadirli/Osmaniye',
        visitingHours: '08:00 - 17:00',
        entryFee: 'Ücretsiz',
        phone: '0328 123 45 67'
    },
    'karatepe': {
        title: 'Karatepe Aslantaş Açık Hava Müzesi',
        description: 'Karatepe Aslantaş Açık Hava Müzesi, Geç Hitit döneminden kalma önemli bir arkeolojik alandır. M.Ö. 8. yüzyılda inşa edilen kale ve yerleşim yeri, Hitit hiyeroglif yazıtları ve kabartmalarıyla ünlüdür. UNESCO Dünya Mirası Geçici Listesi\'nde yer almaktadır.',
        image: 'images/osmaniye_kulturel/karatepe.jpg',
        address: 'Karatepe Mahallesi, Kadirli/Osmaniye',
        visitingHours: '08:00 - 17:00',
        entryFee: 'Ücretsiz',
        phone: '0328 234 56 78'
    },
    'haruniye': {
        title: 'Haruniye Kalesi',
        description: 'Haruniye Kalesi, Abbasi döneminde inşa edilmiş önemli bir savunma yapısıdır. Stratejik konumu nedeniyle tarih boyunca önemli bir askeri üs olarak kullanılmıştır. Kale, Osmaniye\'nin Düziçi ilçesinde yer almaktadır.',
        image: 'images/osmaniye_kulturel/haruniye.jpg',
        address: 'Haruniye Mahallesi, Düziçi/Osmaniye',
        visitingHours: 'Her zaman açık',
        entryFee: 'Ücretsiz',
        phone: '0328 345 67 89'
    },
    'dara': {
        title: 'Dara Antik Kenti',
        description: 'Mezopotamya\'nın en önemli antik kentlerinden biri olan Dara, Roma döneminden kalma su sarnıçları, kilise ve nekropol alanlarıyla ünlü.',
        visitingHours: '09:00 - 17:00',
        entryFee: 'Ücretsiz',
        address: 'Oğuz Mahallesi, Artuklu/Mardin',
        contact: '0482 212 16 64'
    },
    'morabraham': {
        title: 'Mor Abraham Manastırı',
        description: 'Süryani Ortodoks Kilisesi\'nin önemli manastırlarından biri olan yapı, 5. yüzyıldan kalma freskleri ve mimarisiyle dikkat çekiyor.',
        visitingHours: '09:00 - 17:00',
        entryFee: 'Ücretsiz',
        address: 'Yayla Mahallesi, Midyat/Mardin',
        contact: '0482 212 16 64'
    },
    'ulucami': {
        title: 'Ulu Cami',
        description: 'Artuklu döneminden kalma tarihi cami, Selçuklu mimarisinin önemli örneklerinden biri. Cami, 12. yüzyılda inşa edilmiştir.',
        visitingHours: 'Namaz vakitleri dışında ziyaret edilebilir',
        entryFee: 'Ücretsiz',
        address: 'Cumhuriyet Meydanı, Artuklu/Mardin',
        contact: '0482 212 16 64'
    },
    'santa': {
        title: 'Gaziantep Kalesi',
        description: 'Roma döneminden kalma, şehrin merkezinde yer alan tarihi kale. Savunma amaçlı inşa edilmiş olup, günümüzde müze olarak hizmet vermektedir. Kale, şehrin en yüksek noktasında yer almakta ve ziyaretçilerine panoramik bir manzara sunmaktadır. İçerisinde sergilenen arkeolojik eserler ve tarihi dokümanlar, Gaziantep\'in zengin tarihini yansıtmaktadır.',
        hours: '09:00 - 17:00',
        price: '15 TL',
        address: 'Seferpaşa Mahallesi, Gaziantep Kalesi, Şahinbey, Gaziantep',
        contact: '0342 230 47 22'
    },
    'kromvadisi': {
        title: 'Kurtuluş Camii',
        description: 'Osmanlı döneminden kalma, mimari özellikleriyle dikkat çeken tarihi cami. Cami, taş işçiliği ve süslemeleriyle dikkat çekmektedir. İç mekanındaki kalem işi süslemeler ve hat yazıları görülmeye değerdir. Cami, şehrin merkezi bir konumunda yer almakta ve aktif olarak ibadete açıktır.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Kurtuluş Mahallesi, Kurtuluş Caddesi, Şahinbey, Gaziantep',
        contact: '0342 230 47 23'
    },
    'kilise': {
        title: 'Rumkale',
        description: 'Fırat Nehri\'nin kıyısında yükselen, tarihi ve doğal güzelliğiyle dikkat çeken antik kale. Kale, Roma döneminden kalma olup, stratejik konumu nedeniyle önemli bir savunma noktası olarak kullanılmıştır. Günümüzde ziyaretçiler, kalenin etkileyici manzarası ve tarihi dokusunu keşfetme fırsatı bulmaktadır.',
        hours: '09:00 - 17:00',
        price: '15 TL',
        address: 'Yavuzeli, Gaziantep',
        contact: '0342 230 47 24'
    },
    'gaziantep-kalesi': {
        title: 'Gaziantep Kalesi',
        description: 'Roma döneminden kalma, şehrin merkezinde yer alan tarihi kale. Savunma amaçlı inşa edilmiş olup, günümüzde müze olarak hizmet vermektedir. Kale, şehrin en yüksek noktasında yer almakta ve ziyaretçilerine panoramik bir manzara sunmaktadır. İçerisinde sergilenen arkeolojik eserler ve tarihi dokümanlar, Gaziantep\'in zengin tarihini yansıtmaktadır.',
        hours: '09:00 - 17:00',
        price: '15 TL',
        address: 'Seferpaşa Mahallesi, Gaziantep Kalesi, Şahinbey, Gaziantep',
        contact: '0342 230 47 22'
    },
    'kurtulus-camii': {
        title: 'Kurtuluş Camii',
        description: 'Osmanlı döneminden kalma, mimari özellikleriyle dikkat çeken tarihi cami. Cami, taş işçiliği ve süslemeleriyle dikkat çekmektedir. İç mekanındaki kalem işi süslemeler ve hat yazıları görülmeye değerdir. Cami, şehrin merkezi bir konumunda yer almakta ve aktif olarak ibadete açıktır.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Kurtuluş Mahallesi, Kurtuluş Caddesi, Şahinbey, Gaziantep',
        contact: '0342 230 47 23'
    },
    'rumkale': {
        title: 'Rumkale',
        description: 'Fırat Nehri\'nin kıyısında yükselen, tarihi ve doğal güzelliğiyle dikkat çeken antik kale. Kale, Roma döneminden kalma olup, stratejik konumu nedeniyle önemli bir savunma noktası olarak kullanılmıştır. Günümüzde ziyaretçiler, kalenin etkileyici manzarası ve tarihi dokusunu keşfetme fırsatı bulmaktadır.',
        hours: '09:00 - 17:00',
        price: '15 TL',
        address: 'Yavuzeli, Gaziantep',
        contact: '0342 230 47 24'
    },
    'kursunlu-cami': {
        title: 'Kurşunlu Camii',
        description: 'Osmanlı döneminden kalma, mimari özellikleriyle dikkat çeken tarihi cami. 16. yüzyılda inşa edilen cami, kurşun kaplı kubbesi ve zarif minaresiyle dikkat çekmektedir. İç mekanındaki kalem işi süslemeler ve hat yazıları görülmeye değerdir.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Kurşunlu Mahallesi, Odunpazarı, Eskişehir',
        contact: '0222 220 26 07'
    },
    'odunpazari-evleri': {
        title: 'Odunpazarı Evleri',
        description: 'Geleneksel Osmanlı mimarisini yansıtan, tarihi evlerin bulunduğu bölge. 19. yüzyıldan kalma evler, geleneksel Türk evi mimarisinin en güzel örneklerindendir. Dar sokaklar, ahşap evler ve tarihi atmosferiyle ziyaretçilerini geçmişe götürmektedir.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Odunpazarı Mahallesi, Eskişehir',
        contact: '0222 220 26 08'
    },
    'seyitgazi-kulliyesi': {
        title: 'Seyitgazi Külliyesi',
        description: 'Selçuklu döneminden kalma, tarihi ve dini öneme sahip külliyelerden biri. 13. yüzyılda inşa edilen külliye, cami, medrese, türbe ve diğer yapılardan oluşmaktadır. Dönemin mimari özelliklerini yansıtan yapı, ziyaretçilerine tarihi bir yolculuk sunmaktadır.',
        hours: '09:00 - 17:00',
        price: 'Ücretsiz',
        address: 'Seyitgazi, Eskişehir',
        contact: '0222 220 26 09'
    },
    'cifte-minareli': {
            title: 'Çifte Minareli Medrese',
            description: 'Selçuklu döneminden kalma önemli bir medrese olan Çifte Minareli Medrese, 13. yüzyılda inşa edilmiştir. İki minaresi ve taç kapısındaki süslemeleriyle dikkat çeken medrese, dönemin mimari özelliklerini yansıtmaktadır. Günümüzde müze olarak hizmet vermektedir.',
            hours: '09:00 - 17:00',
            price: '10 TL',
            address: 'Cumhuriyet Caddesi, Erzurum',
            contact: '0442 234 11 71'
        },
        'yakutiye': {
            title: 'Yakutiye Medresesi',
            description: 'İlhanlı döneminden kalma tarihi medrese, 14. yüzyılda inşa edilmiştir. Taç kapısındaki süslemeleri ve mimari özellikleriyle dikkat çeken medrese, dönemin sanat ve mimari anlayışını yansıtmaktadır. Günümüzde müze olarak hizmet vermektedir.',
            hours: '09:00 - 17:00',
            price: '10 TL',
            address: 'Yakutiye Mahallesi, Erzurum',
            contact: '0442 234 11 72'
        },
        'uc-kumbetler': {
            title: 'Üç Kümbetler',
            description: 'Selçuklu döneminden kalma üç türbeden oluşan yapı grubu, 13. yüzyılda inşa edilmiştir. Mimari özellikleri ve süslemeleriyle dikkat çeken türbeler, dönemin sanat anlayışını yansıtmaktadır. Erzurum\'un önemli tarihi yapılarından biridir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Üç Kümbetler Mahallesi, Erzurum',
            contact: '0442 234 11 73'
        },
    'gulabi-bey-camii': {
        title: 'Gülabi Bey Camii',
        description: 'Osmanlı döneminden kalma tarihi cami, mimari özellikleri ve süslemeleriyle dikkat çekmektedir. Cami, dönemin sanat ve mimari anlayışını yansıtan önemli bir yapıdır. İç mekanındaki kalem işi süslemeler ve hat yazıları görülmeye değerdir.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Gülabi Bey Mahallesi, Erzincan',
        contact: '0446 214 11 69'
    },
    'terzibaba-turbesi': {
        title: 'Terzibaba Türbesi',
        description: 'Erzincan\'ın önemli manevi değerlerinden olan türbe, tarihi ve dini önemiyle ziyaretçilerini ağırlamaktadır. Türbe, bölgenin önemli dini şahsiyetlerinden Terzibaba\'ya ait olup, mimari özellikleri ve manevi atmosferiyle dikkat çekmektedir.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Terzibaba Mahallesi, Erzincan',
        contact: '0446 214 11 69'
    },
    'kemaliye': {
        title: 'Kemaliye (Eğin)',
        description: 'Tarihi evleri, dar sokakları ve doğal güzellikleriyle ünlü Kemaliye, kültürel mirasın önemli bir parçasıdır. Karanlık Kanyon, tarihi konaklar ve geleneksel mimari yapılar ilçenin öne çıkan özelliklerindendir. Doğal güzellikleri ve kültürel zenginliğiyle ziyaretçilerini büyülemektedir.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Kemaliye İlçesi, Erzincan',
        contact: '0446 751 20 00'
    },
    'harput': {
        title: 'Harput Kalesi',
        description: 'Urartu döneminden kalma tarihi kale, şehrin en önemli tarihi yapılarından biridir. Kale, bölgenin stratejik önemini vurgulayan mimari özelliklere sahiptir.',
        visitingHours: '08:00 - 19:00',
        entryFee: 'Ücretsiz',
        address: 'Harput Mahallesi, Elazığ',
        contact: '0424 212 27 50'
    },
    'ulucami': {
        title: 'Ulu Cami',
        description: 'Artuklu döneminden kalma tarihi cami, bölgenin en önemli dini yapılarından biridir. Cami, dönemin mimari özelliklerini yansıtan detaylara sahiptir.',
        visitingHours: 'Her zaman açık',
        entryFee: 'Ücretsiz',
        address: 'Harput Mahallesi, Ulu Cami Sokak No:1, Elazığ',
        contact: '0424 212 27 51'
    },
    'kursunlu': {
        title: 'Kurşunlu Cami',
        description: 'Osmanlı döneminden kalma tarihi cami, bölgenin önemli dini yapılarından biridir. Cami, dönemin mimari özelliklerini yansıtan detaylara sahiptir.',
        visitingHours: 'Her zaman açık',
        entryFee: 'Ücretsiz',
        address: 'Harput Mahallesi, Kurşunlu Cami Sokak No:1, Elazığ',
        contact: '0424 212 27 52'
    },
    'selimiye-camii': {
        title: 'Selimiye Camii',
        description: 'Mimar Sinan\'ın ustalık eseri olan Selimiye Camii, Osmanlı mimarisinin en önemli yapılarından biridir. UNESCO Dünya Mirası Listesi\'nde yer alan cami, muhteşem kubbesi ve zarif minareleriyle dikkat çeker.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Mimar Sinan Mahallesi, Edirne',
        contact: '0284 225 11 20'
    },
    'uc-serefeli-cami': {
        title: 'Üç Şerefeli Cami',
        description: 'Osmanlı mimarisinin önemli örneklerinden olan Üç Şerefeli Cami, üç şerefeli minaresiyle ünlüdür. 15. yüzyılda inşa edilen cami, dönemin mimari özelliklerini yansıtmaktadır.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Hacı İlbey Mahallesi, Edirne',
        contact: '0284 225 11 20'
    },
    'edirne-sarayi': {
        title: 'Edirne Sarayı',
        description: 'Osmanlı İmparatorluğu\'nun ikinci başkenti olan Edirne\'de inşa edilen saray, dönemin ihtişamını yansıtan önemli bir yapıdır. Günümüzde kısmen ayakta kalan saray, ziyaretçilere tarihi bir yolculuk sunmaktadır.',
        hours: '09:00 - 17:00',
        price: '10 TL',
        address: 'Sarayiçi Mevkii, Edirne',
        contact: '0284 225 11 20'
    },
    'hierapolis': {
        title: 'Hierapolis Antik Kenti',
        description: 'UNESCO Dünya Mirası Listesi\'nde yer alan Hierapolis Antik Kenti, Roma döneminden kalma önemli bir yerleşim yeridir. Antik tiyatro, nekropol ve hamamlarıyla ünlüdür.',
        hours: '08:00 - 19:00',
        price: '50 TL',
        address: 'Pamukkale, Denizli',
        contact: '0258 213 45 69'
    },
    'laodikeia': {
        title: 'Laodikeia Antik Kenti',
        description: 'Helenistik dönemden kalma önemli bir antik kent olan Laodikeia, Roma döneminde önemli bir ticaret merkeziydi. Stadyum, tiyatro ve kiliseleriyle ünlüdür.',
        hours: '08:00 - 19:00',
        price: '30 TL',
        address: 'Merkez, Denizli',
        contact: '0258 213 45 70'
    },
    'pamukkale': {
        title: 'Pamukkale',
        description: 'UNESCO Dünya Mirası Listesi\'nde yer alan Pamukkale, doğal traverten terasları ve termal sularıyla ünlüdür. Antik dönemden beri şifa merkezi olarak kullanılmıştır.',
        hours: '24 saat açık',
        price: '50 TL',
        address: 'Pamukkale, Denizli',
        contact: '0258 213 45 71'
    },
    'yazilikaya': {
        title: 'Tuz Mağarası',
        description: 'Dünyanın en büyük tuz mağaralarından biri olan Çankırı Tuz Mağarası, doğal bir hazinedir.',
        hours: '08:00 - 18:00',
        price: '20 TL',
        address: 'Merkez, Çankırı',
        contact: '0376 213 45 69'
    },
    'hattusa': {
        title: 'Çankırı Kalesi',
        description: 'Roma döneminden kalma tarihi kale, şehrin en önemli tarihi yapılarından biridir.',
        hours: '09:00 - 17:00',
        price: 'Ücretsiz',
        address: 'Merkez, Çankırı',
        contact: '0376 213 45 70'
    },
  
'alacahoyuk': {
    title: 'Troya Antik Kenti',
    description: 'Troya Antik Kenti, UNESCO Dünya Mirası Listesi\'nde yer alan efsanevi bir antik kenttir. Homeros\'un İlyada destanına konu olan Troya Savaşı\'nın yaşandığı yerdir.',
    hours: '08:00 - 19:00',
    price: '50 TL',
    address: 'Tevfikiye, Çanakkale',
    contact: '0286 217 65 65'
},
    'tasmescit': {
            title: 'Tuz Mağarası',
            description: 'Dünyanın en büyük tuz mağaralarından biri olan Çankırı Tuz Mağarası, doğal bir hazinedir.',
            hours: '08:00 - 18:00',
            price: '20 TL',
            address: 'Merkez, Çankırı',
            contact: '0376 213 45 69'
        },
        'ilgaz': {
            title: 'Çankırı Kalesi',
            description: 'Roma döneminden kalma tarihi kale, şehrin en önemli tarihi yapılarından biridir.',
            hours: '09:00 - 17:00',
            price: 'Ücretsiz',
            address: 'Merkez, Çankırı',
            contact: '0376 213 45 70'
        },
      
    'troy': {
        title: 'Troya Antik Kenti',
        description: 'Troya Antik Kenti, UNESCO Dünya Mirası Listesi\'nde yer alan efsanevi bir antik kenttir. Homeros\'un İlyada destanına konu olan Troya Savaşı\'nın yaşandığı yerdir.',
        hours: '08:00 - 19:00',
        price: '50 TL',
        address: 'Tevfikiye, Çanakkale',
        contact: '0286 217 65 65'
    },
    'assos': {
        title: 'Assos Antik Kenti',
        description: 'Assos Antik Kenti, antik dönemin önemli bir liman kenti ve felsefe merkezidir. Aristoteles\'in de yaşadığı kent, Athena Tapınağı ve antik tiyatrosuyla ünlüdür.',
        hours: '08:00 - 19:00',
        price: '30 TL',
        address: 'Behramkale, Çanakkale',
        contact: '0286 217 65 65'
    },
    'gelibolu': {
        title: 'Gelibolu Yarımadası',
        description: 'Gelibolu Yarımadası, Çanakkale Savaşları\'nın yaşandığı tarihi bir bölgedir. Anıtlar, şehitlikler ve savaş alanları ile Türk tarihinin önemli bir parçasıdır.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Gelibolu, Çanakkale',
        contact: '0286 217 65 65'
    },
    'koza': {
        title: 'Koza Han',
        description: 'Koza Han, Osmanlı döneminden kalma önemli bir ticaret merkezidir. İpek ticareti için kullanılan han, mimari özellikleriyle dikkat çekmektedir.',
        hours: '09:00 - 18:00',
        price: 'Ücretsiz',
        address: 'Merkez, Bursa',
        contact: '0224 234 49 18'
    },
    'yesil': {
        title: 'Yeşil Türbe',
        description: 'Yeşil Türbe, Çelebi Mehmet\'in türbesidir. Çinileri ve mimari özellikleriyle Osmanlı sanatının en güzel örneklerinden biridir.',
        hours: '09:00 - 17:00',
        price: 'Ücretsiz',
        address: 'Merkez, Bursa',
        contact: '0224 234 49 18'
    },
    'uludag': {
        title: 'Uludağ Milli Parkı',
        description: 'Uludağ Milli Parkı, doğal güzellikleri ve tarihi değeri olan önemli bir milli parktır. Kış turizmi ve doğa sporları için ideal bir alandır.',
        hours: '24 saat açık',
        price: 'Giriş Ücreti: 50 TL',
        address: 'Uludağ, Bursa',
        contact: '0224 234 49 18'
    },
    'insuyu': {
        title: 'İnsuyu Mağarası',
        description: 'İnsuyu Mağarası, doğal oluşumlu, sarkıt ve dikitleriyle ünlü bir mağaradır. İçindeki göl ve doğal oluşumlar ziyaretçileri büyülemektedir.',
        hours: '09:00 - 17:00',
        price: '20 TL',
        address: 'Bucak, Burdur',
        contact: '0248 233 10 42'
    },
    'salda': {
        title: 'Salda Gölü',
        description: 'Salda Gölü, turkuaz rengi suları ve beyaz kumsallarıyla ünlü doğal bir göldür. Mars\'taki Jezero Krateri\'ne benzerliği ile de dikkat çekmektedir.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Yeşilova, Burdur',
        contact: '0248 233 10 42'
    },
    'cremna': {
        title: 'Cremna Antik Kenti',
        description: 'Cremna Antik Kenti, Roma döneminden kalma önemli bir antik kenttir. Akropol, tiyatro ve diğer yapıların kalıntıları görülebilmektedir.',
        hours: '08:00 - 19:00',
        price: 'Ücretsiz',
        address: 'Bucak, Burdur',
        contact: '0248 233 10 42'
    },
    'akcakoca-castle': {
        title: 'Akçakoca Kalesi',
        description: 'Akçakoca Kalesi, tarihi bir savunma yapısıdır. Şehrin en yüksek noktalarından birinde bulunan kale, muhteşem manzarasıyla ziyaretçilerini büyülemektedir.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Akçakoca, Bolu',
        contact: '0374 411 20 00'
    },
    'golcuk-park': {
        title: 'Gölcük Tabiat Parkı',
        description: 'Gölcük Tabiat Parkı, doğal güzellikleri ve temiz havasıyla ünlü bir rekreasyon alanıdır. Yürüyüş parkurları ve piknik alanları bulunmaktadır.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Gölcük, Bolu',
        contact: '0374 215 11 96'
    },
    'abant-lake': {
        title: 'Abant Gölü',
        description: 'Abant Gölü, doğal güzelliği ve temiz havasıyla ünlü bir göldür. Çevresinde yürüyüş parkurları ve piknik alanları bulunmaktadır.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Abant, Bolu',
        contact: '0374 215 11 96'
    },
    'kale': {
        title: 'Bitlis Kalesi',
        description: 'Şehrin simgesi olan kale, stratejik bir noktada yer almaktadır. Tarihi İpek Yolu üzerinde bulunan kale, farklı medeniyetlere ev sahipliği yapmıştır.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Kale Mahallesi, Merkez/Bitlis',
        contact: '0434 226 11 93'
    },
    'mezarlik': {
        title: 'Ahlat Mezarlığı',
        description: 'Selçuklu dönemine ait tarihi mezar taşları ve anıtların bulunduğu mezarlık, açık hava müzesi niteliğindedir.',
        hours: 'Her gün açık',
        price: 'Ücretsiz',
        address: 'Ahlat/Bitlis',
        contact: '0434 226 11 94'
    },
    'nemrut': {
        title: 'Nemrut Krater Gölü',
        description: 'Doğal güzelliğiyle dikkat çeken krater gölü, volkanik bir patlama sonucu oluşmuştur. Çevresindeki doğal manzara ve yürüyüş parkurları ziyaretçileri etkilemektedir.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Tatvan/Bitlis',
        contact: '0434 226 11 95'
    },
    'kale': {
        title: 'Bingöl Kalesi',
        description: 'Şehrin simgesi olan kale, stratejik bir noktada yer almaktadır. Tarihi İpek Yolu üzerinde bulunan kale, farklı medeniyetlere ev sahipliği yapmıştır.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Kale Mahallesi, Merkez/Bingöl',
        contact: '0426 213 11 93'
    },
    'kirazli': {
        title: 'Kirazlı Köyü',
        description: 'Geleneksel mimari yapıları ve doğal güzellikleriyle ünlü köy, yöresel kültürü yaşatmayı sürdürmektedir. Tarihi evler ve doğal manzara ziyaretçileri etkilemektedir.',
        hours: 'Her gün açık',
        price: 'Ücretsiz',
        address: 'Kirazlı Köyü, Merkez/Bingöl',
        contact: '0426 213 11 94'
    },
    'solhan': {
        title: 'Solhan Kaplıcaları',
        description: 'Şifalı sularıyla ünlü tarihi kaplıca, sağlık turizmi açısından önemli bir merkezdir. Termal suların çeşitli hastalıklara iyi geldiği bilinmektedir.',
        hours: '24 saat açık',
        price: '50 TL',
        address: 'Solhan/Bingöl',
        contact: '0426 213 11 95'
    },
    'nemrut': {
        title: 'Nemrut Dağı',
        description: 'UNESCO Dünya Mirası Listesi\'nde yer alan Nemrut Dağı, Kommagene Kralı I. Antiochos\'un mezar anıtıdır. 2150 metre yükseklikteki tümülüs ve devasa heykeller, gün doğumu ve batımında muhteşem manzaralar sunar.',
        hours: 'Gün doğumu ve batımı için özel turlar',
        price: '50 TL',
        address: 'Kahta/Adıyaman',
        contact: '0416 725 50 07'
    },
    'cendere': {
        title: 'Cendere Köprüsü',
        description: 'Roma İmparatoru Septimius Severus döneminde inşa edilen köprü, dünyanın en eski köprülerinden biridir. Tek parça taşlardan yapılmış olması, mühendislik harikası olarak kabul edilir.',
        hours: 'Her gün açık',
        price: 'Ücretsiz',
        address: 'Kahta/Adıyaman',
        contact: '0416 725 50 07'
    },
    'arsemia': {
        title: 'Arsemia',
        description: 'Kommagene Krallığı\'nın yazlık başkenti olan Arsemia, antik kent kalıntıları ve kaya kabartmalarıyla ünlüdür. Mithridates I\'in mezarı ve kraliyet yazıtları önemli eserlerdir.',
        hours: '09:00 - 17:00',
        price: '20 TL',
        address: 'Kahta/Adıyaman',
        contact: '0416 725 50 07'
    },
    'taskopru': {
        title: 'Taşköprü',
        description: 'Roma döneminden kalma Taşköprü, Seyhan Nehri üzerindeki en eski köprüdür. MS 4. yüzyılda inşa edilen köprü, günümüzde hala kullanılmaktadır.',
        hours: 'Her gün açık',
        price: 'Ücretsiz',
        address: 'Seyhan/Adana',
        contact: '0322 359 78 70'
    },
    'ramazanoglu': {
        title: 'Ramazanoğlu Konağı',
        description: 'Ramazanoğlu Beyliği döneminden kalma tarihi konak, 15. yüzyılda inşa edilmiştir. Geleneksel Türk ev mimarisinin önemli örneklerinden biridir.',
        hours: '09:00 - 17:00',
        price: '10 TL',
        address: 'Kuruköprü Mahallesi, Seyhan/Adana',
        contact: '0322 359 78 71'
    },
    'buyuk-saat': {
        title: 'Büyük Saat',
        description: 'Doğal güzelliği ve tarihi dokusuyla öne çıkan Kapıkaya Kanyonu, yaklaşık 5 km uzunluğundadır. Kanyon içinde yürüyüş parkurları ve seyir terasları bulunmaktadır.',
        hours: 'Her gün açık',
        price: 'Ücretsiz',
        address: 'Kapıkaya, Aladağ/Adana',
        contact: '0322 359 78 72'
    },
    'kale': {
        title: 'Ankara Kalesi',
        description: 'Roma döneminden kalma tarihi kale. Ankara\'nın en eski yapılarından biri olan kale, şehrin panoramik manzarasını sunar.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Altındağ, 06240 Altındağ/Ankara',
        contact: '-'
    },
    'augustus': {
        title: 'Augustus Tapınağı',
        description: 'Roma İmparatoru Augustus için yapılmış antik tapınak. M.Ö. 25 yılında inşa edilmiştir.',
        hours: '09:00 - 17:00',
        price: 'Ücretsiz',
        address: 'Hacı Bayram Mahallesi, 06030 Altındağ/Ankara',
        contact: '0312 310 72 80'
    }
    
};
//Kültürel Yerler için veri
const culturalDetails = {
    'artuklu': {
        title: 'Artuklu Kültür Merkezi',
        description: 'Modern sanat ve kültür etkinliklerinin merkezi olan bu yapı, sergiler, konserler ve tiyatro gösterileri gibi çeşitli etkinliklere ev sahipliği yapmaktadır.',
        visitingHours: '10:00 - 22:00',
        entryFee: 'Etkinliğe göre değişmektedir',
        address: 'Cumhuriyet Meydanı, Artuklu/Mardin',
        contact: '0482 212 16 64'
    },
    'kulturmerkezi': {
        title: 'Diyarbakır Kültür ve Sanat Merkezi',
        description: 'Modern sanat ve kültür etkinliklerinin merkezi olan bu yapı, sergiler, konserler ve tiyatro gösterileri gibi çeşitli etkinliklere ev sahipliği yapmaktadır.',
        visitingHours: '10:00 - 22:00',
        entryFee: 'Etkinliğe göre değişmektedir',
        address: 'Yenişehir Mahallesi, Kültür Caddesi No:1, Yenişehir/Diyarbakır',
        contact: '0412 228 30 00'
    },
    'cermodern': {
        title: 'CerModern',
        description: 'Modern sanat ve kültür merkezi. Çağdaş sanat sergileri, performanslar ve kültürel etkinlikler düzenlenmektedir.',
        hours: '10:00 - 18:00',
        price: 'Değişken',
        address: 'Altınsoy Cad. No:3, 06378 Söğütözü/Ankara',
        contact: '0312 310 00 00'
    },
    'opera': {
        title: 'Ankara Opera Binası',
        description: 'Başkentin önemli sanat merkezi. Opera, bale ve konser etkinliklerine ev sahipliği yapar.',
        hours: 'Etkinlik saatlerine göre değişir',
        price: 'Değişken',
        address: 'Atatürk Bulvarı No:20, 06680 Çankaya/Ankara',
        contact: '0312 324 68 01'
    }
};

// Cami detayları için veri
const mosqueDetails = {
    'ortahisar': {
            title: 'Ortahisar Camii',
            description: 'Ortahisar Camii, Fatih Sultan Mehmet\'in Trabzon\'u fethinden sonra camiye çevrilen tarihi bir yapıdır. Cami, Bizans döneminden kalma mimari özellikleri korumaktadır.',
            image: 'images/trabzon_kulturel/ortahisarcamii.jpg',
            address: 'Ortahisar Mahallesi, Ortahisar/Trabzon',
            visitingHours: 'Her zaman açık',
            entryFee: 'Ücretsiz'
        },
        'yeni-cuma': {
            title: 'Yeni Cuma Camii',
            description: 'Yeni Cuma Camii, Bizans döneminden kalma bir kilise olarak inşa edilmiş, Osmanlı döneminde camiye çevrilmiştir. Cami, Trabzon\'un en eski dini yapılarından biridir.',
            image: 'images/trabzon_kulturel/yenicumcamii.jpg',
            address: 'Yeni Cuma Mahallesi, Ortahisar/Trabzon',
            visitingHours: 'Her zaman açık',
            entryFee: 'Ücretsiz'
        },
    'merkez': {
        title: 'Merkez Camii',
        description: 'Merkez Camii, Osmaniye\'nin en büyük ve en eski camilerinden biridir. Modern mimarisi ve geniş avlusuyla dikkat çeken cami, şehrin merkezinde yer almaktadır.',
        image: 'images/osmaniye_kulturel/merkez-camii.jpg',
        address: 'Merkez Mahallesi, Osmaniye',
        visitingHours: 'Her zaman açık',
        entryFee: 'Ücretsiz',
        phone: '0328 678 90 12'
    },
    'haruniye-camii': {
        title: 'Haruniye Camii',
        description: 'Haruniye Camii, tarihi dokusu ve mimarisiyle öne çıkan bir camidir. Düziçi ilçesinde yer alan cami, bölgenin önemli dini yapılarından biridir.',
        image: 'images/osmaniye_kulturel/haruniye-camii.jpg',
        address: 'Haruniye Mahallesi, Düziçi/Osmaniye',
        visitingHours: 'Her zaman açık',
        entryFee: 'Ücretsiz',
        phone: '0328 789 01 23'
    },
    'ulu-cam': {
        title: 'Ulu Cami',
        description: 'Şehrin en eski camilerinden biri olan, Selçuklu döneminden kalma tarihi cami. Cami, 13. yüzyılda inşa edilmiş olup, dönemin mimari özelliklerini taşımaktadır. İç mekanındaki süslemeler ve hat yazıları görülmeye değerdir. Cami, şehrin merkezi bir konumunda yer almakta ve aktif olarak ibadete açıktır.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Ulu Cami Mahallesi, Ulu Cami Caddesi, Şahinbey, Gaziantep',
        contact: '0342 230 47 25'
    },
    'ali-nacar-camii': {
        title: 'Ali Nacar Camii',
        description: 'Osmanlı döneminden kalma, taş işçiliğiyle dikkat çeken tarihi cami. Cami, 16. yüzyılda inşa edilmiş olup, taş işçiliği ve süslemeleriyle öne çıkmaktadır. İç mekanındaki kalem işi süslemeler ve hat yazıları görülmeye değerdir. Cami, şehrin merkezi bir konumunda yer almakta ve aktif olarak ibadete açıktır.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Ali Nacar Mahallesi, Ali Nacar Caddesi, Şahinbey, Gaziantep',
        contact: '0342 230 47 26'
    },
    'ulu-cami10': {
        title: 'Ulu Cami',
        description: 'Şehrin en eski camilerinden biri olan, tarihi dokusuyla dikkat çeken cami. 13. yüzyılda inşa edilen cami, Selçuklu mimarisinin özelliklerini taşımaktadır. Çok kubbeli yapısı ve sade mimarisiyle dikkat çeken cami, Eskişehir\'in önemli dini yapılarından biridir.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Ulu Cami Mahallesi, Eskişehir',
        contact: '0222 220 26 10'
    },
    'ak-cami': {
        title: 'Ak Cami',
        description: 'Osmanlı döneminden kalma, beyaz taşlarıyla dikkat çeken tarihi cami. 16. yüzyılda inşa edilen cami, beyaz mermer kullanımıyla öne çıkmaktadır. İç mekanındaki süslemeler ve hat yazıları görülmeye değerdir.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Ak Cami Mahallesi, Eskişehir',
        contact: '0222 220 26 11'
    },
    'ulu-camii3': {
        title: 'Ulu Cami',
        description: 'Saltuklu döneminden kalma şehrin en eski camisi olan Ulu Cami, 12. yüzyılda inşa edilmiştir. Çok kubbeli yapısı ve sade mimarisiyle dikkat çeken cami, Erzurum\'un önemli dini yapılarından biridir. İç mekanındaki süslemeler ve hat yazıları görülmeye değerdir.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Ulu Cami Mahallesi, Erzurum',
        contact: '0442 234 11 74'
    },
    'lala-pasa': {
        title: 'Lala Paşa Camii',
        description: 'Osmanlı döneminden kalma tarihi cami, 16. yüzyılda inşa edilmiştir. Mimar Sinan\'ın eseri olan cami, dönemin mimari özelliklerini yansıtmaktadır. İç mekanındaki süslemeler ve hat yazıları görülmeye değerdir.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Lala Paşa Mahallesi, Erzurum',
        contact: '0442 234 11 75'
    },
    'ulu-camii': {
        title: 'Ulu Cami',
        description: 'Erzincan\'ın en eski camilerinden biri olan Ulu Cami, tarihi dokusu ve mimari özellikleriyle öne çıkmaktadır. Cami, şehrin merkezinde yer almakta olup, dönemin mimari özelliklerini yansıtmaktadır. İç mekanındaki süslemeler ve hat yazıları görülmeye değerdir.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Ulu Cami Mahallesi, Erzincan',
        contact: '0446 214 11 69'
    },
    'otlukbeli-camii': {
        title: 'Otlukbeli Camii',
        description: 'Otlukbeli ilçesinin merkezinde yer alan cami, tarihi ve dini önemiyle ziyaretçilerini ağırlamaktadır. Cami, bölgenin önemli dini yapılarından biri olup, mimari özellikleri ve manevi atmosferiyle dikkat çekmektedir.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Otlukbeli Merkez, Erzincan',
        contact: '0446 311 20 00'
    },
    'ulu-cami2': {
        title: 'Ulu Cami',
        description: 'Edirne\'nin en eski camilerinden biri olan Ulu Cami, 14. yüzyılda inşa edilmiştir. Çok kubbeli yapısı ve sade mimarisiyle dikkat çeken cami, şehrin önemli dini yapılarından biridir.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Ulu Cami Mahallesi, Edirne',
        contact: '0284 225 11 20'
    },
    'muradiye-cami': {
        title: 'Muradiye Cami',
        description: '15. yüzyılda inşa edilen Muradiye Cami, Osmanlı mimarisinin zarif örneklerinden biridir. Çinileri ve süslemeleriyle ünlü olan cami, şehrin önemli tarihi yapılarından biridir.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Muradiye Mahallesi, Edirne',
        contact: '0284 225 11 20'
    },
    'sur': {
        title: 'Diyarbakır Surları',
        description: 'UNESCO Dünya Mirası Listesi\'nde yer alan Diyarbakır Surları, dünyanın en uzun ve en sağlam surlarından biridir. 5.5 km uzunluğundaki surlar, 82 burç ve 4 ana kapıdan oluşmaktadır.',
        visitingHours: '24 saat açık',
        entryFee: 'Ücretsiz',
        address: 'Sur İlçesi, Diyarbakır',
        contact: '0412 228 30 00'
    },
    'ulucami': {
        title: 'Ulu Cami',
        description: 'Anadolu\'nun en eski camilerinden biri olan Ulu Cami, 639 yılında inşa edilmiştir. Cami, İslam mimarisinin önemli örneklerinden biridir.',
        visitingHours: 'Namaz vakitleri dışında ziyaret edilebilir',
        entryFee: 'Ücretsiz',
        address: 'Cami Kebir Mahallesi, Sur/Diyarbakır',
        contact: '0412 228 30 00'
    },
    'hasankeyf': {
        title: 'Hasankeyf',
        description: '12.000 yıllık tarihi ile medeniyetlerin beşiği olan Hasankeyf, Dicle Nehri kıyısında kurulmuş antik bir yerleşim yeridir.',
        visitingHours: '09:00 - 17:00',
        entryFee: 'Ücretsiz',
        address: 'Hasankeyf, Batman',
        contact: '0488 381 20 00'
    },
    'ulu7': {
        title: 'Ulu Cami',
        description: 'Selçuklu döneminden kalma şehrin en eski camisi olan Ulu Cami, mimari özellikleri ve süslemeleriyle dikkat çekmektedir.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Merkez, Denizli',
        contact: '0258 213 45 72'
    },
    'akhan': {
        title: 'Akhan Cami',
        description: 'Osmanlı döneminden kalma tarihi cami, şehrin önemli dini yapılarından biridir. Restore edilmiş haliyle günümüze ulaşmıştır.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Merkez, Denizli',
        contact: '0258 213 45 73'
    },
    'ulu6': {
        title: 'Ulu Cami',
        description: 'Selçuklu mimarisinin önemli örneklerinden olan cami, şehrin merkezinde yer almaktadır.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Merkez, Çankırı',
        contact: '0376 213 45 72'
    },
    'hann': {
        title: 'Tarihi Cami',
        description: 'Osmanlı döneminden kalma tarihi cami, şehrin önemli dini yapılarından biridir.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Merkez, Çankırı',
        contact: '0376 213 45 73'
    },
    'ulu-cami': {
        title: 'Ulu Cami',
        description: 'Selçuklu mimarisinin önemli örneklerinden olan cami, şehrin merkezinde yer almaktadır.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Merkez, Çankırı',
        contact: '0376 213 45 72'
    },
    'tarih-cami': {
        title: 'Tarihi Cami',
        description: 'Osmanlı döneminden kalma tarihi cami, şehrin önemli dini yapılarından biridir.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Merkez, Çankırı',
        contact: '0376 213 45 73'
    },
    'ulu5': {
            title: 'Ulu Cami',
            description: 'Ulu Cami, Osmanlı döneminden kalma şehrin en büyük camisidir. Mimari özellikleri ve tarihi değeriyle önemli bir dini yapıdır.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Merkez, Çanakkale',
            contact: '0286 217 65 65'
        },
        'hidirlik': {
            title: 'Hıdırlık Cami',
            description: 'Hıdırlık Cami, tarihi önemi olan Osmanlı dönemi camisidir. Şehrin merkezinde yer alan cami, mimari özellikleriyle dikkat çekmektedir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Merkez, Çanakkale',
            contact: '0286 217 65 65'
        },
    'ulu4': {
        title: 'Ulu Cami',
        description: 'Ulu Cami, Osmanlı\'nın en büyük camilerinden biridir. 20 kubbeli yapısı ve hat yazılarıyla ünlüdür.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Merkez, Bursa',
        contact: '0224 234 49 18'
    },
    'yesil': {
        title: 'Yeşil Cami',
        description: 'Yeşil Cami, çinileriyle ünlü tarihi bir camidir. Osmanlı dönemi mimarisinin en güzel örneklerinden biridir.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Merkez, Bursa',
        contact: '0224 234 49 18'
    },
    'ulu3': {
        title: 'Ulu Cami',
        description: 'Ulu Cami, Burdur\'un en eski ve en büyük camilerinden biridir. Selçuklu döneminden kalma tarihi bir yapıdır.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Merkez, Burdur',
        contact: '0248 233 10 42'
    },
    'tasoda': {
        title: 'Taş Oda',
        description: 'Taş Oda, Osmanlı döneminden kalma önemli bir tarihi yapıdır. Mimari özellikleri ve tarihi değeriyle dikkat çekmektedir.',
        hours: '09:00 - 17:00',
        price: 'Ücretsiz',
        address: 'Merkez, Burdur',
        contact: '0248 233 10 42'
    },
    'ulu-mosque': {
        title: 'Ulu Cami',
        description: 'Ulu Cami, Bolu\'nun en eski ve en büyük camilerinden biridir. Osmanlı döneminden kalma tarihi bir yapıdır.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Merkez, Bolu',
        contact: '0374 215 11 96'
    },
    'yildirim-mosque': {
        title: 'Yıldırım Camii',
        description: 'Yıldırım Camii, Osmanlı döneminden kalma önemli bir dini yapıdır. Mimari özellikleri ve tarihi değeriyle dikkat çekmektedir.',
        hours: '24 saat açık',
        price: 'Ücretsiz',
        address: 'Merkez, Bolu',
        contact: '0374 215 11 96'
    },
    'ulu': {
        title: 'Ulu Cami',
        description: 'Selçuklu döneminden kalma Ulu Cami, şehrin en eski camisidir. 13. yüzyılda inşa edilen cami, geleneksel Türk-İslam mimarisinin önemli örneklerinden biridir.',
        hours: 'Her gün açık',
        price: 'Ücretsiz',
        address: 'Merkez/Bitlis',
        contact: '0434 226 11 96'
    },
    'gokmeydan': {
        title: 'Gökmeydan Camii',
        description: 'Osmanlı döneminden kalma tarihi cami, geleneksel mimari özellikleriyle dikkat çekmektedir. Geniş avlusu ve süslemeleriyle öne çıkmaktadır.',
        hours: 'Her gün açık',
        price: 'Ücretsiz',
        address: 'Merkez/Bitlis',
        contact: '0434 226 11 97'
    },
    'ulu3': {
        title: 'Ulu Cami',
        description: 'Selçuklu döneminden kalma Ulu Cami, şehrin en eski camisidir. 13. yüzyılda inşa edilen cami, geleneksel Türk-İslam mimarisinin önemli örneklerinden biridir.',
        hours: 'Her gün açık',
        price: 'Ücretsiz',
        address: 'Merkez/Bingöl',
        contact: '0426 213 11 96'
    },
    'merkez': {
        title: 'Merkez Camii',
        description: 'Modern mimari özellikleriyle dikkat çeken cami, şehrin merkezinde yer almaktadır. Geniş avlusu ve modern tasarımıyla öne çıkmaktadır.',
        hours: 'Her gün açık',
        price: 'Ücretsiz',
        address: 'Merkez/Bingöl',
        contact: '0426 213 11 97'
    },
    'ulu': {
        title: 'Ulu Cami',
        description: 'Dulkadiroğulları döneminden kalma Ulu Cami, şehrin en eski camisidir. 14. yüzyılda inşa edilen cami, geleneksel Türk-İslam mimarisinin önemli örneklerinden biridir.',
        hours: 'Her gün açık',
        price: 'Ücretsiz',
        address: 'Merkez/Adıyaman',
        contact: '0416 216 29 29'
    },
    'kap': {
        title: 'Kap Camii',
        description: 'Selçuklu döneminden kalma Kap Camii, şehrin önemli tarihi yapılarından biridir. Sade mimarisi ve taş işçiliğiyle dikkat çeker.',
        hours: 'Her gün açık',
        price: 'Ücretsiz',
        address: 'Merkez/Adıyaman',
        contact: '0416 216 29 29'
    },
    'ulu2': {
        title: 'Ulu Cami',
        description: 'Adana\'nın en eski camisi olan Ulu Cami, Memlük mimarisinin önemli örneklerinden biridir. 13. yüzyılda inşa edilen cami, siyah ve beyaz taşların kullanımıyla dikkat çeker.',
        hours: 'Her gün açık',
        price: 'Ücretsiz',
        address: 'Alidede Mahallesi, Seyhan/Adana',
        contact: '0322 359 78 67'
    },
    'yag': {
        title: 'Yağ Camii',
        description: 'Bizans döneminde kilise olarak inşa edilen yapı, 16. yüzyılda camiye dönüştürülmüştür. İki farklı dönemin mimari özelliklerini bir arada barındıran önemli bir tarihi yapıdır.',
        hours: 'Her gün açık',
        price: 'Ücretsiz',
        address: 'Kuruköprü Mahallesi, Seyhan/Adana',
        contact: '0322 359 78 68'
    },
    'akca': {
        title: 'Akça Camii',
        description: 'Türkiye\'nin en büyük camilerinden biri olan Sabancı Merkez Camii, modern mimari özellikleriyle dikkat çeker. 1998 yılında inşa edilen cami, 28.500 kişilik kapasiteye sahiptir.',
        hours: 'Her gün açık',
        price: 'Ücretsiz',
        address: 'Reşatbey Mahallesi, 01120 Seyhan/Adana',
        contact: '0322 359 78 69'
    }
};

// Detay gösterme fonksiyonu
function showDetails(type, id) {
    let details;
    switch(type) {
        case 'museum':
            details = museumDetails[id];
            break;
        case 'mosque':
            details = mosqueDetails[id];
            break;
        case 'historical':
            details = historicalDetails[id];
            break;
        case 'cultural':
            details = culturalDetails[id];
    }

    if (!details) return;

    const modal = document.createElement('div');
    modal.className = 'museum-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>${details.title}</h2>
            <p class="description">${details.description}</p>
            <div class="details-grid">
                <div class="detail-item">
                    <i class="fas fa-clock"></i>
                    <h4>Çalışma Saatleri</h4>
                    <p>${details.hours}</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-ticket-alt"></i>
                    <h4>Giriş Ücreti</h4>
                    <p>${details.price}</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <h4>Adres</h4>
                    <p>${details.address}</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-phone"></i>
                    <h4>İletişim</h4>
                    <p>${details.contact}</p>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const closeButton = modal.querySelector('.close-button');
    closeButton.onclick = function() {
        modal.remove();
    };

    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.remove();
        }
    };
} 

 
 