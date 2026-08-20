/**
 * KKEEY Future Orchestrator Interface — main.js v3.2
 * CV_IT_KKEEY · Exact Master Fluid Wave Engine
 */

const D = window.KKIT_DATA;
const LANGUAGES = ['de', 'en', 'fr', 'uk'];
let lang = localStorage.getItem('kkit_lang') || 'de';
if (!LANGUAGES.includes(lang)) lang = 'de';

let darkMode = localStorage.getItem('kkit_dark') !== 'false';
let colorTheme = localStorage.getItem('kkit_color') || 'purple';

document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  render();
  initNav();
  initTyped();
  initReveal();
  initBg();
  initContactForm();
});

function t(obj) {
  if (typeof obj !== 'object' || obj === null) return String(obj ?? '');
  return obj[lang] || obj.de || obj.en || '';
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  document.documentElement.setAttribute('data-color-theme', colorTheme === 'orange' ? 'orange' : '');
  document.documentElement.setAttribute('lang', lang);

  localStorage.setItem('kkit_dark', String(darkMode));
  localStorage.setItem('kkit_color', colorTheme);
  localStorage.setItem('kkit_lang', lang);

  const darkBtn = document.getElementById('darkToggle');
  if (darkBtn) {
    darkBtn.setAttribute('aria-label', darkMode ? t(D.i18n.darkBtnLight) : t(D.i18n.darkBtnDark));
    darkBtn.innerHTML = darkMode
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }

  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.textContent = lang.toUpperCase();

  const colorDot = document.getElementById('colorDot');
  if (colorDot) {
    colorDot.style.background = colorTheme === 'orange' ? '#FF7A00' : '#7C6AF7';
    colorDot.style.boxShadow = colorTheme === 'orange' ? '0 0 8px #FF7A00' : '0 0 8px #7C6AF7';
  }

  updateBgLight();
}

function initNav() {
  const nav = document.querySelector('.nav');
  const hamburger = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      hamburger.textContent = open ? '✕' : '☰';
      hamburger.setAttribute('aria-expanded', String(open));
    });
  }
  document.querySelectorAll('#navLinks a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      if (hamburger) { hamburger.textContent = '☰'; hamburger.setAttribute('aria-expanded', 'false'); }
    });
  });

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
      colorTheme = colorTheme === 'purple' ? 'orange' : 'purple';
      applyTheme();
    });
  }

  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const idx = LANGUAGES.indexOf(lang);
      lang = LANGUAGES[(idx + 1) % LANGUAGES.length];
      applyTheme();
      render();
      restartTyped();
    });
  }

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#navLinks a[href^="#"]');

  const sectionObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

  sections.forEach(s => sectionObs.observe(s));
}

let typedTimer, typedIdx = 0, typedDeleting = false, typedText = '';

function initTyped() {
  typedTimer = setTimeout(nextChar, 800);
}

function restartTyped() {
  clearTimeout(typedTimer);
  typedIdx = 0; typedDeleting = false; typedText = '';
  const el = document.getElementById('typedOutput');
  if (el) el.textContent = '';
  typedTimer = setTimeout(nextChar, 350);
}

function nextChar() {
  const roles = D.hero.roles[lang] || D.hero.roles.de;
  const target = roles[typedIdx % roles.length];
  const el = document.getElementById('typedOutput');
  if (!el) return;

  if (!typedDeleting) {
    if (typedText.length < target.length) {
      typedText = target.slice(0, typedText.length + 1);
      el.textContent = typedText;
      typedTimer = setTimeout(nextChar, 55);
    } else {
      typedTimer = setTimeout(() => { typedDeleting = true; nextChar(); }, 2800);
    }
  } else {
    if (typedText.length > 0) {
      typedText = typedText.slice(0, -1);
      el.textContent = typedText;
      typedTimer = setTimeout(nextChar, 24);
    } else {
      typedDeleting = false;
      typedIdx++;
      el.classList.add('glitch');
      typedTimer = setTimeout(() => { el.classList.remove('glitch'); nextChar(); }, 350);
    }
  }
}

