import Heading from '../../components/Heading'
import Paragraph from '../../components/Paragraph'

const PropertyDescription = ({ description }: {description: string | undefined }) => {

	return (
		<div className='w-full md:w-3/5 lg:w-3/5 xlg:w-3/5'>

			<Heading level={3} className='font-bold text-slate-800 text-xl mt-2 py-2'>
				About the Property
			</Heading>
			<Paragraph> { description } </Paragraph>
		</div>
	)
}

export default PropertyDescription