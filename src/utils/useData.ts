import { useState, useEffect } from 'react'
import { Status } from '../types'
import { useSearchParams } from 'react-router-dom'
import { getData } from './fetch'
import { createImageUrl } from './useDetails'

const API_BASE_URL = process.env.REACT_APP_API_URL

const usePropertyData = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const query = searchParams.toString()
	
    const [properties, setProperties] = useState<[]>([])
	const [processStatus, setProcessStatus] = useState<Status>('idle')
	
	useEffect(() =>{
		(async() =>{
			try {

				const response = await getData(
					`${API_BASE_URL}/properties?page=1&&limit=50&&${query}`)
	
				if(response.status === 200){
					setProcessStatus('success')
					let propertiesData = await response.json()

					//Create URLs for background Image data.
					propertiesData = propertiesData.map((data: any) =>(
						{
							...data,
							backgroundImageUrl: data.backgroundImage ? 
								createImageUrl(data.backgroundImage) : data.backgroundImageUrl 
						}
					))
					setProperties(propertiesData)
				}
			} catch (error) {
				setProcessStatus('error')
				console.log(error)
			}
		})()

	},[query])

  return {processStatus, properties }
}

export default usePropertyData