import ImageGrid from '../components/ImageGrid'
import { GalleryItem } from '../../../types'
import FileSelector from '../../properties/property-input/containers/form-sections/FileSelector'
import { useState } from 'react'
import { Button } from '@mui/material'
import { useParams } from 'react-router-dom'

interface Preview{
    id: string
    url: string| ArrayBuffer | null
}

const PropertyGallery = ({ images }: {images: GalleryItem[]}) => {
    const { id } = useParams()
    const [previews, setPreviews] = useState<Preview[]>([])
    const [imageFiles, setImageFiles] = useState<File[]>([])

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

    const submitFiles = async() =>{
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
            <div className="flex gap-4">
                <FileSelector previewBackgroundImage={updatePreviews} onFileChange={addFile}/>
                {   
                    Boolean(imageFiles.length) &&
                    <Button size='large' 
                    variant='outlined' 
                    onClick={submitFiles}
                    >
                        Save Gallery
                    </Button>
                }
            </div>
        </section>
    )
}

const heading = 'text-xl font-bold text-slate-800'
const section = 'px-8 py-4 space-y-4'
const API_BASE_URL = process.env.REACT_APP_API_URL
export default PropertyGallery