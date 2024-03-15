import { useState } from "react"
import { PropertyData, Status } from "../../../types"
import { useNavigate, useParams } from "react-router-dom"
import { updateProcessStatus } from "../../../utils/process-status"
import { getData, updateProperty } from "../../../utils/fetch"
import { useEffect } from "react"
import PropertyFormController from "./PropertyFormController"
import { validatePropertyData } from "../../../utils/validator"
import { ValidationError } from "yup"


const EditProperty = () => {
    const [status, setStatus] = useState<Status>('idle')
    const [errorMsg, setErrorMsg] = useState<string>('')
    const [propertyData, setPropertyData] = useState<PropertyData>(
        initialPropertyData)

    const { id } = useParams()

    const navigate = useNavigate()

    const submitFormData = () =>{
        (async() =>{
            setStatus('loading')
    
            try {
                await validatePropertyData(propertyData)
    
                const response = await updateProperty(
                    `http://localhost:8000/properties/${id}`, propertyData)
    
                const statusCode = response.status
                updateProcessStatus(setStatus, statusCode)
                const body = await response.json()
                if(statusCode === 201 || statusCode === 200){
    
                    const createdProperty = body.item
                    const id = createdProperty._id.toString()
    
                    navigate(`/listings/${id}`, { replace: true })
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
                console.log(error)
            }          
        })() 
    }, [id])

    return(
        <PropertyFormController 
            propertyData={propertyData}
            setPropertyData={setPropertyData}
            onSubmit={submitFormData}
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