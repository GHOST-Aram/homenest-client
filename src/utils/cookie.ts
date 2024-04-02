import Cookies from "universal-cookie"

class Cookie{

   public setAuthenticationCookie = (tokenExpiry: number, authToken: string) =>{
        const cookie = new Cookies(null, { path: '/'})
        
        cookie.set('homenestAuthenticationToken', authToken, {
            expires: new Date(tokenExpiry * 1000)
        })
    }
    
   public getAuthenticationToken = (tokenName: string):string =>{
        const cookies = new Cookies(null, { path : '/'})
        const token = cookies.get(tokenName)
        return token
    }
    
   public removeAuthenticationToken = (tokenName: string) =>{
        const cookies = new Cookies(null, { path : '/'})
        cookies.remove(tokenName)
    }
}


export const cookie = new Cookie()