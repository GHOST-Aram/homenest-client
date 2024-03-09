import Header from '../containers/Header';
import HeroSection from '../containers/HeroSection';
import Benefits from '../containers/Benefits';
import FeaturedListings from '../containers/FeaturedListings';
import TenantReviews from '../containers/TenantReviews';

const Home = () => {
    return (
        <main>
            <Header />
            <HeroSection />
            <Benefits />
            <FeaturedListings />
            <TenantReviews />
        </main>
    )
}

export default Home