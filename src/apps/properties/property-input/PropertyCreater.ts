import { sendPostRequest } from "../../../utils/fetch"
import { SelectChangeEvent } from "@mui/material"
import { ReactNode, ChangeEvent, Dispatch, SetStateAction } from "react"
import { NavigateFunction } from "react-router-dom"
import { updateProcessStatus } from "../../../utils/process-status"
import { ValidationError } from "yup"
import { validatePropertyData } from "../../../utils/validator"
import { PropertyData, Status } from "../../../types"
import { GalleryItem } from "../../../types"

export class PropertyCreator{

    public propertyData: PropertyData
    public authToken: string
    public imageData: GalleryItem
    public errorMsg: string
    public status: Status
    private navigate: NavigateFunction
    private setPropertyData: Dispatch<SetStateAction<PropertyData>>
    private setStatus: Dispatch<SetStateAction<Status>>
    private setErrorMsg: Dispatch<SetStateAction<string>>
    private setImageData: Dispatch<SetStateAction<GalleryItem>>

    constructor(
        {
            propertyData,
            authToken,
            imageData,
            errorMsg,
            status,
            navigate,
            setPropertyData,
            setStatus,
            setErrorMsg,
            setImageData,
        }:{
            propertyData: PropertyData,
            authToken: string,
            imageData: GalleryItem,
            errorMsg: string,
            status: Status,
            navigate: NavigateFunction,
            setPropertyData: Dispatch<SetStateAction<PropertyData>>,
            setStatus: Dispatch<SetStateAction<Status>>,
            setErrorMsg: Dispatch<SetStateAction<string>>,
            setImageData: Dispatch<SetStateAction<GalleryItem>>

        }){
            this.propertyData = propertyData
            this.authToken = authToken
            this.imageData = imageData
            this.errorMsg = errorMsg
            this.status = status
            this.navigate = navigate
            this.setPropertyData = setPropertyData
            this.setStatus = setStatus
            this.setErrorMsg = setErrorMsg
            this.setImageData = setImageData
        }

    public getTextFieldValue = (e: ChangeEvent<HTMLInputElement>) =>{
        const { value, name } = e.target
        this.setPropertyData( { ...this.propertyData, [name]: value})
    }

    public getCheckboxValue = (e:ChangeEvent<HTMLInputElement>) =>{
        const { name, checked } = e.target
        this.setPropertyData({ ...this.propertyData, [name]: checked })
    }

    public getSelectedValue = (
        e: SelectChangeEvent<string | string []>, 
        child: ReactNode
    ) =>{
        const { value, name } = e.target
        this.setPropertyData( { ...this.propertyData, [name]: value})
    }

    public getImageData = (e: ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = e.target
        this.setImageData({...this.imageData, [name]: value })
    }

    public addImageGallery = () => {
        if(this.imageData.url.trim() && this.imageData.url.trim()){
            this.setPropertyData(
                {
                    ...this.propertyData, 
                    images:[...this.propertyData.images, this.imageData]
                }
            )
        }
    }

    public deleteImage = (image:GalleryItem) =>{
        const id = image._id
        const url = image.url
        const alt = image.alt

        if(id) this.removeById(id) 
        else this.removeByUrlAndAltText(url, alt)
    }

    private removeById = (id: string) =>{
        const images:GalleryItem[] = this.propertyData.images.filter(
            element => element._id !== id
        )
        this.setPropertyData({ ...this.propertyData, images: images})
    }

    private removeByUrlAndAltText = (url:string, alt: string) =>{
        const images: GalleryItem[] = this.propertyData.images.filter(
            element => (element.url!==url && element.alt!==alt)
        )

        this.setPropertyData({ ...this.propertyData, images: images})
    }

    public submitPropertyData = () =>{
        
        (async()=>{
            this.setStatus('loading')
            
            try {

                await validatePropertyData(this.propertyData)

                const { statusCode, body } = await this.sendRequest()
                
                this.processResponse({ statusCode, body })
                updateProcessStatus(this.setStatus, statusCode)
    
            } catch (error) {
                if(error instanceof ValidationError){
                    this.setErrorMsg(error.message)
                    this.setStatus('invalid-input')
                } else {
                    this.setStatus('error')
                }
            }
        })()
    }

    public sendRequest = async(): Promise<{statusCode: number, body: any}> =>{
        const response = await sendPostRequest('http://localhost:8000/properties', 
            {data: this.propertyData , authToken: this.authToken})

        const body = await response.json()
        const statusCode = response.status

        return { statusCode, body}
    }

    private processResponse = ({ statusCode, body }: { statusCode: number, body: any}) =>{
        if(statusCode === 201 || statusCode === 200){
            const id = body.item._id.toString()
            this.goToDetailsPage(id)
        } else if(statusCode === 400){
            this.setErrorMsg(body.errors[0].msg)
            this.setStatus('invalid-input')
        }
    }

    private goToDetailsPage = (id: string) =>{
        this.navigate(`/listings/${id}`, { replace : true })
    }
}