import React from 'react'

const SectionHeading = ({ children }: SectonHeadingProps) => {
	return (
		<h1 className='text-slate-900 font-bold text-3xl mt-12 mb-8 text-center'>
			{ children }
		</h1>
	)
}

interface SectonHeadingProps{
	children: string
}
export default SectionHeading