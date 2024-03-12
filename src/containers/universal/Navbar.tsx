import { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AuthContext } from '../../utils/authContext'
import Avatar from '@mui/material/Avatar'

const Navbar = () => {
    const context = useContext(AuthContext)

    return (
        <nav className='hidden flex-row gap-4 items-center md:justify-center 
            md:flex lg:flex xl:flex'
        >
            <NavLink to={'/'} className={'p-4 text-slate-300 font-bold'}>
                HOME
            </NavLink>
            <NavLink to={'/listings'} className={'p-4 text-slate-300 font-bold'}>
                LISTINGS
            </NavLink>
            {
                context && context.user ?
                 <Link to='/profile' className="flex items-center gap-4 p-2 bg-blue-800 rounded-md">
                     <h1 className="text-slate-300 font-bold">{context.user.name}</h1>
                    <Avatar />
                 </Link>
                 :
                <>
                    <NavLink to={'/sign-up'} className={'p-4 text-slate-300 font-bold'}>
                        SIGN UP
                    </NavLink>
                    <NavLink to={'/login'} className={'p-4 text-slate-300 font-bold'}>
                        LOGIN
                    </NavLink>
                </>
            }
        </nav>
    )
}
     
export default Navbar