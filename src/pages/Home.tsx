import HeroSection from '../containers/HeroSection';
import FeaturedListings from '../containers/FeaturedListings';
import { useEffect, useState } from 'react';
import { getData } from '../utils/fetch';
import { Status } from '../types';
import SectionHeading from '../components/SectionHeading';

const Home = () => {
    const [properties, setProperties] = useState<[]>([])
	const [processStatus, setProcessStatus] = useState<Status>('idle')

    useEffect(() =>{
	
		(async() =>{
            try {
                setProcessStatus('loading')
                const response = await getData('http://localhost:8000/properties?page=1&&limit=12')
    
                if(response.status === 200){
                    setProcessStatus('success')
                    const data = await response.json()
                    setProperties(data)
                }
            } catch (error) {
                console.log(error)
            }
		})()

	},[])
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