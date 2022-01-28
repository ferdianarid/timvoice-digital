import React from 'react'

const DownloadOption = () => {
       const [show, setShow] = React.useState(false)

       const OptionDownload = () => {
              return (
                     <div className="absolute z-10 top-10 left-2 flex flex-col rounded-md border border-gray-200 bg-white w-[150px]">
                            <a href="#" className="hover:bg-blue-50 flex items-center py-2 mt-1.5 mb-2 px-2 mx-1.5 rounded-md text-sm text-gray-500">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                   </svg>Unduh PDF</a>
                            <a href="#" className="hover:bg-red-600 flex items-center  py-2 mb-1.5 px-2 mx-1.5  rounded-md hover:text-white text-sm text-red-500">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                   </svg>Hapus</a>
                     </div>
              )
       }

       return (
              <React.Fragment>
                     <div className="flex flex-col relative">
                            <button onClick={() => setShow(!show)} className='flex justify-between items-center ml-2 py-1.5 px-2 rounded-md bg-gray-50 border border-gray-200'>
                                   <h1 className='font-semibold text-gray-700 pl-2'>Tindakan</h1>
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                   </svg>
                            </button>
                            {
                                   show && <OptionDownload />
                            }
                     </div>
              </React.Fragment>
       )
}

export default DownloadOption
