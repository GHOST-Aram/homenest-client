import React, { ReactNode } from 'react'
import Button from '@mui/material/Button'

const ActionButton = (
    { children , onClick }: {children: ReactNode, onClick: ()=>void}
) => {
    return (
        <Button 
            size='large' 
            variant='contained' 
            onClick={onClick}
        > {children}</Button>
    )
}

export default ActionButton