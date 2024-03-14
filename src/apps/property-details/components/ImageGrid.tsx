import { GalleryItem } from '../../../types'
import Box from '@mui/material/Box'

const Grid = ({ images }:{ images: GalleryItem[]}) => {
  return (
        <Box className="grid-auto">
			{
				images.length > 0 ? 
					images.map((image, index) => (
                        <img 
                            key={image?._id ? image._id : `${image.url}-$${index}`}
                            src={image.url} 
                            alt={image.alt} 
                            className='w-full' 
                        />
					))
                : <h1 className={heading}>No images in gallery</h1>
			}
		</Box>
  )
}

const heading = "text-center text-blue-700 text-lg py-4"

export default Grid