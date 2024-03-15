import Alert from '@mui/material/Alert'
import { Status } from '../../../types'
import  CircularProgress  from '@mui/material/CircularProgress'

const StatusAlert = ({ 
    status, 
    errorMsg 
}: { status: Status, errorMsg: string }
) => {
    return (
        <div>
            {
                status === 'loading' ?
                    <CircularProgress />
                :status === 'invalid-input' ?
                    <Alert variant='filled' severity='error'>
                        { errorMsg }
                    </Alert>
                :status === 'conflict' ?
                    <div className="space-y-4">
                        <Alert variant='filled' severity='warning'>
                            This email has been registered.
                        </Alert>
                    </div>
                :status === 'created' ?
                    <Alert variant='filled' severity='success'>
                        Sucess. Sign Up successfull
                    </Alert>
                :status === 'server-error' ?
                    <Alert variant='filled' severity='error'>
                        Server Error. Try again shortly.
                    </Alert>
                :status === 'not-found' ?
                    <Alert variant='filled' severity='error'>
                        Resource not found.
                    </Alert>
                :''
            }
        </div>
    )
}

export default StatusAlert