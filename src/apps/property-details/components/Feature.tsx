import React from 'react'

const Feature = ({name, value}: {name: string, value: string}) => {
    return (
        <p> 
        <span className="text-slate-300 font-bold text-sm">
            { name }: {' '}
        </span>
        <span className="text-slate-300 font-light text-sm">
            { value}
        </span>
    </p>
  )
}

export default Feature