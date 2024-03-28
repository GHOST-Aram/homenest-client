import { useState } from 'react'
import ActionButton from '../components/ActionButton'
import Box from '@mui/material/Box'
import Messenger from '../../messenger/Messenger'


const ContactLandlord = () => {
    const [isMessagingOpen, setIsMessagingOpen] = useState<boolean>(false)

    const openMessaging = () =>{
        setIsMessagingOpen(true)
    }

    const closeMessaging = () =>{
        setIsMessagingOpen(false)
    }
    return (
        <Box>
            <h1 className={heading}>
                Contact the Landlord
            </h1>
            <Box className={btnsContainer}>
                <ActionButton onClick={openMessaging}>Send Direct Message</ActionButton>
                <ActionButton onClick={()=>{}}>Schedule Viewing</ActionButton>
                <ActionButton onClick={()=>{}}>Apply Online</ActionButton>
            </Box>
            { isMessagingOpen && <Messenger close = { closeMessaging }/> }
        </Box>
    )
}

const btnsContainer = 'space-y-2 flex flex-col'
const heading = 'text-xl font-bold text-slate-800 mt-2 py-2' 

export default ContactLandlord