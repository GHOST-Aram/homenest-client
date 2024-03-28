import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { ChangeEvent, useState } from 'react'
import CloseButton from '../../components/CloseButton'


const Messenger = ({ close }:{close: () => void }) => {
    const [message, setMessage] = useState<Message>({
        sender: '',
        recepient: '',
        content: ''
    })

    const getMessage = (e: ChangeEvent<HTMLInputElement>)=>{
        setMessage({...message, content: e.target.value})
    }

    const sendMessage = () =>{
        console.log(message)
    }
    return (
        <Box className="messenger-overlay">
            <Paper className='messenger' elevation={16}>
                <CloseButton onClick={close}/>
                <h3 className="light-title">Send Message</h3>
                <TextField 
                    multiline
                    fullWidth
                    name='message'
                    label='Message'
                    onChange={getMessage}
                    value={message.content}
                    placeholder='Types Message'
                />
                <Button 
                    size='large'
                    variant='contained'
                    color='primary'
                    onClick={sendMessage}
                >Send</Button>
            </Paper>
        </Box>
    )
}
interface Message{
    sender: string
    recepient: string
    content: string
}
export default Messenger
