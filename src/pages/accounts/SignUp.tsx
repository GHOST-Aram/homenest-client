import Paper from '@mui/material/Paper'
import MUITextField from '../../components/MUITextField'
import { Radio } from '@mui/material'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button'
import { ChangeEvent, useState } from 'react'
import { createUser } from '../../utils/fetch'
import Alert from '@mui/material/Alert'

const passwordsMatch = (password: string, confirmPassword: string) =>{
    return password === confirmPassword 
}

export const SignUp = () =>{
    const [userData, setUserData] = useState<UserData>({
        fullName: '',
        role: 'tenant',
        email: '',
        password: '',
        confirmPassword:''
    })

    const [ status, setStatus] = useState<Status>('idle')
    
    const collectUserInput = (e: ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = e.target
        setUserData({...userData, [name]: value })
    }


    const fieldData = [
        { name:'fullName',label: 'Full name', value: userData.fullName, type: 'text' },
        { name:'email',label: 'Email', value: userData.email , type: 'email'},
        { 
            name:'password',label: 'Password', value: userData.password , type: 'password'},
        { 
            name:'confirmPassword',label: 'Confirm Password', 
            value: userData.confirmPassword, type: 'password'
        }, 
    ]

   

    return(
        <form className='py-8' onSubmit={async(e) =>{
            e.preventDefault()
            if(passwordsMatch(userData.password, userData.confirmPassword)){
                const apiUrl = 'http://localhost:8000/users'

                try{
                    setStatus('loading')
                    const response = await createUser(apiUrl, userData)
                    const statusCode = response.status
                    if(statusCode === 409){
                        setStatus('conflict')
                    } else if(statusCode === 201){
                        setStatus('created')
                    } else if(statusCode === 500){
                        setStatus('server-error')
                    } else if(statusCode === 400){
                        setStatus('invalid-input')
                    }
                    const text = await response.text()
                    // const body = await response.json()
                    console.log(statusCode, text )
                }catch(error){
                    setStatus('error')
                    console.log(error)
                }
            }
        }}>
            <Paper 
                elevation={8}
                className='p-8 m-8 lg:w-2/5 md:w-3/5 md:m-auto lg:m-auto flex 
                flex-col space-y-4'
            >
                <h1 className="text-blue-700 font-bold text-lg text-center">Welcome to Homenest</h1>
                {
                    fieldData.map((field) =>(
                        <MUITextField
                            key={`${field.label.replaceAll(' ', '-')}-field`} 
                            value={field.value} 
                            label={field.label} 
                            changeHandler={collectUserInput}
                            type = {field.type}
                            name={field.name}
                            className='w-full'
                        />
                    ))
                }
                {
                    !passwordsMatch(userData.password, userData.confirmPassword) &&
                    <p className="text-sm text-red-700">Passwords should be identical</p>
                }
                <FormControl>
                    <FormLabel id='role' >Sign Up as</FormLabel>
                    <RadioGroup aria-labelledby='role' value={userData.role} name='role' 
                    onChange={collectUserInput}>
                        <FormControlLabel value={'tenant'} control={<Radio/>} label='Tenant'/>
                        <FormControlLabel value={'landlord'} control={<Radio/>} label='Landlord'/>
                    </RadioGroup>
                </FormControl>
                <div>
                    {
                        status === 'conflict' ?
                        <Alert variant='filled' severity='warning'>
                            Email has already been taken
                        </Alert>
                        : status === 'created' ?
                        <Alert variant='filled' severity='success'>
                            Sign Up successfull
                        </Alert>
                        :status === 'invalid-input' ?
                        <Alert variant='filled' severity='error'>
                            Invalid Input
                        </Alert>
                        :''
                    }
                </div>
                <Button  
                    disabled = {status === 'loading' }
                    variant='contained' className='w-full' type='submit'>
                    {status === 'loading' ? 'Loading' : 'Sign Up' }
                </Button>
            </Paper>
        </form>
    )
}



interface UserData{
    fullName: string
    role: string
    email: string
    password: string
    confirmPassword:string
}

type Status = 'idle'|'loading'|'created'|'error'|'conflict'|'server-error'|'invalid-input'

export default SignUp