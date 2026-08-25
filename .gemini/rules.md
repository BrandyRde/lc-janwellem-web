# Design- und Entwicklungs-Richtlinien: Lions Club Düsseldorf-Jan-Wellem e.V.

Dieses Dokument definiert den verbindlichen Design- und Architekturstandard für alle zukünftigen Anpassungen, Erweiterungen und Features dieser Webseite.

---

## 🎨 1. Corporate Design & Farbpalette

Verbindliche Tailwind- und CSS-Farbdefinitionen:
- **Lions Navy (Primär)**: `#0B1B3D` (`lions-navy`) – Fundament für Seriosität und Eleganz.
- **Lions Gold (Akzent)**: `#C5A059` (`lions-gold`) – Für Buttons, Badges, Kennzahlen und Highlights.
- **Lions Gold Light (Hover)**: `#DFBA73` (`lions-goldLight`).
- **Lions Blue (Sekundär)**: `#003366` (`lions-blue`).
- **Slate & Neutraltöne**: `slate-950`, `slate-900`, `slate-800`, `slate-100`, `slate-50`, `white`.
- **Emerald Grün (Events)**: `emerald-600` / `emerald-400` für Akzente des Charity-Golfturniers.

---

## 🔒 2. Datenschutz- & Performance-Garantie (Cookie-Free)

1. **100% Cookie-Frei**: Es dürfen **keine** Cookies, LocalStorage-Tracker, Werbe-Pixel oder Session-Cookies gesetzt werden.
2. **Keine externen Font-Calls**: Keine Google Fonts oder externen Webfont-CDNs. Ausschließliche Nutzung des nativen System-Font-Stacks (`system-ui`, `-apple-system`, `sans-serif`), um DSGVO-Konformität ohne Cookie-Banner sicherzustellen.
3. **Lokale Assets**: Alle Bilder und Icons werden lokal aus `/public/images/` bzw. über `lucide-react` ausgeliefert.

---

## 🏛️ 3. Bildsprache & Hero-Standard

- **Hero-Hintergrund**: Das sonnige, repräsentative Reiterstandbild von Kurfürst Jan Wellem am Düsseldorfer Rathaus (`/images/jan_wellem_statue.jpg`).
- **Hero-Text**: Eingebettet in eine dezente Glaskarte (`bg-slate-950/60 backdrop-blur-md border border-white/20 rounded-3xl`) für maximale Lesbarkeit bei strahlendem Hintergrund.
- **Historisches Bildmaterial**: Charterfeier von 1984 (`/images/gruendung_1984.jpg`) im Bereich Clubgeschichte.
- **Offizielles Clublogo**: `/images/logo_janwellem.png` (Lions-Emblem + Jan-Wellem Silhouette).

---

## 📌 4. Zentrale Club-Stammdaten & Inhalte

- **Gründungsjahr**: 1984 (über 40 Jahre gemeinnütziges Engagement).
- **Präsident**: Joachim Neuerburg.
- **Förderverein**: Förderverein LC Düsseldorf-Jan-Wellem e.V., Vorsitzender: Alexander Delank.
- **Offizielle Förderverein-IBAN**: `DE31 3005 0110 0010 0432 30` (Stadtsparkasse Düsseldorf).
- **Clubabende**: Jeden 2. und 4. Dienstag im Monat im **Industrie-Club Düsseldorf e.V.** (Elberfelder Str. 6, 40213 Düsseldorf am Kö-Bogen). Gäste und Interessenten nach Voranmeldung herzlich willkommen.
- **Kernprojekt & Tradition**: 40 Jahre Partnerschaft mit dem **Kinderhilfezentrum Eulerstraße**; alljährliches **Budenfest im September** mit dem persönlichen **Lions-Kuchenverkauf**.
- **Golf-Satellitenseite**: `https://golfturnier.lc-janwellem.de`.
- **Organisation**: Distrikt 111-Rheinland, Lions Deutschland (`https://www.lions.de/wer-sind-die-lions`).
- **Technische Umsetzung**: [Licht & Code](https://www.lichtundcode.de).

---

## ⚡ 5. Technologie- & Deployment-Stack

- **Framework**: React 18 / 19 + Vite + Tailwind CSS.
- **Icons**: `lucide-react`.
- **Firebase Projekt-Zuordnung (VERBINDLICH)**:
  - **Firebase Project ID**: `lc-janwellem-web` (Name: *Lions Club Jan Wellem*)
  - **Hosting Target**: `lc-janwellem-web`
  - Alle Deployments dieses Repositories **müssen immer** auf `lc-janwellem-web` ausgeführt werden (niemals auf andere Projekte wie golfturnier oder gchd).
  - Deploy-Befehl: `npm run deploy` (führt `npm run build` und `firebase deploy --only hosting --project lc-janwellem-web` aus).
- **Production Build**: `npm run build` erzeugt `/dist` mit Sicherheitsheadern in `firebase.json`.
- **Hosting URLs**:
  - Live: `https://lc-janwellem-web.web.app` / `https://lc-janwellem-web.firebaseapp.com`
  - Custom Domain: `lc-janwellem.de` / `www.lc-janwellem.de`
