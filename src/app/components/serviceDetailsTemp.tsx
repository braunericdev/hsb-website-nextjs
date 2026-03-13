import Link from "next/link";

interface ServiceDetailsProps {
  serviceName: string;
}

// SVG Icons als React-Komponenten
const icons = {
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.35-4.35"></path>
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>
  ),
  plant: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 20h10"></path>
      <path d="M10 20c5.5-2.5.8-6.4 3-10"></path>
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path>
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.7 4.3-1.4 1-1.1 1.6-2.7 1.7-4.6-2.7.1-4 1-4.9 2z"></path>
    </svg>
  ),
  droplet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
    </svg>
  ),
  brick: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M8 21l8-8"></path>
      <path d="M12 17l3 3"></path>
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20,6 9,17 4,12"></polyline>
    </svg>
  ),
  recycle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path>
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path>
      <path d="M14 16.5l1.279-2.234a1.784 1.784 0 0 0 0-1.775l-1.279-2.234a1.83 1.83 0 0 0-1.556-.89H9.5L11 16.5z"></path>
    </svg>
  ),
  window: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="9" y1="9" x2="9" y2="21"></line>
      <line x1="15" y1="9" x2="15" y2="21"></line>
      <line x1="3" y1="9" x2="21" y2="9"></line>
    </svg>
  ),
  stairs: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 21H3L9 9h6l6 12z"></path>
      <path d="M9 9V3h6v6"></path>
    </svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9,22 9,12 15,12 15,22"></polyline>
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12,6 12,12 16,14"></polyline>
    </svg>
  ),
  snowflake: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="2" x2="12" y2="22"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  ),
  salt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="1"></circle>
      <circle cx="12" cy="5" r="1"></circle>
      <circle cx="12" cy="19" r="1"></circle>
      <circle cx="5" cy="12" r="1"></circle>
      <circle cx="19" cy="12" r="1"></circle>
    </svg>
  ),
  lightning: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"></polygon>
    </svg>
  ),
  mailbox: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  ),
  tree: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="8"></circle>
      <path d="M12 2v20"></path>
      <path d="M17 5h-10"></path>
    </svg>
  ),
  broom: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12l-9-9-9 9h18zM9 12v7a3 3 0 0 0 6 0v-7"></path>
    </svg>
  ),
  flower: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1m15.5-6.5l-4.24 4.24M7.76 7.76 3.5 3.5m13 13-4.24-4.24m-4.24 4.24L3.5 20.5"></path>
    </svg>
  ),
  grass: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 22h20"></path>
      <path d="M5 12l2 10 2-10M15 12l2 10 2-10"></path>
      <path d="M12 2c-4 4-8 8-8 12s4 8 8 8 8-4 8-8-4-8-8-12z"></path>
    </svg>
  ),
  officeCustom: (
   <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47.5 21.2979L4.83581 21.3559H2V22.5532H8.41667V39.5H11.3333V31.9681V29.4574H37.5833V27.5744H11.3333V22.5532H38.1667V39.5H41.0833V22.5532H47.5V21.2979Z" fill="#C98363" stroke="black" stroke-width="0.5"/>
<path d="M32.9167 18.7872V20.6702H34.0834V18.7872H42.8334V10H24.1667V18.7872H32.9167Z" fill="#2D2A2A" stroke="black" stroke-width="0.5"/>
</svg>



  ),
  stairsCustom: (
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 11C21.7761 11 22 11.2239 22 11.5V20C22 20.5523 21.5523 21 21 21H5C4.44772 21 4 20.5523 4 20V17.5C4 17.2239 4.22386 17 4.5 17V17C4.77614 17 5 16.7761 5 16.5V10.5C5 10.2239 5.22386 10 5.5 10V10C5.77614 10 6 10.2239 6 10.5V16C6 16.5523 6.44772 17 7 17H9C9.55228 17 10 16.5523 10 16V15C10 14.4477 10.4477 14 11 14H15C15.5523 14 16 13.5523 16 13V12C16 11.4477 16.4477 11 17 11H19C19.5523 11 20 10.5523 20 10V4.5C20 4.22386 20.2239 4 20.5 4V4C20.7761 4 21 4.22386 21 4.5V10.5C21 10.7761 21.2239 11 21.5 11V11Z" fill="#D9D9D9" stroke="black" stroke-width="0.5"/>
<path d="M21.4401 4.22698L3.97763 11.3064C3.70799 11.4157 3.39963 11.2993 3.26951 11.039C3.12418 10.7484 3.25725 10.3955 3.55833 10.2732L19 4L21.0229 3.19085C21.2926 3.08298 21.5999 3.19983 21.7298 3.45964C21.8755 3.75096 21.742 4.10461 21.4401 4.22698Z" fill="#B92A2A" stroke="black" stroke-width="0.5"/>
<path d="M4 16H9.5C9.77614 16 10 16.2239 10 16.5C10 16.7761 9.77614 17 9.5 17H4C3.72386 17 3.5 16.7761 3.5 16.5C3.5 16.2239 3.72386 16 4 16Z" fill="#862525"/>
<path d="M10 13H15.5C15.7761 13 16 13.2239 16 13.5V12V11C15.7239 11 15.5 10.7761 15.5 10.5C15.5 10.2239 15.7239 10 16 10H22C22.2761 10 22.5 10.2239 22.5 10.5C22.5 10.7761 22.2761 11 22 11H16V12V13.5C16 13.7761 15.7761 14 15.5 14H10C9.72386 14 9.5 13.7761 9.5 13.5C9.5 13.2239 9.72386 13 10 13Z" fill="#862525"/>
<path d="M10 15V14M10 14V14C9.72386 14 9.5 13.7761 9.5 13.5V13.5V13.5C9.5 13.2239 9.72386 13 10 13H15.5C15.7761 13 16 13.2239 16 13.5V13.5M10 14H15.5C15.7761 14 16 13.7761 16 13.5V13.5M16 13.5V12V11M16 11V11C15.7239 11 15.5 10.7761 15.5 10.5V10.5V10.5C15.5 10.2239 15.7239 10 16 10H22C22.2761 10 22.5 10.2239 22.5 10.5V10.5V10.5C22.5 10.7761 22.2761 11 22 11H16ZM10 16.5V16.5C10 16.2239 9.77614 16 9.5 16H4C3.72386 16 3.5 16.2239 3.5 16.5V16.5C3.5 16.7761 3.72386 17 4 17H9.5C9.77614 17 10 16.7761 10 16.5V16.5Z" stroke="black" stroke-width="0.5"/>
</svg>

  ),

    vordachCustom: (
    
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.25 20H17.5H16.75C16.3358 20 16 19.6642 16 19.25C16 18.8358 16.3358 18.5 16.75 18.5H17.5H20.25C20.6642 18.5 21 18.8358 21 19.25C21 19.6642 20.6642 20 20.25 20Z" fill="#7E7E7E" stroke="black" stroke-width="0.5"/>
<path d="M3.43874 19.6838L8.77208 3.68377C8.90819 3.27543 9.29033 3 9.72076 3H20.6844C21.3457 3 21.8249 3.63045 21.6479 4.26765L17.1389 20.5C17.0568 20.7955 16.7878 21 16.4811 21H4.38743C3.70487 21 3.2229 20.3313 3.43874 19.6838Z" fill="#8AA1D6" stroke="black" stroke-width="0.5"/>
</svg>

  ),
    fensterCustom: (    

<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21V4C3 3.44772 3.44771 3 4 3H21C21.5523 3 22 3.44771 22 4V21C22 21.5523 21.5523 22 21 22H4C3.44772 22 3 21.5523 3 21Z" fill="#CFC0C0" stroke="black" stroke-width="0.5"/>
<path d="M5 6V19C5 19.5523 5.44772 20 6 20H19C19.5523 20 20 19.5523 20 19V6C20 5.44772 19.5523 5 19 5H6C5.44772 5 5 5.44772 5 6Z" fill="#8AA1D6" stroke="black" stroke-width="0.5"/>
<path d="M11.9231 11.9231V5H13.0769V11.9231H20V13.0769H13.0769V20H11.9231V13.0769H5V11.9231H11.9231Z" fill="#7B7A7A" stroke="black" stroke-width="0.5"/>
</svg>

  )
};

