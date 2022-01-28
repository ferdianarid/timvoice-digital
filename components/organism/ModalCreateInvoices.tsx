import React from 'react'
import Image from "next/image"
import Link from 'next/link'

// import Toaster
import { successNotify } from '../partials/ToastNotify'

// import close icon
import CloseIcon from "../../public/close.svg"

const ModalCreateInvoices = () => {
       // Modals State
       const [closeModal, setCloseModal] = React.useState(false)

       // Modals Component
       const Modals = () => {
              return (
                     <div className="w-[400px] bg-white shadow-xl rounded-lg h-auto p-6 z-30 top-[15%] left-[42%] fixed">
                            <div className="flex justify-between mb-4">
                                   <h1 className="text-xl font-bold text-gray-800">Buat Tagihan</h1>
                                   <Link href="#">
                                          <Image onClick={() => setCloseModal(!closeModal)} className="w-full hover:cursor-pointer" width={32} height={32} src={CloseIcon} alt="" />
                                   </Link>
                            </div>
                            <div className="mt-2">
                                   <h2 className="text-md font-bold text-gray-800">Tipe Tagihan</h2>
                                   <select className=" mt-2 font-medium text-gray-800 w-full border border-gray-200 rounded-[4px] py-2 px-4 mb-4 text-md bg-white" name="cars" id="cars">
                                          <option className='bg-white font-medium text-gray-800 hover:bg-[#405DC7]' value="Tagihan Satuan">Tagihan Satuan</option>
                                          <option className='bg-white font-medium text-gray-800 hover:bg-[#405DC7]' value="Tagihan Bulanan">Tagihan Bulanan</option>
                                   </select>
                            </div>

                            <div className="mt-2">
                                   <h2 className="text-md font-bold text-gray-800">Klien</h2>
                                   <select className=" mt-2 font-medium w-full border border-gray-200 rounded-[4px] py-2 px-4 mb-4 text-md bg-white" name="cars" id="cars">
                                          <option className='bg-white font-medium text-gray-800 hover:bg-[#405DC7]' value="CSV">Buat Baru</option>
                                          <option className='bg-white font-medium text-gray-800 hover:bg-[#405DC7]' value="XLS">Ferdian Ahmad</option>
                                          <option className='bg-white font-medium text-gray-800 hover:bg-[#405DC7]' value="XLS">Mary Jane</option>
                                   </select>
                            </div>

                            <div className="mt-2">
                                   <h2 className="text-md font-bold text-gray-800">Projek</h2>
                                   <select className=" mt-2 font-medium w-full border border-gray-200 rounded-[4px] py-2 px-4 mb-4 text-md bg-white" name="projek" id="projek" value="Logo Design" disabled>
                                          <option className=' text-gray-800 font-medium hover:bg-[#405DC7] bg-gray-400' value="Logo Design">Logo Design</option>
                                   </select>
                            </div>
                            <div className="w-full mt-4">
                                   {/* Button Action */}
                                   <button onClick={() => alert("Invoice Successfully Created")} className='w-full py-2 bg-[#405DC7] hover:bg-[#324daf] text-white px-4 rounded-md flex items-center justify-center font-bold'>
                                          Buat Tagihan
                                   </button>
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

export default ModalCreateInvoices
