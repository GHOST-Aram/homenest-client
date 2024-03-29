import { useContext } from 'react'
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../utils/authContext'
import Avatar from '@mui/material/Avatar'
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
    const context = useContext(AuthContext)

    return (
        <nav className={container}>
            <NavLink to={'/'} className={'nav-link'}>HOME</NavLink>
            <NavLink to={'/listings'} className={'nav-link'}>LISTINGS</NavLink>
            {
                context && context.user ?
                <Link to='/profile' className={profileLink}>
                    <Avatar />
                </Link>
                 :
                <>
                    <div className={"hidden md:flex " + container}>
                        <NavLink to={'/sign-up'} className={'nav-link'}>SIGN UP</NavLink>
                        <NavLink to={'/login'} className={'nav-link'}>LOGIN</NavLink>
                    </div>
                    <div className="md:hidden">
                        <AccountsMenu />
                    </div>
                </>
            }
        </nav>
    )
}

const AccountsMenu = () =>{
    const navigate = useNavigate()
    const location = useLocation()

    const accountsIsActive = /(sign-up|login)/i.test(location.pathname)
    const loginIsActive =  /login/i.test(location.pathname)
    const signUpIsActive =  /sign-up/i.test(location.pathname)

    const goToSignUp = () =>{
        navigate('/sign-up')
    }

    const goToLogin = () =>{
        navigate('/login')
    }

    return(
        <Dropdown>
            <MenuButton className={`menu-btn nav-link ${accountsIsActive ? 'active': ''}`}>
                <span>ACCOUNT</span>
                <IoMdArrowDropdown className='dropdown-icon'/>
            </MenuButton>
            <Menu className='accounts-menu'>
                <MenuItem onClick={goToSignUp} 
                    className={`accounts-menu-item ${signUpIsActive ? 'active': ''}`}
                >
                    SIGN UP
                </MenuItem>
                <hr />
                <MenuItem onClick={goToLogin} 
                    className={`accounts-menu-item ${loginIsActive ? 'active': ''}`}
                >
                    LOG IN
                </MenuItem>
            </Menu>
        </Dropdown>
    )
}



const container = 'flex flex-row gap-4 items-center md:justify-center'
const profileLink = "flex items-center gap-4 p-2 bg-blue-800 rounded-md"

export default Navbar