import ActionButton from '../components/ActionButton'
import Box from '@mui/material/Box'
import Heading1 from '../components/Heading1'


const ContactLandlord = () => {
    return (
        <Box>
            <Heading1>Contact the Landlord</Heading1>
            <Box className={btnsContainer}>
                <ActionButton onClick={()=>{}}>Send Direct Message</ActionButton>
                <ActionButton onClick={()=>{}}>Schedule Viewing</ActionButton>
                <ActionButton onClick={()=>{}}>Apply Online</ActionButton>
            </Box>
        </Box>
    )
}

const btnsContainer = 'space-y-2 flex flex-col'

export default ContactLandlord