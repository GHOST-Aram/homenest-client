import { PropertyData } from "../types"
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom"
import { deleteDocument } from "../utils/fetch"

const PropertyListItem = ({ property }: { property: PropertyData}) => {
    const navigate = useNavigate()

    const goToDetailsPage = () => {
        const id = property._id?.toString()
        if(id){
            navigate(
                `/listings/${id}`
            )
        }
    }

    const deleteProperty = () =>{
        const id = property._id?.toString()
        if(id){
            try {
                (async()=>{
                    const response = await deleteDocument(`http://localhost:8000/properties/${id}`)
                    if(response.status === 200)
                        console.log(await response.json())
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
                <h2 className="text-gray-500 font-bold text-sm">{property.locationName}</h2>
            </div>
            <div className="flex flex-row w-full justify-between gap-4 p-4">
                <Button 
                    onClick={goToDetailsPage}
                    fullWidth variant="contained" color="primary"
                >
                    View
                </Button>
                <Button fullWidth variant="contained" color="success">
                    Update
                </Button>
                <Button 
                    onClick={deleteProperty}
                    fullWidth variant="contained" color="error"
                >
                    Delete
                </Button>
            </div>
        </div>
    )
}
export default PropertyListItem