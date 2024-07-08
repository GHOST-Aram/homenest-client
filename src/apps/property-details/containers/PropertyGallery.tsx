import ImageGrid from '../components/ImageGrid'
import { GalleryItem } from '../../../types'
import FileSelector from '../../properties/property-input/containers/form-sections/FileSelector'
import { useState } from 'react'


interface Preview{
    id: string
    url: string| ArrayBuffer | null
}

const PropertyGallery = ({ images }: {images: GalleryItem[]}) => {

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
            <FileSelector previewBackgroundImage={updatePreviews} onFileChange={addFile}/>
        </section>
    )
}

const heading = 'text-xl font-bold text-slate-800'
const section = 'px-8 py-4 space-y-4'

export default PropertyGallery