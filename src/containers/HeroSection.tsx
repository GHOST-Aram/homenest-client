import React from 'react'
import Heading from '../components/Heading'
import ButtonFilled from '../components/ButtonFilled'

const HeroSection = () => {
		return (
		<section className='hero h-[70vh]'>
			<div className=" hero-texts text-center absolute space-y-8 w-full pt-24 
				lg:pt-24 h-[70vh] overlay"
			>
				<Heading level={1} className='font-bold text-4xl text-slate-300
					 text-center'
				>
					Find Your Next Rental Apartment from Your Comfort Zone.
				</Heading>
				<Heading level={2} className='font-md text-2xl text-slate-300 
					text-center lg:px-16 mb-24'
				>
					Homenest takes stress out of finding your perfect rental. 
				</Heading>
				
				<ButtonFilled>START YOUR SEARCH</ButtonFilled>
			</div>
		</section>
		)
}

export default HeroSection