"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);  // Zustand state for menu toggle
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  
  // Close mobile menu when path changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  
  // Custom Link component that also closes the mobile menu
  const NavLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => {
    return (
      <Link href={href} className={className} onClick={() => setIsOpen(false)}>
        {children}
      </Link>
    );
  };

  return ( 
    <nav className="flex border-b border-gray-200 dark:border-gray-700 py-1 px-4 sm:px-5 font-sans min-h-[70px] tracking-wide relative z-50 bg-white dark:bg-gray-900">
      <div className="flex flex-wrap items-center gap-4 w-full">
        {/* Logo */}
        <Link className="flex items-baseline" href="/">
          <h1 className="p-0 my-0 mr-1 font-bold text-[2.2rem] sm:text-[2.7rem] lg:text-[3.2rem] dark:text-white">BRAUN</h1>
          <p className="p-0 m-0 text-xs sm:text-sm lg:text-xl dark:text-gray-300">Hausmeisterservice</p>          
        </Link>

        {/* Hamburger Button */}
        <button
          className="lg:hidden fixed top-4 right-2 sm:right-4 z-[100] rounded-full bg-white dark:bg-gray-800 p-2 sm:p-3 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-200"
          onClick={() => {
            setIsOpen(!isOpen);
            console.log("Menu toggled:", isOpen); // Debugging: Zustand Ã¼berprÃ¼fen
          }}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            // Kreuz-Symbol (SchlieÃŸen)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 sm:w-6 sm:h-6 text-black dark:text-white transform transition-transform duration-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M6 6l12 12M6 18L18 6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            // Hamburger-Symbol (Öffnen)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 sm:w-6 sm:h-6 text-black dark:text-white transform transition-transform duration-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M3 12h18M3 6h18M3 18h18"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        {/* Dropdown Menu */}
        <div
          className={`lg:!flex lg:flex-auto lg:ml-12 max-lg:fixed max-lg:bg-white dark:max-lg:bg-gray-900 max-lg:w-auto max-lg:min-w-fit max-lg:max-w-xs max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md dark:max-lg:shadow-gray-800 max-lg:overflow-y-auto max-lg:overflow-x-hidden z-50 transition-transform ${
            isOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"
          }`}
        >
          <ul className="lg:flex lg:gap-x-6 max-lg:space-y-2">
            <li className="mb-6 hidden max-lg:block">
              <a href="javascript:void(0)">
                
              </a>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-200 dark:max-lg:border-gray-700 max-lg:py-3">
              <NavLink
                href="/"
                className="hover:text-[#007bff] text-[#007bff] dark:text-[#2196f3] block font-bold text-sm lg:text-[15px]"
              >
                Start
              </NavLink>
            </li>
            <li 
              className="max-lg:border-b max-lg:border-gray-200 dark:max-lg:border-gray-700 max-lg:py-3 relative group"
              onMouseEnter={() => setDropdownOpen(true)} 
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className="relative static lg:relative">
                <button
                  className="hover:text-[#007bff] text-gray-600 dark:text-gray-300 font-bold text-sm lg:text-[15px] flex items-center"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onClick={() => setDropdownOpen(!dropdownOpen)} 
                >
                  Dienstleistungen
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Mega Menu Dropdown */}
                <div 
                  className={`hidden absolute top-full left-0 lg:-left-20 xl:left-0 mt-1 max-lg:w-80 lg:w-[600px] bg-white dark:bg-gray-800 shadow-xl rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ${
                    dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  } lg:inline-block z-50`}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  style={{ maxWidth: '600px' }}
                >
                  <div className="p-6 max-lg:grid-cols-1 lg:grid-cols-2 grid gap-6" style={{ width: '100%' }}>
                    {/* Immobilien-RundumlÃ¶sung - Hervorgehoben */}
                    <Link 
                      href="/immobilien-rundumloesung"
                      className="max-lg:col-span-1 lg:col-span-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800 block group hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="flex items-center mb-2">
                        <svg className="w-6 h-6 text-emerald-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="bg-emerald-700 text-white text-xs px-2 py-1 rounded-full font-bold">NEU</span>
                      </div>
                      <h3 className="font-bold text-emerald-800 dark:text-emerald-500 group-hover:text-emerald-900 dark:group-hover:text-emerald-400 mb-1">
                        Immobilien-Rundumlösung
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Komplettservice für Hausverwaltungen & Unternehmen
                      </p>
                    </Link>
                    
                    {/* Einzelne Services */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Garten & Außenbereich</h4>
                      <ul className="space-y-2">
                        <li>
                          <Link href="/Gartenpflege" className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-500 transition-colors">
                            Gartenpflege
                          </Link>
                        </li>
                        <li>
                          <Link href="/Grundstueckspflege" className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-500 transition-colors">
                            Grundstückspflege
                          </Link>
                        </li>
                        <li>
                          <Link href="/Heckenschnitt" className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-500 transition-colors">
                            Heckenschnitt
                          </Link>
                        </li>
                        <li>
                          <Link href="/Hofreinigung" className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-500 transition-colors">
                            Hofreinigung
                          </Link>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Service & Reinigung</h4>
                      <ul className="space-y-2">
                        <li>
                          <Link href="/Gebaeudereinigung" className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-500 transition-colors">
                            Gebäudereinigung
                          </Link>
                        </li>
                        <li>
                          <Link href="/Außenanlagenreinigung" className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-500 transition-colors">
                            Außenanlagenreinigung
                          </Link>
                        </li>
                        <li>
                          <Link href="/Winterdienst" className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-500 transition-colors">
                            Winterdienst
                          </Link>
                        </li>
                        <li>
                          <Link href="/Muelltonnenservice" className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-500 transition-colors">
                            Mülltonnenservice
                          </Link>
                        </li>
                        <li>
                          <Link href="/Bodenverlegung" className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-500 transition-colors">
                            Bodenverlegung
                          </Link>
                        </li>
                        <li>
                          <Link href="/Aufbauservice" className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-500 transition-colors">
                            Aufbauservice
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Mobile Dropdown */}
                <div className="lg:hidden mt-2 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                  <NavLink href="/immobilien-rundumloesung" className="block py-2 text-sm text-emerald-700 dark:text-emerald-500 font-semibold">
                    🏡 Immobilien-Rundumlösung
                  </NavLink>
                  <NavLink href="/Gartenpflege" className="block py-1 text-sm text-gray-600 dark:text-gray-300">
                    Gartenpflege
                  </NavLink>
                  <NavLink href="/Grundstückspflege" className="block py-1 text-sm text-gray-600 dark:text-gray-300">
                    Grundstückspflege
                  </NavLink>
                  <NavLink href="/Heckenschnitt" className="block py-1 text-sm text-gray-600 dark:text-gray-300">
                    Heckenschnitt
                  </NavLink>
                  <NavLink href="/Hofreinigung" className="block py-1 text-sm text-gray-600 dark:text-gray-300">
                    Hofreinigung
                  </NavLink>
                  <NavLink href="/Gebaeudereinigung" className="block py-1 text-sm text-gray-600 dark:text-gray-300">
                    Gebäudereinigung
                  </NavLink>
                  <NavLink href="/Außenanlagenreinigung" className="block py-1 text-sm text-gray-600 dark:text-gray-300">
                    Außenanlagenreinigung
                  </NavLink>
                  <NavLink href="/Winterdienst" className="block py-1 text-sm text-gray-600 dark:text-gray-300">
                    Winterdienst
                  </NavLink>
                  <NavLink href="/Muelltonnenservice" className="block py-1 text-sm text-gray-600 dark:text-gray-300">
                    Mülltonnenservice
                  </NavLink> <NavLink href="/Bodenverlegung" className="block py-1 text-sm text-gray-600 dark:text-gray-300">
                    Bodenverlegung
                  </NavLink>
                  <NavLink href="/Aufbauservice" className="block py-1 text-sm text-gray-600 dark:text-gray-300">
                    Aufbauservice
                  </NavLink>
                </div>
              </div>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-200 dark:max-lg:border-gray-700 max-lg:py-3">
              <NavLink
                href="/kontakt/"
                className="hover:text-[#007bff] text-gray-600 dark:text-gray-300 block font-bold text-sm lg:text-[15px]"
              >
                Kontakt
              </NavLink>
            </li>
          </ul>

          <ul className="lg:flex lg:items-center ml-auto max-lg:block lg:space-x-8 ml-auto">
            <li className="max-lg:border-b max-lg:border-gray-200 dark:max-lg:border-gray-700 max-lg:py-3 max-lg:mt-2">
              <NavLink
                href="/datenschutz"
                className="hover:text-[#007bff] text-gray-600 dark:text-gray-300 block font-bold text-sm lg:text-[15px]"
              >
                Datenschutz
              </NavLink>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-200 dark:max-lg:border-gray-700 max-lg:py-3 max-lg:mt-2">
              <NavLink
                href="/impressum"
                className="hover:text-[#007bff] text-gray-600 dark:text-gray-300 block font-bold text-sm lg:text-[15px]"
              >
                Impressum
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
