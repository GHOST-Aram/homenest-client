import { cookie } from "./cookie"

export const getData = async(url: string) =>{
    const response = await fetch(url)
    return response
}

export const patchDocument = async(url:string, data: any) =>{
    const authToken = cookie.getAuthenticationToken('homenestAuthenticationToken')

    const response = await fetch(url, {
        method: 'PATCH',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ authToken }`
        },
        body: JSON.stringify(data)
    })

    return response
}

export const deleteDocument = async(url:string ) =>{
    const authToken = cookie.getAuthenticationToken('homenestAuthenticationToken')

    const response = await fetch(url, {
        method: 'DELETE',
        redirect: 'follow',
        headers: {
            'Authorization': `Bearer ${ authToken }`
        },
    })

    return response
}


export const sendPostRequest = async(
    url: string, 
    {
        data, 
        authToken
    }:{data: any, authToken?: string}
) => {
    
    const response = await fetch(url, {
        method: 'POST',
        redirect: 'follow',
        headers: {
            'Authorization' : `Bearer ${authToken}`
        },
        body: data
    })

    return response
}

export const sendPutRequest = async(
    url: string, 
    {
        data, 
        authToken
    }:{data: any, authToken: string}
) => {
    const response = await fetch(url, {
        method: 'PUT',
        redirect: 'follow',
        headers: {
            'Authorization' : `Bearer ${authToken}`
        },
        body: data
    })

    return response
}
