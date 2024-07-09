import FileSelector from '../../properties/property-input/containers/form-sections/FileSelector'
import { FormEvent, useState } from 'react'
import { Button } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { createImageUrlFromBase64 } from '../../../utils/images'
import { cookie } from '../../../utils/cookie'
import { User } from '../../../types'
import { AuthContext } from '../../../utils/authContext'


interface Gallery{
    assetId: string,
    images: {
        id: string,
        data: string,
        name: string,
        contentType: string
    }[]
}

interface ImageMetadata{
    id: string,
    alt: string
    url: string| ArrayBuffer | null
}



const PropertyGallery = ({landlordId}: { landlordId: string}) => {
    const { id } = useParams()
    const [previews, setPreviews] = useState<ImageMetadata[]>([])
    const [imageFiles, setImageFiles] = useState<File[]>([])
    const [gallery, setGallery] = useState<Gallery | null>(null)
    const [isEditing, setIsEditing] = useState(false)

    // const authToken = cookie.getAuthenticationToken('homenestAuthenticationToken')
    const authContext = useContext(AuthContext)
    const user: User = authContext.user 

    useEffect(() => {

        try {
            (async() =>{
                const response = await fetch(`${API_BASE_URL}/gallery/${id}`, {method: 'GET'})
    
                const data = await response.json()
                const status = response.status
                
                if(status === 200)
                    setGallery(data)

                console.log(status, data)
            })() 
        } catch (error) {
            console.log(error)
        }
    }, [id])

    useEffect(() =>{
        //Create metada from fetched images for display
        if(gallery)
        setPreviews(gallery.images.map((image) => ({
            id: image.id,
            alt: image.name,
            url: createImageUrlFromBase64({data: image.data, contentType: image.contentType})
        })))

    }, [gallery])

    const updatePreviews = (file: File) =>{
        const fileReader = new FileReader()

		fileReader.addEventListener('loadend', () =>{
			setPreviews([...previews, 
                {
                    url: fileReader.result as string,
                    id: Date.now().toString(),
                    alt: `preview${Date.now().toString()}`
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

    if (user){
        console.log(user.id, landlordId, landlordId === user.id)
    }

    return (
        <section className={ section }>
            <div className="flex justify-between">
                <h1 className={heading}>Property Gallery</h1>
                {
                   user && user.id === landlordId ? 
                    <Button 
                        size='large' variant='contained' color='secondary'
                        onClick={() => setIsEditing(!isEditing)}
                    >
                        Manage Gallery
                    </Button> 
                    : ''

                }
            </div>
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
                {isEditing && <FileSelector 
                    previewBackgroundImage={updatePreviews} 
                    onFileChange={addFile}/>
                }
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