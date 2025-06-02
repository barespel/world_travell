// Detay verilerini içeren nesne
const placeDetails = {
    historical: {
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
        }
    },
    museum: {
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
        }
    },
    mosque: {
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
                <p><strong>İletişim:</strong> ${details.phone}</p>
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