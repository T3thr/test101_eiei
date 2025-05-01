// components/Student.tsx
import React from 'react'

export default function Student(props: { id: string; name: string; age: number; }) {
    const {id, name, age} = props;
    return (
        <div className="border-2 border-background rounded-4xl shadow-md w-1/2 p-4 m-2">
            <div>
                Student Id: {id}, Student Name: {name}, Age: {age}
            </div>
        </div>
    )
}