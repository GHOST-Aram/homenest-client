import Button from '@mui/material/Button'
import { ReactNode } from 'react'

const SubmitButton = ({ disabled, children } :{ disabled: boolean, children: ReactNode }) => {
    return (
        <Button 
            variant="contained" 
            fullWidth color="success" 
            size="large" 
            type="submit"
            disabled = {disabled}
        >
          { children }
        </Button>
    )
}

export default SubmitButton