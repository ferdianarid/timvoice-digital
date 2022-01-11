import React from 'react'
import Image from "next/image"
import Link from 'next/link'

import PrimaryButton from './partials/PrimaryButton'

import CloseIcon from "../public/close.svg"

const ExportInvoice = () => {
       // Modals State
       const [closeModal, setCloseModal] = React.useState(false)

       // Modals Component
       const Modals = () => {
              return (
                     <div className="max-w-[700px] bg-white shadow-xl rounded-lg h-auto p-6 z-30 top-[25%] left-[40%] fixed">
                            <div className="flex justify-between mb-4">
                                   <h1 className="text-xl font-bold">Export Tagihan</h1>
                                   <Link href="#">
                                          <Image onClick={() => setCloseModal(!closeModal)} className="w-full hover:cursor-pointer" width={32} height={32} src={CloseIcon} alt="" />
                                   </Link>
                            </div>
                            <div className="mt-6">
                                   <h2 className="text-md font-bold">Periode</h2>
                                   <input
                                          type="date"
                                          name="periode"
                                          className="w-full border border-gray-200 font-medium rounded-[4px] mt-2 py-2 px-4 mb-4 text-md text-gray-900  pl-4 focus:outline-blue-800 focus:text-gray-900"
                                   />
                                   <select className=" mt-2 font-medium w-full border border-gray-200 rounded-[4px] py-2 px-4 mb-4 text-md bg-white" name="cars" id="cars">
                                          <option className='bg-white font-medium hover:bg-[#405DC7]' value="CSV">CSV</option>
                                          <option className='bg-white font-medium hover:bg-[#405DC7]' value="XLS">XLS</option>
                                   </select>
                            </div>
                            <div className="w-full mt-2">
                                   {/* Button Action */}
                                   <PrimaryButton children="Export" />
                            </div>
                     </div>
              )
       }
       return (
              <React.Fragment>
                     {
                            !closeModal && <Modals />
                     }
              </React.Fragment>
       )
}

export default ExportInvoice
