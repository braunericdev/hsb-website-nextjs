import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Unsere Standorte | BRAUN Hausmeisterservice",
  description: "Braun Hausmeisterservice ist in allen wichtigen Orten im Raum Koblenz und Mittelrhein für Sie da. Von Koblenz über Neuwied bis Lahnstein - professionelle Dienstleistungen vor Ort.",
  keywords: "Hausmeisterservice Koblenz, Neuwied, Lahnstein, Bendorf, Vallendar, Weißenthurm, Urmitz, Kaltenengers, Mülheim-Kärlich, Höhr-Grenzhausen, Stromberg, Weitersburg",
  robots: { index: true, follow: true }
};

type Region = "Kreis Koblenz" | "Rhein-Westerwald" | "Rhein-Lahn" | "Raum Neuwied" | "Westerwald";

const standorte: Array<{ name: string; plz: string; region: Region }> = [
  // Kreis Koblenz 
  { name: "Koblenz", plz: "56068", region: "Kreis Koblenz" },
  { name: "Koblenz-Karthause", plz: "56075", region: "Kreis Koblenz" },
  { name: "Koblenz-Güls", plz: "56070", region: "Kreis Koblenz" },
  { name: "Koblenz-Metternich", plz: "56072", region: "Kreis Koblenz" },
  
  // Rhein-Westerwald
  { name: "Bendorf", plz: "56170", region: "Rhein-Westerwald" },
  { name: "Bendorf-Stromberg", plz: "56170", region: "Rhein-Westerwald" },
  { name: "Vallendar", plz: "56179", region: "Rhein-Westerwald" },
  { name: "Weißenthurm", plz: "56575", region: "Rhein-Westerwald" },
  { name: "Urbar", plz: "56182", region: "Rhein-Westerwald" },
  { name: "Kaltenengers", plz: "56220", region: "Rhein-Westerwald" },
  { name: "Mülheim-Kärlich", plz: "56218", region: "Rhein-Westerwald" },
  { name: "Weitersburg", plz: "56191", region: "Rhein-Westerwald" },
  { name: "Höhr-Grenzhausen", plz: "56203", region: "Westerwald" },
  
  // Rhein-Lahn
  { name: "Lahnstein", plz: "56112", region: "Rhein-Lahn" },
  
  // Raum Neuwied
  { name: "Neuwied", plz: "56564", region: "Raum Neuwied" },
  { name: "Neuwied-Engers", plz: "56566", region: "Raum Neuwied" },
  { name: "Neuwied-Gladbach", plz: "56566", region: "Raum Neuwied" },
  { name: "Neuwied-Heimbach-Weis", plz: "56566", region: "Raum Neuwied" },
  
  // Weitere Kreis Koblenz Orte
  { name: "Bassenheim", plz: "56220", region: "Kreis Koblenz" },
  { name: "Kruft", plz: "56598", region: "Kreis Koblenz" },
  { name: "Nickenich", plz: "56588", region: "Kreis Koblenz" },
  { name: "Ochtendung", plz: "56299", region: "Kreis Koblenz" },
  { name: "Plaidt", plz: "56637", region: "Kreis Koblenz" },
  { name: "Kettig", plz: "56218", region: "Kreis Koblenz" }
];

const regionen: Record<Region, string> = {
  "Kreis Koblenz": "emerald",
  "Rhein-Westerwald": "blue",
  "Rhein-Lahn": "indigo",
  "Raum Neuwied": "cyan",
  "Westerwald": "teal"
};

export default function StandortePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Unsere Standorte
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Braun Hausmeisterservice ist in allen wichtigen Orten im Raum Koblenz und Mittelrhein für Sie da
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Unser Einzugsgebiet</h2>
              <p className="text-emerald-100 text-lg">
                Von der historischen Stadt Koblenz über das lebendige Neuwied bis hin zu den malerischen Orten 
                am Rhein und im Westerwald - wir sind überall dort für Sie da, wo Sie uns brauchen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regionen Übersicht */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Unsere Service-Regionen
            </h2>
            <p className="text-xl text-gray-600">
              Aufgeteilt in geografische Bereiche für optimale Betreuung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-emerald-50 rounded-lg">
              <div className="w-16 h-16 bg-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kreis Koblenz</h3>
              <p className="text-gray-600">Koblenz mit allen Stadtteilen und umliegenden Gemeinden</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rhein-Westerwald</h3>
              <p className="text-gray-600">Bendorf, Vallendar, Weißenthurm und Umgebung</p>
            </div>

            <div className="text-center p-6 bg-cyan-50 rounded-lg">
              <div className="w-16 h-16 bg-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Raum Neuwied</h3>
              <p className="text-gray-600">Neuwied mit allen Stadtteilen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Standorte Grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Alle Standorte im Überblick
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In diesen Orten und Gemeinden sind wir regelmäßig für unsere Kunden tätig. 
              Schnelle Erreichbarkeit und lokale Nähe sind uns wichtig.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {standorte.map((ort, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{ort.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${regionen[ort.region]}-100 text-${regionen[ort.region]}-700`}>
                    {ort.region}
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">PLZ:</span> {ort.plz}
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center text-emerald-600">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">Verfügbar</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Kontakt CTA */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ihr Ort ist nicht dabei?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Kein Problem! Wir erweitern kontinuierlich unser Einzugsgebiet. 
            Sprechen Sie uns gerne an - oft ist auch eine Anfahrt in benachbarte Orte möglich.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontakt"
              className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              Jetzt anfragen
            </a>
            <a
              href="tel:+49176123456789"
              className="bg-emerald-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-900 transition-colors"
            >
              Direkt anrufen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
