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
    const header = document.querySelector('.gaziantep-header');
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
        'zeugma-muzesi': {
            title: 'Zeugma Mozaik Müzesi',
            description: 'Dünyanın en büyük mozaik müzelerinden biri olan Zeugma Mozaik Müzesi, Roma döneminden kalma eşsiz mozaikleri barındırmaktadır. Müze, Zeugma antik kentinden çıkarılan mozaiklerin yanı sıra, freskler, heykeller ve diğer arkeolojik eserleri de sergilemektedir. Özellikle "Çingene Kızı" mozaiği müzenin en değerli eserlerinden biridir.',
            hours: '09:00 - 17:00',
            price: '30 TL',
            address: 'Mithatpaşa Mahallesi, Hacı Sani Konukoğlu Bulvarı No:275, Şehitkamil, Gaziantep',
            contact: '0342 325 27 27'
        },
        'emine-gogus-muzesi': {
            title: 'Emine Göğüş Mutfak Müzesi',
            description: 'Geleneksel Gaziantep mutfağının tüm detaylarını yansıtan, Türkiye\'nin ilk mutfak müzesidir. Müze, 19. yüzyıldan kalma bir evde kurulmuş olup, dönemin mutfak eşyaları, yemek tarifleri ve mutfak kültürü hakkında detaylı bilgiler sunmaktadır. Ziyaretçiler, Gaziantep\'in zengin mutfak kültürünü yakından tanıma fırsatı bulmaktadır.',
            hours: '09:00 - 17:00',
            price: '10 TL',
            address: 'Kozluca Mahallesi, Hanifi Oğlu Sokak No:64, Şahinbey, Gaziantep',
            contact: '0342 230 47 21'
        }
    };

    // Tarihi Yapılar verisi
    const historicalSites = {
        'gaziantep-kalesi': {
            title: 'Gaziantep Kalesi',
            description: 'Roma döneminden kalma, şehrin merkezinde yer alan tarihi kale. Savunma amaçlı inşa edilmiş olup, günümüzde müze olarak hizmet vermektedir. Kale, şehrin en yüksek noktasında yer almakta ve ziyaretçilerine panoramik bir manzara sunmaktadır. İçerisinde sergilenen arkeolojik eserler ve tarihi dokümanlar, Gaziantep\'in zengin tarihini yansıtmaktadır.',
            hours: '09:00 - 17:00',
            price: '15 TL',
            address: 'Seferpaşa Mahallesi, Gaziantep Kalesi, Şahinbey, Gaziantep',
            contact: '0342 230 47 22'
        },
        'kurtulus-camii': {
            title: 'Kurtuluş Camii',
            description: 'Osmanlı döneminden kalma, mimari özellikleriyle dikkat çeken tarihi cami. Cami, taş işçiliği ve süslemeleriyle dikkat çekmektedir. İç mekanındaki kalem işi süslemeler ve hat yazıları görülmeye değerdir. Cami, şehrin merkezi bir konumunda yer almakta ve aktif olarak ibadete açıktır.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Kurtuluş Mahallesi, Kurtuluş Caddesi, Şahinbey, Gaziantep',
            contact: '0342 230 47 23'
        },
        'rumkale': {
            title: 'Rumkale',
            description: 'Fırat Nehri\'nin kıyısında yükselen, tarihi ve doğal güzelliğiyle dikkat çeken antik kale. Kale, Roma döneminden kalma olup, stratejik konumu nedeniyle önemli bir savunma noktası olarak kullanılmıştır. Günümüzde ziyaretçiler, kalenin etkileyici manzarası ve tarihi dokusunu keşfetme fırsatı bulmaktadır.',
            hours: '09:00 - 17:00',
            price: '15 TL',
            address: 'Yavuzeli, Gaziantep',
            contact: '0342 230 47 24'
        }
    };

    // Camiler verisi
    const mosques = {
        'ulu-cami': {
            title: 'Ulu Cami',
            description: 'Şehrin en eski camilerinden biri olan, Selçuklu döneminden kalma tarihi cami. Cami, 13. yüzyılda inşa edilmiş olup, dönemin mimari özelliklerini taşımaktadır. İç mekanındaki süslemeler ve hat yazıları görülmeye değerdir. Cami, şehrin merkezi bir konumunda yer almakta ve aktif olarak ibadete açıktır.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Ulu Cami Mahallesi, Ulu Cami Caddesi, Şahinbey, Gaziantep',
            contact: '0342 230 47 25'
        },
        'ali-nacar-camii': {
            title: 'Ali Nacar Camii',
            description: 'Osmanlı döneminden kalma, taş işçiliğiyle dikkat çeken tarihi cami. Cami, 16. yüzyılda inşa edilmiş olup, taş işçiliği ve süslemeleriyle öne çıkmaktadır. İç mekanındaki kalem işi süslemeler ve hat yazıları görülmeye değerdir. Cami, şehrin merkezi bir konumunda yer almakta ve aktif olarak ibadete açıktır.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Ali Nacar Mahallesi, Ali Nacar Caddesi, Şahinbey, Gaziantep',
            contact: '0342 230 47 26'
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
 