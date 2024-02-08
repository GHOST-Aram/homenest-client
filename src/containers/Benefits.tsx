import React, { ReactComponentElement, useState} from 'react'
import BenefitCard from '../components/BenefitCard'
import { FaSearch, FaStarHalfAlt } from 'react-icons/fa'
import { PiMapPinFill } from "react-icons/pi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { VscChecklist } from "react-icons/vsc";
import SectionHeading from '../components/SectionHeading'
import Section from '../components/Section';
import uniqid from 'uniqid'


const Benefits = () => {
    const [benefits, setBenefits] = useState<Benefit[]>(benefitsArr)
    return (
        <Section>
            <SectionHeading>The Fun Part of Using Homenest.</SectionHeading>
            <div className="grid-auto pb-4">
                {
                    benefits.length > 0 && benefits.map(benefit =>(
                        <BenefitCard 
                            title={benefit.title} 
                            textContent={benefit.textContent}
                            icon={benefit.icon}
                        />

                    ))
                }
               
            </div>
        </Section>
    )
}

const benefitsArr: Benefit[] = [
    {
        id: uniqid(),
        title: 'Powerful Search',  
        textContent: 'Filter thousands of listings by location, price, amenities, and more.',
        icon: <FaSearch className='font-extrabold text-5xl m-auto text-slate-900'/>,
    },
    {
        id: uniqid(),
        title: 'Stress Free Browsing'  ,
        textContent: ' Explore neighborhoods virtually with our interactive map.',
        icon: <PiMapPinFill className='font-extrabold text-5xl m-auto text-slate-900'/>,
    },
    {
        id: uniqid(),
        title: 'Informed Decisions'  ,
        textContent: 'Read tenant reviews and ratings before you apply.',
        icon: <FaStarHalfAlt className='font-extrabold text-5xl m-auto text-slate-900'/>,
    },{
        id: uniqid(),
        title: 'Seamless Communication'  ,
        textContent: ' Connect directly with landlords through our secure platform.',
        icon: <IoChatbubblesOutline className='font-extrabold text-5xl m-auto text-slate-900'/>,
    },
    {
        id: uniqid(),
        title: 'Effortless Apllications'  ,
        textContent: 'Submit your application and upload documents online.',
        icon: <VscChecklist className='font-extrabold text-5xl m-auto text-slate-900'/>,
    }
]

interface Benefit{
    id: string,
    title: string,
    textContent: string,
    icon: ReactComponentElement<any>,
}

export default Benefits