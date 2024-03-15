import Box from "@mui/material/Box"
import { Status } from "../../../types"
import Alert from "@mui/material/Alert"
import CircularProgress from "@mui/material/CircularProgress"



const StatusAlert = (
    { 
        processStatus, 
        errorMsg 
    }: {processStatus: Status, errorMsg: string}
) => {
  return (
    <Box>
        {   
            processStatus === 'loading' ? 
                <CircularProgress className='text-center'/>
            :processStatus === 'unauthorised' ? 
                <Alert variant='filled' severity='error'>
                    UnAuthorised. Unknown User or Incorrect details.
                </Alert>
            :processStatus === 'invalid-input' ?
                <Alert variant='filled' severity='error'>
                    <span className={error}>{ errorMsg }</span>
                </Alert>
            :processStatus === 'error' ?
                <Alert variant='filled' severity='error'>
                    Error occured. Please try again
                </Alert>
            :processStatus === 'not-found' ?
                <Alert variant='filled' severity='error'>
                    Resource not found.
                </Alert>
            :processStatus === 'authenticated' ?
                <Alert severity='success' variant='filled'>
                    Success. Authentication token acquired.
                </Alert>
            :processStatus === 'server-error' ?
                <Alert severity='error' variant='filled'>
                    Internal Server Error. Try again shortly.
                </Alert>
            :''
        }
    </Box>
    
  )
}

const error = "text-red-500 text-sm"

export default StatusAlert