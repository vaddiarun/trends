import React from 'react';
import { X, Phone } from 'lucide-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    prefilledService?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, prefilledService }) => {

    const handleCall = () => {
        window.location.href = 'tel:+919121305649';
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

            <div className="relative w-full max-w-sm bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl p-6 animate-fade-in-up text-center">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                        <Phone size={32} className="text-accent" />
                    </div>
                </div>

                <h2 className="text-2xl font-display font-bold text-white mb-2">
                    Book Appointment
                </h2>

                <p className="text-gray-400 mb-6">
                    {prefilledService ? (
                        <>
                            To book <span className="text-accent">{prefilledService}</span>, please call us directly.
                        </>
                    ) : (
                        "Please call us directly to book your appointment."
                    )}
                </p>

                <div className="bg-white/5 rounded-xl p-4 mb-6 border border-white/10">
                    <p className="text-sm text-gray-500 mb-1 font-medium uppercase tracking-wider">Call Us At</p>
                    <p className="text-2xl font-bold text-white tracking-wide">+91 91213 05649</p>
                </div>

                <button
                    onClick={handleCall}
                    className="w-full bg-accent hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] flex items-center justify-center gap-2 group"
                >
                    <Phone size={20} className="group-hover:scale-110 transition-transform" />
                    CALL NOW
                </button>
            </div>
        </div>
    );
};

export default BookingModal;
