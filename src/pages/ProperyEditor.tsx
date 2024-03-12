import { Box, SelectChangeEvent } from "@mui/material"
import { ChangeEvent, useState, ReactNode } from "react"
import { PropertyData } from "../types"
import PropertyForm from "../containers/PropertyForm"
import { Status } from "../types"
import { useNavigate, useParams } from "react-router-dom"
import { updateProcessStatus } from "../utils/process-status"
import { updateProperty } from "../utils/fetch"
import { getData } from "../utils/fetch"
import { useEffect } from "react"


const PropertyEditor = () => {
    const [status, setStatus] = useState<Status>('idle')
    const [propertyData, setPropertyData] = useState<PropertyData>(
        initialPropertyData)

    const { id } = useParams()

    const navigate = useNavigate()


    const getTextFieldValue = (e: ChangeEvent<HTMLInputElement>) =>{
        const { value, name } = e.target
        setPropertyData( { ...propertyData, [name]: value})
    }

    const getCheckboxValue = (e:ChangeEvent<HTMLInputElement>) =>{
        const { name, checked } = e.target
        setPropertyData({ ...propertyData, [name]: checked })
    }

    const getSelectedValue = (
        e: SelectChangeEvent<string | string []>, 
        child: ReactNode
    ) =>{
        const { value, name } = e.target
        setPropertyData( { ...propertyData, [name]: value})
    }

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

                navigate(`/listings/${id}`)
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

                updateProcessStatus(setStatus, statusCode)
                
                if(statusCode === 200){
                    const data = await response.json()
                    setPropertyData(data)
                }
            } catch (error) {
                console.log(error)
            }          
        })() 
    }, [id])

    return (
        <Box>
            <PropertyForm 
                submitFormData ={submitFormData} 
                propertyData = {propertyData}
                getTextFieldValue = {getTextFieldValue} 
                getCheckboxValue = {getCheckboxValue} 
                getSelectedValue = {getSelectedValue}
                setProperty={setPropertyData}
                status = {status}
            />
        </Box>
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
export default PropertyEditor