import React from 'react'
import Heading from '../components/Heading'
import List from '../components/List'
import { features } from '../data/keyfeatures'

const KeyFeatures = () => {
  return (
    <section className='px-8 mb-8'>
        <Heading level={1} className="text-xl font-bold text-slate-800 mb-4">
            Key Features
        </Heading>
        <div className="p-4 bg-slate-800">
            <List className='space-y-2'>
                {
                    features.map(feature =>(
                        <li key={feature.id}>
                            <span className='font-bold text-slate-300'>{feature.name}: </span>
                            <span className='font-light text-slate-300'>{ feature.value}</span>
                        </li>
                    ))
                }
            </List>
        </div>
    </section>
  )
}



export default KeyFeatures