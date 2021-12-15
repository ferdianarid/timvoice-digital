import React from 'react'
import Image from "next/image"
import ellips from "../../public/ellipsis.svg"

const Ellipsis = () => {
       return (
              <React.Fragment>
                     <div className="w-[32px] h-[32px] border rounded flex justify-center border-gray-300">
                            <Image src={ellips} alt="options" />
                     </div>
              </React.Fragment>
       )
}

export default Ellipsis
