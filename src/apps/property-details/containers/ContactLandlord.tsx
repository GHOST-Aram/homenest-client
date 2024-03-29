import { MdMail, MdCall, MdWhatsapp } from 'react-icons/md'
import Box from '@mui/material/Box'


const ContactLandlord = () => {

    return (
        <Box>
            <h1 className={heading}>
                Contact the Landlord
            </h1>
            <Box className={btnsContainer}>
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
                    <p className="text-slate-800 font-light">WhatsApp +254796669XXX8</p>
                </a>
                <a 
                    className="flex flex-row items-center gap-4 px-4 py-2 rounded-md bg-blue-300"
                    href='tel:+254798899809'
                >
                    <MdCall className='text-slate-800 text-lg'/>
                    <p className="text-slate-800 font-light">Call +25479XXX956</p>
                </a>
            </Box>
        </Box>
    )
}

const btnsContainer = 'space-y-2 flex flex-col'
const heading = 'text-xl font-bold text-slate-800 mt-2 py-2' 

export default ContactLandlord