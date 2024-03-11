import React, { useEffect, useState } from 'react'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import FeaturedCard from '../components/FeaturedCard'
import { getData } from '../utils/fetch'

const FeaturedListings = () => {
	const [properties, setProperties] = useState<[]>([])
	
		useEffect(() =>{

			(async() =>{
				const response = await getData('http://localhost:8000/properties')
	
				if(response.status === 200){
					const data = await response.json()
					setProperties(data)
				}
	
			})()
	
		},[])


	return (
		<Section>
			<SectionHeading>Featured Listings</SectionHeading>
			<div className="flex flex-row gap-4 overflow-x-auto pb-4 horizontal-scroll">
				{
					properties.length > 0 &&
						properties.map((apartment:any) =>(
							<FeaturedCard 
								id={apartment._id.toString()}
								key={apartment._id.toString()}
								rentPm={apartment.price} 
								location={apartment.location} 
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