import Box from '@mui/material/Box'
import { ChangeEventHandler } from 'react'
import TextField from '@mui/material/TextField'
import FileSelector from './FileSelector'


const AboutAndBackgroud = (
	{
		description,
		backgroundImageUrl,
		getTextFieldValue,
		getBackgroundImageFile,
	}: Props
) => {
	
	return (
		<Box className='space-y-4'>
			<TextField 
				name={'description'} 
				type="text" 
				label={'Description'}
				value={description} 
				multiline={true}
				fullWidth
				onChange={getTextFieldValue}
			/>
			<FileSelector onFileChange={getBackgroundImageFile}/>
		</Box>
	)
}


interface Props{
	description: string
	backgroundImageUrl: File | string
	getTextFieldValue: ChangeEventHandler
	getBackgroundImageFile: (file: File) => void
}

export default AboutAndBackgroud