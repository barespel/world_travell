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
    }
};

// Tarihi yapılar için veri
const historicalDetails = {
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
    }
};

// Cami detayları için veri
const mosqueDetails = {
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
 
 