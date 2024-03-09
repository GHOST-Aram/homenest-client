import Cookies from "universal-cookie"

export const setAuthenticationCookie = (tokenExpiry: number, authToken: string) =>{
    const cookie = new Cookies(null, { path: '/'})
    
    cookie.set('homenestAuthenticationToken', authToken, {
        expires: new Date(tokenExpiry * 1000)
    })
}