import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { ChangeEventHandler } from 'react'

const PropertyMetrics = ({
    bedrooms,
    bathrooms,
    squareFootage,
    getTextFieldValue,
}: Props) => {
  return (
    <>
        <h1 className={heading}>Property Metrics</h1>
        <Box className={flexContainer}>
            <TextField 
                type="number" 
                name="bedrooms" 
                value = {`${bedrooms}`} 
                onChange={getTextFieldValue} 
                fullWidth
                required
                label={'Bedrooms'} 
            />  
            <TextField 
                type="number" 
                name="bathrooms" 
                value = {`${bathrooms}`} 
                onChange={getTextFieldValue} 
                fullWidth
                required
                label={'Bathrooms'} 
            />  
            <TextField 
                type="number" 
                name="squareFootage" 
                value = {`${squareFootage}`} 
                onChange={getTextFieldValue} 
                fullWidth
                required
                label={'Square Footage'} 
            />  
        </Box>
    </>
  )
}

const heading = "text-blue-700 text-lg text-center"
const flexContainer = "flex flex-col gap-4 lg:flex-row justify-between p-8 " +
    "border-2 rounded-md"

interface Props{
    bedrooms: number
    bathrooms: number
    squareFootage: number
    getTextFieldValue: ChangeEventHandler<HTMLInputElement>
}

export default PropertyMetrics