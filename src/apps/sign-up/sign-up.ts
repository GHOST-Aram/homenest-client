import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { sendPostRequest } from '../../utils/fetch'
import { updateProcessStatus } from '../../utils/process-status'
import { validateUserData } from '../../utils/validator'
import { ValidationError } from 'yup'
import { Status, UserData } from '../../types'
import { NavigateFunction } from 'react-router-dom'

export class UserSignUp{
    private userData:UserData
    private setUserData: Dispatch<SetStateAction<UserData>>
    private setStatus: Dispatch<SetStateAction<Status>>
    private setErrorMsg: Dispatch<SetStateAction<string>>
    private navigate: NavigateFunction

    constructor(
        {
            userData,
            setUserData,
            setStatus,
            setErrorMsg,
            navigate,
        } :{
            userData:UserData,
            setUserData: Dispatch<SetStateAction<UserData>>,
            setStatus: Dispatch<SetStateAction<Status>>,
            setErrorMsg: Dispatch<SetStateAction<string>>,
            navigate: NavigateFunction,
        }
    ){
        this.userData = userData
        this.setUserData = setUserData
        this.setStatus = setStatus
        this.setErrorMsg = setErrorMsg
        this.navigate = navigate
    }

    public collectUserInput = (e: ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = e.target
        this.setUserData({...this.userData, [name]: value })
    }

    public submitUserData = () =>{
        
        (async() =>{
            this.setStatus('loading')

            try {
                await validateUserData(this.userData)

                const{ statusCode, body } = await this.createUser()

                this.processResponse( { statusCode, body })
                
            } catch (error) {
                if(error instanceof ValidationError){
                    this.setStatus('invalid-input')
                    this.setErrorMsg(error.message)
                } else{
                    this.setStatus('error')            
                }
            }
        })()
    }

    private createUser = async() =>{
        const response = await sendPostRequest('http://localhost:8000/users', 
        {data: this.userData})

        const statusCode = response.status
        const body = await response.json()

        return {statusCode, body }
    }

    private processResponse = ({ statusCode, body }: {statusCode: number, body: any }) =>{
        updateProcessStatus(this.setStatus, statusCode)

        if(statusCode === 400){
            this.setErrorMsg(body.errors[0].msg)
        } else if(statusCode === 201){
            this.gotToLoginPage()
        }
    }

    private gotToLoginPage = () =>{
        this.navigate('/login')
    }
}