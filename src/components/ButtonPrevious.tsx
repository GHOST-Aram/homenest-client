import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";

const ButtonPrevious = () => {
  return (
    <button className='p-4 border-none rounded-full bg-slate-400 text-blue-700
        hover:bg-blue-700 hover:text-slate-300 transition-all'
    >
        <FaAngleLeft className='font-bold text-3xl'/>
    </button>
  )
}

export default ButtonPrevious