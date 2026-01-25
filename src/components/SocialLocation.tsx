import React from 'react';
import qrCode from '../assets/images/qr_code.jpg';
import { Instagram, MapPin, Navigation } from 'lucide-react';

const SocialLocation: React.FC = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-white relative">
            <div className="container mx-auto px-4 text-center">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
                    {/* Social / QR */}
                    <div className="flex flex-col items-center">
                        <div className="bg-white p-3 rounded-2xl shadow-[0_0_20px_rgba(250,204,21,0.3)] mb-6 transform hover:scale-105 transition-transform duration-300">
                            <img src={qrCode} alt="Instagram QR" className="w-64 h-64 object-contain rounded-xl" />
                        </div>
                        <a
                            href="https://instagram.com/trends_beauty_spot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xl font-bold text-white hover:text-secondary transition-colors"
                        >
                            <div className="p-2 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 rounded-full">
                                <Instagram size={24} className="text-white" />
                            </div>
                            @trends_beauty_spot
                        </a>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                        <div>
                            <h3 className="text-3xl font-display font-bold text-accent mb-2">VISIT US</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Experience premium grooming and beauty services at the heart of the city.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 w-full md:w-auto">
                            <a
                                href="https://maps.app.goo.gl/SUZpXqjBvEkQox7U9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 text-white py-4 px-8 rounded-xl transition-all duration-300 border border-gray-700 hover:border-accent w-full"
                            >
                                <MapPin className="text-accent group-hover:scale-110 transition-transform" />
                                <span className="font-semibold tracking-wide">View on Google Maps</span>
                            </a>

                            <a
                                href="https://maps.app.goo.gl/SUZpXqjBvEkQox7U9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-3 bg-accent hover:bg-yellow-400 text-black py-4 px-8 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(250,204,21,0.4)] w-full"
                            >
                                <Navigation className="action-icon group-hover:translate-x-1 transition-transform" />
                                <span className="font-bold tracking-wide">GET DIRECTIONS</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialLocation;
