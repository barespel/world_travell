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
    const header = document.querySelector('.bingol-header');
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
    'bingol': {
        title: 'Bingöl Müzesi',
        description: 'Bölgenin zengin tarihini yansıtan müze, Paleolitik dönemden günümüze kadar uzanan eserleri barındırır. Özellikle Urartu dönemine ait eserler dikkat çekicidir.',
        hours: '09:00 - 17:00',
        price: '20 TL',
        address: 'Cumhuriyet Caddesi No:1, Merkez/Bingöl',
        contact: '0426 213 11 91'
    },
    'etnografya': {
        title: 'Etnografya Müzesi',
        description: 'Yöresel kültürü ve tarihi yansıtan etnografik eserlerin sergilendiği müze, geleneksel el sanatları ve günlük yaşam objelerini içerir.',
        hours: '09:00 - 17:00',
        price: '20 TL',
        address: 'Cumhuriyet Caddesi No:2, Merkez/Bingöl',
        contact: '0426 213 11 92'
    }
};

// Tarihi yapılar için veri
const historicalDetails = {
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
    }
};

// Cami detayları için veri
const mosqueDetails = {
    'ulu': {
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
 
 