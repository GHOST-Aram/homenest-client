import React from 'react'
import Heading from '../components/Heading'

const Map = () => {
    return (
        <section className='px-8 mb-8'>
            <Heading level={1} className="text-xl font-bold text-slate-800 mb-4">
                Map View
            </Heading>
            <div className="text-center">
                <iframe
                    title='Map of Monalisa'
                    width="600"
                    height="490"
                    style={{border:0, margin: 'auto'}}
                    loading="lazy"
                    allowfullscreen
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed/v1/place?key=
                        &q=Space+Needle,Seattle+WA">
                </iframe>
            </div>
        </section>
    )
}

export default Map