import { GalleryItem } from "../../../../../types"
import ImageInput from "../../components/ImageInput"
import Grid from "../../../image-grid/Grid"
import { ChangeEventHandler } from "react"

const GalleryInputSection = (
    { 
        imageData,
        images,
        collectImageData, 
        deleteImageData, 
        addImageToGallery 
    }: Props
) => {

    return (
        <>
            <h1 className={heading}>Property Gallery</h1>
            <Grid 
                images={ images } 
                deleteImage={deleteImageData}
            />
            <ImageInput 
                imageData={imageData}
                collectImageData={collectImageData}
                addToPropertyGallery={addImageToGallery}
            />
        </>
    )
}

interface Props{
    imageData: GalleryItem
    images: GalleryItem[]
    collectImageData: ChangeEventHandler
    addImageToGallery: () =>void
    deleteImageData: (image: GalleryItem) => void
}

const heading = "text-blue-700 text-lg text-center"

export default GalleryInputSection