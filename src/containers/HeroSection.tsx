import React from 'react'
import Heading from '../components/Heading'
import ButtonFilled from '../components/ButtonFilled'

const HeroSection = () => {
		return (
		<section className='hero'>
			<div className="text-center absolute space-y-4 w-full mt-24 lg:mt-32">
				<Heading level={1} className='font-extrabold text-4xl text-primary text-center'>
					Find Your Happy Place Effortlessly.
				</Heading>
				<Heading level={1} className='font-medium text-xl text-light text-center'>
					Homenest takes stress out of finding your perfect rental.
				</Heading>

				<ButtonFilled>Start Your Search</ButtonFilled>
			</div>
		</section>
		)
}

export default HeroSection