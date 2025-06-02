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
    const header = document.querySelector('.elazig-header');
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

// Kültürel yerler verileri
const museums = {
    'arkeoloji': {
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
    }
};

const historicalStructures = {
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
    }
};

const culturalCenters = {
    'kulturmerkezi': {
        title: 'Elazığ Kültür Merkezi',
        description: 'Modern sanat ve kültür etkinliklerinin merkezi olan yapı, çeşitli sergiler, konserler ve kültürel etkinliklere ev sahipliği yapmaktadır.',
        visitingHours: '10:00 - 22:00',
        entryFee: 'Etkinliğe göre değişmektedir',
        address: 'Kültür Mahallesi, Kültür Merkezi Sokak No:1, Elazığ',
        contact: '0424 212 27 53'
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
            <p>${details.description}</p>
            <div class="details-info">
                <p><strong>Ziyaret Saatleri:</strong> ${details.visitingHours}</p>
                <p><strong>Giriş Ücreti:</strong> ${details.entryFee}</p>
                <p><strong>Adres:</strong> ${details.address}</p>
                <p><strong>İletişim:</strong> ${details.contact}</p>
            </div>
        `;
        modal.style.display = 'block';
    }
}

// Modal kapatma
const modal = document.getElementById('detailsModal');
const closeButton = document.querySelector('.close-button');

closeButton.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
} 