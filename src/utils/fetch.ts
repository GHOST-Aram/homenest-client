import { getAuthenticationToken } from "./cookie"

export const getData = async(url: string) =>{
    const response = await fetch(url)
    return await response.json()
}

export const createUser = async(url: string, userData: any) =>{
    const response = await fetch(url, {
        method: 'POST',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
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