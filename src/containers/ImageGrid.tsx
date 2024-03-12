import Image from '../components/Image'
import { GalleryItem } from '../types'


const ImageGrid = ({images}: {images: GalleryItem[]}) => {
  return (
    <div className="grid-auto">
        {
            images.length > 0 && 
                images.map(image => (
                    image._id &&
                    <div key={image?._id} className="relative">
                        <Image src={image.url} alt={image.alt} className='w-full' />
                    </div>
                ))
            }
    </div>
  )
}

export default ImageGrid