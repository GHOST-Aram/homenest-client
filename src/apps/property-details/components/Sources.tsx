import Box from '@mui/material/Box'

const Sources = (
    { sources, resourceName }: { resourceName: string, sources: string[]}
) => {

    return (
        <Box>
            <span className={ resourceClassName }> { resourceName }: </span>
            {
                sources.map((source, index) =>(
                    <span key={source} className={sourceClassName}> 
                        { source } | {''}
                    </span>
                ))
            }
        </Box>
    )
}

const resourceClassName = "text-slate-300 font-bold text-sm"
const sourceClassName = "text-slate-300 font-light text-sm"
export default Sources