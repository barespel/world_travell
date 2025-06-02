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
    const header = document.querySelector('.burdur-header');
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
        'burdur': {
            title: 'Burdur Müzesi',
            description: 'Burdur Müzesi, bölgenin zengin arkeolojik ve etnografik eserlerini sergileyen önemli bir müzedir. Sagalassos ve Kremna antik kentlerinden çıkarılan eserler ile yöresel kültürü yansıtan etnografik koleksiyonlar bulunmaktadır.',
            hours: '09:00 - 17:00',
            price: 'Ücretsiz',
            address: 'Merkez, Burdur',
            contact: '0248 233 10 42'
        },
        'sagalassos': {
            title: 'Sagalassos Antik Kenti',
            description: 'Sagalassos Antik Kenti, Roma döneminden kalma önemli bir antik kenttir. Açık hava müzesi olarak ziyaret edilebilen kentte, tiyatro, kütüphane, hamam gibi yapılar bulunmaktadır.',
            hours: '08:00 - 19:00',
            price: '50 TL',
            address: 'Ağlasun, Burdur',
            contact: '0248 233 10 42'
        }
    };

    // Tarihi Yapılar verileri
    const historicalSites = {
        'insuyu': {
            title: 'İnsuyu Mağarası',
            description: 'İnsuyu Mağarası, doğal oluşumlu, sarkıt ve dikitleriyle ünlü bir mağaradır. İçindeki göl ve doğal oluşumlar ziyaretçileri büyülemektedir.',
            hours: '09:00 - 17:00',
            price: '20 TL',
            address: 'Bucak, Burdur',
            contact: '0248 233 10 42'
        },
        'salda': {
            title: 'Salda Gölü',
            description: 'Salda Gölü, turkuaz rengi suları ve beyaz kumsallarıyla ünlü doğal bir göldür. Mars\'taki Jezero Krateri\'ne benzerliği ile de dikkat çekmektedir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Yeşilova, Burdur',
            contact: '0248 233 10 42'
        },
        'cremna': {
            title: 'Cremna Antik Kenti',
            description: 'Cremna Antik Kenti, Roma döneminden kalma önemli bir antik kenttir. Akropol, tiyatro ve diğer yapıların kalıntıları görülebilmektedir.',
            hours: '08:00 - 19:00',
            price: 'Ücretsiz',
            address: 'Bucak, Burdur',
            contact: '0248 233 10 42'
        }
    };

    // Camiler verileri
    const mosques = {
        'ulu': {
            title: 'Ulu Cami',
            description: 'Ulu Cami, Burdur\'un en eski ve en büyük camilerinden biridir. Selçuklu döneminden kalma tarihi bir yapıdır.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Merkez, Burdur',
            contact: '0248 233 10 42'
        },
        'tasoda': {
            title: 'Taş Oda',
            description: 'Taş Oda, Osmanlı döneminden kalma önemli bir tarihi yapıdır. Mimari özellikleri ve tarihi değeriyle dikkat çekmektedir.',
            hours: '09:00 - 17:00',
            price: 'Ücretsiz',
            address: 'Merkez, Burdur',
            contact: '0248 233 10 42'
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
 
 