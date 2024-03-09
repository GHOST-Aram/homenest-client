export type FormProps = { 
    userData: UserData 
    registerUser: Function, 
    status: Status , 
    changeHandler: ChangeEventHandler 
}

export type UserData = {
    fullName: string
    role: string
    email: string
    password: string
    confirmPassword:string
}