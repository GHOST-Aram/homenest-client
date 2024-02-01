import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import Heading from './Heading';

const TenantReview = ({ tenantName, comment }: TenantReviewProps) => {
    return (
        <div className='bg-slate-500 max-w-80 p-8 space-y-4 text-center min-w-80'>
            <FaRegCircleUser className='text-slate-300 text-8xl m-auto'/>
            <Heading level={3} className='font-bold text-slate-900 text-lg'>{tenantName}</Heading>
            <p className='font-light text-md text-slate-300'>{comment}</p>
        </div>
    )
}

interface TenantReviewProps{
    tenantName: string
    comment: string
}

export default TenantReview