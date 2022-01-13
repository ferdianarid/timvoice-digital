import React, { ReactNode } from 'react'
import NavbarAuth from "../components/NavbarAuth"
// interface Auth Layout
interface AuthLayoutInterfaces {
       children: ReactNode
}

// AuthLayouts
const AuthLayouts = ({ children }: AuthLayoutInterfaces) => {
       return (
              <React.Fragment>
                     <div className="max-w-[1440px] mx-auto px-4 md:px-24 md:pt-8">
                            <NavbarAuth />
                            {children}
                     </div>
              </React.Fragment>
       )
}

export default AuthLayouts
