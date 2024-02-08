import React from 'react'
import Heading from '../components/Heading'
import AmenityCard from '../components/AmenityCard'
import ButtonFilled from '../components/ButtonFilled'

const NeighboringAmenities = () => {
    return (
        <section className="px-8">
            <div className='mb-8 space-y-2'>
                <Heading level={1} className="text-xl font-bold text-slate-800 mb-4">
                    Neighboring Amenities
                </Heading>
                <div className='grid-auto gap-8'>
                    <AmenityCard title='Education' amenities={schools}/>
                    <AmenityCard title='Health' amenities={medicals}/>
                    <AmenityCard title='Shopping' amenities={shoppings}/>
                    <AmenityCard title='Recreation' amenities={recreations}/>
                </div>
    
                <ButtonFilled>VIEW MORE ON MAP</ButtonFilled>
            </div>
        </section>
        )

}

const schools = [
    {
        id: 1,
        name: 'XYZ College',
    },
    {
       id: 2,
       name: 'ABC School',
    }
]
const medicals = [
    {
        id: 1,
        name: 'HH Hospital',
    },
    {
       id: 2,
       name: 'Orion Dispensary',
    }
]
const shoppings = [
    {
        id: 1,
        name: 'Naivas Food Market',
    },
    {
       id: 2,
       name: 'Olishes Super Market',
    }
]
const recreations = [
    {
        id: 1,
        name: 'Bullsite Golf',
    },
    {
       id: 2,
       name: 'Kings & Queens Chess Club',
    }
]

export default NeighboringAmenities