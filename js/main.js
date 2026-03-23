/* ==========================================
   Mobile Navigation Toggle
   ========================================== */
const burger = document.getElementById('nav-burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  burger.classList.toggle('is-open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', false);
  });
});

/* ==========================================
   Project Cards — Rendered from projects.json
   ========================================== */
async function loadProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  try {
    const res = await fetch('data/projects.json');
    if (!res.ok) throw new Error('Failed to load projects');
    const projects = await res.json();

    grid.innerHTML = projects.map((p, i) => `
      <article class="card reveal reveal-delay-${Math.min(i + 1, 3)}" aria-label="${escapeHtml(p.name)}">
        <h3 class="card__name">${escapeHtml(p.name)}</h3>
        <p class="card__desc">${escapeHtml(p.description)}</p>
        <div class="card__tags">
          ${p.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
        </div>
        <div class="card__links">
          ${p.codeUrl ? `<a class="card__link" href="${escapeHtml(p.codeUrl)}" target="_blank" rel="noopener noreferrer">View Code &rarr;</a>` : ''}
          ${p.demoUrl ? `<a class="card__link card__link--secondary" href="${escapeHtml(p.demoUrl)}" target="_blank" rel="noopener noreferrer">Live Demo</a>` : ''}
        </div>
      </article>
    `).join('');

    // Re-observe newly created cards for scroll reveal
    observeReveal();
  } catch (err) {
    grid.innerHTML = '<p style="color: var(--color-muted);">Could not load projects. Open via a local server or deploy to GitHub Pages.</p>';
    console.error(err);
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ==========================================
   Scroll Reveal — IntersectionObserver
   ========================================== */
function observeReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ==========================================
   Init
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
  observeReveal();
  loadProjects();
});
