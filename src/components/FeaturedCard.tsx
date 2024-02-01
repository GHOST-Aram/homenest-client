import React from 'react'
import ButtonFilled from './ButtonFilled'
import { FaBuildingCircleCheck } from "react-icons/fa6";


const FeaturedCard = ({ rentPm, location, bedrooms }: FeaturedCardProps) => {
  return (
        <div className="min-w-80 rounded-md border-2">
            <div className='bg-slate-900 h-52 rounded-t-md pt-16'>
                <FaBuildingCircleCheck className='text-slate-300 text-8xl m-auto'></FaBuildingCircleCheck>
            </div>
            <div className="bg-slate-400 px-4 w-full rounded-b-md">
                <p>Rent per Month: <span className='font-bold'>{rentPm}</span> </p>
                <p>Location: <span className='font-bold'>{location}</span> </p>
                <p>Bedrooms: <span className='font-bold'>{bedrooms}</span> </p>
                <div className="text-center py-4">
                    <ButtonFilled>READ MORE</ButtonFilled>
                </div>
            </div>
        </div>
  )
}

interface FeaturedCardProps{
    rentPm: string
    location: string
    bedrooms: string
}

export default FeaturedCard