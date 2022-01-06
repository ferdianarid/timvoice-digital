import React from 'react'
import Image from "next/image"

// Interface Recent Activity Component
import { InterfaceRecentActivity } from '../interfaces/RecentActivity'

// Recent Activity Component
const RecentActivity = (props: InterfaceRecentActivity) => {
       const { srcImage, altImage, title, subtitle, spanText, spanTextTwo, timestamp } = props
       return (
              <React.Fragment>
                     <div className="py-4 flex hover:bg-blue-50 hover:rounded-lg hover:cursor-pointer">
                            <Image src={srcImage} alt={altImage} />
                            <div className="pl-4">
                                   <p className="text-md-regular font-bold pt-1">{title}</p>
                                   <p className="text-md-regular text-gray-500 pt-1">
                                          <span className="font-bold">{spanText}</span> {subtitle} <span className="font-bold">{spanTextTwo}</span></p>
                                   <p className="text-md-regular text-gray-500 pt-1 font-normal">{timestamp}</p>
                            </div>
                     </div>
              </React.Fragment>
       )
}

export default RecentActivity
