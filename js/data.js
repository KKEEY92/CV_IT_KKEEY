/**
 * KKEEY IT-Profil — Inhaltsdatei
 * Hier alle Texte, Stationen und Kompetenzen pflegen.
 * Kein Code-Wissen nötig. Einfach Werte ändern und speichern.
 */
window.KKIT_DATA = {

  // ─── HERO ───────────────────────────────────────────────────────────────────
  hero: {
    name: 'Kevin Kuck',
    role: {
      de: 'IT-Administrator · Systemadministration · Identity & Access Management',
      en: 'IT Administrator · System Administration · Identity & Access Management',
    },
    meta: {
      de: '15 Jahre IT-Praxis · KRITIS-erfahren · Butzbach · Remote / Hybrid',
      en: '15 years of IT practice · Critical-infrastructure experience · Butzbach, Germany · Remote / Hybrid',
    },
    cta1: { de: 'Bewerbungsmappe (PDF)', en: 'Application portfolio (PDF)' },
    cta2: { de: 'Kontakt aufnehmen', en: 'Get in touch' },
    cta3: 'LinkedIn',
    available: { de: 'Verfügbar ab sofort', en: 'Available now' },
  },

  // ─── PROFIL ─────────────────────────────────────────────────────────────────
  profile: {
    label: { de: 'Profil', en: 'Profile' },
    title: { de: 'Infrastruktur, auf die man sich verlassen kann.', en: 'Infrastructure people can rely on.' },
    text: {
      de: 'Seit über 15 Jahren halte ich IT-Infrastruktur stabil, damit andere sich auf ihre Arbeit verlassen können. Zuletzt habe ich bei den Johanniter Bundes-IT-Services eine bundesweite KRITIS-Umgebung administriert — Active Directory, Microsoft Entra ID, Citrix, Windows-11-Rollouts und PowerShell-Automatisierung. Davor 14 Jahre BAUHAUS: Tier-1-bis-3-Support für über 200 Mitarbeitende und technische Betreuung der Warenwirtschaft. Wo ich Reibung sehe, baue ich Lösungen — vom selbstentwickelten Ticket-Zuweisungstool bis zur dokumentierten Diagnose-Methodik.',
      en: 'For over 15 years I have kept IT infrastructure stable so others can rely on it for their work. Most recently I administered a nationwide critical-infrastructure (KRITIS) environment at Johanniter Bundes-IT-Services — Active Directory, Microsoft Entra ID, Citrix, Windows 11 rollouts, and PowerShell automation. Before that, 14 years at BAUHAUS: tier 1–3 support for 200+ employees and technical ownership of the merchandise management system. Wherever I see friction, I build solutions — from a self-developed ticket assignment tool to a documented diagnosis methodology.',
    },
    facts: [
      { de: '15+ Jahre IT-Praxis', en: '15+ years of IT practice' },
      { de: 'KRITIS-Umgebung administriert', en: 'Administered KRITIS environment' },
      { de: 'Tier-1–3-Support · 200+ Mitarbeitende', en: 'Tier 1–3 support · 200+ employees' },
    ],
  },

  // ─── BERUFSERFAHRUNG ────────────────────────────────────────────────────────
  career: {
    label: { de: 'Werdegang', en: 'Career' },
    title: { de: 'Berufserfahrung', en: 'Work experience' },
    items: [
      {
        period: { de: 'Dez 2025 – Mai 2026', en: 'Dec 2025 – May 2026' },
        role: { de: 'IT-Administrator', en: 'IT Administrator' },
        company: 'Johanniter Bundes-IT-Services',
        active: false,
        desc: {
          de: 'Administration einer bundesweiten KRITIS-Infrastrukturumgebung: Active Directory, Microsoft Entra ID, Citrix, Omnitracker, Innovaphone PBX. Windows-11-Rollouts und Automatisierung wiederkehrender Abläufe per PowerShell. Eigenentwicklungen: ein Tool zur automatisierten Ticket-Zuweisung sowie der KKEEY-Standard für reproduzierbare Fehlerdiagnose.',
          en: 'Administration of a nationwide critical-infrastructure environment: Active Directory, Microsoft Entra ID, Citrix, Omnitracker, Innovaphone PBX. Windows 11 rollouts and PowerShell automation of recurring tasks. Own developments: a tool for automated ticket assignment and the KKEEY Standard for reproducible fault diagnosis.',
        },
        tags: ['Active Directory', 'Entra ID', 'Citrix', 'PowerShell', 'Windows 11', 'KRITIS'],
      },
      {
        period: { de: '2010 – 2024 · 14 Jahre', en: '2010 – 2024 · 14 years' },
        role: { de: 'IT-Beauftragter & Inventory Management', en: 'IT Officer & Inventory Management' },
        company: 'BAUHAUS',
        active: false,
        desc: {
          de: 'Tier-1-bis-3-Support für über 200 Mitarbeitende, technische Betreuung der Warenwirtschaft, Hardware- und Prozessverantwortung im laufenden Handelsbetrieb. 14 Jahre operative Praxis: Ich kenne den Arbeitsalltag der Anwender aus erster Hand — welche Prozesse funktionieren und wo Systeme im Betrieb brechen.',
          en: 'Tier 1–3 support for 200+ employees, technical ownership of the merchandise management system, hardware and process responsibility in day-to-day retail operations. 14 years of hands-on practice: I know users\u2019 daily work first-hand \u2014 which processes work and where systems break in production.',
        },
        tags: ['1st\u20133rd-Level-Support', 'Warenwirtschaft', 'Prozessoptimierung', 'Anwenderbetreuung'],
      },
      {
        period: { de: 'seit Juni 2026', en: 'since June 2026' },
        role: { de: 'IT-Beratung & Prozessautomatisierung', en: 'IT Consulting & Process Automation' },
        company: { de: 'Selbstständig', en: 'Self-employed' },
        active: true,
        desc: {
          de: 'Beratung und Umsetzung rund um Systemadministration, Workflow-Automatisierung und Tool-Entwicklung für kleine und mittlere Unternehmen.',
          en: 'Consulting and implementation around system administration, workflow automation, and tool development for small and medium-sized businesses.',
        },
        tags: ['Automatisierung', 'PowerShell', 'Python', 'KMU'],
      },
    ],
  },

  // ─── KERNKOMPETENZEN ────────────────────────────────────────────────────────
  skills: {
    label: { de: 'Kompetenzen', en: 'Skills' },
    title: { de: 'Kernkompetenzen', en: 'Core competencies' },
    groups: [
      {
        label: { de: 'Identity & Access Management', en: 'Identity & Access Management' },
        items: ['Active Directory', 'Microsoft Entra ID', { de: 'Benutzer- & Berechtigungsverwaltung', en: 'User & permissions management' }, { de: 'IAM in KRITIS-Umgebungen', en: 'IAM in critical infrastructure' }],
      },
      {
        label: { de: 'Client & Infrastruktur', en: 'Client & Infrastructure' },
        items: [{ de: 'Windows-11-Rollouts', en: 'Windows 11 rollouts' }, 'Citrix', 'Omnitracker', 'Innovaphone PBX', { de: 'Hardware-Betreuung', en: 'Hardware support' }],
      },
      {
        label: { de: 'Automatisierung & Scripting', en: 'Automation & Scripting' },
        items: ['PowerShell', 'Python', { de: 'Prozessautomatisierung', en: 'Process automation' }, { de: 'Eigene Workflow-Tools', en: 'Custom workflow tools' }],
      },
      {
        label: { de: 'Support & Methodik', en: 'Support & Methodology' },
        items: [{ de: '1st\u20133rd-Level-Support', en: 'Tier 1\u20133 support' }, { de: 'Ticketsysteme', en: 'Ticketing systems' }, { de: 'Warenwirtschaftssysteme', en: 'Merchandise management systems' }, { de: 'Reproduzierbare Fehlerdiagnose', en: 'Reproducible fault diagnosis' }],
      },
    ],
  },

  // ─── EIGENE TOOLS & METHODIK ────────────────────────────────────────────────
  tools: {
    label: { de: 'Proof of Work', en: 'Proof of Work' },
    title: { de: 'Eigene Tools & Methodik', en: 'Own tools & methodology' },
    sub: {
      de: 'Wo ich im Betrieb Reibung sehe, baue ich Lösungen — die im Team im Einsatz sind.',
      en: 'Where I see friction in operations, I build solutions — used by the team in production.',
    },
    items: [
      {
        name: { de: 'Ticket-Routing-Automatisierung', en: 'Ticket routing automation' },
        sub: { de: 'Eigenentwicklung · im Team-Einsatz', en: 'Own development · used in production' },
        desc: {
          de: 'Selbstentwickeltes Tool, das eingehende Support-Tickets regelbasiert dem passenden Bearbeiter zuweist. Ersetzt tägliche manuelle Verteilarbeit — direkt aus dem Support-Alltag heraus entstanden, weil der Prozess vorher Zeit gefressen hat.',
          en: 'Self-developed tool that assigns incoming support tickets to the right agent based on rules. Replaces daily manual triage work — built straight out of day-to-day support practice because the old process was eating time.',
        },
      },
      {
        name: 'KKEEY-Standard',
        sub: { de: 'Reproduzierbare Fehlerdiagnose', en: 'Reproducible fault diagnosis' },
        desc: {
          de: 'Dokumentierte Methodik für strukturierte, reproduzierbare Fehlerdiagnose — damit Störungen nachvollziehbar gelöst werden statt per Trial-and-Error.',
          en: 'Documented methodology for structured, reproducible fault diagnosis — so incidents are resolved traceably instead of by trial and error.',
        },
      },
      {
        name: 'KKI Agent-Framework',
        sub: { de: 'Persönliche Automatisierungs-Bibliothek', en: 'Personal automation library' },
        desc: {
          de: 'Privat entwickelte Agentenstruktur mit wiederverwendbaren Bausteinen für Automatisierungs-Workflows — die gemeinsame Grundlage meiner eigenen Tools und Nebenprojekte. Zeigt: keine Einzelskripte, sondern strukturierte, wartbare Systeme.',
          en: 'Privately developed agent structure with reusable building blocks for automation workflows — the shared foundation of my own tools and side projects. The point: not one-off scripts, but structured, maintainable systems.',
        },
      },
    ],
  },

  // ─── NEBENPROJEKTE (AI, bewusst zurückhaltend) ──────────────────────────────
  side: {
    label: { de: 'Zusatzqualifikation', en: 'Additional qualification' },
    title: { de: 'Nebenprojekte: KI-Entwicklung', en: 'Side projects: AI development' },
    text: {
      de: 'Neben der Administration entwickle ich KI-gestützte Anwendungen — ein zusätzliches Werkzeug, um Automatisierung weiterzudenken und Probleme aus neuen Blickwinkeln zu lösen.',
      en: 'Alongside administration I build AI-assisted applications — an additional tool for taking automation further and solving problems from new angles.',
    },
    items: [
      {
        name: 'AuraTone AI',
        desc: { de: 'Audio-Mastering-Engine · TypeScript, Python DSP, Google Gemini', en: 'Audio mastering engine · TypeScript, Python DSP, Google Gemini' },
      },
      {
        name: 'Claire V2.5',
        desc: { de: 'Voice-AI-Agent · Python, Gemini Native Audio, ~200ms Latenz', en: 'Voice AI agent · Python, Gemini Native Audio, ~200ms latency' },
      },
    ],
    moreLink: 'https://kkeey92.github.io/CV_KKEEY/',
    moreLabel: { de: 'Mehr im AI-Portfolio \u2192', en: 'More in the AI portfolio \u2192' },
  },

  // ─── KONTAKT ────────────────────────────────────────────────────────────────
  contact: {
    label: { de: 'Kontakt', en: 'Contact' },
    title: { de: 'Lassen Sie uns sprechen.', en: 'Let\u2019s talk.' },
    desc: {
      de: 'Offen für Festanstellungen als IT-Administrator, Systemadministrator oder IAM-Specialist. Remote · Hybrid · DE & EN.',
      en: 'Open to full-time roles as IT administrator, system administrator, or IAM specialist. Remote · Hybrid · DE & EN.',
    },
  },

  // ─── I18N STRINGS ────────────────────────────────────────────────────────────
  i18n: {
    navProfile:  { de: 'Profil',          en: 'Profile' },
    navCareer:   { de: 'Werdegang',       en: 'Career' },
    navSkills:   { de: 'Kompetenzen',     en: 'Skills' },
    navTools:    { de: 'Tools',           en: 'Tools' },
    navContact:  { de: 'Kontakt',         en: 'Contact' },
    namePH:      { de: 'Ihr Name',        en: 'Your name' },
    emailPH:     { de: 'Ihre E-Mail',     en: 'Your email' },
    msgPH:       { de: 'Ihre Nachricht\u2026', en: 'Your message\u2026' },
    submitLabel: { de: 'Nachricht senden \u2192', en: 'Send message \u2192' },
    sentMsg:     { de: '\u2713 Nachricht gesendet \u2014 ich melde mich.', en: '\u2713 Message sent \u2014 I\u2019ll get back to you.' },
    sendingLabel:{ de: 'Wird gesendet\u2026',  en: 'Sending\u2026' },
    sendErr:     { de: 'Fehler \u2014 bitte direkt mailen', en: 'Error \u2014 please email directly' },
    darkBtnLight:{ de: 'Hellmodus aktivieren', en: 'Switch to light mode' },
    darkBtnDark: { de: 'Dunkelmodus aktivieren', en: 'Switch to dark mode' },
    footerCross: { de: 'Auch von mir: AI-Engineering-Portfolio \u2192', en: 'Also by me: AI engineering portfolio \u2192' },
    downloadNote:{ de: 'Bewerbungsmappe: Anschreiben, Lebenslauf & Tech-Profil (PDF, 4 Seiten)', en: 'Application portfolio: cover letter, CV & tech profile (PDF, 4 pages)' },
  },

};
