import React from 'react'
import { FaSearch } from 'react-icons/fa'


const SearchButton = () => {
  return (
    <button className='bg-slate-100 px-8 py-4 border-2 border-slate-300 rounded-md
		text-blue-700 hover:text-slate-300 hover:bg-blue-700 hover:transition-all'
        aria-label='Search Button'
    >
        <FaSearch className='text-2xl '/>
    </button>
  )
}

export default SearchButton