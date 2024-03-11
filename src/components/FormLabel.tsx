import { ReactNode } from "react"

const FormLabel = ({children}: {children: ReactNode}) => {
    return (
        <h1 id='form-label' className="text-blue-700 font-bold text-lg text-center">{children}</h1>
    )
}

export default FormLabel