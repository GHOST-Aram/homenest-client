import { ChangeEventHandler, ReactNode, Dispatch,SetStateAction } from 'react'
import { SelectChangeEvent } from "@mui/material/Select"
import Box from "@mui/material/Box"
import Button from '@mui/material/Button'
import { PropertyData, Status } from '../../types'
import StatusAlert from '../login/StatusAlert'
import PropertyProfile from './PropertyProfile'
import MultilineTextField from '../../components/MultiLineTextField'
import PropertyBusinessInfo from './PropertyBusinessInfo'
import PropertyMetrics from './PropertyMetrics'
import PropertyAvailabilityAndMore from './PropertyAvailabilityAndMore'
import PropertyResources from './PropertyResources'
import PropertyGallery from './GalleryInputSection'
import { useLocation } from 'react-router-dom'


const PropertyForm = ({
    submitFormData, 
    propertyData, 
    getCheckboxValue,
    getTextFieldValue, 
    getSelectedValue,
    setProperty,
    status
} : Props) => {
    const location = useLocation()
    const pathname = location.pathname
    const isUpdateForm = pathname.includes('update')

    const submitButtonName =   isUpdateForm ? 'Update Property Data' : 'List Property'

    
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
                    {isUpdateForm ? 'Update Property Data': 'New Property Listing'}
                </h1>
                <Box className="w-full p-8 border-2 rounded-md space-y-4">
                    <PropertyProfile 
                        locationName={propertyData.locationName}
                        propertyName={propertyData.propertyName}
                        backgroundImageUrl={propertyData.backgroundImageUrl}
                        getTextFieldValue={getTextFieldValue}
                    />
                    <MultilineTextField 
                        name="description" 
                        type="text" 
                        label="Description"
                        value={propertyData.description} 
                        changeHandler={getTextFieldValue}
                    />
                </Box>
                <PropertyBusinessInfo 
                    propertyType={propertyData.propertyType}
                    rentPerMonth={propertyData.rentPerMonth}
                    rentPerYear={propertyData.rentPerYear}
                    getTextFieldValue={getTextFieldValue}
                    getSelectedValue={getSelectedValue}
                />
                <PropertyMetrics 
                    bedrooms={propertyData.bedrooms}
                    bathrooms={propertyData.bathrooms}
                    squareFootage={propertyData.squareFootage}
                    getTextFieldValue={getTextFieldValue}
                />
                <PropertyGallery 
                    property ={propertyData} 
                    setProperty = {setProperty}
                />
                <PropertyAvailabilityAndMore 
                    isAvailable={propertyData.isAvailable}
                    hasParkingSpace={propertyData.hasParkingSpace}
                    isFurnished={propertyData.isFurnished}
                    getCheckboxValue={getCheckboxValue}
                />
                <PropertyResources 
                    energySources={propertyData.energySources}
                    waterSources={propertyData.waterSources}
                    getSelectedValue={getSelectedValue}
                />
                <StatusAlert status = {status}/>
                <Button 
                    variant="contained" 
                    fullWidth color="success" 
                    size="large" 
                    type="submit"
                    disabled = {status === 'loading'}
                >
                    { status === 'loading' ? 'Loading' : submitButtonName}
                </Button>
            </form>
        </div>
    )
}

interface Props{
    submitFormData: ()=>Promise<void>
    propertyData: PropertyData
    getTextFieldValue: ChangeEventHandler
    getCheckboxValue: ChangeEventHandler
    getSelectedValue: (e: SelectChangeEvent<string | string[]>, child: ReactNode) => void
    status : Status
    setProperty: Dispatch<SetStateAction<PropertyData>>
}



export default PropertyForm