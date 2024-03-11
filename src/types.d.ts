export type FormProps = { 
    userData: UserData 
    registerUser: Function, 
    status: Status , 
    changeHandler: ChangeEventHandler 
}

export interface UserData{
    fullName: string
    role: string
    email: string
    password: string
    confirmPassword:string
}

export type Status = 'idle'|'loading'|'created'|'error'|'conflict'|'server-error'
    |'invalid-input' | 'authenticated' | 'unauthorised' | 'success'

export type LoginProps = {
    password: string
    email:string
}

export interface User{
    name: string,
    email: string,
    role: string,
    id: string
}

export interface PropertyData{
    propertyName: string
    propertyType: string
    description?: string
    backgroundImageUrl: string
    rentPerMonth: number
    rentPerYear: number
    locationName: string
    bedrooms: number
    bathrooms: number
    landlord: string
    squareFootage: number
    isAvailable: boolean
    isFurnished: boolean
    hasParkingSpace: boolean
    energySources: string[]
    waterSources: string[]
}


