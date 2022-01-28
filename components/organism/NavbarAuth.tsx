import React from 'react'
import Image from "next/image"
import Logo from "../../public/timvoice.svg"

const NavbarAuth = () => {
       return (
              <div className='w-auto py-8 px-24 flex items-center justify-between border-b border-gray-100'>
                     <Image src={Logo} />
              </div>
       )
}

export default NavbarAuth
