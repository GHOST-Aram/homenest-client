import { sendPostRequest } from "../../../utils/fetch"
import { SelectChangeEvent } from "@mui/material"
import { ReactNode, ChangeEvent, Dispatch, SetStateAction } from "react"
import { NavigateFunction } from "react-router-dom"
import { updateProcessStatus } from "../../../utils/process-status"
import { ValidationError } from "yup"
import { validatePropertyData } from "../../../utils/validator"
import { PropertyData, Status } from "../../../types"

export class PropertyCreator{

    public propertyData: PropertyData
    public authToken: string
    private navigate: NavigateFunction
    private setPropertyData: Dispatch<SetStateAction<PropertyData>>
    private setStatus: Dispatch<SetStateAction<Status>>
    private setErrorMsg: Dispatch<SetStateAction<string>>

    constructor(
        {
            propertyData,
            authToken,
            navigate,
            setPropertyData,
            setStatus,
            setErrorMsg,
        }:{
            propertyData: PropertyData,
            authToken: string,
            navigate: NavigateFunction,
            setPropertyData: Dispatch<SetStateAction<PropertyData>>,
            setStatus: Dispatch<SetStateAction<Status>>,
            setErrorMsg: Dispatch<SetStateAction<string>>,
        }){
            this.propertyData = propertyData
            this.authToken = authToken
            this.navigate = navigate
            this.setPropertyData = setPropertyData
            this.setStatus = setStatus
            this.setErrorMsg = setErrorMsg
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