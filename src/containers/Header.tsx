import React from 'react'
import Logo from '../components/Logo'
import logo from '../images/homenest-logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <header className='flex flex-row justify-between items-center p-4'>
            <GiHamburgerMenu className='text-3xl text-blue-700' />
            <Logo src={logo}/>
            <FaSearch className='text-3xl text-blue-700'/>
        </header>
    )
}

export default Header