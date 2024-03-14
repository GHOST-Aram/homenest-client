import { ChangeEventHandler, ReactNode, Dispatch,SetStateAction } from 'react'
import { SelectChangeEvent } from "@mui/material/Select"
import Box from "@mui/material/Box"
import { PropertyData, Status } from '../../../../types'
import StatusAlert from '../../../login/components/StatusAlert'
import SubmitButton from '../components/SubmitButton'
import PropertyProfile from './form-sections/PropertyProfile'
import PropertyMetrics from './form-sections/PropertyMetrics'
import PropertyAvailabilityAndMore from './form-sections/PropertyAvailabilityAndMore'
import PropertyResources from './form-sections/PropertyResources'
import GalleryInput from './form-sections/GalleryInputSection'
import { useLocation } from 'react-router-dom'
import DescriptionAndBackgroud from './form-sections/DescriptionAndBackgroud'

const PropertyForm = (
    {
        propertyData, 
        submitFormData, 
        getCheckboxValue,
        getTextFieldValue, 
        getSelectedValue,
        setProperty,
        status
    } : Props
) => {
    const location = useLocation()
    const pathname = location.pathname
    const isUpdateForm = pathname.includes('update')

    const submitButtonName =   isUpdateForm ? 'Update Property Data' : 'List Property'

    return (
        <div>
            <form onSubmit={async(e) =>{ e.preventDefault(); await submitFormData() }}
                className={form}
                aria-labelledby="property-form-title" 
            >
                <h1 id="property-form-title" className={heading}>
                    {isUpdateForm ? 'Update Property Data': 'New Property Listing'}
                </h1>
                <Box className={container}>
                    <PropertyProfile 
                        locationName={propertyData.locationName}
                        propertyName={propertyData.propertyName}
                        propertyType={propertyData.propertyType}
                        rentPerMonth={propertyData.rentPerMonth}
                        cityOrTown={propertyData.cityOrTown?propertyData.cityOrTown:''}
                        estate={propertyData.estate?propertyData.estate:''}
                        getSelectedValue={getSelectedValue}
                        getTextFieldValue={getTextFieldValue}
                    />
                    <DescriptionAndBackgroud 
                        backgroundImageUrl={propertyData.backgroundImageUrl}
                        description={propertyData.description}
                        getTextFieldValue={getTextFieldValue}
                    />
                </Box>
                <PropertyMetrics 
                    bedrooms={propertyData.bedrooms}
                    bathrooms={propertyData.bathrooms}
                    squareFootage={propertyData.squareFootage}
                    getTextFieldValue={getTextFieldValue}
                />
                <GalleryInput 
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
                <SubmitButton disabled = {status === 'loading'}>
                    { status === 'loading' ? 'Loading' : submitButtonName}
                </SubmitButton>
            </form>
        </div>
    )
}

const form = "m-auto py-4 space-y-4 w-4/5"
const heading = "text-center text-lg font-bold text-blue-700"
const container = "w-full p-8 border-2 rounded-md space-y-4"

interface Props{
    status : Status
    propertyData: PropertyData
    submitFormData: ()=>Promise<void>
    getTextFieldValue: ChangeEventHandler
    getCheckboxValue: ChangeEventHandler
    getSelectedValue: (e: SelectChangeEvent<string | string[]>, child: ReactNode) => void
    setProperty: Dispatch<SetStateAction<PropertyData>>
}

export default PropertyForm