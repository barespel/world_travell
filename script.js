const searchInput = document.querySelector('.search input');
const searchResults = document.getElementById('searchResults');
const searchContainer = document.querySelector('.search');

if (searchInput) {
  searchInput.addEventListener('focus', function () {
    this.placeholder = '';
    // Her tıklamada sonuçları göster, içerik ne olursa olsun
    searchResults.style.display = 'block';
    // Eğer input boşsa popüler şehirleri göster
    if (!this.value.trim()) {
      showPopularCities();
    }
  });
  searchInput.addEventListener('blur', function () {
    this.placeholder = 'Ara';
  });
}

// Input değiştiğinde sonuçları göster
searchInput.addEventListener('input', function() {
  searchResults.style.display = 'block';
  if (!this.value.trim()) {
    showPopularCities();
  } else {
    searchCities(this.value);
  }
});

// Arama sonuçları kutusunun mouseleave durumu
searchResults.addEventListener('mouseleave', () => {
  // Mouse ayrıldığında her durumda kapat
  searchResults.style.display = 'none';
});

// Scroll ile featured-section ve scroll-dot güncelleme
const scrollDot = document.querySelector('.scroll-dot-top span');
const featuredSection = document.querySelector('.featured-section');

function handleScroll() {
  if (!featuredSection || !scrollDot) return;
  const sectionTop = featuredSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight * 0.5) {
    scrollDot.textContent = '2';
    featuredSection.classList.add('visible');
  } else {
    scrollDot.textContent = '1';
    featuredSection.classList.remove('visible');
  }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('DOMContentLoaded', handleScroll);

// Türkiye'deki şehirler listesi
const cities = [
    "adana", "adıyaman", "afyonkarahisar", "ağrı", "amasya", "ankara", "antalya", "artvin", "aydın", "balıkesir",
    "bilecik", "bingöl", "bitlis", "bolu", "burdur", "bursa", "çanakkale", "çankırı", "çorum", "denizli",
    "diyarbakır", "edirne", "elazığ", "erzincan", "erzurum", "eskisehir", "gaziantep", "giresun", "gümüşhane", "hakkari",
    "hatay", "ısparta", "mersin", "istanbul", "izmir", "kars", "kastamonu", "kayseri", "kırklareli", "kırşehir",
    "kocaeli", "konya", "kütahya", "malatya", "manisa", "kahramanmaras", "mardin", "muğla", "muş", "nevşehir",
    "niğde", "ordu", "rize", "sakarya", "samsun", "siirt", "sinop", "sivas", "tekirdağ", "tokat",
    "trabzon", "tunceli", "şanlıurfa","urfa", "uşak", "van", "yozgat", "zonguldak", "aksaray", "bayburt", "karaman",
    "kırıkkale", "batman", "şırnak", "bartın", "ardahan", "ığdır", "yalova", "karabük", "kilis", "osmaniye", "düzce"
];

// Popüler şehirler listesi
const popularCities = [
    "İstanbul", "Ankara", "İzmir", "Antalya", "Bursa", 
    "Adana", "Gaziantep", "Konya", "Mersin", "Diyarbakır"
];

// DOM elementlerini seçme
const searchInputCity = document.getElementById('citySearch');
const searchResultsCity = document.getElementById('searchResults');

// Arama kutusuna tıklandığında popüler şehirleri göster
searchInputCity.addEventListener('focus', () => {
    if (!searchInputCity.value) {
        showPopularCities();
    }
});

// Popüler şehirleri göster
function showPopularCities() {
    searchResultsCity.innerHTML = '';
    searchResultsCity.style.display = 'block';
    
    const ul = document.createElement('ul');
    ul.className = 'popular-cities';
    
    popularCities.forEach(city => {
        const li = document.createElement('li');
        li.textContent = city;
        li.addEventListener('click', () => {
            searchInputCity.value = city;
            searchResultsCity.style.display = 'none';
        });
        ul.appendChild(li);
    });
    
    searchResultsCity.appendChild(ul);
}

