import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import { propertyTypes } from '../../properties/property-input/containers/form-sections/PropertyProfile'
import MenuItem  from '@mui/material/MenuItem'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import CloseButton from './CloseButton'
import { ChangeEvent, ReactNode } from 'react'
import { SelectChangeEvent } from '@mui/material/Select'

const Form = ({
    propertyType,
    propertyName,
    rentMin,
    rentMax,
    cityOrTown,
    estate,
    bedrooms,
    hasParkingSpace,
    isFurnished,
    isAvailable,
    locationName,
    onSubmit,
    closeForm,
    getCheckboxValue,
    getTextFieldValue,
    getSelectedValue,
}:Props) => {
  return (
    <Box className="absolute top-24 bottom-0 right-0 left-0 z-10">
        <form 
            onSubmit={(e) =>{e.preventDefault(); onSubmit()}}
            className='space-y-2 m-8 bg-white p-8 rounded-md lg:w-3/5 
            lg:m-auto lg:my-8 relative'
        >
            <CloseButton onClick={closeForm}/>
            <Box className="flex flex-row gap-4">
                <FormControl fullWidth>
                    <InputLabel id='property-type-label'>Property Type</InputLabel>
                    <Select 
                        // fullWidth
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
                <TextField 
                    fullWidth
                    variant='outlined'
                    label='Property Name'
                    value={propertyName}
                    onChange={getTextFieldValue}
                    name='propertyName'
                />

            </Box>
            <Box className="flex flex-row gap-4">
                <TextField 
                    fullWidth
                    variant='outlined'
                    label='City or Town'
                    value={cityOrTown}
                    type='text'
                    onChange={getTextFieldValue}
                    name='cityOrTown'
                />
                <TextField 
                    fullWidth
                    variant='outlined'
                    label='Estate'
                    value={estate}
                    type='text'
                    onChange={getTextFieldValue}
                    name='estate'
                />
            </Box>
            <Box className="flex flex-row gap-4">
                <TextField 
                    fullWidth
                    variant='outlined'
                    label='Street Address'
                    value={locationName}
                    type='string'
                    onChange={getTextFieldValue}
                    name='locationName'
                />
                <TextField 
                    fullWidth
                    variant='outlined'
                    label='Bedrooms'
                    value={bedrooms}
                    type='number'
                    onChange={getTextFieldValue}
                    name='bedrooms'
                />
                
            </Box>
            <Box className="flex flex-row gap-4">
                <TextField 
                    fullWidth
                    variant='outlined'
                    label='Rent From'
                    value={`${rentMin}`}
                    type='number'
                    onChange={getTextFieldValue}
                    name='rentMin'
                />
                <TextField 
                    fullWidth
                    variant='outlined'
                    label='Rent To'
                    value={`${rentMax}`}
                    type='number'
                    onChange={getTextFieldValue}
                    name='rentMax'
                />
            </Box>
            <Box className="flex flex-row gap-4">
                <FormControlLabel 
                    label='Currently Vacant' 
                    control = {
                        <Checkbox 
                            onChange={getCheckboxValue} 
                            checked={isAvailable}
                            name="isAvailable"
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
            <Button variant='contained' size='large' type='submit' 
                sx={{backgroundColor:'#f97316'}}
            >
                Search
            </Button>
        </form>
    </Box>
  )
}

interface Props{
    propertyType: string
    propertyName: string
    rentMin: number
    rentMax: number
    cityOrTown: string
    estate: string
    bedrooms: number
    locationName: string
    hasParkingSpace: boolean
    isFurnished: boolean
    isAvailable: boolean
    onSubmit:() => void
    closeForm: ()=> void
    getCheckboxValue: (e:ChangeEvent<HTMLInputElement>) => void
    getTextFieldValue: (e:ChangeEvent<HTMLInputElement>) => void
    getSelectedValue:(e: SelectChangeEvent<string>, child: ReactNode)=> void
}

export default Form