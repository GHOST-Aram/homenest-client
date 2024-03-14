import { useState, useEffect } from 'react'
import { Status } from '../types'
import { useSearchParams } from 'react-router-dom'
import { getData } from './fetch'


const usePropertyData = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const query = searchParams.toString()
	
    const [properties, setProperties] = useState<[]>([])
	const [processStatus, setProcessStatus] = useState<Status>('idle')
	
	useEffect(() =>{
		(async() =>{
			try {
				setProcessStatus('loading')
				const response = await getData(
					`http://localhost:8000/properties?page=1&&limit=12&&${query}`)
	
				if(response.status === 200){
					setProcessStatus('success')
					const data = await response.json()
					setProperties(data)
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