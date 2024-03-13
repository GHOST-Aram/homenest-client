import MenuItem from "@mui/material/MenuItem"
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {

    return (
        <form className="flex flex-col md:flex-row items-center gap-4 bg-white p-4  
            w-4/5 m-auto lg:w-3/5 lg:m-auto rounded-md"
        >
            <FormControl className="w-full md:w-2/5">
                <InputLabel id='search-option-label'>
                    Search Options
                </InputLabel>
                <Select 
                    labelId='search-option-label'
                    name="searchOption" 
                    value={''}
                    defaultValue={menuList[0].value} 
                    onChange={()=>{}}
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
                value={''}
                type='text'
                onChange={()=>{}}
                name='keyWord'
            />
            <Button 
                size='large'
                variant='contained' 
                type='button' 
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
    {
        name: 'Bedrooms',
        value: 'bedrooms'
    }
]

export default SearchBar