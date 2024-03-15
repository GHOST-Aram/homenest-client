import { PropertyData } from "../../../types";
import { PropertyCreator } from "./PropertyCreater";
import { sendPutRequest } from "../../../utils/fetch";
import { NavigateFunction } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { Status } from "../../../types";


export class PropertyUpdater extends PropertyCreator{
    private id: string
    
    constructor(
        {
            propertyData,
            authToken,
            navigate,
            setPropertyData,
            setStatus,
            setErrorMsg,
            propertyId
        }:{
            propertyData: PropertyData,
            authToken: string,
            navigate: NavigateFunction,
            setPropertyData: Dispatch<SetStateAction<PropertyData>>,
            setStatus: Dispatch<SetStateAction<Status>>,
            setErrorMsg: Dispatch<SetStateAction<string>>,
            propertyId: string
        })
    {
        super({
            propertyData,
            authToken,
            navigate,
            setPropertyData,
            setStatus,
            setErrorMsg,
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