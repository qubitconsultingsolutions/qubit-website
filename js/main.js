// ===== Header scroll effect =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== Mobile Nav =====
const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
const navOverlay = document.getElementById('navOverlay');

menuOpen.addEventListener('click', () => {
  navOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});

function closeNav() {
  navOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

menuClose.addEventListener('click', closeNav);

navOverlay.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeNav);
});

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Intersection Observer for fade-in animations =====
const observerOptions = {
  threshold: 0.08,
  rootMargin: '0px 0px -30px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in--visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('section:not(.hero)').forEach(section => {
  section.classList.add('fade-in');
  observer.observe(section);
});
