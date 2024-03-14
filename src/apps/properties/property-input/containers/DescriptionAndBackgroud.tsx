import Box from '@mui/material/Box'
import { ChangeEventHandler } from 'react'
import MultilineTextField from '../../../../components/MultiLineTextField'
import MUITextField from '../../../../components/MUITextField'


const AboutAndBackgroud = ({
	description,
	backgroundImageUrl,
	getTextFieldValue,
}: Props) => {
	return (
		<Box className='space-y-4'>
			<MultilineTextField 
				name="description" 
				type="text" 
				label="Description"
				value={description} 
				changeHandler={getTextFieldValue}
			/>
				<MUITextField 
				name="backgroundImageUrl" 
				type="text" 
				label="Background Image URL"
				value={backgroundImageUrl} 
				changeHandler={getTextFieldValue}
			/> 
		</Box>
	)
}

interface Props{
	description: string
	backgroundImageUrl: string
	getTextFieldValue: ChangeEventHandler
}

export default AboutAndBackgroud