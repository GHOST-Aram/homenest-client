import React from 'react'
import Heading from '../components/Heading'
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import ButtonFilled from '../components/ButtonFilled';

const ContactLandlord = () => {
    return (
        <div>
            <Heading level={1} className="text-xl font-bold text-slate-800 mt-2 py-2">
                Contact the Landlord
            </Heading>
            <div className='mb-4'>
                <a href="mailto:monalisa-narobi@gmail.com">
                    <div className="flex flex-row gap-4 items-center">
                        <MdEmail className="text-slate-800 font-bold text-xl"/> 
                        <span>monalisa-nairobi@gmail.com</span>
                    </div>
                </a>
                <a href="mailto:monalisa-narobi@gmail.com">
                    <div className="flex flex-row gap-4 items-center">
                        <FaWhatsappSquare className="text-slate-800 font-bold text-xl"/> 
                        <span>Send WhatsApp Message</span>
                    </div>
                </a>
            </div>
            <ButtonFilled className='w-full'> SEND DIRECT MESSAGE</ButtonFilled>
        </div>
    )
}

export default ContactLandlord