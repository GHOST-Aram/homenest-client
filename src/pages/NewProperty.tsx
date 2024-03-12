import { Box, SelectChangeEvent } from "@mui/material"
import { ChangeEvent, useState, ReactNode, useContext } from "react"
import { AuthContext } from "../utils/authContext"
import { createNewProperty } from "../utils/fetch"
import { PropertyData } from "../types"
import PropertyForm from "../containers/PropertyForm"
import { Status } from "../types"
import { useNavigate } from "react-router-dom"
import { updateProcessStatus } from "../utils/process-status"


const NewProperty = () => {
    const [status, setStatus] = useState<Status>('idle')
    const [propertyData, setPropertyData] = useState<PropertyData>(
         { ...initialPropertyData })
         
    const authContext = useContext(AuthContext)
    const user = authContext.user 

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

                navigate(`/listings/${id}`)
            }

        } catch (error) {
            setStatus('error')
        }
    }

    return (
        <Box>
            <PropertyForm 
                submitFormData ={submitFormData} 
                propertyData = {propertyData}
                getTextFieldValue = {getTextFieldValue} 
                getSelectedValue = {getSelectedValue}
                getCheckboxValue={getCheckboxValue}
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

export default NewProperty