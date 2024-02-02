import React from 'react'
import Logo from '../components/Logo'
import logo from '../images/homenest-logo.png'
import SearchButton from '../components/SearchButton';
import MenuButton from '../components/MenuButton';

const Header = () => {
    return (
        <header className='flex flex-row justify-between items-start p-4 bg-slate-400'>
            <MenuButton />
            <Logo src={logo}/>
            <SearchButton/>
        </header>
    )
}

export default Header