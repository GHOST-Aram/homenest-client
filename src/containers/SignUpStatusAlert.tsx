import Alert from '@mui/material/Alert'
import { Status } from '../types'
import  CircularProgress  from '@mui/material/CircularProgress'
import GoToLoginBtn from '../components/GoToLoginBtn'

const StatusAlert = ({ status }: { status: Status }) => {
    return (
        <div>
            {
                status === 'conflict' ?
                <div className="space-y-4">
                    <Alert variant='filled' severity='warning'>
                        Email has already been taken
                    </Alert>
                    <GoToLoginBtn />
                </div>
                : status === 'created' ?
                <div className='space-y-4'>
                    <Alert variant='filled' severity='success'>
                        Sign Up successfull
                    </Alert>
                    <GoToLoginBtn />
                </div>
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

export default StatusAlert