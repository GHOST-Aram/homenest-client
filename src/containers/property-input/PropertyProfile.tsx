import { ChangeEventHandler, ReactNode } from 'react'
import MUITextField from '../../components/MUITextField'
import Box from '@mui/material/Box'
import PropertyBusinessInfo from './PropertyBusinessInfo'
import { SelectChangeEvent } from '@mui/material'

const PropertyProfile = ({
    propertyName, 
    locationName, 
    backgroundImageUrl,
    propertyType,
    rentPerMonth,
    cityOrTown,
    estate,
    getTextFieldValue,
    getSelectedValue,
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
                changeHandler={getTextFieldValue}
            />
            <MUITextField 
                name="locationName" 
                type="text" 
                label="Location Address"
                value={locationName}
                changeHandler={getTextFieldValue}
            /> 
            <MUITextField 
                name="backgroundImageUrl" 
                type="text" 
                label="Background Image URL"
                value={backgroundImageUrl} 
                changeHandler={getTextFieldValue}
            /> 
        </Box>
        <PropertyBusinessInfo 
            propertyType={ propertyType}
            rentPerMonth={ rentPerMonth}
            cityOrTown={ cityOrTown }
            estate={ estate}
            getTextFieldValue={getTextFieldValue}
            getSelectedValue={getSelectedValue}
        />
    </>
  )
}

interface Props{
    propertyName: string
    locationName: string
    backgroundImageUrl: string
    propertyType: string
    rentPerMonth:number
    cityOrTown: string
    estate: string
    getTextFieldValue: ChangeEventHandler<HTMLInputElement>
    getSelectedValue: (e: SelectChangeEvent<string 
        | string[]>, child: ReactNode) => void
}

export default PropertyProfile