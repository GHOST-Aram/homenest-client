import MUITextField from '../components/MUITextField'
import Button from '@mui/material/Button'
import { loginProps } from '../types'
import { ChangeEventHandler } from 'react'

const LoginForm = (
    {loginDetails, changeHandler}:{ loginDetails: loginProps, changeHandler: ChangeEventHandler}
) => {
    
    const fields = [
        { name:'email',label: 'Email', value: loginDetails.email , type: 'email'},
        {  name:'password',label: 'Password', value: loginDetails.password , type: 'password'},
    ]
    return (
        <form aria-labelledby='form-label' className='p-8 flex flex-col space-y-4'>
            <h1 id='form-label' className="text-blue-700 font-bold text-lg text-center">
                Welcome to Homenest
            </h1>
            {
                 fields.map((field) =>(
                    <MUITextField
                        key={`${field.label.replaceAll(' ', '-')}-field`} 
                        value={field.value} 
                        label={field.label} 
                        changeHandler={changeHandler}
                        type = {field.type}
                        name={field.name}
                        className='w-full'
                    />
                ))
            }

            <Button variant='contained' color='primary' size='large' className='w-full'
                onClick={() =>{console.log(loginDetails)}}
            >
                Login
            </Button>
        </form>
    )
}

export default LoginForm