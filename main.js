// ============================================
// RAVE.EXE — Landing Page JS
// ============================================

// Custom cursor
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursor-trail');
let mx = 0, my = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
  setTimeout(() => {
    trail.style.left = mx + 'px';
    trail.style.top = my + 'px';
  }, 80);
});

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%,-50%) scale(2.5)');
  el.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%,-50%) scale(1)');
});

// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Hero canvas — ambient plasma
const hc = document.getElementById('hero-canvas');
if (hc) {
  const hctx = hc.getContext('2d');
  let hw, hh, ht = 0;
  function resizeHero() {
    hw = hc.width = hc.offsetWidth;
    hh = hc.height = hc.offsetHeight;
  }
  resizeHero();
  window.addEventListener('resize', resizeHero);

  const COLS = ['#ff006e','#8338ec','#00f5d4','#ffbe0b','#fb5607'];

  function drawHero() {
    requestAnimationFrame(drawHero);
    ht += 0.008;
    hctx.fillStyle = 'rgba(6,6,10,0.15)';
    hctx.fillRect(0, 0, hw, hh);

    for (let y = 0; y < hh; y += 6) {
      for (let x = 0; x < hw; x += 6) {
        const nx = x / hw, ny = y / hh;
        const v = Math.sin(nx * 8 + ht) +
                  Math.sin(ny * 6 + ht * 0.8) +
                  Math.sin((nx + ny) * 5 + ht * 0.6) +
                  Math.sin(Math.sqrt((nx-0.5)**2 + (ny-0.5)**2) * 10 + ht);
        const norm = (v + 4) / 8;
        const ci = Math.floor(norm * COLS.length) % COLS.length;
        hctx.fillStyle = COLS[Math.abs(ci)];
        hctx.globalAlpha = norm * 0.25;
        hctx.fillRect(x, y, 6, 6);
      }
    }
    hctx.globalAlpha = 1;
  }
  drawHero();
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('revealed');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.scene-card, .feature-item, .about-left, .about-right').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

document.addEventListener('scroll-reveal', () => {});

// Patch IntersectionObserver to apply styles
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }, i * 80);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.scene-card, .feature-item, .about-left, .about-right').forEach(el => {
  revealObs.observe(el);
});

// Scene cards stagger
document.querySelectorAll('.scene-card').forEach((card, i) => {
  card.style.transitionDelay = (i * 60) + 'ms';
});
