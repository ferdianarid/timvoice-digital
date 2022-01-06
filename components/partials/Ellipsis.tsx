import React, { useState } from 'react'
import Image from "next/image"
import ellips from "../../public/ellipsis.svg"

const Ellipsis = () => {
       const [show, setShow] = useState(false)
       return (
              <React.Fragment>
                     <div onClick={() => setShow(!show)} className="w-[32px] h-[32px] border rounded flex hover:cursor-pointer justify-center border-gray-300">
                            <Image src={ellips} alt="options" />
                            {show === true && <ModalEdited />}
                     </div>
              </React.Fragment>
       )
}

const ModalEdited = () => {
       return (
              <div className='-ml-36 mt-9 py-1 px-2 rounded-md bg-white border border-blue-200 z-10 absolute flex flex-col w-[11rem]'>
                     <a href="#" className='flex items-center my-1 py-2 px-3 text-blue-700 text-sm hover:bg-blue-50 hover:rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                            <p className='pl-3'>Edit Tagihan</p></a>
                     <a href="#" className='flex items-center my-1 py-2 px-3 text-blue-700 text-sm hover:bg-blue-50 hover:rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                            </svg>
                            <p className='pl-3'>Duplikasi</p></a>
                     <a href="#" className='flex items-center my-1 py-2 px-3 text-blue-700 text-sm hover:bg-blue-50 hover:rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <p className='pl-3'>Lihat Tagihan</p></a>
                     <a href="#" className='flex items-center my-1 py-2 px-3 text-blue-700 text-sm hover:bg-blue-50 hover:rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            <p className='pl-3'>Kirim Pengingat</p></a>
                     <a href="#" className='flex items-center my-1 py-2 px-3 text-blue-700 text-sm hover:bg-blue-50 hover:rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <p className='pl-3'>Salin Tautan</p></a>
                     <a href="#" className='flex items-center my-1 py-2 px-3 text-blue-700 text-sm hover:bg-blue-50 hover:rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p className='pl-3'>Unduh PDF</p></a>
                     <a href="#" className='flex items-center my-1 py-2 px-3 text-red-700 text-sm hover:bg-red-600 hover:text-white hover:rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            <p className='pl-3'>Hapus</p></a>
              </div>
       )
}

export default Ellipsis
