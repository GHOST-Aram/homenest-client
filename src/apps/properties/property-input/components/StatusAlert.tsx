import Box from "@mui/material/Box"
import { Status } from "../../../../types"
import Alert from "@mui/material/Alert"
import CircularProgress from "@mui/material/CircularProgress"



const StatusAlert = ({ processStatus }: {processStatus: Status}) => {
  return (
    <Box>
        {   
            processStatus === 'loading' ? 
                <CircularProgress className='text-center'/>
            :processStatus === 'unauthorised' ? 
                <Alert variant='filled' severity='error'>
                    UnAuthorised.
                </Alert>
            :processStatus === 'invalid-input' ?
                <Alert variant='filled' severity='warning'>
                    Invalid details
                </Alert>
            :processStatus === 'error' ?
                <Alert variant='filled' severity='error'>
                    Error occured. Please try again
                </Alert>
            :''
        }
    </Box>
    
  )
}

export default StatusAlert