import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { ChangeEventHandler } from 'react'

const PropertyMetrics = (
    {
        bedrooms,
        bathrooms,
        squareFootage,
        getTextFieldValue,
    }: Props
) => {
    const fields = createFields({ bedrooms, bathrooms, squareFootage })

    return (
        <>
            <h1 className={heading}>Property Metrics</h1>
            <Box className={flexContainer}>
                {
                    fields.map(field =>(
                        <TextField 
                            key={field.name}
                            type="number" 
                            name={field.name} 
                            value = {`${field.value}`} 
                            onChange={getTextFieldValue} 
                            fullWidth
                            label={field.label} 
                        />  
                    ))
                }
            </Box>
        </>
    )
}

const createFields = (
    { 
        bedrooms, 
        bathrooms, 
        squareFootage 
    }: { bedrooms: number, bathrooms: number, squareFootage: number }
) =>{
    return [
        { name: 'bedrooms',label: 'Bedrooms', value: bedrooms },
        { name: 'bathrooms',label: 'Bathrooms', value: bathrooms },
        { name: 'squareFootage',label: 'Square Footage', value: squareFootage },
    ]
}

interface Props{
    bedrooms: number
    bathrooms: number
    squareFootage: number
    getTextFieldValue: ChangeEventHandler<HTMLInputElement>
}

const heading = "text-blue-700 text-lg text-center"
const flexContainer = "flex flex-col gap-4 lg:flex-row justify-between p-8 " +
    "border-2 rounded-md"
export default PropertyMetrics