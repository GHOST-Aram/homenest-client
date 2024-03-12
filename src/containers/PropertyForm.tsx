import { ChangeEventHandler, ReactNode } from 'react'
import { SelectChangeEvent } from "@mui/material/Select"
import Box from "@mui/material/Box"
import Button from '@mui/material/Button'
import { PropertyData, Status } from '../types'
import StatusAlert from './StatusAlert'
import PropertyProfile from './PropertyProfile'
import MultilineTextField from '../components/MultiLineTextField'
import PropertyBusinessInfo from './PropertyBusinessInfo'
import PropertyMetrics from './PropertyMetrics'
import PropertyAvailabilityAndMore from './PropertyAvailabilityAndMore'
import PropertyResources from './PropertyResources'
import PropertyGallery from './GalleryInputSection'


const PropertyForm = ({
    submitFormData, 
    propertyData, 
    getTypedorCheckedValue, 
    getSelectedValue,
    status
} : Props) => {
    return (
        <div>
            <form 
                onSubmit={async(e) =>{
                    e.preventDefault()
                    await submitFormData()
                }}
                aria-labelledby="property-form-title" 
                className="m-auto py-4 space-y-4 w-4/5"
            >
                <h1 id="property-form-title" className="text-center text-lg font-bold text-blue-700">
                    New Property Listing
                </h1>
                <Box className="w-full p-8 border-2 rounded-md space-y-4">
                    <PropertyProfile 
                        locationName={propertyData.locationName}
                        propertyName={propertyData.propertyName}
                        backgroundImageUrl={propertyData.backgroundImageUrl}
                        getTypedorCheckedValue={getTypedorCheckedValue}
                    />
                    <MultilineTextField 
                        name="description" 
                        type="text" 
                        label="Description"
                        value={propertyData.description} 
                        changeHandler={getTypedorCheckedValue}
                    />
                </Box>
                <PropertyBusinessInfo 
                    propertyType={propertyData.propertyType}
                    rentPerMonth={propertyData.rentPerMonth}
                    rentPerYear={propertyData.rentPerYear}
                    getTypedorCheckedValue={getTypedorCheckedValue}
                    getSelectedValue={getSelectedValue}
                />
                <PropertyMetrics 
                    bedrooms={propertyData.bedrooms}
                    bathrooms={propertyData.bathrooms}
                    squareFootage={propertyData.squareFootage}
                    getTypedorCheckedValue={getTypedorCheckedValue}
                />
                <PropertyGallery 
                    images ={propertyData.images} 
                    getImageData = {()=>{}}
                />
                <PropertyAvailabilityAndMore 
                    isAvailable={propertyData.isAvailable}
                    hasParkingSpace={propertyData.hasParkingSpace}
                    isFurnished={propertyData.isFurnished}
                    getCheckboxValue={getTypedorCheckedValue}
                />
                <PropertyResources 
                    energySources={propertyData.energySources}
                    waterSources={propertyData.waterSources}
                    getSelectedValue={getSelectedValue}
                />
                <StatusAlert status = {status}/>
                <Button 
                    variant="contained" 
                    fullWidth color="primary" 
                    size="large" 
                    type="submit"
                    disabled = {status === 'loading'}
                >
                    { status === 'loading' ? 'Loading' : 'List Property'}
                </Button>
            </form>
        </div>
    )
}

interface Props{
    submitFormData: ()=>Promise<void>
    propertyData: PropertyData
    getTypedorCheckedValue: ChangeEventHandler
    getSelectedValue: (e: SelectChangeEvent<string | string[]>, child: ReactNode) => void
    status : Status
}



export default PropertyForm