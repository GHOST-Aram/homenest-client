import React from 'react'
import DetailsHero from '../containers/DetailsHero'
import PropertyDescription from '../containers/PropertyDescription'
import ContactLandlord from '../containers/ContactLandlord'
import NeighboringAmenities from '../containers/NeighboringAmenities'

const PropertyDetails = () => {
    return (
        <>
            <DetailsHero />
            <section className='md:flex lg:flex xl:flex justify-between px-8'>
                <PropertyDescription />
                <ContactLandlord />
            </section>
            <section className='px-8'>
                <NeighboringAmenities />
            </section>
        </>
    )
}

export default PropertyDetails