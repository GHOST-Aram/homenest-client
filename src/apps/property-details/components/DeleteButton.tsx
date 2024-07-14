import { IconButton } from "@mui/material"
import { MdDelete } from "react-icons/md"
const DeleteButton = ({deleteImage}:{ deleteImage: () => void }) => {
  return (
    <IconButton 
        onClick={deleteImage}
        color='error'
        size='large' 
        className='delete-btn'
    >
        <MdDelete />
    </IconButton>
  )
}

export default DeleteButton