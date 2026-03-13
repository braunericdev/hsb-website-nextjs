import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Kontakt from "@/components/kontakt";
import Card from "@/components/card";

export const metadata: Metadata = {
  title: "Kontakt | BRAUN Hausmeisterservices",
  description: "Kontaktieren Sie uns für professionelle Hausmeisterservices im Raum Koblenz und Mittelrhein. Schnell, zuverlÃ¤ssig und kompetent.",
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      {/* Hero Section */}
      <div 
        className="relative h-[40vh] lg:h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/cleaner_hof.webp')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            Kontakt aufnehmen
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 opacity-90">
            Wir sind für Sie da - professionell, zuverlässig, persönlich
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base lg:text-lg">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Kostenlose Beratung
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Schnelle Antwort
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Individuelle Lösungen
            </div>
          </div>
        </div>
      </div>

      {/* Kontakt Form */}
      <Kontakt />

      {/* Vorteile Section */}
      <div className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Warum uns kontaktieren?
            </h2>
                        <div className="w-24 h-1 bg-emerald-700 dark:bg-emerald-600 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-700 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Schnelle Reaktion</h3>
              <p className="text-gray-600 dark:text-gray-300">Antwort innerhalb von 24 Stunden, oft schon am gleichen Tag</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-700 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Kostenlose Beratung</h3>
              <p className="text-gray-600 dark:text-gray-300">Unverbindliche Erstberatung und individuelle Angebotserstellung</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-700 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Vor-Ort-Termine</h3>
              <p className="text-gray-600 dark:text-gray-300">Persönliche Besichtigung und detaillierte Bestandsaufnahme</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <Card />
    </div>
  );
}

