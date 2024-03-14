import { GiMoneyStack } from "react-icons/gi";
import { IoBedSharp } from "react-icons/io5";
import { FaMap } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Box from '@mui/material/Box'
import Heading1 from "../components/Heading1";
import Heading2 from "../components/Heading2";

const DetailsHero = ({
    propertyName,
    rentPerMonth,
    rentPerYear,
    bedrooms,
    bathrooms,
    squareFootage,
    locationAddress,
    backgroundImageUrl
}: Props) => {
  return (
    <section className='hero' style={{backgroundImage : `url(${backgroundImageUrl})`}}>
        <Box className="w-full bg-slate-400 h-[70vh] py-8 space-y-4 overlay">
            <Heading1> { propertyName } </Heading1>
            <Box className="flex flex-row gap-4 justify-center">
                <GiMoneyStack className='text-slate-300 text-4xl' />
                <Heading2>
                    Ksh { rentPerMonth } per Month | Ksh { rentPerYear } per year
                </Heading2>
            </Box>
            <Box className="flex flex-row gap-4 justify-center">
                <IoBedSharp className='text-slate-300 text-4xl' />
                <Heading2>
                    {bedrooms} bedrooms | { bathrooms } bathrooms
                </Heading2>
            </Box>
            <Box className="flex flex-row gap-4 justify-center">
                <FaMap className='text-slate-300 text-4xl' />
                <Heading2>
                    {   squareFootage  } sq ft
                </Heading2>
            </Box>
            <Box className="flex flex-row gap-4 justify-center">
                <IoLocationSharp className='text-slate-300 text-4xl' />
                <Heading2>
                    { locationAddress }
                </Heading2>
            </Box>
        </Box>        
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
    backgroundImageUrl: string
}

export default DetailsHero