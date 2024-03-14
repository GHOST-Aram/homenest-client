import { ChangeEventHandler } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const LocationInfo = ({
    getTextFieldValue,
    cityOrTown,
    locationName,
    estate
}: Props
) => {

    return (
        <>
            <Box className={flexContainer}>
                <TextField 
                    type="text" 
                    name="cityOrTown" 
                    value = {cityOrTown} 
                    onChange={getTextFieldValue} 
                    label={'City/Town'} 
                    required
                    fullWidth
                />
                <TextField 
                    type="text" 
                    name="estate" 
                    value = {estate} 
                    onChange={getTextFieldValue} 
                    label={'Estate'} 
                    required
                    fullWidth
                />
                <TextField 
                    name="locationName" 
                    type="text" 
                    label="Location Address"
                    required
                    fullWidth
                    value={locationName}
                    onChange={getTextFieldValue}
                /> 
            </Box>
        </>
    )
}

const flexContainer = "flex flex-col gap-4 lg:flex-row justify-between"

interface Props{
    getTextFieldValue: ChangeEventHandler<HTMLInputElement>
    cityOrTown: string
    estate: string
    locationName: string
}

export default LocationInfo