import React from 'react'
import { ReactComponentElement } from 'react'

const List = ({ children, className }: ListProps) => {
  return (
    <ul className={className}> { children } </ul>
  )
}


interface ListProps{
    children: ReactComponentElement<any> |  ReactComponentElement<any>[]  
    className: string
}

export default List