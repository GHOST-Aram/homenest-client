import DetailsHero from '../containers/DetailsHero'
import PropertyDescription from '../containers/PropertyDescription'
import ContactLandlord from '../containers/ContactLandlord'
import PropertyGallery from '../containers/PropertyGallery'
import KeyFeatures from '../containers/KeyFeatures'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getData } from '../utils/fetch'
import { PropertyData } from '../types'
import Divider from '../components/HorizontalDivider'
import { initialPropertyData } from './NewProperty'

const PropertyDetails = () => {
    const [property, setProperty] = useState<PropertyData>(initialPropertyData)
    const { id } = useParams()
    
    useEffect(() =>{
        (async() =>{
            try {
                const response = await getData(`http://localhost:8000/properties/${id}`)
                const statusCode = response.status
                if(statusCode === 200){
                    const data = await response.json()
                    setProperty(data)
                    console.log(data)
                }
            } catch (error) {
                console.log(error)
            }          
        })() 
    }, [id])
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
            <PropertyGallery />
        </>
    )
}

export default PropertyDetails