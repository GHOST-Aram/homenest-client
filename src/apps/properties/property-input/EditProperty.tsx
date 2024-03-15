import { useState } from "react"
import { PropertyData, Status, GalleryItem } from "../../../types"
import { useNavigate, useParams } from "react-router-dom"
import { getData } from "../../../utils/fetch"
import { useEffect } from "react"
import { getAuthenticationToken } from "../../../utils/cookie"
import { PropertyUpdater } from "./PropertyUpdater"
import PropertyForm from "./containers/PropertyForm"


const EditProperty = () => {
    const [status, setStatus] = useState<Status>('idle')
    const [errorMsg, setErrorMsg] = useState<string>('')
    const [propertyData, setPropertyData] = useState<PropertyData>(
        initialPropertyData)
    const [imageData, setImageData] = useState<GalleryItem>({ url:'', alt: '' })
    
    const authToken  = getAuthenticationToken()
    const { id }= useParams()

    const navigate = useNavigate()
    
    const propertyUpdater = new PropertyUpdater({
        propertyId: id||'',
        propertyData,
        authToken,
        imageData,
        errorMsg,
        status,
        navigate,
        setPropertyData,
        setStatus,
        setErrorMsg,
        setImageData
    })

    useEffect(() =>{
        (async() =>{
            try {
                const response = await getData(
                    `http://localhost:8000/properties/${id}`)

                const statusCode = response.status
                
                if(statusCode === 200){
                    const data = await response.json()
                    setPropertyData(data)
                }
            } catch (error) {
                setStatus('error')
            }          
        })() 
    }, [id])

    return( <PropertyForm propertyCreator={propertyUpdater}/>)
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
    estate: '',
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
export default EditProperty