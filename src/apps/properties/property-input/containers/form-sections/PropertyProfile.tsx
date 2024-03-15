import { ChangeEventHandler, ReactNode } from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import LocationInfo from './LocationInfo'
import { SelectChangeEvent } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const PropertyProfile = (
    {
        propertyName, 
        locationName, 
        propertyType,
        rentPerMonth,
        cityOrTown,
        estate,
        getTextFieldValue,
        getSelectedValue,
    } : Props 
) => {

    const fields = createFields({ propertyName, rentPerMonth })

    return (
        <>
            <h1 className={heading}>Property Profile</h1>
            <Box className={flexContainer}>
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
                {
                    fields.map(field =>(
                        <TextField 
                            key={field.name}
                            name={field.name} 
                            type={field.type} 
                            label={field.label}
                            value={field.value} 
                            onChange={getTextFieldValue}
                            fullWidth
                        />                    
                    ))
                }        
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

const createFields = (
    { 
        propertyName, 
        rentPerMonth 
    }: { propertyName: string, rentPerMonth: number }
) =>{
    return [
        {label: 'Property Name' ,name: 'propertyName', value: propertyName, type: 'text'},
        {label: 'Rent Per Month',name: 'rentPerMonth', value: rentPerMonth, type: 'number'}
    ]
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
    
    
    const heading = "text-blue-700 font-md text-lg text-center py-2"
    const flexContainer = "flex flex-col gap-4  lg:flex-row justify-between"
    export const propertyTypes = [
    'Apartment Building', 'Condomonium', 'Single-Family Home',
    'Town House', 'Duplex', 'Triplex', 'MultiFamily Home',
    'Mobile Home', 'Vacation Home', 'Commercial Property',
    'Industrial Property', 'Luxury Home', 'Mixed Use Property',
    'Studio'
]

export default PropertyProfile