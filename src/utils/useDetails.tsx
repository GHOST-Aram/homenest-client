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
                const response = await getData(`${API_BASE_URL}/properties/${id}`)
                const statusCode = response.status

                if(statusCode === 200){
                    const data = await response.json()

                    console.log('Data: ', data)

                    if(data.backgroundImage){
                        setProperty({
                            ...data,
                            backgroundImageUrl: createImageUrl(data.backgroundImage)
                            //Ceate Image Url
                        })
                    } else{
                        setProperty(data)
                    }
                }
            } catch (error) {
                console.log(error)
            }          
        })() 
    }, [id])

    return property
}

const createImageUrl = (image: {data: string, contentType: string }) =>{
     // Convert base64 data to a Blob
    const byteCharacters = atob(image.data)
    const byteNumbers = new Array(byteCharacters.length)

    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i)
    }
    const byteArray = new Uint8Array(byteNumbers)
    const blob = new Blob([byteArray], { type: image.contentType })

    // Create an object URL for the Blob
    const imageUrl = URL.createObjectURL(blob)

    return imageUrl
}

const API_BASE_URL = process.env.REACT_APP_API_URL

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