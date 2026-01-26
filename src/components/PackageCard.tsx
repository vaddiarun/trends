import React from 'react';
import type { PackageData } from '../data/packages';
import { MessageCircle } from 'lucide-react';

interface PackageCardProps {
    pkg: PackageData;
    onBook: (serviceName: string) => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg, onBook }) => {
    // Construct a descriptive name for the booking
    const bookingName = `${pkg.category.toUpperCase()} Package - ₹${pkg.offer}`;

    return (
        <div className="group bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-accent/30 hover:shadow-[0_0_30px_rgba(250,204,21,0.1)] hover:-translate-y-1 transition-all duration-500 h-full relative">

            {/* Image Banner */}
            <div className="h-56 overflow-hidden relative">
                <img
                    src={pkg.image}
                    alt="Service"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                    <span className="glass px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/90">
                        {pkg.category}
                    </span>
                </div>
            </div>

            <div className="p-6 flex-grow relative z-10 flex flex-col -mt-4">
                {/* Services List */}
                <div className="flex-grow space-y-3 mb-6">
                    {pkg.services.map((s, i) => (
                        <div key={i} className="flex items-start gap-3 group/item">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent group-hover/item:shadow-[0_0_8px_#FACC15] transition-all" />
                            <span className="text-gray-300 text-sm md:text-[15px] font-light tracking-wide group-hover/item:text-white transition-colors">
                                {s}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Pricing & CTA */}
                <div className="mt-auto pt-6 border-t border-white/5">
                    <div className="flex justify-between items-end mb-5">
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Regular Price</span>
                            <span className="text-gray-500 line-through font-display text-lg decoration-red-500/50 decoration-1">₹{pkg.total}</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="bg-red-600/90 backdrop-blur-sm text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded text-center mb-1">
                                Save ₹{pkg.total - pkg.offer}
                            </div>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200 font-display font-bold text-4xl shadow-amber-500/10 tracking-tight">
                                ₹{pkg.offer}
                            </span>
                        </div>
                    </div>

                    <button
                        onClick={() => onBook(bookingName)}
                        className="w-full relative overflow-hidden flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-green-900/20 hover:shadow-green-500/30 group cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                        <MessageCircle size={18} className="relative z-10" />
                        <span className="relative z-10 tracking-wider text-sm">BOOK APPOINTMENT</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;
