import { Skeleton } from "@mui/material"

const ListingSkeletons = () => {
    return (
        <>
       { skeletons.map((skeleton:string) =>(
            <div key ={skeleton} className='flex flex-col rounded-md'>
                <Skeleton 
                    sx={{backgroundColor: '#94a3b8'}}
                    variant='rectangular' 
                    height={200}
                    animation = 'wave'
                />
                <Skeleton 
                    variant='text' 
                    animation ='wave' 
                    sx={{backgroundColor: '#94a3b8'}}
                    width={100}
                />
                <Skeleton 
                    variant='text' 
                    animation ='wave' 
                    sx={{backgroundColor: '#94a3b8'}}
                    width={150}
                />
                <Skeleton 
                    variant='text' 
                    animation ='wave' 
                    sx={{backgroundColor: '#94a3b8'}}
                    width={100}
                />

                <Skeleton 
                    variant='rounded' 
                    animation = 'wave'
                    sx={{ backgroundColor: "#94a3b8"}}
                    height={50}
                />
            </div>
        )) }
        </>
    )
}

const createSkeletons = () =>{
	const skeletons: string[] = []
	let count = 0
	while(skeletons.length < 12) {
		skeletons.push(`skeleton-${count}`)
		count++
	}

	return skeletons
}

const skeletons = createSkeletons()

export default ListingSkeletons