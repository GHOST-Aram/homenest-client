import FileSelector from '../../properties/property-input/containers/form-sections/FileSelector'
import { FormEvent, useState } from 'react'
import { Button } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { createImageUrlFromBase64 } from '../../../utils/images'
import { User } from '../../../types'
import { AuthContext } from '../../../utils/authContext'
import DeleteButton from '../components/DeleteButton'
import '../styles.css'



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
    name: string
}



const PropertyGallery = ({landlordId}: { landlordId: string}) => {
    const { id } = useParams()
    const [previews, setPreviews] = useState<ImageMetadata[]>([])
    const [imageFiles, setImageFiles] = useState<File[]>([])
    const [gallery, setGallery] = useState<Gallery | null>(null)

    // Image ids -hexadecimal ids generated from DB// For deleting images in the DB
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
                if(id)
                    await getGalleryData(id)
            })() 
        } catch (error) {
            console.log(error)
        }
    }, [id])

    const getGalleryData = async(id: string) =>{
        const response = await fetch(`${API_BASE_URL}/gallery/${id}`, {method: 'GET'})
    
        const data = await response.json()
        const status = response.status
        
        if(status === 200)
            setGallery(data)

        // console.log(status, data)
    }

    useEffect(() =>{
        //Create metada from fetched images for display
        if(gallery)
        setPreviews(gallery.images.map((image) => ({
            id: image.id,
            alt: image.name,
            url: createImageUrlFromBase64({data: image.data, contentType: image.contentType}),
            name: image.name
        })))

    }, [gallery])

    const updatePreviews = (file: File) =>{
        const fileReader = new FileReader()

		fileReader.addEventListener('loadend', () =>{
			setPreviews([...previews, 
                {
                    url: fileReader.result as string,
                    id: Date.now().toString(),
                    alt: `preview${Date.now().toString()}`,
                    name: file.name

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

        try {
            if(imageFiles.length && gallery === null && id){
                // POST
                await createNewGallery(formData)
                await getGalleryData(id) //update gallery to make it not null
            }
            
            if( gallery !== null && imageFiles.length){
                // PATCH - add more
                await addImagesToGallery(formData)
            } 
            
            if(gallery?.images.length && deleteList.length){
                // PATCH - remove images
                await deleteFromGallery(deleteList)
            }
        } catch (error) {
            console.log(error)
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

            // console.log(status, data)
            debugger
        } catch(error){
            console.log(error)
            debugger
        }
    }

    const addImagesToGallery = async(formData: FormData) =>{
        try{
            setIsLoading(true)
            const response = await fetch(`${API_BASE_URL}/gallery/${id}`, {
                method: 'PATCH',
                body: formData
            })
            setIsLoading(false)
            const data = await response.json()
            const status = response.status

            closeEditor()

            // console.log(status, data)
            debugger
        } catch(error){
            console.log(error)
            debugger
        }
    }

    const deleteFromGallery = async(deleteList: string[]) =>{
        try{
            setIsLoading(true)

            console.log("DeleteList: ", deleteList)
            const response = await fetch(`${API_BASE_URL}/gallery/${id}`, {
                method: 'PATCH',
                body: JSON.stringify({ imageIds: deleteList }),
                headers: {
                    'Content-Type': 'application/json'
                }
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

    const removeFromPreview = (id: string) =>{
        setPreviews(previews.filter(preview => preview.id !== id))
    }

    const removeFromImageFiles = (fileName: string) =>{
        setImageFiles(imageFiles.filter(file => file.name !== fileName))
    }

    const addToDeleteList = (id: string) =>{
        setDeleteList([...deleteList, id])
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

                            //Display button if either there are images to be uploaded or
                            // There are images to be deleted from the server
                            (Boolean(imageFiles.length) || Boolean(deleteList.length) )&&
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
                    <div className='image-container' key={preview.id}>
                        <div className='image-wrapper'>
                            {
                                isEditing && 
                                <DeleteButton deleteImage={() =>{
                                    const id = preview.id
                                    removeFromPreview(id)
                                    removeFromImageFiles(preview.name)

                                    if(/^[a-f0-9]{24}$/i.test(id)) //Id matches IDs from DB.
                                        addToDeleteList(id)
                                }
                                }/>
                            }
                            <img 
                                src={preview.url as string} 
                                alt={`gallery-${index}`}
                            />
                        </div>
                    </div>
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