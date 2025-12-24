import React from "react";

export const Logo: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 32 }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="diskGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9300ff" />
                    <stop offset="100%" stopColor="#0070f3" />
                </linearGradient>
            </defs>
            {/* Record Disk */}
            <circle cx="50" cy="50" r="48" fill="#abababb1" stroke="url(#diskGradient)" strokeWidth="1" />
            <circle cx="50" cy="50" r="40" stroke="#1a1a1a" strokeWidth="1" />
            <circle cx="50" cy="50" r="32" stroke="#1a1a1a" strokeWidth="1" />
            <circle cx="50" cy="50" r="24" stroke="#1a1a1a" strokeWidth="1" />

            {/* Center Label */}
            <circle cx="50" cy="50" r="14" fill="url(#diskGradient)" />
            {/* Center Hole */}
            <circle cx="50" cy="50" r="2" fill="#0c0c0c" />
        </svg>
    );
};
