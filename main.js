// Nav scroll effect
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});
nav.classList.toggle('scrolled', window.scrollY > 40);

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Contact form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', () => {
    const success = document.getElementById('formSuccess');
    success.style.display = 'block';
    setTimeout(() => success.style.display = 'none', 5000);
  });
}
// Slideshow
document.querySelectorAll('.slideshow').forEach(slideshow => {
  const slides = slideshow.querySelectorAll('.slide');
  const dots = slideshow.querySelectorAll('.dot');
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }, 3000);
});