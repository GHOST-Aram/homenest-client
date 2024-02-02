import React from 'react'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import FeaturedCard from '../components/FeaturedCard'
import apartment1 from '../images/apartment1.avif'
import apartment2 from '../images/apartment2.avif'
import apartment3 from '../images/apartment3.avif'
import apartment4 from '../images/apartment4.avif'
import apartment5 from '../images/apartment5.avif'
import apartment6 from '../images/apartment6.avif'
import apartment7 from '../images/apartment7.avif'

const FeaturedListings = () => {
  return (
    <Section>
        <SectionHeading>Featured Listings</SectionHeading>
        <div className="flex flex-row gap-4 overflow-x-auto">
          	<FeaturedCard 
				rentPm='13.7k' 
				location='Mombasa' 
				bedrooms='2 bedrooms' 
				imageSrc={apartment1}
            />
          	<FeaturedCard 
				rentPm='13.7k' 
				location='Mombasa' 
				bedrooms='2 bedrooms' 
				imageSrc={apartment2}
            />
          	<FeaturedCard 
				rentPm='13.7k' 
				location='Mombasa' 
				bedrooms='2 bedrooms' 
				imageSrc={apartment3}
            />
          	<FeaturedCard 
				rentPm='13.7k' 
				location='Mombasa' 
				bedrooms='2 bedrooms' 
				imageSrc={apartment4}
            />
          	<FeaturedCard 
				rentPm='13.7k' 
				location='Mombasa' 
				bedrooms='2 bedrooms' 
				imageSrc={apartment5}
            />
          	<FeaturedCard 
				rentPm='13.7k' 
				location='Mombasa' 
				bedrooms='2 bedrooms' 
				imageSrc={apartment6}
            />
          	<FeaturedCard 
				rentPm='13.7k' 
				location='Mombasa' 
				bedrooms='2 bedrooms' 
				imageSrc={apartment7}
            />
        </div>
    </Section>
    
  )
}

export default FeaturedListings