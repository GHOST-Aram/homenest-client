import { useLocation } from 'react-router-dom'
import { GalleryItem } from '../../../types'
import Grid from './Grid'

const ImageGrid = ({images, deleteImage}:Props) => {
	const location = useLocation()
	const pathname = location.pathname
	const isDisplayingOnForm = pathname.includes('new') || pathname.includes('update')

	return (
		<Grid 
			images={images}
			isDisplayingOnForm={isDisplayingOnForm}
			deleteImage={deleteImage}
		/>
	)
}

interface Props {
	images: GalleryItem[]
	deleteImage?:(image: GalleryItem)=>void
}

export default ImageGrid