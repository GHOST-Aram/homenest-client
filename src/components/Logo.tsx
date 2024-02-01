import React from 'react'

const Logo = ({ src }: { src: string}) => {
    return (
        <img 
            className='w-48'
            src={src} 
            alt="homenest logo"
        />
    )
}
export default Logo