import { useState, useContext } from "react"
import { AuthContext } from "../../../utils/authContext"
import { createNewProperty } from "../../../utils/fetch"
import { PropertyData, Status } from "../../../types"
import { useNavigate } from "react-router-dom"
import { updateProcessStatus } from "../../../utils/process-status"
import PropertyFormController from "./containers/form-sections/PropertyFormController"


const CreateProperty = () => {
    const [status, setStatus] = useState<Status>('idle')
    const [propertyData, setPropertyData] = useState<PropertyData>(
         { ...initialPropertyData })
         
    const authContext = useContext(AuthContext)
    const user = authContext.user 

    const navigate = useNavigate()

    const submitFormData = async () =>{
        const data = { ...propertyData, landlord: user.id }

        setStatus('loading')

        try {
            const response = await createNewProperty(
                'http://localhost:8000/properties', data)

            const statusCode = response.status
            updateProcessStatus(setStatus, statusCode)

            if(statusCode === 201){
                const body = await response.json()
                
                const createdProperty = body.item
                const id = createdProperty._id.toString()

                navigate(`/listings/${id}`, { replace : true })
            }

        } catch (error) {
            setStatus('error')
        }
    }
       
    return(
        <PropertyFormController 
            propertyData={propertyData}
            setPropertyData={setPropertyData}
            submitFormData={submitFormData}
            status={status}
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