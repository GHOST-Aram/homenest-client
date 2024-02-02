import React from 'react'
import Logo from '../components/Logo'
import logo from '../images/homenest-logo.png'
import SearchButton from '../components/SearchButton';
import MenuButton from '../components/MenuButton';
import SearchBox from '../components/SearchBox';

const Header = () => {
    return (
        <header className='flex flex-row justify-between items-start p-4 bg-slate-400
            gap-4'
        >
            <MenuButton />
            <Logo src={logo}/>
            <SearchBox />
            <SearchButton/>
        </header>
    )
}

export default Header