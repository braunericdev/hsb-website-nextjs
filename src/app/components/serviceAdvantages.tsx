import Link from "next/link";

interface ServiceAdvantagesProps {
  serviceName: string;
  advantages?: string[];
}

const defaultAdvantages = [
  "Professionelle Ausführung",
  "Faire Preise", 
  "Zuverlässige Termine",
  "Regional im Raum Koblenz und Mittelrhein"
];

const advantageDetails = {
  "Professionelle Ausführung": {
    description: "Jahrelange Erfahrung und modernste Technik garantieren erstklassige Ergebnisse bei jedem Auftrag.",
    icon: "star"
  },
  "Faire Preise": {
    description: "Transparente Kostenvoranschläge ohne versteckte Kosten - Qualität zum fairen Preis-Leistungs-Verhältnis.",
    icon: "euro"
  },
  "Zuverlässige Termine": {
    description: "Pünktlichkeit und Verbindlichkeit sind unser Markenzeichen - auf uns können Sie sich verlassen.",
    icon: "clock"
  },
  "Regional im Raum Koblenz und Mittelrhein": {
    description: "Als regionaler Anbieter kennen wir die Bedürfnisse vor Ort und sind schnell bei Ihnen.",
    icon: "location"
  }
};

const icons = {
  star: (props: any) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  euro: (props: any) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1M9 16h6m-7 4h8a2 2 0 002-2V6a2 2 0 00-2-2H8a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  clock: (props: any) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  location: (props: any) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
};

export default function ServiceAdvantages({ serviceName, advantages = defaultAdvantages }: ServiceAdvantagesProps) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mr-4"></div>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm uppercase tracking-widest">
              Warum Braun Hausmeisterservice?
            </span>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full ml-4"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Darum sollten Sie <span className="text-emerald-600 dark:text-emerald-500">uns wählen</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Überzeugen Sie sich von unserer Qualität, unserem Service und unserer Zuverlässigkeit -
            Ihr vertrauensvoller Partner für alle Hausmeisterdienste
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const detail = advantageDetails[advantage as keyof typeof advantageDetails];
            const Icon = icons[detail?.icon as keyof typeof icons] || icons.star;
            
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-700 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900/50 dark:to-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-emerald-200 group-hover:to-blue-200 dark:group-hover:from-emerald-800/70 dark:group-hover:to-blue-800/70 transition-all duration-300 group-hover:scale-110 shadow-md">
                  <Icon className="w-10 h-10 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-emerald-700 dark:group-hover:text-emerald-500 transition-colors duration-300">
                  {advantage}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {detail?.description || "Höchste Qualität und Zuverlässigkeit bei jedem Auftrag"}
                </p>
                
                <div className="mt-6 w-8 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/kontakt" className="inline-flex items-center px-6 py-3 bg-emerald-600 dark:bg-emerald-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-emerald-700 dark:hover:bg-emerald-600">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Überzeugt? Kontaktieren Sie uns noch heute!
          </Link>
        </div>
      </div>
    </section>
  );
}
