import React, { useEffect, useState } from 'react'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import FeaturedCard from '../components/FeaturedCard'
import Heading from '../components/Heading'
import { getData } from '../utils/fetch'

const FeaturedListings = () => {
	const [apartments, setApartments] = useState<[]>([])
	
	useEffect(() =>{
		getData('http://localhost:8000/rentals').then(data =>{
			setApartments(data.resource)
		}).catch(error => console.log(error))

	},[])

	return (
		<Section>
			<SectionHeading>Featured Listings</SectionHeading>
			<div className="flex flex-row gap-4 overflow-x-auto pb-4 horizontal-scroll">
				{
					apartments.length > 0 ?
						apartments.map((apartment:any) =>(
							<FeaturedCard 
								rentPm={apartment.price} 
								location={apartment.location} 
								bedrooms={apartment.bedrooms} 
								imageSrc={apartment.imageUrl}
								key={apartment.id}
							/>
						))
					: <Heading level={1}className='text-center font-light'>No Apartments to list</Heading>
				}
			</div>
		</Section>
		
	)
}

export default FeaturedListings