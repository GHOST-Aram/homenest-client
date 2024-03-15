import { useState } from "react"
import { PropertyData, Status } from "../../../types"
import { useNavigate, useParams } from "react-router-dom"
import { updateProcessStatus } from "../../../utils/process-status"
import { getData, sendPutRequest } from "../../../utils/fetch"
import { useEffect } from "react"
import PropertyFormController from "./PropertyFormController"
import { validatePropertyData } from "../../../utils/validator"
import { ValidationError } from "yup"
import { getAuthenticationToken } from "../../../utils/cookie"


const EditProperty = () => {
    const [status, setStatus] = useState<Status>('idle')
    const [errorMsg, setErrorMsg] = useState<string>('')
    const [propertyData, setPropertyData] = useState<PropertyData>(
        initialPropertyData)
    
    const authToken  = getAuthenticationToken()
    const { id } = useParams()

    const navigate = useNavigate()

    const submitFormData = () =>{
        (async() =>{
            setStatus('loading')
    
            try {
                await validatePropertyData(propertyData)
    
                const {statusCode, body} = await updateProperty()

                processResponse({ statusCode, body })
                updateProcessStatus(setStatus, statusCode)
    
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

    const updateProperty = async():Promise<{ statusCode:number, body:any }> =>{
        const response = await sendPutRequest(`http://localhost:8000/properties/${id}`, 
                {data: propertyData, authToken})
        const body = await response.json()
        const statusCode = response.status
    
        return { statusCode, body }
    }

    const processResponse = ({statusCode, body}:{ statusCode:number, body:any }) =>{
        if(statusCode === 201 || statusCode === 200){
            const id = body.item._id.toString()

           gotToDetailsPage(id)
        } else if(statusCode === 400){
            setErrorMsg(body.errors[0].msg)
        }
    }


    const gotToDetailsPage = (id: string) =>{
        navigate(`/listings/${id}`, { replace: true })
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
                setStatus('error')
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