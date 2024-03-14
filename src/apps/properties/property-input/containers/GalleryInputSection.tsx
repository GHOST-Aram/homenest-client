import { GalleryItem, PropertyData } from "../../../../types"
import ImageInput from "../components/ImageInput"
import Grid from "../../image-grid/Grid"
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
                element => (element.url!==url && element.alt!==alt)
            )

            setProperty({ ...property, images: images})
        }
    }

    return (
        <>
            <h1 className={heading}>Property Gallery</h1>
            <Grid 
                images={property.images} 
                deleteImage={deleteImage}
            />
            <ImageInput 
                imageData={imageData}
                collectImageData={collectImageData}
                addToPropertyGallery={addToPropertyGallery}
            />
        </>
    )
}

interface Props{
    property: PropertyData
    setProperty: Dispatch<SetStateAction<PropertyData>>
}

const heading = "text-blue-700 text-lg text-center"

export default GalleryInputSection