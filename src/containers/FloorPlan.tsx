import React from 'react'
import Heading from '../components/Heading'
import Image from '../components/Image'
import plan4 from '../images/floor-plan-4.png'

const FloorPlan = () => {
    return (
        <section className='mx-8 space-y-2 mb-8'>
            <Heading level={1} className="text-xl font-bold text-slate-800 mb-4">
                Floor Plan
            </Heading>
            <Image 
                src={plan4}
                alt='floor plan'
                className='m-auto'
            />
        </section>
    )
}

export default FloorPlan