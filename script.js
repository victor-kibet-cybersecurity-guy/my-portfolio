// script.js
// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // animate hamburger (optional)
    hamburger.classList.toggle('active');
  });

  // close menu when a nav link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === "#" || href === "") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// WhatsApp and call buttons are already handled by href,
// but we can log for demo.
document.getElementById('whatsappBtn')?.addEventListener('click', (e) => {
  // the href already does wa.me, but we keep default
  console.log('Opening WhatsApp chat');
});

document.getElementById('callBtn')?.addEventListener('click', (e) => {
  console.log('Opening phone dialer');
});

// optional: close mobile menu on resize (if open and screen becomes large)
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navMenu?.classList.contains('active')) {
    navMenu.classList.remove('active');
    hamburger?.classList.remove('active');
  }
});