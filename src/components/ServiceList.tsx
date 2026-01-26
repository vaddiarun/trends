import React from 'react';
import type { SingleServiceData } from '../data/packages'; // Assuming this is exported from packages.ts
import { ArrowRight } from 'lucide-react';

interface ServiceListProps {
    title: string;
    services: SingleServiceData[];
    onBook: (serviceName: string) => void;
    theme: 'men' | 'women';
}

const ServiceList: React.FC<ServiceListProps> = ({ title, services, onBook, theme }) => {
    const isMen = theme === 'men';

    return (
        <div className="max-w-2xl mx-auto mb-16">
            <div className="flex flex-col items-center mb-10">
                <h3 className={`text-2xl md:text-3xl font-display font-bold uppercase tracking-wider text-center ${isMen ? 'text-white' : 'text-secondary'}`}>
                    {title}
                </h3>
            </div>

            <div className="space-y-3 px-4">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        onClick={() => onBook(service.name)}
                        className="group flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/20 hover:translate-x-1 transition-all cursor-pointer"
                    >
                        <div className="flex flex-col">
                            <span className="text-white font-medium text-lg tracking-wide group-hover:text-accent transition-colors">
                                {service.name}
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-xl font-bold font-display text-gray-300">
                                ₹{service.price}
                            </span>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isMen ? 'bg-white/10 text-white' : 'bg-secondary/20 text-secondary'}`}>
                                <ArrowRight size={16} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceList;
