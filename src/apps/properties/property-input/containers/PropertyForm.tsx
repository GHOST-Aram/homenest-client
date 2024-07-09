import Box from "@mui/material/Box"
import StatusAlert from '../components/StatusAlert'
import SubmitButton from '../components/SubmitButton'
import PropertyProfile from './form-sections/PropertyProfile'
import PropertyMetrics from './form-sections/PropertyMetrics'
import PropertyAvailabilityAndMore from './form-sections/PropertyAvailabilityAndMore'
import PropertyResources from './form-sections/PropertyResources'
import { useLocation } from 'react-router-dom'
import DescriptionAndBackgroud from './form-sections/DescriptionAndBackgroud'
import { PropertyCreator } from '../PropertyCreater'

interface Props{
    propertyCreator: PropertyCreator
    backgroundPreviewUrl: string
    previewBackgroundImage: (file: File) => void
    
}
const PropertyForm = (
    { 
        propertyCreator,
        backgroundPreviewUrl,
        previewBackgroundImage 
    } : Props
) =>  {
    const location = useLocation()
    const pathname = location.pathname
    const isUpdateForm = pathname.includes('update')

    const submitButtonName =   isUpdateForm ? 'Update Property Data' : 'List Property'

    return (
        <div>
            <form onSubmit={async(e) =>{ 
                e.preventDefault()
                propertyCreator.submitPropertyData() 
            }}
                className={form}
                aria-labelledby="property-form-title" 
            >
                <h1 id="property-form-title" className={heading}>
                    {isUpdateForm ? 'Update Property Data': 'New Property Listing'}
                </h1>
                <Box className={container}>
                    <PropertyProfile 
                        locationName={ propertyCreator.propertyData.locationName }
                        propertyName={ propertyCreator.propertyData.propertyName }
                        propertyType={ propertyCreator.propertyData.propertyType }
                        rentPerMonth={ propertyCreator.propertyData.rentPerMonth }
                        cityOrTown={ propertyCreator.propertyData.cityOrTown }
                        estate={ propertyCreator.propertyData.estate }
                        getSelectedValue={ propertyCreator.getSelectedValue }
                        getTextFieldValue={ propertyCreator.getTextFieldValue }
                    />
                    <DescriptionAndBackgroud 
                        backgroundPreviewUrl={backgroundPreviewUrl}
                        description={ propertyCreator.propertyData.description }
                        getTextFieldValue={ propertyCreator.getTextFieldValue }
                        getBackgroundImageFile={propertyCreator.getBackgroundImageFile}
                        previewBackgroundImage={previewBackgroundImage}
                    />
                </Box>
                <PropertyMetrics 
                    bedrooms={ propertyCreator.propertyData.bedrooms }
                    bathrooms={ propertyCreator.propertyData.bathrooms }
                    squareFootage={ propertyCreator.propertyData.squareFootage }
                    getTextFieldValue={ propertyCreator.getTextFieldValue }
                />
                <PropertyAvailabilityAndMore 
                    isAvailable={ propertyCreator.propertyData.isAvailable }
                    hasParkingSpace={ propertyCreator.propertyData.hasParkingSpace }
                    isFurnished={ propertyCreator.propertyData.isFurnished }
                    getCheckboxValue={ propertyCreator.getCheckboxValue }
                />
                <PropertyResources 
                    energySources={ propertyCreator.propertyData.energySources }
                    waterSources={ propertyCreator.propertyData.waterSources }
                    getSelectedValue={ propertyCreator.getSelectedValue }
                />
                <StatusAlert 
                    processStatus = { propertyCreator.status}  
                    errorMsg={ propertyCreator.errorMsg }
                />
                <SubmitButton disabled = { propertyCreator.status === 'loading'} >
                    { propertyCreator.status === 'loading' ? 'Loading' : submitButtonName}
                </SubmitButton>
            </form>
        </div>
    )
}

const form = "m-auto py-4 space-y-4 w-4/5"
const heading = "text-center text-lg font-bold text-blue-700"
const container = "w-full p-8 border-2 rounded-md space-y-4"

export default PropertyForm