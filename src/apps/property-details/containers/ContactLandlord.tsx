import { MdMail, MdCall, MdWhatsapp } from 'react-icons/md'
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
                <a 
                    className="flex flex-row items-center gap-4 px-4 py-2 rounded-md bg-blue-300"
                    href='mailto:email@gmail.com'
                >
                    <MdMail className='text-orange-600 text-lg'/>
                    <p className="text-slate-800 font-light">Email monalisa@gmail.com</p>
                </a>
                <a 
                    className="flex flex-row items-center gap-4 px-4 py-2 rounded-md bg-blue-300"
                    href='https://wa.me/+254798899809'
                >
                    <MdWhatsapp className='text-green-600 text-lg'/>
                    <p className="text-slate-800 font-light">WhatsApp +25479666998</p>
                </a>
                <a 
                    className="flex flex-row items-center gap-4 px-4 py-2 rounded-md bg-blue-300"
                    href='tel:+254798899809'
                >
                    <MdCall className='text-slate-800 text-lg'/>
                    <p className="text-slate-800 font-light">Call +254796699956</p>
                </a>
            </Box>
            { isMessagingOpen && <Messenger close = { closeMessaging }/> }
        </Box>
    )
}

const btnsContainer = 'space-y-2 flex flex-col'
const heading = 'text-xl font-bold text-slate-800 mt-2 py-2' 

export default ContactLandlord