import React from 'react'

const ButtonOutlined = ({ children, colorClass, onClick }: ButtonProps ) => {
  return (
    <button
		onClick={onClick}
        className={`px-8 py-4 text-${colorClass ||'slate-300'} bg-none border-2 
			border-${colorClass||'slate-300'} rounded-md font-bold 
			hover:scale-110 transition-all`}
    >{children}</button>
  )
}


interface ButtonProps{
    children: string | any
	colorClass?: string
	onClick?: () => void
}
export default ButtonOutlined