import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import { propertyTypes } from '../containers/property-input/sections/PropertyProfile'
import MenuItem  from '@mui/material/MenuItem'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import CloseButton from '../components/CloseButton'



const AdvancedSearch = ({closeAdvancedSearch}:{closeAdvancedSearch: ()=> void}) => {
  return (
    <Box className="absolute top-24 bottom-0 right-0 left-0 z-10">
        <form className='space-y-2 m-8 bg-white p-8 rounded-md lg:w-3/5 
            lg:m-auto lg:my-8 relative'
        >
            <CloseButton onClick={closeAdvancedSearch}/>
            <Box className="flex flex-row gap-4">
                <FormControl fullWidth>
                    <InputLabel id='property-type-label'>Property Type</InputLabel>
                    <Select 
                        // fullWidth
                        labelId='property-type-label'
                        name="propertyType" 
                        value={propertyTypes[0]} 
                        onChange={()=>{}}
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
                    value={''}
                    onChange={()=>{}}
                    name='propertyTypes'
                />

            </Box>
            <Box className="flex flex-row gap-4">
                <TextField 
                    fullWidth
                    variant='outlined'
                    label='City or Town'
                    value={''}
                    type='text'
                    onChange={()=>{}}
                    name='cityOrTown'
                />
                <TextField 
                    fullWidth
                    variant='outlined'
                    label='Estate'
                    value={''}
                    type='text'
                    onChange={()=>{}}
                    name='estate'
                />
            </Box>
            <Box className="flex flex-row gap-4">
                <TextField 
                    fullWidth
                    variant='outlined'
                    label='Street Address'
                    value={''}
                    type='string'
                    onChange={()=>{}}
                    name='locationName'
                />
                <TextField 
                    fullWidth
                    variant='outlined'
                    label='Bedrooms'
                    value={1}
                    type='number'
                    onChange={()=>{}}
                    name='bedrooms'
                />
                
            </Box>
            <Box className="flex flex-row gap-4">
                <TextField 
                    fullWidth
                    variant='outlined'
                    label='Rent From'
                    value={10000}
                    type='number'
                    onChange={()=>{}}
                    name='rentMin'
                />
                <TextField 
                    fullWidth
                    variant='outlined'
                    label='Rent To'
                    value={30000}
                    type='number'
                    onChange={()=>{}}
                    name='rentMax'
                />
            </Box>
            <Box className="flex flex-row gap-4">
                <FormControlLabel 
                    label='Furnished' 
                    control = {
                        <Checkbox 
                            onChange={()=>{}} 
                            // checked={false}
                            name="isFurnished"
                        /> 
                    }
                />
                <FormControlLabel 
                    label='Parking Space' 
                    control = {
                        <Checkbox 
                            onChange={()=>{}} 
                            // checked={false}
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

export default AdvancedSearch