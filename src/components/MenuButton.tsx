import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const MenuButton = () => {
    return (
        <button className='bg-primary px-8 py-4 border-2 border-slate-300 rounded-md
            hover:bg-blue-400 hover:transition-all md:hidden lg:hidden xlg:hidden'
            aria-label='Search Button'
        >
            <GiHamburgerMenu className='text-3xl text-slate-300'/>
        </button>
    )
}

export default MenuButton