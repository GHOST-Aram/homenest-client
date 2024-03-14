import { ListStatus, PropertyData, Status } from "../../../types"
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom"
import { deleteDocument } from "../../../utils/fetch"
import { Dispatch, SetStateAction, useState } from "react"
import { updateProcessStatus } from "../../../utils/process-status"
import { CircularProgress } from "@mui/material"
import { MdLocationPin } from "react-icons/md";


const PropertyListItem = ({ property, setListStatus }: Props) => {
    const [processStatus, setProcessStatus] = useState<Status>('idle')

    const navigate = useNavigate()

    const goToDetailsPage = () => {
        const id = property._id?.toString()
        if(id){
            navigate(`/listings/${id}`)
        }
    }

    const gotoUpdatePage = () =>{
        const id = property._id?.toString()

        if(id){
            navigate(`/listings/${id}/update`)
        }
    }

    const reloadList = () =>{
        setListStatus('changed')
    }

    const deleteProperty = () =>{
        const id = property._id?.toString()
        if(id){
            setProcessStatus('loading')
            
            try {
                (async()=>{
                    const response = await deleteDocument(`http://localhost:8000/properties/${id}`)
                    const statusCode = response.status

                    updateProcessStatus(setProcessStatus, statusCode)

                    if(statusCode === 200)
                        reloadList()
                })()
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div className="w-full flex flex-col items-center justify-between 
            md:flex-row">
            <div className=" p-4 rounded-md w-full mb-2">
                <h2 className="text-slate-800 font-bold text-md">{property.propertyName}</h2>
                <h2 className="text-gray-500 font-bold text-md">{property.propertyType}</h2>
                <h2 className="text-orange-700 text-sm flex items-center">
                    <MdLocationPin />
                    <span> {property.locationName}</span>
                </h2>
            </div>
            {
                processStatus==='loading' && <CircularProgress sx={{textAlign: "center"}}/>
            }
            <div className="flex flex-row w-full justify-between gap-4 p-4">
                <Button 
                    onClick={goToDetailsPage}
                    fullWidth variant="contained" color="primary"
                >
                    View
                </Button>
                <Button
                    onClick={gotoUpdatePage} 
                    fullWidth variant="contained" color="success"
                >
                    Update
                </Button>
                <Button 
                    onClick={deleteProperty}
                    fullWidth variant="contained" color="error"
                    disabled={processStatus === 'loading'}
                >
                    {processStatus ==='loading' ? 'Deleting' : 'Delete'}
                </Button>
            </div>
        </div>
    )
}


interface Props{ 
    property: PropertyData, 
    setListStatus: Dispatch<SetStateAction<ListStatus>>
}
export default PropertyListItem