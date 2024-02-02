import React from 'react'
import ButtonFilled from './ButtonFilled'
import Image from './Image'

const FeaturedCard = ({ rentPm, location, bedrooms, imageSrc }: FeaturedCardProps) => {
  return (
        <div className="min-w-80 rounded-md border-2">
            <div className=''>
                <Image 
                    src={imageSrc} 
                    alt={`${location} ${bedrooms} house`}
                    className='h-52 rounded-t-md'
                />
            </div>
            <div className="bg-slate-400 px-4 w-full rounded-b-md">
                <p>Rent per Month: <span className='font-bold'>{rentPm}</span> </p>
                <p>Location: <span className='font-bold'>{location}</span> </p>
                <p>Bedrooms: <span className='font-bold'>{bedrooms}</span> </p>
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
}

export default FeaturedCard