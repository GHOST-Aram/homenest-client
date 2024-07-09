import React, { useRef, ChangeEvent } from 'react';
import { Button } from '@mui/material';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

interface FileSelectorProps {
  onFileChange: (file: File) => void;
  previewBackgroundImage: (file: File) => void
}

const FileSelector: React.FC<FileSelectorProps> = ({ onFileChange, previewBackgroundImage }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileChange(file);
      previewBackgroundImage(file)
    }
  };

	return (
		<div>
		<input
			type="file"
			ref={fileInputRef}
			style={{ display: 'none' }}
			onChange={handleFileChange}
		/>
		<Button 
			variant="outlined" 
			color="primary" 
            size='large'
			onClick={handleButtonClick}
		>
			<ImageOutlinedIcon /> Select Image
		</Button>
		</div>
	);
};

export default FileSelector;
