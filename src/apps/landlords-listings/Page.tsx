import { useEffect, useState } from 'react'
import PropertyListItem from './components/PropertyListItem'
import { PropertyData, ListStatus } from '../../types'
import { useParams } from 'react-router-dom'
import { Divider } from '@mui/material'
import { getData } from '../../utils/fetch'

const LandLordsProperties = () => {
    const {id} = useParams() 
    const [properties, setProperties] = useState<PropertyData[]>([])
    const [listStatus, setListStatus] = useState<ListStatus>('unchanged')

    useEffect(() => {
        (async() =>{
            try {
                const response = await getData(
                    `http://localhost:8000/properties/landlords/${id}`)

                console.log(response.status)
                if(response.status === 200){
                    const data = await response.json()
                    setProperties(data)
                }
            } catch (error) {
                console.log(error)
            }
        })()
    },[id, listStatus])
    
    return (
        <div className='spce-y-4 w-full mx-8 lg:w-3/5 lg:m-auto'>
            <h1 className="text-blue-700 text-lg font-bold text-center py-8">Landlords Properties</h1>
            <div className="bg-white mb-8">
                {
                    properties.map((property) =>(
                        
                       property._id && id &&  
                       <div key={property._id.toString()} >
                            <PropertyListItem 
                                property={property} 
                                setListStatus={setListStatus}
                            />
                            <Divider />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}



export default LandLordsProperties