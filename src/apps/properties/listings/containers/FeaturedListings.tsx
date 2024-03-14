import PropertyCard from '../../../../components/PropertyCard'
import ListingSkeletons from './ListingSkeletons'
import { ListingProps } from '../../../../types'
import Box from '@mui/material/Box'

const FeaturedListings = ({ properties, processStatus} : ListingProps) => {

    return (
        <section className={section}>
			<Box className={listings}>
				{ processStatus === 'loading' && <ListingSkeletons /> }
				{
					processStatus === 'success' ?
						properties.length > 0 ?
							properties.map((property:any) =>(
								<PropertyCard 
									id={property._id.toString()}
									rentPm={property.rentPerMonth} 
									location={property.locationName} 
									bedrooms={property.bedrooms} 
									imageSrc={property.backgroundImageUrl}
									key={property._id.toString()}
								/>
							)) 
						: <h1 className={heading}>No propertys to list</h1>
					
					:''	
					
				}
			</Box>
		</section>
	)
}

const heading = 'text-center font-light'
const listings = "py-4 listings-grid"
const section = "mb-8 pb-8 px-8"


export default FeaturedListings