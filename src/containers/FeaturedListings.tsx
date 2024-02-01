import React from 'react'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import FeaturedCard from '../components/FeaturedCard'

const FeaturedListings = () => {
  return (
    <Section>
        <SectionHeading>Featured Listings</SectionHeading>
        <div className="flex flex-row gap-4 overflow-x-auto">
          	<FeaturedCard rentPm='13.7k' location='Mombasa' bedrooms='2 bedrooms' />
          	<FeaturedCard rentPm='13.7k' location='Mombasa' bedrooms='2 bedrooms' />
          	<FeaturedCard rentPm='13.7k' location='Mombasa' bedrooms='2 bedrooms' />
          	<FeaturedCard rentPm='13.7k' location='Mombasa' bedrooms='2 bedrooms' />
          	<FeaturedCard rentPm='13.7k' location='Mombasa' bedrooms='2 bedrooms' />
          	<FeaturedCard rentPm='13.7k' location='Mombasa' bedrooms='2 bedrooms' />
          	<FeaturedCard rentPm='13.7k' location='Mombasa' bedrooms='2 bedrooms' />
        </div>
    </Section>
    
  )
}

export default FeaturedListings