import { ValidationError } from "yup"
import { validateLoginDetails } from "../../utils/validator"
import { ChangeEvent, Dispatch, SetStateAction } from "react"
import { updateProcessStatus } from "../../utils/process-status"
import { decodeAuthToken } from '../../utils/auth'
import { cookie } from '../../utils/cookie'
import { LoginDetails } from "./containers/LoginForm"
import { Status, User } from "../../types"
import { NavigateFunction } from "react-router-dom"


export class Login{
    private loginDetails: LoginDetails
    private authToken: string
    private authContext: AuthContext
    private setLoginDetails: Dispatch<SetStateAction<LoginDetails>>
    private setStatus: Dispatch<SetStateAction<Status>>
    private setErrorMsg: Dispatch<SetStateAction<string>>
    private setAuthToken: Dispatch<SetStateAction<string>>
    private navigate: NavigateFunction

    constructor(
        {
            loginDetails,
            authToken,
            authContext,
            setLoginDetails,
            setStatus,
            setErrorMsg,
            setAuthToken,
            navigate,
        }: {
             loginDetails: LoginDetails
             authToken: string
             authContext: AuthContext
             setLoginDetails: Dispatch<SetStateAction<LoginDetails>>
             setStatus: Dispatch<SetStateAction<Status>>
             setErrorMsg: Dispatch<SetStateAction<string>>
             setAuthToken: Dispatch<SetStateAction<string>>
             navigate: NavigateFunction
        }
    ){
        this.loginDetails = loginDetails
        this.authToken =    authToken
        this.authContext = authContext
        this.setLoginDetails = setLoginDetails
        this.setStatus = setStatus
        this.setErrorMsg = setErrorMsg
        this.setAuthToken = setAuthToken
        this.navigate = navigate
    }

    
    public collectLoginDetails = (e: ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = e.target
        this.setLoginDetails({...this.loginDetails, [name]: value })
    }

    public submitLoginDetails = async() =>{
        this.setStatus('loading')

        try {
            await validateLoginDetails(this.loginDetails)

            const {statusCode, body } = await this.getAuthToken()

            this.processResponse({ statusCode, body })
            
        } catch (error) {
            if (error instanceof ValidationError){
                this.setErrorMsg(error.message)
                this.setStatus('invalid-input')
            } else{
                this.setStatus('error')
            }
        }
    }

    private getAuthToken = async() =>{
        const response = await fetch(`${API_BASE_URL}/auth`, 
            {   
                body: JSON.stringify(this.loginDetails), 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        
        const statusCode = response.status
        const body = await response.json()

        return {statusCode, body }
    }

    private processResponse = ({statusCode, body }:{statusCode: number, body: any}) =>{
        if(statusCode === 201){
            const token = body.token

            this.setAuthToken(token)
            this.authenticateUser()

        } else if(statusCode === 400){
            const message = body.errors[0].msg
            this.setErrorMsg(message)
        }

        updateProcessStatus(this.setStatus, statusCode)
    }

    private authenticateUser = () =>{
        if(this.authToken){        
            try{
                const decoded:any = decodeAuthToken(this.authToken)
    
                this.initializeUser(decoded)
                cookie.setAuthenticationCookie(decoded.exp, this.authToken)
                this.goToHomePage()
            } catch(error){
                this.setStatus('error')
            }
        }
    }

    private initializeUser (decodedToken: any) {
        this.authContext.setUser({
            email: decodedToken.email,
            name: decodedToken.name,
            role: decodedToken.role,
            id: decodedToken.id
        })
    }

    private goToHomePage () {
        this.navigate('/')
    }

}

const API_BASE_URL = process.env.REACT_APP_API_URL


export interface AuthContext{ 
    user: User, 
    setUser: Dispatch<SetStateAction<User>> 
}