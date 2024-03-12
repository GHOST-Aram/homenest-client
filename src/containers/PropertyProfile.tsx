import React, { ChangeEventHandler } from 'react'
import MUITextField from '../components/MUITextField'
import Box from '@mui/material/Box'

const PropertyProfile = ({
    propertyName, 
    locationName, 
    backgroundImageUrl,
    getTypedorCheckedValue,
} : Props ) => {
  return (
    <>
        <h1 className="text-blue-700 font-md text-lg text-center py-2">Property Profile</h1>
        <Box className="flex flex-col gap-4  lg:flex-row justify-between">
            <MUITextField 
                name="propertyName" 
                type="text" 
                label="Property Name"
                value={propertyName} 
                changeHandler={getTypedorCheckedValue}
            />
            <MUITextField 
                name="locationName" 
                type="text" 
                label="Location Address"
                value={locationName}
                changeHandler={getTypedorCheckedValue}
            /> 
            <MUITextField 
                name="backgroundImageUrl" 
                type="text" 
                label="Background Image URL"
                value={backgroundImageUrl} 
                changeHandler={getTypedorCheckedValue}
            /> 
        </Box>
    </>
  )
}

interface Props{
    propertyName: string
    locationName: string
    backgroundImageUrl: string
    getTypedorCheckedValue: ChangeEventHandler<HTMLInputElement>
}

export default PropertyProfile