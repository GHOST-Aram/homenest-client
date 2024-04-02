import Cookies from "universal-cookie"

export const setAuthenticationCookie = (tokenExpiry: number, authToken: string) =>{
    const cookie = new Cookies(null, { path: '/'})
    
    cookie.set('homenestAuthenticationToken', authToken, {
        expires: new Date(tokenExpiry * 1000)
    })
}

export const getAuthenticationToken = (tokenName: string):string =>{
    const cookies = new Cookies(null, { path : '/'})
    const token = cookies.get(tokenName)
    return token
}

export const removeAuthenticationToken = (tokenName: string) =>{
    const cookies = new Cookies(null, { path : '/'})
    cookies.remove(tokenName)
}