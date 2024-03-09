import MUITextField from '../components/MUITextField'
import LoginButton from '../components/LoginButton'
import { loginProps } from '../types'
import { ChangeEventHandler } from 'react'
import { authenticateUser } from '../utils/auth'

const LoginForm = ( {loginDetails, changeHandler, setToken}:formProps ) => {
    
    const fields = [
        { name:'email',label: 'Email', value: loginDetails.email , type: 'email'},
        {  name:'password',label: 'Password', value: loginDetails.password , type: 'password'}
    ]
    
    return (
        <form aria-labelledby='form-label' className='p-8 flex flex-col space-y-4' 
            onSubmit={async(e) => {
                e.preventDefault()
                try {
                    const response = await authenticateUser('http://localhost:8000/auth', loginDetails)
                    console.log(response.status)

                    const body = await response.json()
                    if(response.status === 201){
                        const token = body.token
                        setToken(token)
                    }
                    console.log(body)
                } catch (error) {
                    console.log(error)
                }
            }}>
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
           <LoginButton />
        </form>
    )
}

type formProps = { 
    loginDetails: loginProps, 
    changeHandler: ChangeEventHandler
    setToken: Function
}

export default LoginForm