import React from 'react'

const SelectBox = () => {
    return (
        <select name="seacrch-filter" id="filters" 
            aria-label='filter search' 
            className=' p-4 border-2 rounded-md border-slate-300 text-slate-900 '
        >
            <option value="all_listings" selected>All Listings</option>
            <option value="city_name">City Name</option>
            <option value="number_bedrooms">Number of Bedrooms</option>
            <option value="estate">Estate</option>
        </select>
    )
}

export default SelectBox    