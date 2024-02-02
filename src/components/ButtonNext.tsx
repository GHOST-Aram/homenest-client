import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
const ButtonNext = () => {
  return (
    <button className='p-4 border-none rounded-full bg-slate-400 text-blue-700
        hover:bg-blue-700 hover:text-slate-300 transition-all'
    >
        <FaAngleRight className='font-bold text-3xl'/>
    </button>
  )
}

export default ButtonNext