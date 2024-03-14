import { getAuthenticationToken } from "./cookie"

export const getData = async(url: string) =>{
    const response = await fetch(url)
    return response
}

export const patchDocument = async(url:string, data: any) =>{
    const authToken = getAuthenticationToken()

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
    const authToken = getAuthenticationToken()

    const response = await fetch(url, {
        method: 'DELETE',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ authToken }`
        },
    })

    return response
}

export const sendPostRequest = async(url: string, data: any) =>{
    const response = await fetch(url, {
        method: 'POST',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })

    return response
}

export const createNewProperty = async(url: string, propertyData: any) => {
    const token = getAuthenticationToken()
    const response = await fetch(url, {
        method: 'POST',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body: JSON.stringify(propertyData)
    })

    return response
}

export const updateProperty = async(url: string, propertyData: any) => {
    const token = getAuthenticationToken()
    const response = await fetch(url, {
        method: 'PUT',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body: JSON.stringify(propertyData)
    })

    return response
}
