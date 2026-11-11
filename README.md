# CV_IT_KKEEY: Enterprise IT Administration & IAM Engineering

<div align="center">
  <img src="https://it.kkeey.dev/assets/avatar.jpg" alt="Kevin Kuck" width="140" style="border-radius:50%">
  <h3>Kevin Kuck — IT Administrator & System Engineer</h3>
  
  [![Live Demo](https://img.shields.io/badge/Live_Portfolio-CV__IT__KKEEY-1a5fa8?style=for-the-badge&logo=github&logoColor=white)](https://it.kkeey.dev/)
  [![Language: DE/EN/FR/UK/PL](https://img.shields.io/badge/Language-DE%2FEN%2FFR%2FUK%2FPL-00E5FF?style=for-the-badge)]()
  [![Framework: KKI Glass](https://img.shields.io/badge/Framework-KKI_Liquid_Glass-FF7A00?style=for-the-badge)]()
  [![Compliance: DSGVO](https://img.shields.io/badge/Compliance-DSGVO_%2F_DDG-34A853?style=for-the-badge)]()
</div>

---

## 🇩🇪 Deutsch

### Über dieses Repository
Dieses Repository beherbergt das interaktive IT-Administrator-Portfolio von **Kevin Kuck**. Die 14-jährige Gesamtberufspraxis umfasst Handel und IT. Das Portfolio zeigt Erfahrungen in der Verwaltung komplexer Enterprise-IT-Infrastrukturen, Identity & Access Management (Active Directory, Microsoft Entra ID), Citrix-Farmen, Windows 11 Rollouts, PowerShell-Automatisierung und KRITIS-Infrastrukturen.

### Kernkompetenzen & Schwerpunkte
- 🔐 **Identity & Access Management (IAM):** Active Directory, Microsoft Entra ID (Azure AD), SSO, MFA, Rollen- & Berechtigungskonzepte (RBAC).
- 🖥️ **Systemverwaltung & Virtualisierung:** Citrix Virtual Apps & Desktops, Windows Server 2016-2022, Windows 11 Enterprise Rollouts.
- ⚡ **Automatisierung:** PowerShell-Skripting für Benutzer-Lifecycle, AD-Audits und Systemkonfigurationen.
- 🛡️ **IT-Sicherheit & KRITIS:** Betriebsführung nach BSI-Grundschutz und ISO 27001 Vorgaben in sensiblen Infrastrukturen.
- 🔒 **DSGVO & DDG Compliance:** Vollständig integrierte Seiten für Impressum (§ 5 DDG) und Datenschutz (Art. 13 DSGVO).

---

## 🇬🇧 English

### Overview
This repository hosts the interactive IT System Administration portfolio of **Kevin Kuck**. The 14 years of total professional experience span retail and IT. The portfolio presents experience managing complex infrastructures, Identity & Access Management (Active Directory, Microsoft Entra ID), Citrix virtualization environments, Windows 11 Enterprise rollouts, PowerShell automation, and critical infrastructure (KRITIS) security standards.

### Core Technical Focus
- 🔐 **Identity & Access Management (IAM):** Active Directory, Microsoft Entra ID (Azure AD), SSO, MFA, RBAC permission matrix enforcement.
- 🖥️ **Systems Administration & Virtualization:** Citrix Virtual Apps & Desktops, Windows Server 2016-2022, Windows 11 Enterprise migrations.
- ⚡ **Automation:** Production PowerShell scripting for automated user lifecycle provisioning, AD auditing, and policy enforcement.
- 🛡️ **IT Security & Governance:** Operations aligned with BSI-IT-Grundschutz and ISO 27001 standards in critical infrastructure sectors.
- 🔒 **Legal & Privacy Compliance:** Built-in legal notice (Impressum) and GDPR-compliant privacy policy.

---

## 🏗 Systemarchitektur / System Architecture

```mermaid
graph TD
    subgraph Client["🖥️ Client Browser"]
        UI["KKI IT Professional UI"]
        LANG["DE / EN / FR / UK / PL Language Engine"]
        THEME["Light / Dark Theme Switch"]
    end
    
    subgraph Host["🔴 Hosting & Delivery"]
        GH["GitHub Pages (CDN & SSL)"]
        ASSETS["Static Assets (HTML / CSS / WebP)"]
    end

    subgraph Service["⚡ Serverless Services"]
        W3F["Web3Forms API"]
        MAIL["hello@kkeey.dev"]
    end

    UI --> GH
    GH --> ASSETS
    UI --> LANG & THEME
    UI -->|Contact Inquiry| W3F --> MAIL
```

---

## 🛠 Local Development & Testing

```bash
# 1. Repository klonen / Clone repo
git clone https://github.com/KKEEY92/CV_IT_KKEEY.git
cd CV_IT_KKEEY

# 2. Lokalen Webserver starten / Start local webserver
python3 -m http.server 3000

# 3. Im Browser öffnen / Open in browser
# http://localhost:3000
```

---

## 💼 Professional Opportunities & Contact Information

**Kevin Kuck** — *IT Administrator & System Engineer*  
Open to employment opportunities, future projects and collaboration in IT administration, IAM and automation. No active self-employment is asserted.

- 🌐 **Live Portfolio:** [it.kkeey.dev/](https://it.kkeey.dev/)
- 👔 **LinkedIn:** [linkedin.com/in/kevin-kuck-it/](https://www.linkedin.com/in/kevin-kuck-it/)
- 🦊 **GitLab:** [gitlab.com/KKEEY92](https://gitlab.com/KKEEY92)
- 🐙 **GitHub:** [github.com/KKEEY92](https://github.com/KKEEY92)

---
&copy; 2026 Kevin Kuck. All rights reserved. / Alle Rechte vorbehalten.

## Kontextarchitektur / Context architecture

Der IT-Fokus bleibt Systemadministration, IAM und nachgewiesene Praxis. Der ergänzende [ContextNexus-Einstieg](https://kkeey.dev/#engineering-contextnexus) erklärt die lokale Graph-Anwendung und das Context-Bridge-M4-Modul mit getrennten Prüf- und Freigabeschranken. M4 bleibt Entwicklungsstand; produktive Consumerabnahme ist offen.
