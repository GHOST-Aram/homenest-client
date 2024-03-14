import { ReactNode } from 'react'
import FormLabel from './FormLabel'

const Form = ({ children, submitHandler, heading }: Props) => {

	const submitForm = () => {
		try {
			(async() =>{
				await submitHandler()
			})()
		} catch (error) {
			
		}
	}

	return (
		<form 
			onSubmit={(e) => {e.preventDefault(); submitForm()}}
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
export default Form