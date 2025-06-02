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
    const header = document.querySelector('.istanbul-header');
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

// Detay butonları için yeni sekme açma fonksiyonu
function openInNewTab(url) {
    window.open(url, '_blank');
}

// Saray detayları için veri
const palaceDetails = {
    'topkapi': {
        title: 'Topkapı Sarayı',
        description: 'Osmanlı İmparatorluğu\'nun 400 yıl boyunca yönetim merkezi olan Topkapı Sarayı, günümüzde müze olarak hizmet vermektedir. İçerisinde padişah hazineleri, kutsal emanetler ve önemli tarihi eserler bulunmaktadır.',
        hours: '09:00 - 18:00 (Kış), 09:00 - 19:00 (Yaz)',
        price: '100 TL (Ana Saray), 50 TL (Harem)',
        address: 'Cankurtaran, 34122 Fatih/İstanbul',
        contact: '0212 512 04 80'
    },
    'dolmabahce': {
        title: 'Dolmabahçe Sarayı',
        description: 'Osmanlı İmparatorluğu\'nun son dönemlerinde kullanılan görkemli saray, Avrupa mimarisi ile Osmanlı mimarisinin muhteşem bir sentezidir. Boğaz\'ın en güzel noktalarından birinde yer alır.',
        hours: '09:00 - 16:00',
        price: '120 TL (Selamlık), 90 TL (Harem)',
        address: 'Vişnezade, Dolmabahçe Cd., 34357 Beşiktaş/İstanbul',
        contact: '0212 236 90 00'
    },
    'beylerbeyi': {
        title: 'Beylerbeyi Sarayı',
        description: 'Boğaz\'ın Anadolu yakasında yer alan Beylerbeyi Sarayı, yazlık saray olarak kullanılmıştır. Deniz manzarası ve bahçesiyle ünlüdür.',
        hours: '09:00 - 17:00',
        price: '60 TL',
        address: 'Beylerbeyi, 34676 Üsküdar/İstanbul',
        contact: '0216 321 93 20'
    },
    'ihlamur': {
        title: 'Ihlamur Kasrı',
        description: 'Nişantaşı\'nda bulunan Ihlamur Kasrı, Osmanlı padişahlarının dinlenme köşkü olarak kullanılmıştır. Bahçesindeki ıhlamur ağaçlarından adını alır.',
        hours: '09:00 - 17:00',
        price: '30 TL',
        address: 'Teşvikiye, Ihlamur Yolu, 34365 Şişli/İstanbul',
        contact: '0212 259 90 77'
    },
    'kucuksu': {
        title: 'Küçüksu Kasrı',
        description: 'Boğaz\'ın incisi Küçüksu Kasrı, av köşkü olarak tasarlanmış zarif bir yapıdır. Rokoko tarzı süslemeleriyle dikkat çeker.',
        hours: '09:00 - 17:00',
        price: '30 TL',
        address: 'Küçüksu, 34815 Beykoz/İstanbul',
        contact: '0216 332 33 03'
    },
    'aynalikavak': {
        title: 'Aynalıkavak Kasrı',
        description: 'Haliç kıyısında bulunan Aynalıkavak Kasrı, Osmanlı\'nın en eski saraylarından biridir. Müzik aletleri koleksiyonuyla ünlüdür.',
        hours: '09:00 - 17:00',
        price: '30 TL',
        address: 'Aynalıkavak, 34440 Beyoğlu/İstanbul',
        contact: '0212 256 97 50'
    },
    'maslak': {
        title: 'Maslak Kasırları',
        description: 'Sultan Abdülaziz döneminden kalma Maslak Kasırları, Şişli\'de bulunan tarihi yapılardır. Av köşkü olarak kullanılmıştır.',
        hours: '09:00 - 17:00',
        price: '30 TL',
        address: 'Maslak, 34485 Sarıyer/İstanbul',
        contact: '0212 276 10 22'
    }
};

