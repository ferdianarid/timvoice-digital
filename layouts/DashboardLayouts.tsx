import React, { ReactNode } from 'react'

// import Sidebar component
import Sidebar from "../components/Sidebar"

// import Appbar components
import Appbar from "../components/Appbar"

// interface dashboard layout
interface DashboardInterface {
       children: ReactNode
}

// dashboard layouts
const DashboardLayouts = ({ children } : DashboardInterface) => {
       return (
              <React.Fragment>
                     <div className="w-full max-w-[1440px] mx-auto flex">
				<Sidebar />
				<div className="flex w-full ml-[240px] h-24 flex-col">
                     		<Appbar />
                                   { children }
                            </div>
                     </div>
              </React.Fragment>
       )
}

export default DashboardLayouts
