import TextField from '@mui/material/TextField'
import LoginButton from '../components/LoginButton'
import { LoginProps, Status } from '../../../types'
import { ChangeEventHandler } from 'react'
import StatusAlert from '../components/StatusAlert'
import GoToSignUpBtn from '../components/GoToSignUpBtn'


const LoginForm = ( 
    { 
        loginDetails, 
        onChange, 
        onSubmit,
        processStatus 
    }:FormProps 
) => {

    const fields = [
        { name:'email',label: 'Email', value: loginDetails.email , type: 'email'},
        {  name:'password',label: 'Password', value: loginDetails.password , type: 'password'}
    ]
    
    return (
        <form className={form} onSubmit={(e) => {e.preventDefault(); onSubmit()} }>
        <h1 id='form-label' className={heading}>Welcome to Homenest</h1>
            {
                fields.map((field) =>(
                    <TextField
                        key={`${field.label.replaceAll(' ', '-')}-field`} 
                        value={field.value} 
                        label={field.label} 
                        onChange={onChange}
                        type = {field.type}
                        name={field.name}
                        fullWidth
                    />
                ))

            }
            <StatusAlert processStatus={processStatus}/>
           <LoginButton processStatus = {processStatus} />
           <p className="font-bold text-center text-slate-800">OR</p>
           <GoToSignUpBtn />
        </form>
    )
}

interface FormProps{ 
    loginDetails: LoginProps 
    processStatus: Status
    onChange: ChangeEventHandler
    onSubmit: ()=>void
}


const form = 'p-8 flex flex-col space-y-4'
const heading = "text-blue-700 font-bold text-lg text-center"

export default LoginForm