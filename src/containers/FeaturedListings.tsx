import React, { useEffect, useState } from 'react'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import FeaturedCard from '../components/FeaturedCard'
import { getData } from '../utils/fetch'

const FeaturedListings = () => {
	const [apartments, setApartments] = useState<[]>([])
	
	useEffect(() =>{
		getData('http://localhost:8000/rentals').then(data =>{
			if(data.resource){
				setApartments(data.resource)
			}
		}).catch(error => console.log(error))

	},[])

	return (
		<Section>
			<SectionHeading>Featured Listings</SectionHeading>
			<div className="flex flex-row gap-4 overflow-x-auto pb-4 horizontal-scroll">
				{
					apartments.length > 0 &&
						apartments.map((apartment:any) =>(
							<FeaturedCard 
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