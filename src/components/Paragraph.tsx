import React from 'react'

const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <p className='font-md text-md text-slate-800 mb-4'>{children}</p>
  )
}

interface ParagraphProps{
    children: any
}

export default Paragraph