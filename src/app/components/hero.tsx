"use client";
import { useEffect, useState, TouchEvent } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/schubkarre.webp",
    title: "Regional im Raum Koblenz, Neuwied und Mittelrhein",
    subtitle: "Ihr engagiertes Team für alle Hausmeister-Dienstleistungen",
    cta: "Jetzt Kontaktieren!"
  },
  {
    id: 2,
    image: "/hero_sexy_rasen2.webp",
    title: "Moderne Gartenpflege",
    subtitle: "Frischer Wind für Ihren Garten - mit Leidenschaft und Einsatz",
    cta: "Mehr erfahren"
  },
  {
    id: 3,
    image: "/eric_gehen.webp",
    title: "Junges & Dynamisches Team",
    subtitle: "Mit Motivation und neuen Ideen für Sie da",
    cta: "Kennenlernen"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isSwipe, setIsSwipe] = useState(false);

  // Mindestabstand fÃ¼r einen Swipe (in Pixel)
  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe || isRightSwipe) {
      // Setze isSwipe auf true, um die schnellere Transition zu aktivieren
      setIsSwipe(true);
      
      if (isLeftSwipe) {
        // Nach links swipen = nÃ¤chstes Bild
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else {
        // Nach rechts swipen = vorheriges Bild
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
      
      // Nach der Transition zurÃ¼cksetzen (300ms sollten fÃ¼r die schnelle Transition ausreichen)
      setTimeout(() => {
        setIsSwipe(false);
      }, 300);
    }
    
    // Reset Touch-Werte
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwipe(false); // Normale Transition fÃ¼r automatische Wechsel
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative h-[70vh] lg:h-[80vh] overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity ${
            isSwipe ? "duration-300" : "duration-1000"
          } ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          
          <div className="absolute inset-0">
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />                        
            <div className="absolute inset-0 bg-black/50"></div>
            
            

             
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <div className="text-white">
                  <div className="mb-6">
                    <span className="inline-block bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                      Braun Hausmeisterservice
                    </span>
                  </div>
                  
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  
                  <p className="text-lg sm:text-2xl lg:text-3xl mb-8 leading-relaxed opacity-90">
                    {slide.subtitle}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/kontakt"
                      className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-4 sm:py-5 lg:py-6 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-center"
                    >
                      {slide.cta}
                    </a>
                    <a 
                      href="tel:+4917645861339"
                      className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold py-4 sm:py-5 lg:py-6 px-6 rounded-lg transition-colors text-center"
                      >
                      Sofort anrufen
                    </a>
                    <a
                      href="/immobilien-rundumloesung"
                      className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 sm:py-5 lg:py-6 px-8 rounded-lg transition-all duration-300 hover:scale-105 text-center"
                    >
                      Rundumlösung entdecken
                    </a>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators - nur auf grÃ¶ÃŸeren GerÃ¤ten sichtbar */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsSwipe(false); // Normale Transition fÃ¼r Klicks auf Indikatoren
              setCurrentSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-emerald-600 scale-125" 
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
