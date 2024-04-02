import Button from '@mui/material/Button'
import { useNavigate } from 'react-router'
import { cookie } from '../../../utils/cookie'
import { useContext } from 'react'
import { AuthContext } from '../../../utils/authContext'

const LogoutButton = () => {
    const navigate = useNavigate()
	const authContext = useContext(AuthContext)

	const logout = () =>{
		authContext.setUser(null)
		cookie.removeAuthenticationToken('homenestAuthenticationToken')
		navigate('/', {replace: true })
	}

	return (
		<Button 
			variant='contained' color='error' size='large'
			onClick={logout}
		>Logout</Button>
	)
}

export default LogoutButton