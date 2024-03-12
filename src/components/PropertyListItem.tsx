import { Link } from "react-router-dom"
import { PropertyData } from "../types"

const PropertyListItem = ({ property }: { property: PropertyData}) => {
    return (
        <Link 
            to={`/listings/${property._id ? property._id.toString(): ''}`}
            className="w-full"
        >
            <div className=" p-4 rounded-md w-full mb-2">
                <h2 className="text-slate-800 font-bold text-md">{property.propertyName}</h2>
                <h2 className="text-gray-500 font-bold text-md">{property.propertyType}</h2>
                <h2 className="text-gray-500 font-bold text-sm">{property.locationName}</h2>
            </div>
        </Link>
    )
}
export default PropertyListItem