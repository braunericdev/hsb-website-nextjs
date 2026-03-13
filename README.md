# Hausmeisterservice Braun – Corporate Website (Legacy / Next.js Version)

Dies ist die erste Version der Web-Präsenz für den Hausmeisterservice Braun. Das Projekt diente als mein Einstieg in die moderne Webentwicklung mit dem Next.js-Ökosystem.

## Projekt-Historie und Einordnung

Dieses Repository repräsentiert mein erstes großes Lernprojekt. Hier habe ich mich intensiv mit den Konzepten von Next.js (App Router, Server-Side Rendering) und TypeScript vertraut gemacht. 

Nach erfolgreichem Abschluss dieser Version habe ich mich dazu entschieden, die gesamte Website auf Basis von **Vite** und **Node.js** komplett neu zu entwickeln. Ziel des Nachfolge-Projekts war es, die Architektur noch schlanker zu gestalten, den Framework-Overhead zu reduzieren und eine maximale Kontrolle über den Build-Prozess zu erhalten.

## Technische Besonderheiten: Komponenten-Architektur

Ein zentraler Fokus der Entwicklung lag auf der Modularisierung der Benutzeroberfläche:

* **Parametrisierte Komponenten:** Durch die Nutzung von React-Props wurden wiederverwendbare UI-Elemente geschaffen. Diese erlauben es, komplexe Sektionen zentral zu definieren und auf verschiedenen Unterseiten mit individuellen Inhalten (Texten, Bildern, Konfigurationen) zu füllen.
* **DRY-Prinzip (Don't Repeat Yourself):** Diese Architektur minimiert redundanten Code und stellt eine konsistente Design-Sprache über die gesamte Anwendung sicher.
* **Typisierung:** Die Komponenten-Schnittstellen wurden mittels TypeScript-Interfaces strikt typisiert, um Fehler bei der Datenübergabe bereits zur Entwicklungszeit auszuschließen.

## Technischer Stack (Version 1)

* **Framework:** Next.js 15
* **Library:** React 19
* **Styling:** Tailwind CSS v4
* **Sprache:** TypeScript

## Funktionsumfang

* **Responsivität:** Optimiertes UI für mobile und Desktop-Endgeräte unter Nutzung nativer Tailwind v4 Features.
* **Compliance:** Integration eines DSGVO-konformen Cookie-Consent-Managements (react-cookie-consent).
* **Qualitätssicherung:** Konfiguration für geräteübergreifendes Testing im lokalen Netzwerk (0.0.0.0 Bind).
* **Code-Qualität:** Strikte Typisierung und ESLint-Konfiguration zur Fehlervermeidung.

## Status des Repositories

Dieses Repository dokumentiert die erste produktive Phase des Unternehmens. Die aktuelle, weiterentwickelte Version der Website befindet sich im Repository: https://github.com/braunericdev/hsb-website-vite