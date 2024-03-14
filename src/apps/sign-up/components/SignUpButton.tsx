import Button from '@mui/material/Button'

const SignUpButton = ({ status }: { status: string }) => {
    return (
        <Button  
            size='large'
            disabled = {status === 'loading' }
            color='success'
            variant='contained' 
            className='w-full' 
            type='submit'>
            {status === 'loading' ? 'Loading' : 'Sign Up' }
        </Button>
    )
}

export default SignUpButton