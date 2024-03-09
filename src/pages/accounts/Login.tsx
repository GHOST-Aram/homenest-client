import Paper from '@mui/material/Paper'
import LoginForm from '../../containers/LoginForm'
import { ChangeEvent, useState } from 'react'
import { LoginProps, Status } from '../../types'
import { authenticateUser } from '../../utils/auth'

const Login = () => {
    const [status, setStatus] = useState<Status>('idle')
    const [authToken, setAuthToken] = useState<string>('')
    const [loginDetails, setLoginDetails] = useState<LoginProps>({
        email: '',  password: ''
    })

    const collectLoginDetails = (e: ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = e.target
        setLoginDetails({...loginDetails, [name]: value })
    }
    
    if(authToken){}

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