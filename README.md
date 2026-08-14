# CV_IT_KKEEY: Enterprise IT-Administration & IAM Engineering

**Kevin Kuck — IT Administrator & System Engineer**  
*15 Jahre Praxis · KRITIS-Infrastruktur · Identity & Access Management · Active Directory · Microsoft Entra ID · Citrix · PowerShell*

---

## 🌐 Live-Links & Profile

- 🖥️ **Live Web-Portfolio:** [kkeey92.github.io/CV_IT_KKEEY](https://kkeey92.github.io/CV_IT_KKEEY/)
- 👔 **LinkedIn:** [linkedin.com/in/kevin-kuck-it](https://www.linkedin.com/in/kevin-kuck-it/)
- 🦊 **GitLab:** [gitlab.com/KKEEY92](https://gitlab.com/KKEEY92)
- 🐙 **GitHub:** [github.com/KKEEY92](https://github.com/KKEEY92)
- 📄 **Bewerbungsmappe (PDF):** [Kevin_Kuck_Bewerbungsmappe_IT.pdf](assets/Kevin_Kuck_Bewerbungsmappe_IT.pdf)

---

## 🏗 Systemarchitektur & Datenfluss

```mermaid
graph TD
    subgraph Client [Browser & Edge Client]
        DOM[Semantic HTML5 DOM]
        CSS[CSS3 Design Tokens & Glassmorphism]
        Engine[js/main.js - Theme, i18n & Reveal Engine]
        Data[js/data.js - Single Source of Truth]
        
        DOM --> Engine
        Data --> Engine
        CSS --> DOM
    end

    subgraph CI_CD [GitHub Actions CI/CD Pipeline]
        Pages[pages.yml: Deploy to GitHub Pages]
        SyncAction[sync-project-status.yml: Daily Cron 04:00 UTC]
        SyncPy[scripts/sync_projects.py]
        
        SyncAction --> SyncPy
        SyncPy -->|Update Version Tags| Data
        Pages -->|Deploy Static Bundle| DOM
    end

    subgraph External [External Services & Endpoints]
        GH_API[GitHub REST API]
        W3F[Web3Forms Form API]
        Mailbox[(kuck_kevin@icloud.com)]

        SyncPy <-->|Fetch Releases| GH_API
        Engine -->|Async Contact Request| W3F
        W3F -->|Encrypted Forwarding| Mailbox
    end
```

---

## 📋 Überblick & Kernkompetenzen

Dieses Repository beinhaltet das interaktive IT-Administrator-Portfolio von Kevin Kuck. Es demonstriert fundierte 15 Jahre praktische Betriebserfahrung in der Verwaltung komplexer Enterprise-IT-Infrastrukturen, Identity & Access Management (Active Directory, Microsoft Entra ID), Citrix-Farmen, Windows-11-Rollouts, PowerShell-Automatisierung und KRITIS-Infrastrukturen.

### 🔐 Identity & Access Management (IAM)
- Active Directory (AD DS), Microsoft Entra ID (ehem. Azure AD), Hybrid Identity Sync (Entra Connect).
- RBAC Berechtigungsmatrizen, Least-Privilege-Prinzip, Multi-Faktor-Authentifizierung (MFA), Conditional Access.

### 🖥️ Client-, Server- & Virtualisierungs-Infrastruktur
- Citrix Virtual Apps and Desktops (inkl. NetScaler ADC Gateway), Omnitracker ITSM, Innovaphone PBX.
- Windows-11-Migrationen & Paketierung via Deskcenter Studio und optimierte PowerShell-Skripte.

### ⚡ Automatisierung & Scripting
- Produktives PowerShell-Scripting zur Benutzeranlage, Berechtigungsprüfung und AD-Reporting.
- Python 3.12+ Automatisierungs-Pipelines, strukturierte Diagnosemethodik (*KKEEY-Standard*).

### 🛡️ Compliance & Datenschutz
- 100% DSGVO- & DDG-konform: Keine externen CDNs oder Google-Fonts-Tracking; alle Schriftarten lokal im optimierten WOFF2-Format gehostet.
- Vollständiges Impressum (§ 5 DDG, § 18 Abs. 2 MStV) und Datenschutzerklärung.

---

## 📁 Repository-Struktur

```text
CV_IT_KKEEY/
├── index.html              # Hauptseite: Interaktives IT-Profil (Semantisches HTML5)
├── impressum.html          # Rechtliche Anbieterkennzeichnung gemäß § 5 DDG
├── datenschutz.html        # Datenschutzerklärung gemäß Art. 13 DSGVO
├── css/
│   ├── style.css           # Design Tokens, Glassmorphism, Theme Engine & Print Styles
│   └── fonts.css           # Lokale WOFF2 Font-Face Deklarationen (Space Grotesk)
├── js/
│   ├── data.js             # Strukturierte Inhaltsdatenbank & i18n Strings (DE/EN)
│   └── main.js             # Theme-Switcher, i18n-Renderer, Navigation & Form-Handler
├── scripts/
│   └── sync_projects.py    # Automatisierter Release- & Tag-Sync (Python 3.12+)
├── assets/
│   ├── avatar.jpg          # Profilfoto
│   ├── kkeey-logo.jpg      # KKEEY Brand Logo
│   ├── og-image.jpg        # Open Graph Preview Image
│   ├── Kevin_Kuck_Bewerbungsmappe_IT.pdf # Vollständige Bewerbungsunterlagen
│   └── fonts/              # Lokale WOFF2 Webfonts
└── .github/workflows/
    ├── pages.yml           # GitHub Pages Deployment Workflow
    └── sync-project-status.yml # Täglicher Status-Sync Workflow
```

---

## 🛠 Lokale Entwicklung & Vorschau

```bash
# 1. Repository klonen
git clone https://github.com/KKEEY92/CV_IT_KKEEY.git
cd CV_IT_KKEEY

# 2. Lokalen Webserver starten
python3 -m http.server 3000

# 3. Im Browser öffnen
# http://localhost:3000
```

---

## 💼 Kontakt

**Kevin Kuck — IT Administrator & System Engineer**  
Verfügbar für Festanstellungen und Projekte im Bereich IT-Administration, IAM-Engineering und Infrastrukturbetrieb.

- 📧 **E-Mail:** [kuck_kevin@icloud.com](mailto:kuck_kevin@icloud.com)
- 📍 **Standort:** 35510 Butzbach, Hessen (Remote / Hybrid / Vor Ort)
- 👔 **LinkedIn:** [linkedin.com/in/kevin-kuck-it](https://www.linkedin.com/in/kevin-kuck-it/)
- 🌐 **AI-Engineering Portfolio:** [CV_KKEEY](https://kkeey92.github.io/CV_KKEEY/)

---

© 2026 Kevin Kuck. Alle Rechte vorbehalten.
