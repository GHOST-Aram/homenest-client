import SearchBox from '../components/SearchBox';
import SelectBox from '../components/SelectBox';
import Heading from '../components/Heading'
import SubmitButton from '../components/SubmitButton';

const HeroSection = () => {
		return (
		<section className='hero h-[85vh]'>
			<div className=" hero-texts text-center absolute space-y-8 w-full 
				pt-8 h-[85vh] overlay"
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
				<form className="px-8 m-auto items-center w-full gap-4 flex flex-col w-full lg:w-2/5 md:w-3/5"
                >
                    <SelectBox />
                    <SearchBox />
					<SubmitButton>START YOUR SEARCH</SubmitButton>
                </form>
				
			</div>
		</section>
		)
}

export default HeroSection