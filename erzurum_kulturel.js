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
    const header = document.querySelector('.erzurum-header');
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
        'erzurum-muzesi': {
            title: 'Erzurum Müzesi',
            description: 'Erzurum Müzesi, bölgenin zengin tarihini ve kültürel mirasını yansıtan önemli bir müzedir. Arkeolojik eserler, etnografik koleksiyonlar ve tarihi belgeler sergilenmektedir. Müze, Erzurum\'ın tarih öncesi dönemlerden günümüze kadar olan sürecini kapsamlı bir şekilde ele almaktadır.',
            hours: '09:00 - 17:00',
            price: '15 TL',
            address: 'Müze Caddesi No:1, Erzurum',
            contact: '0442 234 11 69'
        },
        'ataturk-evi': {
            title: 'Atatürk Evi',
            description: 'Mustafa Kemal Atatürk\'ün Erzurum Kongresi sırasında kaldığı tarihi ev, günümüzde müze olarak hizmet vermektedir. Kongre dönemine ait eşyalar ve belgeler sergilenmektedir. Milli mücadele döneminin önemli tanıklarından biri olan ev, ziyaretçilerine tarihi bir yolculuk sunmaktadır.',
            hours: '09:00 - 17:00',
            price: 'Ücretsiz',
            address: 'Kongre Caddesi No:1, Erzurum',
            contact: '0442 234 11 70'
        }
    };

    // Tarihi Yapılar verisi
    const historicalSites = {
        'cifte-minareli': {
            title: 'Çifte Minareli Medrese',
            description: 'Selçuklu döneminden kalma önemli bir medrese olan Çifte Minareli Medrese, 13. yüzyılda inşa edilmiştir. İki minaresi ve taç kapısındaki süslemeleriyle dikkat çeken medrese, dönemin mimari özelliklerini yansıtmaktadır. Günümüzde müze olarak hizmet vermektedir.',
            hours: '09:00 - 17:00',
            price: '10 TL',
            address: 'Cumhuriyet Caddesi, Erzurum',
            contact: '0442 234 11 71'
        },
        'yakutiye': {
            title: 'Yakutiye Medresesi',
            description: 'İlhanlı döneminden kalma tarihi medrese, 14. yüzyılda inşa edilmiştir. Taç kapısındaki süslemeleri ve mimari özellikleriyle dikkat çeken medrese, dönemin sanat ve mimari anlayışını yansıtmaktadır. Günümüzde müze olarak hizmet vermektedir.',
            hours: '09:00 - 17:00',
            price: '10 TL',
            address: 'Yakutiye Mahallesi, Erzurum',
            contact: '0442 234 11 72'
        },
        'uc-kumbetler': {
            title: 'Üç Kümbetler',
            description: 'Selçuklu döneminden kalma üç türbeden oluşan yapı grubu, 13. yüzyılda inşa edilmiştir. Mimari özellikleri ve süslemeleriyle dikkat çeken türbeler, dönemin sanat anlayışını yansıtmaktadır. Erzurum\'un önemli tarihi yapılarından biridir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Üç Kümbetler Mahallesi, Erzurum',
            contact: '0442 234 11 73'
        }
    };

    // Camiler verisi
    const mosques = {
        'ulu-cami': {
            title: 'Ulu Cami',
            description: 'Saltuklu döneminden kalma şehrin en eski camisi olan Ulu Cami, 12. yüzyılda inşa edilmiştir. Çok kubbeli yapısı ve sade mimarisiyle dikkat çeken cami, Erzurum\'un önemli dini yapılarından biridir. İç mekanındaki süslemeler ve hat yazıları görülmeye değerdir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Ulu Cami Mahallesi, Erzurum',
            contact: '0442 234 11 74'
        },
        'lala-pasa': {
            title: 'Lala Paşa Camii',
            description: 'Osmanlı döneminden kalma tarihi cami, 16. yüzyılda inşa edilmiştir. Mimar Sinan\'ın eseri olan cami, dönemin mimari özelliklerini yansıtmaktadır. İç mekanındaki süslemeler ve hat yazıları görülmeye değerdir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Lala Paşa Mahallesi, Erzurum',
            contact: '0442 234 11 75'
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
 