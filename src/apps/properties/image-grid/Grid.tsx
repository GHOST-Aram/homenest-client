import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { MdDelete } from 'react-icons/md'
import { GalleryItem } from '../../../types'

const Grid = (
	{
		images,
		deleteImage
	}:Props
) => {
	return (
		<Box className="grid-auto">
			{
				images.length > 0 && 
					images.map((image, index) => (
						<Box key={ image?._id ? image._id : `${image.url}-$${index}`}>
							<IconButton 
								onClick={()=> deleteImage(image)}
								color='error'
								size='large' 
								className='absolute top-12'
							>
								<MdDelete />
							</IconButton>
							<img 
								src={image.url} 
								alt={image.alt} 
								className='w-full' 
							/>
						</Box>
					))
			}
		</Box>
	)
}

interface Props {
    images: GalleryItem[]
    deleteImage:(image: GalleryItem)=>void
}


export default Grid