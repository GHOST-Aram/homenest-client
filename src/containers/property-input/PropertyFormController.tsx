import { Box, SelectChangeEvent } from "@mui/material"
import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react"
import { PropertyData, Status } from "../../types"
import PropertyForm from "./PropertyForm"

const PropertyFormController = ( {
    propertyData,
    setPropertyData,
    submitFormData,
    status,
}: Props) => {


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

interface Props{
    propertyData: PropertyData
    setPropertyData: Dispatch< SetStateAction<PropertyData>>
    status: Status
    submitFormData: () => Promise<void>
}

export default PropertyFormController