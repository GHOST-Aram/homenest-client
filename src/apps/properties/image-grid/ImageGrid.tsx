import { GalleryItem } from '../../../types'
import Grid from './Grid'

const ImageGrid = ({images, deleteImage}:Props) => {

	return (<Grid images={images} deleteImage={deleteImage} />)
}

interface Props {
	images: GalleryItem[]
	deleteImage:(image: GalleryItem)=>void
}

export default ImageGrid