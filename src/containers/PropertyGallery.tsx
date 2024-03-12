import Image from '../components/Image'
import Heading from '../components/Heading'
import { GalleryItem } from '../types'


const PropertyGallery = ({ images }: {images: GalleryItem[]}) => {

    return (
        <section className='px-8 py-4 space-y-4'>
            <Heading level={1} className="text-xl font-bold text-slate-800">
                Property Gallery
            </Heading>
            <div className="grid-auto">
                {
                    images.length > 0 &&
                        images.map(image => (
                            <div key={image.alt} className="relative">
                                <Image src={image.url} alt={image.alt} className='w-full' />
                            </div>
                        ))
                    }
            </div>
        </section>
    )
}

export default PropertyGallery