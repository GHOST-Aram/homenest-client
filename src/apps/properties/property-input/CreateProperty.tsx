import { useState, useContext } from "react"
import { AuthContext } from "../../../utils/authContext"
import PropertyForm from "./containers/PropertyForm"
import { getAuthenticationToken } from "../../../utils/cookie"
import { useNavigate } from "react-router-dom"
import { PropertyCreator } from "./PropertyCreater"
import { 
    PropertyData, 
    Status, 
    User, 
    GalleryItem 
} from "../../../types"


const CreateProperty = () => {
    const navigate = useNavigate()
    const [status, setStatus] = useState<Status>('idle')
    const [errorMsg, setErrorMsg] = useState<string>('')
    const [propertyData, setPropertyData] = useState<PropertyData>(
         { ...initialPropertyData })
    const [imageData, setImageData] = useState<GalleryItem>({ url:'', alt: '' })
    
         
    const authToken = getAuthenticationToken()
    const authContext = useContext(AuthContext)
    const user: User = authContext.user 


    const propertyCreator = new PropertyCreator({
        propertyData: { ...propertyData, landlord: user.id },
        authToken,
        imageData,
        errorMsg,
        status,
        navigate,
        setPropertyData,
        setStatus,
        setErrorMsg,
        setImageData,
    })

       
    return(
        <PropertyForm propertyCreator = {propertyCreator}/>
    )
}

export const initialPropertyData: PropertyData = {
    propertyName: '',
    propertyType: '',
    backgroundImageUrl: '',
    description: '',
    rentPerMonth: 0,
    rentPerYear: 0,
    locationName: '',
    cityOrTown: '',
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

export default CreateProperty