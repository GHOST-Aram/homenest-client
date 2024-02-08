import React from 'react'
import Heading from '../components/Heading'
import { GiMoneyStack } from "react-icons/gi";
import { IoBedSharp } from "react-icons/io5";
import { FaMap } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaArrowAltCircleDown } from "react-icons/fa";

const DetailsHero = () => {
  return (
    <section className='hero'>
        <div className="w-full bg-slate-400 h-[70vh] py-8 space-y-4 overlay">
            <Heading level={1} className='font-bold text-slate-300 text-4xl text-center'>
                MonaLisa Apartments
            </Heading>
            <div className="flex flex-row gap-4 justify-center">
                <GiMoneyStack className='text-slate-300 text-4xl' />
                <Heading level={2} className='font-md text-slate-300 text-3xl text-center'>
                    30k per Month | 300k per year
                </Heading>
            </div>
            <div className="flex flex-row gap-4 justify-center">
                <IoBedSharp className='text-slate-300 text-4xl' />
                <Heading level={2} className='font-md text-slate-300 text-3xl text-center'>
                    4 bedrooms | 3 bathrooms
                </Heading>
            </div>
            <div className="flex flex-row gap-4 justify-center">
                <FaMap className='text-slate-300 text-4xl' />
                <Heading level={2} className='font-md text-slate-300 text-3xl text-center'>
                    1000 sq ft
                </Heading>
            </div>
            <div className="flex flex-row gap-4 justify-center">
                <IoLocationSharp className='text-slate-300 text-4xl' />
                <Heading level={2} className='font-md text-slate-300 text-3xl text-center'>
                    Parklands Nairobi, near Naivas Food Market.
                </Heading>
            </div>
        </div>        
    </section>
  )
}

export default DetailsHero