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
    const fields = createFields({ cityOrTown, locationName, estate })

    return (
        <Box className={flexContainer}>
            {
                fields.map(field =>(
                    <TextField 
                        key={field.label}
                        type="text" 
                        name={field.name} 
                        value = {field.value} 
                        onChange={getTextFieldValue} 
                        label={field.label} 
                        fullWidth
                    />
                ))
            }
        </Box>
    )
}

const createFields = (
    {
        cityOrTown, 
        locationName, 
        estate
    }: {cityOrTown: string, locationName: string, estate: string}
) =>{
    return [
        {label: 'City or Town', name: 'cityOrTown', value: cityOrTown },
        {label: 'Location Address', name: 'locationName', value: locationName },
        {label: 'Estate', name: 'estate', value: estate },
    ]
}
interface Props{
    getTextFieldValue: ChangeEventHandler<HTMLInputElement>
    cityOrTown: string
    estate: string
    locationName: string
}


const flexContainer = "flex flex-col gap-4 lg:flex-row justify-between"
export default LocationInfo