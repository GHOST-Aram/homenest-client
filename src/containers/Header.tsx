import React from 'react'
import Logo from '../components/Logo'
import logo from '../images/homenest-logo-bw.png'
import SearchButton from '../components/SearchButton';
import MenuButton from '../components/MenuButton';
import SearchBox from '../components/SearchBox';
import SelectBox from '../components/SelectBox';
import HorizontalDivider from './HorizontalDivider';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className=' px-4 pt-4 bg-blue-700 space-y-4'
        >
            <div className='flex flex-row justify-between items-start gap-4'>
                <MenuButton />
                <Logo src={logo}/>
                <div className="items-center gap-4 w-full hidden md:flex lg:flex 
                    xl:flex"
                >
                    <SelectBox />
                    <SearchBox />
                </div>
                <SearchButton/>
            </div>
            <HorizontalDivider />
            <Navbar />
        </header>
    )
}

export default Header