import React from 'react'
import Head from 'next/head'
import DashboardLayouts from '../../../layouts/DashboardLayouts'
import { NextPage } from 'next'
import Link from 'next/link'

// pages create invoices
const createInvoices: NextPage = () => {
       return (
              <React.Fragment>
                     <Head>
				<title>Invoices - Timvoice</title>
				<meta name="description" content="invoices invoice" />
				<meta httpEquiv="X-UA Compatible" content="IE-Edge" />
				<meta name="author" content="timvoice corp" />
			</Head>
                     {/* Dashboard Layouts */}
                     <DashboardLayouts>
                     <div className="w-[1240px] h-auto px-16 bg-blue-50">
                            <p className="py-8">
                                   <Link href="/admin/invoices">Tagihan</Link> /
                                   <span className="font-bold"> Tagihan Logo Desain </span> /
                                   <Link href="/admin/invoices/PreviewInvoice"> Preview Invoices </Link>
                            </p>
                            <div className="w-full bg-white my-8 h-auto rounded-lg px-10">
                            <div className="flex justify-between items-center">
                            <h1 className="py-6 text-[28px] font-bold">Informasi Dasar</h1>
                            <div className="h-auto w-auto flex rounded-md">
                                   <p className="text-[black] font-bold py-2 px-4 text-lg-bold">Nomor Tagihan</p>
                                   <input className="w-[114px] border-[1px] border-[#C2C2C2] rounded py-[8px] px-[16px]" type="text" id="fname" name="fname" defaultValue={2224} />
                            </div>
                            <div className="flex">
                                   <div className="flex items-center pr-[12px]">
                                          <p className="text-lg-bold font-bold">Mata Uang</p>
                                   </div>
                                   <div>
                                          <div className="dropdown inline-block relative">
                                                 <button className="border-[1px] border-[#C2C2C2] text-black font-semibold py-2 px-4 rounded inline-flex items-center">
                                                        <img src="../../../static/iconDashboard/flag.svg" alt="" />
                                                        &nbsp;
                                                        <span className="mr-1">IDR</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                               <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                        </svg>
                                                 </button>
                                                 <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                                                        <li className="">
                                                               <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">USD</a>
                                                        </li>
                                                        <li className="">
                                                               <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#" >CNY</a>
                                                        </li>
                                                        <li className="">
                                                               <a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">SAR</a>
                                                        </li>
                                                 </ul>
                                          </div>
                                   </div>
                                   </div>
                            </div>
                            </div>
                     </div>

          
              </DashboardLayouts>
              </React.Fragment>
       )
}

export default createInvoices
