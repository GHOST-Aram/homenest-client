import { useState, useEffect } from 'react'
import { Status } from '../types'
import { getData } from './fetch'

const usePropertyData = () => {
    const [properties, setProperties] = useState<[]>([])
	const [processStatus, setProcessStatus] = useState<Status>('idle')
	
	useEffect(() =>{
	
		(async() =>{
			setProcessStatus('loading')
			const response = await getData('http://localhost:8000/properties?page=1&&limit=12')

			if(response.status === 200){
				setProcessStatus('success')
				const data = await response.json()
				setProperties(data)
			}
		})()

	},[])

  return {processStatus, properties }
}

export default usePropertyData