// components/Button.tsx
'use client'
interface ButtonProps {
    label: string;
    onClick: ()=> void;
}

export default function Button({label,onClick}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className='rounded-lg px-4 py-2'
        >
            {label}
        </button>
    )
}