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
	const fields =[
		{
			label: 'Description', 
			name: 'description', 
			multiline: true, 
			value: description
		},
		{
			label: 'Background Image Url', 
			name: 'backgroundImageUrl', 
			multiline: false, 
			value: backgroundImageUrl
		}
	]
	return (
		<Box className='space-y-4'>
			{
				fields.map(field =>(
					<TextField 
						key={field.label}
						name={field.name} 
						type="text" 
						label={field.label}
						value={field.value} 
						multiline={field.multiline}
						fullWidth
						onChange={getTextFieldValue}
					/>
				))
			}
		</Box>
	)
}

interface Props{
	description: string
	backgroundImageUrl: string
	getTextFieldValue: ChangeEventHandler
}

export default AboutAndBackgroud