import React from 'react'

const ButtonFilled = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
		onClick={onClick}
        className={`px-8 py-4 text-light bg-primary border-2  
        rounded-md font-bold hover:scale-110 transition-all ${className || ''}`}
    >{children}</button>
  )
}


interface ButtonProps{
    children: string
    className?:string
    onClick?: () => void
}
export default ButtonFilled