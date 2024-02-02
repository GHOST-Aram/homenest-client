import React from 'react'
import BenefitCard from '../components/BenefitCard'
import { FaSearch, FaStarHalfAlt } from 'react-icons/fa'
import { PiMapPinFill } from "react-icons/pi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { VscChecklist } from "react-icons/vsc";
import SectionHeading from '../components/SectionHeading'
import Section from '../components/Section';


const Benefits = () => {
    return (
        <Section>
            <SectionHeading>The Fun Part of Using Homenest.</SectionHeading>
            <div className="flex flex-row gap-4 overflow-x-scroll pb-4 horizontal-scroll">
                <BenefitCard 
                    title='Powerful Search'  
                    textContent='Filter thousands of listings by location, price, amenities, and more.'
                    icon={<FaSearch className='font-extrabold text-5xl m-auto text-slate-900'/>}
                    buttonLabel='SEARCH LISTINGS'
                />
                <BenefitCard 
                    title='Stress Free Browsing'  
                    textContent=' Explore neighborhoods virtually with our interactive map.'
                    icon={<PiMapPinFill className='font-extrabold text-5xl m-auto text-slate-900'/>}
                    buttonLabel='OPEN MAP'
                />
                <BenefitCard 
                    title='Informed Decisions'  
                    textContent='Read tenant reviews and ratings before you apply.'
                    icon={<FaStarHalfAlt className='font-extrabold text-5xl m-auto text-slate-900'/>}
                    buttonLabel='READ REVIEWS'
                />
                <BenefitCard 
                    title='Seamless Communication'  
                    textContent=' Connect directly with landlords through our secure platform.'
                    icon={<IoChatbubblesOutline className='font-extrabold text-5xl m-auto text-slate-900'/>}
                    buttonLabel='SEE LANDLORDS'
                />
                <BenefitCard 
                    title='Effortless Apllications'  
                    textContent='Submit your application and upload documents online.'
                    icon={<VscChecklist className='font-extrabold text-5xl m-auto text-slate-900'/>}
                    buttonLabel='SEE AVAILABE PROPERTIES'
                />
            </div>
        </Section>
    )
}

export default Benefits