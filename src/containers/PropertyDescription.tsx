import React from 'react'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
const PropertyDescription = () => {
  return (
    <div className='w-full md:w-3/5 lg:w-3/5 xlg:w-3/5'>
        <Heading level={3} className='font-bold text-slate-800 text-xl mt-2 py-2'>About the Property</Heading>
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
    </div>
  )
}

export default PropertyDescription