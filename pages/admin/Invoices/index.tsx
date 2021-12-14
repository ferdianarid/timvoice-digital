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
                                                 <h1 className="py-6 text-heading-lg font-bold">Tagihan</h1>
                                                 <div className="h-auto w-auto bg-[#F7F8FD] rounded-md">
                                                        <p className="text-[#405DC7] font-bold py-2 px-4 text-lg-bold">Buat Tagihan Baru</p>
                                                 </div>
                                          </div>
                                          {/* <!-- Button Action --> */}
                                          <div className="flex justify-between items-center">
                                                 {/* <!-- Filter Button --> */}
                                                 <div className="h-auto w-auto bg-[#F7F8FD] rounded-md">
                                                        <p className="text-[#405DC7] font-bold py-2 px-4 text-lg-bold">Filter</p>
                                                 </div>
                                                 {/* <!-- Search Components --> */}
                                                 <div className="h-auto w-auto bg-[#F7F8FD] rounded-md">
                                                        <p className="text-[#405DC7] font-bold py-2 px-4 text-lg-bold">Cari</p>
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
