import ImageGrid from '../components/ImageGrid'
import { GalleryItem } from '../../../types'
import FileSelector from '../../properties/property-input/containers/form-sections/FileSelector'
import { FormEvent, useState } from 'react'
import { Button } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

interface Preview{
    id: string
    url: string| ArrayBuffer | null
}

const fetchGallery = async() =>{
        
}

const PropertyGallery = ({ images }: {images: GalleryItem[]}) => {
    const { id } = useParams()
    const [previews, setPreviews] = useState<Preview[]>([])
    const [imageFiles, setImageFiles] = useState<File[]>([])
    const [gallery, setGallery] = useState(null)

    useEffect(() => {

        try {
            (async() =>{
                const response = await fetch(`${API_BASE_URL}/gallery/${id}`, {method: 'GET'})
    
                const data = await response.json()
                const status = response.status
                
                setGallery(data)

                console.log(status, data)
            })() 
        } catch (error) {
            console.log(error)
        }
    }, [id])

    const updatePreviews = (file: File) =>{
        const fileReader = new FileReader()

		fileReader.addEventListener('loadend', () =>{
			setPreviews([...previews, 
                {
                    url: fileReader.result,
                    id: Date.now().toString()
                }
            ])
		})

		fileReader.readAsDataURL(file)
    }

    const addFile = (file: File) =>{
        setImageFiles([...imageFiles, file ])
    }

    const submitFiles = async(event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault()

        const formData = new FormData()

        formData.append('assetId', id as string)

        imageFiles.forEach(file =>{
            formData.append('images', file)
        })

        if(imageFiles.length){
            console.log(imageFiles)

            try{
                const response = await fetch(`${API_BASE_URL}/gallery`, {
                    method: 'POST',
                    body: formData
                })
    
                const data = await response.json()
                const status = response.status
    
                console.log(status, data)
                debugger
            } catch(error){
                console.log(error)
                debugger
            }

        }
    }
    return (
        <section className={ section }>
            <h1 className={heading}>Property Gallery</h1>
            <ImageGrid images={images}/>
            <div className="grid-auto">
                {
                    previews.map((preview, index) =>(
                        typeof( preview.url === 'string') ?
                        <img src={preview.url as string} key={preview.id} alt={`gallery-${index}`}/>
                        :''
                    ))
                }
            </div>
            <form action="" onSubmit={submitFiles} className="flex gap-4">
                <FileSelector previewBackgroundImage={updatePreviews} onFileChange={addFile}/>
                {   
                    Boolean(imageFiles.length) &&
                    <Button size='large' 
                        variant='contained' 
                        type='submit'
                        color='success'
                    >
                        SAVE CHANGES
                    </Button>
                }
            </form>
        </section>
    )
}

const heading = 'text-xl font-bold text-slate-800'
const section = 'px-8 py-4 space-y-4'
const API_BASE_URL = process.env.REACT_APP_API_URL
export default PropertyGallery