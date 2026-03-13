# Hausmeisterservice Braun – Corporate Website (Next.js)

Dies ist die vollumfängliche Corporate-Webanwendung für den Dienstleistungsbetrieb Hausmeisterservice Braun. Das Projekt dient der Kundenakquise sowie der detaillierten Darstellung des Leistungsspektrums.

## Architektur-Entscheidung

Die Wahl fiel bewusst auf das Meta-Framework Next.js, um moderne Web-Konzepte wie Server-Side Rendering (SSR) und das App-Router-Paradigma tiefgreifend zu implementieren. 

Hinweis: Für spezifische Google-Ads-Kampagnen wurde eine architektonische Gegenentscheidung getroffen. Hierfür wurde eine leichtgewichtige, reine Client-Side-SPA mit Vite entwickelt, um die Ladezeiten und Conversion-Rates zu maximieren (siehe Repository: hsb-landingpage-vite).

## Technischer Stack

Die Anwendung nutzt aktuelle Web-Technologien für maximale Performance und Wartbarkeit:

* **Framework:** Next.js 15 (App Router)
* **Library:** React 19
* **Styling:** Tailwind CSS v4
* **Typsicherheit:** TypeScript 5.8
* **Entwicklung:** Turbopack-Integration für schnelle Build-Zyklen

## Funktionsumfang

* **Responsivität:** Optimiertes UI für mobile und Desktop-Endgeräte unter Nutzung nativer Tailwind v4 Features.
* **Compliance:** Integration eines DSGVO-konformen Cookie-Consent-Managements (react-cookie-consent).
* **Qualitätssicherung:** Konfiguration für geräteübergreifendes Testing im lokalen Netzwerk (0.0.0.0 Bind).
* **Code-Qualität:** Strikte Typisierung und ESLint-Konfiguration zur Fehlervermeidung.