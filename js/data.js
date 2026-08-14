/**
 * KKEEY IT-Profil — Master-Datenbasis (Single Source of Truth)
 * Konsolidierte Architektur: Enterprise IT · Microsoft-Infrastruktur · Automation
 */
window.KKIT_DATA = {

  // ─── HERO ───────────────────────────────────────────────────────────────────
  hero: {
    name: 'Kevin Kuck',
    tagline: {
      de: 'Enterprise IT · Microsoft-Infrastruktur · Automation',
      en: 'Enterprise IT · Microsoft Infrastructure · Automation',
    },
    role: {
      de: 'IT-Systemadministrator · Identity & Access Management',
      en: 'IT Systems Administrator · Identity & Access Management',
    },
    claim: {
      de: 'Enterprise IT aus der Praxis. Automatisierung mit System.',
      en: 'Hands-on Enterprise IT. Systematic automation.',
    },
    meta: {
      de: '15 Jahre operative Erfahrung · KRITIS-relevant · Butzbach · Remote / Hybrid',
      en: '15 years of operational experience · Critical infrastructure · Butzbach · Remote / Hybrid',
    },
    cta1: { de: 'Bewerbungsmappe (PDF)', en: 'Application portfolio (PDF)' },
    cta2: { de: 'Kontakt aufnehmen', en: 'Get in touch' },
    cta3: 'LinkedIn',
    available: { de: 'Verfügbar ab sofort', en: 'Available now' },
    primaryChips: [
      'Active Directory',
      'Microsoft Entra ID',
      'Gruppenrichtlinien',
      'Exchange',
      'PowerShell',
      'Endpoint Deployment',
      'Citrix',
      'ITIL',
    ],
  },

  // ─── PROFIL (MASTERFASSUNG) ────────────────────────────────────────────────
  profile: {
    label: { de: 'Profil', en: 'Profile' },
    title: {
      de: 'Enterprise IT aus der Praxis. Automatisierung mit System.',
      en: 'Hands-on Enterprise IT. Systematic automation.',
    },
    text: {
      de: 'Ich verbinde langjährige operative Erfahrung mit IT-gestützten Geschäftsprozessen und nachgewiesener Enterprise-Systemadministration. Zuletzt war ich bei den Johanniter Bundes-IT Services in einem KRITIS-relevanten Umfeld tätig. Mein Aufgabenbereich umfasste Active Directory, Gruppenrichtlinien, Kerberos, Exchange, Software-Deployment, Lizenzmanagement, Citrix, Incident Management sowie Automatisierungen mit PowerShell und Python. Ergänzend entwickle ich eigenständig Automatisierungs-, Voice-, RAG- und KI-Systeme mit Python, TypeScript und modernen LLM-Plattformen. Die Verbindung aus operativer Praxis, stabilem Systembetrieb und moderner Automatisierung bildet den Kern meines beruflichen Profils.',
      en: 'I combine extensive hands-on experience with IT-supported business processes and verified enterprise systems administration. Most recently, I worked with Johanniter Bundes-IT Services in a critical-infrastructure (KRITIS) environment. My scope covered Active Directory, Group Policies, Kerberos, Exchange, software deployment, license management, Citrix, incident management, and automation using PowerShell and Python. In addition, I independently engineer automation, voice, RAG, and AI systems with Python, TypeScript, and modern LLM platforms.',
    },
    facts: [
      { de: '15 Jahre operative Erfahrung', en: '15 years of operational experience' },
      { de: 'KRITIS-relevantes Umfeld', en: 'Critical infrastructure environment' },
      { de: 'Enterprise-Systemadministration', en: 'Enterprise systems administration' },
    ],
  },

  // ─── BERUFSERFAHRUNG ────────────────────────────────────────────────────────
  career: {
    label: { de: 'Werdegang', en: 'Career' },
    title: { de: 'Berufserfahrung', en: 'Work experience' },
    items: [
      {
        period: { de: '12/2025 – 05/2026', en: '12/2025 – 05/2026' },
        role: { de: 'IT-Organisation-Spezialist / Junior IT-Support Agent', en: 'IT Organization Specialist / Junior IT Support Agent' },
        company: 'Johanniter Bundes-IT Services',
        active: false,
        desc: {
          de: 'Administration und Betrieb von Enterprise-Systemen in einem KRITIS-relevanten Umfeld. Aufgabenbereich: Active Directory, Gruppenrichtlinien, Kerberos, Exchange, Software-Deployment (DeskCenter Studio), Lizenzmanagement, Citrix, OmniTracker Incident Management sowie PowerShell- und Python-Automatisierung.',
          en: 'Administration and operations of enterprise systems in a critical-infrastructure environment. Scope: Active Directory, Group Policies, Kerberos, Exchange, software deployment (DeskCenter Studio), license management, Citrix, OmniTracker incident management, and PowerShell/Python automation.',
        },
        tags: ['Active Directory', 'Entra ID', 'Gruppenrichtlinien', 'Kerberos', 'Exchange', 'DeskCenter', 'Citrix', 'OmniTracker', 'PowerShell', 'Python', 'KRITIS'],
      },
      {
        period: { de: '09/2010 – 12/2024 · 14 Jahre', en: '09/2010 – 12/2024 · 14 years' },
        role: { de: 'Mitarbeiter Warenwirtschaft (Schwerpunkt: IT-gestützte Prozesse)', en: 'Merchandise Management Specialist (Focus: IT Business Processes)' },
        company: 'BAUHAUS',
        active: false,
        desc: {
          de: 'Verantwortung für warenwirtschaftliche Abläufe, Bestandsqualität, Disposition, Warenverfügbarkeit und die zuverlässige Ausführung IT-gestützter Geschäftsprozesse. Langjährige operative Erfahrung mit Prozessanalyse, Fehlererkennung und systemgestützter Bestandsführung.',
          en: 'Responsibility for merchandise management workflows, inventory quality, replenishment planning, goods availability, and reliable execution of IT-supported business processes. Longstanding operational experience in process analysis, anomaly detection, and ERP inventory control.',
        },
        tags: ['Warenwirtschaft', 'IT-Geschäftsprozesse', 'Prozessqualität', 'Bestandsführung', 'Disposition'],
      },
      {
        period: { de: 'seit 06/2026', en: 'since 06/2026' },
        role: { de: 'IT-Beratung & Prozessautomatisierung', en: 'IT Consulting & Process Automation' },
        company: { de: 'Selbstständig', en: 'Self-employed' },
        active: true,
        desc: {
          de: 'Beratung und Umsetzung rund um Systemadministration, Workflow-Automatisierung und Tool-Entwicklung für kleine und mittlere Unternehmen.',
          en: 'Consulting and implementation around systems administration, workflow automation, and custom tool engineering for small and medium enterprises.',
        },
        tags: ['Automatisierung', 'PowerShell', 'Python', 'KMU'],
      },
    ],
  },

  // ─── ENTERPRISE CORE SKILLS ─────────────────────────────────────────────────
  skills: {
    label: { de: 'Kompetenzen', en: 'Skills' },
    title: { de: 'Enterprise Core Skills', en: 'Enterprise Core Skills' },
    groups: [
      {
        label: { de: 'Identity & Access Management', en: 'Identity & Access Management' },
        items: [
          'Active Directory (AD DS)',
          { de: 'Objekt- & Sicherheitsgruppenverwaltung', en: 'Object & Security Group Management' },
          { de: 'Gruppenrichtlinien (GPO)', en: 'Group Policy Objects (GPO)' },
          { de: 'Kerberos-Authentifizierung', en: 'Kerberos Authentication' },
          { de: 'Domänenweite Berechtigungsverwaltung', en: 'Domain-wide Permission Management' },
          'Microsoft Entra ID',
          { de: 'Benutzer- & Rechteverwaltung (RBAC)', en: 'User & Permission Management (RBAC)' },
        ],
      },
      {
        label: { de: 'Microsoft & Messaging', en: 'Microsoft & Messaging' },
        items: [
          'Exchange Admin Center',
          { de: 'Postfachverwaltung', en: 'Mailbox Administration' },
          { de: 'Verteilerlisten & Ressourcen', en: 'Distribution Lists & Resources' },
          { de: 'Berechtigungsstrukturen', en: 'Permission Structures' },
          { de: 'Mail-Flow-Regeln', en: 'Mail Flow Rules' },
          { de: 'Transportbezogene Fehleranalyse', en: 'Transport Troubleshooting' },
        ],
      },
      {
        label: { de: 'Endpoint & Deployment', en: 'Endpoint & Deployment' },
        items: [
          'DeskCenter Studio',
          { de: 'Softwarepaketierung', en: 'Software Packaging' },
          { de: 'Deployment-Steuerung', en: 'Deployment Management' },
          { de: 'Lizenzmanagement', en: 'License Management' },
          { de: 'Windows-11-Rollouts', en: 'Windows 11 Rollouts' },
          { de: 'Endpoint Lifecycle', en: 'Endpoint Lifecycle' },
        ],
      },
      {
        label: { de: 'IT Operations & Service Management', en: 'IT Operations & Service Management' },
        items: [
          { de: 'Citrix-Terminalserver (NetScaler)', en: 'Citrix Terminal Server (NetScaler)' },
          { de: 'Performance Monitoring & Troubleshooting', en: 'Performance Monitoring & Troubleshooting' },
          'OmniTracker ITSM',
          { de: 'Incident- & Request-Management', en: 'Incident & Request Management' },
          { de: 'Knowledge-Base-Pflege', en: 'Knowledge Base Maintenance' },
          { de: 'ITIL-orientierte Dokumentation', en: 'ITIL-aligned Documentation' },
        ],
      },
      {
        label: { de: 'Automation & Methodik', en: 'Automation & Methodology' },
        items: [
          'PowerShell Scripting',
          'Python 3.12+',
          { de: 'Workflow-Automatisierung', en: 'Workflow Automation' },
          'JoBIT Tracker',
          { de: 'Reproduzierbare Fehlerdiagnose (KKEEY-Standard)', en: 'Reproducible Diagnosis (KKEEY Standard)' },
        ],
      },
    ],
  },

  // ─── ZERTIFIZIERUNGEN & WEITERBILDUNG ──────────────────────────────────────
  certifications: {
    label: { de: 'Verifiziert', en: 'Verified' },
    title: { de: 'Zertifizierungen & Nachweise', en: 'Certifications & Credentials' },
    empty: { de: 'Zertifizierungen werden aktuell ergänzt — schau bald wieder vorbei.', en: 'Certifications are being added soon — check back shortly.' },
    items: [
      {
        name: 'Microsoft Certified: Bereitstellen & Verwalten AD Domain Services',
        issuer: 'Microsoft',
        date: { de: '2026', en: '2026' },
        status: { de: '✓ Microsoft Certified', en: '✓ Microsoft Certified' },
        verifyUrl: 'https://www.linkedin.com/in/kevin-kuck-it/details/certifications/',
        accentColor: '#0ea5e9',
      },
      {
        name: 'Microsoft Certified: Excel Grundlagen',
        issuer: 'Microsoft',
        date: { de: '2026', en: '2026' },
        status: { de: '✓ Microsoft Certified', en: '✓ Microsoft Certified' },
        verifyUrl: 'https://www.linkedin.com/in/kevin-kuck-it/details/certifications/',
        accentColor: '#107c41',
      },
    ],
  },

  education: {
    label: { de: 'Weiterbildung', en: 'Further education' },
    linkedinLink: 'https://www.linkedin.com/in/kevin-kuck-it/details/certifications/',
    linkedinLabel: { de: 'Alle Nachweise auf LinkedIn ansehen →', en: 'View all credentials on LinkedIn →' },
    items: [
      { de: 'Windows 11: Administration & Troubleshooting (3 Kurse) — LinkedIn Learning', en: 'Windows 11: Administration & Troubleshooting (3 courses) — LinkedIn Learning' },
      { de: 'Microsoft 365 für Administrator:innen (3 Kurse) — LinkedIn Learning', en: 'Microsoft 365 for Administrators (3 courses) — LinkedIn Learning' },
      { de: 'Microsoft Entra ID Grundkurs — LinkedIn Learning', en: 'Microsoft Entra ID Fundamentals — LinkedIn Learning' },
      { de: 'Microsoft Azure Fundamentals (AZ-900) — LinkedIn Learning', en: 'Microsoft Azure Fundamentals (AZ-900) — LinkedIn Learning' },
      { de: 'Microsoft 365 Fundamentals (MS-900) — LinkedIn Learning', en: 'Microsoft 365 Fundamentals (MS-900) — LinkedIn Learning' },
      { de: 'Active Directory-Verwaltung automatisieren mit PowerShell — LinkedIn Learning', en: 'Automating Active Directory Management with PowerShell — LinkedIn Learning' },
      { de: 'Cisco Networking Academy: CCST IT Support (100-140) · Kursreihe, alle 10 Units', en: 'Cisco Networking Academy: CCST IT Support (100-140) · Full course track' },
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
        name: { de: 'JoBIT Tracker / Routing-Automatisierung', en: 'JoBIT Tracker / Routing Automation' },
        sub: { de: '● Im Team-Einsatz · Eigenentwicklung', en: '● Used in production · Internal tool' },
        desc: {
          de: 'Zur Reduktion manueller Ticketzuweisungen und wiederkehrender Bearbeitungsschritte entwickelt. Weist Support-Tickets regelbasiert dem passenden Bearbeiter zu.',
          en: 'Developed to reduce manual ticket assignments and repetitive triage steps. Assigns support tickets based on rules straight to the right resolver.',
        },
      },
      {
        name: 'KKEEY-Standard',
        sub: { de: '● Standardisierte Methodik · Verifiziert', en: '● Standardized methodology · Verified' },
        desc: {
          de: 'Dokumentierte Methodik für strukturierte, reproduzierbare Fehlerdiagnose — damit Störungen nachvollziehbar gelöst werden statt per Trial-and-Error.',
          en: 'Documented methodology for structured, reproducible fault diagnosis — ensuring incidents are resolved traceably instead of trial-and-error.',
        },
      },
      {
        name: 'KKI Agent-Framework',
        sub: { de: '● In-House Library · Reusable Architecture', en: '● In-House Library · Reusable Architecture' },
        desc: {
          de: 'Wartbare Systembausteine für Automatisierungs-Workflows — zeigt: keine Einzelskripte, sondern strukturierte, modulare Systeme.',
          en: 'Maintainable system components for automation workflows — demonstrating structured, modular system engineering over one-off scripts.',
        },
      },
    ],
  },

  // ─── ZUSATZKOMPETENZ: AI ENGINEERING & AUTOMATION ───────────────────────────
  side: {
    label: { de: 'Zusatzkompetenz', en: 'Additional Qualification' },
    title: { de: 'Zusatzkompetenz: AI Engineering & Automation', en: 'Additional Qualification: AI Engineering & Automation' },
    text: {
      de: 'Ergänzend zu meiner Enterprise-IT-Erfahrung entwickle ich eigenständig Automatisierungs- und KI-Systeme. Die Projekte erweitern mein Profil um Softwareentwicklung, Systemarchitektur, Local-First-Verarbeitung und moderne Mensch-Maschine-Interaktion.',
      en: 'In addition to my Enterprise IT experience, I independently develop automation and AI systems. These projects expand my profile into software engineering, systems architecture, local-first processing, and modern human-machine interaction.',
    },
    items: [
      {
        name: 'Claire (Voice AI & Persona Architecture)',
        desc: {
          de: '● PL2 Prototyp · E1 Architekturdokumentation · Voice-Pipeline, EmotionEngine, Memory-Layer (LiveKit 2.x, Python)',
          en: '● PL2 Prototype · E1 Architecture Docs · Voice pipeline, EmotionEngine, memory layer (LiveKit 2.x, Python)',
        },
      },
      {
        name: 'AuraTone AI',
        desc: {
          de: '● PL2 Prototyp · E1 Architekturdokumentation · Native macOS Audio Workstation · Tauri 2.0 (Rust), Metal GPU 120Hz',
          en: '● PL2 Prototype · E1 Architecture Docs · Native macOS Audio Workstation · Tauri 2.0 (Rust), Metal GPU 120Hz',
        },
      },
      {
        name: 'AI Virtual Calling & Dialog-Systeme',
        desc: {
          de: '● PL2 Prototyp · E1 Demo · WebRTC Voice UI · React, Python FastAPI, Gemini Live API',
          en: '● PL2 Prototype · E1 Demo · WebRTC Voice UI · React, Python FastAPI, Gemini Live API',
        },
      },
    ],
    moreLink: 'https://kkeey92.github.io/CV_KKEEY/',
    moreLabel: { de: 'Mehr im AI-Portfolio →', en: 'More in the AI portfolio →' },
  },

  // ─── KONTAKT ────────────────────────────────────────────────────────────────
  contact: {
    label: { de: 'Kontakt', en: 'Contact' },
    title: { de: 'Lassen Sie uns sprechen.', en: 'Let’s talk.' },
    desc: {
      de: 'Offen für Festanstellungen als IT-Systemadministrator oder IAM-Specialist. Remote · Hybrid · DE & EN.',
      en: 'Open to full-time roles as IT Systems Administrator or IAM Specialist. Remote · Hybrid · DE & EN.',
    },
  },

  // ─── I18N STRINGS ────────────────────────────────────────────────────────────
  i18n: {
    navProfile:  { de: 'Profil',          en: 'Profile' },
    navCareer:   { de: 'Werdegang',       en: 'Career' },
    navSkills:   { de: 'Kompetenzen',     en: 'Skills' },
    navCerts:    { de: 'Zertifikate',     en: 'Certs' },
    navTools:    { de: 'Tools',           en: 'Tools' },
    navContact:  { de: 'Kontakt',         en: 'Contact' },
    namePH:      { de: 'Ihr Name',        en: 'Your name' },
    emailPH:     { de: 'Ihre E-Mail',     en: 'Your email' },
    msgPH:       { de: 'Ihre Nachricht…', en: 'Your message…' },
    submitLabel: { de: 'Nachricht senden →', en: 'Send message →' },
    sentMsg:     { de: '✓ Nachricht gesendet — ich melde mich.', en: '✓ Message sent — I’ll get back to you.' },
    sendingLabel:{ de: 'Wird gesendet…',  en: 'Sending…' },
    sendErr:     { de: 'Fehler — bitte direkt mailen', en: 'Error — please email directly' },
    darkBtnLight:{ de: 'Hellmodus aktivieren', en: 'Switch to light mode' },
    darkBtnDark: { de: 'Dunkelmodus aktivieren', en: 'Switch to dark mode' },
    footerCross: { de: 'Auch von mir: AI-Engineering-Portfolio →', en: 'Also by me: AI engineering portfolio →' },
    downloadNote:{ de: 'Bewerbungsmappe: Anschreiben, Lebenslauf & Tech-Profil (PDF, 4 Seiten)', en: 'Application portfolio: cover letter, CV & tech profile (PDF, 4 pages)' },
  },

};
