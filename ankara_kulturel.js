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
    const header = document.querySelector('.ankara-header');
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
const ancientDetails = {
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

// Kültür merkezleri için veri
const culturalDetails = {
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

// Detay gösterme fonksiyonu
function showDetails(type, id) {
    let details;
    switch(type) {
        case 'museum':
            details = museumDetails[id];
            break;
        case 'ancient':
            details = ancientDetails[id];
            break;
        case 'cultural':
            details = culturalDetails[id];
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