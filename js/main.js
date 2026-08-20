/**
 * KKEEY Future Orchestrator Interface — main.js v2.0
 * CV_IT_KKEEY · KKEEY Liquid Orange · Dark-First
 *
 * Modules:
 *  - Theme / Lang persistence
 *  - Nav (sticky, active section, hamburger)
 *  - WebGL Node-Graph Background Shader
 *  - Scroll-responsive shader intensity
 *  - All section renderers (overview, systems, automation, compliance, impact, career, skills, tools, side, contact)
 *  - IntersectionObserver reveal
 *  - Contact form (Web3Forms)
 */

const D = window.KKIT_DATA;
let lang      = localStorage.getItem('kkit_lang')  || 'de';
let darkMode  = localStorage.getItem('kkit_dark')  !== 'false'; // dark is default
let colorTheme = 'orange'; // KKEEY Liquid Orange — non-negotiable

// ─── DOM READY ───────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  render();
  initNav();
  initReveal();
  initBg();
  initScrollShader();
  initContactForm();
});

// ─── TRANSLATION HELPER ───────────────────────────────────────────────────────
function t(obj) {
  if (typeof obj !== 'object' || obj === null) return String(obj ?? '');
  return obj[lang] || obj.de || '';
}

// ─── THEME ────────────────────────────────────────────────────────────────────
function applyTheme() {
  // Always dark, always orange — brand lock
  document.documentElement.setAttribute('data-theme', 'dark');
  document.documentElement.setAttribute('data-color-theme', 'orange');
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('kkit_dark',  'true');
  localStorage.setItem('kkit_color', 'orange');
  localStorage.setItem('kkit_lang',  lang);

  const darkBtn = document.getElementById('darkToggle');
  if (darkBtn) {
    darkBtn.setAttribute('aria-label', t(D.i18n.darkBtnLight));
    darkBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="13" height="13" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  }

  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.textContent = lang === 'de' ? 'EN' : 'DE';

  // Update color toggle dot display (always orange)
  const colorBtn = document.getElementById('colorToggle');
  if (colorBtn) {
    colorBtn.innerHTML = `<span style="font-family:var(--lo-font-code);font-size:10px;font-weight:700;color:var(--lo-orange);letter-spacing:0.5px;">ORANGE</span>`;
  }
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function initNav() {
  const nav       = document.querySelector('.nav');
  const hamburger = document.getElementById('hamburger');
  const links     = document.getElementById('navLinks');

  // Scroll → sticky style
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // Hamburger
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

  // Dark toggle (no-op visually — brand lock — but persists user intent)
  const darkBtn = document.getElementById('darkToggle');
  if (darkBtn) darkBtn.addEventListener('click', () => { /* dark-first brand lock */ });

  // Lang toggle
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      lang = lang === 'de' ? 'en' : 'de';
      localStorage.setItem('kkit_lang', lang);
      document.documentElement.setAttribute('lang', lang);
      render();
    });
  }

  // Active nav link via IntersectionObserver
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

