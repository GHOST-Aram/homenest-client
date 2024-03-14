import Button from '@mui/material/Button'
import { useNavigate } from 'react-router'
import { OverridableStringUnion } from '@mui/types'

const NavButton = ({ location, label, color }: Props) => {
    const navigate = useNavigate()

    return (
        <Button 
            onClick = {() => navigate(location)} 
            color={color ? color : 'primary'} 
            size='large'
            variant='contained'
        >
                { label }
        </Button>
    )
}

type Props =  { 
    location: string, 
    label:string, 
    color?: OverridableStringUnion<'primary' | 'success' | 'error'> 
}
export default NavButton