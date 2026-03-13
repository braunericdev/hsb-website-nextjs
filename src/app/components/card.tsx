"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Service {
    id: number;
    image: string;
    title: string;
    link: string;
}

const services: Service[] = [
    { id: 1, image: '/card_grundstueckspflege.webp', title: 'Grundstückspflege', link: 'Grundstueckspflege' },
    { id: 2, image: '/card_gebaeudereinigung.webp', title: 'Gebäudereinigung', link: 'Gebaeudereinigung' },
    { id: 3, image: '/card_winterdienst2.webp', title: 'Winterdienst', link: 'Winterdienst' },
    { id: 4, image: '/card_mülltonnen.webp', title: 'Mülltonnenservice', link: 'Muelltonnenservice' },
    { id: 4, image: '/card_gepflegter_garten_front.webp', title: 'Gartenpflege', link: 'Gartenpflege' },
    { id: 5, image: '/card_bodenverlegung.webp', title: 'Bodenverlegung', link: 'Bodenverlegung' },
    { id: 6, image: '/card_hofreinigung.webp', title: 'Hofreinigung', link: 'Hofreinigung' },
    { id: 7, image: '/card_terassendach.webp', title: 'Außenanlagenreinigung', link: 'Außenanlagenreinigung' },
    { id: 9, image: '/card_Küchenaufbau.webp', title: 'Aufbauservice', link: 'Aufbauservice' },
    
];

const Card: React.FC = () => {
    return (
        <div className="py-12 lg:py-16 px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 lg:mb-12">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">Unsere Dienstleistungen</h1>
                    <div className="w-24 h-1 bg-emerald-700 mx-auto rounded-full"></div>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mt-4">
                        Professionelle Lösungen für Ihr Zuhause
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {services.map((service) => (
            <Link
              key={service.id}
              href={`/${encodeURIComponent(service.link)}`}
              className="group p-4 flex flex-col items-center rounded-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-200 ease-out cursor-pointer bg-white dark:bg-gray-800 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600"
            >
              <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: '56.25%' }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300 ease-out"
                  loading='lazy'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>
              <div className="flex justify-between items-center w-full mt-3">
                <h3 className="text-sm sm:text-base lg:text-lg text-black dark:text-white font-semibold group-hover:text-emerald-700 dark:group-hover:text-emerald-500 transition-colors duration-200">{service.title}</h3>
              </div>
            </Link>
            ))}
                </div>
            </div>
        </div>
    );
};

export default Card;

