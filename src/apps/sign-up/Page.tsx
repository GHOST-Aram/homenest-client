import Paper from '@mui/material/Paper'
import { ChangeEvent, useState } from 'react'
import { registerUser } from '../../utils/register-user'
import SignUpForm from './containers/SignUpForm'
import { UserData, Status } from '../../types'
import { useNavigate } from 'react-router'

export const SignUp = () =>{
    const navigate = useNavigate()

    const [ status, setStatus] = useState<Status>('idle')
    const [userData, setUserData] = useState<UserData>({
        fullName: '',
        role: 'tenant',
        email: '',
        password: '',
        confirmPassword:''
    })

    const collectUserInput = (e: ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = e.target
        setUserData({...userData, [name]: value })
    }

    if(status === 'created'){
        navigate('/login')
    }
    return(
        <div className="my-8">
            <Paper 
                elevation={8}
                className='m-8 lg:w-2/5 md:w-3/5 md:m-auto lg:m-auto'   
            >
                <SignUpForm 
                    status={status} 
                    changeHandler={collectUserInput} 
                    registerUser={() => registerUser(setStatus, userData)}
                    userData={userData}
                />            
            </Paper>
        </div>
    )
}

export default SignUp