import React from 'react';
import type { PackageData } from '../data/packages';
import { Check, MessageCircle } from 'lucide-react';

interface PackageCardProps {
    pkg: PackageData;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
    const whatsappUrl = `https://wa.me/919121305649?text=Hi, I would like to book the package: ${pkg.services.join(' + ')} - Offer Price ₹${pkg.offer}`;

    return (
        <div className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-gray-600 hover:bg-gray-800/80 transition-all duration-300 h-full relative">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Image Banner */}
            <div className="h-48 overflow-hidden relative">
                <img
                    src={pkg.image}
                    alt="Service"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white border border-gray-700">
                    {pkg.category}
                </div>
            </div>

            <div className="p-6 flex-grow relative z-10 flex flex-col">
                <ul className="mb-6 space-y-3 flex-grow">
                    {pkg.services.map((s, i) => (
                        <li key={i} className="text-gray-200 font-medium text-sm md:text-base flex items-start gap-2.5">
                            <div className="mt-1 text-accent flex-shrink-0">
                                <Check size={16} strokeWidth={3} />
                            </div>
                            {s}
                        </li>
                    ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-gray-700/50">
                    <div className="flex justify-between items-end mb-4">
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-xs uppercase font-bold tracking-wider">Total</span>
                            <span className="text-gray-400 line-through font-display text-lg decoration-red-500/60 decoration-2">₹{pkg.total}</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="bg-red-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full mb-1 animate-pulse">Save ₹{pkg.total - pkg.offer}</div>
                            <span className="text-offer font-display font-bold text-3xl md:text-4xl text-shadow-sm">₹{pkg.offer}</span>
                        </div>
                    </div>

                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-4 rounded-lg transition-colors group-hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                    >
                        <MessageCircle size={20} />
                        <span>BOOK NOW</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;
