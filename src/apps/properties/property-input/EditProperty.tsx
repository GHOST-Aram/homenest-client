import { useState } from "react"
import { PropertyData, Status } from "../../../types"
import { useNavigate, useParams } from "react-router-dom"
import { updateProcessStatus } from "../../../utils/process-status"
import { getData, updateProperty } from "../../../utils/fetch"
import { useEffect } from "react"
import PropertyFormController from "./containers/form-sections/PropertyFormController"


const EditProperty = () => {
    const [status, setStatus] = useState<Status>('idle')
    const [propertyData, setPropertyData] = useState<PropertyData>(
        initialPropertyData)

    const { id } = useParams()

    const navigate = useNavigate()

    const submitFormData = async () =>{
        const data = { ...propertyData}

        setStatus('loading')

        try {
            const response = await updateProperty(
                `http://localhost:8000/properties/${id}`, data)

            const statusCode = response.status
            if(statusCode === 201 || statusCode === 200){
                const body = await response.json()

                const createdProperty = body.item
                const id = createdProperty._id.toString()

                navigate(`/listings/${id}`, { replace: true })
            }

            updateProcessStatus(setStatus, statusCode)
        } catch (error) {
            setStatus('error')
        }
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
export default EditProperty