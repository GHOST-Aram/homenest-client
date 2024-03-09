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
            <NavLink to={'/details'} className={'p-4 text-slate-300 font-bold'}>
                DETAILS
            </NavLink>
            <NavLink to={'/sign-up'} className={'p-4 text-slate-300 font-bold'}>
                SIGN UP
            </NavLink>
        </nav>
    )
}
     
export default Navbar