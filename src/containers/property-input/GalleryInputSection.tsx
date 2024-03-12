import { GalleryItem, PropertyData } from "../../types"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import ImageGrid from "../image-grid/ImageGrid"
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"

const GalleryInputSection = ({ property, setProperty }: Props) => {
    const [imageData, setImageData] = useState<GalleryItem>({ url:'', alt: '' })

    const collectImageData = (e: ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = e.target
        setImageData({...imageData, [name]: value })
    }

    const addToPropertyGallery = () =>{
        if(imageData.url.trim() && imageData.url.trim()){
            setProperty({...property, images:[...property.images, imageData]})
        }
    }

    const deleteImage = (image:GalleryItem) =>{
        const id = image._id
        const url = image.url
        const alt = image.alt

        if(id){
            const images:GalleryItem[] = property.images.filter(
                element => element._id !== id
            )
            setProperty({ ...property, images: images})
        } else {
            const images: GalleryItem[] = property.images.filter(
                element => {
                    if(element.url===url && element.alt===alt)
                        return false
                    return true
                })

            setProperty({ ...property, images: images})
        }
    }

    return (
        <>
            <h1 className="text-blue-700 text-lg text-center">Property Gallery</h1>
            <ImageGrid images={property.images} deleteImage={deleteImage}/>
            <Box className="flex flex-col w-full md:flex-row gap-4">
                <Box className="flex flex-col w-full md:flex-row gap-4">
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
                <Button color="primary" variant='contained' onClick={addToPropertyGallery}>
                    Add
                </Button>
            </Box>
        </>
    )
}

interface Props{
    property: PropertyData
    setProperty: Dispatch<SetStateAction<PropertyData>>
}

export default GalleryInputSection