// Müze detayları için veri
const museumDetails = {
    'kariye': {
        title: 'Kariye Müzesi',
        description: 'Bizans döneminden kalma kilise, mozaik ve freskolarıyla ünlüdür. 11. yüzyılda inşa edilen yapı, İstanbul\'un en önemli Bizans sanatı örneklerinden biridir.',
        hours: '09:00 - 17:00',
        price: '65 TL',
        address: 'Dervişali, Kariye Cami Sk. No:18, 34087 Fatih/İstanbul',
        contact: '0212 631 92 41'
    },
    'archeology': {
        title: 'İstanbul Arkeoloji Müzesi',
        description: 'Türkiye\'nin ilk müzesi, dünyanın en zengin arkeoloji müzelerinden biridir. Antik Yunan, Roma ve Osmanlı dönemlerine ait eserler sergilenmektedir.',
        hours: '09:00 - 17:00',
        price: '50 TL',
        address: 'Cankurtaran, Osman Hamdi Bey Yokuşu, 34122 Fatih/İstanbul',
        contact: '0212 520 77 40'
    },
    'rahmi': {
        title: 'Rahmi M. Koç Müzesi',
        description: 'Endüstriyel mirasın sergilendiği interaktif bir müzedir. Ulaşım, endüstri ve iletişim tarihine ışık tutan eserler barındırır.',
        hours: '10:00 - 17:00',
        price: '120 TL',
        address: 'Hasköy Cad. No:5, 34445 Beyoğlu/İstanbul',
        contact: '0212 369 66 00'
    },
    'istanbul-art': {
        title: 'İstanbul Modern',
        description: 'Modern ve çağdaş sanatın en seçkin örneklerini barındıran müze. Türk ve dünya sanatının önemli eserlerini sergiler.',
        hours: '10:00 - 18:00',
        price: '100 TL',
        address: 'Meclis-i Mebusan Cad. No:2, 34433 Beyoğlu/İstanbul',
        contact: '0212 334 73 00'
    },
    'ural-ataman': {
        title: 'Ural Ataman Klasik Otomobil Müzesi',
        description: 'Nadir klasik otomobillerin sergilendiği özel bir koleksiyon müzesidir. 1920\'lerden 1970\'lere uzanan otomobil tarihini yansıtır.',
        hours: '10:00 - 17:00',
        price: '150 TL',
        address: 'Büyükdere Cad. No:120, 34398 Sarıyer/İstanbul',
        contact: '0212 276 10 22'
    },
    'masumiyet': {
        title: 'Masumiyet Müzesi',
        description: 'Orhan Pamuk\'un aynı adlı romanından esinlenerek kurulmuştur. 1950\'lerden 2000\'lere uzanan nostaljik objeleri barındırır.',
        hours: '10:00 - 18:00',
        price: '75 TL',
        address: 'Çukurcuma, Dalgıç Çıkmazı No:2, 34425 Beyoğlu/İstanbul',
        contact: '0212 252 97 38'
    },
    'oyuncak': {
        title: 'İstanbul Oyuncak Müzesi',
        description: '1700\'lerden günümüze uzanan oyuncak koleksiyonunu barındırır. Çocukluğunuzu yaşatacak nostaljik bir deneyim sunar.',
        hours: '10:00 - 18:00',
        price: '60 TL',
        address: 'Ömerpaşa Cad. Dr. Zeki Zeren Sok. No:17, 34730 Kadıköy/İstanbul',
        contact: '0216 359 45 50'
    },
    'sabancı': {
        title: 'Sakıp Sabancı Müzesi',
        description: 'Klasik ve çağdaş sanat eserlerinin sergilendiği, Boğaz manzaralı bir müzedir. Önemli geçici sergilere ev sahipliği yapar.',
        hours: '10:00 - 18:00',
        price: '80 TL',
        address: 'Sakıp Sabancı Cad. No:42, 34467 Sarıyer/İstanbul',
        contact: '0212 277 22 00'
    },
    'pera': {
        title: 'Pera Müzesi',
        description: 'Oryantalist resimler ve Kütahya çinileri koleksiyonuyla ünlüdür. Beyoğlu\'nun kalbinde yer alan müze, kültür ve sanat etkinliklerine ev sahipliği yapar.',
        hours: '10:00 - 19:00',
        price: '70 TL',
        address: 'Meşrutiyet Cad. No:65, 34430 Beyoğlu/İstanbul',
        contact: '0212 334 99 00'
    },
    'deniz': {
        title: 'Deniz Müzesi',
        description: 'Türk denizcilik tarihinin en kapsamlı koleksiyonunu barındırır. Osmanlı donanmasından günümüze uzanan denizcilik mirasını yansıtır.',
        hours: '09:00 - 17:00',
        price: '40 TL',
        address: 'Sinanpaşa, 34353 Beşiktaş/İstanbul',
        contact: '0212 327 43 45'
    }
};

