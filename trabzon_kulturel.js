// Detay verilerini içeren nesne
const placeDetails = {
    historical: {
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
        }
    },
    museum: {
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
        }
    },
    mosque: {
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
        }
    }
};

// Modal elementlerini seç
const modal = document.getElementById('detailsModal');
const modalContent = document.getElementById('modalContent');
const closeButton = document.querySelector('.close-button');

// Detay gösterme fonksiyonu
function showDetails(category, placeId) {
    const details = placeDetails[category][placeId];
    
    if (details) {
        modalContent.innerHTML = `
            <h2>${details.title}</h2>
            <img src="${details.image}" alt="${details.title}" style="width: 100%; max-height: 400px; object-fit: cover; margin: 1rem 0;">
            <p>${details.description}</p>
            <div class="details-info">
                <p><strong>Adres:</strong> ${details.address}</p>
                <p><strong>Ziyaret Saatleri:</strong> ${details.visitingHours}</p>
                <p><strong>Giriş Ücreti:</strong> ${details.entryFee}</p>
            </div>
        `;
        modal.style.display = 'block';
    } else {
        console.error('Detay bilgisi bulunamadı:', category, placeId);
    }
}

// Modal kapatma fonksiyonları
closeButton.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// ESC tuşu ile modal kapatma
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
    }
}); 