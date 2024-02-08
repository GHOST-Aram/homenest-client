import DetailsHero from '../containers/DetailsHero'
import PropertyDescription from '../containers/PropertyDescription'
import ContactLandlord from '../containers/ContactLandlord'
import NeighboringAmenities from '../containers/NeighboringAmenities'
import PropertyGallery from '../containers/PropertyGallery'
import KeyFeatures from '../containers/KeyFeatures'

const PropertyDetails = () => {
    return (
        <>
            <DetailsHero />
            <section className='md:flex lg:flex xl:flex justify-between px-8'>
                <PropertyDescription />
                <ContactLandlord />
            </section>
            <NeighboringAmenities />
            <PropertyGallery />
            <KeyFeatures />
        </>
    )
}

export default PropertyDetails