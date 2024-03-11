import { ChangeEvent, useState } from 'react'
import Image from '../components/Image'
import Heading from '../components/Heading'
import Button from '@mui/material/Button'
import GalleryForm from './GalleryForm'
import { GalleryItem } from '../types'
import { patchDocument } from '../utils/fetch'
import { useParams } from 'react-router-dom'

const PropertyGallery = () => {
    const { id } = useParams()

    console.log(id)
    const [gallery, setGallery] = useState<GalleryItem[]>([])
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false)
    const [galleryItem, setGalleryItem] = useState<GalleryItem>({url:'', alt:''})

    const toggleForm = () =>{
        setIsFormOpen(!isFormOpen)
    }

    const closeForm = () =>{
        setIsFormOpen(false)
    }

    const collectGalleryItemData = (e: ChangeEvent<HTMLInputElement>) =>{
        const {name, value } = e.target
        setGalleryItem({ ...galleryItem, [name]: value})
    }

    const addToGalleryList = () =>{
        setGallery([...gallery, galleryItem])
        // closeForm()
    }

    const updateProperty = () =>{
        (async() =>{
            try {
                const response = await patchDocument(`http://localhost:8000/properties/${id}`, 
                    { images: gallery }
                )
        
                const statusCode = response.status
                console.log(statusCode)
            } catch (error) {
                console.log(error)
            }
        })()
    }

  return (
    <section className='px-8 py-4 space-y-4'>
         <Heading level={1} className="text-xl font-bold text-slate-800">
            Property Gallery
        </Heading>
        <div className="grid-auto">
            {
                gallery.length > 0 &&
                    gallery.map(image => (
                        <div key={image.alt} className="relative">
                            <Image src={image.url} alt={image.alt} className='w-full' />
                        </div>
                    ))
                }
        </div>
        {
            isFormOpen && <GalleryForm 
                galleryItem={galleryItem} 
                changeHandler={collectGalleryItemData}
                submitHandler={() => {
                    addToGalleryList()
                    updateProperty()
                }}    
            />
        }
            
        <Button 
            variant='contained' 
            size='large'
            color={ isFormOpen ? 'error' : 'primary'}
            onClick={toggleForm}
        >{isFormOpen ? 'Close and Quit' : 'Add Image to Gallery'}</Button>
    </section>
  )
}

export default PropertyGallery