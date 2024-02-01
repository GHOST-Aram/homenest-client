import React from 'react'

const ButtonOutlined = ({ children }: ButtonProps ) => {
  return (
    <button
        className='px-8 py-4 text-slate-300 bg-none border-2 border-slate-300
        rounded-md font-light hover:scale-110 transition-all'
    >{children}</button>
  )
}


interface ButtonProps{
    children: string | any
}
export default ButtonOutlined