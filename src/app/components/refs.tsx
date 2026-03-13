import React from 'react';
import Image from 'next/image';

interface Service {
    id: number;
    image: string;
    title: string;
    height: string;
}

const services: Service[] = [
    { id: 1, image: '/refs_rasenmähen_2.webp', title: 'Rasenmähen', height: 'h-84' },
    { id: 2, image: '/refs_gehwegpflege.webp', title: 'Gehwegpflege', height: 'h-84' },
    { id: 3, image: '/refs_hofreinigung_2.webp', title: 'Hofpflege', height: 'h-84' },
    { id: 8, image: '/refs_schubkarre.webp', title: 'Gartenpflege', height: 'h-64' },
    { id: 5, image: '/refs_hofreinigung.webp', title: 'Hofreinigung', height: 'h-80' },
    { id: 6, image: '/refs_terassendach.webp', title: 'Carportreinigung', height: 'h-72' },
    { id: 7, image: '/refs_terasse_unten.webp', title: 'Aufbauservice', height: 'h-60' },
    { id: 4, image: '/refs_treppenhaus.webp', title: 'Gebäudereinigung', height: 'h-96' },
    { id: 9, image: '/refs_laminat.webp', title: 'Bodenarbeiten', height: 'h-52' },
    { id: 10, image: '/refs_Rasenmähen2.webp', title: 'Rasenpflege', height: 'h-76' },
    { id: 11, image: '/refs_hecke_nachher.webp', title: 'Heckenpflege', height: 'h-68' },
    { id: 12, image: '/refs_winterdienst.webp', title: 'Winterdienst', height: 'h-84' },
    
];

const Refs: React.FC = () => {
    return (
        <div className="py-12 lg:py-16 px-4 lg:px-8 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 lg:mb-12">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">Referenzen</h1>
                    <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mt-4">
                        Einblicke in unsere professionelle Arbeit
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    loading='lazy'
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Title Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {service.title}
                                    </h3>
                                </div>
                                
                                {/* Hover Icon */}
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-white/90 dark:bg-gray-800/90 rounded-full p-2">
                                        <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Sauberer Abschluss */}
                <div className="mt-8 lg:mt-12 text-center">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                </div>
            </div>
        </div>
    );
};

export default Refs;
