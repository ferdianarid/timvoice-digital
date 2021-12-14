import React, { ReactNode } from 'react'

// interface Homepage Layout
interface InterfaceHomepage {
       children: ReactNode
}

// Homepage Layouts
const HomepageLayouts = ({ children } : InterfaceHomepage) => {
       return (
              <div className="w-full main max-w-[1440px] m-auto px-0 pt-4 md:px-24 md:pt-8">
                     { children }
              </div>
       )
}

export default HomepageLayouts
