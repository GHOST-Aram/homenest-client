import TextField from '@mui/material/TextField'
import RolesRadioInput from '../components/RolesRadioInput'
import SignUpButton from '../components/SignUpButton'
import StatusAlert from '../components/StatusAlert'
import { Status, UserData } from '../../../types'
import GoToLoginBtn from '../components/GoToLoginBtn'
import { ChangeEventHandler } from 'react'

const SignUpForm = (
    { 
        userData, 
        status, 
        errorMsg,
        onSubmit, 
        changeHandler 
    }: FormProps
) => {
    
    const fields = createFieldsWithUserData(userData)

    return (
        <form className={form} onSubmit={(e) =>{ e.preventDefault(); onSubmit() }}>
             <h1 id='form-label' className={heading}>Welcome to Homenest</h1>
            {
                fields.map((field) =>(
                    <TextField
                        key={`${field.label.replaceAll(' ', '-')}-field`} 
                        value={field.value} 
                        label={field.label} 
                        onChange={changeHandler}
                        type = {field.type}
                        name={field.name}
                        fullWidth
                    />
                ))
            }
            {
                userData.password !== userData.confirmPassword &&
                <p className={error}>Passwords should be identical</p>
            }
            <RolesRadioInput value={userData.role} changeHandler={changeHandler} />
            <StatusAlert status={status} errorMsg={errorMsg}/>
            <SignUpButton status={status}/>
            <p className={ boldText }>OR</p>
            <GoToLoginBtn/>
        </form>
    )
}

interface FormProps{ 
    userData: UserData 
    onSubmit: () => void, 
    status: Status , 
    errorMsg: string
    changeHandler: ChangeEventHandler 
}


const createFieldsWithUserData = (userData: UserData) =>{
    return [
        { 
            name:'fullName', label: 'Full name', 
            value: userData.fullName, 
            type: 'text' 
        },
        { 
            name:'email', label: 'Email', 
            value: userData.email , 
            type: 'email'
        },
        {  
            name:'password', label: 'Password', 
            value: userData.password , 
            type: 'password'
        },
        { 
            name:'confirmPassword', label: 'Confirm Password', 
            value: userData.confirmPassword, type: 'password'
        }, 
    ]
}

const error = "text-sm text-red-700"
const boldText  = "font-bold text-center text-slate-800"
const form = 'p-8 flex flex-col space-y-4'
const heading = "text-blue-700 font-bold text-lg text-center"

export default SignUpForm