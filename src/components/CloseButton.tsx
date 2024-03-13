import IconButton from '@mui/material/IconButton'
import { RxCross2 } from "react-icons/rx";

const CloseButton = ({onClick}:{onClick: ()=> void}) => {
    return (
        <IconButton color='error' size='large'
            onClick={onClick}
            sx={{
                position:'absolute',
                top: '-10px',
                right: '-10px'
            }}
        >
            <RxCross2 className='text-4xl'/>
        </IconButton>
    )
}

export default CloseButton