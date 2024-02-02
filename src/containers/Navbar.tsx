import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex-row gap-4 items-center hidden md:flex lg:flex xl:flex'>
            <NavLink to={'/'} className={'p-4 text-slate-300'}>
                HOME
            </NavLink>
            <NavLink to={'/listings'} className={'p-4 text-slate-300'}>
                LISTINGS
            </NavLink>
            <NavLink to={'/how-it-works'} className={'p-4 text-slate-300'}>
                HOW IT WORKS
            </NavLink>
            <NavLink to={'/about-us'} className={'p-4 text-slate-300'}>
                ABOUT US
            </NavLink>
            <NavLink to={'/contact-us'} className={'p-4 text-slate-300'}>
                CONTACT US
            </NavLink>
        </nav>
    )
}
     
export default Navbar