import React from 'react'
import ButtonFilled from '../components/ButtonFilled'

const PropertyCallToAction = () => {
  return (
    <section className='mx-8 mb-8'>
        <div className="flex flex-col w-full md:flex-row justify-between">
            <ButtonFilled className='w-full'>SCHEDULE VIEWING</ButtonFilled>
            <ButtonFilled className='w-full'>APPLY ONLINE</ButtonFilled>
            <ButtonFilled className='w-full'>CONTACT LANDLORD</ButtonFilled>
        </div>
    </section>
  )
}

export default PropertyCallToAction