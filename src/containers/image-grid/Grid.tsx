import IconButton from '@mui/material/IconButton'
import Image from '../../components/Image'
import { MdDelete } from 'react-icons/md'
import { GalleryItem } from '../../types'

const Grid = ({
    images,
    isDisplayingOnForm,
    deleteImage
}:Props) => {
  return (
    <div>
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
							<Image src={image.url} alt={image.alt} 
								className='w-full' 
							/>
						</div>
					))
			}
		</div>
    </div>
  )
}

interface Props {
    images: GalleryItem[]
    deleteImage?:(image: GalleryItem)=>void
    isDisplayingOnForm: boolean
}


export default Grid