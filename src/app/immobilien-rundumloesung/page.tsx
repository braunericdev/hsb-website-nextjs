import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Immobilien-Rundumlösung | BRAUN Hausmeisterservice",
  description: "Komplette Immobilienbetreuung für Hausverwaltungen und Unternehmen. Grundstückspflege, Gebäudereinigung, Winterdienst und Mülltonnenservice aus einer Hand.",
};

const ImmobilienRundumloesung = () => {
  const leistungen = [
    {
      id: 1,
      title: "Grundstückspflege",
      image: "/freischneiden_nachher2.webp",
      description: "Professionelle Pflege von Außenanlagen, Grünflächen und Einfahrten",
      features: ["Rasenpflege", "Heckenschnitt", "Unkrautentfernung", "Wegefreiheit"]
    },
    {
      id: 2,
      title: "Gebäudereinigung",
      image: "/treppenhaus.webp",
      description: "Umfassende Reinigung von Gemeinschaftsbereichen und Außenflächen",
      features: ["Treppenhausreinigung", "Fensterreinigung", "Fassadenreinigung", "Eingangsbereich"]
    },
    {
      id: 3,
      title: "Winterdienst",
      image: "/winterdienst.webp",
      description: "Zuverlässiger Räum- und Streudienst für verkehrssichere Zugänge",
      features: ["Schneeräumung", "Salzstreuen", "Eisbeseitigung", "24/7 Bereitschaft"]
    },
    {
      id: 4,
      title: "Mülltonnenservice",
      image: "/mülltonnen.webp",
      description: "Mülltonnen-Management für einen ordentlichen Außenbereich",
      features: ["Tonnen rausstellen", "Tonnen reinholen", "Standplatz reinigen", "Defekt-Meldung"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] lg:h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/rundumloesung.webp')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6">
            Immobilien-Rundumlösung
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8">
            Komplette Betreuung für Hausverwaltungen & Unternehmen
          </p>
          <p className="text-base sm:text-lg lg:text-xl mb-8 lg:mb-12 opacity-90">
            Grundstückspflege • Gebäudereinigung • Winterdienst • Mülltonnenservice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
            >
              Jetzt Angebot anfordern
            </Link>
            <a
              href="#leistungen"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 text-lg"
            >
              Leistungen entdecken
            </a>
          </div>
        </div>
      </div>

      {/* Leistungen Section */}
      <div id="leistungen" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Unsere Leistungen im Detail
            </h2>
            <div className="w-24 h-1 bg-emerald-700 mx-auto rounded-full mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professionelle Services für die optimale Betreuung Ihrer Immobilien
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leistungen.map((leistung) => (
              <div key={leistung.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={leistung.image}
                    alt={leistung.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{leistung.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{leistung.description}</p>
                  <ul className="space-y-2">
                    {leistung.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                        <svg className="w-5 h-5 text-emerald-700 dark:text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Vorteile Section */}
      <div className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Warum BRAUN Hausmeisterservices?
            </h2>
            <div className="w-24 h-1 bg-emerald-700 mx-auto rounded-full mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professionelle Immobilienbetreuung mit einem zuverlässigen Partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-700 dark:text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Alles aus einer Hand</h3>
              <p className="text-gray-600 dark:text-gray-300">Ein Ansprechpartner für alle Immobilien-Services</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-700 dark:text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Zuverlässigkeit</h3>
              <p className="text-gray-600 dark:text-gray-300">Termingerechte Ausführung aller vereinbarten Leistungen</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-700 dark:text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Kosteneffizienz</h3>
              <p className="text-gray-600 dark:text-gray-300">Attraktive Paketpreise für Langzeitverträge</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-700 dark:text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Flexibilität</h3>
              <p className="text-gray-600 dark:text-gray-300">Individuelle Lösungen nach Ihren Anforderungen</p>
            </div>
          </div>
        </div>
      </div>
      {/* Paket-Angebote Section */}
      <div className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Unsere Paket-Angebote
            </h2>
            <div className="w-24 h-1 bg-emerald-700 mx-auto rounded-full mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Wählen Sie das passende Paket für Ihre Immobilie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Komplett-Paket */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border-2 border-emerald-700 dark:border-emerald-600 relative">
              <div className="absolute top-4 right-4 bg-emerald-700 dark:bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                EMPFOHLEN
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Rundum-Sorglos-Paket</h3>
                  <p className="text-gray-600 dark:text-gray-300">Alle Leistungen inklusive</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-700 dark:text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="dark:text-gray-300">Grundstückspflege ganzjährig</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-700 dark:text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="dark:text-gray-300">Gebäudereinigung regelmäßig</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-700 dark:text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="dark:text-gray-300">Winterdienst bei Bedarf</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-700 dark:text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="dark:text-gray-300">Mülltonnenservice wöchentlich</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-700 dark:text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="dark:text-gray-300">24/7 Notfall-Hotline</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-700 dark:text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="dark:text-gray-300">Festpreis-Garantie</span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-700 dark:text-emerald-600 mb-4">Pauschalpreis</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">Individuell nach Objektgröße</p>
                  <Link
                    href="/kontakt"
                    className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-block"
                  >
                    Angebot anfordern
                  </Link>
                </div>
              </div>
            </div>

            {/* Einzelleistungen */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Einzelleistungen</h3>
                  <p className="text-gray-600 dark:text-gray-300">Flexible Kombinationen möglich</p>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div className="flex justify-between items-center border-b dark:border-gray-700 pb-2">
                    <span className="font-semibold dark:text-gray-300">Grundstückspflege</span>
                    <span className="text-emerald-700 dark:text-emerald-600 font-bold">ab 150€/Monat</span>
                  </div>
                  <div className="flex justify-between items-center border-b dark:border-gray-700 pb-2">
                    <span className="font-semibold dark:text-gray-300">Gebäudereinigung</span>
                    <span className="text-emerald-700 dark:text-emerald-600 font-bold">ab 120€/Monat</span>
                  </div>
                  <div className="flex justify-between items-center border-b dark:border-gray-700 pb-2">
                    <span className="font-semibold dark:text-gray-300">Winterdienst</span>
                    <span className="text-emerald-700 dark:text-emerald-600 font-bold">ab 80€/Einsatz</span>
                  </div>
                  <div className="flex justify-between items-center border-b dark:border-gray-700 pb-2">
                    <span className="font-semibold dark:text-gray-300">Mülltonnenservice</span>
                    <span className="text-emerald-700 dark:text-emerald-600 font-bold">ab 40€/Monat</span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">*Preise abhängig von Objektgröße und Aufwand</p>
                  <Link
                    href="/kontakt"
                    className="border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-block"
                  >
                    Einzelangebot
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zielgruppen Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Für wen ist unser Rundum-Service gedacht?</h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 overflow-hidden">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-emerald-100 dark:bg-emerald-900 p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-700 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Immobilienbesitzer</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Perfekt für private Eigentümer mehrerer Immobilien, die eine zuverlässige Komplettlösung für ihre Objekte suchen.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 overflow-hidden">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-emerald-100 dark:bg-emerald-900 p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-700 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Hausverwaltungen</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Ideal für Hausverwaltungen, die ihre Arbeitslast reduzieren und einen zuverlässigen Partner für alle Außenarbeiten suchen.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 overflow-hidden">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-emerald-100 dark:bg-emerald-900 p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-700 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Unternehmen</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Für Unternehmen mit eigenen Immobilien, die sich auf ihr Kerngeschäft konzentrieren und die Immobilienpflege auslagern möchten.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 overflow-hidden">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-emerald-100 dark:bg-emerald-900 p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-700 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Senioren</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Speziell für ältere Immobilienbesitzer, die physisch nicht mehr in der Lage sind, sich um ihre Immobilie zu kümmern, aber ihr Zuhause behalten möchten.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 overflow-hidden">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-emerald-100 dark:bg-emerald-900 p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-700 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">WEGs</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Maßgeschneiderte Lösungen für Wohnungseigentümergemeinschaften, die eine transparente und kostengünstige Lösung für die Pflege ihrer Gemeinschaftsflächen suchen.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 overflow-hidden">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-emerald-100 dark:bg-emerald-900 p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-700 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Abwesende Eigentümer</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Für Besitzer, die nicht vor Ort leben und eine verlässliche Lösung benötigen, die sich um alles kümmert und regelmäßig Bericht erstattet.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-emerald-700 dark:bg-emerald-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Bereit für eine sorgenfreie Immobilienpflege?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">Kontaktieren Sie uns noch heute für ein unverbindliches Angebot, das perfekt auf Ihre Immobilie zugeschnitten ist.</p>
          <Link href="/kontakt" className="inline-block bg-white dark:bg-gray-900 text-emerald-700 dark:text-emerald-500 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300">
            Jetzt Angebot anfordern
          </Link>
        </div>
      </div>
  
    </div>
  );
};

export default ImmobilienRundumloesung;



