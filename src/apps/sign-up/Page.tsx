import Paper from '@mui/material/Paper'
import { ChangeEvent, useState } from 'react'
import SignUpForm from './containers/SignUpForm'
import { UserData, Status } from '../../types'
import { useNavigate } from 'react-router'
import Box from '@mui/material/Box'
import { sendPostRequest } from '../../utils/fetch'
import { updateProcessStatus } from '../../utils/process-status'

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

    const createUser = () =>{
        setStatus('loading')

        try {
            (async() =>{
                const response = await sendPostRequest('http://localhost:8000/users', 
                userData)

                const statusCode = response.status
                updateProcessStatus(setStatus, statusCode)
            })()
        } catch (error) {
            setStatus('error')            
        }
    }

    if(status === 'created'){
        navigate('/login')
    }
    
    return(
        <Box className="my-8">
            <Paper elevation={8} className={container}>
                <SignUpForm 
                    status={status} 
                    changeHandler={collectUserInput} 
                    onSubmit={createUser}
                    userData={userData}
                />            
            </Paper>
        </Box>
    )
}

const container = 'm-8 lg:w-2/5 md:w-3/5 md:m-auto lg:m-auto'

export default SignUp