import Paper from '@mui/material/Paper'
import LoginForm, { LoginDetails } from './containers/LoginForm'
import { ChangeEvent, useContext, useState } from 'react'
import { Status } from '../../types'
import { decodeAuthToken } from '../../utils/auth'
import { setAuthenticationCookie } from '../../utils/cookie'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../utils/authContext'
import Box from '@mui/material/Box'
import { updateProcessStatus } from '../../utils/process-status'
import { sendPostRequest } from '../../utils/fetch'
import { validateLoginDetails } from '../../utils/validator'
import { ValidationError } from 'yup'

const Login = () => {
    const navigate = useNavigate()
    const authContext = useContext(AuthContext)

    const [status, setStatus] = useState<Status>('idle')
    const [errorMsg, setErrorMsg] = useState<string>('')
    const [authToken, setAuthToken] = useState<string>('')
    const [loginDetails, setLoginDetails] = useState<LoginDetails>(
        {
            email: '',  
            password: ''
        }
    )

    const collectLoginDetails = (e: ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = e.target
        setLoginDetails({...loginDetails, [name]: value })
    }

    const submitLoginDetails = () =>{
        (async() =>{
            setStatus('loading')

            try {
                await validateLoginDetails(loginDetails)

                const {statusCode, body } = await getAuthToken()

                processResponse({ statusCode, body })
                authenticateUser()
            } catch (error) {
                if (error instanceof ValidationError){
                    setErrorMsg(error.message)
                    setStatus('invalid-input')
                } else{
                    setStatus('error')
                }
            }
        })()
    }

    const getAuthToken = async() =>{
        const response = await sendPostRequest(
            'http://localhost:8000/auth', loginDetails)
        
        const statusCode = response.status
        const body = await response.json()

        return {statusCode, body }
    }

    const processResponse = ({statusCode, body }:{statusCode: number, body: any}) =>{
        if(statusCode === 201){
            const token = body.token

            setAuthToken(token)

        } else if(statusCode === 400){
            const message = body.errors[0].msg
            setErrorMsg(message)
        }

        updateProcessStatus(setStatus, statusCode)
    }

    const authenticateUser = () =>{
        if(authToken){        
            try{
                const decoded:any = decodeAuthToken(authToken)
    
                initializeUser(decoded)
                setAuthenticationCookie(decoded.exp, authToken)
                goToHomePage()
            } catch(error){
                setStatus('error')
            }
        }
    }

    function initializeUser (decodedToken: any) {
        authContext.setUser({
            email: decodedToken.email,
            name: decodedToken.name,
            role: decodedToken.role
        })
    }

    function goToHomePage () {
        navigate('/')
    }

    return (
        <Box className="my-16">
            <Paper elevation={8} className={container}>
                <LoginForm 
                    loginDetails={loginDetails}
                    processStatus={status}
                    errorMsg={errorMsg}
                    onChange={collectLoginDetails} 
                    onSubmit={submitLoginDetails}
                />
            </Paper>
        </Box>
    )
}

const container = 'my-8 lg:w-2/5 md:w-3/5 md:m-auto lg:m-auto'

export default Login