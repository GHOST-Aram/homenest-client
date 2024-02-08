import React from 'react'
import DetailsHero from '../containers/DetailsHero'
import PropertyDescription from '../containers/PropertyDescription'
import ContactLandlord from '../containers/ContactLandlord'

const PropertyDetails = () => {
    return (
        <>
            <DetailsHero />
            <div className='md:flex lg:flex xl:flex justify-between px-8'>
                <PropertyDescription />
                <ContactLandlord />
            </div>
        </>
    )
}

export default PropertyDetails