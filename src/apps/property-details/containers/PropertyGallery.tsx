import FileSelector from '../../properties/property-input/containers/form-sections/FileSelector'
import { FormEvent, useState } from 'react'
import { Button } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { createImageUrlFromBase64 } from '../../../utils/images'
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

    // Image ids -hexadecimal ids generated from DB
    const [deleteList, setDeleteList] = useState<string[]>([])

    const [isEditing, setIsEditing] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    // const authToken = cookie.getAuthenticationToken('homenestAuthenticationToken')
    const authContext = useContext(AuthContext)
    const user: User = authContext.user 

    const closeEditor = () =>{
        setIsEditing(false)
    }

    const toggleEditor = () =>{
        setIsEditing(!isEditing)
    }

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

        if(imageFiles.length && gallery === null){
            // POST
            await createNewGallery(formData)
        }
        
        if( gallery !== null && imageFiles.length){
            // PUT - add more
            await addImagesToGallery(formData)
        } 
        
        if(gallery?.images.length && deleteList.length){
            // PUT remove images
            await deleteFromGallery(deleteList)
        }
    }

    const createNewGallery = async (formData: FormData) => {
        try{
            setIsLoading(true)
            const response = await fetch(`${API_BASE_URL}/gallery`, {
                method: 'POST',
                body: formData
            })
            setIsLoading(false)
            const data = await response.json()
            const status = response.status

            closeEditor()

            console.log(status, data)
            debugger
        } catch(error){
            console.log(error)
            debugger
        }
    }

    const addImagesToGallery = async(formData: FormData) =>{
        try{
            setIsLoading(true)
            const response = await fetch(`${API_BASE_URL}/gallery`, {
                method: 'PATCH',
                body: formData
            })
            setIsLoading(false)
            const data = await response.json()
            const status = response.status

            closeEditor()

            console.log(status, data)
            debugger
        } catch(error){
            console.log(error)
            debugger
        }
    }

    const deleteFromGallery = async(deleteList: string[]) =>{
        try{
            setIsLoading(true)
            const response = await fetch(`${API_BASE_URL}/gallery`, {
                method: 'PATCH',
                body: JSON.stringify({ ids: deleteList })
            })
            setIsLoading(false)
            const data = await response.json()
            const status = response.status

            closeEditor()

            console.log(status, data)
            debugger
        } catch(error){
            console.log(error)
            debugger
        }
    }

    return (
        <section className={ section }>
            <div className="flex flex-col md:flex-row gap-4 w-full">
                <h1 className={heading}>Property Gallery</h1>
                {
                   user && user.id === landlordId ? 
                    <Button 
                        size='large' variant='contained' color={isEditing? 'error' :'secondary'}
                        onClick={toggleEditor}
                    >
                        { isEditing ? 'Close Editor': 'Edit Gallery'}
                    </Button> 
                    : ''
                }
                <form action="" onSubmit={submitFiles} className="flex flex-col md:flex-row gap-4">
                    {isEditing && 
                    <>
                        <FileSelector 
                            previewBackgroundImage={updatePreviews} 
                            onFileChange={addFile}/>
                        {   
                            Boolean(imageFiles.length) &&
                            <Button size='large' 
                                variant='contained' 
                                type='submit'
                                color='success'
                                disabled={ isLoading }
                            >
                                { isLoading? 'Saving ...' : 'SAVE CHANGES' }
                            </Button>
                        }
                    </>
                    }
                </form>
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
        </section>
    )
}

const heading = 'text-xl font-bold text-slate-800'
const section = 'px-8 py-4 space-y-4'
const API_BASE_URL = process.env.REACT_APP_API_URL
export default PropertyGallery