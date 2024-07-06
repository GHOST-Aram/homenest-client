import Box from '@mui/material/Box'
import { ChangeEventHandler } from 'react'
import TextField from '@mui/material/TextField'
import FileSelector from './FileSelector'


const AboutAndBackgroud = (
	{
		description,
		backgroundPreviewUrl,
		getTextFieldValue,
		getBackgroundImageFile,
		previewBackgroundImage
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
			{ 
				backgroundPreviewUrl && 
				<img src={backgroundPreviewUrl as string } alt="background" />
			}
			<FileSelector 
				onFileChange={getBackgroundImageFile} 
				previewBackgroundImage={previewBackgroundImage}
			/>
		</Box>
	)
}


interface Props{
	description: string
	backgroundPreviewUrl: File | string
	getTextFieldValue: ChangeEventHandler
	getBackgroundImageFile: (file: File) => void
	previewBackgroundImage: (file: File) => void
}

export default AboutAndBackgroud