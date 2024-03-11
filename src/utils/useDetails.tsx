import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getData } from './fetch'
import { PropertyData } from '../types'
import { initialPropertyData } from '../pages/NewProperty'

const usePropertyDetails = () => {
    const [property, setProperty] = useState<PropertyData>(initialPropertyData)
    const { id } = useParams()
    
    useEffect(() =>{
        (async() =>{
            try {
                const response = await getData(`http://localhost:8000/properties/${id}`)
                const statusCode = response.status
                if(statusCode === 200){
                    const data = await response.json()
                    setProperty(data)
                    console.log(data)
                }
            } catch (error) {
                console.log(error)
            }          
        })() 
    }, [id])

    return property
}

export default usePropertyDetails