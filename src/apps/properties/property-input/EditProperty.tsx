import { useState } from "react"
import { PropertyData, Status, GalleryItem } from "../../../types"
import { useNavigate, useParams } from "react-router-dom"
import { getData } from "../../../utils/fetch"
import { useEffect } from "react"
import { cookie } from "../../../utils/cookie"
import { PropertyUpdater } from "./PropertyUpdater"
import PropertyForm from "./containers/PropertyForm"
import { initialPropertyData } from "../../../utils/useDetails"


const EditProperty = () => {
    const [status, setStatus] = useState<Status>('idle')
    const [errorMsg, setErrorMsg] = useState<string>('')
    const [propertyData, setPropertyData] = useState<PropertyData>(
        initialPropertyData)
    const [imageData, setImageData] = useState<GalleryItem>({ url:'', alt: '' })

    const [backgroundPreview, setBackgroundPreview] = useState<string|ArrayBuffer|null>(null)

    
    const authToken  = cookie.getAuthenticationToken('homenestAuthenticationToken')
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
                    `${API_BASE_URL}/properties/${id}`)

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

    const previewBackgroundImage = (file: File) =>{
        const fileReader = new FileReader()

		fileReader.addEventListener('loadend', () =>{
			setBackgroundPreview(fileReader.result)
		})

		fileReader.readAsDataURL(file)
    }

    return( <
        PropertyForm 
            propertyCreator={propertyUpdater}
            previewBackgroundImage={previewBackgroundImage}
            backgroundPreviewUrl={backgroundPreview as string}
        />
    )
}

const API_BASE_URL = process.env.REACT_APP_API_URL


export default EditProperty