// Tarihi Camiler için veri
const mosqueDetails = {
    sultanahmet: {
        title: "Sultanahmet Camii",
        description: "1609-1616 yılları arasında Sultan I. Ahmed tarafından Mimar Sedefkâr Mehmed Ağa'ya yaptırılan cami, Osmanlı mimarisinin en önemli eserlerinden biridir. Mavi çinileri nedeniyle 'Mavi Camii' olarak da bilinir.",
        hours: "Her gün 09:00-17:00",
        price: "Ücretsiz",
        address: "Sultanahmet Meydanı, Fatih/İstanbul",
        contact: "0212 458 44 68"
    },
    suleymaniye: {
        title: "Süleymaniye Camii",
        description: "1550-1557 yılları arasında Kanuni Sultan Süleyman tarafından Mimar Sinan'a yaptırılan cami, Osmanlı mimarisinin en görkemli örneklerinden biridir.",
        hours: "Her gün 09:00-17:00",
        price: "Ücretsiz",
        address: "Süleymaniye Mahallesi, Fatih/İstanbul",
        contact: "0212 513 36 08"
    },
    eyup: {
        title: "Eyüp Sultan Camii",
        description: "1458 yılında Fatih Sultan Mehmet tarafından yaptırılan cami, Hz. Muhammed'in sancaktarı Ebu Eyyub el-Ensari'nin türbesini de içerir.",
        hours: "Her gün 09:00-17:00",
        price: "Ücretsiz",
        address: "Eyüp Sultan Meydanı, Eyüp/İstanbul",
        contact: "0212 564 24 14"
    },
    fatih: {
        title: "Fatih Camii",
        description: "1463-1470 yılları arasında Fatih Sultan Mehmet tarafından yaptırılan cami, İstanbul'un fethinden sonra inşa edilen ilk selatin camiidir.",
        hours: "Her gün 09:00-17:00",
        price: "Ücretsiz",
        address: "Fatih Mahallesi, Fatih/İstanbul",
        contact: "0212 523 62 18"
    },
    ortakoy: {
        title: "Ortaköy Camii",
        description: "1854-1856 yılları arasında Sultan Abdülmecid tarafından Nigoğos Balyan'a yaptırılan cami, Barok ve Neo-klasik mimari özellikleriyle dikkat çeker.",
        hours: "Her gün 09:00-17:00",
        price: "Ücretsiz",
        address: "Mecidiye Mahallesi, Beşiktaş/İstanbul",
        contact: "0212 260 07 15"
    },
    selimiye: {
        title: "Selimiye Camii",
        description: "1805 yılında Sultan III. Selim tarafından yaptırılan cami, Barok mimari özellikleriyle dikkat çeker.",
        hours: "Her gün 09:00-17:00",
        price: "Ücretsiz",
        address: "Selimiye Mahallesi, Üsküdar/İstanbul",
        contact: "0216 553 07 53"
    },
    yeni: {
        title: "Yeni Camii",
        description: "1597-1665 yılları arasında inşa edilen cami, İznik çinileri ve altın varaklı süslemeleriyle ünlüdür.",
        hours: "Her gün 09:00-17:00",
        price: "Ücretsiz",
        address: "Rüstem Paşa Mahallesi, Eminönü/İstanbul",
        contact: "0212 527 05 98"
    },
    beyazit: {
        title: "Beyazıt Camii",
        description: "1501-1506 yılları arasında Sultan II. Bayezid tarafından yaptırılan cami, İstanbul'un en eski selatin camilerinden biridir.",
        hours: "Her gün 09:00-17:00",
        price: "Ücretsiz",
        address: "Beyazıt Meydanı, Fatih/İstanbul",
        contact: "0212 522 09 89"
    },
    mihrimah: {
        title: "Mihrimah Sultan Camii",
        description: "1548 yılında Mimar Sinan tarafından yapılan cami, ince minaresi ve zarif mimarisiyle ünlüdür.",
        hours: "Her gün 09:00-17:00",
        price: "Ücretsiz",
        address: "Mimar Sinan Mahallesi, Üsküdar/İstanbul",
        contact: "0216 553 07 53"
    },
    nuruosmaniye: {
        title: "Nuruosmaniye Camii",
        description: "1748-1755 yılları arasında Sultan I. Mahmud tarafından yaptırılan cami, Barok mimari özellikleri ve görkemli kubbesiyle ünlüdür.",
        hours: "Her gün 09:00-17:00",
        price: "Ücretsiz",
        address: "Nuruosmaniye Mahallesi, Fatih/İstanbul",
        contact: "0212 527 05 98"
    },
    laleli: {
        title: "Laleli Camii",
        description: "1760-1763 yılları arasında Sultan III. Mustafa tarafından yaptırılan cami, Barok mimari özellikleri ve çinileriyle dikkat çeker.",
        hours: "Her gün 09:00-17:00",
        price: "Ücretsiz",
        address: "Laleli Mahallesi, Fatih/İstanbul",
        contact: "0212 527 05 98"
    },
    sehzade: {
        title: "Şehzade Camii",
        description: "1543-1548 yılları arasında Kanuni Sultan Süleyman tarafından oğlu Şehzade Mehmed için Mimar Sinan'a yaptırılan cami, Mimar Sinan'ın 'çıraklık eserim' dediği yapıdır.",
        hours: "Her gün 09:00-17:00",
        price: "Ücretsiz",
        address: "Şehzadebaşı Mahallesi, Fatih/İstanbul",
        contact: "0212 527 05 98"
    },
    pertevniyal: {
        title: "Pertevniyal Valide Sultan Camii",
        description: "1869-1871 yılları arasında Sultan Abdülaziz'in annesi Pertevniyal Valide Sultan tarafından yaptırılan cami, Neo-gotik ve barok mimari özellikleriyle dikkat çeker.",
        hours: "Her gün 09:00-17:00",
        price: "Ücretsiz",
        address: "Aksaray Mahallesi, Fatih/İstanbul",
        contact: "0212 527 05 98"
    }
};

