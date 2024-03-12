import { ListingProps } from '../types'
import FeaturedListings from '../containers/listings/FeaturedListings'


const Listings = ({ processStatus, properties}: ListingProps) => {
    return (
		<FeaturedListings properties={properties} processStatus={processStatus}/>
    )
}


export default Listings