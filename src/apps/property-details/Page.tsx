import DetailsHero from './containers/DetailsHero'
import PropertyDescription from './containers/PropertyDescription'
import ContactLandlord from './containers/ContactLandlord'
import PropertyGallery from './containers/PropertyGallery'
import KeyFeatures from './containers/KeyFeatures'
import Divider from '../../components/HorizontalDivider'
import usePropertyDetails from '../../utils/useDetails'
import Box from '@mui/material/Box'

const PropertyDetails = () => {
    const property = usePropertyDetails()

    return (
        <Box className='property-details'>
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
            <section className={section}>
                <PropertyDescription description = {  property.description }/>
                <ContactLandlord />
            </section>
            <Divider/>
            <PropertyGallery />
        </Box>
    )
}

const section = 'md:flex lg:flex xl:flex justify-between px-8'

export default PropertyDetails