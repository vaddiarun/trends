import React from 'react';
import PackageCard from './PackageCard';
import type { PackageData } from '../data/packages';

interface PackageSectionProps {
    title: string;
    packages: PackageData[];
    theme: 'men' | 'women';
    id?: string;
    onBook: (serviceName: string) => void;
}

const PackageSection: React.FC<PackageSectionProps> = ({ title, packages, theme, id, onBook }) => {
    const isMen = theme === 'men';

    return (
        <section id={id} className={`py-16 relative overflow-hidden ${isMen ? 'bg-black' : 'bg-[#050505]'}`}>
            {/* Background Effects */}
            {isMen ? (
                <>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/10 to-transparent pointer-events-none" />
                </>
            ) : (
                <>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-5 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-900/10 to-transparent pointer-events-none" />
                </>
            )}

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-accent uppercase tracking-wider text-center drop-shadow-lg">
                        {title}
                    </h2>
                    <div className="w-32 h-1 bg-secondary mt-4 rounded-full relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1/3 h-full bg-white animate-slide" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {packages.map((pkg, idx) => (
                        <PackageCard key={idx} pkg={pkg} onBook={onBook} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PackageSection;
