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
    const header = document.querySelector('.cankiri-header');
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
        'cankiri-muzesi': {
            title: 'Çankırı Müzesi',
            description: 'Çankırı'nın tarihi ve kültürel mirasını yansıtan müze, arkeolojik eserler ve etnografik koleksiyonlar sunmaktadır.',
            hours: '09:00 - 17:00',
            price: 'Ücretsiz',
            address: 'Merkez, Çankırı',
            contact: '0376 213 45 67'
        },
        'tarih-muzesi': {
            title: 'Çankırı Tarih Müzesi',
            description: 'Şehrin tarihini ve kültürel gelişimini anlatan müze, önemli tarihi eserleri barındırmaktadır.',
            hours: '09:00 - 17:00',
            price: 'Ücretsiz',
            address: 'Merkez, Çankırı',
            contact: '0376 213 45 68'
        }
    };

    // Tarihi Yerler verisi
    const historicalSites = {
        'tuz-magarası': {
            title: 'Tuz Mağarası',
            description: 'Dünyanın en büyük tuz mağaralarından biri olan Çankırı Tuz Mağarası, doğal bir hazinedir.',
            hours: '08:00 - 18:00',
            price: '20 TL',
            address: 'Merkez, Çankırı',
            contact: '0376 213 45 69'
        },
        'kale': {
            title: 'Çankırı Kalesi',
            description: 'Roma döneminden kalma tarihi kale, şehrin en önemli tarihi yapılarından biridir.',
            hours: '09:00 - 17:00',
            price: 'Ücretsiz',
            address: 'Merkez, Çankırı',
            contact: '0376 213 45 70'
        },
        'cami': {
            title: 'Ulu Cami',
            description: 'Selçuklu döneminden kalma tarihi cami, şehrin en eski dini yapılarından biridir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Merkez, Çankırı',
            contact: '0376 213 45 71'
        }
    };

    // Camiler verisi
    const mosques = {
        'ulu-cami': {
            title: 'Ulu Cami',
            description: 'Selçuklu mimarisinin önemli örneklerinden olan cami, şehrin merkezinde yer almaktadır.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Merkez, Çankırı',
            contact: '0376 213 45 72'
        },
        'tarih-cami': {
            title: 'Tarihi Cami',
            description: 'Osmanlı döneminden kalma tarihi cami, şehrin önemli dini yapılarından biridir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Merkez, Çankırı',
            contact: '0376 213 45 73'
        }
    };

    // Detay gösterme fonksiyonu
    window.showDetails = function(id) {
        let data;
        if (museums[id]) {
            data = museums[id];
        } else if (historicalSites[id]) {
            data = historicalSites[id];
        } else if (mosques[id]) {
            data = mosques[id];
        }

        if (data) {
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
        }
    };
}); 
 
 