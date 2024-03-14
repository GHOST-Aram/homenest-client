import Divider from "@mui/material/Divider"
import Box from '@mui/material/Box'

const Sources = (
    { sources, resourceName }: { resourceName: string, sources: string[]}
) => {

    return (
        <Box>
            <span className={ resourceClassName }> { resourceName }: </span>
            {
                sources.map(source =>(
                    <>
                        <span key={source} className={sourceClassName}> 
                            { source }  
                        </span>
                        <Divider orientation={'vertical'}/>
                    </>
                ))
            }
        </Box>
    )
}

const resourceClassName = "text-slate-300 font-bold text-sm"
const sourceClassName = "text-slate-300 font-light text-sm"
export default Sources