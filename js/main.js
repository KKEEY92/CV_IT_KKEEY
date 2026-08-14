/**
 * KKEEY IT-Profil — Interactive Engine
 * Handles Theme Switching (Light/Dark & Color Variations),
 * i18n Localization (DE/EN), Mobile Navigation, Smooth Reveal Animations,
 * and Secure Asynchronous Contact Form Processing.
 */

const D = window.KKIT_DATA || {};

// Persistent Client Storage Keys
let lang = localStorage.getItem('kkit_lang') || 'de';
let darkMode = localStorage.getItem('kkit_dark') === 'true'; // Light mode is default
let colorTheme = localStorage.getItem('kkit_color') || 'default';

let revealObserver = null;

document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  render();
  initNav();
  initContactForm();
});

/**
 * i18n Translation Resolver
 */
function t(obj) {
  if (typeof obj === 'object' && obj !== null) {
    return obj[lang] || obj.de || '';
  }
  return obj || '';
}

// ─── THEME ENGINE ────────────────────────────────────────────────────────────
function applyTheme() {
  document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  document.documentElement.setAttribute('data-color-theme', colorTheme);
  localStorage.setItem('kkit_dark', String(darkMode));
  localStorage.setItem('kkit_color', colorTheme);

  const btn = document.getElementById('darkToggle');
  if (!btn || !D.i18n) return;

  btn.setAttribute('aria-label', darkMode ? t(D.i18n.darkBtnLight) : t(D.i18n.darkBtnDark));
  btn.innerHTML = darkMode
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="13" height="13" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="13" height="13" aria-hidden="true" focusable="false"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
}

// ─── NAVIGATION & CONTROLS ───────────────────────────────────────────────────
function initNav() {
  const hamburger = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  const nav = document.querySelector('.nav');

  if (hamburger && links) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = links.classList.toggle('open');
      hamburger.textContent = open ? '✕' : '☰';
      hamburger.setAttribute('aria-expanded', String(open));
    });

    // Close mobile nav when clicking a nav link
    document.querySelectorAll('#navLinks a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        hamburger.textContent = '☰';
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Backdrop Click: Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
      if (links.classList.contains('open') && nav && !nav.contains(e.target)) {
        links.classList.remove('open');
        hamburger.textContent = '☰';
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });

    // Keyboard navigation: Escape key closes menu & refocuses hamburger
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        links.classList.remove('open');
        hamburger.textContent = '☰';
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.focus();
      }
    });

    // Close mobile menu on desktop resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && links.classList.contains('open')) {
        links.classList.remove('open');
        hamburger.textContent = '☰';
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const darkBtn = document.getElementById('darkToggle');
  if (darkBtn) {
    darkBtn.addEventListener('click', () => {
      darkMode = !darkMode;
      applyTheme();
    });
  }

  const colorBtn = document.getElementById('colorToggle');
  if (colorBtn) {
    colorBtn.addEventListener('click', () => {
      colorTheme = colorTheme === 'default' ? 'orange' : 'default';
      applyTheme();
    });
  }

  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      lang = lang === 'de' ? 'en' : 'de';
      localStorage.setItem('kkit_lang', lang);
      document.documentElement.setAttribute('lang', lang);
      render();
    });
  }
}

