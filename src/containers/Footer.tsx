import React from 'react'
import FooterHeading from '../components/FooterHeading'
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className='bg-slate-900 py-4'>
        <div className='px-8 flex flex-row justify-between gap-4 md:justify-center 
            lg:justify-center'>
            <div>
                <FooterHeading>LINKS</FooterHeading>
                <div className="flex flex-col md:flex-row lg:flex-row lg:gap-4 md:gap-4">
                    <a href="/home" className="text-slate-400 font-md text-md">
                        Home
                    </a>
                    <a href="/about-us" className="text-slate-400 font-md text-md">
                        About us
                    </a>
                    <a href="how-it-works" className="text-slate-400 font-md text-md">
                        How it works
                    </a>
                    <a href="contact-us" className="text-slate-400 font-md text-md">
                        Contact Us
                    </a>
                </div>
            </div>
            <div>
                <FooterHeading>FOLLOW US</FooterHeading>
                <div className="flex flex-col md:flex-row lg:flex-row gap-4">
                    <div className="flex flex-row gap-4">
                        <a href="https://facebook.com" className="text-slate-400">
                            <CiFacebook className='text-slate-400 text-2xl'/>
                        </a>
                        <a href="https://twitter.com" className="text-slate-400">
                            <FaXTwitter className='text-slate-400 text-2xl'/>
                        </a>
                    </div>
                    <div className="flex flex-row gap-4">
                        <a href="https://linkedIn.com">
                            <CiLinkedin className='text-slate-400 text-2xl'/>
                        </a>
                        <a href="https://Instagram.com">
                            <CiInstagram className='text-slate-400 text-2xl'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <p className="text-center font-light text-sm text-slate-400">
            Copiright &copy; {new Date().getFullYear()}
        </p>
    </footer>
  )
}

export default Footer