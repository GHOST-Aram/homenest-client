import Button from '@mui/material/Button'
import { Status } from '../../../types'

const LoginButton = ({processStatus}:{processStatus: Status}) => {
  return (
    <Button 
        variant='contained' 
        color='primary' 
        size='large' 
        className='w-full'
        type='submit'
    >
        {
           processStatus ==='loading' ? 'Loading' : 'Login'
        }
    </Button>
  )
}

export default LoginButton