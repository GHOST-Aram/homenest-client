import TextField from '@mui/material/TextField'
import RolesRadioInput from '../components/RolesRadioInput'
import SignUpButton from '../components/SignUpButton'
import StatusAlert from '../components/SignUpStatusAlert'
import { FormProps, UserData } from '../../../types'
import GoToLoginBtn from '../components/GoToLoginBtn'
import Form from '../../../components/Form'

const SignUpForm = (
    { 
        userData, 
        registerUser, 
        status, 
        changeHandler 
    }: FormProps
) => {
    
    const fields = createFieldsWithUserData(userData)

    const signUp = async() => {
        if(userData.password === userData.confirmPassword){
            await registerUser()
        }
    }

    return (
        <Form heading='Welcome to Homenest' submitHandler={ signUp }>
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
                        required
                    />
                ))
            }
            {
                userData.password !== userData.confirmPassword &&
                <p className={errorMsg}>Passwords should be identical</p>
            }
            <RolesRadioInput value={userData.role} changeHandler={changeHandler} />
            <StatusAlert status={status}/>
            <SignUpButton status={status}/>
            <p className={ boldText }>OR</p>
            <GoToLoginBtn/>
        </Form>
    )
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

const errorMsg = "text-sm text-red-700"
const boldText  = "font-bold text-center text-slate-800"

export default SignUpForm