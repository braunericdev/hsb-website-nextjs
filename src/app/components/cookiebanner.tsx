"use client";
import { useState, useEffect } from "react";
import { loadGtag } from "src/lib/gtag";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("hs-cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("hs-cookie-consent", "accepted");
    setIsVisible(false);
    loadGtag();
  };

  const handleDecline = () => {
    localStorage.setItem("hs-cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-white text-sm sm:text-base leading-relaxed">
              Diese Website verwendet Cookies, um Ihr Erlebnis zu verbessern und Google Analytics zu ermöglichen.{" "}
              <a href="/datenschutz" className="text-emerald-400 hover:text-emerald-300 underline transition-colors">
                Mehr erfahren
              </a>
            </p>
          </div>
          
          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={handleDecline}
              className="flex-1 sm:flex-none px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              Ablehnen
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 sm:flex-none px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}