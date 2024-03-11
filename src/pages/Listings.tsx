import { useState, useEffect } from 'react'
import { getData } from '../utils/fetch'
import Section from '../components/Section'
import PropertyCard from '../components/PropertyCard'
import Heading from '../components/Heading'
import { Status } from '../types'
import ListingSkeletons from '../containers/ListingSkeletons'


const Listings = () => {
    const [properties, setProperties] = useState<[]>([])
	const [processStatus, setProcessStatus] = useState<Status>('idle')
	
	useEffect(() =>{
	
		(async() =>{
			setProcessStatus('loading')
			const response = await getData('http://localhost:8000/properties?page=1&&limit=12')

			if(response.status === 200){
				setProcessStatus('success')
				const data = await response.json()
				setProperties(data)
			}
		})()

	},[])

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
						: <Heading level={1}className='text-center font-light'>No propertys to list</Heading>
					
					:''	
					
				}
			</div>
		</Section>
		</>
    )
}


export default Listings