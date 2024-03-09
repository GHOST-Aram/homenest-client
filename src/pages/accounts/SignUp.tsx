import Paper from '@mui/material/Paper'
import MUITextField from '../../components/MUITextField'
import { Radio } from '@mui/material'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button'
import { ChangeEvent, useState } from 'react'

const submitUserData = (userData: UserData) =>{
console.log(userData)
}


export const SignUp = () =>{
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

    const fieldData = [
        { name:'fullName',label: 'Full name', value: userData.fullName, type: 'text' },
        { name:'email',label: 'Email', value: userData.email , type: 'email'},
        { name:'password',label: 'Password', value: userData.password , type: 'password'},
        { 
            name:'confirmPassword',label: 'Confirm Password', 
            value: userData.confirmPassword, type: 'password'
        }, 
    ]

   

    return(
        <form className='py-8' onSubmit={(e) =>{
            e.preventDefault()
            submitUserData(userData)
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
                    userData.password !== userData.confirmPassword &&
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
                <Button variant='contained' className='w-full' type='submit'>Sign Up</Button>
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
export default SignUp