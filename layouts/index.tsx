import React, { ReactNode } from 'react'

interface LayoutsProps {
       children: ReactNode
}

const Layouts = ({ children } : LayoutsProps) => {
       return (
              <div className="w-full main max-w-[1440px] m-auto px-4 pt-4 md:px-24 md:pt-8">
                     { children }
              </div>
       )
}

export default Layouts
