import MenuItem from "@mui/material/MenuItem"
import TextField from '@mui/material/TextField'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Button from '@mui/material/Button'
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import { FaSearch } from "react-icons/fa";
import { ChangeEvent, ReactNode, useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchBar = () => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useState<SearchParams>({
        searchOption: '', keyword: ''})

    const getSelectedValue = (e: SelectChangeEvent<string>, child: ReactNode) =>{
        setSearchParams({...searchParams, searchOption: e.target.value})
    }

    const getTextFieldValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchParams({ ...searchParams, keyword: e.target.value })
    }

    const search = () =>{
        navigate(`/listings?${searchParams.searchOption}=${searchParams.keyword}`)
    }


    return (
        <form 
            onSubmit={(e)=>{
                e.preventDefault()
                search()
            }}
            className="flex flex-col md:flex-row items-center gap-4 bg-white p-4  
            w-4/5 m-auto lg:w-3/5 lg:m-auto rounded-md"
        >
            <FormControl className="w-full md:w-2/5">
                <InputLabel id='search-option-label'>
                    Search Options
                </InputLabel>
                <Select 
                    labelId='search-option-label'
                    name="searchOption" 
                    value={searchParams.searchOption}
                    defaultValue={menuList[0].value} 
                    onChange={getSelectedValue}
                >
                    {
                        menuList.map(menuItem =>(
                            <MenuItem key={menuItem.value} value={menuItem.value}>
                                { menuItem.name }
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <TextField 
                fullWidth
                variant='outlined'
                label='Enter Keyword'
                value={searchParams.keyword}
                type='text'
                onChange={getTextFieldValue}
                name='keyword'
            />
            <Button 
                size='large'
                variant='contained' 
                type='submit' 
            >
                <FaSearch className="text-4xl"/>
            </Button>
    </form>
  )
}

const menuList = [
    {
        name: 'City or Town',
        value: 'cityOrTown'
    },
    {
        name: 'Property Name',
        value: 'propertyName'
    }, 
    {
        name: 'Estate',
        value: 'estate'
    },
]

interface SearchParams{
    searchOption: string,
    keyword: string,
}

export default SearchBar