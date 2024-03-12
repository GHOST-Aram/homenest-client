import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { ChangeEventHandler } from 'react'

const PropertyAvailabilityAndMore = ({
    isAvailable,
    isFurnished,
    hasParkingSpace,
    getCheckboxValue,
}: Props) => {
    return (
        <>
            <h1 className="text-blue-700 text-lg text-center">Availability and More</h1>
            <Box className="flex flex-col gap-4 lg:flex-row justify-between p-8 
                border-2 rounded-md"
            >
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

interface Props{
    isAvailable: boolean
    isFurnished: boolean
    hasParkingSpace: boolean
    getCheckboxValue: ChangeEventHandler<HTMLInputElement>
}

export default PropertyAvailabilityAndMore