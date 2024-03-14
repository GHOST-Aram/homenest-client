import { ChangeEventHandler } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const LocationInfo = (
    {
        getTextFieldValue,
        cityOrTown,
        locationName,
        estate
    }: Props
) => {
    const fields = [
        {lable: 'City or Town', name: 'cityOrTown', value: cityOrTown },
        {lable: 'Location Address', name: 'locationName', value: locationName },
        {lable: 'Estate', name: 'estate', value: estate },
    ]

    return (
        <Box className={flexContainer}>
            {
                fields.map(field =>(
                    <TextField 
                        type="text" 
                        name={field.name} 
                        value = {field.value} 
                        onChange={getTextFieldValue} 
                        label={field.lable} 
                        required
                        fullWidth
                    />
                ))
            }
        </Box>
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