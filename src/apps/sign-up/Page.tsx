import Paper from '@mui/material/Paper'
import { useState } from 'react'
import SignUpForm from './containers/SignUpForm'
import { UserData, Status } from '../../types'
import { useNavigate } from 'react-router'
import Box from '@mui/material/Box'
import { UserSignUp } from './sign-up'


export const SignUp = () =>{
    const navigate = useNavigate()

    const [ status, setStatus] = useState<Status>('idle')
    const [errorMsg, setErrorMsg] = useState<string>('')
    const [userData, setUserData] = useState<UserData>({
        fullName: '',
        role: 'tenant',
        email: '',
        password: '',
        confirmPassword:''
    })

    const signUp = new UserSignUp({
        userData,
        setUserData,
        setStatus,
        setErrorMsg,
        navigate,
    })
    
    return(
        <Box className="my-8">
            <Paper elevation={8} className={container}>
                <SignUpForm 
                    status={status} 
                    changeHandler={signUp.collectUserInput} 
                    onSubmit={signUp.submitUserData}
                    userData={userData}
                    errorMsg={errorMsg}
                />            
            </Paper>
        </Box>
    )
}

const container = 'm-8 lg:w-2/5 md:w-3/5 md:m-auto lg:m-auto'

export default SignUp