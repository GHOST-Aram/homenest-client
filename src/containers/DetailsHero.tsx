import Heading from '../components/Heading'
import { GiMoneyStack } from "react-icons/gi";
import { IoBedSharp } from "react-icons/io5";
import { FaMap } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const DetailsHero = ({
    propertyName,
    rentPerMonth,
    rentPerYear,
    bedrooms,
    bathrooms,
    squareFootage,
    locationAddress
}: Props) => {
  return (
    <section className='hero'>
        <div className="w-full bg-slate-400 h-[70vh] py-8 space-y-4 overlay">
            <Heading level={1} className='font-bold text-slate-300 text-4xl text-center'>
                { propertyName }
            </Heading>
            <div className="flex flex-row gap-4 justify-center">
                <GiMoneyStack className='text-slate-300 text-4xl' />
                <Heading level={2} className='font-md text-slate-300 text-3xl text-center'>
                    Ksh { rentPerMonth } per Month | Ksh { rentPerYear } per year
                </Heading>
            </div>
            <div className="flex flex-row gap-4 justify-center">
                <IoBedSharp className='text-slate-300 text-4xl' />
                <Heading level={2} className='font-md text-slate-300 text-3xl text-center'>
                    {bedrooms} bedrooms | { bathrooms } bathrooms
                </Heading>
            </div>
            <div className="flex flex-row gap-4 justify-center">
                <FaMap className='text-slate-300 text-4xl' />
                <Heading level={2} className='font-md text-slate-300 text-3xl text-center'>
                    {   squareFootage  } sq ft
                </Heading>
            </div>
            <div className="flex flex-row gap-4 justify-center">
                <IoLocationSharp className='text-slate-300 text-4xl' />
                <Heading level={2} className='font-md text-slate-300 text-3xl text-center'>
                    { locationAddress }
                </Heading>
            </div>
        </div>        
    </section>
  )
}

interface Props{
    propertyName: string
    rentPerMonth: string | number
    rentPerYear: string | number
    bedrooms: string | number
    bathrooms: string | number
    squareFootage: string | number
    locationAddress: string
}

export default DetailsHero