import { useState, useContext } from "react"
import { AuthContext } from "../../../utils/authContext"
import PropertyForm from "./containers/PropertyForm"
import { getAuthenticationToken } from "../../../utils/cookie"
import { useNavigate } from "react-router-dom"
import { PropertyCreator } from "./PropertyCreater"
import { initialPropertyData } from "../../../utils/useDetails"
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

export default CreateProperty