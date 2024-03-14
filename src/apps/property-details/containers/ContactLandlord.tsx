import Button from '@mui/material/Button'
import Box from '@mui/material/Box'


const ContactLandlord = () => {
    return (
        <Box>
            <h1 className="text-xl font-bold text-slate-800 mt-2 py-2 ">
                Contact the Landlord
            </h1>
            <Box className='space-y-2 flex flex-col'>
                <Button size='large' variant='contained' onClick={()=>{}}>
                     SEND DIRECT MESSAGE
                </Button>
                <Button size='large' variant='contained' onClick={()=>{}}>
                    SCHEDULE VIEWING
                </Button>
                <Button size='large' variant='contained' onClick={()=>{}}>
                    APPLY ONLINE
                </Button>
            </Box>
        </Box>
    )
}

export default ContactLandlord