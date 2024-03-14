import Box from '@mui/material/Box'
import { ChangeEventHandler } from 'react'
import TextField from '@mui/material/TextField'


const AboutAndBackgroud = (
	{
		description,
		backgroundImageUrl,
		getTextFieldValue,
	}: Props
) => {

	return (
		<Box className='space-y-4'>
			<TextField 
				name="description" 
				type="text" 
				label="Description"
				value={description} 
				multiline
				fullWidth
				onChange={getTextFieldValue}
			/>
				<TextField 
				name="backgroundImageUrl" 
				type="text" 
				label="Background Image URL"
				fullWidth
				value={backgroundImageUrl} 
				onChange={getTextFieldValue}
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