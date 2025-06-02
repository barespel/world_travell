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
    const header = document.querySelector('.edirne-header');
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
        'edirne-muzesi': {
            title: 'Edirne Müzesi',
            description: 'Edirne Müzesi, şehrin zengin tarihini ve kültürel mirasını yansıtan önemli bir müzedir. Osmanlı döneminden kalma eserler, arkeolojik buluntular ve etnografik koleksiyonlar sergilenmektedir.',
            hours: '09:00 - 17:00',
            price: '20 TL',
            address: 'Meydan Mahallesi, Kadirpaşa Mektep Sokak No:7, Edirne',
            contact: '0284 225 11 20'
        },
        'saglik-muzesi': {
            title: 'Sağlık Müzesi',
            description: 'Edirne Sağlık Müzesi, Osmanlı döneminde tıp eğitiminin verildiği Darüşşifa binasında yer almaktadır. Dönemin tıp aletleri, tedavi yöntemleri ve sağlık hizmetleri hakkında bilgi veren önemli bir müzedir.',
            hours: '09:00 - 17:00',
            price: '15 TL',
            address: 'Darüşşifa Caddesi No:1, Edirne',
            contact: '0284 224 09 22'
        }
    };

    // Tarihi Yapılar verisi
    const historicalSites = {
        'selimiye-camii': {
            title: 'Selimiye Camii',
            description: 'Mimar Sinan\'ın ustalık eseri olan Selimiye Camii, Osmanlı mimarisinin en önemli yapılarından biridir. UNESCO Dünya Mirası Listesi\'nde yer alan cami, muhteşem kubbesi ve zarif minareleriyle dikkat çeker.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Mimar Sinan Mahallesi, Edirne',
            contact: '0284 225 11 20'
        },
        'uc-serefeli-cami': {
            title: 'Üç Şerefeli Cami',
            description: 'Osmanlı mimarisinin önemli örneklerinden olan Üç Şerefeli Cami, üç şerefeli minaresiyle ünlüdür. 15. yüzyılda inşa edilen cami, dönemin mimari özelliklerini yansıtmaktadır.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Hacı İlbey Mahallesi, Edirne',
            contact: '0284 225 11 20'
        },
        'edirne-sarayi': {
            title: 'Edirne Sarayı',
            description: 'Osmanlı İmparatorluğu\'nun ikinci başkenti olan Edirne\'de inşa edilen saray, dönemin ihtişamını yansıtan önemli bir yapıdır. Günümüzde kısmen ayakta kalan saray, ziyaretçilere tarihi bir yolculuk sunmaktadır.',
            hours: '09:00 - 17:00',
            price: '10 TL',
            address: 'Sarayiçi Mevkii, Edirne',
            contact: '0284 225 11 20'
        }
    };

    // Camiler verisi
    const mosques = {
        'ulu-cami': {
            title: 'Ulu Cami',
            description: 'Edirne\'nin en eski camilerinden biri olan Ulu Cami, 14. yüzyılda inşa edilmiştir. Çok kubbeli yapısı ve sade mimarisiyle dikkat çeken cami, şehrin önemli dini yapılarından biridir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Ulu Cami Mahallesi, Edirne',
            contact: '0284 225 11 20'
        },
        'muradiye-cami': {
            title: 'Muradiye Cami',
            description: '15. yüzyılda inşa edilen Muradiye Cami, Osmanlı mimarisinin zarif örneklerinden biridir. Çinileri ve süslemeleriyle ünlü olan cami, şehrin önemli tarihi yapılarından biridir.',
            hours: '24 saat açık',
            price: 'Ücretsiz',
            address: 'Muradiye Mahallesi, Edirne',
            contact: '0284 225 11 20'
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
 