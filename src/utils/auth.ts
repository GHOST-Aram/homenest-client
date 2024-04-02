import { jwtDecode } from "jwt-decode"
import { cookie } from "./cookie"

export const decodeAuthToken = (token: string) =>{
    const decodedToken = jwtDecode(token)
    return decodedToken
}

export const logout = () =>{
    cookie.removeAuthenticationToken('homenestAuthenticationToken')
}


