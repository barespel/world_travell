const regionCities = {
    marmara: ["istanbul", "edirne", "kırklareli", "tekirdağ", "kocaeli", "sakarya", "yalova", "bursa", "balıkesir", "çanakkale", "bilecik"],
    ege: ["izmir", "aydın", "muğla", "manisa", "uşak", "kütahya", "Afyonkarahisar", "denizli"],
    akdeniz: ["antalya", "ısparta", "burdur", "mersin", "adana", "osmaniye", "Hatay", "Kahramanmaraş"],
    "ic-anadolu": ["ankara", "konya", "kayseri", "eskişehir", "aksaray", "kırıkkale", "kırşehir", "nevşehir", "niğde", "sivas", "yozgat", "çankırı", "karaman"],
    karadeniz: ["samsun", "sinop", "amasya", "tokat", "ordu", "giresun", "trabzon", "rize", "artvin", "bartın", "zonguldak", "kastamonu", "çorum", "gümüşhane", "bayburt", "bolu", "düzce"],
    "dogu-anadolu": ["erzurum", "erzincan", "ağrı", "kars", "ığdır", "ardahan", "bingöl", "bitlis", "elazığ", "hakkari", "malatya", "muş", "tunceli", "van"],
    "guneydogu-anadolu": ["gaziantep", "adıyaman", "diyarbakır", "mardin", "batman", "şanlıurfa", "siirt", "şırnak", "kilis"],
};

const cityFoods = {
    "İstanbul": ["İskender Kebap", "Lahmacun", "Balık Ekmek", "Künefe"],
    "Ankara": ["Ankara Tava", "Beypazarı Kurusu", "Çubuk Turşusu"],
    "İzmir": ["Boyoz", "Kumru", "İzmir Köfte", "Lokma"],
    "Antalya": ["Pişmaniye", "Şiş Köfte", "Tandır Kebabı"],
    "Bursa": ["İskender Kebap", "Kestane Şekeri", "İnegöl Köfte"],
    "Gaziantep": ["Baklava", "Lahmacun", "Antep Fıstığı"],
    "Konya": ["Etli Ekmek", "Fırın Kebabı", "Tirit"],
    "Trabzon": ["Hamsi Tava", "Akçaabat Köfte", "Kuymak"],
    "Adana": ["Adana Kebap", "Şırdan", "Bici Bici"],
    "Diyarbakır": ["Kaburga Dolması", "Meftune", "Nardan Şurubu"]
};

const cityMustTryFoods = {
    "İstanbul": {
        description: "Türkiye'nin en zengin mutfak kültürüne sahip şehri",
        image: "../images/istanbul_2.jpeg",
        foods: [
            "Balık Ekmek",
            "İskender Kebap",
            "Lahmacun",
            "Künefe",
            "Boza",
            "Midye Dolma",
            "Kokoreç"
        ]
    },
    "Gaziantep": {
        description: "UNESCO tarafından gastronomi şehri seçilen Gaziantep'in eşsiz lezzetleri",
        image: "../images/gaziantep.jpg",
        foods: [
            "Baklava",
            "Antep Fıstığı",
            "Yuvalama",
            "Beyran",
            "Katmer",
            "Lahmacun",
            "Antep Kebabı"
        ]
    },
    "İzmir": {
        description: "Ege'nin incisi İzmir'in deniz ürünleri ve sokak lezzetleri",
        image: "../images/izmir.jpg",
        foods: [
            "Boyoz",
            "Kumru",
            "İzmir Köfte",
            "Lokma",
            "Çiğdem Çorbası",
            "Şambali",
            "Gerdan Tatlısı"
        ]
    },
    "Trabzon": {
        description: "Karadeniz'in eşsiz lezzetleri ve hamsi balığının başkenti",
        image: "../images/trabzon_2.jpg",
        foods: [
            "Hamsi Tava",
            "Akçaabat Köfte",
            "Kuymak",
            "Muhlama",
            "Galdirik Kavurması",
            "Trabzon Ekmeği",
            "Sütlaç"
        ]
    },
    "Diyarbakır": {
        description: " Güneydoğu'nun eşsiz lezzetleri ve bakır işçiliğinin merkezi",
        image: "../images/diyarbakir.jpeg",
        foods: [
            "Kaburga Dolması",
            "Meftune",
            "Nardan Şurubu",
            "İçli Köfte",
            "Ciğer Kebabı",
            "Kadayıf",
            "Bakır İşlemeli Tatlılar"
        ]
    }
};

