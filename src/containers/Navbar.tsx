import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
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
            <NavLink to={'/how-it-works'} className={'p-4 text-slate-300 font-bold'}>
                HOW IT WORKS
            </NavLink>
            <NavLink to={'/about-us'} className={'p-4 text-slate-300 font-bold'}>
                ABOUT US
            </NavLink>
            <NavLink to={'/contact-us'} className={'p-4 text-slate-300 font-bold'}>
                CONTACT US
            </NavLink>
        </nav>
    )
}
     
export default Navbar