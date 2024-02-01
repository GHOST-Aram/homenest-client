import React from 'react'
import Card from '../components/Card'
import { FaSearch, FaStarHalfAlt } from 'react-icons/fa'
import { PiMapPinFill } from "react-icons/pi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { VscChecklist } from "react-icons/vsc";
import SectionHeading from '../components/SectionHeading'


const Benefits = () => {
    return (
        <section className='mb-8'>
            <SectionHeading>Why Homenest?</SectionHeading>
            <div className="px-4 flex flex-row gap-4 overflow-x-auto">
                <Card 
                    title='Powerful Search'  
                    textContent='Filter thousands of listings by location, price, amenities, and more.'
                    icon={<FaSearch className='font-extrabold text-5xl m-auto text-slate-300'/>}
                    buttonLabel='Search Listings'
                />
                <Card 
                    title='Stress Free Browsing'  
                    textContent=' Explore neighborhoods virtually with our interactive map.'
                    icon={<PiMapPinFill className='font-extrabold text-5xl m-auto text-slate-300'/>}
                    buttonLabel='Browse Listings'
                />
                <Card 
                    title='Informed Decisions'  
                    textContent='Read tenant reviews and ratings before you apply.'
                    icon={<FaStarHalfAlt className='font-extrabold text-5xl m-auto text-slate-300'/>}
                    buttonLabel='Read Reviews'
                />
                <Card 
                    title='Seamless Communication'  
                    textContent=' Connect directly with landlords through our secure platform.'
                    icon={<IoChatbubblesOutline className='font-extrabold text-5xl m-auto text-slate-300'/>}
                    buttonLabel='See Landlords'
                />
                <Card 
                    title='Effortless Apllications'  
                    textContent='Submit your application and upload documents online.'
                    icon={<VscChecklist className='font-extrabold text-5xl m-auto text-slate-300'/>}
                    buttonLabel='See Properties'
                />
            </div>
        </section>
    )
}

export default Benefits