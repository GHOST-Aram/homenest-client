import React, { useEffect, useState } from 'react'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import PropertyCard from '../components/PropertyCard'
import { getData } from '../utils/fetch'
import { Status } from '../types'
import ListingSkeletons from './ListingSkeletons'

const FeaturedListings = () => {
	const [properties, setProperties] = useState<[]>([])
	const [processStatus, setProcessStatus] = useState<Status>('idle')
	
	useEffect(() =>{
	
		setProcessStatus('loading')
		try {
			(async() =>{
				const response = await getData('http://localhost:8000/properties?page=1&&limit=12')
	
				if(response.status === 200){
					setProcessStatus('success')
					const data = await response.json()
					setProperties(data)
				}
			})()
		} catch (error) {
			console.log(error)
		}

	},[])

    return (
		<>
        <Section>
			<SectionHeading>Featured Properties</SectionHeading>
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