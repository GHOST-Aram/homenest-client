import TextField from '@mui/material/TextField'
import LoginButton from '../components/LoginButton'
import { LoginProps, Status } from '../../../types'
import { ChangeEventHandler } from 'react'
import Form from '../../../components/Form'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import GoToSignUpBtn from '../components/GoToSignUpBtn'


const LoginForm = ( 
    { 
        loginDetails, 
        changeHandler, 
        authenticateUser,
        processStatus 
    }:formProps 
) => {

    const fields = [
        { name:'email',label: 'Email', value: loginDetails.email , type: 'email'},
        {  name:'password',label: 'Password', value: loginDetails.password , type: 'password'}
    ]
    
    return (
        <Form submitHandler={authenticateUser} heading='Login to Homenest'>
            {
                fields.map((field) =>(
                    <TextField
                        key={`${field.label.replaceAll(' ', '-')}-field`} 
                        value={field.value} 
                        label={field.label} 
                        onChange={changeHandler}
                        type = {field.type}
                        name={field.name}
                        fullWidth
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
           <GoToSignUpBtn />
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