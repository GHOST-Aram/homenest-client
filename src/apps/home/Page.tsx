import HeroSection from './containers/HeroSection';
import FeaturedListings from '../properties/listings/containers/FeaturedListings';
import { ListingProps } from '../../types';
import SectionHeading from '../../components/SectionHeading';

const Home = ({ properties, processStatus }: ListingProps) => {
  
    return (
        <main>
            <HeroSection />
            <>
                <SectionHeading>Featured Properties</SectionHeading>
                <FeaturedListings properties={properties} processStatus={processStatus}/>
            </>
        </main>
    )
}

export default Home