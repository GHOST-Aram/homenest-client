import { useState, useContext } from "react"
import { AuthContext } from "../../../utils/authContext"
import { createNewProperty } from "../../../utils/fetch"
import { PropertyData, Status } from "../../../types"
import { useNavigate } from "react-router-dom"
import { updateProcessStatus } from "../../../utils/process-status"
import PropertyFormController from "./PropertyFormController"
import { validatePropertyData } from "../../../utils/validator"
import { ValidationError } from "yup"


const CreateProperty = () => {
    const [status, setStatus] = useState<Status>('idle')
    const [errorMsg, setErrorMsg] = useState<string>('')
    const [propertyData, setPropertyData] = useState<PropertyData>(
         { ...initialPropertyData })
         
    const authContext = useContext(AuthContext)
    const user = authContext.user 

    const navigate = useNavigate()

    const submitPropertyData = () =>{
        
        (async()=>{
            setStatus('loading')
            
            try {
                const data = { ...propertyData, landlord: user.id }

                await validatePropertyData(data)

                const response = await createNewProperty(
                    'http://localhost:8000/properties', data)
    
                const statusCode = response.status
                updateProcessStatus(setStatus, statusCode)
    
                const body = await response.json()
                if(statusCode === 201){
                    
                    const createdProperty = body.item
                    const id = createdProperty._id.toString()
    
                    navigate(`/listings/${id}`, { replace : true })
                } else if(statusCode === 400){
                    setErrorMsg(body.errors[0].msg)
                    setStatus('invalid-input')
                }
    
            } catch (error) {
                if(error instanceof ValidationError){
                    setErrorMsg(error.message)
                    setStatus('invalid-input')
                } else {
                    setStatus('error')
                }
            }
        })()
    }
       
    return(
        <PropertyFormController 
            propertyData={propertyData}
            setPropertyData={setPropertyData}
            onSubmit={submitPropertyData}
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