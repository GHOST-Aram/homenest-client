import { useState, useEffect } from 'react'
import { getData } from '../utils/fetch'
import Section from '../components/Section'
import FeaturedCard from '../components/FeaturedCard'
import Heading from '../components/Heading'

const Listings = () => {
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
		<>
        <Section>
			<div className="py-4 listings-grid">
				{
					properties.length > 0 ?
						properties.map((property:any) =>(
							<FeaturedCard 
								id={property._id.toString()}
								rentPm={property.price} 
								location={property.location} 
								bedrooms={property.bedrooms} 
								imageSrc={property.imageUrl}
								key={property._id.toString()}
							/>
						))
					: <Heading level={1}className='text-center font-light'>No propertys to list</Heading>
				}
			</div>
		</Section>
		</>
    )
}

export default Listings