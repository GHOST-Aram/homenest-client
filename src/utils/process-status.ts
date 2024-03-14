import { Dispatch, SetStateAction } from "react"
import { Status } from "../types"

export const updateProcessStatus = (
    setStatus: Dispatch<SetStateAction<Status>>, 
    statusCode: number
) =>{
    switch (statusCode){
        case 201: {
            setStatus('created')
            break
        }
        case 401: {
            setStatus('unauthorised')
            break
        }
        case 400: {
            setStatus('invalid-input')
            break
        }
        case 409: {
            setStatus('conflict')
            break
        }
        case 500: {
            setStatus('server-error')
            break
        }
        default: {
            setStatus('error')
        }
    }
}