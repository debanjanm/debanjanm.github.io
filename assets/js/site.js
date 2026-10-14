// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0, rootMargin: '0px 0px -10% 0px' });
reveals.forEach(r => observer.observe(r));

// Active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 140) current = s.id; });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
});

// Theme toggle — icon swap is CSS-driven off the data-theme attribute
document.getElementById('theme-toggle').addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (isLight) document.documentElement.removeAttribute('data-theme');
  else document.documentElement.setAttribute('data-theme', 'light');
  try { localStorage.setItem('theme', isLight ? 'dark' : 'light'); } catch (e) {}
});
