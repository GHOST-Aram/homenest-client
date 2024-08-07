import { PropertyData } from "../../../types";
import { PropertyCreator } from "./PropertyCreater";
import { sendPutRequest } from "../../../utils/fetch";
import { NavigateFunction } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { Status, GalleryItem } from "../../../types";


export class PropertyUpdater extends PropertyCreator{
    private id: string
    
    constructor(
        {
            propertyId,
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
            propertyId: string
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
        })
    {
        super({
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
        })

        this.id = propertyId
    }

    public sendRequest = async(): Promise<{statusCode: number, body: any}> =>{
        
        const formData = this.createFormData(this.propertyData)

        const response = await sendPutRequest(`${API_BASE_URL}/properties/${this.id}`, 
        {data: formData, authToken: this.authToken})

        const body = await response.json()
        const statusCode = response.status

        return { statusCode, body }
    }   
}

const API_BASE_URL = process.env.REACT_APP_API_URL
