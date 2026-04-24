/**
 * ════════════════════════════════════════════════════════════════
 * PORTFOLIO SITE - MAIN JAVASCRIPT
 * Design Studio Application Logic
 * 
 * WEB BEST PRACTICE: Modular code organization with clear sections
 * ════════════════════════════════════════════════════════════════
 */

/* ─────────────────────────────────────────────────────────────── 
   CAROUSEL MODULE
   WEB BEST PRACTICE: Self-contained carousel with touch support
   ───────────────────────────────────────────────────────────────  */

const carouselState = { 1: 0, 2: 0, 3: 0, 4: 0 };
const TOTAL_SLIDES = 4;

function goToSlide(carouselId, index) {
  // Loop index for seamless carousel
  if (index < 0) index = TOTAL_SLIDES - 1;
  if (index >= TOTAL_SLIDES) index = 0;
  
  carouselState[carouselId] = index;
  
  // Update slide position
  document.getElementById(`slides-${carouselId}`).style.transform = 
    `translateX(-${index * 100}%)`;
  
  // Update counter
  document.getElementById(`count-${carouselId}`).textContent = 
    `0${index + 1} / 0${TOTAL_SLIDES}`;
  
  // Update dots with accessibility
  document.querySelectorAll(`#dots-${carouselId} .carousel-dot`).forEach((dot, i) => {
    const isActive = i === index;
    dot.classList.toggle('active', isActive);
    dot.setAttribute('aria-selected', isActive);
  });
}

// Button navigation
document.querySelectorAll('.carousel-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = parseInt(btn.dataset.carousel);
    const direction = btn.classList.contains('carousel-btn--prev') ? -1 : 1;
    goToSlide(id, carouselState[id] + direction);
  });
});

// Dot navigation
document.querySelectorAll('.carousel-dot').forEach(dot => {
  dot.addEventListener('click', () => {
    goToSlide(parseInt(dot.dataset.carousel), parseInt(dot.dataset.index));
  });
});

// Touch swipe support
document.querySelectorAll('.carousel').forEach(carousel => {
  let startX = 0;
  
  carousel.addEventListener('touchstart', e => { 
    startX = e.touches[0].clientX; 
  }, { passive: true });
  
  carousel.addEventListener('touchend', e => {
    const delta = e.changedTouches[0].clientX - startX;
    if (Math.abs(delta) > 40) {
      const id = parseInt(carousel.id.split('-')[1]);
      goToSlide(id, carouselState[id] + (delta < 0 ? 1 : -1));
    }
  });
});

/* ─────────────────────────────────────────────────────────────── 
   NAVIGATION SCROLL HANDLER
   WEB BEST PRACTICE: Passive event listeners for better performance
   ───────────────────────────────────────────────────────────────  */

const nav = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ─────────────────────────────────────────────────────────────── 
   ACTIVE NAV LINK TRACKING
   WEB BEST PRACTICE: IntersectionObserver instead of scroll events
   ───────────────────────────────────────────────────────────────  */

const sections = document.querySelectorAll('[data-screen-label]');
const navLinks = document.querySelectorAll('.nav-link');

if ('IntersectionObserver' in window && sections.length > 0) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', 
            link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { threshold: 0.35 });
  
  sections.forEach(section => observer.observe(section));
}

/* ─────────────────────────────────────────────────────────────── 
   MOBILE MENU
   WEB BEST PRACTICE: Body scroll lock and ARIA attributes
   ───────────────────────────────────────────────────────────────  */

const burger = document.getElementById('burger');
const sideMenu = document.getElementById('side-menu');

burger.addEventListener('click', () => {
  const isOpen = !sideMenu.classList.contains('open');
  sideMenu.classList.toggle('open', isOpen);
  burger.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
  burger.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    burger.classList.remove('open');
    document.body.style.overflow = '';
    burger.setAttribute('aria-expanded', 'false');
  });
});

/* ─────────────────────────────────────────────────────────────── 
   SCROLL TO TOP BUTTON
   WEB BEST PRACTICE: Show/hide based on scroll depth
   ───────────────────────────────────────────────────────────────  */

const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  scrollTopBtn.hidden = window.scrollY <= 400;
}, { passive: true });

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ─────────────────────────────────────────────────────────────── 
   FORM HANDLING
   WEB BEST PRACTICE: Client-side validation with feedback
   ───────────────────────────────────────────────────────────────  */

const form = document.getElementById('subscribe-form');
const successMsg = document.getElementById('subscribe-success');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Show success state
    form.style.display = 'none';
    successMsg.style.display = 'block';
    successMsg.setAttribute('role', 'alert');
    
    // In production, send to server here
  });
}