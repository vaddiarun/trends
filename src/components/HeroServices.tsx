import React from 'react';
import { Scissors, User, Droplets, Sparkles, Footprints } from 'lucide-react';

const services = [
    { name: 'Haircut', icon: Scissors },
    { name: 'Beard', icon: User },
    { name: 'Hair Wash', icon: Droplets },
    { name: 'Facial', icon: Sparkles },
    { name: 'Pedicure', icon: Footprints },
];

const HeroServices: React.FC = () => {
    return (
        <div className="bg-charcoal border-b border-gray-800 py-6 overflow-hidden relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm border border-gray-800 p-4 w-28 md:w-36 rounded-xl hover:border-secondary hover:shadow-[0_0_15px_rgba(107,45,124,0.3)] transition-all duration-300 cursor-default"
                        >
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-900 rounded-full flex items-center justify-center mb-3 group-hover:bg-secondary group-hover:text-white text-gray-400 transition-colors duration-300">
                                <service.icon size={24} className="md:w-8 md:h-8" />
                            </div>
                            <span className="text-gray-300 font-medium text-sm md:text-base uppercase tracking-wider group-hover:text-accent transition-colors">
                                {service.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroServices;
