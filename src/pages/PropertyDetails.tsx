import DetailsHero from '../containers/DetailsHero'
import PropertyDescription from '../containers/PropertyDescription'
import ContactLandlord from '../containers/ContactLandlord'
import NeighboringAmenities from '../containers/NeighboringAmenities'
import PropertyGallery from '../containers/PropertyGallery'
import KeyFeatures from '../containers/KeyFeatures'
import FloorPlan from '../containers/FloorPlan'
import Map from '../containers/Map'
import TenantReviews from '../containers/TenantReviews'
import PropertyCallToAction from '../containers/PropertyCallToAction'

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
            <div className='lg:flex lg:gap-8'>
                <FloorPlan />
                <Map />
            </div>
            <TenantReviews />
            <PropertyCallToAction />
        </>
    )
}

export default PropertyDetails