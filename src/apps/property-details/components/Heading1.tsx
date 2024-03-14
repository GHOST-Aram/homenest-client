import {ReactNode} from 'react'


const Heading1 = ({ children }: { children: ReactNode}) => {
  return (
    <h1 className={heading}>
        { children }
    </h1>
  )
}
const heading = 'font-bold text-slate-300 text-4xl text-center'

export default Heading1