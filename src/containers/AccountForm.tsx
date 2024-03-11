import { ReactNode } from 'react'
import FormLabel from '../components/FormLabel'

const AccountsForm = ({ children, submitHandler, heading }: Props) => {

	const submitForm = (preventDefault:()=>void) => {
		preventDefault()
		try {
			(async() =>{
				await submitHandler()
			})()
		} catch (error) {
			
		}
	}

	return (
		<form 
			onSubmit={(e) => {submitForm(e.preventDefault)}}
			aria-labelledby='form-label' 
			className='p-8 flex flex-col space-y-4' 
		>
			<FormLabel> { heading }</FormLabel>
			{ children }
		</form>
	)
}

type Props = {
    children: ReactNode
	heading: string
    submitHandler: ()=>Promise<void>
}
export default AccountsForm