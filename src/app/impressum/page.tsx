import { Metadata } from "next";
import Card from "@/components/card";

export const metadata: Metadata = {
  title: "Impressum | BRAUN Hausmeisterservice",
  description: "Impressum des Braun Hausmeisterservice im Raum Koblenz und Mittelrhein. Rechtliche Angaben und Kontaktinformationen.",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-1 h-8 bg-emerald-600 mr-3"></div>
              <span className="text-emerald-700 dark:text-emerald-500 font-semibold text-sm uppercase tracking-wide">
                Rechtliches
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Impressum
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Rechtliche Angaben und Kontaktinformationen
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 lg:p-12 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Angaben gemäß § 5 TMG</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Verantwortlich für den Inhalt:</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Eric Braun Hausmeisterservice<br />
                    Inhaber: Eric Braun<br />
                    Bernhard-Henrich Str.15<br />
                    56170 Bendorf
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Kontakt:</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Telefon: +49 (0) 176 4586 1339<br />
                    E-Mail: kontakt@braun-hausmeisterservice.de
                  </p>
                </div>
                {/*
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Umsatzsteuer-ID:</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Umsatzsteuer-Identifikationsnummer gemÃ¤ÃŸ Â§ 27 a Umsatzsteuergesetz:<br />
                    [USt-IdNr.]
                  </p>
                </div>
                */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Haftungsausschluss:</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                    Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Card />
    </div>
  );
}
