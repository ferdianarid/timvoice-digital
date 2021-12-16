import React from 'react'
import { NextPage } from 'next'
import Head from "next/head"

// import Dashboard Layouts
import DashboardLayouts from '../../../layouts/DashboardLayouts'

// import Profile Components
import { Profile } from '../../../components/content/Profile' 
import Tables from '../../../components/Tables'

// Invoices Page
const Invoices: NextPage = () => {
       return (
              <React.Fragment>
                     <Head>
				<title>Invoices - Timvoice</title>
				<meta name="description" content="invoices invoice" />
				<meta httpEquiv="X-UA Compatible" content="IE-Edge" />
				<meta name="author" content="timvoice corp" />
			</Head>
                     <DashboardLayouts>
                            {/* <!-- Profiles Completeness --> */}
                            <Profile />
                            {/* <!-- Invoices Tables --> */}
                            <div className="w-[1240px] h-auto pb-8 px-16 bg-blue-50">
                                   <div className="w-full bg-white h-auto rounded-lg px-10">
                                          {/* <!-- Title Invoice and Button Create New Invoices --> */}
                                          <div className="flex justify-between items-center">
                                                 <h1 className="py-6 text-[28px] font-bold">Daftar Tagihan</h1>
                                                 <div className="h-auto w-auto bg-[#F7F8FD] rounded-md">
                                                        <p className="text-[#405DC7] font-bold py-2 px-4 text-lg-bold">
                                                               <a href="/admin/invoices/createinvoices">Buat Tagihan Baru</a>
                                                        </p>
                                                 </div>
                                          </div>
                                          <hr className='w-full border border-gray-200 mb-6' />
                                          {/* <!-- Button Action --> */}
                                          <div className="flex justify-between items-center">
                                          <div className="w-[60%] flex items-center">
                                                        {/* <!-- Form Search --> */}
                                                        <form className="w-[60%]" method="GET">
                                                               <div className="relative text-gray-600 focus-within:text-gray-400">
                                                                      <span className="absolute inset-y-0 left-0 flex items-center pl-2 pr-[19px]">
                                                                             <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                                             </button>
                                                                      </span>
                                                                      <input type="search" name="query" className="w-full border border-gray-200 py-2 px-4 text-sm text-white bg-white rounded-[4px] pl-10 focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Cari" autoComplete="on" />
                                                               </div>
                                                        </form>
                                                 </div>
                                                 <div className="w-auto flex justify-between">
                                                        {/* <!-- Export Button --> */}
                                                        <div className="flex items-center h-auto px-6 w-auto bg-[#F7F8FD] rounded-md">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="#405DC7">
                                                        <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd" />
                                                        </svg>
                                                               <p className="text-[#405DC7] font-bold py-2 pl-1 text-lg-bold">Export</p>
                                                        </div>
                                                        {/* <!--  Filter Button --> */}
                                                        <div className="flex items-center h-auto px-6 w-auto bg-[#F7F8FD] rounded-md">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="#405DC7">
                                                        <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
                                                        </svg>
                                                               <p className="text-[#405DC7] font-bold py-2 pl-1  text-lg-bold">Filter</p>
                                                        </div>
                                                 </div>
                                          </div>
                                          {/* <!-- Tables Invoices --> */}
                                          <Tables />
                                   </div>
                            </div>
                     </DashboardLayouts>
              </React.Fragment>
       )
}

export default Invoices
