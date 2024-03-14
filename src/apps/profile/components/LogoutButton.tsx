import Button from '@mui/material/Button'
import { useNavigate } from 'react-router'
import { removeAuthenticationToken } from '../../../utils/cookie'
import { useContext } from 'react'
import { AuthContext } from '../../../utils/authContext'

const LogoutButton = () => {
    const navigate = useNavigate()
	const authContext = useContext(AuthContext)

	return (
		<Button 
			variant='contained' color='error' size='large'
			onClick={() =>{
				authContext.setUser(null)
				removeAuthenticationToken()
				navigate('/')
			}}
		>Logout</Button>
	)
}

export default LogoutButton