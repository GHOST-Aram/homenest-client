import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'

const GoToSignUpBtn = () => {
  const navigate = useNavigate()

  return (
    <Button 
        onClick={() =>navigate('/sign-up')} 
        variant='contained'
        size='large'
		color='success'
        fullWidth
    >
        Sign Up
    </Button>
  )
}

export default GoToSignUpBtn