import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { ReactNode } from 'react'
import { SelectChangeEvent } from '@mui/material/Select'

const PropertyResources = (
    {
        energySources,
        waterSources,
        getSelectedValue,
    }: Props
) => {
    const fields = createFields({energySources, waterSources })
    
    return (
        <>
            <h1 className={heading}>Resources</h1>
            <Box className={flexContainer}>
                {
                    fields.map(field =>(

                        <FormControl key={field.labelId} fullWidth>
                            <InputLabel id={field.labelId}>{field.inputLabel}</InputLabel>
                            <Select 
                                fullWidth
                                labelId={field.labelId}
                                name={field.name} 
                                value={field.value} 
                                label={field.label}
                                multiple 
                                onChange={getSelectedValue}
                            >
                                {
                                    field.menuItems.map((source: string) =>(
                                        <MenuItem key={source} value={source}> { source }</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    ))
                }
            </Box>
        </>
    )
}

const createFields = (
    { 
        energySources, 
        waterSources 
    }: { energySources: string[], waterSources: string[] }
) =>{
    return [
        {
            inputLabel: 'Energy Sources', 
            labelId: 'energyy-sources-label',
            label: 'Energy Sources', 
            name: 'energySources',
            menuItems: energySourcesMenu, 
            value: energySources,
        },
        {
            inputLabel: 'Water Sources', 
            labelId: 'water-sources-label',
            label: 'Water Sources', 
            name: 'waterSources',
            menuItems: waterSourcesMenu, 
            value: waterSources,
        },
    ]
}

interface Props{
    energySources: string[]
    waterSources: string[]
    getSelectedValue: (e: SelectChangeEvent<string | string[]>, child: ReactNode) => void
}

const heading = "text-blue-700 text-lg text-center"
const flexContainer = "flex flex-col gap-4 lg:flex-row justify-between p-8 "+
    "border-2 rounded-md"
const waterSourcesMenu = [
    'Public Water Supply', 'Private Undergound Water', 'Rain Water', 'Other'
]

const energySourcesMenu = [
    'KPLC', 'Private Solar System', 'Backup Generator', 'Other'
]

export default PropertyResources

