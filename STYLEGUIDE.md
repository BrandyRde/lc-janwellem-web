# Styleguide & Design System: Lions Club Düsseldorf-Jan-Wellem

Dieser Styleguide dokumentiert die Gestaltungsrichtlinien, Komponenten-Standards und Design-Tokens für das Web-Projekt des Lions Club Düsseldorf-Jan-Wellem e.V.

## 1. Farbpalette (Design Tokens)

| Token | Hex | Tailwind Klasse | Verwendung |
| :--- | :--- | :--- | :--- |
| **Lions Navy** | `#0B1B3D` | `bg-lions-navy`, `text-lions-navy` | Primärfarbe, Navigation, dunkle Sektionen |
| **Lions Gold** | `#C5A059` | `bg-lions-gold`, `text-lions-gold` | Primäre Akzentfarbe, Buttons, Badges, Highlights |
| **Lions Gold Light** | `#DFBA73` | `bg-lions-goldLight` | Hover-Zustände für Gold-Elemente |
| **Lions Blue** | `#003366` | `bg-lions-blue`, `text-lions-blue` | Sekundäre Brand-Farbe, Links |
| **Dark Slate** | `#0F172A` | `bg-slate-900` | Sektionshintergründe |
| **Light Slate** | `#F8FAFC` | `bg-slate-50` | Sanfte helle Content-Bereiche |
| **Emerald Green** | `#059669` | `bg-emerald-600` | Akzente für Charity-Golf und Events |

## 2. Typografie & UI-Komponenten

- **Buttons (Primär / Spenden)**:
  `bg-gradient-to-r from-amber-500 via-lions-gold to-amber-400 hover:from-amber-400 hover:to-amber-300 text-lions-navy font-black rounded-xl shadow-lg`
- **Buttons (Sekundär / Glas)**:
  `bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl border border-white/40 backdrop-blur-md`
- **Content Cards**:
  `bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all`
- **Badges / Pillen**:
  `inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold`

## 3. Datenschutz-Vorgabe (DSGVO)
- Keine Cookies, keine Tracker, keine Third-Party CDNs.
- 100% DSGVO-konform ohne Cookie-Zustimmungsbanner.
