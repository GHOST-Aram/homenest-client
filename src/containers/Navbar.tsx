import { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AuthContext } from '../utils/authContext'
import Avatar from '@mui/material/Avatar'

const Navbar = () => {
    const context = useContext(AuthContext)

    return (
        <nav className={container}>
            <NavLink to={'/'} className={navLink}>HOME</NavLink>
            <NavLink to={'/listings'} className={navLink}>LISTINGS</NavLink>
            {
                context && context.user ?
                 <Link to='/profile' className={profileLink}>
                     <h1 className={userName}>{context.user.name}</h1>
                    <Avatar />
                 </Link>
                 :
                <>
                    <NavLink to={'/sign-up'} className={navLink}>SIGN UP</NavLink>
                    <NavLink to={'/login'} className={navLink}>LOGIN</NavLink>
                </>
            }
        </nav>
    )
}

const container = 'hidden flex-row gap-4 items-center md:justify-center '+
    'md:flex lg:flex xl:flex'
const navLink = 'p-4 text-slate-300 font-bold'
const profileLink = "flex items-center gap-4 p-2 bg-blue-800 rounded-md"
const userName= "text-slate-300 font-bold"

export default Navbar