// Antik Yapılar için veri
const ancientDetails = {
    yerebatan: {
        title: "Yerebatan Sarnıcı",
        description: "532 yılında Bizans İmparatoru I. Justinianos tarafından yaptırılan sarnıç, 80.000 metreküp su depolama kapasitesine sahiptir.",
        hours: "Her gün 09:00-17:30",
        price: "30 TL",
        address: "Alemdar Mahallesi, Fatih/İstanbul",
        contact: "0212 522 12 59"
    },
    galata: {
        title: "Galata Kulesi",
        description: "1348 yılında Cenevizliler tarafından inşa edilen kule, İstanbul'un en önemli simgelerinden biridir.",
        hours: "Her gün 09:00-20:00",
        price: "175 TL",
        address: "Bereketzade Mahallesi, Beyoğlu/İstanbul",
        contact: "0212 245 41 41"
    },
    valens: {
        title: "Valens Su Kemeri",
        description: "368 yılında Roma İmparatoru Valens tarafından yaptırılan su kemeri, İstanbul'un su ihtiyacını karşılamak için inşa edilmiştir.",
        hours: "24 saat açık",
        price: "Ücretsiz",
        address: "Şehzadebaşı Mahallesi, Fatih/İstanbul",
        contact: "-"
    },
    hipodrom: {
        title: "Hipodrom",
        description: "203 yılında Roma İmparatoru Septimius Severus tarafından inşa edilen hipodrom, Bizans döneminin en önemli yapılarından biridir.",
        hours: "24 saat açık",
        price: "Ücretsiz",
        address: "Sultanahmet Meydanı, Fatih/İstanbul",
        contact: "-"
    },
    gotlar: {
        title: "Gotlar Sütunu",
        description: "3. yüzyılda Roma döneminde inşa edilen sütun, 15 metre yüksekliğindedir.",
        hours: "24 saat açık",
        price: "Ücretsiz",
        address: "Gülhane Parkı, Fatih/İstanbul",
        contact: "-"
    },
    kiztasi: {
        title: "Kıztaşı",
        description: "5. yüzyılda Bizans döneminde inşa edilen sütun, 18 metre yüksekliğindedir.",
        hours: "24 saat açık",
        price: "Ücretsiz",
        address: "Fatih Mahallesi, Fatih/İstanbul",
        contact: "-"
    },
    binbirdirek: {
        title: "Binbirdirek Sarnıcı",
        description: "4. yüzyılda Roma döneminde inşa edilen sarnıç, 224 sütunla desteklenmektedir.",
        hours: "Her gün 09:00-17:00",
        price: "20 TL",
        address: "İmran Öktem Caddesi, Fatih/İstanbul",
        contact: "0212 522 12 59"
    },
    tekfur: {
        title: "Tekfur Sarayı",
        description: "12. yüzyılda Bizans döneminde inşa edilen saray, İstanbul'da günümüze ulaşan tek saray yapısıdır.",
        hours: "Her gün 09:00-17:00",
        price: "20 TL",
        address: "Şişhane Mahallesi, Fatih/İstanbul",
        contact: "0212 522 12 59"
    },
    anemas: {
        title: "Anemas Zindanları",
        description: "12. yüzyılda Bizans döneminde inşa edilen zindanlar, Blakhernai Sarayı'nın bir parçasıdır.",
        hours: "Her gün 09:00-17:00",
        price: "20 TL",
        address: "Ayvansaray Mahallesi, Fatih/İstanbul",
        contact: "0212 522 12 59"
    }
};

// Detay gösterme fonksiyonu
function showDetails(type, id) {
    let details;
    switch(type) {
        case 'palace':
            details = palaceDetails[id];
            break;
        case 'museum':
            details = museumDetails[id];
            break;
        case 'mosque':
            details = mosqueDetails[id];
            break;
        case 'ancient':
            details = ancientDetails[id];
            break;
    }

    if (!details) return;

    const modal = document.getElementById('detailsModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <h2>${details.title}</h2>
        <p>${details.description}</p>
        <div class="details-info">
            <p><strong>Ziyaret Saatleri:</strong> ${details.hours}</p>
            <p><strong>Giriş Ücreti:</strong> ${details.price}</p>
            <p><strong>Adres:</strong> ${details.address}</p>
            <p><strong>İletişim:</strong> ${details.contact}</p>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Modal kapatma işlemleri
document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            document.getElementById('detailsModal').style.display = 'none';
        });
    }

    window.addEventListener('click', function(event) {
        const modal = document.getElementById('detailsModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
