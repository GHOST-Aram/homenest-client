import React from 'react'
import List from './List'
import Heading from './Heading'
const AmenityCard = ({ title, amenities }: AmenityProps) => {
  return (
    <div className='bg-slate-800 p-4'>  
        <Heading level={3} className='font-md text-lg mb-4 text-slate-300'>
            { title }
        </Heading>
        <List className=''>
            {amenities.map((amenity) => (
                <li key={amenity.id} className='text-slate-300 text-md font-light'>
                    {amenity.name}
                </li>
            ))}
        </List>
    </div>
  )
}

interface AmenityProps{
    title: string
    amenities: {
        id: number | string
        name: string
    }[]
}
export default AmenityCard