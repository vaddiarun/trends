import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingBookButtonProps {
    onClick: () => void;
}

const FloatingBookButton: React.FC<FloatingBookButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 text-white px-5 py-3 rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:bg-green-400 hover:scale-105 transition-all duration-300 animate-fade-in-up group cursor-pointer border-none"
        >
            <MessageCircle size={24} fill="currentColor" className="text-white" />
            <span className="font-bold tracking-wide hidden md:inline">Book Appointment</span>
        </button>
    );
};

export default FloatingBookButton;
