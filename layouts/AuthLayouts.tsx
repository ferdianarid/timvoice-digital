import React, { ReactNode } from 'react'

// interface Auth Layout
interface AuthLayoutInterfaces {
       children: ReactNode
}

// AuthLayouts
const AuthLayouts = ({ children } : AuthLayoutInterfaces) => {
       return (
              <React.Fragment>
                     <div className="px-4 pt-4 max-w-[1440px] mx-auto md:px-24 md:pt-8">
                            { children }
                     </div>
              </React.Fragment>
       )
}

export default AuthLayouts
