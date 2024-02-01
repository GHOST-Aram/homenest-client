import React from 'react'

const Image = ({ src, alt, className }: ImageProps) => {
    return (
        <img src={src} alt={alt} className={className} />
    )
}

interface ImageProps{
    src: string
    alt: string
    className: string
}
export default Image