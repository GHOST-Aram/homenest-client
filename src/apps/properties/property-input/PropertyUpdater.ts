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
            propertyData,
            authToken,
            propertyId,
            imageData,
            navigate,
            setPropertyData,
            setStatus,
            setErrorMsg,
            setImageData,
        }:{
            propertyData: PropertyData,
            authToken: string,
            imageData: GalleryItem
            navigate: NavigateFunction,
            setPropertyData: Dispatch<SetStateAction<PropertyData>>,
            setStatus: Dispatch<SetStateAction<Status>>,
            setErrorMsg: Dispatch<SetStateAction<string>>,
            setImageData: Dispatch<SetStateAction<GalleryItem>>
            propertyId: string
        })
    {
        super({
            propertyData,
            authToken,
            imageData,
            navigate,
            setPropertyData,
            setStatus,
            setErrorMsg,
            setImageData,
        })

        this.id = propertyId
    }

    public sendRequest = async(): Promise<{statusCode: number, body: any}> =>{
        const response = await sendPutRequest(`http://localhost:8000/properties/${this.id}`, 
        {data: this.propertyData, authToken: this.authToken})

        const body = await response.json()
        const statusCode = response.status

        return { statusCode, body }
    }   
}