import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { ChangeEventHandler } from 'react'

const PropertyAvailabilityAndMore = ({
    isAvailable,
    isFurnished,
    hasParkingSpace,
    getCheckboxValue,
}: Props
) => {

    const fields = createFields({ isAvailable, isFurnished, hasParkingSpace })
    
    return (
        <>
            <h1 className={heading}>Availability and More</h1>
            <Box className={flexContainer}>
                {
                    fields.map(field =>(
                        <FormControlLabel 
                            key={field.label}
                            label={field.label} 
                            control = {
                                <Checkbox 
                                    onChange={getCheckboxValue} 
                                    checked={field.value} 
                                    name={field.name}
                                /> 
                            }
                        />
                    ))
                }
            </Box>
        </>
    )
}

const createFields = (
    { 
        isAvailable, 
        isFurnished, 
        hasParkingSpace 
    }:{ isAvailable: boolean , isFurnished: boolean, hasParkingSpace: boolean }
) =>{
    return [
        {label: 'Currently Vacant', name: 'isAvailable', value: isAvailable,},
        {label: 'Furnished', name: 'isFurnished', value: isFurnished,},
        {label: 'Parking Space',name: 'hasParkingSpace', value: hasParkingSpace,},
    ]
}

interface Props{
    isAvailable: boolean
    isFurnished: boolean
    hasParkingSpace: boolean
    getCheckboxValue: ChangeEventHandler<HTMLInputElement>
}

const heading = "text-blue-700 text-lg text-center"
const flexContainer = "flex flex-col gap-4 lg:flex-row justify-between p-8 " + 
    "border-2 rounded-md"
export default PropertyAvailabilityAndMore