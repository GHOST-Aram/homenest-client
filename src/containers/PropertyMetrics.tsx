import Box from '@mui/material/Box'
import MUITextField from '../components/MUITextField'
import { ChangeEventHandler } from 'react'

const PropertyMetrics = ({
    bedrooms,
    bathrooms,
    squareFootage,
    getTypedorCheckedValue,
}: Props) => {
  return (
    <>
        <h1 className="text-blue-700 text-lg text-center">Property Metrics</h1>
        <Box className="flex flex-col gap-4 lg:flex-row justify-between p-8 
            border-2 rounded-md"
        >
            <MUITextField 
                type="number" 
                name="bedrooms" 
                value = {`${bedrooms}`} 
                changeHandler={getTypedorCheckedValue} 
                label={'Bedrooms'} 
            />  
            <MUITextField 
                type="number" 
                name="bathrooms" 
                value = {`${bathrooms}`} 
                changeHandler={getTypedorCheckedValue} 
                label={'Bathrooms'} 
            />  
            <MUITextField 
                type="number" 
                name="squareFootage" 
                value = {`${squareFootage}`} 
                changeHandler={getTypedorCheckedValue} 
                label={'Square Footage'} 
            />  
        </Box>
    </>
  )
}

interface Props{
    bedrooms: number
    bathrooms: number
    squareFootage: number
    getTypedorCheckedValue: ChangeEventHandler<HTMLInputElement>
}

export default PropertyMetrics