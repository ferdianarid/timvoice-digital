import React, { ReactNode } from 'react'

// import Navbar Component
import Navbar from "../components/organism/Navbar"

// interface Homepage Layout
interface InterfaceHomepage {
       children: ReactNode
}

// Homepage Layouts
const HomepageLayouts = ({ children }: InterfaceHomepage) => {
       return (
              <div className="background-gradient">
                     <div className="w-full main max-w-[1440px] m-auto px-4 pt-4 md:px-24 md:pt-8">
                            <Navbar />
                            {children}
                     </div>
              </div>
       )
}

export default HomepageLayouts
