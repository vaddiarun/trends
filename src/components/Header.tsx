import React from 'react';
import logo from '../assets/images/logo.jpg';
import boardRef from '../assets/images/board_ref.jpg';
import { Phone } from 'lucide-react';

const Header: React.FC = () => {
    return (
        <header className="bg-primary text-white px-4 md:px-8 py-6 shadow-2xl border-b-4 border-secondary relative overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />

            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">

                {/* Logo Section */}
                <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-secondary p-1 bg-white shadow-[0_0_15px_rgba(107,45,124,0.5)] overflow-hidden flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                        <img
                            src={logo}
                            alt="TBS Makeup"
                            className="w-full h-full object-contain"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement!.innerText = 'TBS';
                            }}
                        />
                    </div>
                </div>

                {/* Center Branding Section */}
                <div className="text-center flex flex-col items-center">
                    {/* Kannada Name */}
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide drop-shadow-md" style={{ fontFamily: 'sans-serif' }}>
                        ಟ್ರೆಂಡ್ಸ್ ಬ್ಯೂಟಿ ಸ್ಪಾಟ್
                    </h2>

                    {/* English Name */}
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-accent tracking-wider uppercase mb-3 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                        Trends Beauty Spot
                    </h1>

                    {/* Badge */}
                    <div className="bg-white text-black px-8 py-1.5 rounded-full font-bold uppercase tracking-[0.2em] text-sm md:text-base transform -skew-x-12 shadow-[0_0_10px_white] border-2 border-gray-300">
                        Unisex Salon
                    </div>
                </div>

                {/* Contact & Visuals Section */}
                <div className="flex items-center gap-6">
                    <div className="text-right hidden md:block">
                        <div className="flex items-center justify-end gap-2 text-gray-400 text-xs uppercase tracking-widest mb-1">
                            <Phone size={14} className="text-accent" />
                            <span>Book Appointment</span>
                        </div>
                        <a href="tel:9121305649" className="text-2xl md:text-3xl font-bold text-white hover:text-accent transition-colors font-display tracking-wide block">
                            9121305649
                        </a>
                    </div>

                    {/* Model Image Card - Simulation */}
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-800 rounded-xl overflow-hidden border-2 border-gray-700 shadow-lg hidden lg:block transform rotate-3 hover:rotate-0 transition-all duration-300">
                        <img
                            src={boardRef}
                            alt="Model"
                            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
