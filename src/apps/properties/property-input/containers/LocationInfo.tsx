import { ChangeEventHandler } from 'react'
import Box from '@mui/material/Box'
import MUITextField from '../../../../components/MUITextField'

const LocationInfo = ({
    getTextFieldValue,
    cityOrTown,
    locationName,
    estate
}: Props) => {
  return (
    <>
        <Box className="flex flex-col gap-4 lg:flex-row justify-between">
            <MUITextField 
                type="text" 
                name="cityOrTown" 
                value = {cityOrTown} 
                changeHandler={getTextFieldValue} 
                label={'City/Town'} 
            />
            <MUITextField 
                type="text" 
                name="estate" 
                value = {estate} 
                changeHandler={getTextFieldValue} 
                label={'Estate'} 
            />
             <MUITextField 
                name="locationName" 
                type="text" 
                label="Location Address"
                value={locationName}
                changeHandler={getTextFieldValue}
            /> 
        </Box>
    </>
  )
}

interface Props{
    getTextFieldValue: ChangeEventHandler<HTMLInputElement>
    cityOrTown: string
    estate: string
    locationName: string
}

export default LocationInfo