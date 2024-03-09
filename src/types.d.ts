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

export type Status = 'idle'|'loading'|'created'|'error'|'conflict'|'server-error'|'invalid-input'
