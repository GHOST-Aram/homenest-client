import { useState, ReactNode, ChangeEvent } from "react"
import Form from "./containers/Form"
import { useNavigate } from "react-router-dom"
import { SelectChangeEvent } from "@mui/material"



const AdvancedSearch = ({closeAdvancedSearch}:{closeAdvancedSearch: ()=> void}) => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useState<SearchParams>(
        initialSearchParams)

    const getSelectedValue = (e: SelectChangeEvent<string>, child: ReactNode) =>{
        const {name, value} = e.target
        setSearchParams({...searchParams,[name]:value })
    }

    const getTextFieldValue = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setSearchParams({...searchParams,[name]:value })
    }

    const getCheckboxValue = (e: ChangeEvent<HTMLInputElement>) =>{
        const {name, checked} = e.target
        setSearchParams({...searchParams,[name]:checked })
    }


    const search = () =>{
        const searchQuery = buildSearchQuery(searchParams)
        navigate(`/listings?${searchQuery}`)
    }
    return (
    <Form 
        propertyType={searchParams.propertyType}
        propertyName={searchParams.propertyName}
        rentMin={searchParams.rentMin}
        rentMax={searchParams.rentMax}
        cityOrTown={searchParams.cityOrTown}
        estate={searchParams.estate}
        bedrooms={searchParams.bedrooms}
        hasParkingSpace={searchParams.hasParkingSpace}
        isFurnished={searchParams.isFurnished}
        isAvailable={searchParams.isAvailable}
        locationName={searchParams.locationName}
        onSubmit= {search}
        getCheckboxValue={getCheckboxValue}
        getTextFieldValue={getTextFieldValue}
        getSelectedValue={getSelectedValue}  
        closeForm={closeAdvancedSearch}
    />
  )
}

interface SearchParams{
    propertyType: string
    propertyName: string
    rentMin: number
    rentMax: number
    cityOrTown: string
    estate: string
    bedrooms: number
    hasParkingSpace: boolean
    isFurnished: boolean
    isAvailable: boolean
    locationName: string
}
const buildSearchQuery = (searchParams: SearchParams):string =>{
    const {
        propertyType,
        propertyName,
        rentMin,
        rentMax,
        cityOrTown,
        estate,
        bedrooms,
        hasParkingSpace,
        isFurnished,
        isAvailable,
        locationName,
    } = searchParams

    let searchQuery = propertyType ? `propertyType=${propertyType}`:''
        searchQuery +=  propertyName ? `&&propertyName=${propertyName}`: ''
        searchQuery += rentMin ? `&&rentMin=${rentMin}`:''
        searchQuery += rentMax ? `&&rentMax=${rentMax}`:''
        searchQuery += cityOrTown ? `&&cityOrTown=${cityOrTown}`:''
        searchQuery += estate ? `&&estate=${estate}`:''
        searchQuery += bedrooms ? `&&bedrooms=${bedrooms}`:''
        searchQuery += hasParkingSpace ? `&&hasParkingSpace=${hasParkingSpace}`:''
        searchQuery += isFurnished ? `&&isFurnished=${isFurnished}`:''
        searchQuery += isAvailable ? `&&isAvailable=${isAvailable}`:''
        searchQuery += locationName ? `&&locationName=${locationName}`:''

    return searchQuery
}

const initialSearchParams = {
    propertyType: '',
    propertyName: '',
    rentMin: 0,
    rentMax: 0,
    cityOrTown: '',
    estate: '',
    bedrooms: 0,
    hasParkingSpace: false,
    isFurnished: false,
    isAvailable: true,
    locationName: ''
}

export default AdvancedSearch