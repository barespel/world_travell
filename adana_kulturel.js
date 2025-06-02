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
    const header = document.querySelector('.adana-header');
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
    'adana-arkeoloji': {
        title: 'Adana Arkeoloji Müzesi',
        description: 'Çukurova\'nın zengin tarihini yansıtan müze, Hitit, Roma, Bizans ve Osmanlı dönemlerine ait önemli eserleri barındırır. Özellikle Roma dönemi mozaikleri ve heykelleriyle ünlüdür.',
        hours: '09:00 - 17:00',
        price: '20 TL',
        address: 'Döşeme Mahallesi, 7 Ocak Bulvarı No:1, Seyhan/Adana',
        contact: '0322 454 38 55'
    },
    'ataturk': {
        title: 'Atatürk Müzesi',
        description: 'Mustafa Kemal Atatürk\'ün Adana\'ya gelişlerinde konakladığı tarihi ev, 19. yüzyıl sonlarında inşa edilmiştir. Müzede Atatürk\'ün kişisel eşyaları ve dönemin mobilyaları sergilenmektedir.',
        hours: '09:00 - 17:00',
        price: 'Ücretsiz',
        address: 'Kayalıbağ Mahallesi, Seyhan Caddesi No:1, Seyhan/Adana',
        contact: '0322 359 78 66'
    },
    'etnografya': {
        title: 'Etnografya Müzesi',
        description: 'Adana\'nın geleneksel yaşamını ve kültürünü yansıtan etnografik eserlerin sergilendiği müze, yöresel el sanatları, giysiler ve günlük yaşam objelerini içerir.',
        hours: '09:00 - 17:00',
        price: '20 TL',
        address: 'Kuruköprü Mahallesi, Seyhan Caddesi No:1, Seyhan/Adana',
        contact: '0322 454 38 56'
    }
};

// Cami detayları için veri
const mosqueDetails = {
    'ulu': {
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
    'sabanci': {
        title: 'Sabancı Merkez Camii',
        description: 'Türkiye\'nin en büyük camilerinden biri olan Sabancı Merkez Camii, modern mimari özellikleriyle dikkat çeker. 1998 yılında inşa edilen cami, 28.500 kişilik kapasiteye sahiptir.',
        hours: 'Her gün açık',
        price: 'Ücretsiz',
        address: 'Reşatbey Mahallesi, 01120 Seyhan/Adana',
        contact: '0322 359 78 69'
    }
};

// Tarihi yapılar için veri
const historicalDetails = {
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
    'kapikaya': {
        title: 'Kapıkaya Kanyonu',
        description: 'Doğal güzelliği ve tarihi dokusuyla öne çıkan Kapıkaya Kanyonu, yaklaşık 5 km uzunluğundadır. Kanyon içinde yürüyüş parkurları ve seyir terasları bulunmaktadır.',
        hours: 'Her gün açık',
        price: 'Ücretsiz',
        address: 'Kapıkaya, Aladağ/Adana',
        contact: '0322 359 78 72'
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
 
 