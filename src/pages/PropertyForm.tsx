import MUITextField from "../components/MUITextField"
import MultilineTextField from "../components/MultiLineTextField"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Box from "@mui/material/Box"
import  Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'


const PropertyForm = () => {
    return (
        <form aria-labelledby="property-form-title" className="m-auto py-4 space-y-4 w-4/5">
            <h1 id="property-form-title" className="text-center text-lg font-bold text-blue-700">
                New Property Listing
            </h1>
            <Box className="w-full p-8 border-2 rounded-md space-y-4">
                <Box className="flex gap-4 md:flex-row justify-between">
                    <MUITextField 
                        name="propertyName" 
                        type="text" 
                        label="Property Name"
                        value="Monalisa Real Estates" 
                        changeHandler={() =>{}}
                    />
                    <MUITextField 
                        name="locationName" 
                        type="text" 
                        label="Location Address"
                        value="Elfanix Road, Opposite PTRX" 
                        changeHandler={() =>{}}
                    /> 
                    <MUITextField 
                        name="backgroundImageUrl" 
                        type="text" 
                        label="Background Image URL"
                        value="" 
                        changeHandler={() =>{}}
                    /> 
                </Box>
                <MultilineTextField 
                    name="description" 
                    type="text" 
                    label="Property Description"
                    value="" 
                    changeHandler={() =>{}}
                />
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
                        value={''} 
                        onChange={() =>{}}
                    >
                        {
                            propertyTypes.map(type =>(
                                <MenuItem key={type} value={type}> { type }</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <MUITextField 
                    type="number" name="rentPerMonth" 
                    value = {''} changeHandler={() =>{}} 
                    label={'Rent Per Month'} 
                />
                <MUITextField 
                    type="number" name="rentPerYear" 
                    value = {''} changeHandler={() =>{}} 
                    label={'Rent Per Year'} 
                />
            </Box>
            <Box className="flex flex-col gap-4 lg:flex-row justify-between p-8 
                border-2 rounded-md"
            >
                <MUITextField 
                    type="number" name="bedrooms" 
                    value = {''} changeHandler={() =>{}} 
                    label={'Bedrooms'} 
                />  
                <MUITextField 
                    type="number" name="bathrooms" 
                    value = {''} changeHandler={() =>{}} 
                    label={'Bathrooms'} 
                />  
                <MUITextField 
                    type="number" name="squareFootage" 
                    value = {''} changeHandler={() =>{}} 
                    label={'Square Footage'} 
                />  
            </Box>
            <Box className="flex flex-col gap-4 lg:flex-row justify-between p-8 
                border-2 rounded-md"
            >
                <FormControlLabel 
                    label='Available' 
                    control = {<Checkbox value={true} name="isAvailabe"/> }
                />
                <FormControlLabel 
                    label='Furnished' 
                    control = {<Checkbox value={false} name="isFurnished"/> }
                />
                <FormControlLabel 
                    label='Parking Space' 
                    control = {<Checkbox value={false} name="hasParkingSpace"/> }
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
                        value={[]} 
                        label='Energy Sources'
                        multiple 
                        onChange={() =>{}}
                    >
                        {
                            energySources.map(source =>(
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
                        value={[]} 
                        label='Water Sources'
                        multiple 
                        onChange={() =>{}}
                    >
                        {
                            waterSources.map(source =>(
                                <MenuItem key={source} value={source}> { source }</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Box>
            <Box className="flex flex-col gap-4 lg:flex-row justify-between p-8 
                border-2 rounded-md"
            >   
                <MultilineTextField 
                    name="petPolicy" 
                    type="text" 
                    label="Pet Policy"
                    value="" 
                    changeHandler={() =>{}}
                />
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
    'Luxury Home', 'Studio'
]

const waterSources = [
    'Public Water Supply', 'Private Undergound Water', 'Rain Water', 'Other'
]

const energySources = [
    'KPLC', 'Private Solar System', 'Backup Generator', 'Other'
]

export default PropertyForm