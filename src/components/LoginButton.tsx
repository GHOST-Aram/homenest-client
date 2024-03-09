import Button from '@mui/material/Button'

const LoginButton = () => {
  return (
    <Button 
        variant='contained' 
        color='primary' 
        size='large' 
        className='w-full'
        type='submit'
    >
        Login
    </Button>
  )
}

export default LoginButton