// ─── RENDER ENGINE ───────────────────────────────────────────────────────────
function render() {
  if (!D || !D.i18n) return;

  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.textContent = lang === 'de' ? 'EN' : 'DE';

  // Navigation Labels
  safeSetText('navProfile', t(D.i18n.navProfile));
  safeSetText('navCareer', t(D.i18n.navCareer));
  safeSetText('navSkills', t(D.i18n.navSkills));
  safeSetText('navCerts', t(D.i18n.navCerts));
  safeSetText('navTools', t(D.i18n.navTools));
  safeSetText('navContact', t(D.i18n.navContact));
  safeSetText('availableText', t(D.hero.available));

  // Hero Section
  safeSetText('heroRole', t(D.hero.role));
  safeSetText('heroMeta', t(D.hero.meta));
  safeSetText('heroCta1Label', t(D.hero.cta1));
  safeSetText('heroCta2', t(D.hero.cta2));
  safeSetText('downloadNote', t(D.i18n.downloadNote));

  // Profile Section
  safeSetText('profileLabel', t(D.profile.label));
  safeSetText('profileTitle', t(D.profile.title));
  safeSetText('profileText', t(D.profile.text));
  const factChips = document.getElementById('factChips');
  if (factChips && D.profile.facts) {
    factChips.innerHTML = D.profile.facts.map(f => `<span>${t(f)}</span>`).join('');
  }

  // Career Section
  safeSetText('careerLabel', t(D.career.label));
  safeSetText('careerTitle', t(D.career.title));
  const careerContainer = document.getElementById('careerContainer');
  if (careerContainer && D.career.items) {
    careerContainer.innerHTML = D.career.items.map(item => `
      <article class="career-item reveal">
        <div class="career-head">
          <h3 class="career-role">${t(item.role)}</h3>
          <span class="career-company">${t(item.company)}</span>
          <span class="career-period${item.active ? ' active' : ''}">${t(item.period)}</span>
        </div>
        <p class="career-desc">${t(item.desc)}</p>
        <div class="career-tags">${item.tags.map(tag => `<span>${t(tag)}</span>`).join('')}</div>
      </article>
    `).join('');
  }

  // Skills Section
  safeSetText('skillsLabel', t(D.skills.label));
  safeSetText('skillsTitle', t(D.skills.title));
  const skillsContainer = document.getElementById('skillsContainer');
  if (skillsContainer && D.skills.groups) {
    skillsContainer.innerHTML = D.skills.groups.map(g => `
      <div class="skill-card reveal">
        <h3>${t(g.label)}</h3>
        <div class="skill-chips">${g.items.map(i => `<span>${t(i)}</span>`).join('')}</div>
      </div>
    `).join('');
  }

  // Certifications Section
  safeSetText('certsLabel', t(D.certifications.label));
  safeSetText('certsTitle', t(D.certifications.title));
  const certsContainer = document.getElementById('certsContainer');
  if (certsContainer) {
    certsContainer.innerHTML = D.certifications.items.length === 0
      ? `<p class="certs-empty reveal">${t(D.certifications.empty)}</p>`
      : D.certifications.items.map(cert => `
        <a href="${cert.verifyUrl}" target="_blank" rel="noopener" class="cert-card reveal" style="border-top-color:${cert.accentColor}">
          <h3>${cert.name}</h3>
          <p class="cert-issuer">${cert.issuer} · ${t(cert.date)}</p>
          <span class="cert-status">${t(cert.status)}</span>
        </a>
      `).join('');
  }

  // Education Block
  safeSetText('eduLabel', t(D.education.label));
  const eduList = document.getElementById('eduList');
  if (eduList && D.education.items) {
    eduList.innerHTML = D.education.items.map(item => `<li class="reveal">${t(item)}</li>`).join('');
  }
  const eduLink = document.getElementById('eduLink');
  if (eduLink) {
    eduLink.href = D.education.linkedinLink;
    eduLink.textContent = t(D.education.linkedinLabel);
  }

  // Tools & Proof of Work
  safeSetText('toolsLabel', t(D.tools.label));
  safeSetText('toolsTitle', t(D.tools.title));
  safeSetText('toolsSub', t(D.tools.sub));
  const toolsContainer = document.getElementById('toolsContainer');
  if (toolsContainer && D.tools.items) {
    toolsContainer.innerHTML = D.tools.items.map(item => `
      <div class="tool-card reveal">
        <h3>${t(item.name)}</h3>
        <p class="tool-sub">${t(item.sub)}</p>
        <p class="tool-desc">${t(item.desc)}</p>
      </div>
    `).join('');
  }

  // Side Projects (AI Engineering)
  safeSetText('sideLabel', t(D.side.label));
  safeSetText('sideTitle', t(D.side.title));
  safeSetText('sideText', t(D.side.text));
  const sideContainer = document.getElementById('sideContainer');
  if (sideContainer && D.side.items) {
    sideContainer.innerHTML = D.side.items.map(item => `
      <div class="side-card reveal">
        <h3>${item.name}</h3>
        <p>${t(item.desc)}</p>
      </div>
    `).join('');
  }
  const sideMore = document.getElementById('sideMore');
  if (sideMore) {
    sideMore.href = D.side.moreLink;
    sideMore.textContent = t(D.side.moreLabel);
  }

  // Contact Section
  safeSetText('contactLabel', t(D.contact.label));
  safeSetText('contactTitle', t(D.contact.title));
  safeSetText('contactDesc', t(D.contact.desc));
  safeSetPlaceholder('formName', t(D.i18n.namePH));
  safeSetPlaceholder('formEmail', t(D.i18n.emailPH));
  safeSetPlaceholder('formMsg', t(D.i18n.msgPH));
  safeSetText('formSubmit', t(D.i18n.submitLabel));
  safeSetText('formSent', t(D.i18n.sentMsg));
  safeSetText('footerCross', t(D.i18n.footerCross));

  // Sync Dark Toggle ARIA label
  const darkBtn = document.getElementById('darkToggle');
  if (darkBtn) {
    darkBtn.setAttribute('aria-label', darkMode ? t(D.i18n.darkBtnLight) : t(D.i18n.darkBtnDark));
  }

  // Re-initialize intersection observers without leaks
  initReveal();
}

function safeSetText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function safeSetPlaceholder(id, ph) {
  const el = document.getElementById(id);
  if (el) el.placeholder = ph;
}

// ─── REVEAL ANIMATION (SINGLETON OBSERVER) ───────────────────────────────────
function initReveal() {
  if (revealObserver) {
    revealObserver.disconnect();
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    revealObserver.observe(el);
  });
}

// ─── SECURE CONTACT FORM (Web3Forms API) ─────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contactForm');
  const formSent = document.getElementById('formSent');
  const formSubmit = document.getElementById('formSubmit');

  if (!form || !formSubmit || !formSent) return;

  // Reset feedback state on input
  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', () => {
      if (formSent.style.display === 'block') {
        formSent.style.display = 'none';
      }
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    formSent.style.display = 'none';
    formSubmit.textContent = t(D.i18n.sendingLabel);
    formSubmit.disabled = true;

    try {
      const data = new FormData(form);
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        formSent.style.display = 'block';
        form.reset();
        formSubmit.textContent = t(D.i18n.submitLabel);
      } else {
        formSubmit.textContent = t(D.i18n.sendErr);
      }
    } catch (err) {
      formSubmit.textContent = t(D.i18n.sendErr);
    } finally {
      formSubmit.disabled = false;
    }
  });
}
