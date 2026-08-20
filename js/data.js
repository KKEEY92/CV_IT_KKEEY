/**
 * KKEEY IT-Profil — Inhaltsdatei v2.0
 * Future Orchestrator Interface — KKEEY Liquid Orange
 * Brand: KKI_DESIGN_TOKENS_V1 · KKI_BRAND_STANDARD_V1
 *
 * Neue Sektionen: overview, systems, automation, compliance, impact
 * Bestehende Daten erhalten (hero, profile, career, skills, tools, side, contact, i18n)
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
    cta1: { de: 'IT-Portfolio ansehen', en: 'View IT Portfolio' },
    cta2: { de: 'Bewerbungsmappe (PDF)', en: 'Download CV (PDF)' },
    cta3: { de: 'Kontakt aufnehmen', en: 'Get in touch' },
    available: { de: 'Verfügbar ab sofort', en: 'Available now' },
    caps: {
      de: ['Infrastruktur', 'Automatisierung', 'Compliance', 'Security', 'Monitoring', 'IAM'],
      en: ['Infrastructure', 'Automation', 'Compliance', 'Security', 'Monitoring', 'IAM'],
    },
  },

  // ─── ENTERPRISE OVERVIEW ────────────────────────────────────────────────────
  overview: {
    label: { de: 'Enterprise IT', en: 'Enterprise IT' },
    title: { de: 'Sechs Domänen. Eine Verantwortung.', en: 'Six Domains. One Responsibility.' },
    sub: {
      de: 'Ich orchestriere komplexe IT-Umgebungen über alle Schichten — von der Identität bis zur Governance.',
      en: 'I orchestrate complex IT environments across all layers — from identity to governance.',
    },
    domains: [
      {
        icon: 'cloud',
        title: { de: 'Cloud & Hybrid', en: 'Cloud & Hybrid' },
        sub: { de: 'Microsoft Azure · Entra ID', en: 'Microsoft Azure · Entra ID' },
        desc: { de: 'Azure AD Sync, Entra ID Administration, Hybrid-Join, Conditional Access Policies für bundesweite KRITIS-Umgebungen.', en: 'Azure AD Sync, Entra ID administration, Hybrid Join, Conditional Access Policies for nationwide KRITIS environments.' },
      },
      {
        icon: 'server',
        title: { de: 'On-Prem Infrastructure', en: 'On-Prem Infrastructure' },
        sub: { de: 'Active Directory · Windows Server', en: 'Active Directory · Windows Server' },
        desc: { de: 'Active Directory Administration, GPO-Management, Windows-11-Rollout via Deskcenter Studio für 90.000+ Objekte.', en: 'Active Directory administration, GPO management, Windows 11 rollout via Deskcenter Studio for 90,000+ objects.' },
      },
      {
        icon: 'zap',
        title: { de: 'Automation', en: 'Automation' },
        sub: { de: 'PowerShell · Python · Workflows', en: 'PowerShell · Python · Workflows' },
        desc: { de: 'Eigenentwickelte Automatisierungstools — u.a. Ticket-Routing-System im Team-Einsatz, Migrationsskripte, Provisioning-Workflows.', en: 'Custom automation tools — incl. ticket routing system used in production, migration scripts, provisioning workflows.' },
      },
      {
        icon: 'shield',
        title: { de: 'Security & Endpoint', en: 'Security & Endpoint' },
        sub: { de: 'FortiClient · Sophos · KRITIS', en: 'FortiClient · Sophos · KRITIS' },
        desc: { de: 'Endpoint Security in KRITIS-Infrastruktur, FortiClient/Sophos-Administration, sicherheitskonforme Konfiguration von 90.000+ Objekten.', en: 'Endpoint security in critical infrastructure, FortiClient/Sophos administration, security-compliant configuration of 90,000+ objects.' },
      },
      {
        icon: 'activity',
        title: { de: 'Monitoring & Operations', en: 'Monitoring & Operations' },
        sub: { de: 'Omnitracker · Innovaphone · PBX', en: 'Omnitracker · Innovaphone · PBX' },
        desc: { de: 'IT-Betrieb und Entstörung in KRITIS-Umgebung, Ticket-basierter Support-Betrieb, PBX-Administration und Systemüberwachung.', en: 'IT operations and incident resolution in critical infrastructure, ticket-based support operations, PBX administration and system monitoring.' },
      },
      {
        icon: 'layout',
        title: { de: 'Governance & IAM', en: 'Governance & IAM' },
        sub: { de: 'IAM · RBAC · Compliance', en: 'IAM · RBAC · Compliance' },
        desc: { de: 'Benutzer- und Berechtigungsverwaltung, RBAC-Strukturierung, Einhaltung von Compliance-Anforderungen in regulierten Umgebungen.', en: 'User and permission management, RBAC structuring, compliance requirements in regulated environments.' },
      },
    ],
  },

  // ─── SYSTEMS & ARCHITECTURE ─────────────────────────────────────────────────
  systems: {
    label: { de: 'Architektur', en: 'Architecture' },
    title: { de: 'Stack & Systemlandschaft', en: 'Stack & System Landscape' },
    sub: {
      de: 'Typische Umgebungen, die ich administriert und weiterentwickelt habe.',
      en: 'Typical environments I have administered and extended.',
    },
    tiers: [
      { label: { de: 'Identity', en: 'Identity' },    tech: 'Active Directory · Microsoft Entra ID', detail: { de: 'Core IAM Layer', en: 'Core IAM Layer' } },
      { label: { de: 'Clients', en: 'Clients' },      tech: 'Windows 11 · Deskcenter Studio · Citrix', detail: { de: 'Endpoint Management', en: 'Endpoint Management' } },
      { label: { de: 'Security', en: 'Security' },    tech: 'FortiClient · Sophos · NetScaler', detail: { de: 'Perimeter & Endpoint', en: 'Perimeter & Endpoint' } },
      { label: { de: 'Automation', en: 'Automation' }, tech: 'PowerShell · Python · REST APIs', detail: { de: 'Orchestration Layer', en: 'Orchestration Layer' } },
      { label: { de: 'Operations', en: 'Operations' }, tech: 'Omnitracker · Innovaphone PBX', detail: { de: 'ITSM & Comms', en: 'ITSM & Comms' } },
    ],
    cards: [
      {
        title: { de: 'KRITIS-Infrastruktur bei JBS', en: 'Critical Infrastructure at JBS' },
        desc: { de: 'Bundesweite Verwaltung von 90.000+ AD-Objekten und Nutzerkonten bei den Johanniter Bundes-IT-Services. Citrix-Umgebung, Hybrid Azure AD Join, Windows-11-Migration, FortiClient/Sophos Endpoint Security.', en: 'Nationwide management of 90,000+ AD objects and user accounts at Johanniter Bundes-IT-Services. Citrix environment, Hybrid Azure AD Join, Windows 11 migration, FortiClient/Sophos endpoint security.' },
        tags: ['Active Directory', 'Entra ID', 'Citrix', 'KRITIS', 'Windows 11'],
      },
      {
        title: { de: 'BAUHAUS IT (14 Jahre Praxis)', en: 'BAUHAUS IT (14 years hands-on)' },
        desc: { de: 'Technische Verantwortung für Warenwirtschaftssysteme, Hardware und IT-Infrastruktur im laufenden Handelsbetrieb. Tier-1-bis-3-Support mit direkter Anwenderkenntnis aus dem Produktivbetrieb.', en: 'Technical responsibility for merchandise management systems, hardware and IT infrastructure in live retail operations. Tier 1–3 support with direct user knowledge from production environments.' },
        tags: ['Warenwirtschaft', '1st–3rd Level', 'Hardware', 'Prozessoptimierung'],
      },
    ],
  },

  // ─── AUTOMATION & AGENTS ────────────────────────────────────────────────────
  automation: {
    label: { de: 'Automation', en: 'Automation' },
    title: { de: 'Orchestrierung & Automatisierung', en: 'Orchestration & Automation' },
    sub: {
      de: 'Ich baue Systeme, die Prozesse selbst orchestrieren — nicht nur ausführen.',
      en: 'I build systems that orchestrate processes on their own — not just execute them.',
    },
    pipeline: [
      { num: '01', title: { de: 'Ereignis-Trigger', en: 'Event Trigger' }, desc: { de: 'Neue Tickets, AD-Änderungen, Alerts oder Zeitplan-Auslöser', en: 'New tickets, AD changes, alerts or scheduled triggers' }, status: 'done' },
      { num: '02', title: { de: 'Klassifikation', en: 'Classification' }, desc: { de: 'Regelbasierte Kategorisierung und Prioritätszuweisung', en: 'Rule-based categorization and priority assignment' }, status: 'done' },
      { num: '03', title: { de: 'Routing & Zuweisung', en: 'Routing & Assignment' }, desc: { de: 'Automatische Zuweisung an den richtigen Bearbeiter (Ticket-Tool im Team-Einsatz)', en: 'Automatic assignment to the right agent (ticket tool used in production)' }, status: 'running', active: true },
      { num: '04', title: { de: 'Ausführung', en: 'Execution' }, desc: { de: 'PowerShell / Python / REST-API-Calls für Provisionierung, Migration oder Konfiguration', en: 'PowerShell / Python / REST API calls for provisioning, migration or configuration' }, status: 'queued' },
      { num: '05', title: { de: 'Audit & Logging', en: 'Audit & Logging' }, desc: { de: 'Nachvollziehbare Protokollierung aller Aktionen für Compliance und Review', en: 'Traceable logging of all actions for compliance and review' }, status: 'queued' },
    ],
    agents: [
      { icon: '⚡', name: { de: 'Ticket-Router', en: 'Ticket Router' }, desc: { de: 'Regelbasierte Zuweisung für Support-Tickets', en: 'Rule-based ticket assignment in production' } },
      { icon: '🔐', name: { de: 'IAM-Provisioner', en: 'IAM Provisioner' }, desc: { de: 'AD/Entra ID Benutzer-Lifecycle Automation', en: 'AD/Entra ID user lifecycle automation' } },
      { icon: '🔄', name: 'KKEEY Agent Framework', desc: { de: 'Wiederverwendbare Bausteine für Workflow-Automatisierung', en: 'Reusable building blocks for workflow automation' } },
    ],
  },

  // ─── COMPLIANCE & GOVERNANCE ─────────────────────────────────────────────────
  compliance: {
    label: { de: 'Governance', en: 'Governance' },
    title: { de: 'Compliance & Betriebssicherheit', en: 'Compliance & Operational Security' },
    sub: {
      de: 'Regulierte Umgebungen erfordern Struktur. Ich liefere sie.',
      en: 'Regulated environments require structure. I deliver it.',
    },
    cards: [
      {
        title: { de: 'KRITIS-Compliance', en: 'Critical Infrastructure Compliance' },
        status: 'verified',
        statusLabel: { de: 'Verifiziert', en: 'Verified' },
        items: [
          { de: 'Administration bundesweiter KRITIS-Infrastruktur bei JBS', en: 'Administration of nationwide KRITIS infrastructure at JBS' },
          { de: 'Strikte Trennung von Berechtigungen und Rollen', en: 'Strict separation of permissions and roles' },
          { de: 'Nachvollziehbare Änderungsdokumentation', en: 'Traceable change documentation' },
        ],
      },
      {
        title: 'Identity & Access Management',
        status: 'verified',
        statusLabel: { de: 'Verifiziert', en: 'Verified' },
        items: [
          { de: 'RBAC-strukturierte Benutzer- und Gruppensteuerung', en: 'RBAC-structured user and group management' },
          { de: 'Microsoft Entra ID Conditional Access Policies', en: 'Microsoft Entra ID Conditional Access Policies' },
          { de: '90.000+ AD-Objekte unter zentraler Governance', en: '90,000+ AD objects under central governance' },
        ],
      },
      {
        title: { de: 'Endpoint & Perimeter Security', en: 'Endpoint & Perimeter Security' },
        status: 'active',
        statusLabel: { de: 'Aktiv', en: 'Active' },
        items: [
          { de: 'FortiClient & Sophos Endpoint-Verwaltung in KRITIS', en: 'FortiClient & Sophos endpoint management in KRITIS' },
          { de: 'NetScaler-Administration und Zugriffskontrolle', en: 'NetScaler administration and access control' },
          { de: 'Sicherheitskonforme Windows-11-Migration', en: 'Security-compliant Windows 11 migration' },
        ],
      },
      {
        title: 'KKEEY Standard — Methodik',
        status: 'active',
        statusLabel: { de: 'In Betrieb', en: 'In Production' },
        items: [
          { de: 'Dokumentierte Methodik für reproduzierbare Fehlerdiagnose', en: 'Documented methodology for reproducible fault diagnosis' },
          { de: 'Strukturierte Störungsanalyse statt Trial-and-Error', en: 'Structured incident analysis instead of trial and error' },
          { de: 'Verifiziert im KRITIS-Produktivbetrieb', en: 'Verified in KRITIS production operations' },
        ],
      },
    ],
  },

  // ─── IMPACT / CASE STORIES ───────────────────────────────────────────────────
  impact: {
    label: { de: 'Impact', en: 'Impact' },
    title: { de: 'Messbare Ergebnisse.', en: 'Measurable Results.' },
    sub: {
      de: 'Praxis, die zählt — nicht Theorie.',
      en: 'Practice that counts — not theory.',
    },
    cases: [
      {
        metric: '90k+',
        unit: '',
        title: { de: 'AD-Objekte administriert', en: 'AD Objects administered' },
        desc: { de: 'Bundesweite Verwaltung der gesamten KRITIS-AD-Struktur bei den Johanniter Bundes-IT-Services — Benutzerkonten, Gruppen, Richtlinien und Berechtigungen für die gesamte Organisation.', en: 'Nationwide management of the entire KRITIS AD structure at Johanniter Bundes-IT-Services — user accounts, groups, policies and permissions for the entire organization.' },
        tag: { de: 'IAM · KRITIS · JBS', en: 'IAM · KRITIS · JBS' },
      },
      {
        metric: '14',
        unit: { de: 'Jahre', en: 'Years' },
        title: { de: 'Produktivbetrieb-Erfahrung', en: 'Production Experience' },
        desc: { de: 'Kontinuierlicher Betrieb von IT-Infrastruktur im laufenden Handelsbetrieb bei BAUHAUS — von Tier-1-Support bis zur Prozessoptimierung. Ich kenne echte Systeme unter echtem Produktionsdruck.', en: 'Continuous IT infrastructure operation in live retail at BAUHAUS — from Tier 1 support to process optimization. I know real systems under real production pressure.' },
        tag: { de: 'Operations · Tier 1–3', en: 'Operations · Tier 1–3' },
      },
      {
        metric: '0',
        unit: { de: 'Trial-&-Error', en: 'Trial & Error' },
        title: { de: 'Strukturierte Diagnose', en: 'Structured Diagnostics' },
        desc: { de: 'Eigenentwickelter KKEEY-Standard für reproduzierbare, nachvollziehbare Fehlerdiagnose. Eigenentwickeltes Ticket-Routing-Tool im Team-Einsatz. Automatisierung vor Improvisation — immer.', en: 'Custom KKEEY Standard for reproducible, traceable fault diagnosis. Custom ticket routing tool used in production. Automation before improvisation — always.' },
        tag: { de: 'Methodik · Automation', en: 'Methodology · Automation' },
      },
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
          de: 'Administration einer bundesweiten KRITIS-Infrastrukturumgebung für über 90.000+ User und AD-Objekte der gesamten Organisation: Active Directory, Microsoft Entra ID, Citrix (inkl. NetScaler), Omnitracker, Innovaphone PBX. Windows-11-Migration via Deskcenter Studio und modifiziertem PowerShell-Skript. Endpoint-Security mit FortiClient & Sophos. Eigenentwicklungen: Tool zur automatisierten Ticket-Zuweisung sowie der KKEEY-Standard.',
          en: 'Administration of a nationwide critical-infrastructure environment for over 90,000+ users and AD objects: Active Directory, Microsoft Entra ID, Citrix (incl. NetScaler), Omnitracker, Innovaphone PBX. Windows 11 migration via Deskcenter Studio and modified PowerShell script. Endpoint security via FortiClient & Sophos. Own developments: automated ticket assignment tool and the KKEEY Standard.',
        },
        tags: ['Active Directory', 'Entra ID', 'Citrix', 'NetScaler', 'Deskcenter Studio', 'PowerShell', 'Windows 11', 'KRITIS', 'FortiClient', 'Sophos'],
      },
      {
        period: { de: '2010 – 2024 · 14 Jahre', en: '2010 – 2024 · 14 years' },
        role: { de: 'IT-Beauftragter & Inventory Management', en: 'IT Officer & Inventory Management' },
        company: 'BAUHAUS',
        active: false,
        desc: {
          de: 'Tier-1-bis-3-Support, technische Betreuung der Warenwirtschaft, Hardware- und Prozessverantwortung im laufenden Handelsbetrieb. 14 Jahre operative Praxis: Ich kenne den Arbeitsalltag der Anwender aus erster Hand — welche Prozesse funktionieren und wo Systeme im Betrieb brechen.',
          en: 'Tier 1–3 support, technical ownership of the merchandise management system, hardware and process responsibility in day-to-day retail operations. 14 years of hands-on practice: I know users\u2019 daily work first-hand \u2014 which processes work and where systems break in production.',
        },
        tags: ['1st–3rd-Level-Support', 'Warenwirtschaft', 'Prozessoptimierung', 'Anwenderbetreuung'],
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
        items: [{ de: 'Windows-11-Migrationen', en: 'Windows 11 migrations' }, 'Deskcenter Studio', 'Citrix (NetScaler)', 'Omnitracker', 'Innovaphone PBX', { de: 'Hardware-Betreuung', en: 'Hardware support' }],
      },
      {
        label: { de: 'Security & Netzwerk', en: 'Security & Network' },
        items: ['FortiClient', 'Sophos', { de: 'Endpoint Security', en: 'Endpoint Security' }, { de: 'KRITIS-Infrastruktur', en: 'Critical Infrastructure' }],
      },
      {
        label: { de: 'Automatisierung & Scripting', en: 'Automation & Scripting' },
        items: ['PowerShell', 'Python 3.12+', 'TypeScript', 'Docker & Cloud Run', { de: 'Prozessautomatisierung', en: 'Process automation' }, { de: 'Eigene Workflow-Tools', en: 'Custom workflow tools' }],
      },
      {
        label: { de: 'Support & Methodik', en: 'Support & Methodology' },
        items: [{ de: '1st–3rd-Level-Support', en: 'Tier 1–3 support' }, { de: 'Ticketsysteme', en: 'Ticketing systems' }, { de: 'Warenwirtschaftssysteme', en: 'Merchandise management systems' }, { de: 'Reproduzierbare Fehlerdiagnose', en: 'Reproducible fault diagnosis' }],
      },
      {
        label: { de: 'AI Engineering & Innovation', en: 'AI Engineering & Innovation' },
        items: ['LiveKit 2.x Voice AI', 'Gemini API / Vertex AI', 'Local LLMs (LM Studio)', 'Rust / Tauri 2.0', 'Audio DSP & Metal GPU', { de: 'Agenten-Architekturen', en: 'Agentic Architectures' }],
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
        sub: { de: '● Im Team-Einsatz · Eigenentwicklung', en: '● Used in production · Internal tool' },
        desc: {
          de: 'Selbstentwickeltes Tool, das eingehende Support-Tickets regelbasiert dem passenden Bearbeiter zuweist. Ersetzt tägliche manuelle Verteilarbeit.',
          en: 'Self-developed tool that assigns incoming support tickets to the right agent based on rules. Replaces daily manual triage work.',
        },
      },
      {
        name: 'KKEEY-Standard',
        sub: { de: '● Standardisierte Methodik · Verifiziert', en: '● Standardized methodology · Verified' },
        desc: {
          de: 'Dokumentierte Methodik für strukturierte, reproduzierbare Fehlerdiagnose — damit Störungen nachvollziehbar gelöst werden statt per Trial-and-Error.',
          en: 'Documented methodology for structured, reproducible fault diagnosis — so incidents are resolved traceably instead of by trial and error.',
        },
      },
      {
        name: 'KKI Agent-Framework',
        sub: { de: '● Aktives Framework · In-House Library', en: '● Active framework · Internal library' },
        desc: {
          de: 'Privat entwickelte Agentenstruktur mit wiederverwendbaren Bausteinen für Automatisierungs-Workflows — die gemeinsame Grundlage meiner eigenen Tools.',
          en: 'Privately developed agent structure with reusable building blocks for automation workflows — the shared foundation of my own tools.',
        },
      },
    ],
  },

  // ─── NEBENPROJEKTE ──────────────────────────────────────────────────────────
  side: {
    label: { de: 'Zusatzqualifikation', en: 'Additional qualification' },
    title: { de: 'Nebenprojekte: KI-Entwicklung', en: 'Side projects: AI development' },
    text: {
      de: 'Neben der Administration entwickle ich KI-gestützte Anwendungen — ein zusätzliches Werkzeug, um Automatisierung weiterzudenken.',
      en: 'Alongside administration I build AI-assisted applications — an additional tool for taking automation further.',
    },
    items: [
      { name: 'Claire V2.5 Native Audio', desc: { de: '● Produktiv v2.5 · Voice-AI-Agent · LiveKit 2.x, Python, ~200ms Latenz', en: '● Production v2.5 · Voice AI agent · LiveKit 2.x, Python, ~200ms latency' } },
      { name: 'AuraTone AI v2.0', desc: { de: '● Standalone v2.0 · Native macOS Audio Workstation · Tauri 2.0 (Rust), Metal GPU 120Hz', en: '● Standalone v2.0 · Native macOS Audio Workstation · Tauri 2.0 (Rust), Metal GPU 120Hz' } },
      { name: 'KKI Agent-Framework', desc: { de: '● Aktives Framework · Wiederverwendbare Bausteine für Automation-Workflows', en: '● Active framework · Reusable building blocks for automation workflows' } },
    ],
    moreLink: 'https://kkeey92.github.io/CV_KKEEY/',
    moreLabel: { de: 'Mehr im AI-Portfolio →', en: 'More in the AI portfolio →' },
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
    navOverview:   { de: 'Überblick',     en: 'Overview' },
    navSystems:    { de: 'Systeme',       en: 'Systems' },
    navAutomation: { de: 'Automation',    en: 'Automation' },
    navCareer:     { de: 'Werdegang',     en: 'Career' },
    navSkills:     { de: 'Skills',        en: 'Skills' },
    navContact:    { de: 'Kontakt',       en: 'Contact' },
    namePH:        { de: 'Ihr Name',      en: 'Your name' },
    emailPH:       { de: 'Ihre E-Mail',   en: 'Your email' },
    msgPH:         { de: 'Ihre Nachricht\u2026', en: 'Your message\u2026' },
    submitLabel:   { de: 'Nachricht senden \u2192', en: 'Send message \u2192' },
    sentMsg:       { de: '\u2713 Nachricht gesendet \u2014 ich melde mich.', en: '\u2713 Message sent \u2014 I\u2019ll get back to you.' },
    sendingLabel:  { de: 'Wird gesendet\u2026', en: 'Sending\u2026' },
    sendErr:       { de: 'Fehler \u2014 bitte direkt mailen', en: 'Error \u2014 please email directly' },
    darkBtnLight:  { de: 'Hellmodus aktivieren', en: 'Switch to light mode' },
    darkBtnDark:   { de: 'Dunkelmodus aktivieren', en: 'Switch to dark mode' },
    footerCross:   { de: 'AI-Engineering-Portfolio ansehen \u2192', en: 'View AI Engineering Portfolio \u2192' },
    downloadNote:  { de: 'Bewerbungsmappe: Anschreiben, Lebenslauf & Tech-Profil (PDF)', en: 'Application portfolio: cover letter, CV & tech profile (PDF)' },
    systemBadge:   { de: 'ORCHESTRATOR AKTIV', en: 'ORCHESTRATOR ACTIVE' },
  },
};
