const D = window.KKIT_DATA;
// Eigene Storage-Keys (kkit_*) — gleiche Origin wie das AI-Portfolio (kk_*), andere Defaults
let lang = localStorage.getItem('kkit_lang') || 'de';
let darkMode = localStorage.getItem('kkit_dark') === 'true'; // hell ist Standard
let colorTheme = localStorage.getItem('kkit_color') || 'default';

document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  render();
  initNav();
  initReveal();
});

function t(obj) { return typeof obj === 'object' && obj !== null ? (obj[lang] || obj.de || '') : obj; }

// ─── THEME ────────────────────────────────────────────────────────────
function applyTheme() {
  document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  document.documentElement.setAttribute('data-color-theme', colorTheme);
  localStorage.setItem('kkit_dark', darkMode);
  localStorage.setItem('kkit_color', colorTheme);
  const btn = document.getElementById('darkToggle');
  if (!btn) return;
  btn.setAttribute('aria-label', darkMode ? t(D.i18n.darkBtnLight) : t(D.i18n.darkBtnDark));
  btn.innerHTML = darkMode
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="13" height="13" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="13" height="13" aria-hidden="true" focusable="false"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
}

// ─── NAV ──────────────────────────────────────────────────────────────
function initNav() {
  const hamburger = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      hamburger.textContent = open ? '✕' : '☰';
      hamburger.setAttribute('aria-expanded', open);
    });
  }
  document.querySelectorAll('#navLinks a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      if (hamburger) { hamburger.textContent = '☰'; hamburger.setAttribute('aria-expanded', 'false'); }
    });
  });

  document.getElementById('darkToggle').addEventListener('click', () => {
    darkMode = !darkMode;
    applyTheme();
  });

  const colorBtn = document.getElementById('colorToggle');
  if (colorBtn) {
    colorBtn.addEventListener('click', () => {
      colorTheme = colorTheme === 'default' ? 'orange' : 'default';
      applyTheme();
    });
  }

  document.getElementById('langToggle').addEventListener('click', () => {
    lang = lang === 'de' ? 'en' : 'de';
    localStorage.setItem('kkit_lang', lang);
    document.documentElement.setAttribute('lang', lang);
    render();
  });
}

// ─── RENDER ───────────────────────────────────────────────────────────
function render() {
  document.getElementById('langToggle').textContent = lang === 'de' ? 'EN' : 'DE';

  // Nav
  document.getElementById('navProfile').textContent = t(D.i18n.navProfile);
  document.getElementById('navCareer').textContent = t(D.i18n.navCareer);
  document.getElementById('navSkills').textContent = t(D.i18n.navSkills);
  document.getElementById('navTools').textContent = t(D.i18n.navTools);
  document.getElementById('navContact').textContent = t(D.i18n.navContact);
  document.getElementById('availableText').textContent = t(D.hero.available);

  // Hero
  document.getElementById('heroRole').textContent = t(D.hero.role);
  document.getElementById('heroMeta').textContent = t(D.hero.meta);
  document.getElementById('heroCta1Label').textContent = t(D.hero.cta1);
  document.getElementById('heroCta2').textContent = t(D.hero.cta2);
  document.getElementById('downloadNote').textContent = t(D.i18n.downloadNote);

  // Profil
  document.getElementById('profileLabel').textContent = t(D.profile.label);
  document.getElementById('profileTitle').textContent = t(D.profile.title);
  document.getElementById('profileText').textContent = t(D.profile.text);
  document.getElementById('factChips').innerHTML =
    D.profile.facts.map(f => `<span>${t(f)}</span>`).join('');

  // Werdegang
  document.getElementById('careerLabel').textContent = t(D.career.label);
  document.getElementById('careerTitle').textContent = t(D.career.title);
  document.getElementById('careerContainer').innerHTML = D.career.items.map(item => `
    <div class="career-item reveal">
      <div class="career-head">
        <h3 class="career-role">${t(item.role)}</h3>
        <span class="career-company">${t(item.company)}</span>
        <span class="career-period${item.active ? ' active' : ''}">${t(item.period)}</span>
      </div>
      <p class="career-desc">${t(item.desc)}</p>
      <div class="career-tags">${item.tags.map(tag => `<span>${t(tag)}</span>`).join('')}</div>
    </div>
  `).join('');

  // Kompetenzen
  document.getElementById('skillsLabel').textContent = t(D.skills.label);
  document.getElementById('skillsTitle').textContent = t(D.skills.title);
  document.getElementById('skillsContainer').innerHTML = D.skills.groups.map(g => `
    <div class="skill-card reveal">
      <h3>${t(g.label)}</h3>
      <div class="skill-chips">${g.items.map(i => `<span>${t(i)}</span>`).join('')}</div>
    </div>
  `).join('');

  // Tools
  document.getElementById('toolsLabel').textContent = t(D.tools.label);
  document.getElementById('toolsTitle').textContent = t(D.tools.title);
  document.getElementById('toolsSub').textContent = t(D.tools.sub);
  document.getElementById('toolsContainer').innerHTML = D.tools.items.map(item => `
    <div class="tool-card reveal">
      <h3>${t(item.name)}</h3>
      <p class="tool-sub">${t(item.sub)}</p>
      <p class="tool-desc">${t(item.desc)}</p>
    </div>
  `).join('');

  // Nebenprojekte
  document.getElementById('sideLabel').textContent = t(D.side.label);
  document.getElementById('sideTitle').textContent = t(D.side.title);
  document.getElementById('sideText').textContent = t(D.side.text);
  document.getElementById('sideContainer').innerHTML = D.side.items.map(item => `
    <div class="side-card reveal">
      <h3>${item.name}</h3>
      <p>${t(item.desc)}</p>
    </div>
  `).join('');
  const more = document.getElementById('sideMore');
  more.href = D.side.moreLink;
  more.textContent = t(D.side.moreLabel);

  // Kontakt
  document.getElementById('contactLabel').textContent = t(D.contact.label);
  document.getElementById('contactTitle').textContent = t(D.contact.title);
  document.getElementById('contactDesc').textContent = t(D.contact.desc);
  document.getElementById('formName').placeholder = t(D.i18n.namePH);
  document.getElementById('formEmail').placeholder = t(D.i18n.emailPH);
  document.getElementById('formMsg').placeholder = t(D.i18n.msgPH);
  document.getElementById('formSubmit').textContent = t(D.i18n.submitLabel);
  document.getElementById('formSent').textContent = t(D.i18n.sentMsg);
  document.getElementById('footerCross').textContent = t(D.i18n.footerCross);

  // Dark-Toggle-Label folgt der Sprache
  const darkBtn = document.getElementById('darkToggle');
  if (darkBtn) darkBtn.setAttribute('aria-label', darkMode ? t(D.i18n.darkBtnLight) : t(D.i18n.darkBtnDark));

  initReveal();
}

// ─── REVEAL ───────────────────────────────────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

// ─── KONTAKTFORMULAR (Web3Forms) ─────────────────────────────────────
// Sendet echte E-Mails via Web3Forms → kuck_kevin@icloud.com
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('formSubmit');
    btn.textContent = t(D.i18n.sendingLabel);
    btn.disabled = true;
    try {
      const data = new FormData(form);
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const json = await res.json();
      if (json.success) {
        document.getElementById('formSent').style.display = 'block';
        form.reset();
        btn.textContent = t(D.i18n.submitLabel);
      } else {
        btn.textContent = t(D.i18n.sendErr);
      }
    } catch (err) {
      btn.textContent = t(D.i18n.sendErr);
    }
    btn.disabled = false;
  });
}
