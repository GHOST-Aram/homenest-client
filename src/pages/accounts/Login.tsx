import Paper from '@mui/material/Paper'
import LoginForm from '../../containers/LoginForm'
import { ChangeEvent, useState } from 'react'
import { LoginProps } from '../../types'
import { sendAuthenticationRequest } from '../../utils/auth'

const Login = () => {
    const [authToken, setAuthToken] = useState<string>('')
    const [loginDetails, setLoginDetails] = useState<LoginProps>({
        email: '',  password: ''
    })

    const collectLoginDetails = (e: ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = e.target
        setLoginDetails({...loginDetails, [name]: value })
    }

    const authenticateUser = async() =>{
        try {
            const response = await sendAuthenticationRequest(
                'http://localhost:8000/auth', loginDetails)

            console.log(response.status)

            const body = await response.json()
            if(response.status === 201){
                const token = body.token
                setAuthToken(token)
            }
            console.log(authToken)
        } catch (error) {
            console.log(error)
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
                    authenticateUser={authenticateUser}
                />
            </Paper>
        </div>
    )
}

export default Login