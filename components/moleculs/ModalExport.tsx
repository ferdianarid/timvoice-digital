import React from 'react'
import Image from "next/image"
import Link from 'next/link'

import PrimaryButton from '../partials/PrimaryButton'
import SecondaryButton from '../partials/SecondaryButton'

import CloseIcon from "../public/close.svg"
import { CopyButton, SendButton } from '../partials/ButtonAction'

const ModalExport = () => {
       // show modals
       const [isShowModal, setisShowModal] = React.useState(true)

       // push input
       const [pushInput, setPushInput] = React.useState(false)

       // push input handler
       const pushInputHandler = () => {
              setPushInput(true)
       }

       // input components
       const ShiftInput = () => {
              return (
                     <input
                            type="search"
                            name="query"
                            className="w-full border border-gray-200 rounded-[4px] mt-0 py-2 px-4 mb-4 text-md text-gray-900  pl-4 focus:outline-blue-800 focus:text-gray-900"
                            placeholder="recipient@email.com"
                            autoComplete="on"
                     />
              )
       }
       const ModalCard = () => {
              return (
                     <div className="max-w-[500px] bg-white shadow-xl rounded-lg h-auto p-6 z-30 top-[3%] left-[40%] fixed">
                            <div className="flex justify-between mb-4">
                                   <h1 className="text-xl font-bold">Kirim Tagihan</h1>
                                   <Link href="#">
                                          <Image onClick={() => setisShowModal(false)} className="w-full hover:cursor-pointer" width={32} height={32} src={CloseIcon} alt="" />
                                   </Link>
                            </div>
                            <hr />
                            <div className="mt-4">
                                   <h2 className="text-md font-bold">Penerima Tagihan</h2>
                                   <input
                                          type="search"
                                          name="query"
                                          className="w-full border border-gray-200 rounded-[4px] mt-2 py-2 px-4 mb-4 text-md text-gray-900  pl-4 focus:outline-blue-800 focus:text-gray-900"
                                          placeholder="recipient@email.com"
                                          autoComplete="on"
                                   />
                                   {
                                          pushInput && <ShiftInput />
                                   }
                                   <button onClick={pushInputHandler} className="flex bg-[#F7F8FD] hover:bg-blue-600 hover:text-white text-[#405DC7]  font-bold py-2 px-4 rounded">
                                          <svg
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 className="h-6 w-6"
                                                 fill="none"
                                                 viewBox="0 0 24 24"
                                                 stroke="currentColor"
                                          >
                                                 <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                                 />
                                          </svg>
                                          &nbsp; Tambah Penerima CC
                                   </button>
                                   <div className="mt-4">
                                          <h2 className="text-md font-bold">Subyek</h2>
                                          <input
                                                 type="search"
                                                 name="query"
                                                 className="w-full border border-gray-200 rounded-[4px] mt-2 py-2 px-4 mb-4 text-md text-gray-900  pl-4 focus:outline-blue-800 focus:text-gray-900"
                                                 placeholder="recipient@email.com"
                                                 autoComplete="on"
                                          />
                                   </div>
                                   <div>
                                          <textarea
                                                 className="w-full border border-[#C2C2C2] px-4 py-3 text-[#757575] rounded"
                                                 id="w3review"
                                                 name="w3review"
                                                 rows={2}
                                                 cols={30}
                                                 placeholder="Dear Udin, 
                                                        Terima kasih sudah mempercayakan pekerjaan"
                                          ></textarea>
                                   </div>
                            </div>
                            {/* Button Action */}
                            <div className="flex justify-between gap-x-1 mt-4">
                                   <SecondaryButton children="Salin Tautan" />
                                   <SendButton eventAction={() => alert("Hello")} children="Kirim Tagihan" />
                            </div>
                     </div>
              )
       }
       return (
              <React.Fragment>
                     {
                            isShowModal && <ModalCard />
                     }
              </React.Fragment>
       )
}

export default ModalExport
