import { ListingProps } from '../../../types'
import FeaturedListings from './containers/FeaturedListings'


const Listings = ({ processStatus, properties}: ListingProps) => {
	
    return (
		<FeaturedListings properties={properties} processStatus={processStatus}/>
    )
}


export default Listings