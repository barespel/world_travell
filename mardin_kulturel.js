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
    const header = document.querySelector('.mardin-header');
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

    // Modal kapatma işlemleri
    const modal = document.getElementById('detailsModal');
    const closeButton = document.querySelector('.close-button');

    if (closeButton) {
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Kültürel yerler verileri
const museums = {
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
    }
};

const historicalStructures = {
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
    }
};

const culturalCenters = {
    'artuklu': {
        title: 'Artuklu Kültür Merkezi',
        description: 'Modern sanat ve kültür etkinliklerinin merkezi olan bu yapı, sergiler, konserler ve tiyatro gösterileri gibi çeşitli etkinliklere ev sahipliği yapmaktadır.',
        visitingHours: '10:00 - 22:00',
        entryFee: 'Etkinliğe göre değişmektedir',
        address: 'Cumhuriyet Meydanı, Artuklu/Mardin',
        contact: '0482 212 16 64'
    }
};

// Detay gösterme fonksiyonu
function showDetails(type, id) {
    const modal = document.getElementById('detailsModal');
    const modalContent = document.getElementById('modalContent');
    let details;

    switch(type) {
        case 'museum':
            details = museums[id];
            break;
        case 'ancient':
            details = historicalStructures[id];
            break;
        case 'mosque':
            details = historicalStructures[id];
            break;
        case 'cultural':
            details = culturalCenters[id];
            break;
    }

    if (details) {
        modalContent.innerHTML = `
            <h2>${details.title}</h2>
            <div class="details-info">
                <p><strong>Açıklama:</strong> ${details.description}</p>
                <p><strong>Ziyaret Saatleri:</strong> ${details.visitingHours}</p>
                <p><strong>Giriş Ücreti:</strong> ${details.entryFee}</p>
                <p><strong>Adres:</strong> ${details.address}</p>
                <p><strong>İletişim:</strong> ${details.contact}</p>
            </div>
        `;
        modal.style.display = 'block';
    }
} 