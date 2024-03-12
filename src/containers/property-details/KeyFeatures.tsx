import { PropertyData } from '../../types'

const KeyFeatures = ({ property }: { property: PropertyData | null }) => {
  return (
    <section className='mt-4 px-8'>
        <div className="bg-slate-800 p-2">
            <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                <div className="flex gap-4">
                    <p> 
                        <span className="text-slate-300 font-bold text-sm">Property Type: </span>
                        <span className="text-slate-300 font-light text-sm">{ property?.propertyType }</span>
                    </p>
                    <p> 
                        <span className="text-slate-300 font-bold text-sm">Bedrooms: </span>
                        <span className="text-slate-300 font-light text-sm">{ property?.bedrooms }</span>
                    </p>
                </div>
                <div className="flex gap-4">
                    <p> 
                        <span className="text-slate-300 font-bold text-sm">Furnished: </span>
                        <span className="text-slate-300 font-light text-sm">{ property?.isFurnished ? 'Yes' : 'No' }</span>
                    </p>
                    <p> 
                        <span className="text-slate-300 font-bold text-sm">Has Parking: </span>
                        <span className="text-slate-300 font-light text-sm">{ property?.hasParkingSpace ? 'Yes' : 'No' }</span>
                    </p>
                </div>

            </div>
            <div className="flex lg:gap-4 flex-col lg:flex-row">
                <p> 
                    {
                        property?.waterSources &&
                        <>
                            <span className="text-slate-300 font-bold text-sm">Water Sources: </span>
                            {
                                property.waterSources.map(source =>(
                                    <span key={source} className="text-slate-300 font-light text-sm"> { source } | </span>
                                ))
                            }
                        </>

                    }
                </p>
                <p> 
                    {
                        property?.energySources &&
                        <>
                            <span className="text-slate-300 font-bold text-sm">Energy Sources: </span>
                            {
                                property.energySources.map(source =>(
                                    <span key={source} className="text-slate-300 font-light text-sm"> { source } | </span>
                                ))
                            }
                        </>
                    }
                </p>
            </div>
        </div>
    </section>
  )
}



export default KeyFeatures