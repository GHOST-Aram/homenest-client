import { ChangeEventHandler } from 'react'
import { Radio } from '@mui/material'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'

const RolesRadioInput = ( { value, changeHandler }: Props) => {
    return (
        <FormControl>
            <FormLabel id='role' >Sign Up as</FormLabel>
            <RadioGroup aria-labelledby='role' 
                value={value} name='role' 
                onChange={changeHandler}
            >
                <FormControlLabel value={'tenant'} control={<Radio/>} label='Tenant'/>
                <FormControlLabel value={'landlord'} control={<Radio/>} label='Landlord'/>
            </RadioGroup>
        </FormControl>
    )
}

type Props =  {value: string, changeHandler: ChangeEventHandler}

export default RolesRadioInput