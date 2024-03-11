import { useState } from 'react'
import Image from '../components/Image'
import Heading from '../components/Heading'
import Button from '@mui/material/Button'
import GalleryForm from './GalleryForm'

const PropertyGallery = () => {
    const [gallery, setGallery] = useState<GalleryItem[]>([])
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false)
    const [imageUrl, setImageUrl] = useState<string>('')

    const toggleForm = () =>{
        setIsFormOpen(!isFormOpen)
    }

  return (
    <section className='px-8 py-4'>
         <Heading level={1} className="text-xl font-bold text-slate-800 mb-4">
            Property Gallery
        </Heading>
        <div className="grid-auto">
            {
                gallery.length > 0 &&
                    gallery.map(image => (
                        <div key={image.id} className="relative">
                            <Image src={image.url} alt={image.alt} className='w-full' />
                        </div>
                    ))
                }
        </div>
        {
            isFormOpen && <GalleryForm 
                value={imageUrl} 
                changeHandler={(e) => setImageUrl(e.target.value)}
                submitHandler={()=>{}}    
            />
        }
        <Button 
            variant='contained' 
            size='large'
            color={isFormOpen ? 'error' : 'primary'}
            onClick={toggleForm}
        >{ isFormOpen ? 'Quit Form': 'Add Image to Gallery'}</Button>
    </section>
  )
}

interface GalleryItem{
    id: string
    alt: string
    url: string
}

export default PropertyGallery