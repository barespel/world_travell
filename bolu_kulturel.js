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
    const header = document.querySelector('.bolu-header');
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
        'bolu-museum': {
            title: 'Bolu Müzesi',
            description: 'Bolu Müzesi, şehrin zengin tarihini ve kültürel mirasını sergileyen önemli bir müzedir. Arkeolojik eserler, etnografik koleksiyonlar ve tarihi objeler bulunmaktadır.',
            hours: '09:00 - 17:00',
            price: 'Ücretsiz',
            address: 'Merkez, Bolu',
            contact: '0374 215 11 96'
        },
        'seben-museum': {
            title: 'Seben Müzesi',
            description: 'Seben Müzesi, bölgenin tarihi ve kültürel zenginliklerini yansıtan önemli bir müzedir. Yerel tarih ve kültür hakkında detaylı bilgiler sunmaktadır.',
            hours: '09:00 - 17:00',
            price: 'Ücretsiz',
            address: 'Seben, Bolu',
            contact: '0374 411 20 00'
        }
    };

    // Tarihi Yapılar verileri
    const historicalSites = {
        'akcakoca-castle': {
            title: 'Akçakoca Kalesi',
            description: 'Akçakoca Kalesi, tarihi bir savunma yapısıdır. Şehrin en yüksek noktalarından birinde bulunan kale, muhteşem manzarasıyla ziyaretçilerini büyülemektedir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Akçakoca, Bolu',
            contact: '0374 411 20 00'
        },
        'golcuk-park': {
            title: 'Gölcük Tabiat Parkı',
            description: 'Gölcük Tabiat Parkı, doğal güzellikleri ve temiz havasıyla ünlü bir rekreasyon alanıdır. Yürüyüş parkurları ve piknik alanları bulunmaktadır.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Gölcük, Bolu',
            contact: '0374 215 11 96'
        },
        'abant-lake': {
            title: 'Abant Gölü',
            description: 'Abant Gölü, doğal güzelliği ve temiz havasıyla ünlü bir göldür. Çevresinde yürüyüş parkurları ve piknik alanları bulunmaktadır.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Abant, Bolu',
            contact: '0374 215 11 96'
        }
    };

    // Camiler verileri
    const mosques = {
        'ulu-mosque': {
            title: 'Ulu Cami',
            description: 'Ulu Cami, Bolu\'nun en eski ve en büyük camilerinden biridir. Osmanlı döneminden kalma tarihi bir yapıdır.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Merkez, Bolu',
            contact: '0374 215 11 96'
        },
        'yildirim-mosque': {
            title: 'Yıldırım Camii',
            description: 'Yıldırım Camii, Osmanlı döneminden kalma önemli bir dini yapıdır. Mimari özellikleri ve tarihi değeriyle dikkat çekmektedir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Merkez, Bolu',
            contact: '0374 215 11 96'
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
 
 