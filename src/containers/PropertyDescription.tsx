import { useContext } from 'react'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Button from '@mui/material/Button'
import { AuthContext } from '../utils/authContext'


const PropertyDescription = ({ description }: {description: string | undefined }) => {
	const authContext = useContext(AuthContext)

	return (
		<div className='w-full md:w-3/5 lg:w-3/5 xlg:w-3/5'>

			<Heading level={3} className='font-bold text-slate-800 text-xl mt-2 py-2'>About the Property</Heading>
			{
				description ?
					<Paragraph> { description } </Paragraph>
				: authContext && authContext.user && authContext.user.role === 'landlord' ?	 
					<Button 
						variant='contained'
						color='primary'
						size='large'
					>
						Add Description
					</Button>
				: <p className="text-slate-800 font-light">No description</p>
			}
			
		</div>
	)
}

export default PropertyDescription