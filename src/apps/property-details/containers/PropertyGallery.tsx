import ImageGrid from '../components/ImageGrid'
import { GalleryItem } from '../../../types'


const PropertyGallery = ({ images }: {images: GalleryItem[]}) => {

    return (
        <section className={ section }>
            <h1 className={heading}>Property Gallery</h1>
            <ImageGrid images={images}/>
        </section>
    )
}

const heading = 'text-xl font-bold text-slate-800'
const section = 'px-8 py-4 space-y-4'

export default PropertyGallery