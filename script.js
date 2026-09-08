// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Navbar shrink on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').style.padding =
    window.scrollY > 60 ? '12px 6%' : '18px 6%';
});
