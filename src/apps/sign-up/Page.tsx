import Paper from '@mui/material/Paper'
import { ChangeEvent, useState } from 'react'
import SignUpForm from './containers/SignUpForm'
import { UserData, Status } from '../../types'
import { useNavigate } from 'react-router'
import Box from '@mui/material/Box'
import { sendPostRequest } from '../../utils/fetch'
import { updateProcessStatus } from '../../utils/process-status'
import { validateUserData } from '../../utils/validator'
import { ValidationError } from 'yup'

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

    const collectUserInput = (e: ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = e.target
        setUserData({...userData, [name]: value })
    }

    const submitUserData = () =>{
        
        (async() =>{
            setStatus('loading')

            try {
                await validateUserData(userData)

                const{ statusCode, body } = await createUser()

                processResponse( { statusCode, body })
                
            } catch (error) {
                if(error instanceof ValidationError){
                    setStatus('invalid-input')
                    setErrorMsg(error.message)
                } else{
                    setStatus('error')            
                }
            }
        })()
    }

    const createUser = async() =>{
        const response = await sendPostRequest('http://localhost:8000/users', 
        userData)

        const statusCode = response.status
        const body = await response.json()

        return {statusCode, body }
    }

    const processResponse = ({ statusCode, body }: {statusCode: number, body: any }) =>{
        updateProcessStatus(setStatus, statusCode)

        if(statusCode === 400){
            setErrorMsg(body.errors[0].msg)
            console.log(errorMsg)
        } else if(statusCode === 201){
            gotToLoginPage()
        }
    }

    const gotToLoginPage = () =>{
        navigate('/login')
    }
    
    return(
        <Box className="my-8">
            <Paper elevation={8} className={container}>
                <SignUpForm 
                    status={status} 
                    changeHandler={collectUserInput} 
                    onSubmit={submitUserData}
                    userData={userData}
                    errorMsg={errorMsg}
                />            
            </Paper>
        </Box>
    )
}

const container = 'm-8 lg:w-2/5 md:w-3/5 md:m-auto lg:m-auto'

export default SignUp