import TextField from '@mui/material/TextField'
import { ChangeEventHandler } from 'react'


const MUITextField = ({ label, changeHandler, value, type, className }: TextFieldProps) => {
  return (
    <TextField 
        label = {label} 
        variant='outlined' 
        onChange={changeHandler} 
        value={value}
        type={type ? type : 'text'}
        required
        className={className}
    />
  )
}

type TextFieldProps = {
    label: string
    changeHandler: ChangeEventHandler
    value: string
    type?:string
    className?: string
}
export default MUITextField