import Heading from '../../components/Heading'
import SearchBar from './SearchBar';
import Button from '@mui/material/Button'

const HeroSection = () => {
		return (
		<section className='hero h-[60vh] md:h-[40vh]'>
			<div className=" hero-texts text-center absolute space-y-4 w-full 
				pt-4 h-[60vh] md:h-[40vh] overlay"
			>
				<Heading level={2} className='font-md text-2xl text-slate-300 
					text-center'
				>
					Find your next rental house on Homenest. 
				</Heading>	
				<SearchBar />
				<Button 
					variant='contained' 
					size='large'
					sx={{backgroundColor: '#f97316'}}
				>
					Use Advanced Search
				</Button>
			</div>
		</section>
		)
}

export default HeroSection