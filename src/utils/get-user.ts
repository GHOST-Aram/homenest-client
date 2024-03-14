import { getAuthenticationToken } from './cookie'
import { decodeAuthToken } from './auth'
import { User } from '../types'

const getUser = (): User => {
    const token = getAuthenticationToken()
    
    try {
        const userDetails:any = decodeAuthToken(token)

        return {
            name: userDetails.name,
            email: userDetails.email,
            role: userDetails.role,
            id: userDetails.sub
        }
    } catch (error) {
        return {name: '', email:'', role: 'tenant', id:''}
    }
}


export default getUser