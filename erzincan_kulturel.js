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
    const header = document.querySelector('.erzincan-header');
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
        'erzincan-muzesi': {
            title: 'Erzincan Müzesi',
            description: 'Erzincan Müzesi, şehrin zengin tarihini ve kültürel mirasını yansıtan önemli bir müzedir. Arkeolojik eserler, etnografik koleksiyonlar ve tarihi belgeler sergilenmektedir. Müze, Erzincan\'ın tarih öncesi dönemlerden günümüze kadar olan sürecini kapsamlı bir şekilde ele almaktadır.',
            hours: '09:00 - 17:00',
            price: '15 TL',
            address: 'Müze Caddesi No:1, Erzincan',
            contact: '0446 214 11 69'
        },
        'refahiye-muzesi': {
            title: 'Refahiye Müzesi',
            description: 'Refahiye Müzesi, ilçenin tarihi ve kültürel değerlerini sergileyen önemli bir müzedir. Yöresel eserler, arkeolojik buluntular ve etnografik materyaller müzenin koleksiyonunu oluşturmaktadır. Müze, Refahiye\'nin zengin kültürel mirasını ziyaretçilerine sunmaktadır.',
            hours: '09:00 - 17:00',
            price: '10 TL',
            address: 'Refahiye Merkez, Erzincan',
            contact: '0446 311 20 00'
        }
    };

    // Tarihi Yapılar verisi
    const historicalSites = {
        'gulabi-bey-camii': {
            title: 'Gülabi Bey Camii',
            description: 'Osmanlı döneminden kalma tarihi cami, mimari özellikleri ve süslemeleriyle dikkat çekmektedir. Cami, dönemin sanat ve mimari anlayışını yansıtan önemli bir yapıdır. İç mekanındaki kalem işi süslemeler ve hat yazıları görülmeye değerdir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Gülabi Bey Mahallesi, Erzincan',
            contact: '0446 214 11 69'
        },
        'terzibaba-turbesi': {
            title: 'Terzibaba Türbesi',
            description: 'Erzincan\'ın önemli manevi değerlerinden olan türbe, tarihi ve dini önemiyle ziyaretçilerini ağırlamaktadır. Türbe, bölgenin önemli dini şahsiyetlerinden Terzibaba\'ya ait olup, mimari özellikleri ve manevi atmosferiyle dikkat çekmektedir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Terzibaba Mahallesi, Erzincan',
            contact: '0446 214 11 69'
        },
        'kemaliye': {
            title: 'Kemaliye (Eğin)',
            description: 'Tarihi evleri, dar sokakları ve doğal güzellikleriyle ünlü Kemaliye, kültürel mirasın önemli bir parçasıdır. Karanlık Kanyon, tarihi konaklar ve geleneksel mimari yapılar ilçenin öne çıkan özelliklerindendir. Doğal güzellikleri ve kültürel zenginliğiyle ziyaretçilerini büyülemektedir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Kemaliye İlçesi, Erzincan',
            contact: '0446 751 20 00'
        }
    };

    // Camiler verisi
    const mosques = {
        'ulu-cami': {
            title: 'Ulu Cami',
            description: 'Erzincan\'ın en eski camilerinden biri olan Ulu Cami, tarihi dokusu ve mimari özellikleriyle öne çıkmaktadır. Cami, şehrin merkezinde yer almakta olup, dönemin mimari özelliklerini yansıtmaktadır. İç mekanındaki süslemeler ve hat yazıları görülmeye değerdir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Ulu Cami Mahallesi, Erzincan',
            contact: '0446 214 11 69'
        },
        'otlukbeli-camii': {
            title: 'Otlukbeli Camii',
            description: 'Otlukbeli ilçesinin merkezinde yer alan cami, tarihi ve dini önemiyle ziyaretçilerini ağırlamaktadır. Cami, bölgenin önemli dini yapılarından biri olup, mimari özellikleri ve manevi atmosferiyle dikkat çekmektedir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Otlukbeli Merkez, Erzincan',
            contact: '0446 311 20 00'
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
 