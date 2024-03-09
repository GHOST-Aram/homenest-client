import { getAuthenticationToken } from './cookie'
import { decodeAuthToken } from './auth'
import { User } from '../types'

const useAuth = (): User => {
    const token = getAuthenticationToken()
    
    try {
        const userDetails:any = decodeAuthToken(token)

        return {
            name: userDetails.name,
            email: userDetails.email,
            role: userDetails.role
        }
    } catch (error) {
        return {name: '', email:'', role: 'tenant'}
    }
}


export default useAuth