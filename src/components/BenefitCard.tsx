import React, { ReactComponentElement } from 'react'
import Heading from './Heading'
import ButtonOutlined from './ButtonOutlined'

const Card = ({ title, textContent, icon, buttonLabel }: CardProps) => {
    return (
        <div className='p-4 rounded-md card bg-slate-900 text-center space-y-4 min-w-80'>
            <Heading level={2} className='font-md text-xl text-slate-300'>{title}</Heading>            
            {icon}
            <p className="text-slate-300 font-light text-sm">{textContent}</p>
            <ButtonOutlined> { `${buttonLabel}` }</ButtonOutlined>
        </div>
    )
}

interface CardProps{
    title: string
    textContent: string
    buttonLabel: string
    icon: ReactComponentElement<any>
}

export default Card