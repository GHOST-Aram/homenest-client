import Cookies from "universal-cookie"

export const setAuthenticationCookie = (tokenExpiry: number, authToken: string) =>{
    const cookie = new Cookies(null, { path: '/'})
    
    cookie.set('homenestAuthenticationToken', authToken, {
        expires: new Date(tokenExpiry * 1000)
    })
}

export const getAuthenticationToken = ():string =>{
    const cookies = new Cookies(null, { path : '/'})
    const token = cookies.get('homenestAuthenticationToken')
    return token
}

export const removeAuthenticationToken = () =>{
    const cookies = new Cookies(null, { path : '/'})
    cookies.remove('homenestAuthenticationToken')
}