import Paper from '@mui/material/Paper'
import LoginForm from '../../containers/login/LoginForm'
import { ChangeEvent, useContext, useState } from 'react'
import { LoginProps, Status } from '../../types'
import { authenticateUser, decodeAuthToken } from '../../utils/auth'
import { setAuthenticationCookie } from '../../utils/cookie'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../utils/authContext'

const Login = () => {
    const navigate = useNavigate()
    const authContext = useContext(AuthContext)

    const [status, setStatus] = useState<Status>('idle')
    const [authToken, setAuthToken] = useState<string>('')
    const [loginDetails, setLoginDetails] = useState<LoginProps>({
        email: '',  password: ''
    })


    const collectLoginDetails = (e: ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = e.target
        setLoginDetails({...loginDetails, [name]: value })
    }

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
    return (
        <div className="my-16">
            <Paper 
                elevation={8}
                className='my-8 lg:w-2/5 md:w-3/5 md:m-auto lg:m-auto'   
            >
                <LoginForm 
                    changeHandler={collectLoginDetails} 
                    loginDetails={loginDetails}
                    processStatus={status}
                    authenticateUser={() => authenticateUser(setAuthToken, 
                        setStatus, loginDetails)}
                />
            </Paper>
        </div>
    )
}

export default Login