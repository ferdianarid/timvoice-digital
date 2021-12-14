import React from 'react'
import CountUp from 'react-countup'

const Countup = () => {
       return (
              <React.Fragment>
                     <div className="w-[200px] bg-blue-400 h-[200px] rounded-md shadow  text-center">
                            <h1 className="text-5xl font-bold">
                                   <CountUp end={687} duration={4} />
                            </h1>
                     </div>
              </React.Fragment>
       )
}

export default Countup
