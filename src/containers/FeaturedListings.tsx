import Section from '../components/Section'
import PropertyCard from '../components/PropertyCard'
import ListingSkeletons from './ListingSkeletons'
import { PropertyData, Status } from '../types'
import { ListingProps } from '../types'

const FeaturedListings = ({ properties, processStatus} : ListingProps) => {

    return (
		<>
        <Section>
			<div className="py-4 listings-grid">
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
						: <h1 className='text-center font-light'>No propertys to list</h1>
					
					:''	
					
				}
			</div>
		</Section>
		</>
	)
}



export default FeaturedListings