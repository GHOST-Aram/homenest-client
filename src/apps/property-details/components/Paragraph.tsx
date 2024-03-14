import { ReactNode } from "react"

const Paragraph = ({ children }: { children: ReactNode}) => {
    return (
      <p className='font-md text-md text-slate-800 mb-4'>{children}</p>
    )
  }

export default Paragraph