const featuredRegions = {
    "Güneydoğu Anadolu": {
        description: "Dünya'nın en zengin mutfaklarından biri olan Gaziantep mutfağı, baklava ve lahmacun gibi lezzetleriyle ünlüdür.",
        foods: ["Baklava", "Lahmacun", "Antep Fıstığı", "Yuvalama", "Beyran"]
    },
    "Ege": {
        description: "Ege'nin incisi İzmir'in zeytinyağlı yemekleri ve deniz ürünleriyle ünlü mutfağı.",
        foods: ["Boyoz", "Kumru", "İzmir Köfte", "Lokma", "Çiğdem Çorbası"]
    },
    "Karadeniz": {
        description: "Karadeniz'in eşsiz lezzetleri ve hamsi balığının başkenti Trabzon mutfağı.",
        foods: ["Hamsi Tava", "Akçaabat Köfte", "Kuymak", "Muhlama", "Galdirik Kavurması"]
    },
    "İç Anadolu": {
        description: "Selçuklu'dan günümüze uzanan zengin mutfak kültürü.",
        foods: ["Etli Ekmek", "Fırın Kebabı", "Tirit", "Bamya Çorbası", "Sac Arası"]
    }
};

const popularFoods = [
    {
        name: "İskender Kebap",
        region: "Bursa",
        description: "İnce döner dilimleri, domates sosu, yoğurt ve tereyağı ile servis edilen eşsiz lezzet."
    },
    {
        name: "Lahmacun",
        region: "Gaziantep",
        description: "İnce hamur üzerine kıymalı harç ile hazırlanan geleneksel lezzet."
    },
    {
        name: "Mantı",
        region: "Kayseri",
        description: "İnce hamur içine kıyma konularak hazırlanan, üzerine yoğurt ve sos dökülen geleneksel yemek."
    },
    {
        name: "Hamsi Tava",
        region: "Trabzon",
        description: "Karadeniz'in meşhur hamsi balığının özel pişirme tekniği ile hazırlanan lezzeti."
    }
];

