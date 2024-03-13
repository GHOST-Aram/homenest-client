import { ChangeEventHandler, ReactNode } from 'react'
import MUITextField from '../../../components/MUITextField'
import Box from '@mui/material/Box'
import LocationInfo from './LocationInfo'
import { SelectChangeEvent } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const PropertyProfile = ({
    propertyName, 
    locationName, 
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
            <FormControl fullWidth>
                <InputLabel id='property-type-label'>Property Type</InputLabel>
                <Select 
                    fullWidth
                    labelId='property-type-label'
                    name="propertyType" 
                    value={propertyType} 
                    onChange={getSelectedValue}
                >
                    {
                        propertyTypes.map(type =>(
                            <MenuItem key={type} value={type}> { type }</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <MUITextField 
                type="number" 
                name="rentPerMonth" 
                value = {`${rentPerMonth}`} 
                changeHandler={getTextFieldValue} 
                label={'Rent Per Month'} 
            />          
        </Box>
        <LocationInfo 
            cityOrTown={ cityOrTown }
            estate={ estate}
            locationName={locationName}
            getTextFieldValue={getTextFieldValue}
        />
    </>
  )
}

interface Props{
    propertyName: string
    locationName: string
    propertyType: string
    rentPerMonth:number
    cityOrTown: string
    estate: string
    getTextFieldValue: ChangeEventHandler<HTMLInputElement>
    getSelectedValue: (e: SelectChangeEvent<string 
        | string[]>, child: ReactNode) => void
}

export const propertyTypes = [
    'Apartment Building', 'Condomonium', 'Single-Family Home',
    'Town House', 'Duplex', 'Triplex', 'MultiFamily Home',
    'Mobile Home', 'Vacation Home', 'Commercial Property',
    'Industrial Property', 'Luxury Home', 'Mixed Use Property',
    'Studio'
]

export default PropertyProfile