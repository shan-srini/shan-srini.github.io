import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

interface VinylPlayerProps {
    currentRecord: {
        coverImages: string[];
        title: string;
        artist: string;
        description: string;
        color: string;
    };
    isPlaying: boolean;
}

const VinylPlayer: React.FC<VinylPlayerProps> = ({ currentRecord, isPlaying }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Reset index when record changes
    useEffect(() => {
        setCurrentImageIndex(0);
    }, [currentRecord.coverImages]);

    // Cycle images when playing
    useEffect(() => {
        if (!isPlaying || currentRecord.coverImages.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % currentRecord.coverImages.length);
        }, 4000); // Cycle every 5 seconds

        return () => clearInterval(interval);
    }, [isPlaying, currentRecord.coverImages]);

    return (
        <div className="relative flex flex-col items-center justify-center py-10 w-full max-w-4xl mx-auto overflow-hidden px-4">
            {/* Turntable Base */}
            <div className="absolute inset-x-0 top-0 bottom-[-20px] bg-[#1a1a1a] rounded-lg border border-white/5 shadow-2xl z-0" />

            {/* The Platter */}
            <div className="relative z-10 w-80 h-80 md:w-96 md:h-96 rounded-full bg-black border-4 border-[#222] shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden">
                {/* Vinyl Grooves - using CSS from index.css */}
                <div className="absolute inset-0 vinyl-record opacity-40 rounded-full" />

                {/* The Disk */}
                <motion.div
                    key={currentRecord.title}
                    animate={{ rotate: isPlaying ? 360 : 0 }}
                    transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                    className="relative z-10 w-3/4 h-3/4 rounded-full border-4 border-black/50 shadow-inner overflow-hidden"
                >
                    <AnimatePresence>
                        <motion.img
                            key={currentRecord.coverImages[currentImageIndex]}
                            src={currentRecord.coverImages[currentImageIndex]}
                            alt={currentRecord.title}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </AnimatePresence>

                    {/* Center hole */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#0a0a0a] rounded-full border border-white/20 shadow-inner z-10" />
                    {/* Label Circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full border border-black/20 z-10" style={{ backgroundColor: currentRecord.color + '44' }} />
                </motion.div>
            </div>

            {/* Tonearm */}
            <motion.div
                animate={{ rotate: isPlaying ? 30 : 5 }}
                transition={{ type: "spring", stiffness: 50 }}
                className="absolute left-[calc(65%+150px)] md:left-[calc(50%+220px)] top-[8%] z-20 origin-top-right pointer-events-none"
            >
                <div className="w-2 h-[200px] bg-zinc-500 rounded-full relative shadow-lg">
                    {/* Pivot point */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-zinc-800 rounded-full -translate-y-1/2 translate-x-1/2 border-2 border-zinc-700 shadow-xl flex items-center justify-center">
                        <div className="w-4 h-4 bg-zinc-600 rounded-full border border-zinc-500" />
                    </div>

                    {/* Headshell */}
                    <div className="absolute bottom-0 right-[-16px] w-10 h-14 bg-zinc-800 rounded-sm border border-zinc-700 shadow-xl transform rotate-[-15deg]">
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-5 h-8 bg-zinc-700/50 rounded-sm border border-zinc-600/30" />
                    </div>
                </div>
            </motion.div>

            {/* Current Info */}
            <div className="mt-8 text-center z-10 w-full max-w-[100vw] px-4 box-border overflow-hidden">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-2 truncate">
                    {currentRecord.title}
                </h2>
                <p className="text-primary italic mb-4 text-sm md:text-base">
                    {currentRecord.artist}
                </p>
                <div className="text-secondary italic text-sm md:text-base leading-relaxed break-words whitespace-normal overflow-hidden max-w-full [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:text-left [&>ul]:inline-block">
                    <ReactMarkdown>{currentRecord.description}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default VinylPlayer;
