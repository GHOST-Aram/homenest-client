import React from 'react'
import Button from '@mui/material/Button'

const PropertyCallToAction = () => {
  return (
    <section className='mx-8 mb-8'>
        <div className="flex gap-8 flex-col w-full md:flex-row justify-between">
            <Button fullWidth size='large' variant='contained'>SCHEDULE VIEWING</Button>
            <Button fullWidth size='large' variant='contained'>APPLY ONLINE</Button>
            <Button fullWidth size='large' variant='contained'>CONTACT LANDLORD</Button>
        </div>
    </section>
  )
}

export default PropertyCallToAction