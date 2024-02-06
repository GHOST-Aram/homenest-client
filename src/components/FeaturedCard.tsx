import React from 'react'
import ButtonFilled from './ButtonFilled'
import Image from './Image'

const FeaturedCard = ({ rentPm, location, bedrooms, imageSrc, key }: FeaturedCardProps) => {
  return (
        <div className="min-w-80 rounded-md border-2 flex flex-col justify-between" key={key}>
            <Image 
                src={imageSrc} 
                alt={`${location} ${bedrooms} bedroom house`}
                className='rounded-t-md'
            />           
            <div className="bg-slate-400 px-4 w-full rounded-b-md">
                <p className='space-x-2'> 
                    <span className='font-bold text-slate-700'>Rent per Month:</span> 
                    <span className='font-bold'>{rentPm}</span> </p>
                <p className='space-x-2'> 
                    <span className='font-bold text-slate-700'>Location:</span> 
                    <span className='font-bold'>{location}</span> </p>
                <p className='space-x-2'> 
                    <span className='font-bold text-slate-700'>Bedrooms:</span> 
                    <span className='font-bold'>{bedrooms}</span> </p>
                <div className="text-center py-4">
                    <ButtonFilled className='w-full'>READ MORE</ButtonFilled>
                </div>
            </div>
        </div>
  )
}

interface FeaturedCardProps{
    rentPm: string
    location: string
    bedrooms: string
    imageSrc: string
    key?: string
}

export default FeaturedCard