import { ReactNode } from 'react'
import Button from '@mui/material/Button'

const PrimaryButton = ({ children, onClick }: Props) => {
    return (
        <Button fullWidth size='large' variant='contained' onClick={onClick}>
            { children }
        </Button>
    )
}

interface Props { 
    children: ReactNode, 
    onClick: () =>void
}
export default PrimaryButton