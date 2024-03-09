import Paper from '@mui/material/Paper'
import LoginForm from '../../containers/LoginForm'
import { ChangeEvent, useState } from 'react'
import { loginProps } from '../../types'

const Login = () => {
    const [loginDetails, setLoginDetails] = useState<loginProps>({
        email: '',
        password: ''
    })

    const collectLoginDetails = (e: ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = e.target
        setLoginDetails({...loginDetails, [name]: value })
    }

    return (
        <div className="my-16">
            <Paper 
                elevation={8}
                className='my-8 lg:w-2/5 md:w-3/5 md:m-auto lg:m-auto'   
            >
                <LoginForm changeHandler={collectLoginDetails} loginDetails={loginDetails}/>
            </Paper>
        </div>
    )
}

export default Login