import { useState } from "react"
import { PropertyData, Status } from "../../../types"
import { useNavigate, useParams } from "react-router-dom"
import { getData } from "../../../utils/fetch"
import { useEffect } from "react"
import PropertyFormController from "./PropertyFormController"
import { getAuthenticationToken } from "../../../utils/cookie"
import { PropertyUpdater } from "./PropertyUpdater"


const EditProperty = () => {
    const [status, setStatus] = useState<Status>('idle')
    const [errorMsg, setErrorMsg] = useState<string>('')
    const [propertyData, setPropertyData] = useState<PropertyData>(
        initialPropertyData)
    
    const authToken  = getAuthenticationToken()
    const { id }= useParams()

    const navigate = useNavigate()
    
    const propertyUpdater = new PropertyUpdater({
        propertyData,
        authToken,
        navigate,
        setPropertyData,
        setStatus,
        setErrorMsg,
        propertyId: id||''
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

    return(
        <PropertyFormController 
            propertyEditor={propertyUpdater}
            setPropertyData={setPropertyData}
            status={status}
            errorMsg={errorMsg}
        />
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