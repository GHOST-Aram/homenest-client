import Box from '@mui/material/Box'
import MUITextField from '../../../components/MUITextField'
import { ChangeEventHandler } from 'react'

const PropertyMetrics = ({
    bedrooms,
    bathrooms,
    squareFootage,
    getTextFieldValue,
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
                changeHandler={getTextFieldValue} 
                label={'Bedrooms'} 
            />  
            <MUITextField 
                type="number" 
                name="bathrooms" 
                value = {`${bathrooms}`} 
                changeHandler={getTextFieldValue} 
                label={'Bathrooms'} 
            />  
            <MUITextField 
                type="number" 
                name="squareFootage" 
                value = {`${squareFootage}`} 
                changeHandler={getTextFieldValue} 
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
    getTextFieldValue: ChangeEventHandler<HTMLInputElement>
}

export default PropertyMetrics