// ─── RENDER ───────────────────────────────────────────────────────────────────
function render() {
  // Lang button
  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.textContent = lang === 'de' ? 'EN' : 'DE';

  // Nav links
  setEl('navOverview',   t(D.i18n.navOverview));
  setEl('navSystems',    t(D.i18n.navSystems));
  setEl('navAutomation', t(D.i18n.navAutomation));
  setEl('navCareer',     t(D.i18n.navCareer));
  setEl('navSkills',     t(D.i18n.navSkills));
  setEl('navContact',    t(D.i18n.navContact));
  setEl('availableText', t(D.hero.available));

  // Hero
  setEl('heroRole', t(D.hero.role));
  setEl('heroMeta', t(D.hero.meta));
  setEl('heroCta1Label', t(D.hero.cta1));
  setEl('heroCta2Label', t(D.hero.cta2));
  setEl('heroCta3Label', t(D.hero.cta3));
  setEl('downloadNote',  t(D.i18n.downloadNote));
  setEl('systemBadgeLabel', t(D.i18n.systemBadge));

  // Capabilities
  const caps = D.hero.caps[lang] || D.hero.caps.de;
  setHTML('heroCaps', caps.map(c => `
    <span class="cap-pill">
      <span class="cap-pill-dot" aria-hidden="true"></span>
      ${c}
    </span>
  `).join(''));

  // Sections
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

  // Footer
  setEl('footerCross', t(D.i18n.footerCross));

  initReveal();
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function setEl(id, txt) {
  const el = document.getElementById(id);
  if (el) el.textContent = txt;
}
function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

// SVG Icons for domain cards
const ICONS = {
  cloud:    `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
  server:   `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
  zap:      `<svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  shield:   `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  activity: `<svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  layout:   `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
};

// ─── OVERVIEW ─────────────────────────────────────────────────────────────────
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

// ─── SYSTEMS ──────────────────────────────────────────────────────────────────
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

// ─── AUTOMATION ───────────────────────────────────────────────────────────────
function renderAutomation() {
  setEl('automationLabel', t(D.automation.label));
  setEl('automationTitle', t(D.automation.title));
  setEl('automationSub',   t(D.automation.sub));

  setHTML('pipelineContainer', D.automation.pipeline.map(stage => {
    const statusMap = {
      running: { label: { de: 'AKTIV', en: 'RUNNING' },   cls: 'status--running' },
      done:    { label: { de: 'FERTIG', en: 'DONE' },     cls: 'status--done' },
      queued:  { label: { de: 'WARTEND', en: 'QUEUED' },  cls: 'status--queued' },
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

// ─── COMPLIANCE ───────────────────────────────────────────────────────────────
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

// ─── IMPACT ───────────────────────────────────────────────────────────────────
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

// ─── CAREER ───────────────────────────────────────────────────────────────────
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

// ─── SKILLS ───────────────────────────────────────────────────────────────────
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

// ─── TOOLS ────────────────────────────────────────────────────────────────────
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

// ─── SIDE PROJECTS ────────────────────────────────────────────────────────────
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

// ─── CONTACT ──────────────────────────────────────────────────────────────────
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

// ─── REVEAL ───────────────────────────────────────────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

// ─── CONTACT FORM ─────────────────────────────────────────────────────────────
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

// ─── WEBGL NODE-GRAPH BACKGROUND SHADER ──────────────────────────────────────
let gl, loUTime, loURes, loUIntensity, loUScroll, loRafId;
let scrollRatio = 0;

function initBg() {
  const canvas = document.getElementById('lo-bg');
  if (!canvas) return;

  const W = window.innerWidth, H = window.innerHeight;
  canvas.width  = W;
  canvas.height = H;
  canvas.style.width  = W + 'px';
  canvas.style.height = H + 'px';

  gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'high-performance' });
  if (!gl) {
    // Graceful fallback: solid dark bg
    canvas.style.background = '#0C0D0F';
    return;
  }

  // Vertex shader — full-screen quad
  const VS = `attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}`;

  // Fragment shader — KKEEY Liquid Orange Node-Graph (Bright Ambient & Transparent Glow)
  const FS = [
    'precision mediump float;',
    'uniform float u_t, u_i, u_s;',
    'uniform vec2 u_r;',

    'const vec3 GRAPHITE = vec3(0.062, 0.070, 0.088);',
    'const vec3 ANTHRACITE = vec3(0.095, 0.108, 0.135);',
    'const vec3 ORANGE = vec3(1.0, 0.48, 0.0);',
    'const vec3 ORANGE_BRIGHT = vec3(1.0, 0.62, 0.24);',
    'const vec3 ORANGE_DIM = vec3(0.85, 0.42, 0.05);',

    // Grid lines function
    'float gridLines(vec2 uv, float scale, float lw) {',
    '  vec2 g = fract(uv * scale);',
    '  vec2 d = min(g, 1.0 - g);',
    '  float lx = 1.0 - smoothstep(0.0, lw, d.x);',
    '  float ly = 1.0 - smoothstep(0.0, lw, d.y);',
    '  return max(lx, ly);',
    '}',

    // Animated energy pulse along grid lines
    'float energyPulse(vec2 uv, float t, float scale) {',
    '  vec2 g = fract(uv * scale);',
    '  vec2 d = min(g, 1.0 - g);',
    // horizontal lines
    '  float onH = 1.0 - smoothstep(0.0, 0.05, d.y);',
    '  float hFlow = sin(uv.x * scale * 6.2832 - t * 2.0) * 0.5 + 0.5;',
    '  hFlow = pow(hFlow, 5.0);',
    // vertical lines
    '  float onV = 1.0 - smoothstep(0.0, 0.05, d.x);',
    '  float vFlow = sin(uv.y * scale * 6.2832 - t * 1.5) * 0.5 + 0.5;',
    '  vFlow = pow(vFlow, 5.0);',
    '  return onH * hFlow + onV * vFlow;',
    '}',

    // Node glow at intersections
    'float nodeGlow(vec2 uv, float t, float scale) {',
    '  vec2 g = fract(uv * scale) - 0.5;',
    '  float d = length(g);',
    '  float activation = sin(floor(uv.x * scale) * 7.3 + floor(uv.y * scale) * 13.1 + t * 0.7) * 0.5 + 0.5;',
    '  return smoothstep(0.16, 0.0, d) * activation;',
    '}',

    'void main() {',
    '  vec2 uv = gl_FragCoord.xy / u_r;',
    '  float ar = u_r.x / u_r.y;',
    '  vec2 uvR = vec2(uv.x * ar, uv.y);', // aspect-corrected

    '  float t = u_t;',

    // Base: elevated graphite gradient with vertical depth shift
    '  float depth = 0.05 * sin(t * 0.1 + u_s * 0.6);',
    '  vec3 col = mix(GRAPHITE, ANTHRACITE, uv.y * 0.8 + depth);',

    // Large background grid (steel / tech grid)
    '  float bgGrid = gridLines(uvR, 5.0, 0.018);',
    '  col += vec3(0.09, 0.10, 0.13) * bgGrid * 0.5;',

    // Foreground grid (orange-tinted, clear visibility)
    '  float fgGrid = gridLines(uvR, 9.0, 0.010);',
    '  col += ORANGE_DIM * fgGrid * 0.28 * u_i;',

    // Energy pulses (liquid orange flowing along lines)
    '  float ep = energyPulse(uvR, t * 0.45, 9.0);',
    '  col += ORANGE_BRIGHT * ep * 0.85 * u_i;',

    // Node pulses at intersections (strong glowing hubs)
    '  float ng = nodeGlow(uvR, t * 0.35, 9.0);',
    '  col += ORANGE_BRIGHT * ng * 1.3 * u_i;',

    // Secondary slow-moving energy waves
    '  float ep2 = energyPulse(uvR, t * 0.2 + 1.5, 4.5);',
    '  col += ORANGE * ep2 * 0.35 * u_i;',

    // Soft subtle vignette (not too dark)
    '  vec2 vig = uv * 2.0 - 1.0;',
    '  float vignette = 1.0 - dot(vig * vec2(0.5, 0.7), vig * vec2(0.5, 0.7)) * 0.28;',
    '  col *= clamp(vignette, 0.0, 1.0);',

    '  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);',
    '}',
  ].join('\n');

  // Compile shaders
  function mkShader(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.warn('[lo-bg] Shader compile error:', gl.getShaderInfoLog(s));
      return null;
    }
    return s;
  }

  const vs = mkShader(gl.VERTEX_SHADER, VS);
  const fs = mkShader(gl.FRAGMENT_SHADER, FS);
  if (!vs || !fs) { gl = null; return; }

  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.warn('[lo-bg] Program link error:', gl.getProgramInfoLog(prog));
    gl = null;
    return;
  }
  gl.useProgram(prog);

  // Full-screen quad
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
  const aLoc = gl.getAttribLocation(prog, 'a');
  gl.enableVertexAttribArray(aLoc);
  gl.vertexAttribPointer(aLoc, 2, gl.FLOAT, false, 0, 0);

  // Uniforms
  loUTime      = gl.getUniformLocation(prog, 'u_t');
  loURes       = gl.getUniformLocation(prog, 'u_r');
  loUIntensity = gl.getUniformLocation(prog, 'u_i');
  loUScroll    = gl.getUniformLocation(prog, 'u_s');

  gl.uniform2f(loURes, W, H);
  gl.uniform1f(loUIntensity, 1.0);
  gl.uniform1f(loUScroll, 0.0);

  // Render loop
  let t0 = null;
  const loop = ts => {
    if (!gl) return;
    if (!t0) t0 = ts;
    gl.uniform1f(loUTime, (ts - t0) * 0.001);
    gl.uniform1f(loUScroll, scrollRatio);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    loRafId = requestAnimationFrame(loop);
  };
  loRafId = requestAnimationFrame(loop);

  // Resize
  window.addEventListener('resize', () => {
    const W2 = window.innerWidth, H2 = window.innerHeight;
    canvas.width  = W2; canvas.height = H2;
    canvas.style.width  = W2 + 'px';
    canvas.style.height = H2 + 'px';
    if (gl && loURes) {
      gl.viewport(0, 0, W2, H2);
      gl.uniform2f(loURes, W2, H2);
    }
  }, { passive: true });
}

// ─── SCROLL-RESPONSIVE SHADER ─────────────────────────────────────────────────
function initScrollShader() {
  window.addEventListener('scroll', () => {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    scrollRatio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    // Intensity subtly increases toward mid-page then recedes
    const intensity = 0.85 + 0.3 * Math.sin(scrollRatio * Math.PI);
    if (gl && loUIntensity) gl.uniform1f(loUIntensity, intensity);
  }, { passive: true });
}
