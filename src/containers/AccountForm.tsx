import { ReactNode } from 'react'

const AccountsForm = ({ children, submitHandler }: Props) => {
  return (
    <form aria-labelledby='form-label' className='p-8 flex flex-col space-y-4' 
    onSubmit={async(e) => {
        e.preventDefault()
        await submitHandler()
    }}>
    <h1 id='form-label' className="text-blue-700 font-bold text-lg text-center">
        Welcome to Homenest
    </h1>
        { children }
    </form>
  )
}

type Props = {
    children: ReactNode
    submitHandler: ()=>Promise<void>
}
export default AccountsForm