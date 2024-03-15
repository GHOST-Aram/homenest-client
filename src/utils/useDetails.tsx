import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PropertyData } from '../types'
import { getData } from './fetch'


const usePropertyDetails = () => {
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
                }
            } catch (error) {
                console.log(error)
            }          
        })() 
    }, [id])

    return property
}

export const initialPropertyData: PropertyData = {
    propertyName: '',
    propertyType: '',
    backgroundImageUrl: '',
    description: '',
    rentPerMonth: 0,
    rentPerYear: 0,
    locationName: '',
    cityOrTown:'',
    estate:'',
    bedrooms: 0,
    bathrooms: 0,
    landlord: '',
    squareFootage: 0,
    isAvailable: true,
    isFurnished: false,
    hasParkingSpace: false,
    energySources: [],
    waterSources: [],
    images:[]
}

export default usePropertyDetails