import React, { useEffect, useState } from 'react'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import FeaturedCard from '../components/FeaturedCard'
import { getData } from '../utils/fetch'

const FeaturedListings = () => {
	const [properties, setProperties] = useState<[]>([])
	
		useEffect(() =>{

			(async() =>{
				const response = await getData('http://localhost:8000/properties?page=1&&limit=12')
				
				if(response.status === 200){
					const data = await response.json()
					setProperties(data)
				}
	
			})()
	
		},[])


	return (
		<Section>
			<SectionHeading>Featured Listings</SectionHeading>
			<div className="gap-4 pb-4 grid-auto">
				{
					properties.length > 0 &&
						properties.map((apartment:any) =>(
							<FeaturedCard 
								id={apartment._id.toString()}
								key={apartment._id.toString()}
								rentPm={apartment.rentPerMonth} 
								location={apartment.locationName} 
								bedrooms={apartment.bedrooms} 
								imageSrc={apartment.imageUrl}
							/>
						))
				}
			</div>
		</Section>
		
	)
}

export default FeaturedListings