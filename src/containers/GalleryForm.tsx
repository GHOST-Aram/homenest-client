import { ChangeEventHandler } from 'react'
import MUITextField from '../components/MUITextField'
import Button from '@mui/material/Button'
import { GalleryItem } from '../types'

const GalleryForm = ({ galleryItem, changeHandler, submitHandler}: Props) => {
    return (
        <form onSubmit={(event)=>{
            event.preventDefault()
            submitHandler()
        }} 
            className='lg:w-2/5 flex flex-col gap-4 mb-4'
        >
            <div className="flex flex-col md:flex-row gap-4">
                <MUITextField 
                    name='alt'
                    label='Image Label'
                    changeHandler={changeHandler}
                    value = {galleryItem.alt}
                />
                <MUITextField 
                    name='url'
                    label='Image Url'
                    changeHandler={changeHandler}
                    value = {galleryItem.url}
                />
            </div>
            <div className="flex flex-col gap-4 lg:flex-col md:flex-row w-full">
                <Button 
                    variant='contained' 
                    color='primary'
                    fullWidth
                >
                    Preview and Continue
                </Button>
                    <Button 
                    variant='contained' 
                    color={'success'}
                    type='submit'
                    fullWidth
                >
                    Save and Exit
                </Button>
            </div>
        </form>
    )
}

interface Props {
    galleryItem: GalleryItem
    changeHandler: ChangeEventHandler<HTMLInputElement>
    submitHandler: () =>void
}

export default GalleryForm