import MUITextField from '../components/MUITextField'
import LoginButton from '../components/LoginButton'
import { LoginProps } from '../types'
import { ChangeEventHandler } from 'react'
import AccountsForm from './AccountForm'

const LoginForm = ( { loginDetails, changeHandler, authenticateUser }:formProps ) => {
    
    const fields = [
        { name:'email',label: 'Email', value: loginDetails.email , type: 'email'},
        {  name:'password',label: 'Password', value: loginDetails.password , type: 'password'}
    ]
    
    return (
        <AccountsForm submitHandler={authenticateUser}>
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
        </AccountsForm>
    )
}

type formProps = { 
    loginDetails: LoginProps, 
    changeHandler: ChangeEventHandler
    authenticateUser: () =>Promise<void>
}

export default LoginForm