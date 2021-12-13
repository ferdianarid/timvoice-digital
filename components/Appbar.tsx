import React, { ReactNode } from 'react'
import Link from "next/link"
import Image from "next/image"

// Import Assets
import IconBell from "../public/iconDashboard/IconBell.svg"
import IconCreate from "../public/iconDashboard/create.svg"
import AvatarImage from "../public/Avatar-Testimonial1.png"


// Interface Image Option
interface ImageProps {
       appBarIcon: string,
       width?: number,
       height?: number,
       alt: string
}


// Interface Link Action
interface LinkActionProps {
       alt: string,
       imgIcon: string,
       children: ReactNode
}

// Image Option Component
const ImageOptions = ({ appBarIcon, alt } : ImageProps ) => {
       return (
              <div className="w-auto">
                     <Image src={appBarIcon} alt={alt} />
              </div>
       )
}

// Link Action Component
const LinkAction = ({ imgIcon, alt, children } : LinkActionProps) => {
       return (
              <div className='flex items-center'>
                     <Image src={imgIcon} alt={alt} />
                     <Link href="/admin/dashboard/create">
                            { children }
                     </Link>
              </div>
       )
}

// Application Bar Components
const Appbar = () => {
       return (
              <React.Fragment>
                     {/* <!-- Application Bar --> */}
                     <div className="app-bar py-7 px-16 shadow-sm bg-white flex justify-between items-center">
                            <div className="w-[60%] flex items-center">
                                   {/* <!-- Form Search --> */}
                                   <form className="w-[60%]" method="GET">
                                          <div className="relative text-gray-600 focus-within:text-gray-400">
                                                 <span className="absolute inset-y-0 left-0 flex items-center pl-2 pr-[19px]">
                                                        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                                               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                        </button>
                                                 </span>
                                                 <input type="search" name="query" className="w-full border border-gray-200 py-2 px-4 text-sm text-white bg-white rounded-[4px] pl-10 focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Cari" autoComplete="on" />
                                          </div>
                                   </form>
                            </div>
                            {/* Button Action */}
                            <div className="w-[40%] h-12 flex items-center justify-between">
                                   {/* Create Button */}
                                   <div className="w-[123px] text-center font-bold ml-0 md:ml-1 no-underline flex items-center px-4 py-[10px] leading-none bg-blue-800 border-blue-800 border rounded text-white hover:border-transparent hover:bg-white hover:text-blue-800 mt-4 sm:mt-0" >
                                          <LinkAction imgIcon={IconCreate} alt="briefcase" children="Create" />
                                   </div>
                                   {/* Language Translation */}
                                   <div className="w-auto text-center font-bold ml-0 md:ml-1 no-underline flex items-center px-4 py-[11px] leading-none bg-white border rounded text-blue-800 hover:border-transparent hover:bg-blue-800 hover:text-white mt-4 sm:mt-0" >
                                          <Link href="/admin/dashboard/create">
                                                 ENG
                                          </Link>
                                   </div>
                                   {/* Bell Notification */}
                                   <ImageOptions appBarIcon={IconBell} alt="bell-icon" />
                                   {/* Avatar Image */}
                                   <Image src={AvatarImage} />
                            </div>
                     </div>
              </React.Fragment>
       )
}

export default Appbar