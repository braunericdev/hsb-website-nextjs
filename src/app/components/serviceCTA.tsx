interface ServiceCTAProps {
  serviceName: string;
}

export default function ServiceCTA({ serviceName }: ServiceCTAProps) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Bereit für professionelle {serviceName}?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 lg:mb-12 leading-relaxed">
            Kontaktieren Sie uns noch heute für ein unverbindliches Angebot. 
            Wir beraten Sie gerne und finden die optimale Lösung für Ihre Bedürfnisse.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/kontakt"
              className="bg-white text-emerald-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Kostenlos anfragen
            </a>
            <a
              href="tel:+4917645861339"
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Direkt anrufen
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-emerald-500">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="text-emerald-100">
                <div className="font-semibold">Regional</div>
                <div className="text-sm">Raum Koblenz und Mittelrhein</div>
              </div>
              <div className="text-emerald-100">
                <div className="font-semibold">Faire Preise</div>
                <div className="text-sm">Transparente Kosten</div>
              </div>
              <div className="text-emerald-100">
                <div className="font-semibold">Zuverlässig</div>
                <div className="text-sm">Pünktliche Termine</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
