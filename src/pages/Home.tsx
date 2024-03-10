import HeroSection from '../containers/HeroSection';
import Benefits from '../containers/Benefits';
import FeaturedListings from '../containers/FeaturedListings';
import TenantReviews from '../containers/TenantReviews';

const Home = () => {
    return (
        <main>
            <HeroSection />
            <Benefits />
            <FeaturedListings />
            <TenantReviews />
        </main>
    )
}

export default Home