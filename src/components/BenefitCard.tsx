import React, { ReactComponentElement } from 'react'
import Heading from './Heading'

const BenefitCard = ({ title, textContent, icon }: BenefitCardProps) => {
    return (
        <div className='p-4 rounded-md Benefitcard bg-slate-400 text-center space-y-4 min-w-80'>
            <Heading level={2} className='font-md text-xl text-slate-900'>{title}</Heading>            
            {icon}
            <p className="text-slate-900 font-md text-md">{textContent}</p>
        </div>
    )
}

interface BenefitCardProps{
    title: string
    textContent: string
    icon: ReactComponentElement<any>
}

export default BenefitCard