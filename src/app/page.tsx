"use client"

import { useState } from "react"
import Header from "@/components/header"

export default function Home() {

  const color:string[] = ["bg-red-500", "bg-green-500", "bg-blue-500", "bg-yellow-500,"]
  const [index, setIndex] = useState<number>(0)

  const [digit, setDigit] = useState<number>(0)

  const increment = () => {
    setDigit(digit + 2)
  }
    const decrement = () => {
    setDigit(digit - 4)
  }
  
  const changeColor = () => {
    if (index < color.length) {
      setIndex(index + 1)
    }
    else {
      setIndex(0)
    }
  }

  return (
    <div className={`mt-4 flex flex-col min-h-screen items-center justify-center ${color[index]}`}>
      <h1 className="text-4xl font-bold mb-8 text-white">Hello world!</h1>
      <h1 className="text-4xl font-bold mb-8 text-white">{digit}</h1>
      <div className="display:flex flex-row gap-10 mb-8">
      <button className="w-[60] h-[40] bg-black hover:bg-yellow-200 rounded-xl bg-white text-black rounded mb-4" onClick={increment}>+</button>
      <button className="w-[60] h-[40] bg-black hover:bg-yellow-200 rounded-xl bg-white text-black rounded mb-4" onClick={decrement}>-</button>
      </div>
      <button className="w-[120] bg-black hover:bg-yellow-200 rounded-xl bg-white text-black rounded" onClick={changeColor}>Change color</button>
    </div>
  )
}
