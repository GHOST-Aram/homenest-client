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
        <section 
            className='hero' 
            style={{backgroundImage : `url(${backgroundImageUrl})`}}
        >
            <Box className={overlayContainer}>
                <Heading1> { propertyName } </Heading1>

                <Box className={flexContainer}>
                    <GiMoneyStack className={icon} />
                    <Heading2>
                        Ksh { rentPerMonth } per Month | Ksh { rentPerYear } per year
                    </Heading2>
                </Box>
                <Box className={flexContainer}>
                    <IoBedSharp className={icon} />
                    <Heading2>
                        {bedrooms} bedrooms | { bathrooms } bathrooms
                    </Heading2>
                </Box>
                <Box className={flexContainer}>
                    <FaMap className={icon} />
                    <Heading2>
                        {   squareFootage  } sq ft
                    </Heading2>
                </Box>
                <Box className={flexContainer}>
                    <IoLocationSharp className={icon} />
                    <Heading2>
                        { locationAddress }
                    </Heading2>
                </Box>
            </Box>        
        </section>
    )
}

const icon = 'text-slate-300 text-4xl'
const flexContainer = 'flex flex-row gap-4 justify-center'
const overlayContainer = "w-full bg-slate-400 h-[70vh] py-8 space-y-4 overlay"

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