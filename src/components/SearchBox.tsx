import React from 'react'

const SearchBox = () => {
    return (
        <input type="text" 
            className="text-md font-md border-2 border-slate-300 rounded-md p-4 w-full
            bg-slate-100" 
            placeholder='Search ...'
            aria-label='Search input'
        />
    )
}

export default SearchBox