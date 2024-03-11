import HeroSection from '../containers/HeroSection';
import FeaturedListings from '../containers/FeaturedListings';
import TenantReviews from '../containers/TenantReviews';

const Home = () => {
    return (
        <main>
            <HeroSection />
            <FeaturedListings />
            <TenantReviews />
        </main>
    )
}

export default Home