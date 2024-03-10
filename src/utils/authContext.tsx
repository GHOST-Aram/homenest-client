import { ReactNode, createContext, useEffect, useState } from "react"
import getUser from './get-user'
import { User } from '../types'


export const AuthContext = createContext<any>(null)

export const AuthProvider = ({children }: {children: ReactNode}) =>{
    
    const [user, setUser] = useState<User | null>(null)

    useEffect(() =>{
        const user = getUser()
        if(user.name){
            setUser(user)
        }
    },[])

    return(
        <AuthContext.Provider value = { {user, setUser} }>
            { children }
        </AuthContext.Provider>
    )
}