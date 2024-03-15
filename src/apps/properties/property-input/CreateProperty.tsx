import { useState, useContext } from "react"
import { AuthContext } from "../../../utils/authContext"
import { PropertyData, Status, User } from "../../../types"
import PropertyFormController from "./PropertyFormController"
import { getAuthenticationToken } from "../../../utils/cookie"
import { useNavigate } from "react-router-dom"
import { PropertyCreator } from "./PropertyCreater"


const CreateProperty = () => {
    const [status, setStatus] = useState<Status>('idle')
    const [errorMsg, setErrorMsg] = useState<string>('')
    const [propertyData, setPropertyData] = useState<PropertyData>(
         { ...initialPropertyData })
         
    const authToken = getAuthenticationToken()
    const authContext = useContext(AuthContext)
    const user: User = authContext.user 

    const navigate = useNavigate()

    const propertyEditor = new PropertyCreator({
        propertyData: { ...propertyData, landlord: user.id },
        authToken,
        navigate,
        setPropertyData,
        setStatus,
        setErrorMsg,
    })

       
    return(
        <PropertyFormController 
            propertyEditor = {propertyEditor}
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

export default CreateProperty