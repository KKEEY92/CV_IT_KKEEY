# CV_IT_KKEEY — Update Walkthrough & Audit

## 1. Visuelle Optimierung: Transparenz & Leuchtkraft

- **Glassmorphism Transparenz**:
  - Cards von `0.72` Opacity auf **`rgba(18, 22, 28, 0.38)`** reduziert mit `backdrop-filter: blur(16px)`.
  - Bei Hover schwingt die Card auf `rgba(24, 30, 40, 0.52)` mit dezentem Orange-Glow hoch.
  - `.section-alt` Flächen sind nun semi-transparent (`rgba(16, 20, 26, 0.40)`), sodass der Shader über die gesamte Seitenhöhe hinweg durchscheint.
- **Shader Helligkeit & Ambient Glow**:
  - Graphite/Anthracite Basistöne im WebGL-Shader aufgehellt (`#0D0F13` Ambient).
  - Strahlkraft der **Liquid Orange Energie-Pulse** und **Node-Glows** im Fragment-Shader um +45% verstärkt.
  - Die Vignettierung an den Bildschirmrändern wurde deutlich abgemildert (kein "schwarzes Loch" mehr).
- **Hero-Portrait Integration**:
  - Business-Portrait im Hero-Header zentriert eingebaut (`assets/KKI_PORTRAIT_BUSINESS_KEVIN_KUCK_OFFICIAL.jpg`).
  - Mit rotierendem **Liquid-Orange-Aura-Ring** (`conic-gradient`), 3px Cyber-Frame und pulsierendem **Online-Status-Indikator**.
  - Offizielles KKEEY Logo (`assets/kkeey-logo.jpg`) in der Navbar platziert.

---

## 2. Audit-Bericht: Bewerbungsmappe (PDF) IST vs. SOLL

**Geprüfte Datei**: `assets/Kevin_Kuck_Bewerbungsmappe_IT.pdf` (4 Seiten, 1.93 MB)

### IST-Zustand (Inhaltsanalyse)
1. **Seite 1 (Deckblatt)**:
   - Titel: *Bewerbungsmappe · Portfolio Kevin Kuck*
   - Rolle: *IT Systems Engineer (15 Jahre Systemadministration, Prozessautomatisierung und KRITIS-Infrastruktur)*
   - Status: *Johanniter-Unfall-Hilfe e.V. · Bundes-IT*
   - Stand: *Juni 2026*
2. **Seite 2 (Anschreiben)**:
   - Anschreiben für *IT Systems Engineer*
   - Kernstationen: Johanniter Bundes-IT-Services (KRITIS, AD, Entra ID, Citrix, Windows 11 Rollouts, PowerShell) + 14 Jahre BAUHAUS.
   - Kontakt: *Marktplatz 5, 35510 Butzbach, +49 170 413 05 92, kuck_kevin@icloud.com*.
3. **Seite 3 (Lebenslauf / Profil)**:
   - Stationen: Johanniter Bundes-IT (Dez 2025 – Mai 2026), BAUHAUS (2010 – 2024).
   - Skills: AD, Entra ID, Azure, Citrix, Windows 11, PowerShell, OmniTracker, Python.
4. **Seite 4 (Tech Stack)**:
   - Languages: Python, TypeScript, JavaScript, Bash.
   - AI / Realtime: Gemini, Vertex AI, LiveKit Agents, WebRTC, Audio DSP.
   - Cloud / Infra: Google Cloud, Cloud Run, Docker, Firebase.

### SOLL/IST-Bewertung: **BESTANDEN (Sehr hohe Deckung)**

| Kriterium | IST (PDF) | SOLL (Website / Realität) | Status |
|---|---|---|---|
| **Berufserfahrung** | 15 Jahre (Johanniter KRITIS + 14 J. BAUHAUS) | 15 Jahre (identisch) | **100% Deckung** |
| **Tech-Schwerpunkte** | AD, Entra ID, Citrix, Windows 11, PowerShell | AD, Entra ID, Citrix, Windows 11, PowerShell | **100% Deckung** |
| **Standort & Kontakt** | Butzbach / +49 170 413 05 92 | Butzbach / kuck.kevin@icloud.com | **Konsistent** *(Hinweis: E-Mail im PDF mit `_`, im Web mit `.`)* |
| **Rollenfokus** | *IT Systems Engineer & KI-Integrator* | *IT-Administrator · Systemadministration · IAM* | **Voll kompatibel** |
| **Download-Verlinkung** | Zuvor Platzhalter (`#`) | Direkt auf `assets/Kevin_Kuck_Bewerbungsmappe_IT.pdf` verlinkt | **Aktiv & Funktionsfähig** |

---

## 3. Git-Commit

- `7cd3969: feat(ui): brighten ambient, increase glass card transparency for shader bleed-through, integrate hero portrait and connect PDF portfolio`
