import Paragraph from '../components/Paragraph'
import Box from '@mui/material/Box'

const PropertyDescription = ({ description }: {description: string }) => {

	return (
		<Box className={container}>
			<h2 className={heading}>About the Property</h2>
			<Paragraph> { description } </Paragraph>
		</Box>
	)
}

const heading = 'font-bold text-slate-800 text-xl mt-2 py-2'
const container = 'w-full md:w-3/5 lg:w-3/5 xlg:w-3/5'

export default PropertyDescription