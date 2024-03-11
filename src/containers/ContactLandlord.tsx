import Heading from '../components/Heading'
import Button from '@mui/material/Button'

const ContactLandlord = () => {
    return (
        <div>
            <Heading level={1} className="text-xl font-bold text-slate-800 mt-2 py-2">
                Contact the Landlord
            </Heading>
            <Button variant='contained' className='w-full'> SEND DIRECT MESSAGE</Button>
        </div>
    )
}

export default ContactLandlord