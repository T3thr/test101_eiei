// app/page.tsx
'use client'
import { useState } from "react"
import Custom from "@/components/Custom"
import Student from "@/components/Student"
import Greeting from "@/components/Greeting"
import Button from "@/components/Button"
import MoodButton from "@/components/MoodButton"
import MoodCard from "@/components/MoodCard"

export default function Home() {
  const [moods,setMoods] = useState({
    happy:0,
    sad:0,
    angry:0
  });

  const handleMoodClick = (mood: keyof typeof moods) => {
    setMoods((prev) => ({
      ...prev,
      [mood]: prev[mood] +1,
    }));
  };

  const handleClick = () => {
    alert("คุณคลิกฉันทำไมฟะ")
  };

  return (
    <div className='flex min-h-screen items-center justify-center mx-auto'>
      <div className='flex flex-col'>
        <Custom />
        <Student id='555' name='Poop' age={25}/>
        <Greeting name='moodeng' greeting='สวีดัส' />
      </div>
      <div>
        <Button 
        label="คลิกฉันสิ" 
        onClick={handleClick}
        />
      </div>

      <div>
        <h1>Mood Tracker</h1>
        <div className="flex gap-4">
        <MoodButton
          label="ดีใจจุงเบย"
          color="bg-blue-400"
          onClick={()=> handleMoodClick("happy")}
        />
        <MoodButton
          label="เสียจุย"
          color="bg-purple-500"
          onClick={()=> handleMoodClick("sad")}
        />
        <MoodButton
          label="โกดแย้วน้า"
          color="bg-red-400"
          onClick={()=> handleMoodClick("angry")}
        />
        </div>

        <div className="grid gap-4">
          <MoodCard
            mood="ดีใจ"
            count={moods.happy}
            color="bg-blue-400"
          />
          <MoodCard
            mood="เสียใจ"
            count={moods.sad}
            color="bg-purple-500"
          />
          <MoodCard
            mood="โกรธ"
            count={moods.angry}
            color="bg-red-400"
          />          
        </div>
      </div>

    </div>
  )
}