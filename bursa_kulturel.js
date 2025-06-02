document.addEventListener('DOMContentLoaded', function() {
    // Logo tıklama olayı
    const logoLink = document.querySelector('.logo-link');
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'index.html';
        });
    }

    // Kart hover efektleri
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
    const header = document.querySelector('.bursa-header');
    const categories = document.querySelectorAll('.category-section');
    
    if (header) {
        header.style.opacity = '0';
        setTimeout(() => {
            header.style.transition = 'opacity 1s ease';
            header.style.opacity = '1';
        }, 100);
    }

    categories.forEach((category, index) => {
        category.style.opacity = '0';
        setTimeout(() => {
            category.style.transition = 'opacity 1s ease';
            category.style.opacity = '1';
        }, 300 * (index + 1));
    });

    // Müze verileri
    const museums = {
        'arkeoloji': {
            title: 'Bursa Arkeoloji Müzesi',
            description: 'Bursa Arkeoloji Müzesi, bölgenin zengin arkeolojik eserlerini sergileyen önemli bir müzedir. Roma, Bizans ve Osmanlı dönemlerine ait eserler bulunmaktadır.',
            hours: '09:00 - 17:00',
            price: 'Ücretsiz',
            address: 'Merkez, Bursa',
            contact: '0224 234 49 18'
        },
        'osmanli': {
            title: 'Osmanlı Evi Müzesi',
            description: 'Osmanlı Evi Müzesi, Osmanlı dönemi yaşamını yansıtan etnografik bir müzedir. Dönemin ev yaşamı, gelenekleri ve kültürü hakkında detaylı bilgiler sunmaktadır.',
            hours: '09:00 - 17:00',
            price: 'Ücretsiz',
            address: 'Merkez, Bursa',
            contact: '0224 234 49 18'
        }
    };

    // Tarihi Yapılar verileri
    const historicalSites = {
        'koza': {
            title: 'Koza Han',
            description: 'Koza Han, Osmanlı döneminden kalma önemli bir ticaret merkezidir. İpek ticareti için kullanılan han, mimari özellikleriyle dikkat çekmektedir.',
            hours: '09:00 - 18:00',
            price: 'Ücretsiz',
            address: 'Merkez, Bursa',
            contact: '0224 234 49 18'
        },
        'yesil': {
            title: 'Yeşil Türbe',
            description: 'Yeşil Türbe, Çelebi Mehmet\'in türbesidir. Çinileri ve mimari özellikleriyle Osmanlı sanatının en güzel örneklerinden biridir.',
            hours: '09:00 - 17:00',
            price: 'Ücretsiz',
            address: 'Merkez, Bursa',
            contact: '0224 234 49 18'
        },
        'uludag': {
            title: 'Uludağ Milli Parkı',
            description: 'Uludağ Milli Parkı, doğal güzellikleri ve tarihi değeri olan önemli bir milli parktır. Kış turizmi ve doğa sporları için ideal bir alandır.',
            hours: '24 saat açık',
            price: 'Giriş Ücreti: 50 TL',
            address: 'Uludağ, Bursa',
            contact: '0224 234 49 18'
        }
    };

    // Camiler verileri
    const mosques = {
        'ulu': {
            title: 'Ulu Cami',
            description: 'Ulu Cami, Osmanlı\'nın en büyük camilerinden biridir. 20 kubbeli yapısı ve hat yazılarıyla ünlüdür.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Merkez, Bursa',
            contact: '0224 234 49 18'
        },
        'yesil': {
            title: 'Yeşil Cami',
            description: 'Yeşil Cami, çinileriyle ünlü tarihi bir camidir. Osmanlı dönemi mimarisinin en güzel örneklerinden biridir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Merkez, Bursa',
            contact: '0224 234 49 18'
        }
    };

    // Detay gösterme fonksiyonu
    window.showDetails = function(type, id) {
        let data;
        switch(type) {
            case 'museum':
                data = museums[id];
                break;
            case 'historical':
                data = historicalSites[id];
                break;
            case 'mosque':
                data = mosques[id];
                break;
        }

        if (!data) return;

        const modal = document.createElement('div');
        modal.className = 'museum-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button">&times;</span>
                <h2>${data.title}</h2>
                <p class="description">${data.description}</p>
                <div class="details-grid">
                    <div class="detail-item">
                        <i class="fas fa-clock"></i>
                        <h4>Çalışma Saatleri</h4>
                        <p>${data.hours}</p>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-ticket-alt"></i>
                        <h4>Giriş Ücreti</h4>
                        <p>${data.price}</p>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <h4>Adres</h4>
                        <p>${data.address}</p>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-phone"></i>
                        <h4>İletişim</h4>
                        <p>${data.contact}</p>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Modal kapatma işlemleri
        const closeButton = modal.querySelector('.close-button');
        closeButton.onclick = function() {
            modal.remove();
        };

        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        };
    };
}); 
 
 