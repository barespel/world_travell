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
    const header = document.querySelector('.eskisehir-header');
    const categorySections = document.querySelectorAll('.category-section');

    if (header) {
        header.style.opacity = '0';
        header.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            header.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 100);
    }

    categorySections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        setTimeout(() => {
            section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 300 + (index * 200));
    });

    // Müzeler verisi
    const museums = {
        'odunpazari-muzesi': {
            title: 'Odunpazarı Modern Müze',
            description: 'Modern sanat eserlerinin sergilendiği, mimari tasarımıyla dikkat çeken müze. Japon mimar Kengo Kuma tarafından tasarlanan müze, ahşap yapısı ve modern mimarisiyle öne çıkmaktadır. Çağdaş sanat eserlerinin yanı sıra, düzenli olarak geçici sergilere de ev sahipliği yapmaktadır.',
            hours: '10:00 - 18:00',
            price: '20 TL',
            address: 'Akarbaşı Mahallesi, Atatürk Bulvarı No:37, Odunpazarı, Eskişehir',
            contact: '0222 220 26 05'
        },
        'balmumu-muzesi': {
            title: 'Balmumu Müzesi',
            description: 'Türk ve dünya tarihinden önemli kişilerin balmumu heykellerinin sergilendiği müze. Atatürk\'ten Einstein\'a, Mevlana\'dan Shakespeare\'e kadar birçok önemli ismin balmumu heykelleri bulunmaktadır. Müze, ziyaretçilerine tarihi kişiliklerle yakından tanışma fırsatı sunmaktadır.',
            hours: '10:00 - 18:00',
            price: '15 TL',
            address: 'Akarbaşı Mahallesi, Atatürk Bulvarı No:37, Odunpazarı, Eskişehir',
            contact: '0222 220 26 06'
        }
    };

    // Tarihi Yapılar verisi
    const historicalSites = {
        'kursunlu-cami': {
            title: 'Kurşunlu Camii',
            description: 'Osmanlı döneminden kalma, mimari özellikleriyle dikkat çeken tarihi cami. 16. yüzyılda inşa edilen cami, kurşun kaplı kubbesi ve zarif minaresiyle dikkat çekmektedir. İç mekanındaki kalem işi süslemeler ve hat yazıları görülmeye değerdir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Kurşunlu Mahallesi, Odunpazarı, Eskişehir',
            contact: '0222 220 26 07'
        },
        'odunpazari-evleri': {
            title: 'Odunpazarı Evleri',
            description: 'Geleneksel Osmanlı mimarisini yansıtan, tarihi evlerin bulunduğu bölge. 19. yüzyıldan kalma evler, geleneksel Türk evi mimarisinin en güzel örneklerindendir. Dar sokaklar, ahşap evler ve tarihi atmosferiyle ziyaretçilerini geçmişe götürmektedir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Odunpazarı Mahallesi, Eskişehir',
            contact: '0222 220 26 08'
        },
        'seyitgazi-kulliyesi': {
            title: 'Seyitgazi Külliyesi',
            description: 'Selçuklu döneminden kalma, tarihi ve dini öneme sahip külliyelerden biri. 13. yüzyılda inşa edilen külliye, cami, medrese, türbe ve diğer yapılardan oluşmaktadır. Dönemin mimari özelliklerini yansıtan yapı, ziyaretçilerine tarihi bir yolculuk sunmaktadır.',
            hours: '09:00 - 17:00',
            price: 'Ücretsiz',
            address: 'Seyitgazi, Eskişehir',
            contact: '0222 220 26 09'
        }
    };

    // Camiler verisi
    const mosques = {
        'ulu-cami': {
            title: 'Ulu Cami',
            description: 'Şehrin en eski camilerinden biri olan, tarihi dokusuyla dikkat çeken cami. 13. yüzyılda inşa edilen cami, Selçuklu mimarisinin özelliklerini taşımaktadır. Çok kubbeli yapısı ve sade mimarisiyle dikkat çeken cami, Eskişehir\'in önemli dini yapılarından biridir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Ulu Cami Mahallesi, Eskişehir',
            contact: '0222 220 26 10'
        },
        'ak-cami': {
            title: 'Ak Cami',
            description: 'Osmanlı döneminden kalma, beyaz taşlarıyla dikkat çeken tarihi cami. 16. yüzyılda inşa edilen cami, beyaz mermer kullanımıyla öne çıkmaktadır. İç mekanındaki süslemeler ve hat yazıları görülmeye değerdir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Ak Cami Mahallesi, Eskişehir',
            contact: '0222 220 26 11'
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
            closeButton.addEventListener('click', () => {
                modal.remove();
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        }
    };
}); 
 