import Image from "../components/Image"
import { GalleryItem } from "../types"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { ChangeEventHandler } from "react"

const GalleryInputSection = ({ images, getImageData  }: Props) => {

    return (
        <>
            <h1 className="text-blue-700 text-lg text-center">Property Gallery</h1>
            <Box className="grid-auto">
                {
                    images.length > 0 &&
                        images.map((image, index) => (
                            <div key={`${image.alt} ${index}`}>
                                <Image src={image.url} alt={image.alt} className='w-full' />
                            </div>
                        ))
                    }
            </Box>
            <Box className="flex flex-col w-full md:flex-row gap-4">
                <Box className="flex flex-col w-full md:flex-row gap-4">
                    <TextField 
                        fullWidth name="alt" 
                        label='Image Name' 
                        onChange={getImageData}
                    />
                    <TextField 
                        fullWidth name="url" 
                        label='Image Url' 
                        onChange={getImageData}
                    />
                </Box>
                <Button color="primary" variant='contained'>Preview</Button>
            </Box>
        </>
    )
}

interface Props{
    images: GalleryItem[]
    getImageData: ChangeEventHandler<HTMLInputElement>
}

export default GalleryInputSection