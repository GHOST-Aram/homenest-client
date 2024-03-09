import { useState, useEffect } from 'react'
import Header from '../containers/Header'
import { getData } from '../utils/fetch'
import Section from '../components/Section'
import FeaturedCard from '../components/FeaturedCard'
import Heading from '../components/Heading'

const Listings = () => {
    const [apartments, setApartments] = useState<[]>([])
	
	useEffect(() =>{
		getData('http://localhost:8000/rentals').then(data =>{
			setApartments(data.resource)
		}).catch(error => console.log(error))

	},[])

    return (
		<>
		<Header />
        <Section>
			<div className="py-4 listings-grid">
				{
					apartments.length > 0 ?
						apartments.map((apartment:any) =>(
							<FeaturedCard 
								id={apartment._id.toString()}
								rentPm={apartment.price} 
								location={apartment.location} 
								bedrooms={apartment.bedrooms} 
								imageSrc={apartment.imageUrl}
								key={apartment._id.toString()}
							/>
						))
					: <Heading level={1}className='text-center font-light'>No Apartments to list</Heading>
				}
			</div>
		</Section>
		</>
    )
}

export default Listings