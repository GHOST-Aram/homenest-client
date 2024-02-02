import React from 'react'

const FooterHeading = ( { children }:FooterHeadingProps ) => {
    return (
        <h3 className='text-slate-600 md:hidden lg:hidden'>{children}</h3>
    )
}

interface FooterHeadingProps{
    children: string
}
export default FooterHeading