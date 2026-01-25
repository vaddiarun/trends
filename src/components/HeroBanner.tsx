import React from 'react';
import heroBg from '../assets/images/hero_banner.png';

interface HeroBannerProps {
    onNavigate: (tab: 'men' | 'women') => void;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ onNavigate }) => {
    return (
        <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Luxury Salon Interior"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-widest uppercase drop-shadow-[0_4px_10px_rgba(0,0,0,1)]">
                    Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">Style</span>
                </h1>
                <p className="text-gray-200 text-lg md:text-2xl font-light tracking-wide">
                    Premium Unisex Grooming & Beauty Services
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
                    <button
                        onClick={() => onNavigate('men')}
                        className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-accent transition-colors duration-300 rounded-full cursor-pointer"
                    >
                        For Him
                    </button>
                    <button
                        onClick={() => onNavigate('women')}
                        className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-full cursor-pointer"
                    >
                        For Her
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full animate-scroll-down" />
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
