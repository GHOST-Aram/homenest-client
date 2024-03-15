import Box from "@mui/material/Box"
import { Status } from "../../../../types"
import Alert from "@mui/material/Alert"
import CircularProgress from "@mui/material/CircularProgress"



const StatusAlert = (
    { 
        processStatus, 
        errorMsg 
    }: {processStatus: Status, errorMsg: string }
) => {
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
                    <Alert variant='filled' severity='error'>
                        {errorMsg}
                    </Alert>
                :processStatus === 'error' ?
                    <Alert variant='filled' severity='error'>
                        Error occured. Please try again
                    </Alert>
                :processStatus === 'server-error' ?
                    <Alert variant='filled' severity='error'>
                        Server Error. Please try again.
                    </Alert>
                :''
            }
        </Box>
    )
}

export default StatusAlert