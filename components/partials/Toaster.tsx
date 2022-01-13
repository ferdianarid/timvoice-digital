import React from 'react'

const Toaster = () => {
       return (
              <React.Fragment>
                     <div className="py-1 px-3 bg-white text-green-400 rounded-md w-fit">Successfully Submit</div>
              </React.Fragment>
       )
}

const StateLoadingToast = () => {
       return <div className="py-1 px-3 bg-blue-400 text-white rounded-md w-fit">Loading ...</div>
}
const StateSuccessToast = () => {
       return <div className="py-1 px-3 bg-green-700 text-white rounded-md w-fit">Successfully Submit</div>
}

export default Toaster
