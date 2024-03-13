import { ListingProps } from '../types'
import FeaturedListings from '../containers/listings/FeaturedListings'
import { useSearchParams } from 'react-router-dom'


const Listings = ({ processStatus, properties}: ListingProps) => {

	const [searchParams, setSearchParams] = useSearchParams()
	
    return (
		<FeaturedListings properties={properties} processStatus={processStatus}/>
    )
}


export default Listings