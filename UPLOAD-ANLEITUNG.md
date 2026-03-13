# 🚀 BRAUN Hausmeisterservices - Upload Checklist

## ✅ Build & Upload Anweisungen

### 1. Build erstellen
```bash
npm run build
```

### 2. Upload-Ordner
Der `out/` Ordner enthält die komplette Website für den Upload.

### 3. Wichtige Dateien enthalten:
- ✅ sitemap.xml (SEO-optimiert)
- ✅ robots.txt (Suchmaschinen-freundlich)
- ✅ Alle HTML-Seiten
- ✅ Alle Bilder und Assets
- ✅ CSS und JavaScript (optimiert)

### 4. Domain anpassen
**WICHTIG:** Ersetzen Sie in folgenden Dateien die Domain:
- `out/sitemap.xml`: `https://braun-hausmeisterservices.de/` → Ihre echte Domain
- `out/robots.txt`: `https://braun-hausmeisterservices.de/sitemap.xml` → Ihre echte Domain

### 5. Nach dem Upload
1. **Google Search Console** einrichten
2. **Sitemap einreichen**: `https://ihre-domain.de/sitemap.xml`
3. **Website testen**: Alle Links und Bilder prüfen

### 6. Upload-Struktur
```
out/
├── index.html (Homepage)
├── sitemap.xml
├── robots.txt
├── dienstleistungen/
│   └── index.html
├── immobilien-rundumloesung/
│   └── index.html
├── kontakt/
│   └── index.html
├── datenschutz/
│   └── index.html
├── impressum/
│   └── index.html
├── AdlPages/
│   ├── Aufbauservice/
│   ├── Carportreinigung/
│   ├── Gartenpflege/
│   ├── Gebaeudereinigung/
│   ├── Grundstueckspflege/
│   ├── Heckenschnitt/
│   ├── Hofreinigung/
│   ├── Rolldienst/
│   └── Winterdienst/
├── _next/ (CSS/JS Assets)
└── [alle Bilder]
```

## 🎯 SEO-Features enthalten:
- ✅ XML-Sitemap mit allen Seiten
- ✅ Robots.txt für Suchmaschinen
- ✅ Optimierte Meta-Tags
- ✅ Responsive Design
- ✅ Schnelle Ladezeiten

## 📞 Nach dem Upload zu erledigen:
1. Domain in sitemap.xml/robots.txt anpassen
2. Google Search Console einrichten
3. Google Analytics einrichten (optional)
4. SSL-Zertifikat prüfen
5. Website-Geschwindigkeit testen
