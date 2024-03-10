import MUITextField from "../components/MUITextField"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Box from "@mui/material/Box"
import  Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'
import { ChangeEvent, useState, ReactNode, useContext, useEffect } from "react"
import { AuthContext } from "../utils/authContext"


const PropertyForm = () => {
    const authContext = useContext(AuthContext)
    const user = authContext.user ? authContext.user : null

    const [propertyDetails, setPropertyDetails] = useState<PropertyDetails>(
        { ...intialPropertyDetails }
    )

    const getTypedorCheckedValue = (e: ChangeEvent<HTMLInputElement>) =>{
        const { value, name } = e.target
        setPropertyDetails( { ...propertyDetails, [name]: value})
    }

    const getSelectedValue = (e: SelectChangeEvent<string | string []>, child: ReactNode) =>{
        const { value, name } = e.target
        setPropertyDetails( { ...propertyDetails, [name]: value})
    }

    // useEffect(() => {
    //     setPropertyDetails({ ...propertyDetails,  landlord: user? user.name: "" })
    // }, [user, propertyDetails])

    return (
        <form 
            onSubmit={(e) =>{
                e.preventDefault()
                console.log({ propertyDetails })
            }}
            aria-labelledby="property-form-title" 
            className="m-auto py-4 space-y-4 w-4/5"
        >
            <h1 id="property-form-title" className="text-center text-lg font-bold text-blue-700">
                New Property Listing
            </h1>
            <Box className="w-full p-8 border-2 rounded-md space-y-4">
                <Box className="flex flex-col gap-4 md:flex-row justify-between">
                    <MUITextField 
                        name="propertyName" 
                        type="text" 
                        label="Property Name"
                        value={propertyDetails.propertyName} 
                        changeHandler={getTypedorCheckedValue}
                    />
                    <MUITextField 
                        name="locationName" 
                        type="text" 
                        label="Location Address"
                        value={propertyDetails.locationName}
                        changeHandler={getTypedorCheckedValue}
                    /> 
                    <MUITextField 
                        name="backgroundImageUrl" 
                        type="text" 
                        label="Background Image URL"
                        value={propertyDetails.backgroundImageUrl} 
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
                        value={propertyDetails.propertyType} 
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
                    value = {`${propertyDetails.rentPerMonth}`} 
                    changeHandler={getTypedorCheckedValue} 
                    label={'Rent Per Month'} 
                />
                <MUITextField 
                    type="number" 
                    name="rentPerYear" 
                    value = {`${propertyDetails.rentPerYear}`} 
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
                    value = {`${propertyDetails.bedrooms}`} 
                    changeHandler={getTypedorCheckedValue} 
                    label={'Bedrooms'} 
                />  
                <MUITextField 
                    type="number" 
                    name="bathrooms" 
                    value = {`${propertyDetails.bathrooms}`} 
                    changeHandler={getTypedorCheckedValue} 
                    label={'Bathrooms'} 
                />  
                <MUITextField 
                    type="number" 
                    name="squareFootage" 
                    value = {`${propertyDetails.squareFootage}`} 
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
                        <Checkbox value={propertyDetails.isAvailable} name="isAvailabe"/> 
                    }
                />
                <FormControlLabel 
                    label='Furnished' 
                    control = {
                        <Checkbox value={propertyDetails.isFurnished} name="isFurnished"/> 
                    }
                />
                <FormControlLabel 
                    label='Parking Space' 
                    control = {
                        <Checkbox value={propertyDetails.hasParkingSpace} name="hasParkingSpace"/> 
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
                        value={propertyDetails.energySources} 
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
                        value={propertyDetails.waterSources} 
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
            <Button variant="contained" fullWidth color="primary" size="large" type="submit">
                List Property
            </Button>
        </form>
    )
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

interface PropertyDetails{
    propertyName: string
    propertyType: string
    backgroundImageUrl: string
    rentPerMonth: number
    rentPerYear: number
    locationName: string
    bedrooms: number
    bathrooms: number
    landlord: string
    squareFootage: number
    isAvailable: boolean
    isFurnished: boolean
    hasParkingSpace: boolean
    energySources: string[]
    waterSources: string[]
}

const intialPropertyDetails = {
    propertyName: '',
    propertyType: '',
    backgroundImageUrl: '',
    rentPerMonth: 0,
    rentPerYear: 0,
    locationName: '',
    bedrooms: 0,
    bathrooms: 0,
    landlord: '',
    squareFootage: 0,
    isAvailable: true,
    isFurnished: false,
    hasParkingSpace: false,
    energySources: [],
    waterSources: [],
}

export default PropertyForm