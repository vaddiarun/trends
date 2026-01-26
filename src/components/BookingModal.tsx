import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, User } from 'lucide-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    prefilledService?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, prefilledService }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [time, setTime] = useState('');
    const [service, setService] = useState('');

    useEffect(() => {
        if (isOpen) {
            setService(prefilledService || '');
        }
    }, [isOpen, prefilledService]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Format the date/time for readability
        const dateObj = new Date(time);
        const formattedTime = dateObj.toLocaleString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });

        const message = `Hi, I would like to book an appointment.%0A%0A*Service:* ${service}%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Preferred Time:* ${formattedTime}`;

        window.open(`https://wa.me/919121305649?text=${message}`, '_blank');
        onClose();
    };

    // Get current date-time string for min attribute (YYYY-MM-DDThh:mm)
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    const minDateTime = now.toISOString().slice(0, 16);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

            <div className="relative w-full max-w-md bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl p-6 animate-fade-in-up">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>

                <h2 className="text-2xl font-display font-bold text-white mb-6 pr-8">
                    Book Appointment
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400 font-medium ml-1">Service Name</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                                placeholder="Enter service name"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-11 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600"
                                required
                            />
                            <Calendar className="absolute left-3.5 top-3.5 text-gray-500" size={18} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-400 font-medium ml-1">Your Name</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-11 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600"
                                required
                            />
                            <User className="absolute left-3.5 top-3.5 text-gray-500" size={18} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-400 font-medium ml-1">Phone Number</label>
                        <div className="relative">
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Enter phone number"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-11 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600"
                                required
                            />
                            <Phone className="absolute left-3.5 top-3.5 text-gray-500" size={18} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-400 font-medium ml-1">Preferred Time</label>
                        <div className="relative">
                            <input
                                type="datetime-local"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                min={minDateTime}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600 [color-scheme:dark]"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-accent hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] mt-6"
                    >
                        CONFIRM BOOKING
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;
