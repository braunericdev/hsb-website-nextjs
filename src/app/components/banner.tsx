"use client";

import React from 'react';

const Banner: React.FC = () => {
    return (
        <div className='relative flex px-2 lg:px-50 py-8 items-end justify-between bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-600 overflow-hidden'>
        {/* Decorative background elements */}
        <div className='absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16'></div>
        <div className='absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-x-12 translate-y-12'></div>
        <div className='absolute top-1/2 right-1/4 w-16 h-16 bg-emerald-600/30 rounded-full'></div>

        <div className='text-white text-sm sm:text-base lg:text-lg xl:text-2xl font-bold flex-1 mr-4 relative z-10'>
            Sie suchen nach einer langfristigen Rund-um-Pflege für ihre Immobilie?<br/>
            Dann sind Sie bei uns genau richtig!<br/>
        </div> 
        <a href="/immobilien-rundumloesung" className='flex items-center justify-center relative z-10'>
            {/* Mobile: Nur Pfeil im weißen Kreis - halb so groß */}
            <div className='lg:hidden w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 hover:scale-110 transition-all duration-300 shadow-lg'>
                <span className='text-green-700 font-bold text-sm'>{">"}</span>
            </div>
            {/* Desktop: Text mit Pfeil */}
            <div className='hidden lg:block text-white font-bold text-base xl:text-lg px-4 py-2 rounded-lg hover:bg-emerald-800 transition duration-300'>
                Mehr Erfahren {">"}
            </div>
        </a>
        </div>  
    )
};

export default Banner;   
