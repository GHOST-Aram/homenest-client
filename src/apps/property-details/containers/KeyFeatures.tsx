import { PropertyData } from '../../../types'
import Feature from '../components/Feature'
import Box from '@mui/material/Box'
import Sources from '../components/Sources'

const KeyFeatures = ({ property }: { property: PropertyData }) => {
  return (
    <section className={section}>
        <Box className={container}>
            <Box className={featuresContainer}>
                <Box className={featureContainer}>  
                    <Feature name='Propety Type' value={property.propertyType} />
                    <Feature name='Bedrooms' value={ `${property.bedrooms}` } /> 
                    <Feature name='Currently Vacant' 
                        value={ `${property.isAvailable ? 'Yes' : 'No'}` } 
                    />  
                </Box>
                <Box className={featureContainer}>
                    <Feature name='Furnished' 
                        value={`${property.isFurnished ? 'Yes' : 'No' }` } 
                    /> 
                    <Feature name='Has Parking' 
                        value={`${property.hasParkingSpace ? 'Yes' : 'No' }` } 
                    /> 
                </Box>
            </Box>
            <Box className={resourcesContainer}>
                <Sources 
                    resourceName='Water Sources' 
                    sources={property.waterSources}
                />
                <Sources 
                    resourceName='Energy Sources' 
                    sources={property.energySources}
                />
            </Box>
        </Box>
    </section>
  )
}


const featureContainer = "flex gap-4"
const resourcesContainer = "flex lg:gap-4 flex-col lg:flex-row"
const featuresContainer = "flex flex-col gap-2 md:flex-row md:gap-4"
const container = "bg-slate-800 p-2"
const section = 'mt-4 px-8'

export default KeyFeatures