// Service-spezifische Daten
const serviceData: Record<string, any> = {
  Hofreinigung: {
    type: "timeline",
    title: "Unser Arbeitsprozess",
    description: "So gehen wir Schritt für Schritt vor",
    steps: [
      {
        title: "Besichtigung & Analyse",
        description: "Wir prüfen den Zustand Ihres Hofes und planen die optimale Reinigungsstrategie",
        icon: "search"
      },
      {
        title: "Vorbereitung",
        description: "Schutz empfindlicher Bereiche und Bereitstellung professioneller Reinigungsgeräte",
        icon: "tools"
      },
      {
        title: "Unkrautentfernung",
        description: "Entfernung von Unkraut und Moos zwischen den Fugen als Vorbereitung",
        icon: "plant"
      },
      {
        title: "Hochdruckreinigung",
        description: "Gründliche Reinigung aller Pflasterflächen mit modernen Hochdruckgeräten",
        icon: "droplet"
      },
      {
        title: "Neu verfugen",
        description: "Professionelle Erneuerung der Fugen für langanhaltende Stabilität",
        icon: "brick"
      },
      {
        title: "Imprägnierung",
        description: "Schutzbehandlung für langanhaltende Sauberkeit und Wetterbeständigkeit",
        icon: "shield"
      },
      {
        title: "Endkontrolle",
        description: "Abschließende Qualitätskontrolle und Übergabe an den Kunden",
        icon: "check"
      }
    ]
  },
  Heckenschnitt: {
    type: "highlight",
    title: "Professioneller Heckenschnitt",
    description: "Saubere Schnitte für gesunde Pflanzen",
    highlight: {
      title: "Grünschnitt-Entsorgung inklusive!",
      description: "Wir nehmen das gesamte Schnittgut mit und entsorgen es fachgerecht - Sie haben keinen Aufwand!",
      icon: "recycle"
    },
    features: [
      "Formschnitt für gepflegte Optik",
      "Rückschnitt für gesundes Wachstum",
      "Verjüngungsschnitt bei älteren Hecken",
      "Alle Heckenarten (Thuja, Buchsbaum, Liguster, etc.)",
      "Professionelle Werkzeuge für saubere Schnitte",
      "Termingerechte Ausführung"
    ]
  },
  Gartenpflege: {
    type: "categories",
    title: "Umfassende Gartenpflege",
    description: "Alles für Ihren perfekten Garten",
    categories: [
      {
        title: "Rasenpflege",
        icon: "🌱",
        items: ["Rasenmähen", "Kantenschnitt", "Vertikutieren", "Rasendüngung", "Unkrautbekämpfung"]
      },
      {
        title: "Baum- & Strauchpflege",
        icon: "🌳",
        items: ["Baumschnitt", "Strauchschnitt", "Heckenschnitt", "Kronenpflege", "Totholzentfernung"]
      },
      {
        title: "Beetpflege",
        icon: "🌸",
        items: ["Unkrautentfernung", "Bodenvorbereitung", "Bepflanzung", "Mulchen", "Bewässerung"]
      },
      {
        title: "Saisonale Arbeiten",
        icon: "🍂",
        items: ["Laubentfernung", "Winterschutz", "Frühjahrsputz", "Herbstpflege", "Grünschnittentsorgung"]
      }
    ]
  },
  Gebäudereinigung: {
    type: "grid",
    title: "Professionelle Gebäudereinigung",
    description: "Ob Mieter oder Mitarbeiter - wir sorgen für ein sauberes Umfeld zum wohnen, arbeiten und leben!",
    services: [
      { title: "Fensterreinigung", icon: "fensterCustom", description: "Innen und außen kristallklar" },
      { title: "Treppenhausreinigung", icon: "stairsCustom", description: "Sauber und sicher" },
      { title: "Gemeinschaftsflächen", icon: "🏠", description: "Flure, Eingangsbereiche und Keller" },
      { title: "Vordächer & Überdachungen", icon: "vordachCustom", description: "Schutz vor Witterung" },
      { title: "Büros", icon: "officeCustom", description: "Professionelle Arbeitsumgebung" },
      { title: "Postkasten-Reinigung", icon: "📮", description: "Gepflegte Briefkästen" }
    ]
  },
  Grundstückspflege: {
    type: "categories",
    title: "Regelmäßige Grundstückspflege",
    description: "Professionelle Außenbereichspflege für Immobilien - Teil unseres Rundum-Pakets",
    categories: [
      {
        title: "Heckenschnitt",
        icon: "🌲",
        items: ["Formschnitt", "Rückschnitt", "Alle Heckenarten", "Grünschnitt-Entsorgung", "Termingerecht"]
      },
      {
        title: "Hofreinigung",
        icon: "🧹",
        items: ["Kehren", "Unkraut entfernen", "Fugen säubern", "Laubentfernung", "Sauberkeit"]
      },
      {
        title: "Beetpflege",
        icon: "🌸",
        items: ["Unkraut zupfen", "Bepflanzung", "Mulchen", "Bewässerung", "Bodenvorbereitung"]
      },
      {
        title: "Rasenpflege",
        icon: "🌾",
        items: ["Rasenmähen", "Kantenschnitt", "Vertikutieren", "Düngung", "Nachsaat"]
      }
    ]
  },
  Winterdienst: {
    type: "grid",
    title: "Zuverlässiger Winterdienst",
    description: "Sicher durch die kalte Jahreszeit",
    services: [
      { title: "24/7 Bereitschaft", icon: "🕒", description: "Rund um die Uhr für Sie da" },
      { title: "Schneeräumung", icon: "❄️", description: "Professionelle Räumung aller Flächen" },
      { title: "Streuen", icon: "🧂", description: "Sicheres Streuen gegen Glätte" },
      { title: "Zuverlässigkeit", icon: "✅", description: "Pünktlich und verlässlich" },
      { title: "Sicherheit", icon: "🛡️", description: "Maximale Sicherheit für alle" },
      { title: "Schnelle Reaktion", icon: "⚡", description: "Sofortiger Einsatz bei Bedarf" }
    ]
  },
  Mülltonnenservice: {
    type: "grid",
    title: "Mülltonnen-Service",
    description: "Vergessen Sie nie wieder die Mülltonnen",
    services: [
      { title: "Rolldienst", icon: "🗑️", description: "Pünktlich nach Kalender - Sie verpassen nie wieder einen Abholtermin" },
      { title: "Biotonne waschen", icon: "🧽", description: "Regelmäßige Reinigung für Hygiene und Sauberkeit" },
      { title: "Stellplatz kehren", icon: "🧹", description: "Sauberer Mülltonnenplatz - für Ordnung und Sauberkeit" }
    ]
  },
  Carportreinigung: {
    type: "simple",
    title: "Carport-Reinigung",
    description: "Ihr Carport wieder wie neu",
    content: "Professionelle Reinigung von Dach, Stützen und Böden. Wir entfernen Laub, Moos, Algen und sorgen mit einer Schutzbehandlung für langanhaltende Sauberkeit."
  },
  Aufbauservice: {
    type: "categories",
    title: "Professioneller Aufbau-Service",
    description: "Wir bauen auf, Sie entspannen sich",
    categories: [
      {
        title: "Garten & Outdoor",
        icon: "🏡",
        items: ["Gartenmöbel", "Grillgeräte", "Gewächshäuser", "Gartenhäuser", "Spielgeräte"]
      },
      {
        title: "Innenbereich",
        icon: "🛋️",
        items: ["Küchenmontage", "Möbelaufbau", "Badausstattung", "Regalsysteme", "Schränke"]
      },
      {
        title: "Sichtschutz & Zäune",
        icon: "🚪",
        items: ["Zaunbau", "Sichtschutz", "Tore", "Pavillons", "Pergolen"]
      }
    ]
  }
};

