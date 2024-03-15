import { Box } from "@mui/material"
import { Status, PropertyData } from "../../../types"
import PropertyForm from "./containers/PropertyForm"
import { PropertyCreator } from "./PropertyCreater"
import { Dispatch, SetStateAction } from "react"


const PropertyFormController = ( 
    {
        propertyEditor,
        setPropertyData,
        status,
        errorMsg,
    }: Props
) => {


    return (
        <Box>
            <PropertyForm 
                onSubmit ={propertyEditor.submitPropertyData} 
                propertyData = {propertyEditor.propertyData}
                getTextFieldValue = {propertyEditor.getTextFieldValue} 
                getSelectedValue = {propertyEditor.getSelectedValue}
                getCheckboxValue={propertyEditor.getCheckboxValue}
                setProperty={setPropertyData}
                status = {status}
                errorMsg={errorMsg}
            />
        </Box>
    )
}

interface Props{
    status: Status
    errorMsg: string
    propertyEditor: PropertyCreator
    setPropertyData: Dispatch<SetStateAction<PropertyData>>
}

export default PropertyFormController