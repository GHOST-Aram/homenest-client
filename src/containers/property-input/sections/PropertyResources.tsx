import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { ReactNode } from 'react'
import { SelectChangeEvent } from '@mui/material/Select'

const PropertyResources = ({
    energySources,
    waterSources,
    getSelectedValue,
}: Props) => {
    return (
        <>
            <h1 className="text-blue-700 text-lg text-center">Resources</h1>

            <Box className="flex flex-col gap-4 lg:flex-row justify-between p-8 
                border-2 rounded-md"
            >
                <FormControl fullWidth>
                    <InputLabel id='energyy-sources-label'>Energy Sources</InputLabel>
                    <Select 
                        fullWidth
                        labelId="energy-sources-label"
                        name="energySources" 
                        value={energySources} 
                        label='Energy Sources'
                        multiple 
                        onChange={getSelectedValue}
                    >
                        {
                            energySourcesArr.map((source: string) =>(
                                <MenuItem key={source} value={source}> { source }</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id='water-sources-label'>Water Sources</InputLabel>
                    <Select 
                        fullWidth
                        labelId='water-sources-label'
                        name="waterSources" 
                        value={waterSources} 
                        label='Water Sources'
                        multiple 
                        onChange={getSelectedValue}
                    >
                        {
                            waterSourcesArr.map((source: string) =>(
                                <MenuItem key={source} value={source}> { source }</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Box>
        </>
    )
}

interface Props{
    energySources: string[]
    waterSources: string[]
    getSelectedValue: (e: SelectChangeEvent<string | string[]>, child: ReactNode) => void
}

const waterSourcesArr = [
    'Public Water Supply', 'Private Undergound Water', 'Rain Water', 'Other'
]

const energySourcesArr = [
    'KPLC', 'Private Solar System', 'Backup Generator', 'Other'
]

export default PropertyResources

