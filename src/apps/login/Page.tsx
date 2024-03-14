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

const Login = () => {
    const navigate = useNavigate()
    const authContext = useContext(AuthContext)

    const [status, setStatus] = useState<Status>('idle')
    const [authToken, setAuthToken] = useState<string>('')
    const [loginDetails, setLoginDetails] = useState<LoginDetails>(
        {
            email: '',  
            password: ''
        }
        )
        
    if(authToken){        
        try{
            const decoded:any = decodeAuthToken(authToken)
            
            authContext.setUser({
                email: decoded.email,
                name: decoded.name,
                role: decoded.role
            })

            if(decoded.exp){
                setAuthenticationCookie(decoded.exp, authToken)
                navigate('/')
            }
        } catch(error){
            setStatus('error')
        }
    }

    const collectLoginDetails = (e: ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = e.target
        setLoginDetails({...loginDetails, [name]: value })
    }

    const getAuthenticationToken = () =>{
        (async() =>{
            try {
                setStatus('loading')
                const response = await sendPostRequest(
                    'http://localhost:8000/auth', loginDetails)
                
                const statusCode = response.status
        
                if(statusCode === 201){
                    const body = await response.json()
                    const token = body.token
    
                    setAuthToken(token)
                }
                updateProcessStatus(setStatus, statusCode)
        
            } catch (error) {
                setStatus('error')
            }
        })()
    }

    return (
        <Box className="my-16">
            <Paper elevation={8} className=   {container}>
                <LoginForm 
                    onChange={collectLoginDetails} 
                    loginDetails={loginDetails}
                    processStatus={status}
                    onSubmit={getAuthenticationToken}
                />
            </Paper>
        </Box>
    )
}

const container = 'my-8 lg:w-2/5 md:w-3/5 md:m-auto lg:m-auto'

export default Login