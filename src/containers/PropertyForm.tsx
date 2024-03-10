import React, { ChangeEventHandler, ReactNode } from 'react'
import MUITextField from "../components/MUITextField"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Box from "@mui/material/Box"
import  Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'
import { PropertyData, Status } from '../types'
import StatusAlert from './StatusAlert'


const PropertyForm = ({
    submitFormData, 
    propertyData, 
    getTypedorCheckedValue, 
    getSelectedValue,
    status
} : Props) => {
    return (
        <div>
            <form 
                onSubmit={async(e) =>{
                    e.preventDefault()
                    await submitFormData()
                }}
                aria-labelledby="property-form-title" 
                className="m-auto py-4 space-y-4 w-4/5"
            >
                <h1 id="property-form-title" className="text-center text-lg font-bold text-blue-700">
                    New Property Listing
                </h1>
                <Box className="w-full p-8 border-2 rounded-md space-y-4">
                    <Box className="flex flex-col gap-4  lg:flex-row justify-between">
                        <MUITextField 
                            name="propertyName" 
                            type="text" 
                            label="Property Name"
                            value={propertyData.propertyName} 
                            changeHandler={getTypedorCheckedValue}
                        />
                        <MUITextField 
                            name="locationName" 
                            type="text" 
                            label="Location Address"
                            value={propertyData.locationName}
                            changeHandler={getTypedorCheckedValue}
                        /> 
                        <MUITextField 
                            name="backgroundImageUrl" 
                            type="text" 
                            label="Background Image URL"
                            value={propertyData.backgroundImageUrl} 
                            changeHandler={getTypedorCheckedValue}
                        /> 
                    </Box>
                </Box>
                <Box className="flex flex-col gap-4 lg:flex-row justify-between p-8 border-2 
                    rounded-md"
                >
                    <FormControl fullWidth>
                        <InputLabel id='property-type-label'>Property Type</InputLabel>
                        <Select 
                            fullWidth
                            labelId='property-type-label'
                            name="propertyType" 
                            value={propertyData.propertyType} 
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
                        value = {`${propertyData.rentPerMonth}`} 
                        changeHandler={getTypedorCheckedValue} 
                        label={'Rent Per Month'} 
                    />
                    <MUITextField 
                        type="number" 
                        name="rentPerYear" 
                        value = {`${propertyData.rentPerYear}`} 
                        changeHandler={getTypedorCheckedValue} 
                        label={'Rent Per Year'} 
                    />
                </Box>
                <Box className="flex flex-col gap-4 lg:flex-row justify-between p-8 
                    border-2 rounded-md"
                >
                    <MUITextField 
                        type="number" 
                        name="bedrooms" 
                        value = {`${propertyData.bedrooms}`} 
                        changeHandler={getTypedorCheckedValue} 
                        label={'Bedrooms'} 
                    />  
                    <MUITextField 
                        type="number" 
                        name="bathrooms" 
                        value = {`${propertyData.bathrooms}`} 
                        changeHandler={getTypedorCheckedValue} 
                        label={'Bathrooms'} 
                    />  
                    <MUITextField 
                        type="number" 
                        name="squareFootage" 
                        value = {`${propertyData.squareFootage}`} 
                        changeHandler={getTypedorCheckedValue} 
                        label={'Square Footage'} 
                    />  
                </Box>
                <Box className="flex flex-col gap-4 lg:flex-row justify-between p-8 
                    border-2 rounded-md"
                >
                    <FormControlLabel 
                        label='Available' 
                        control = {
                            <Checkbox value={propertyData.isAvailable} name="isAvailabe"/> 
                        }
                    />
                    <FormControlLabel 
                        label='Furnished' 
                        control = {
                            <Checkbox value={propertyData.isFurnished} name="isFurnished"/> 
                        }
                    />
                    <FormControlLabel 
                        label='Parking Space' 
                        control = {
                            <Checkbox value={propertyData.hasParkingSpace} name="hasParkingSpace"/> 
                        }
                    />
                </Box>
                <Box className="flex flex-col gap-4 lg:flex-row justify-between p-8 
                    border-2 rounded-md"
                >
                    <FormControl fullWidth>
                        <InputLabel id='energyy-sources-label'>Energy Sources</InputLabel>
                        <Select 
                            fullWidth
                            labelId="energy-sources-label"
                            name="energySources" 
                            value={propertyData.energySources} 
                            label='Energy Sources'
                            multiple 
                            onChange={getSelectedValue}
                        >
                            {
                                energySources.map((source: string) =>(
                                    <MenuItem key={source} value={source}> { source }</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id='water-sources-label'>Water Sources</InputLabel>
                        <Select 
                            fullWidth
                            labelId='water-sources-label'
                            name="waterSources" 
                            value={propertyData.waterSources} 
                            label='Water Sources'
                            multiple 
                            onChange={getSelectedValue}
                        >
                            {
                                waterSources.map((source: string) =>(
                                    <MenuItem key={source} value={source}> { source }</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Box>
                <StatusAlert status = {status}/>
                <Button variant="contained" fullWidth color="primary" size="large" type="submit">
                    List Property
                </Button>
            </form>
        </div>
    )
}

interface Props{
    submitFormData: ()=>Promise<void>
    propertyData: PropertyData
    getTypedorCheckedValue: ChangeEventHandler
    getSelectedValue: (e: SelectChangeEvent<string | string[]>, child: ReactNode) => void
    status : Status
}

const propertyTypes = [
    'Apartment Building', 'Condomonium', 'Single-Family Home',
    'Town House', 'Duplex', 'Triplex', 'MultiFamily Home',
    'Mobile Home', 'Vacation Home', 'Commercial Property',
    'Industrial Property', 'Luxury Home', 'Mixed Use Property',
    'Studio'
]

const waterSources = [
    'Public Water Supply', 'Private Undergound Water', 'Rain Water', 'Other'
]

const energySources = [
    'KPLC', 'Private Solar System', 'Backup Generator', 'Other'
]
export default PropertyForm