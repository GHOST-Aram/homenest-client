import Alert from '@mui/material/Alert'
import  CircularProgress  from '@mui/material/CircularProgress'

const StatusAlert = ({ status }: { status: Status }) => {
    return (
        <div>
            {
                status === 'conflict' ?
                <Alert variant='filled' severity='warning'>
                    Email has already been taken
                </Alert>
                : status === 'created' ?
                <Alert variant='filled' severity='success'>
                    Sign Up successfull
                </Alert>
                :status === 'invalid-input' ?
                <Alert variant='filled' severity='error'>
                    Invalid Input
                </Alert>
                :status === 'loading' ?
                <CircularProgress />
                :''
            }
        </div>
    )
}

export type Status = 'idle'|'loading'|'created'|'error'|'conflict'|'server-error'|'invalid-input'
export default StatusAlert