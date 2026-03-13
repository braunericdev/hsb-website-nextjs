import { Metadata } from "next";
import DSGVO from "@/components/datenschutz";
import Card from "@/components/card";

export const metadata: Metadata = {
  title: "Datenschutz | BRAUN Hausmeisterservice",
  description: "Datenschutzerklrung des Braun Hausmeisterservice im Raum Koblenz und Mittelrhein. Informationen zum Umgang mit Ihren Daten.",
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
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
              Datenschutz
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transparenz und Schutz Ihrer persönlichen Daten
            </p>
          </div>
        </div>
      </div>
      
      <DSGVO />
      <Card />
    </div>
  );
}

