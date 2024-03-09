import { loginProps } from "../types"
export const authenticateUser = async(
    authUrl: string, loginData: loginProps): Promise<Response> =>{
        const response = await fetch(authUrl, {
            method: 'POST',
            body: JSON.stringify(loginData),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        return response
}
