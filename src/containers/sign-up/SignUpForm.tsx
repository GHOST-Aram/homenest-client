import MUITextField from '../../components/MUITextField'
import RolesRadioInput from './RolesRadioInput'
import SignUpButton from '../../components/SignUpButton'
import StatusAlert from './SignUpStatusAlert'
import { FormProps } from '../../types'
import SecondaryButton from '../../components/SecondaryButton'
import { useNavigate } from 'react-router-dom'
import Form from '../../components/Form'

const SignUpForm = ({ userData, registerUser, status, changeHandler }: FormProps) => {
    const fields = [
        { name:'fullName',label: 'Full name', value: userData.fullName, type: 'text' },
        { name:'email',label: 'Email', value: userData.email , type: 'email'},
        {  name:'password',label: 'Password', value: userData.password , type: 'password'},
        { name:'confirmPassword',label: 'Confirm Password', value: userData.confirmPassword, 
            type: 'password'}, 
    ]

    const navigate = useNavigate()

    const signUp = async() => {
        if(userData.password === userData.confirmPassword){
            await registerUser()
        }
    }
    return (
        <Form heading='Welcome to Homenest' submitHandler={ signUp }>
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
            {
                userData.password !== userData.confirmPassword &&
                <p className="text-sm text-red-700">Passwords should be identical</p>
            }
            <RolesRadioInput value={userData.role} changeHandler={changeHandler} />
            <StatusAlert status={status}/>
            <SignUpButton status={status}/>
            <SecondaryButton label='Log In' handleClick={() =>navigate('/login')}/>
        </Form>
    )
}




export default SignUpForm