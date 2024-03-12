import Heading from '../components/Heading'
import ImageGrid from './image-grid/ImageGrid'
import { GalleryItem } from '../types'


const PropertyGallery = ({ images }: {images: GalleryItem[]}) => {

    return (
        <section className='px-8 py-4 space-y-4'>
            <Heading level={1} className="text-xl font-bold text-slate-800">
                Property Gallery
            </Heading>
            <ImageGrid images={images}/>
        </section>
    )
}

export default PropertyGallery