// Arama fonksiyonu
function searchCities(query) {
    // Arama sonuçlarını temizle
    searchResultsCity.innerHTML = '';
    
    // Boş sorgu kontrolü
    if (!query.trim()) {
        showPopularCities();
        return;
    }

    // Şehirleri filtrele
    const filteredCities = cities.filter(city => 
        city.toLowerCase().startsWith(query.toLowerCase())
    );

    // Sonuçları göster
    if (filteredCities.length > 0) {
        searchResultsCity.style.display = 'block';
        const ul = document.createElement('ul');
        ul.className = 'search-results-list';
        
        filteredCities.forEach(city => {
            const li = document.createElement('li');
            li.textContent = city;
            li.addEventListener('click', () => {
                searchInputCity.value = city;
                searchResultsCity.style.display = 'none';
            });
            ul.appendChild(li);
        });
        
        searchResultsCity.appendChild(ul);
    } else {
        searchResultsCity.style.display = 'none';
    }
}

// Input event listener
searchInputCity.addEventListener('input', (e) => {
    searchCities(e.target.value);
});

// Sayfa dışına tıklandığında sonuçları gizle
document.addEventListener('click', (e) => {
    if (!searchInputCity.contains(e.target) && !searchResultsCity.contains(e.target)) {
        searchResultsCity.style.display = 'none';
    }
});

// Harita etkileşimleri
document.addEventListener('DOMContentLoaded', function() {
  const cityList = document.querySelectorAll('.city-list .city');
  const mapPaths = document.querySelectorAll('#turkiye-haritasi path');

  // Şehir listesinden seçim
  cityList.forEach(city => {
    city.addEventListener('click', function() {
      const cityId = this.getAttribute('data-city');
      
      // Aktif sınıfını kaldır
      cityList.forEach(c => c.classList.remove('active'));
      mapPaths.forEach(p => p.classList.remove('active'));
      
      // Seçilen şehri aktif yap
      this.classList.add('active');
      const selectedPath = document.querySelector(`#turkiye-haritasi path[data-city="${cityId}"]`);
      if (selectedPath) {
        selectedPath.classList.add('active');
      }
    });
  });

  // Haritadan seçim
  mapPaths.forEach(path => {
    path.addEventListener('click', function() {
      const cityId = this.getAttribute('data-city');
      
      // Aktif sınıfını kaldır
      cityList.forEach(c => c.classList.remove('active'));
      mapPaths.forEach(p => p.classList.remove('active'));
      
      // Seçilen şehri aktif yap
      this.classList.add('active');
      const selectedCity = document.querySelector(`.city-list .city[data-city="${cityId}"]`);
      if (selectedCity) {
        selectedCity.classList.add('active');
      }
    });
  });
  function svgturkiyeharitasi() {
    const element = document.querySelector('#svg-turkiye-haritasi');
    const info = document.querySelector('.il-isimleri');
  
    element.addEventListener(
      'mouseover',
      function (event) {
        if (event.target.tagName === 'path') {
          const cityName = event.target.parentNode.getAttribute('data-iladi');
          event.target.setAttribute('title', cityName);
          
          // Tooltip pozisyonunu ayarla
          const tooltip = document.createElement('div');
          tooltip.className = 'city-tooltip';
          tooltip.textContent = cityName;
          document.body.appendChild(tooltip);
          
          const rect = event.target.getBoundingClientRect();
          tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
          tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
          tooltip.style.opacity = '1';
        }
      }
    );
  
    element.addEventListener(
      'mousemove',
      function (event) {
        if (event.target.tagName === 'path') {
          const tooltip = document.querySelector('.city-tooltip');
          if (tooltip) {
            const rect = event.target.getBoundingClientRect();
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
          }
        }
      }
    );
  
    element.addEventListener(
      'mouseout',
      function (event) {
        if (event.target.tagName === 'path') {
          const tooltip = document.querySelector('.city-tooltip');
          if (tooltip) {
            tooltip.remove();
          }
        }
      }
    );
  
    element.addEventListener(
      'click',
      function (event) {
        if (event.target.tagName === 'path') {
          const parent = event.target.parentNode;
          const id = parent.getAttribute('id');
  
          window.location.href = (
            '#'
            + id
            + '-'
            + parent.getAttribute('data-plakakodu')
          );
        }
      }
    );
  }
  
  svgturkiyeharitasi();
});
