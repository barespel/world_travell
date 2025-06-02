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
    const header = document.querySelector('.diyarbakir-header');
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
    'arkeoloji': {
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
    }
};

const historicalStructures = {
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
    }
};

const culturalCenters = {
    'kulturmerkezi': {
        title: 'Diyarbakır Kültür ve Sanat Merkezi',
        description: 'Modern sanat ve kültür etkinliklerinin merkezi olan bu yapı, sergiler, konserler ve tiyatro gösterileri gibi çeşitli etkinliklere ev sahipliği yapmaktadır.',
        visitingHours: '10:00 - 22:00',
        entryFee: 'Etkinliğe göre değişmektedir',
        address: 'Yenişehir Mahallesi, Kültür Caddesi No:1, Yenişehir/Diyarbakır',
        contact: '0412 228 30 00'
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