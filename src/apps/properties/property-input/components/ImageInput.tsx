import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { ChangeEventHandler } from 'react'


const ImageInput = ({
    imageData,
    collectImageData,
    addToPropertyGallery,
}: Props
) => {

    return (
        <Box className={flexContainer}>
            <Box className={flexContainer}>
                <TextField 
                    fullWidth name="alt" 
                    label='Image Name' 
                    value={imageData.alt}
                    onChange={collectImageData}
                />
                <TextField 
                    fullWidth name="url" 
                    label='Image Url' 
                    value={imageData.url}
                    onChange={collectImageData}
                />
            </Box>
            <Button 
                color="primary" 
                variant='contained' 
                onClick={addToPropertyGallery}
            >
                Add
            </Button>
        </Box>
    )
}

const flexContainer = "flex flex-col w-full md:flex-row gap-4"

interface Props{
    imageData: {
        url: string,
        alt: string
    }
    collectImageData: ChangeEventHandler
    addToPropertyGallery: () => void
}

export default ImageInput