import TextField from '@mui/material/TextField'
import LoginButton from '../components/LoginButton'
import { Status } from '../../../types'
import { ChangeEventHandler } from 'react'
import StatusAlert from '../components/StatusAlert'
import GoToSignUpBtn from '../components/GoToSignUpBtn'


const LoginForm = ( 
    { 
        loginDetails, 
        processStatus,
        errorMsg, 
        onChange, 
        onSubmit,
    }:FormProps 
) => {

    const fields = createFieldsWithloginDetails(loginDetails)
    
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
            <StatusAlert processStatus={processStatus} errorMsg={errorMsg}/>
           <LoginButton processStatus = {processStatus} />
           <p className={boldText}>OR</p>
           <GoToSignUpBtn />
        </form>
    )
}

const createFieldsWithloginDetails = (loginDetails: LoginDetails) =>{
    return [
        { 
            name:'email',
            label: 'Email', 
            value: loginDetails.email , 
            type: 'email'},
        {  
            name:'password',
            label: 'Password', 
            value: loginDetails.password , 
            type: 'password'
        }
    ]
}

interface FormProps{ 
    loginDetails: LoginDetails 
    processStatus: Status
    errorMsg: string
    onChange: ChangeEventHandler
    onSubmit: ()=>void
}

export interface LoginDetails{ 
    password: string
    email:string
}


const form = 'p-8 flex flex-col space-y-4'
const heading = "text-blue-700 font-bold text-lg text-center"
const boldText = "font-bold text-center text-slate-800"

export default LoginForm