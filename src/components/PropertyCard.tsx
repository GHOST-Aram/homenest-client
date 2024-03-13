import { MdLocationPin } from "react-icons/md";
import Button from '@mui/material/Button'
import Image from './Image'
import { useNavigate } from 'react-router-dom'
import { IoBedSharp } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa";

const FeaturedCard = ({ id, rentPm, location, bedrooms, imageSrc }: FeaturedCardProps) => {
    const navigate = useNavigate()

    const navigateToDetails = () =>{
        navigate(`/listings/${id}`)
    }
    
    return (
        <div className="min-w-80 rounded-md flex flex-col justify-between bg-white">
            <Image 
                src={imageSrc} 
                alt={`${location} ${bedrooms} bedroom house`}
                className='rounded-t-md'
            />           
            <div className=" px-4 w-full rounded-b-md">
                <p className='space-x-2 flex items-center'> 
                    <FaMoneyBillWave  className="text-slate-600 font-light text-sm"/>
                    <span className='font-light'>Ksh. {rentPm} per month</span> </p>
                <p className='space-x-2 flex items-center'> 
                    <MdLocationPin className="text-slate-600 font-light text-sm"/>
                    <span className='font-light'>{location}</span> </p>
                <p className='space-x-2 flex items-center'> 
                    <IoBedSharp className="text-slate-600 font-light text-sm"/>
                    <span className='font-light'>{bedrooms} Bedrooms</span> </p>
                <div className="text-center py-4">
                    <Button 
                        fullWidth
                        size='large'
                        variant='contained'
                        onClick={navigateToDetails}
                    >VIEW DETAILS</Button>
                </div>
            </div>
        </div>
    )
}

interface FeaturedCardProps{
    id: string
    rentPm: string
    location: string
    bedrooms: string
    imageSrc: string
}

export default FeaturedCard