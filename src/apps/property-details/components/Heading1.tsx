import {ReactNode} from 'react'


const Heading1 = ({ children }: { children: ReactNode}) => {
  return (
    <h1 className='font-bold text-slate-300 text-4xl text-center'>
        { children }
    </h1>
  )
}

export default Heading1