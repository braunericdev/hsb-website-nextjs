"use client";
import Image from "next/image";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
}

export default function ServiceHero({ title, subtitle, description, backgroundImage }: ServiceHeroProps) {
  return (
    <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-6 sm:p-8 lg:p-12 rounded-2xl shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="w-1 h-12 bg-emerald-600 mr-4"></div>
                <span className="text-emerald-700 font-semibold text-sm sm:text-base uppercase tracking-wide">
                  {subtitle}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
                {title}
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6 lg:mb-8 leading-relaxed">
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/kontakt"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-center"
                >
                  Jetzt anfragen
                </a>
                <a
                  href="/immobilien-rundumloesung"
                  className="border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 text-center"
                >
                  Rundumlösung entdecken
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

