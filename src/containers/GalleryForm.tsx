import { ChangeEventHandler } from 'react'
import MUITextField from '../components/MUITextField'
import Button from '@mui/material/Button'

const GalleryForm = ({ value, changeHandler, submitHandler}: Props) => {
    return (
        <form onSubmit={submitHandler} 
            className='lg:w-2/5 flex flex-col gap-4 lg:flex-row mb-4'>
            <MUITextField 
                name='imageUrl'
                label='Image Url'
                changeHandler={changeHandler}
                value = {value}
            />
            <Button 
                variant='contained' 
                size='large' 
                type='submit'
                color='success'
            >
                Save
            </Button>
        </form>
    )
}

interface Props {
    value: string
    changeHandler: ChangeEventHandler<HTMLInputElement>
    submitHandler: () =>void
}

export default GalleryForm