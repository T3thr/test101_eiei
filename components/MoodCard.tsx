// components/MoodCard.tsx

import React from 'react'

interface MoodCardProps {
    mood: string;
    count: number;
    color: string;
}

export default function MoodCard({mood,count,color}:MoodCardProps) {
    return (
        <div className={`${color} text-foreground rounded-lg p-4 border border-secondary shadow-md flex flex-col items-center`}>
            <h2>{mood}</h2>
            <p>{count}</p>
        </div>
    )
}