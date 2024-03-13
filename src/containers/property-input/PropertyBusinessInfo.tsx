import { ChangeEventHandler, ReactNode } from 'react'
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MUITextField from '../../components/MUITextField'
import MenuItem from '@mui/material/MenuItem'
import { SelectChangeEvent } from '@mui/material/Select'

const PropertyBusinessInfo = ({
    propertyType,
    getSelectedValue,
    getTextFieldValue,
    rentPerMonth,
    cityOrTown,
    estate
}: Props) => {
  return (
    <>
        <Box className="flex flex-col gap-4 lg:flex-row justify-between">
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
        </Box>
    </>
  )
}

interface Props{
    propertyType: string
    getSelectedValue: (e: SelectChangeEvent<string | string[]>, child: ReactNode) => void
    getTextFieldValue: ChangeEventHandler<HTMLInputElement>
    rentPerMonth:number
    cityOrTown: string
    estate: string
}

const propertyTypes = [
    'Apartment Building', 'Condomonium', 'Single-Family Home',
    'Town House', 'Duplex', 'Triplex', 'MultiFamily Home',
    'Mobile Home', 'Vacation Home', 'Commercial Property',
    'Industrial Property', 'Luxury Home', 'Mixed Use Property',
    'Studio'
]

export default PropertyBusinessInfo