const searchInput = document.querySelector('.search input');

if (searchInput) {
  searchInput.addEventListener('focus', function () {
    this.placeholder = '';
  });
  searchInput.addEventListener('blur', function () {
    this.placeholder = 'Ara';
  });
}

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
