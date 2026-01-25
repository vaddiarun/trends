import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingBookButton: React.FC = () => {
    return (
        <a
            href="https://wa.me/919121305649"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 text-white px-5 py-3 rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:bg-green-400 hover:scale-105 transition-all duration-300 animate-fade-in-up"
        >
            <MessageCircle size={24} fill="currentColor" className="text-white" />
            <span className="font-bold tracking-wide hidden md:inline">Book Appointment</span>
        </a>
    );
};

export default FloatingBookButton;
