// components/MoodButton.tsx
'use client'

import React from "react";

interface MoodButtonProps {
    label : string;
    color : string;
    onClick : () => void;
}

export default function MoodButton({label,color,onClick}: MoodButtonProps){
    return (
        <button
            onClick={onClick}
            className={`${color} text-foreground rounded-lg px-4 py-2`}
        >
            {label}
        </button>
    )
} 