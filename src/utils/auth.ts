import { jwtDecode } from "jwt-decode"
import { LoginProps } from "../types"
import { createContext } from "react"
export const sendAuthenticationRequest = async(
    authUrl: string, loginData: LoginProps): Promise<Response> =>{
        const response = await fetch(authUrl, {
            method: 'POST',
            body: JSON.stringify(loginData),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        return response
}

export const authenticateUser = async(
    setAuthToken: Function, setStatus: Function, loginDetails: LoginProps
) =>{
    try {
        setStatus('loading')
        const response = await sendAuthenticationRequest(
            'http://localhost:8000/auth', loginDetails)
        
        const statusCode = response.status

        if(statusCode === 201){
            const body = await response.json()
            const token = body.token
            setAuthToken(token)
            setStatus('authenticated')
        } else if(statusCode === 400){
            setStatus('invalid-input')
        } else if(statusCode === 401){
            setStatus('unauthorised')
        } else if(statusCode === 500)
            setStatus('error')

    } catch (error) {
        setStatus('error')
    }
}

export const decodeAuthToken = (token: string) =>{
    const decodedToken = jwtDecode(token)
    return decodedToken
}

export const authContext = createContext({name: '', email: '', role: 'tenant' })
export const AuthProvider = authContext.Provider
export const AuthConsumer = authContext.Consumer
