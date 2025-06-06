document.addEventListener('DOMContentLoaded', function() {
    // Logo ve başlık tıklama olayı
    const navBrand = document.querySelector('.nav-brand');
    if (navBrand) {
        navBrand.style.cursor = 'pointer';
        navBrand.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    // Yemek kartlarına hover efekti
    const foodItems = document.querySelectorAll('.food-item');
    foodItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Sayfa yüklendiğinde animasyon
    const header = document.querySelector('.trabzon-header');
    const intro = document.querySelector('.trabzon-intro');
    const foods = document.querySelector('.trabzon-foods');

    if (header) header.style.opacity = '0';
    if (intro) intro.style.opacity = '0';
    if (foods) foods.style.opacity = '0';

    setTimeout(() => {
        if (header) {
            header.style.transition = 'opacity 1s ease';
            header.style.opacity = '1';
        }
    }, 100);

    setTimeout(() => {
        if (intro) {
            intro.style.transition = 'opacity 1s ease';
            intro.style.opacity = '1';
        }
    }, 300);

    setTimeout(() => {
        if (foods) {
            foods.style.transition = 'opacity 1s ease';
            foods.style.opacity = '1';
        }
    }, 500);
}); 