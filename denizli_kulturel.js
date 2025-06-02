document.addEventListener('DOMContentLoaded', function() {
    // Logo tıklama olayı
    const logoLink = document.querySelector('.logo-link');
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'index.html';
        });
    }

    // Yer kartları için hover efekti
    const placeCards = document.querySelectorAll('.place-card');
    placeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Sayfa yüklendiğinde animasyonlar
    const header = document.querySelector('.denizli-header');
    const categories = document.querySelectorAll('.category-section');

    if (header) {
        header.style.opacity = '0';
        header.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            header.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 100);
    }

    categories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(20px)';
        setTimeout(() => {
            category.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            category.style.opacity = '1';
            category.style.transform = 'translateY(0)';
        }, 300 + (index * 200));
    });

    // Müzeler verisi
    const museums = {
        'denizli': {
            title: 'Denizli Müzesi',
            description: 'Denizli Müzesi, bölgenin zengin arkeolojik ve etnografik eserlerini sergileyen önemli bir müzedir. Hierapolis ve Laodikeia antik kentlerinden çıkarılan eserler bulunmaktadır.',
            hours: '09:00 - 17:00',
            price: 'Ücretsiz',
            address: 'Merkez, Denizli',
            contact: '0258 213 45 67'
        },
        'hierapolis': {
            title: 'Hierapolis Müzesi',
            description: 'Hierapolis Antik Kenti\'nden çıkarılan eserlerin sergilendiği müze, Roma dönemi eserleri ve lahitlerle ünlüdür.',
            hours: '09:00 - 17:00',
            price: '50 TL',
            address: 'Pamukkale, Denizli',
            contact: '0258 213 45 68'
        }
    };

    // Tarihi Yerler verisi
    const historicalSites = {
        'hierapolis': {
            title: 'Hierapolis Antik Kenti',
            description: 'UNESCO Dünya Mirası Listesi\'nde yer alan Hierapolis Antik Kenti, Roma döneminden kalma önemli bir yerleşim yeridir. Antik tiyatro, nekropol ve hamamlarıyla ünlüdür.',
            hours: '08:00 - 19:00',
            price: '50 TL',
            address: 'Pamukkale, Denizli',
            contact: '0258 213 45 69'
        },
        'laodikeia': {
            title: 'Laodikeia Antik Kenti',
            description: 'Helenistik dönemden kalma önemli bir antik kent olan Laodikeia, Roma döneminde önemli bir ticaret merkeziydi. Stadyum, tiyatro ve kiliseleriyle ünlüdür.',
            hours: '08:00 - 19:00',
            price: '30 TL',
            address: 'Merkez, Denizli',
            contact: '0258 213 45 70'
        },
        'pamukkale': {
            title: 'Pamukkale',
            description: 'UNESCO Dünya Mirası Listesi\'nde yer alan Pamukkale, doğal traverten terasları ve termal sularıyla ünlüdür. Antik dönemden beri şifa merkezi olarak kullanılmıştır.',
            hours: '24 saat açık',
            price: '50 TL',
            address: 'Pamukkale, Denizli',
            contact: '0258 213 45 71'
        }
    };

    // Camiler verisi
    const mosques = {
        'ulu': {
            title: 'Ulu Cami',
            description: 'Selçuklu döneminden kalma şehrin en eski camisi olan Ulu Cami, mimari özellikleri ve süslemeleriyle dikkat çekmektedir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Merkez, Denizli',
            contact: '0258 213 45 72'
        },
        'akhan': {
            title: 'Akhan Cami',
            description: 'Osmanlı döneminden kalma tarihi cami, şehrin önemli dini yapılarından biridir. Restore edilmiş haliyle günümüze ulaşmıştır.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Merkez, Denizli',
            contact: '0258 213 45 73'
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
 