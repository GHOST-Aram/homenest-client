import React from 'react'
import { FaSearch } from 'react-icons/fa'


const SearchButton = () => {
  return (
    <button className='bg-primary px-8 py-4 border-2 border-slate-300 rounded-md
		hover:bg-blue-400 hover:transition-all'
        aria-label='Search Button'
    >
        <FaSearch className='text-3xl text-slate-300'/>
    </button>
  )
}

export default SearchButton