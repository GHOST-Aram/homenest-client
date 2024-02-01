import React, { ReactComponentElement } from 'react'

const Section = ({ children }: SectionProps) => {
  return (
    <section className='mb-8 pb-8 px-8'>
        {children}
    </section>
  )
}

interface SectionProps{
    children: ReactComponentElement<any> |  ReactComponentElement<any>[]  
}

export default Section