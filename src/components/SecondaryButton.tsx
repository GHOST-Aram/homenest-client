import Button from '@mui/material/Button'
import { MouseEventHandler } from 'react'

const SecondaryButton = ({ handleClick, label }: Props) => {
    return (
        <Button 
            variant='outlined' 
            color='primary' 
            size='large' 
            className='w-full'
            onClick={handleClick}
        >
            {label}
        </Button>
    )
}

type Props = { handleClick: MouseEventHandler, label: string}

export default SecondaryButton