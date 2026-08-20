/**
 * KKEEY IT-Profil — Inhaltsdatei v3.0
 * Future Orchestrator Interface — KKEEY Liquid Glass (Orange / Azure)
 * Multilingual: DE / EN / FR / UK (Ukrainisch)
 * E-Mails: kuck_kevin@icloud.com · Kkeey_IT@iCloud.com
 */
window.KKIT_DATA = {

  // ─── HERO & TYPED ROLES ─────────────────────────────────────────────────────
  hero: {
    greeting: {
      de: 'System Interface · Future Orchestrator',
      en: 'System Interface · Future Orchestrator',
      fr: 'Interface Système · Orchestrateur Futur',
      uk: 'Системний Інтерфейс · Future Orchestrator',
    },
    name: 'Kevin Kuck',
    roles: {
      de: [
        'IT-Administrator · Systemadministration',
        'Identity & Access Management (AD · Entra ID)',
        'KRITIS-Infrastruktur & Endpoint Governance',
        'PowerShell- & Workflow-Orchestrierung',
        'Enterprise Support & Prozessautomatisierung',
      ],
      en: [
        'IT Administrator · System Administration',
        'Identity & Access Management (AD · Entra ID)',
        'Critical Infrastructure & Endpoint Governance',
        'PowerShell & Workflow Orchestration',
        'Enterprise Support & Process Automation',
      ],
      fr: [
        'Administrateur IT · Gestion des Systèmes',
        'Gestion des Identités et Accès (AD · Entra ID)',
        'Infrastructures Critiques & Sécurité des Endpoints',
        'Orchestration des Workflows & PowerShell',
        'Support Entreprise & Automatisation des Processus',
      ],
      uk: [
        'IT-Адміністратор · Системне адміністрування',
        'Керування ідентифікацією та доступом (AD · Entra ID)',
        'Критична інфраструктура (KRITIS) & Endpoint Governance',
        'PowerShell & Оркестрація робочих процесів',
        'Enterprise Підтримка & Автоматизація процесів',
      ],
    },
    meta: {
      de: '15 Jahre IT-Praxis · KRITIS-erfahren · Butzbach · Remote / Hybrid',
      en: '15 years of IT practice · Critical-infrastructure experience · Butzbach, Germany · Remote / Hybrid',
      fr: '15 ans d\'expérience IT · Infrastructures critiques · Butzbach · Distanciel / Hybride',
      uk: '15 років IT-практики · Досвід роботи з KRITIS · Буцбах · Remote / Hybrid',
    },
    cta1: { de: 'IT-Portfolio ansehen', en: 'View IT Portfolio', fr: 'Voir le portfolio IT', uk: 'Переглянути IT-портфоліо' },
    cta2: { de: 'Bewerbungsmappe (PDF)', en: 'Download CV (PDF)', fr: 'Dossier de candidature (PDF)', uk: 'Резюме / Портфоліо (PDF)' },
    cta3: { de: 'Kontakt aufnehmen', en: 'Get in touch', fr: 'Me contacter', uk: 'Зв\'язатися' },
    available: {
      de: 'Verfügbar ab sofort',
      en: 'Available now',
      fr: 'Disponible immédiatement',
      uk: 'Доступний зараз',
    },
    caps: {
      de: ['Infrastruktur', 'Automatisierung', 'Compliance', 'Security', 'Monitoring', 'IAM'],
      en: ['Infrastructure', 'Automation', 'Compliance', 'Security', 'Monitoring', 'IAM'],
      fr: ['Infrastructure', 'Automatisation', 'Conformité', 'Sécurité', 'Monitoring', 'IAM'],
      uk: ['Інфраструктура', 'Автоматизація', 'Відповідність', 'Безпека', 'Моніторинг', 'IAM'],
    },
  },

  // ─── ENTERPRISE OVERVIEW ────────────────────────────────────────────────────
  overview: {
    label: { de: 'Enterprise IT', en: 'Enterprise IT', fr: 'IT d\'Entreprise', uk: 'Enterprise IT' },
    title: {
      de: 'Sechs Domänen. Eine Verantwortung.',
      en: 'Six Domains. One Responsibility.',
      fr: 'Six Domaines. Une Responsabilité.',
      uk: 'Шість Доменів. Одна Відповідальність.',
    },
    sub: {
      de: 'Orchestrierung komplexer IT-Umgebungen über alle Schichten — von der Identität bis zur Governance.',
      en: 'Orchestrating complex IT environments across all layers — from identity to governance.',
      fr: 'Orchestration d\'environnements informatiques complexes à tous les niveaux — de l\'identité à la gouvernance.',
      uk: 'Оркестрація комплексних IT-середовищ на всіх рівнях — від ідентифікації до управління.',
    },
    domains: [
      {
        icon: 'cloud',
        title: { de: 'Cloud & Hybrid', en: 'Cloud & Hybrid', fr: 'Cloud & Hybride', uk: 'Cloud & Hybrid' },
        sub: { de: 'Microsoft Azure · Entra ID', en: 'Microsoft Azure · Entra ID', fr: 'Microsoft Azure · Entra ID', uk: 'Microsoft Azure · Entra ID' },
        desc: {
          de: 'Azure AD Sync, Entra ID Administration, Hybrid-Join, Conditional Access Policies für bundesweite KRITIS-Umgebungen.',
          en: 'Azure AD Sync, Entra ID administration, Hybrid Join, Conditional Access Policies for nationwide KRITIS environments.',
          fr: 'Synchronisation Azure AD, administration Entra ID, jonction hybride et stratégies d\'accès conditionnel.',
          uk: 'Синхронізація Azure AD, адміністрування Entra ID, Hybrid-Join, політики Conditional Access для KRITIS.',
        },
      },
      {
        icon: 'server',
        title: { de: 'On-Prem Infrastructure', en: 'On-Prem Infrastructure', fr: 'Infrastructure Sur Site', uk: 'On-Prem Інфраструктура' },
        sub: { de: 'Active Directory · Windows Server', en: 'Active Directory · Windows Server', fr: 'Active Directory · Windows Server', uk: 'Active Directory · Windows Server' },
        desc: {
          de: 'Active Directory Administration, GPO-Management, Windows-11-Rollout via Deskcenter Studio für 90.000+ Objekte.',
          en: 'Active Directory administration, GPO management, Windows 11 rollout via Deskcenter Studio for 90,000+ objects.',
          fr: 'Administration Active Directory, GPO, déploiement de Windows 11 via Deskcenter Studio pour 90.000+ objets.',
          uk: 'Адміністрування Active Directory, керування GPO, розгортання Windows 11 через Deskcenter Studio для 90 000+ об\'єктів.',
        },
      },
      {
        icon: 'zap',
        title: { de: 'Automation', en: 'Automation', fr: 'Automatisation', uk: 'Автоматизація' },
        sub: { de: 'PowerShell · Python · Workflows', en: 'PowerShell · Python · Workflows', fr: 'PowerShell · Python · Workflows', uk: 'PowerShell · Python · Workflows' },
        desc: {
          de: 'Eigenentwickelte Automatisierungstools — u.a. Ticket-Routing-System im Team-Einsatz, Migrationsskripte, Provisioning-Workflows.',
          en: 'Custom automation tools — incl. ticket routing system used in production, migration scripts, provisioning workflows.',
          fr: 'Outils d\'automatisation personnalisés — système de routage de tickets en production, scripts de migration.',
          uk: 'Власні інструменти автоматизації — система маршрутизації тікетів у продакшні, міграційні скрипти, робочі процеси.',
        },
      },
      {
        icon: 'shield',
        title: { de: 'Security & Endpoint', en: 'Security & Endpoint', fr: 'Sécurité & Endpoints', uk: 'Безпека & Endpoints' },
        sub: { de: 'FortiClient · Sophos · KRITIS', en: 'FortiClient · Sophos · KRITIS', fr: 'FortiClient · Sophos · KRITIS', uk: 'FortiClient · Sophos · KRITIS' },
        desc: {
          de: 'Endpoint Security in KRITIS-Infrastruktur, FortiClient/Sophos-Administration, sicherheitskonforme Konfiguration von 90.000+ Objekten.',
          en: 'Endpoint security in critical infrastructure, FortiClient/Sophos administration, security-compliant configuration of 90,000+ objects.',
          fr: 'Sécurité des endpoints en infrastructure critique, administration FortiClient/Sophos, conformité sécuritaire.',
          uk: 'Безпека кінцевих пристроїв у критичній інфраструктурі, адміністрування FortiClient/Sophos для 90 000+ об\'єктів.',
        },
      },
      {
        icon: 'activity',
        title: { de: 'Monitoring & Operations', en: 'Monitoring & Operations', fr: 'Supervision & Exploitation', uk: 'Моніторинг & Операції' },
        sub: { de: 'Omnitracker · Innovaphone · PBX', en: 'Omnitracker · Innovaphone · PBX', fr: 'Omnitracker · Innovaphone · PBX', uk: 'Omnitracker · Innovaphone · PBX' },
        desc: {
          de: 'IT-Betrieb und Entstörung in KRITIS-Umgebung, Ticket-basierter Support-Betrieb, PBX-Administration und Systemüberwachung.',
          en: 'IT operations and incident resolution in critical infrastructure, ticket-based support operations, PBX administration and system monitoring.',
          fr: 'Exploitation et résolution d\'incidents en environnement critique, gestion des tickets, administration PBX.',
          uk: 'IT-операції та усунення інцидентів у KRITIS-середовищі, підтримка за тікетами, адміністрування PBX.',
        },
      },
      {
        icon: 'layout',
        title: { de: 'Governance & IAM', en: 'Governance & IAM', fr: 'Gouvernance & IAM', uk: 'Governance & IAM' },
        sub: { de: 'IAM · RBAC · Compliance', en: 'IAM · RBAC · Compliance', fr: 'IAM · RBAC · Conformité', uk: 'IAM · RBAC · Відповідність' },
        desc: {
          de: 'Benutzer- und Berechtigungsverwaltung, RBAC-Strukturierung, Einhaltung von Compliance-Anforderungen in regulierten Umgebungen.',
          en: 'User and permission management, RBAC structuring, compliance requirements in regulated environments.',
          fr: 'Gestion des utilisateurs et des permissions, structuration RBAC, exigences de conformité dans des secteurs régulés.',
          uk: 'Керування користувачами та правами, структура RBAC, дотримання вимог комплаєнсу в регульованих середовищах.',
        },
      },
    ],
  },

  // ─── SYSTEMS & ARCHITECTURE ─────────────────────────────────────────────────
  systems: {
    label: { de: 'Architektur', en: 'Architecture', fr: 'Architecture', uk: 'Архітектура' },
    title: { de: 'Stack & Systemlandschaft', en: 'Stack & System Landscape', fr: 'Stack & Paysage Système', uk: 'Стек & Системний ландшафт' },
    sub: {
      de: 'Erprobte Enterprise-Umgebungen unter realem Produktionsdruck.',
      en: 'Battle-tested enterprise environments under real production pressure.',
      fr: 'Environnements d\'entreprise éprouvés sous pression opérationnelle.',
      uk: 'Перевірені корпоративні середовища під реальним навантаженням.',
    },
    tiers: [
      { label: { de: 'Identity', en: 'Identity', fr: 'Identité', uk: 'Identity' }, tech: 'Active Directory · Microsoft Entra ID', detail: { de: 'Core IAM Layer', en: 'Core IAM Layer', fr: 'Couche IAM Principale', uk: 'Базовий шар IAM' } },
      { label: { de: 'Clients', en: 'Clients', fr: 'Clients', uk: 'Clients' }, tech: 'Windows 11 · Deskcenter Studio · Citrix', detail: { de: 'Endpoint Management', en: 'Endpoint Management', fr: 'Gestion des Postes', uk: 'Керування кінцевими пристроями' } },
      { label: { de: 'Security', en: 'Security', fr: 'Sécurité', uk: 'Security' }, tech: 'FortiClient · Sophos · NetScaler', detail: { de: 'Perimeter & Endpoint', en: 'Perimeter & Endpoint', fr: 'Périmètre & Sécurité', uk: 'Периметр і кінцеві точки' } },
      { label: { de: 'Automation', en: 'Automation', fr: 'Automatisation', uk: 'Automation' }, tech: 'PowerShell · Python · REST APIs', detail: { de: 'Orchestration Layer', en: 'Orchestration Layer', fr: 'Couche d\'Orchestration', uk: 'Шар оркестрації' } },
      { label: { de: 'Operations', en: 'Operations', fr: 'Opérations', uk: 'Operations' }, tech: 'Omnitracker · Innovaphone PBX', detail: { de: 'ITSM & Comms', en: 'ITSM & Comms', fr: 'ITSM & Téléphonie', uk: 'ITSM & Зв\'язок' } },
    ],
    cards: [
      {
        title: { de: 'KRITIS-Infrastruktur bei JoBITS', en: 'Critical Infrastructure at JoBITS', fr: 'Infrastructure Critique chez JoBITS', uk: 'Критична інфраструктура в JoBITS' },
        desc: {
          de: 'Bundesweite Verwaltung von 90.000+ AD-Objekten und Nutzerkonten bei den Johanniter Bundes-IT-Services. Citrix-Umgebung, Hybrid Azure AD Join, Windows-11-Migration, FortiClient/Sophos Endpoint Security.',
          en: 'Nationwide management of 90,000+ AD objects and user accounts at Johanniter Bundes-IT-Services. Citrix environment, Hybrid Azure AD Join, Windows 11 migration, FortiClient/Sophos endpoint security.',
          fr: 'Gestion nationale de 90.000+ objets AD chez Johanniter Bundes-IT-Services. Environnement Citrix, Hybrid Azure AD Join, migration Windows 11, sécurité FortiClient/Sophos.',
          uk: 'Всенімецьке адміністрування 90 000+ AD-об\'єктів у Johanniter Bundes-IT-Services. Citrix, Hybrid Azure AD Join, міграція Windows 11, FortiClient/Sophos.',
        },
        tags: ['Active Directory', 'Entra ID', 'Citrix', 'KRITIS', 'Windows 11'],
      },
      {
        title: { de: 'BAUHAUS IT (14 Jahre Praxis)', en: 'BAUHAUS IT (14 years hands-on)', fr: 'BAUHAUS IT (14 ans de pratique)', uk: 'BAUHAUS IT (14 років практики)' },
        desc: {
          de: 'Technische Verantwortung für Warenwirtschaftssysteme, Hardware und IT-Infrastruktur im laufenden Handelsbetrieb. Tier-1-bis-3-Support mit direkter Anwenderkenntnis aus dem Produktivbetrieb.',
          en: 'Technical responsibility for merchandise management systems, hardware and IT infrastructure in live retail operations. Tier 1–3 support with direct user knowledge from production environments.',
          fr: 'Responsabilité technique des systèmes ERP, du matériel et de l\'infrastructure en milieu commercial. Support Niveaux 1 à 3 avec maîtrise opérationnelle.',
          uk: 'Технічна відповідальність за системи товарообігу, обладнання та IT-інфраструктуру. Підтримка 1-3 рівнів із глибоким розумінням щоденних процесів.',
        },
        tags: ['Warenwirtschaft', '1st–3rd Level', 'Hardware', 'Prozessoptimierung'],
      },
    ],
  },

  // ─── AUTOMATION & AGENTS ────────────────────────────────────────────────────
  automation: {
    label: { de: 'Automation', en: 'Automation', fr: 'Automatisation', uk: 'Автоматизація' },
    title: { de: 'Orchestrierung & Automatisierung', en: 'Orchestration & Automation', fr: 'Orchestration & Automatisation', uk: 'Оркестрація & Автоматизація' },
    sub: {
      de: 'Systeme, die Prozesse selbstständig und fehlerfrei steuern — nicht nur Skripte ausführen.',
      en: 'Systems that steer processes autonomously and fault-tolerantly — not just running isolated scripts.',
      fr: 'Des systèmes qui orchestrent les processus de façon autonome et robuste.',
      uk: 'Системи, які автономно та безпомилково керують процесами, а не просто виконують скрипти.',
    },
    pipeline: [
      { num: '01', title: { de: 'Ereignis-Trigger', en: 'Event Trigger', fr: 'Déclencheur d\'Événement', uk: 'Тригер події' }, desc: { de: 'Neue Tickets, AD-Änderungen, Alerts oder Zeitplan-Auslöser', en: 'New tickets, AD changes, alerts or scheduled triggers', fr: 'Nouveaux tickets, modifications AD, alertes ou planificateurs', uk: 'Нові тікети, зміни в AD, алерти або розклад' }, status: 'done' },
      { num: '02', title: { de: 'Klassifikation', en: 'Classification', fr: 'Classification', uk: 'Класифікація' }, desc: { de: 'Regelbasierte Kategorisierung und Prioritätszuweisung', en: 'Rule-based categorization and priority assignment', fr: 'Catégorisation basée sur des règles et priorité', uk: 'Категоризація на основі правил і пріоритезація' }, status: 'done' },
      { num: '03', title: { de: 'Routing & Zuweisung', en: 'Routing & Assignment', fr: 'Routage & Assignation', uk: 'Маршрутизація & Призначення' }, desc: { de: 'Automatische Zuweisung an den richtigen Bearbeiter (Ticket-Tool im Team-Einsatz)', en: 'Automatic assignment to the right agent (ticket tool used in production)', fr: 'Attribution automatique à l\'agent compétent (outil en production)', uk: 'Автоматичне призначення відповідального (інструмент у продакшні)' }, status: 'running', active: true },
      { num: '04', title: { de: 'Ausführung', en: 'Execution', fr: 'Exécution', uk: 'Виконання' }, desc: { de: 'PowerShell / Python / REST-API-Calls für Provisionierung, Migration oder Konfiguration', en: 'PowerShell / Python / REST API calls for provisioning, migration or configuration', fr: 'Appels PowerShell / Python / REST API pour provisioning ou migration', uk: 'PowerShell / Python / REST API для провіженінгу, міграції або налаштування' }, status: 'queued' },
      { num: '05', title: { de: 'Audit & Logging', en: 'Audit & Logging', fr: 'Audit & Journalisation', uk: 'Аудит & Логування' }, desc: { de: 'Nachvollziehbare Protokollierung aller Aktionen für Compliance und Review', en: 'Traceable logging of all actions for compliance and review', fr: 'Journalisation complète pour la conformité et les audits', uk: 'Прозоре документування всіх дій для комплаєнсу та аудиту' }, status: 'queued' },
    ],
    agents: [
      { icon: '⚡', name: { de: 'Ticket-Router', en: 'Ticket Router', fr: 'Routeur de Tickets', uk: 'Ticket Router' }, desc: { de: 'Regelbasierte Zuweisung für Support-Tickets im Team', en: 'Rule-based ticket assignment for support teams', fr: 'Attribution intelligente des tickets de support', uk: 'Маршрутизація тікетів підтримки на основі правил' } },
      { icon: '🔐', name: { de: 'IAM-Provisioner', en: 'IAM Provisioner', fr: 'Provisionneur IAM', uk: 'IAM Provisioner' }, desc: { de: 'AD/Entra ID Benutzer-Lifecycle Automation', en: 'AD/Entra ID user lifecycle automation', fr: 'Automatisation du cycle de vie des comptes AD/Entra ID', uk: 'Автоматизація життєвого циклу користувачів AD/Entra ID' } },
      { icon: '🔄', name: 'KKI Agent Framework', desc: { de: 'Wiederverwendbare Bausteine für Workflow-Automatisierung', en: 'Reusable building blocks for workflow automation', fr: 'Composants réutilisables pour l\'automatisation de workflows', uk: 'Багаторазові модулі для автоматизації робочих процесів' } },
    ],
  },

  // ─── COMPLIANCE & GOVERNANCE ─────────────────────────────────────────────────
  compliance: {
    label: { de: 'Governance', en: 'Governance', fr: 'Gouvernance', uk: 'Governance' },
    title: { de: 'Compliance & Betriebssicherheit', en: 'Compliance & Operational Security', fr: 'Conformité & Sécurité Opérationnelle', uk: 'Комплаєнс & Безпека операцій' },
    sub: {
      de: 'Regulierte Umgebungen erfordern absolute Struktur und Nachvollziehbarkeit.',
      en: 'Regulated environments require absolute structure and traceability.',
      fr: 'Les environnements réglementés exigent une structure et une traçabilité strictes.',
      uk: 'Регульовані середовища вимагають абсолютної структури та прозорості.',
    },
    cards: [
      {
        title: { de: 'KRITIS-Compliance', en: 'Critical Infrastructure Compliance', fr: 'Conformité KRITIS', uk: 'Відповідність KRITIS' },
        status: 'verified',
        statusLabel: { de: 'Verifiziert', en: 'Verified', fr: 'Vérifié', uk: 'Перевірено' },
        items: [
          { de: 'Administration bundesweiter KRITIS-Infrastruktur bei JoBITS', en: 'Administration of nationwide KRITIS infrastructure at JoBITS', fr: 'Administration d\'infrastructure critique nationale chez JoBITS', uk: 'Адміністрування всенімецької KRITIS-інфраструктури в JoBITS' },
          { de: 'Strikte Trennung von Berechtigungen und Rollen (Least Privilege)', en: 'Strict separation of permissions and roles (Least Privilege)', fr: 'Séparation stricte des permissions et des rôles (Moindre Privilège)', uk: 'Суворий розподіл прав і ролей (Least Privilege)' },
          { de: 'Nachvollziehbare Änderungsdokumentation und Audit-Trails', en: 'Traceable change documentation and audit trails', fr: 'Traçabilité complète des modifications et pistes d\'audit', uk: 'Повне документування змін та аудит-трейли' },
        ],
      },
      {
        title: 'Identity & Access Management',
        status: 'verified',
        statusLabel: { de: 'Verifiziert', en: 'Verified', fr: 'Vérifié', uk: 'Перевірено' },
        items: [
          { de: 'RBAC-strukturierte Benutzer- und Gruppensteuerung', en: 'RBAC-structured user and group management', fr: 'Gestion des utilisateurs et groupes structurée en RBAC', uk: 'Керування користувачами та групами за моделлю RBAC' },
          { de: 'Microsoft Entra ID Conditional Access Policies', en: 'Microsoft Entra ID Conditional Access Policies', fr: 'Stratégies Conditional Access Microsoft Entra ID', uk: 'Політики Conditional Access у Microsoft Entra ID' },
          { de: '90.000+ AD-Objekte unter zentraler Governance', en: '90,000+ AD objects under central governance', fr: '90.000+ objets AD sous gouvernance centralisée', uk: '90 000+ об\'єктів AD під централізованим керуванням' },
        ],
      },
      {
        title: { de: 'Endpoint & Perimeter Security', en: 'Endpoint & Perimeter Security', fr: 'Sécurité Endpoints & Périmètre', uk: 'Безпека кінцевих пристроїв & Периметр' },
        status: 'active',
        statusLabel: { de: 'Aktiv', en: 'Active', fr: 'Actif', uk: 'Активно' },
        items: [
          { de: 'FortiClient & Sophos Endpoint-Verwaltung in KRITIS', en: 'FortiClient & Sophos endpoint management in KRITIS', fr: 'Gestion des endpoints FortiClient & Sophos en KRITIS', uk: 'Керування FortiClient & Sophos у KRITIS' },
          { de: 'NetScaler-Administration und sichere Zugriffskontrolle', en: 'NetScaler administration and secure access control', fr: 'Administration NetScaler et contrôle d\'accès sécurisé', uk: 'Адміністрування NetScaler та захищений контроль доступу' },
          { de: 'Sicherheitskonforme Windows-11-Migration via Deskcenter', en: 'Security-compliant Windows 11 migration via Deskcenter', fr: 'Migration sécurisée vers Windows 11 via Deskcenter', uk: 'Безпечна міграція на Windows 11 через Deskcenter' },
        ],
      },
      {
        title: 'KKEEY Standard — Methodik',
        status: 'active',
        statusLabel: { de: 'In Betrieb', en: 'In Production', fr: 'En Production', uk: 'У продакшні' },
        items: [
          { de: 'Dokumentierte Methodik für reproduzierbare Fehlerdiagnose', en: 'Documented methodology for reproducible fault diagnosis', fr: 'Méthodologie documentée pour un diagnostic reproductible', uk: 'Документована методологія відтворюваної діагностики помилок' },
          { de: 'Strukturierte Störungsanalyse statt Trial-and-Error', en: 'Structured incident analysis instead of trial and error', fr: 'Analyse structurée des incidents plutôt que par tâtonnement', uk: 'Структурований аналіз інцидентів замість методу спроб і помилок' },
          { de: 'Verifiziert im KRITIS-Produktivbetrieb', en: 'Verified in KRITIS production operations', fr: 'Vérifié en exploitation critique de production', uk: 'Перевірено в реальному продуктивному середовищі KRITIS' },
        ],
      },
    ],
  },

  // ─── IMPACT / CASE STORIES ───────────────────────────────────────────────────
  impact: {
    label: { de: 'Impact', en: 'Impact', fr: 'Impact', uk: 'Результати' },
    title: { de: 'Messbare Ergebnisse.', en: 'Measurable Results.', fr: 'Résultats Mesurables.', uk: 'Вимірні результати.' },
    sub: {
      de: 'Praxisorientierte Meilensteine aus 15 Jahren Systembetrieb.',
      en: 'Practice-driven milestones from 15 years of systems engineering.',
      fr: 'Jalons opérationnels issus de 15 ans d\'ingénierie système.',
      uk: 'Практичні досягнення за 15 років системного адміністрування.',
    },
    cases: [
      {
        metric: '90k+',
        unit: '',
        title: { de: 'AD-Objekte administriert', en: 'AD Objects administered', fr: 'Objets AD administrés', uk: 'Об\'єктів AD під керуванням' },
        desc: {
          de: 'Bundesweite Verwaltung der gesamten KRITIS-AD-Struktur bei den Johanniter Bundes-IT-Services — Benutzerkonten, Gruppen, Richtlinien und Berechtigungen.',
          en: 'Nationwide management of the entire KRITIS AD structure at Johanniter Bundes-IT-Services — user accounts, groups, policies and permissions.',
          fr: 'Administration nationale de l\'infrastructure AD chez Johanniter Bundes-IT-Services — comptes, groupes, GPO et permissions.',
          uk: 'Всенімецьке керування структурою AD в Johanniter Bundes-IT-Services — облікові записи, групи, політики та права доступу.',
        },
        tag: { de: 'IAM · KRITIS · JoBITS', en: 'IAM · KRITIS · JoBITS', fr: 'IAM · KRITIS · JoBITS', uk: 'IAM · KRITIS · JoBITS' },
      },
      {
        metric: '14',
        unit: { de: 'Jahre', en: 'Years', fr: 'Ans', uk: 'Років' },
        title: { de: 'Produktivbetrieb-Erfahrung', en: 'Production Experience', fr: 'Expérience en Production', uk: 'Досвід у продакшні' },
        desc: {
          de: 'Kontinuierlicher Betrieb von IT-Infrastruktur im laufenden Handelsbetrieb bei BAUHAUS — von Tier-1-Support bis zur Prozessoptimierung.',
          en: 'Continuous IT infrastructure operation in live retail at BAUHAUS — from Tier 1 support to process optimization.',
          fr: 'Exploitation continue des systèmes chez BAUHAUS — du support N1-N3 à l\'optimisation des processus.',
          uk: 'Безперервна підтримка IT-інфраструктури в BAUHAUS — від 1-го рівня підтримки до оптимізації процесів.',
        },
        tag: { de: 'Operations · Tier 1–3', en: 'Operations · Tier 1–3', fr: 'Opérations · N1–N3', uk: 'Operations · Tier 1–3' },
      },
      {
        metric: '0',
        unit: { de: 'Trial-&-Error', en: 'Trial & Error', fr: 'Tâtonnement', uk: 'Спроб і помилок' },
        title: { de: 'Strukturierte Diagnose', en: 'Structured Diagnostics', fr: 'Diagnostic Structuré', uk: 'Структурована діагностика' },
        desc: {
          de: 'Eigenentwickelter KKEEY-Standard für reproduzierbare, nachvollziehbare Fehlerdiagnose. Eigenentwickeltes Ticket-Routing-Tool im Team-Einsatz.',
          en: 'Custom KKEEY Standard for reproducible, traceable fault diagnosis. Custom ticket routing tool used in production.',
          fr: 'Standard KKEEY pour un diagnostic reproductible. Outil de routage de tickets développé sur mesure et utilisé en équipe.',
          uk: 'Власний стандарт KKEEY для структурованої діагностики. Власний інструмент маршрутизації тікетів у щоденному використанні.',
        },
        tag: { de: 'Methodik · Automation', en: 'Methodology · Automation', fr: 'Méthodologie · Automatisation', uk: 'Методика · Автоматизація' },
      },
    ],
  },

  // ─── BERUFSERFAHRUNG ────────────────────────────────────────────────────────
  career: {
    label: { de: 'Werdegang', en: 'Career', fr: 'Parcours', uk: 'Кар\'єра' },
    title: { de: 'Berufserfahrung', en: 'Work experience', fr: 'Expérience Professionnelle', uk: 'Досвід роботи' },
    items: [
      {
        period: { de: 'Dez 2025 – Mai 2026', en: 'Dec 2025 – May 2026', fr: 'Déc 2025 – Mai 2026', uk: 'Груд 2025 – Трав 2026' },
        role: { de: 'IT-Administrator', en: 'IT Administrator', fr: 'Administrateur IT', uk: 'IT-Адміністратор' },
        company: 'Johanniter Bundes-IT-Services',
        active: false,
        desc: {
          de: 'Administration einer bundesweiten KRITIS-Infrastrukturumgebung für über 90.000+ User und AD-Objekte der gesamten Organisation: Active Directory, Microsoft Entra ID, Citrix (inkl. NetScaler), Omnitracker, Innovaphone PBX. Windows-11-Migration via Deskcenter Studio und modifiziertem PowerShell-Skript. Endpoint-Security mit FortiClient & Sophos. Eigenentwicklungen: Tool zur automatisierten Ticket-Zuweisung sowie der KKEEY-Standard.',
          en: 'Administration of a nationwide critical-infrastructure environment for over 90,000+ users and AD objects: Active Directory, Microsoft Entra ID, Citrix (incl. NetScaler), Omnitracker, Innovaphone PBX. Windows 11 migration via Deskcenter Studio and modified PowerShell script. Endpoint security via FortiClient & Sophos. Own developments: automated ticket assignment tool and the KKEEY Standard.',
          fr: 'Administration d\'une infrastructure critique nationale pour 90.000+ objets AD : Active Directory, Microsoft Entra ID, Citrix (NetScaler), Omnitracker, téléphonie PBX. Déploiement Windows 11 via Deskcenter Studio et scripts PowerShell. Sécurité FortiClient & Sophos. Outil de routage de tickets développé sur mesure.',
          uk: 'Адміністрування загальнонаціональної KRITIS-інфраструктури для 90 000+ користувачів та AD-об\'єктів: Active Directory, Microsoft Entra ID, Citrix, NetScaler, Omnitracker, Innovaphone PBX. Міграція на Windows 11 через Deskcenter Studio та PowerShell. Безпека FortiClient & Sophos. Власні розробки: інструмент маршрутизації тікетів та стандарт KKEEY.',
        },
        tags: ['Active Directory', 'Entra ID', 'Citrix', 'NetScaler', 'Deskcenter Studio', 'PowerShell', 'Windows 11', 'KRITIS', 'FortiClient', 'Sophos'],
      },
      {
        period: { de: '2010 – 2024 · 14 Jahre', en: '2010 – 2024 · 14 years', fr: '2010 – 2024 · 14 ans', uk: '2010 – 2024 · 14 років' },
        role: { de: 'IT-Beauftragter & Inventory Management', en: 'IT Officer & Inventory Management', fr: 'Responsable IT & Gestion d\'Inventaire', uk: 'IT-Спеціаліст & Керування інвентарем' },
        company: 'BAUHAUS',
        active: false,
        desc: {
          de: 'Tier-1-bis-3-Support, technische Betreuung der Warenwirtschaft, Hardware- und Prozessverantwortung im laufenden Handelsbetrieb. 14 Jahre operative Praxis: Ich kenne den Arbeitsalltag der Anwender aus erster Hand — welche Prozesse funktionieren und wo Systeme im Betrieb brechen.',
          en: 'Tier 1–3 support, technical ownership of the merchandise management system, hardware and process responsibility in day-to-day retail operations. 14 years of hands-on practice: I know users’ daily work first-hand — which processes work and where systems break in production.',
          fr: 'Support technique Niveaux 1 à 3, maintenance de l\'ERP commercial, gestion du parc matériel et des processus opérationnels pendant 14 ans. Connaissance concrète des besoins utilisateurs sur le terrain.',
          uk: 'Підтримка користувачів 1–3 рівнів, супровід системи товарообігу, відповідальність за обладнання та робочі процеси. 14 років практичного досвіду в щоденній роботі.',
        },
        tags: ['1st–3rd-Level-Support', 'Warenwirtschaft', 'Prozessoptimierung', 'Anwenderbetreuung'],
      },
      {
        period: { de: 'seit Juni 2026', en: 'since June 2026', fr: 'depuis Juin 2026', uk: 'з Червня 2026' },
        role: { de: 'IT-Beratung & Prozessautomatisierung', en: 'IT Consulting & Process Automation', fr: 'Conseil IT & Automatisation', uk: 'IT-Консалтинг & Автоматизація' },
        company: { de: 'Selbstständig', en: 'Self-employed', fr: 'Indépendant', uk: 'Самозайнятий' },
        active: true,
        desc: {
          de: 'Beratung und Umsetzung rund um Systemadministration, Workflow-Automatisierung und Tool-Entwicklung für kleine und mittlere Unternehmen.',
          en: 'Consulting and implementation around system administration, workflow automation, and tool development for small and medium-sized businesses.',
          fr: 'Conseil et implémentation en administration système, automatisation des workflows et développement d\'outils.',
          uk: 'Консалтинг та впровадження рішень із системного адміністрування, автоматизації процесів та розробки інструментів для бізнесу.',
        },
        tags: ['Automatisierung', 'PowerShell', 'Python', 'KMU'],
      },
    ],
  },

  // ─── KERNKOMPETENZEN ────────────────────────────────────────────────────────
  skills: {
    label: { de: 'Kompetenzen', en: 'Skills', fr: 'Compétences', uk: 'Навички' },
    title: { de: 'Kernkompetenzen', en: 'Core competencies', fr: 'Compétences Clés', uk: 'Ключові компетенції' },
    groups: [
      {
        label: { de: 'Identity & Access Management', en: 'Identity & Access Management', fr: 'Gestion des Identités et Accès', uk: 'Identity & Access Management' },
        items: ['Active Directory', 'Microsoft Entra ID', { de: 'Benutzer- & Berechtigungsverwaltung', en: 'User & permissions management', fr: 'Gestion utilisateurs & droits', uk: 'Керування користувачами та правами' }, { de: 'IAM in KRITIS-Umgebungen', en: 'IAM in critical infrastructure', fr: 'IAM en infrastructure critique', uk: 'IAM у критичних середовищах' }],
      },
      {
        label: { de: 'Client & Infrastruktur', en: 'Client & Infrastructure', fr: 'Clients & Infrastructure', uk: 'Клієнти та інфраструктура' },
        items: [{ de: 'Windows-11-Migrationen', en: 'Windows 11 migrations', fr: 'Migrations Windows 11', uk: 'Міграції на Windows 11' }, 'Deskcenter Studio', 'Citrix (NetScaler)', 'Omnitracker', 'Innovaphone PBX', { de: 'Hardware-Betreuung', en: 'Hardware support', fr: 'Support Matériel', uk: 'Обслуговування апаратного забезпечення' }],
      },
      {
        label: { de: 'Security & Netzwerk', en: 'Security & Network', fr: 'Sécurité & Réseau', uk: 'Безпека та мережі' },
        items: ['FortiClient', 'Sophos', { de: 'Endpoint Security', en: 'Endpoint Security', fr: 'Sécurité des Endpoints', uk: 'Безпека кінцевих точок' }, { de: 'KRITIS-Infrastruktur', en: 'Critical Infrastructure', fr: 'Infrastructures Critiques', uk: 'Критична інфраструктура' }],
      },
      {
        label: { de: 'Automatisierung & Scripting', en: 'Automation & Scripting', fr: 'Automatisation & Scripting', uk: 'Автоматизація та скрипти' },
        items: ['PowerShell', 'Python 3.12+', 'TypeScript', 'Docker & Cloud Run', { de: 'Prozessautomatisierung', en: 'Process automation', fr: 'Automatisation des processus', uk: 'Автоматизація процесів' }, { de: 'Eigene Workflow-Tools', en: 'Custom workflow tools', fr: 'Outils de workflow sur mesure', uk: 'Власні інструменти процесів' }],
      },
      {
        label: { de: 'Support & Methodik', en: 'Support & Methodology', fr: 'Support & Méthodologie', uk: 'Підтримка та методологія' },
        items: [{ de: '1st–3rd-Level-Support', en: 'Tier 1–3 support', fr: 'Support N1–N3', uk: 'Підтримка 1–3 рівнів' }, { de: 'Ticketsysteme', en: 'Ticketing systems', fr: 'Systèmes de tickets', uk: 'Тікет-системи' }, { de: 'Warenwirtschaftssysteme', en: 'Merchandise management systems', fr: 'Systèmes ERP', uk: 'Системи обліку товарів' }, { de: 'Reproduzierbare Fehlerdiagnose', en: 'Reproducible fault diagnosis', fr: 'Diagnostic d\'erreur reproductible', uk: 'Відтворювана діагностика помилок' }],
      },
      {
        label: { de: 'AI Engineering & Innovation', en: 'AI Engineering & Innovation', fr: 'Ingénierie IA & Innovation', uk: 'AI Інженерія та інновації' },
        items: ['LiveKit 2.x Voice AI', 'Gemini API / Vertex AI', 'Local LLMs (LM Studio)', 'Rust / Tauri 2.0', 'Audio DSP & Metal GPU', { de: 'Agenten-Architekturen', en: 'Agentic Architectures', fr: 'Architectures d\'Agents', uk: 'Агентні архітектури' }],
      },
    ],
  },

  // ─── EIGENE TOOLS & METHODIK ────────────────────────────────────────────────
  tools: {
    label: { de: 'Proof of Work', en: 'Proof of Work', fr: 'Preuve de Réalisation', uk: 'Proof of Work' },
    title: { de: 'Eigene Tools & Methodik', en: 'Own tools & methodology', fr: 'Outils Personnalisés & Méthodologie', uk: 'Власні інструменти & Методологія' },
    sub: {
      de: 'Wo ich im Betrieb Reibung sehe, baue ich Lösungen — die im Team im Einsatz sind.',
      en: 'Where I see friction in operations, I build solutions — used by the team in production.',
      fr: 'Face aux frictions opérationnelles, je conçois des solutions déployées en production.',
      uk: 'Там, де в роботі виникає тертя, я створюю рішення, якими користується вся команда.',
    },
    items: [
      {
        name: { de: 'Ticket-Routing-Automatisierung', en: 'Ticket routing automation', fr: 'Automatisation du routage des tickets', uk: 'Автоматизація маршрутизації тікетів' },
        sub: { de: '● Im Team-Einsatz · Eigenentwicklung', en: '● Used in production · Internal tool', fr: '● Déployé en équipe · Développement interne', uk: '● У командній роботі · Власна розробка' },
        desc: {
          de: 'Selbstentwickeltes Tool, das eingehende Support-Tickets regelbasiert dem passenden Bearbeiter zuweist. Ersetzt tägliche manuelle Verteilarbeit.',
          en: 'Self-developed tool that assigns incoming support tickets to the right agent based on rules. Replaces daily manual triage work.',
          fr: 'Outil assignant automatiquement les tickets de support entrants selon des règles précises. Supprime le tri manuel quotidien.',
          uk: 'Власний інструмент, який розподіляє вхідні тікети між фахівцями на основі правил, усуваючи щоденну ручну роботу.',
        },
      },
      {
        name: 'KKEEY-Standard',
        sub: { de: '● Standardisierte Methodik · Verifiziert', en: '● Standardized methodology · Verified', fr: '● Méthodologie standardisée · Vérifiée', uk: '● Стандартизована методика · Перевірено' },
        desc: {
          de: 'Dokumentierte Methodik für strukturierte, reproduzierbare Fehlerdiagnose — damit Störungen nachvollziehbar gelöst werden statt per Trial-and-Error.',
          en: 'Documented methodology for structured, reproducible fault diagnosis — so incidents are resolved traceably instead of by trial and error.',
          fr: 'Méthode documentée pour un diagnostic d\'incident structuré et reproductible sans tâtonnement.',
          uk: 'Документована методика структурованого пошуку та усунення несправностей без хаотичних спроб.',
        },
      },
      {
        name: 'KKI Agent-Framework',
        sub: { de: '● Aktives Framework · In-House Library', en: '● Active framework · Internal library', fr: '● Framework actif · Bibliothèque interne', uk: '● Активний фреймворк · Внутрішня бібліотека' },
        desc: {
          de: 'Privat entwickelte Agentenstruktur mit wiederverwendbaren Bausteinen für Automatisierungs-Workflows — die gemeinsame Grundlage meiner eigenen Tools.',
          en: 'Privately developed agent structure with reusable building blocks for automation workflows — the shared foundation of my own tools.',
          fr: 'Architecture d\'agents modulaires et réutilisables pour automatiser les workflows complexes.',
          uk: 'Модульна агентна структура з багаторазовими компонентами для автоматизації складних процесів.',
        },
      },
    ],
  },

  // ─── NEBENPROJEKTE ──────────────────────────────────────────────────────────
  side: {
    label: { de: 'Zusatzqualifikation', en: 'Additional qualification', fr: 'Compétences Complémentaires', uk: 'Додаткова кваліфікація' },
    title: { de: 'Nebenprojekte: KI-Entwicklung', en: 'Side projects: AI development', fr: 'Projets IA & Innovation', uk: 'Проєкти в сфері штучного інтелекту' },
    text: {
      de: 'Neben der Administration entwickle ich KI-gestützte Anwendungen — ein zusätzliches Werkzeug, um Automatisierung weiterzudenken.',
      en: 'Alongside administration I build AI-assisted applications — an additional tool for taking automation further.',
      fr: 'En parallèle de l\'administration, je développe des applications IA pour enrichir les possibilités d\'automatisation.',
      uk: 'Окрім системного адміністрування, я розробляю програми з використанням ШІ для розширення можливостей автоматизації.',
    },
    items: [
      { name: 'Claire V2.5 Native Audio', desc: { de: '● Produktiv v2.5 · Voice-AI-Agent · LiveKit 2.x, Python, ~200ms Latenz', en: '● Production v2.5 · Voice AI agent · LiveKit 2.x, Python, ~200ms latency', fr: '● En production v2.5 · Agent vocal IA · LiveKit 2.x, Python, latence ~200ms', uk: '● Продакшн v2.5 · Голосовий AI-агент · LiveKit 2.x, Python, затримка ~200мс' } },
      { name: 'AuraTone AI v2.0', desc: { de: '● Standalone v2.0 · Native macOS Audio Workstation · Tauri 2.0 (Rust), Metal GPU 120Hz', en: '● Standalone v2.0 · Native macOS Audio Workstation · Tauri 2.0 (Rust), Metal GPU 120Hz', fr: '● Application native v2.0 · macOS Audio Workstation · Tauri 2.0 (Rust), Metal GPU', uk: '● Нативний застосунок v2.0 · macOS Audio Workstation · Tauri 2.0 (Rust), Metal GPU' } },
      { name: 'KKI Agent-Framework', desc: { de: '● Aktives Framework · Wiederverwendbare Bausteine für Automation-Workflows', en: '● Active framework · Reusable building blocks for automation workflows', fr: '● Framework actif · Modules d\'automatisation réutilisables', uk: '● Активний фреймворк · Багаторазові модулі автоматизації' } },
    ],
    moreLink: 'https://kkeey92.github.io/CV_KKEEY/',
    moreLabel: { de: 'Mehr im AI-Portfolio →', en: 'More in the AI portfolio →', fr: 'Découvrir le portfolio IA →', uk: 'Більше в AI-портфоліо →' },
  },

  // ─── KONTAKT ────────────────────────────────────────────────────────────────
  contact: {
    label: { de: 'Kontakt', en: 'Contact', fr: 'Contact', uk: 'Контакти' },
    title: { de: 'Lassen Sie uns sprechen.', en: 'Let’s talk.', fr: 'Échangeons ensemble.', uk: 'Почнімо діалог.' },
    desc: {
      de: 'Offen für Festanstellungen als IT-Administrator, Systemadministrator oder IAM-Specialist. Remote · Hybrid · DE, EN, FR & UK.',
      en: 'Open to full-time roles as IT administrator, system administrator, or IAM specialist. Remote · Hybrid · DE, EN, FR & UK.',
      fr: 'Ouvert aux opportunités en administration système, ingénierie IT ou spécialiste IAM. Télétravail / Hybride.',
      uk: 'Відкритий до співпраці на посадах IT-адміністратора, системного адміністратора або спеціаліста з IAM. Віддалено / Гібрид.',
    },
    emails: ['kuck_kevin@icloud.com', 'Kkeey_IT@iCloud.com'],
  },

  // ─── I18N STRINGS ────────────────────────────────────────────────────────────
  i18n: {
    navOverview:   { de: 'Überblick',     en: 'Overview',   fr: 'Aperçu',      uk: 'Огляд' },
    navSystems:    { de: 'Systeme',       en: 'Systems',    fr: 'Systèmes',    uk: 'Системи' },
    navAutomation: { de: 'Automation',    en: 'Automation', fr: 'Automation',  uk: 'Автоматизація' },
    navCareer:     { de: 'Werdegang',     en: 'Career',     fr: 'Parcours',    uk: 'Кар\'єра' },
    navSkills:     { de: 'Skills',        en: 'Skills',     fr: 'Skills',      uk: 'Навички' },
    navContact:    { de: 'Kontakt',       en: 'Contact',    fr: 'Contact',     uk: 'Контакти' },
    namePH:        { de: 'Ihr Name',      en: 'Your name',  fr: 'Votre nom',   uk: 'Ваше ім\'я' },
    emailPH:       { de: 'Ihre E-Mail',   en: 'Your email', fr: 'Votre e-mail',uk: 'Ваш Email' },
    msgPH:         { de: 'Ihre Nachricht…', en: 'Your message…', fr: 'Votre message…', uk: 'Ваше повідомлення…' },
    submitLabel:   { de: 'Nachricht senden →', en: 'Send message →', fr: 'Envoyer le message →', uk: 'Надіслати повідомлення →' },
    sentMsg:       { de: '✓ Nachricht gesendet — ich melde mich zeitnah.', en: '✓ Message sent — I will reply promptly.', fr: '✓ Message envoyé — réponse rapide assurée.', uk: '✓ Повідомлення надіслано — відповім найближчим часом.' },
    sendingLabel:  { de: 'Wird gesendet…', en: 'Sending…', fr: 'Envoi en cours…', uk: 'Надсилається…' },
    sendErr:       { de: 'Fehler — bitte direkt an kuck_kevin@icloud.com mailen', en: 'Error — please email kuck_kevin@icloud.com directly', fr: 'Erreur — écrivez directement à kuck_kevin@icloud.com', uk: 'Помилка — напишіть прямо на kuck_kevin@icloud.com' },
    darkBtnLight:  { de: 'Hellmodus aktivieren', en: 'Switch to light mode', fr: 'Activer le mode clair', uk: 'Увімкнути світлу тему' },
    darkBtnDark:   { de: 'Dunkelmodus aktivieren', en: 'Switch to dark mode', fr: 'Activer le mode sombre', uk: 'Увімкнути темну тему' },
    footerCross:   { de: 'AI-Engineering-Portfolio ansehen →', en: 'View AI Engineering Portfolio →', fr: 'Découvrir le portfolio IA →', uk: 'Переглянути портфоліо з AI-розробки →' },
    downloadNote:  { de: 'Bewerbungsmappe: Anschreiben, Lebenslauf & Tech-Profil (PDF)', en: 'Application portfolio: cover letter, CV & tech profile (PDF)', fr: 'Dossier complet : lettre, CV et profil technique (PDF)', uk: 'Резюме та технічний профіль (PDF)' },
    systemBadge:   { de: 'ORCHESTRATOR AKTIV', en: 'ORCHESTRATOR ACTIVE', fr: 'ORCHESTRATEUR ACTIF', uk: 'ОРКЕСТРАТОР АКТИВНИЙ' },
  },
};
