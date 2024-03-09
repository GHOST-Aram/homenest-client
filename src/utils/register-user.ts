import { UserData } from "../types"
import { createUser } from "./fetch"

export const registerUser = async(setStatus: Function, userData: UserData) =>{
    const apiUrl = 'http://localhost:8000/users'

    try{
        setStatus('loading')
        const response = await createUser(apiUrl, userData)
        const statusCode = response.status
        if(statusCode === 409){
            setStatus('conflict')
        } else if(statusCode === 201){
            setStatus('created')
        } else if(statusCode === 500){
            setStatus('server-error')
        } else if(statusCode === 400){
            setStatus('invalid-input')
        }
        const text = await response.text()
        // const body = await response.json()
        console.log(statusCode, text )
    }catch(error){
        setStatus('error')
        console.log(error)
    }
}

