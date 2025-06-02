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
    const header = document.querySelector('.canakkale-header');
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
            title: 'Çanakkale Arkeoloji Müzesi',
            description: 'Çanakkale Arkeoloji Müzesi, bölgenin zengin arkeolojik eserlerini sergileyen önemli bir müzedir. Troya, Assos ve diğer antik kentlerden çıkarılan eserler bulunmaktadır.',
            hours: '09:00 - 17:00',
            price: 'Ücretsiz',
            address: 'Merkez, Çanakkale',
            contact: '0286 217 65 65'
        },
        'troy': {
            title: 'Troya Müzesi',
            description: 'Troya Müzesi, Troya antik kentinden çıkarılan eserlerin sergilendiği modern bir müzedir. Müze, Troya\'nın 5000 yıllık tarihini anlatan zengin bir koleksiyona sahiptir.',
            hours: '09:00 - 17:00',
            price: '50 TL',
            address: 'Tevfikiye, Çanakkale',
            contact: '0286 217 65 65'
        }
    };

    // Tarihi Yapılar verileri
    const historicalSites = {
        'troy': {
            title: 'Troya Antik Kenti',
            description: 'Troya Antik Kenti, UNESCO Dünya Mirası Listesi\'nde yer alan efsanevi bir antik kenttir. Homeros\'un İlyada destanına konu olan Troya Savaşı\'nın yaşandığı yerdir.',
            hours: '08:00 - 19:00',
            price: '50 TL',
            address: 'Tevfikiye, Çanakkale',
            contact: '0286 217 65 65'
        },
        'assos': {
            title: 'Assos Antik Kenti',
            description: 'Assos Antik Kenti, antik dönemin önemli bir liman kenti ve felsefe merkezidir. Aristoteles\'in de yaşadığı kent, Athena Tapınağı ve antik tiyatrosuyla ünlüdür.',
            hours: '08:00 - 19:00',
            price: '30 TL',
            address: 'Behramkale, Çanakkale',
            contact: '0286 217 65 65'
        },
        'gelibolu': {
            title: 'Gelibolu Yarımadası',
            description: 'Gelibolu Yarımadası, Çanakkale Savaşları\'nın yaşandığı tarihi bir bölgedir. Anıtlar, şehitlikler ve savaş alanları ile Türk tarihinin önemli bir parçasıdır.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Gelibolu, Çanakkale',
            contact: '0286 217 65 65'
        }
    };

    // Camiler verileri
    const mosques = {
        'ulu': {
            title: 'Ulu Cami',
            description: 'Ulu Cami, Osmanlı döneminden kalma şehrin en büyük camisidir. Mimari özellikleri ve tarihi değeriyle önemli bir dini yapıdır.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Merkez, Çanakkale',
            contact: '0286 217 65 65'
        },
        'hidirlik': {
            title: 'Hıdırlık Cami',
            description: 'Hıdırlık Cami, tarihi önemi olan Osmanlı dönemi camisidir. Şehrin merkezinde yer alan cami, mimari özellikleriyle dikkat çekmektedir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Merkez, Çanakkale',
            contact: '0286 217 65 65'
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
 
 