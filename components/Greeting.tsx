// components/Greeting.tsx

import React from 'react'

interface GreetingProps {
    name: string; 
    greeting?: string;
}

export default function Greeting({name , greeting="สวัสดีจ้า"}: GreetingProps) {
    return (
        <div className='bg-background text-foreground border-2 rounded-lg p-4 shadow-md'>
            <h1 className='text-xl font-bold'>
                {greeting} , {name}
            </h1>
        </div>
    )
}