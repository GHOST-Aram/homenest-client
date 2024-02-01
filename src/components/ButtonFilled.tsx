import React from 'react'

const ButtonFilled = ({ children }: ButtonProps) => {
  return (
    <button
        className='px-8 py-4 text-light bg-primary border-2 
        rounded-md font-bold button-filled'
    >{children}</button>
  )
}


interface ButtonProps{
    children: string
}
export default ButtonFilled