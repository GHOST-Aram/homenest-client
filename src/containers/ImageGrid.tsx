import { useLocation } from 'react-router-dom'
import Image from '../components/Image'
import { GalleryItem } from '../types'
import IconButton from '@mui/material/IconButton'
import { MdDelete } from 'react-icons/md'

const ImageGrid = ({images, deleteImage}:Props) => {
	const location = useLocation()
	const pathname = location.pathname
	const isDisplayingOnForm = pathname.includes('new') || pathname.includes('update')

	return (
		<div className="grid-auto">
			{
				images.length > 0 && 
					images.map((image, index) => (
						<div key={image?._id ? image._id : `${image.url}-$${index}`}>
							{
								isDisplayingOnForm && deleteImage &&
								<IconButton 
									onClick={()=> deleteImage(image)}
									color='error'
									size='large' 
									className='absolute top-12'
								>
									<MdDelete />
								</IconButton>
							}
							<Image src={image.url} alt={image.alt} className='w-full' />
						</div>
					))
			}
		</div>
	)
}

interface Props {
	images: GalleryItem[]
	deleteImage?:(image: GalleryItem)=>void
}

export default ImageGrid