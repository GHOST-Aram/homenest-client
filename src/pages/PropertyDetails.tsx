import DetailsHero from '../containers/property-details/DetailsHero'
import PropertyDescription from '../containers/property-details/PropertyDescription'
import ContactLandlord from '../containers/property-details/ContactLandlord'
import PropertyGallery from '../containers/property-details/PropertyGallery'
import KeyFeatures from '../containers/property-details/KeyFeatures'
import Divider from '../components/HorizontalDivider'
import usePropertyDetails from '../utils/useDetails'

const PropertyDetails = () => {
    const property = usePropertyDetails()

    return (
        <>
            <DetailsHero 
                propertyName = {  property.propertyName }
                rentPerMonth = {  property.rentPerMonth }
                rentPerYear = {  property.rentPerYear }
                bedrooms = {  property.bedrooms }
                bathrooms = {  property.bathrooms }
                squareFootage  = {  property.squareFootage }
                locationAddress = {  property.locationName }
                backgroundImageUrl={  property.backgroundImageUrl}
            />
            <KeyFeatures property = { property }/>
            <Divider/>
            <section className='md:flex lg:flex xl:flex justify-between px-8'>
                <PropertyDescription description = {  property.description }/>
                <ContactLandlord />
            </section>
            <Divider/>
            <PropertyGallery images={property.images} />
        </>
    )
}

export default PropertyDetails