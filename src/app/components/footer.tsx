export default function Footer(){
    return ( 
      <footer className="bg-gray-900 text-white pt-16 pb-8 w-full overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-4">Braun Hausmeisterservice</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Ihr zuverlässiger Partner für alle Hausmeister-Dienstleistungen im Raum Koblenz und Mittelrhein.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-400">
                  <svg className="w-4 h-4 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +49 (0) 176 4586 1339
                </div>
                <div className="flex items-center text-gray-400">
                  <svg className="w-4 h-4 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Raum Koblenz, Neuwied und Mittelrhein
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Dienstleistungen</h4>
              <ul className="space-y-3">
                <li><a href="/Gartenpflege" className="text-gray-400 hover:text-emerald-500 transition-colors">Gartenpflege</a></li>
                <li><a href="/Hofreinigung" className="text-gray-400 hover:text-emerald-500 transition-colors">Hofreinigung</a></li>
                <li><a href="/Winterdienst" className="text-gray-400 hover:text-emerald-500 transition-colors">Winterdienst</a></li>
                <li><a href="/Gebaeudereinigung" className="text-gray-400 hover:text-emerald-500 transition-colors">Gebäudereinigung</a></li>
                <li><a href="/immobilien-rundumloesung" className="text-gray-400 hover:text-emerald-500 transition-colors">Rundumlösung</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-gray-400 hover:text-emerald-500 transition-colors">Startseite</a></li>
                <li><a href="/dienstleistungen" className="text-gray-400 hover:text-emerald-500 transition-colors">Alle Dienstleistungen</a></li>
                <li><a href="/standorte" className="text-gray-400 hover:text-emerald-500 transition-colors">Unsere Standorte</a></li>
                <li><a href="/kontakt" className="text-gray-400 hover:text-emerald-500 transition-colors">Kontakt</a></li>
                <li><a href="/impressum" className="text-gray-400 hover:text-emerald-500 transition-colors">Impressum</a></li>
                <li><a href="/datenschutz" className="text-gray-400 hover:text-emerald-500 transition-colors">Datenschutz</a></li>
                <li className="max-lg:border-b max-lg:border-gray-200 dark:max-lg:border-gray-700 max-lg:py-3"></li>
              </ul>
            </div>

            {/* Why Choose Us */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Unsere Vorteile</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  <svg className="w-4 h-4 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Faire Preise
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-4 h-4 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Zuverlässige Termine
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-4 h-4 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Regional vor Ort
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-4 h-4 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Professionelle Ausführung
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action Bar */}
          <div className="bg-emerald-700 rounded-2xl p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-white mb-2">Direkt kontaktieren</h3>
                <p className="text-emerald-100">Kostenlose Beratung und schnelle Terminvereinbarung</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="tel:+4917645861339"
                  className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  Jetzt anrufen
                </a>
                <a 
                  href="/kontakt"
                  className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  Nachricht senden
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Braun Hausmeisterservice. Alle Rechte vorbehalten.
              </p>
              <div className="text-gray-400 text-sm">
                <span className="font-semibold">Regional im Raum Koblenz, Neuwied und Mittelrhein</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}


