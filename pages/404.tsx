import Link from 'next/link'
import React from 'react'

const NotFound = () => {
       return (
              <React.Fragment>
                     <div className="text-center mt-20">
                            <h1 className="text-blue-600 font-extrabold text-[90px] text-center">404</h1>
                            <h1 className="text-blue-600 font-extrabold text-[72px] text-center">Pages Not Found</h1>
                            <p className="text-lg font-medium text-gray-800 text-center pt-4">Sorry, your request page is not found</p>
                     </div>
              </React.Fragment >
       )
}

export default NotFound
