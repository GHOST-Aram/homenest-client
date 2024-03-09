import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const GoToLoginBtn = () => {
    const navigate = useNavigate()
    return (
        <Button 
            variant='contained' 
            color='success' 
            size='large'
            className='w-full'
            onClick={() =>{navigate('/login')}}
        >Go to Login </Button>
    )
}

export default GoToLoginBtn