function render() {
  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.textContent = lang.toUpperCase();

  setEl('navOverview',   t(D.i18n.navOverview));
  setEl('navSystems',    t(D.i18n.navSystems));
  setEl('navAutomation', t(D.i18n.navAutomation));
  setEl('navCareer',     t(D.i18n.navCareer));
  setEl('navSkills',     t(D.i18n.navSkills));
  setEl('navContact',    t(D.i18n.navContact));
  setEl('availableText', t(D.hero.available));
  setEl('availableText2', t(D.hero.available));

  setEl('heroGreeting', t(D.hero.greeting));
  setEl('heroMeta', t(D.hero.meta));
  setEl('heroCta1Label', t(D.hero.cta1));
  setEl('heroCta2Label', t(D.hero.cta2));
  setEl('heroCta3Label', t(D.hero.cta3));
  setEl('downloadNote',  t(D.i18n.downloadNote));
  setEl('systemBadgeLabel', t(D.i18n.systemBadge));

  const caps = D.hero.caps[lang] || D.hero.caps.de;
  setHTML('heroCaps', caps.map(c => `
    <span class="cap-pill">
      <span class="cap-pill-dot" aria-hidden="true"></span>
      ${c}
    </span>
  `).join(''));

  renderOverview();
  renderSystems();
  renderAutomation();
  renderCompliance();
  renderImpact();
  renderCareer();
  renderSkills();
  renderTools();
  renderSide();
  renderContact();

  setEl('footerCross', t(D.i18n.footerCross));

  initReveal();
}

function setEl(id, txt) {
  const el = document.getElementById(id);
  if (el) el.textContent = txt;
}
function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

const ICONS = {
  cloud:    `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
  server:   `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
  zap:      `<svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  shield:   `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  activity: `<svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  layout:   `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
};

function renderOverview() {
  setEl('overviewLabel', t(D.overview.label));
  setEl('overviewTitle', t(D.overview.title));
  setEl('overviewSub',   t(D.overview.sub));

  setHTML('overviewGrid', D.overview.domains.map(d => `
    <div class="glass-card domain-card reveal">
      <div class="card-accent-top" aria-hidden="true"></div>
      <div class="domain-icon" aria-hidden="true">${ICONS[d.icon] || ''}</div>
      <h3 class="domain-title">${t(d.title)}</h3>
      <p class="domain-sub">${t(d.sub)}</p>
      <p class="domain-desc">${t(d.desc)}</p>
    </div>
  `).join(''));
}

