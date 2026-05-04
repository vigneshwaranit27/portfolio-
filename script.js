
// Custom Cursor
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
  cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
  cursorRing.style.transform = 'translate(-50%, -50%) scale(1.3)';
});

document.addEventListener('mouseup', () => {
  cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
});

// Hover effect on interactive elements
const interactiveEls = document.querySelectorAll('a, button, .project-card, .stat-card, .skill-group, .contact-card');
interactiveEls.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.background = 'var(--c1)';
    cursorRing.style.borderColor = 'rgba(255,107,107,0.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '12px';
    cursor.style.height = '12px';
    cursor.style.background = 'var(--c2)';
    cursorRing.style.borderColor = 'rgba(255,217,61,0.4)';
  });
});

// Scroll-triggered fade-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

const animateTargets = document.querySelectorAll(
  '.stat-card, .skill-group, .project-card, .contact-card'
);

animateTargets.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = `opacity 0.5s ${i * 0.08}s ease, transform 0.5s ${i * 0.08}s ease`;
  observer.observe(el);
});