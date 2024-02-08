import React, { useState, useEffect} from 'react'
import Image from '../components/Image'
import { images } from '../image-urls'
import Heading from '../components/Heading'
import ButtonFilled from '../components/ButtonFilled'

const PropertyGallery = () => {
    const [gallery, setGallery] = useState<GalleryItem[]>([])

    useEffect(() => {
        setGallery(images)
    }, [])
  return (
    <section className='px-8 py-4 space-y-4'>
         <Heading level={1} className="text-xl font-bold text-slate-800 mb-4">
            Property Gallery
        </Heading>
        <div className="grid-auto">
            {
                gallery.map(image => (
                    <div key={image.id} className="relative">
                        <Image src={image.url} alt={image.alt} className='w-full' />
                    </div>
                ))
            }
        </div>
        <ButtonFilled>VIEW MORE FROM GALLERY</ButtonFilled>

    </section>
  )
}

interface GalleryItem{
    id: string
    alt: string
    url: string
}

export default PropertyGallery