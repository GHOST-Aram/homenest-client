import MUITextField from '../../components/MUITextField'
import LoginButton from '../../components/LoginButton'
import { LoginProps, Status } from '../../types'
import { ChangeEventHandler } from 'react'
import Form from '../../components/Form'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import { useNavigate } from 'react-router-dom'
import SecondaryButton from '../../components/SecondaryButton'

const LoginForm = ( 
    { 
        loginDetails, 
        changeHandler, 
        authenticateUser,
        processStatus 
    }:formProps ) => {
    const navigate = useNavigate()
    const fields = [
        { name:'email',label: 'Email', value: loginDetails.email , type: 'email'},
        {  name:'password',label: 'Password', value: loginDetails.password , type: 'password'}
    ]
    
    return (
        <Form submitHandler={authenticateUser} heading='Login to Homenest'>
            {
                fields.map((field) =>(
                    <MUITextField
                        key={`${field.label.replaceAll(' ', '-')}-field`} 
                        value={field.value} 
                        label={field.label} 
                        changeHandler={changeHandler}
                        type = {field.type}
                        name={field.name}
                        className='w-full'
                    />
                ))

            }
            {   
                processStatus === 'loading' ? 
                    <CircularProgress className='text-center'/>
                :processStatus === 'unauthorised' ? 
                    <Alert variant='filled' severity='error'>
                        UnAuthorised. Unknown User or Incorrect details.
                    </Alert>
                :processStatus === 'invalid-input' ?
                    <Alert variant='filled' severity='warning'>
                        Invalid details
                    </Alert>
                :processStatus === 'error' ?
                    <Alert variant='filled' severity='error'>
                        Error occured. Please try again
                    </Alert>
                :processStatus === 'authenticated' ?
                    <Alert severity='success' variant='filled'>
                        Success. Authentication token acquired.
                    </Alert>
                :''
            }
           <LoginButton processStatus = {processStatus} />
           <SecondaryButton label='Sign Up' handleClick={() =>navigate('/sign-up')}/>
        </Form>
    )
}

type formProps = { 
    loginDetails: LoginProps, 
    changeHandler: ChangeEventHandler
    authenticateUser: () =>Promise<void>
    processStatus: Status
}

export default LoginForm