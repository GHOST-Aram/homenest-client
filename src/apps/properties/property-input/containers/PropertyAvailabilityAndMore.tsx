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
    
    return (
        <>
            <h1 className={heading}>Availability and More</h1>
            <Box className={flexContainer}>
                <FormControlLabel 
                    label='Available' 
                    control = {
                        <Checkbox 
                            onChange={getCheckboxValue} 
                            checked={isAvailable} 
                            name="isAvailabe"
                        /> 
                    }
                />
                <FormControlLabel 
                    label='Furnished' 
                    control = {
                        <Checkbox 
                            onChange={getCheckboxValue} 
                            checked={isFurnished}
                            name="isFurnished"
                        /> 
                    }
                />
                <FormControlLabel 
                    label='Parking Space' 
                    control = {
                        <Checkbox 
                            onChange={getCheckboxValue} 
                            checked={hasParkingSpace}
                            name="hasParkingSpace"
                        /> 
                    }
                />
            </Box>
        </>
    )
}

const heading = "text-blue-700 text-lg text-center"
const flexContainer = "flex flex-col gap-4 lg:flex-row justify-between p-8" + 
    "border-2 rounded-md"

interface Props{
    isAvailable: boolean
    isFurnished: boolean
    hasParkingSpace: boolean
    getCheckboxValue: ChangeEventHandler<HTMLInputElement>
}

export default PropertyAvailabilityAndMore