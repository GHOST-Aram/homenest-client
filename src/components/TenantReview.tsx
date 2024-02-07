import React from 'react'
import Heading from './Heading';
import Image from './Image';

const TenantReview = ({ tenantName, comment, imageSrc }: TenantReviewProps) => {
    return (
        <div className=' max-w-80 p-8 space-y-4 text-center m-auto
             min-w-80 rounded-lg bg-slate-400'
        >
            <Image src={imageSrc} alt={tenantName} className='w-32 rounded-full m-auto'/>
            <Heading level={3} className='font-bold text-slate-800 text-lg'>{tenantName}</Heading>
            <p className='font-md text-md text-slate-800'>{comment}</p>
        </div>
    )
}

interface TenantReviewProps{
    tenantName: string
    comment: string
    imageSrc: string
}

export default TenantReview