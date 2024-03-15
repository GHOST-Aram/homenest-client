import { Box, SelectChangeEvent } from "@mui/material"
import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react"
import { PropertyData, Status } from "../../../types"
import PropertyForm from "./containers/PropertyForm"

const PropertyFormController = ( 
    {
        propertyData,
        setPropertyData,
        onSubmit,
        status,
    }: Props
) => {


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
                onSubmit ={onSubmit} 
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
    setPropertyData: Dispatch<SetStateAction<PropertyData>>
    status: Status
    onSubmit: () => void
}

export default PropertyFormController