function renderSystems() {
  setEl('systemsLabel', t(D.systems.label));
  setEl('systemsTitle', t(D.systems.title));
  setEl('systemsSub',   t(D.systems.sub));

  setHTML('tierStack', D.systems.tiers.map(tier => `
    <div class="tier-item">
      <span class="tier-label">${t(tier.label)}</span>
      <span class="tier-tech">${tier.tech}</span>
      <span class="tier-detail">${t(tier.detail)}</span>
    </div>
  `).join(''));

  setHTML('systemsCards', D.systems.cards.map(c => `
    <div class="glass-card sys-card reveal">
      <div class="card-accent-top" aria-hidden="true"></div>
      <h3 class="sys-card-title">${t(c.title)}</h3>
      <p class="sys-card-desc">${t(c.desc)}</p>
      <div class="sys-tags">
        ${c.tags.map(tag => `<span class="sys-tag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join(''));
}

function renderAutomation() {
  setEl('automationLabel', t(D.automation.label));
  setEl('automationTitle', t(D.automation.title));
  setEl('automationSub',   t(D.automation.sub));

  setHTML('pipelineContainer', D.automation.pipeline.map(stage => {
    const statusMap = {
      running: { label: { de: 'AKTIV', en: 'RUNNING', fr: 'ACTIF', uk: 'АКТИВНО' }, cls: 'status--running' },
      done:    { label: { de: 'FERTIG', en: 'DONE', fr: 'TERMINÉ', uk: 'ГОТОВО' }, cls: 'status--done' },
      queued:  { label: { de: 'WARTEND', en: 'QUEUED', fr: 'EN ATTENTE', uk: 'В ОЧІКУВАННІ' }, cls: 'status--queued' },
    };
    const s = statusMap[stage.status] || statusMap.queued;
    return `
      <div class="pipeline-stage${stage.active ? ' stage--active' : ''}">
        <span class="stage-num" aria-hidden="true">${stage.num}</span>
        <div class="stage-content">
          <p class="stage-title">${t(stage.title)}</p>
          <p class="stage-desc">${t(stage.desc)}</p>
        </div>
        <span class="stage-status ${s.cls}">${t(s.label)}</span>
      </div>
    `;
  }).join(''));

  setHTML('agentGrid', D.automation.agents.map(a => `
    <div class="glass-card agent-card reveal">
      <div class="card-accent-top" aria-hidden="true"></div>
      <div class="agent-icon" aria-hidden="true">${a.icon}</div>
      <h3 class="agent-name">${t(a.name)}</h3>
      <p class="agent-desc">${t(a.desc)}</p>
    </div>
  `).join(''));
}

function renderCompliance() {
  setEl('complianceLabel', t(D.compliance.label));
  setEl('complianceTitle', t(D.compliance.title));
  setEl('complianceSub',   t(D.compliance.sub));

  setHTML('complianceGrid', D.compliance.cards.map(c => `
    <div class="glass-card compliance-card reveal">
      <div class="card-accent-top" aria-hidden="true"></div>
      <div class="comp-header">
        <h3 class="comp-title">${t(c.title)}</h3>
        <span class="comp-status comp-status--${c.status}">${t(c.statusLabel)}</span>
      </div>
      <ul class="comp-list">
        ${c.items.map(item => `<li>${t(item)}</li>`).join('')}
      </ul>
    </div>
  `).join(''));
}

function renderImpact() {
  setEl('impactLabel', t(D.impact.label));
  setEl('impactTitle', t(D.impact.title));
  setEl('impactSub',   t(D.impact.sub));

  setHTML('impactGrid', D.impact.cases.map(c => `
    <div class="glass-card impact-card reveal">
      <div class="card-accent-top" aria-hidden="true"></div>
      <div class="impact-metric">
        <span class="metric-value">${c.metric}</span>
        <span class="metric-unit">${t(c.unit)}</span>
      </div>
      <h3 class="impact-title">${t(c.title)}</h3>
      <p class="impact-desc">${t(c.desc)}</p>
      <p class="impact-tag">${t(c.tag)}</p>
    </div>
  `).join(''));
}

function renderCareer() {
  setEl('careerLabel', t(D.career.label));
  setEl('careerTitle', t(D.career.title));

  setHTML('careerContainer', D.career.items.map(item => `
    <div class="glass-card career-item reveal${item.active ? ' is-active' : ''}">
      <div class="card-accent-top" aria-hidden="true"></div>
      <div class="career-head">
        <h3 class="career-role">${t(item.role)}</h3>
        <span class="career-company">${t(item.company)}</span>
        <span class="career-period${item.active ? ' is-active' : ''}">${t(item.period)}</span>
      </div>
      <p class="career-desc">${t(item.desc)}</p>
      <div class="career-tags">
        ${item.tags.map(tag => `<span>${t(tag)}</span>`).join('')}
      </div>
    </div>
  `).join(''));
}

function renderSkills() {
  setEl('skillsLabel', t(D.skills.label));
  setEl('skillsTitle', t(D.skills.title));

  setHTML('skillsContainer', D.skills.groups.map(g => `
    <div class="glass-card skill-card reveal">
      <div class="card-accent-top" aria-hidden="true"></div>
      <h3 class="skill-group-label">${t(g.label)}</h3>
      <div class="skill-chips">
        ${g.items.map(i => `<span>${t(i)}</span>`).join('')}
      </div>
    </div>
  `).join(''));
}

function renderTools() {
  setEl('toolsLabel', t(D.tools.label));
  setEl('toolsTitle', t(D.tools.title));
  setEl('toolsSub',   t(D.tools.sub));

  setHTML('toolsContainer', D.tools.items.map(item => `
    <div class="glass-card tool-card reveal">
      <div class="card-accent-top" aria-hidden="true"></div>
      <h3 class="tool-card-name">${t(item.name)}</h3>
      <p class="tool-card-sub">${t(item.sub)}</p>
      <p class="tool-card-desc">${t(item.desc)}</p>
    </div>
  `).join(''));
}

function renderSide() {
  setEl('sideLabel', t(D.side.label));
  setEl('sideTitle', t(D.side.title));
  setEl('sideText',  t(D.side.text));

  setHTML('sideContainer', D.side.items.map(item => `
    <div class="glass-card side-card reveal">
      <div class="card-accent-top" aria-hidden="true"></div>
      <h3 class="side-card-name">${item.name}</h3>
      <p class="side-card-desc">${t(item.desc)}</p>
    </div>
  `).join(''));

  const more = document.getElementById('sideMore');
  if (more) { more.href = D.side.moreLink; more.textContent = t(D.side.moreLabel); }
}

function renderContact() {
  setEl('contactLabel', t(D.contact.label));
  setEl('contactTitle', t(D.contact.title));
  setEl('contactDesc',  t(D.contact.desc));
  const fn  = document.getElementById('formName');    if (fn)  fn.placeholder  = t(D.i18n.namePH);
  const fe  = document.getElementById('formEmail');   if (fe)  fe.placeholder  = t(D.i18n.emailPH);
  const fm  = document.getElementById('formMsg');     if (fm)  fm.placeholder  = t(D.i18n.msgPH);
  setEl('formSubmit', t(D.i18n.submitLabel));
  setEl('formSent',   t(D.i18n.sentMsg));
}

function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = document.getElementById('formSubmit');
    btn.textContent = t(D.i18n.sendingLabel);
    btn.disabled = true;
    try {
      const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(form) });
      const json = await res.json();
      if (json.success) {
        document.getElementById('formSent').style.display = 'block';
        form.reset();
        btn.textContent = t(D.i18n.submitLabel);
      } else {
        btn.textContent = t(D.i18n.sendErr);
      }
    } catch { btn.textContent = t(D.i18n.sendErr); }
    btn.disabled = false;
  });
}

