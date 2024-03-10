import Box from "@mui/material/Box"
import { Status } from "../types"
import Alert from "@mui/material/Alert"
import CircularProgress from "@mui/material/CircularProgress"



const StatusAlert = ({ status }: {status: Status}) => {
  return (
    <Box>
        {
            status === 'loading' ?
            <div className="flex w-full items-center">
                <CircularProgress  className="m-auto"/>
            </div>
            :status === 'unauthorised' ?
                <Alert severity="warning" variant="filled">Unauthorised </Alert>
            :status === 'invalid-input' ?
                <Alert severity="error" variant="filled">Invalid Input</Alert>
            :status === 'error' ?
                <Alert severity="error" variant="filled">
                    Failed to send request. Please try again.
                </Alert>
            :status === 'server-error' ?
                <Alert severity="error" variant="filled">
                   Server Error. Please try again.
                </Alert>
            : ''
        }
    </Box>
  )
}

export default StatusAlert