import Heading from '../components/Heading'
import Button from '@mui/material/Button'

const ContactLandlord = () => {
    return (
        <div>
            <Heading level={1} className="text-xl font-bold text-slate-800 mt-2 py-2 ">
                Contact the Landlord
            </Heading>
            <div className='space-y-2 flex flex-col'>
                <Button size='large' variant='contained'> SEND DIRECT MESSAGE</Button>
                <Button size='large' variant='contained'>SCHEDULE VIEWING</Button>
                <Button size='large' variant='contained'>APPLY ONLINE</Button>
            </div>
        </div>
    )
}

export default ContactLandlord