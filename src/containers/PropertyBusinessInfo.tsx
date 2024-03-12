import { ChangeEventHandler, ReactNode } from 'react'
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MUITextField from '../components/MUITextField'
import MenuItem from '@mui/material/MenuItem'
import { SelectChangeEvent } from '@mui/material/Select'

const PropertyBusinessInfo = ({
    propertyType,
    getSelectedValue,
    getTextFieldValue,
    rentPerMonth,
    rentPerYear,
}: Props) => {
  return (
    <>
        <h1 className="text-blue-700 text-lg text-center">Business Info</h1>
        <Box className="flex flex-col gap-4 lg:flex-row justify-between p-8 border-2 
            rounded-md"
        >
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
            <MUITextField 
                type="number" 
                name="rentPerYear" 
                value = {`${rentPerYear}`} 
                changeHandler={getTextFieldValue} 
                label={'Rent Per Year'} 
            />
        </Box>
    </>
  )
}

interface Props{
    propertyType: string
    getSelectedValue: (e: SelectChangeEvent<string | string[]>, child: ReactNode) => void
    getTextFieldValue: ChangeEventHandler<HTMLInputElement>
    rentPerMonth:number
    rentPerYear: number
}

const propertyTypes = [
    'Apartment Building', 'Condomonium', 'Single-Family Home',
    'Town House', 'Duplex', 'Triplex', 'MultiFamily Home',
    'Mobile Home', 'Vacation Home', 'Commercial Property',
    'Industrial Property', 'Luxury Home', 'Mixed Use Property',
    'Studio'
]

export default PropertyBusinessInfo