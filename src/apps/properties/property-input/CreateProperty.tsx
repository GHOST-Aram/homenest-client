import { useState, useContext } from "react"
import { AuthContext } from "../../../utils/authContext"
import PropertyForm from "./containers/PropertyForm"
import { cookie } from "../../../utils/cookie"
import { useNavigate } from "react-router-dom"
import { PropertyCreator } from "./PropertyCreater"
import { initialPropertyData } from "../../../utils/useDetails"
import { 
    PropertyData, 
    Status, 
    User, 
    GalleryItem 
} from "../../../types"
import { CircularProgress } from "@mui/material"


const CreateProperty = () => {
    const navigate = useNavigate()
    const [status, setStatus] = useState<Status>('idle')
    const [errorMsg, setErrorMsg] = useState<string>('')
    const [propertyData, setPropertyData] = useState<PropertyData>(
         { ...initialPropertyData })
    const [imageData, setImageData] = useState<GalleryItem>({ url:'', alt: '' })

    const [backgroundPreview, setBackgroundPreview] = useState<string|ArrayBuffer|null>(null)
    
         
    const authToken = cookie.getAuthenticationToken('homenestAuthenticationToken')
    const authContext = useContext(AuthContext)
    const user: User = authContext.user 

    if(!user){
        return ( <CircularProgress/>)
    }

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

    const previewBackgroundImage = (file: File) =>{
        const fileReader = new FileReader()

		fileReader.addEventListener('loadend', () =>{
			setBackgroundPreview(fileReader.result)
		})

		fileReader.readAsDataURL(file)
    }

       
    return(
        <PropertyForm 
            propertyCreator = {propertyCreator}
            previewBackgroundImage={previewBackgroundImage}
            backgroundPreviewUrl={backgroundPreview as string}
        />
    )
}

export default CreateProperty