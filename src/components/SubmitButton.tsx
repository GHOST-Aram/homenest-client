import { ReactNode } from 'react'
import Button from '@mui/material/Button'

const SubmitButton = ({children }: {children: ReactNode}) => {
    return (
        <Button size='large' variant='contained' fullWidth type='submit' color='success'> 
            { children } 
        </Button>
        )
    }
    
    export default SubmitButton