document.addEventListener('DOMContentLoaded', function() {
    try {
        // Başlık değişikliği
        const header = document.querySelector('header');
        if (header) {
            const title = header.querySelector('h1');
            if (title) {
                title.textContent = 'Yemek Kültürü';
            }
        }

        // Logo ve başlık tıklama olayı
        const navBrand = document.querySelector('.nav-brand');
        if (navBrand) {
            navBrand.style.cursor = 'pointer';
            navBrand.addEventListener('click', function() {
                window.location.href = 'index.html';
            });
        }
        
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.style.cursor = 'pointer';
        }
        
        // Arama işlevselliği için doğru ID'leri kullanma
        const searchInput = document.getElementById('city-search');
        if (!searchInput) {
            throw new Error('Arama kutusu bulunamadı');
        }

        const searchResults = document.getElementById('search-results');
        const allCities = Object.values(regionCities).flat();

        function capitalizeFirstLetter(string) {
            if (string.length === 0) return string;
            
            const firstChar = string.charAt(0);
            if (firstChar === 'i') {
                return 'İ' + string.slice(1).toLowerCase();
            } else if (firstChar === 'ı') {
                return 'I' + string.slice(1).toLowerCase();
            } else {
                return firstChar.toUpperCase() + string.slice(1).toLowerCase();
            }
        }

        function updateSearchResults() {
            const searchTerm = searchInput.value;
            
            if (searchTerm.length < 1) {
                searchResults.style.display = 'none';
                return;
            }

            const matchedCities = allCities.filter(city => 
                city.toLowerCase().includes(searchTerm.toLowerCase())
            );

            console.log('Eşleşen şehirler:', matchedCities);

            if (matchedCities.length > 0) {
                searchResults.innerHTML = matchedCities
                    .map(city => `<div class="search-result-item">${city}</div>`)
                    .join('');
                searchResults.style.display = 'block';
            } else {
                searchResults.style.display = 'none';
            }
        }

        searchInput.addEventListener('input', updateSearchResults);

        searchResults.addEventListener('click', function(e) {
            if (e.target.classList.contains('search-result-item')) {
                const selectedCity = e.target.textContent;
                searchInput.value = selectedCity;
                searchResults.style.display = 'none';
                
                window.location.href = `${selectedCity.toLowerCase().replace(/ /g, '-')}-yemek.html`;
                
            }
        }
    );

        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });

        // Öne çıkan yemekler bölümünü arama kutusunun altına ekle
        const searchContainer = document.querySelector('.search-container');
        if (!searchContainer) {
            throw new Error('Arama konteyneri bulunamadı');
        }

        const popularFoodsSection = document.createElement('div');
        popularFoodsSection.className = 'popular-foods-section';
        
        popularFoodsSection.innerHTML = `
            <div class="slider-container">
                <button class="slider-button prev-button">❮</button>
                <div class="foods-container">
                    ${Object.entries(cityMustTryFoods).map(([city, data]) => `
                        <div class="food-card" data-city="${city}">
                            <div class="food-card-image">
                                <img src="${data.image}" alt="${city} mutfağı">
                            </div>
                            <h3>${city}</h3>
                            <p class="description">${data.description}</p>
                            <div class="foods-list">
                                <h4>Mutlaka Yenmesi Gerekenler:</h4>
                                <ul>
                                    ${data.foods.map(food => `<li>${food}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <button class="slider-button next-button">❯</button>
            </div>
        `;

        // Arama kutusunun altına ekle
        searchContainer.parentNode.insertBefore(popularFoodsSection, searchContainer.nextSibling);

        // CSS stillerini ekle
        const style = document.createElement('style');
        style.textContent = `
            nav {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                background: transparent !important; /* Navigasyon çubuğunun arkasındaki beyaz şeridi kaldırır */
                z-index: 1000;
                box-shadow: none !important;
                backdrop-filter: blur(5px);
            }

            .search-container {
                margin-top: 80px; /* Navigasyon çubuğunun altında başlaması için */
            }

            #city-search {
                width: 100%;
                padding: 12px;
                font-size: 16px;
                border: 2px solid #ddd;
                border-radius: 8px;
                margin-bottom: 5px;
            }
            #search-results {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                border: 1px solid #ddd;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                z-index: 9999;
                max-height: 300px;
                overflow-y: auto;
            }
            .search-result-item {
                padding: 12px 15px;
                cursor: pointer;
                border-bottom: 1px solid #eee;
                transition: background-color 0.2s;
            }
            .search-result-item:last-child {
                border-bottom: none;
            }
            .search-result-item:hover {
                background-color: #f5f5f5;
            }
            .search-container {
                position: relative;
                max-width: 1400px;
                margin: 0 auto;
                padding: 0 20px;
            }
            .popular-foods-section {
                padding: 20px;
                max-width: 1400px;
                margin: 20px auto;
                background-color: transparent;
                border-radius: 10px;
                position: relative;
                overflow: hidden;
            }
            .food-card {
                background: rgba(255, 255, 255, 0.9);
                padding: 0;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                transition: transform 0.2s ease;
                width: calc((100% - 40px) / 3);
                flex: 0 0 auto;
                overflow: hidden;
                cursor: pointer;
            }
            .food-card:hover {
                transform: translateY(-3px);
                box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            }
            .food-card-image {
                width: 100%;
                height: 200px;
                overflow: hidden;
            }
            .food-card-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.3s ease;
            }
            .food-card:hover .food-card-image img {
                transform: scale(1.1);
            }
            .food-card h3 {
                color: #2c3e50;
                margin: 15px 15px 10px;
                font-size: 20px;
                border-bottom: 2px solid #e74c3c;
                padding-bottom: 5px;
            }
            .food-card .description {
                color: #666;
                font-size: 14px;
                line-height: 1.4;
                margin: 10px 15px;
                font-style: italic;
            }
            .foods-list {
                padding: 0 15px 15px;
            }
            .foods-list h4 {
                color: #e74c3c;
                margin: 15px 0 10px 0;
                font-size: 16px;
            }
            .foods-list ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            .foods-list li {
                color: #666;
                padding: 8px 0;
                border-bottom: 1px solid #eee;
                font-size: 14px;
            }
            .foods-list li:last-child {
                border-bottom: none;
            }
            .foods-list li:before {
                content: "•";
                color: #e74c3c;
                font-weight: bold;
                margin-right: 8px;
            }
            .slider-container {
                position: relative;
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 0 20px;
            }
            .slider-button {
                background: #e74c3c;
                color: white;
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                font-size: 20px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background-color 0.3s;
                z-index: 2;
            }
            .slider-button:hover {
                background: #c0392b;
            }
            .slider-button:disabled {
                background: #ccc;
                cursor: not-allowed;
            }
            .foods-container {
                display: flex;
                gap: 20px;
                padding: 10px;
                overflow: hidden;
                scroll-behavior: smooth;
                -ms-overflow-style: none;
                scrollbar-width: none;
                width: 100%;
            }
            .foods-container::-webkit-scrollbar {
                display: none;
            }
        `;
        document.head.appendChild(style);

        // Slider işlevselliği
        const foodsContainer = document.querySelector('.foods-container');
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');
        
        if (foodsContainer && prevButton && nextButton) {
            let scrollAmount = 0;
            const cardWidth = foodsContainer.querySelector('.food-card').offsetWidth + 20; // 20 is the gap
            
            // Manuel slider kontrolleri
            prevButton.addEventListener('click', function() {
                scrollAmount -= cardWidth;
                if (scrollAmount < 0) scrollAmount = 0;
                foodsContainer.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });
            
            nextButton.addEventListener('click', function() {
                scrollAmount += cardWidth;
                const maxScroll = foodsContainer.scrollWidth - foodsContainer.clientWidth;
                if (scrollAmount > maxScroll) scrollAmount = maxScroll;
                foodsContainer.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });
            
            // Otomatik slider işlevselliği
            let autoScrollInterval;
let currentIndex = 0;

function startAutoScroll() {
    const foodsContainer = document.querySelector('.foods-container');
    const cards = document.querySelectorAll('.food-card');
    
    if (!cards.length) return;

    const cardWidth = cards[0].offsetWidth + 20; // kart genişliği + gap

    autoScrollInterval = setInterval(() => {
        currentIndex++;

        if (currentIndex >= cards.length) {
            currentIndex = 0; // en başa dön
        }

        const scrollPosition = currentIndex * cardWidth;

        foodsContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }, 5000); // her 5 saniyede bir kart kaydır
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

startAutoScroll();

            // Kullanıcı etkileşiminde otomatik kaydırmayı durdur
            foodsContainer.addEventListener('mouseenter', stopAutoScroll);
            prevButton.addEventListener('mouseenter', stopAutoScroll);
            nextButton.addEventListener('mouseenter', stopAutoScroll);
            
            // Kullanıcı etkileşimi bittiğinde otomatik kaydırmayı yeniden başlat
            foodsContainer.addEventListener('mouseleave', startAutoScroll);
            prevButton.addEventListener('mouseleave', startAutoScroll);
            nextButton.addEventListener('mouseleave', startAutoScroll);
            
            // Kart tıklama olayı
            const foodCards = document.querySelectorAll('.food-card');
            foodCards.forEach(card => {
                card.addEventListener('click', function() {
                    const city = this.getAttribute('data-city');
                    const fileName = city.toLowerCase()
                                         .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Türkçe karakter ayıklama
                                         .replace(/ı/g, 'i')
                                         .replace(/ğ/g, 'g')
                                         .replace(/ü/g, 'u')
                                         .replace(/ş/g, 's')
                                         .replace(/ö/g, 'o')
                                         .replace(/ç/g, 'c')
                                         .replace(/\s+/g, '-'); // boşlukları tire yap
                                         
                    const url = `${fileName}-yemek.html`;
                    window.location.href = url;
                });
            });
            
        }

    } catch (error) {
        console.error('Yemek kültürü sayfası yüklenirken hata oluştu:', error);
    }
});
