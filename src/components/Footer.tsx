import React from 'react';
import { Phone, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black border-t border-gray-900 py-8">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center space-y-4">
                <h3 className="text-xl md:text-2xl font-display font-medium text-white tracking-widest uppercase">
                    Visit Trends Beauty Spot Today
                </h3>

                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-gray-400 text-sm">
                    <div className="flex items-center gap-2 hover:text-white transition-colors">
                        <Phone size={16} className="text-accent" />
                        <span>9121305649</span>
                    </div>
                    <span className="hidden md:block w-1.5 h-1.5 bg-gray-700 rounded-full" />
                    <div className="flex items-center gap-2 hover:text-white transition-colors">
                        <Instagram size={16} className="text-secondary" />
                        <span>@trends_beauty_spot</span>
                    </div>
                </div>

                <div className="pt-8 text-gray-800 text-xs">
                    © {new Date().getFullYear()} TRENDS BEAUTY SPOT. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
