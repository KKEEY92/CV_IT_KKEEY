# CV_IT_KKEEY: IT-Administrator & System Engineer

<div align="center">
  <img src="https://kkeey92.github.io/CV_IT_KKEEY/assets/avatar.jpg" alt="Kevin Kuck" width="150" style="border-radius:50%">
  <h3>Kevin Kuck — 15 Jahre IT-Praxis</h3>
</div>

**Live-Version:** [kkeey92.github.io/CV_IT_KKEEY/](https://kkeey92.github.io/CV_IT_KKEEY/)

Dieses Repository beherbergt mein interaktives, webbasiertes IT-Profil als IT-Administrator. Es wurde als statische HTML/CSS/JS-Anwendung im **KKI-Framework-Design (Liquid Glass Neon Orange)** entwickelt und optimiert, um eine extrem performante, zugängliche und interaktive Vorstellung meiner Kompetenzen zu bieten.

## 🚀 Tech Stack
- **Struktur:** Semantisches HTML5 (Accessiblity-first)
- **Styling:** Vanilla CSS (CSS Variables, Flexbox, CSS Grid, Glassmorphism, CSS Animations)
- **Logic:** Vanilla JavaScript (ES6 Modules)
- **Design System:** KKI Liquid Glass (Neon Orange `#FF7A00`, Electric Cyan `#00E5FF`)
- **Hosting:** GitHub Pages (Automated Deployment via GitHub Actions)
- **Formulare:** Web3Forms API (Serverless Form Submission)

## 🏗 Architektur

```mermaid
graph TD
    A[Client Browser] -->|HTTPS| B(GitHub Pages)
    B --> C{Assets}
    C --> D[HTML5 DOM]
    C --> E[Vanilla CSS]
    C --> F[Vanilla JS]
    D -->|Contact Submit| G[Web3Forms API]
    G -->|Email Delivery| H[kuck_kevin@icloud.com]
```

## 🛠 Setup & Local Development
Da dies ein statisches Projekt ist, reicht ein lokaler Webserver aus:
```bash
# Repo klonen
git clone https://github.com/KKEEY92/CV_IT_KKEEY.git
cd CV_IT_KKEEY

# Webserver starten (z.B. Python)
python -m http.server 3000
```
Die Seite ist dann unter `http://localhost:3000` erreichbar.

## 🎨 KKI Liquid Glass Framework
Dieses Projekt nutzt die Kernfarben der Marke **KKI (Kevin Kuck IT)**:
- **Neon Orange:** `--it-accent: #FF7A00;`
- **Electric Cyan:** `--it-green: #00E5FF;`
- **Liquid Glass:** `backdrop-filter: blur(16px);` für Cards und Navigation.

---
&copy; 2026 Kevin Kuck. Alle Rechte vorbehalten.