// ─── EXACT MASTER SHADER ENGINE (from CV_KKEEY) ──────────────────────────────
let gl, uTime, uRes, uIntensity, uLight, uC1, uC2, rafId;

function initBg() {
  const c = document.getElementById('lo-bg');
  if (!c) return;

  const W = window.innerWidth, H = window.innerHeight;
  c.width = W; c.height = H;
  c.style.width = W + 'px'; c.style.height = H + 'px';

  gl = c.getContext('webgl');
  if (!gl) return;

  const VS = 'attribute vec2 a;void main(){gl_Position=vec4(a,0,1);}';
  const FS = [
    'precision mediump float;',
    'uniform float u_t,u_i,u_l;',
    'uniform vec3 u_c1,u_c2;',
    'uniform vec2 u_r;',
    'void main(){',
    '  vec2 uv=gl_FragCoord.xy/u_r;',
    '  vec2 p=uv*2.-1.;',
    '  p.x*=u_r.x/u_r.y;',
    '  float t=u_t*.2;',
    '  float w1=sin(p.x*2.5+t)*cos(p.y*1.8-t*.6);',
    '  float w2=cos(p.x*1.5-t*.4)*sin(p.y*2.2+t);',
    '  float w3=sin(length(p)*3.-t*1.2)*.5+.5;',
    '  float m1=w1*.5+.5,m2=w2*.5+.5;',
    '  vec3 dark=vec3(.027,.027,.059);',
    '  vec3 lite=vec3(.933,.933,.973);',
    '  vec3 base=mix(dark,lite,u_l);',
    '  vec3 pur=u_c1;',
    '  vec3 teal=u_c2;',
    '  float db=1.-u_l;',
    '  vec3 col=base;',
    '  col+=pur*m1*w3*(.28+.18*db)*u_i;',
    '  col+=teal*m2*w3*(.16+.1*db)*u_i;',
    '  col+=vec3(.08,.05,.22)*m1*m2*.35*u_i*db;',
    '  gl_FragColor=vec4(clamp(col,0.,1.),1.);',
    '}'
  ].join('\n');

  const mk = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; };
  const prog = gl.createProgram();
  gl.attachShader(prog, mk(gl.VERTEX_SHADER, VS));
  gl.attachShader(prog, mk(gl.FRAGMENT_SHADER, FS));
  gl.linkProgram(prog);
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'a');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  uTime = gl.getUniformLocation(prog, 'u_t');
  uRes = gl.getUniformLocation(prog, 'u_r');
  uIntensity = gl.getUniformLocation(prog, 'u_i');
  uLight = gl.getUniformLocation(prog, 'u_l');
  uC1 = gl.getUniformLocation(prog, 'u_c1');
  uC2 = gl.getUniformLocation(prog, 'u_c2');

  gl.uniform2f(uRes, W, H);
  gl.uniform1f(uIntensity, 1.0);

  updateBgLight();

  let t0 = null;
  const loop = ts => {
    if (!gl) return;
    if (!t0) t0 = ts;
    gl.uniform1f(uTime, (ts - t0) * 0.001);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    rafId = requestAnimationFrame(loop);
  };
  rafId = requestAnimationFrame(loop);

  window.addEventListener('resize', () => {
    const W2 = window.innerWidth, H2 = window.innerHeight;
    c.style.width = W2 + 'px'; c.style.height = H2 + 'px';
    if (gl && uRes) gl.uniform2f(uRes, W2, H2);
  }, { passive: true });
}

function updateBgLight() {
  if (!gl) return;
  if (uLight !== null) gl.uniform1f(uLight, darkMode ? 0.0 : 1.0);
  if (uC1 !== null && uC2 !== null) {
    if (colorTheme === 'orange') {
      gl.uniform3f(uC1, 1.0, 0.478, 0.0);
      gl.uniform3f(uC2, 0.0, 0.898, 1.0);
    } else {
      gl.uniform3f(uC1, 0.486, 0.416, 0.969);
      gl.uniform3f(uC2, 0.0, 0.831, 0.667);
    }
  }
}
