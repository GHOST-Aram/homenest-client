import Paper from '@mui/material/Paper'
import LoginForm, { LoginDetails } from './containers/LoginForm'
import { useContext, useState } from 'react'
import { Status } from '../../types'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../utils/authContext'
import Box from '@mui/material/Box'
import { 
    Login as UserLogin, 
    AuthContext as AuthContextType 
} from './login'

const Login = () => {
    const navigate = useNavigate()
    const authContext:AuthContextType = useContext(AuthContext)

    const [status, setStatus] = useState<Status>('idle')
    const [errorMsg, setErrorMsg] = useState<string>('')
    const [authToken, setAuthToken] = useState<string>('')
    const [loginDetails, setLoginDetails] = useState<LoginDetails>(
        {
            email: '',  
            password: ''
        }
    )

    const login = new UserLogin({
        loginDetails,
        authToken,
        authContext,
        setLoginDetails,
        setStatus,
        setErrorMsg,
        setAuthToken,
        navigate,
    })

    return (
        <Box className="my-16">
            <Paper elevation={8} className={container}>
                <LoginForm 
                    loginDetails={loginDetails}
                    processStatus={status}
                    errorMsg={errorMsg}
                    onChange={login.collectLoginDetails} 
                    onSubmit={login.submitLoginDetails}
                />
            </Paper>
        </Box>
    )
}

const container = 'my-8 lg:w-2/5 md:w-3/5 md:m-auto lg:m-auto'

export default Login