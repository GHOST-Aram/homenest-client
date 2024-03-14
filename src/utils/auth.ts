import { jwtDecode } from "jwt-decode"
import { removeAuthenticationToken } from "./cookie"

export const decodeAuthToken = (token: string) =>{
    const decodedToken = jwtDecode(token)
    return decodedToken
}

export const logout = () =>{
    removeAuthenticationToken()
}


