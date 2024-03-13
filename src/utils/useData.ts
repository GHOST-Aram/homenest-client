import { useState, useEffect } from 'react'
import { Status } from '../types'
import { getData } from './fetch'
import { useSearchParams } from 'react-router-dom'


const usePropertyData = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const query = searchParams.toString()
	
    const [properties, setProperties] = useState<[]>([])
	const [processStatus, setProcessStatus] = useState<Status>('idle')
	
	useEffect(() =>{
		try {
			(async() =>{
				setProcessStatus('loading')
				const response = await getData(
					`http://localhost:8000/properties?page=1&&limit=12&&${query}`)
	
				if(response.status === 200){
					setProcessStatus('success')
					const data = await response.json()
					setProperties(data)
				}
			})()
		} catch (error) {
			setProcessStatus('error')
			console.log(error)
		}

	},[query])

  return {processStatus, properties }
}

export default usePropertyData