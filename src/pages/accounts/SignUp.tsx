import Paper from '@mui/material/Paper'
import MUITextField from '../../components/MUITextField'
import { Radio } from '@mui/material'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button'

export const SignUp = () =>{

    return(
        <form className='py-8' onSubmit={() =>{}}>
            <Paper 
                elevation={8}
                className='p-8 m-8 lg:w-2/5 md:w-3/5 md:m-auto lg:m-auto flex 
                flex-col space-y-4'
            >
                <h1 className="text-blue-700 font-bold text-lg text-center">Welcome to Homenest</h1>
                {
                    fields.map((field) =>(
                        <MUITextField
                            key={`${field.label.replaceAll(' ', '-')}-field`} 
                            value={field.value} 
                            label={field.label} 
                            changeHandler={field.changeHandler}
                            type = {field.type}
                            className='w-full'
                        />
                    ))
                }

                <FormControl>
                    <FormLabel id='role' >Sign Up as</FormLabel>
                    <RadioGroup aria-labelledby='role' defaultValue={'tenant'} name='role' 
                    onChange={(e) => {console.log(e.target.value)}}>
                        <FormControlLabel value={'tenant'} control={<Radio/>} label='Tenant'/>
                        <FormControlLabel value={'landlord'} control={<Radio/>} label='Landlord'/>
                    </RadioGroup>
                </FormControl>
                <Button variant='contained' className='w-full' type='submit'>Sign Up</Button>
            </Paper>
        </form>
    )
}

const fields = [
    { label: 'Full name', value: '', changeHandler: () =>{}, type: 'text' },
    { label: 'Email', value: '', changeHandler: () =>{} , type: 'email'},
    { label: 'Password', value: '', changeHandler: () =>{} , type: 'password'},
    { label: 'Confirm Password', value: '', changeHandler: () =>{} , type: 'password'}, 
]
export default SignUp