export default function ServiceDetails({ serviceName }: ServiceDetailsProps) {
  const service = serviceData[serviceName];

  if (!service) {
    return null;
  }

  const renderContent = () => {
    switch (service.type) {
      case "timeline":
        return (
          <div className="space-y-8">
            {service.steps.map((step: any, index: number) => (
              <div key={index} className="flex items-start space-x-6 relative">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white">
                  <div className="w-6 h-6">
                    {icons[step.icon as keyof typeof icons] || step.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                </div>
                {index < service.steps.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-green-500 to-blue-500"></div>
                )}
              </div>
            ))}
          </div>
        );

      case "highlight":
        return (
          <div className="space-y-8">
            {/* Highlight Box */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 border-2 border-green-200 dark:border-green-700 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-green-600 dark:text-green-400">
                {icons[service.highlight.icon as keyof typeof icons] || service.highlight.icon}
              </div>
              <h4 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-3">{service.highlight.title}</h4>
              <p className="text-gray-700 dark:text-gray-200 text-lg">{service.highlight.description}</p>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case "categories":
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.categories.map((category: any, index: number) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 mr-3 text-green-600">
                      {icons[category.icon as keyof typeof icons] || category.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case "grid":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.services.map((serviceItem: any, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto mb-4 text-green-600">
                  {icons[serviceItem.icon as keyof typeof icons] || serviceItem.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{serviceItem.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{serviceItem.description}</p>
              </div>
            ))}
          </div>
        );

      case "simple":
        return (
          <div className="text-center py-8">
            <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed">{service.content}</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-4"></div>
              <span className="text-green-600 dark:text-green-400 font-bold text-sm uppercase tracking-widest">
                Service Details
              </span>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full ml-4"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {service.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Content */}
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 lg:p-12 relative overflow-hidden">
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-blue-500 to-green-500"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 rounded-full opacity-30"></div>
            
            <div className="relative z-10">
              {renderContent()}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <Link href="/kontakt" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-700 dark:to-blue-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-green-700 hover:to-blue-700 dark:hover:from-green-600 dark:hover:to-blue-600 transform hover:-translate-y-1">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Haben Sie Fragen? Sprechen Sie uns an!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}