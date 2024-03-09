import MUITextField from '../components/MUITextField'
import RolesRadioInput from './RolesRadioInput'
import SignUpButton from '../components/SignUpButton'
import StatusAlert, { Status } from './SignUpStatusAlert'
import { ChangeEventHandler } from 'react'

const SignUpForm = ({ userData, registerUser, status, changeHandler }: Props) => {
    const fieldData = [
        { name:'fullName',label: 'Full name', value: userData.fullName, type: 'text' },
        { name:'email',label: 'Email', value: userData.email , type: 'email'},
        {  name:'password',label: 'Password', value: userData.password , type: 'password'},
        { name:'confirmPassword',label: 'Confirm Password', value: userData.confirmPassword, 
            type: 'password'}, 
    ]

    return (
        <form aria-labelledby='form-label'
        className='p-8 flex flex-col space-y-4'
        onSubmit={async(e) =>{
        e.preventDefault()
        if(userData.password === userData.confirmPassword){
            await registerUser()
        }
    }}>
        <h1 id='form-label' className="text-blue-700 font-bold text-lg text-center">Welcome to Homenest</h1>
        {
            fieldData.map((field) =>(
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
        {
            userData.password !== userData.confirmPassword &&
            <p className="text-sm text-red-700">Passwords should be identical</p>
        }
        <RolesRadioInput value={userData.role} changeHandler={changeHandler} />
        <StatusAlert status={status}/>
        <SignUpButton status={status}/>
    </form>
    )
}

export type Props = { 
    userData: UserData 
    registerUser: Function, 
    status: Status , 
    changeHandler: ChangeEventHandler 
}

export type UserData = {
    fullName: string
    role: string
    email: string
    password: string
    confirmPassword:string
}


export default SignUpForm