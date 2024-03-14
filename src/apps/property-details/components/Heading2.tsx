import React, { ReactNode } from 'react'

const Heading2 = ({children}: {children: ReactNode}) => {
  return (
    <h2 className='font-md text-slate-300 text-3xl text-center'>
       { children }
    </h2>
  )
}

export default Heading2