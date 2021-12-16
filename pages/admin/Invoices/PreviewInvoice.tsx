import React from 'react'
import { NextPage } from 'next'
import Image from "next/image"

// import Dashboard Layouts
import DashboardLayouts from '../../../layouts/DashboardLayouts'

// import cover images
import CoverOne from "../../../public/CoverOne.png"
import CoverTwo from "../../../public/CoverTwo.png"

import { DraftStatus } from '../../../components/partials/StateStatus'

// Preview Invoices
const PreviewInvoice : NextPage = () => {
       return (
              <React.Fragment>
                     <DashboardLayouts>
                     <div className="w-[1240px] h-auto px-16 bg-blue-50">
                            <div className="w-full bg-white my-8 h-auto rounded-lg p-8">
                                   {/* invoices cover */}
                                   <div className="flex justify-between gap-x-4 h-[200px] mb-8">
                                          <Image src={CoverOne} alt='cover' className='object-cover rounded-md' />
                                          <Image src={CoverTwo} alt='cover' className='object-cover rounded-md' />
                                   </div>
                                   {/* preview invoices */}
                                   <div className="w-full flex">
                                          {/* left section */}
                                          <div className="w-[330px]">
                                                 {/* invoices */}
                                                 <div className="invoices">
                                                        <p className="font-bold pb-2 text-[16px]">Tagihan Untuk :</p>
                                                        <p className="font-normal pb-2 text-[16px]">Udin Alexander</p>
                                                        <p className="font-normal pb-2 text-[16px]">Sample Company LLC</p>
                                                        <p className="font-normal pb-2 text-[16px]">Client Address, NY 12345</p>
                                                        <p className="font-normal text-[16px]">Company@sample.com</p>
                                                 </div>
                                                 {/* invoice details */}
                                                 <div className="invoice-details my-14">
                                                        <p className="font-bold pb-2 text-[16px]">Detail Tagihan :</p>
                                                        <p className="font-normal pb-2 text-[16px]">Mata Uang : IDR</p>
                                                        <p className="font-normal pb-2 text-[16px]">Durasi : 2 Bulan</p>
                                                 </div>
                                          </div>
                                          {/* right section */}
                                          <div className="w-full">
                                                 {/* heading */}
                                                 <div className="heading">
                                                        <div className="flex justify-between items-center">
                                                               <p className="font-bold pb-2 text-4xl">Tagihan Logo Desain</p>
                                                               <div className="w-[100px]">
                                                                      <DraftStatus />
                                                               </div>
                                                        </div>
                                                        {/* heading description */}
                                                        <div className="flex justify-between items-center mt-9">
                                                               <p className="font-bold text-[16px]">Batas Awal Tagihan</p>
                                                               <p className="font-bold text-[16px]">Batas Akhir Tagihan</p>
                                                               <p className="font-bold text-[16px]">Nomor Tagihan</p>
                                                               <p className="font-bold text-[16px]">Jumlah Tagihan</p>
                                                        </div>
                                                        {/* value description */}
                                                        <div className="flex justify-between items-center mt-2">
                                                               <p className="font-normal text-[16px]">22/12/2022</p>
                                                               <p className="font-normal text-[16px]">23/12/2023</p>
                                                               <p className="font-normal text-[16px]">2332</p>
                                                               <p className="font-bold text-blue-700 text-[20px]">IDR 3.589.000</p>
                                                        </div>
                                                 </div>
                                                 <hr className='text-blue-800 font-bold mt-16 mb-6' />
                                                 {/* heading description */}
                                                 <div className="flex justify-between items-center">
                                                        <p className="font-bold text-[16px]">Keterangan Pekerjaan</p>
                                                        <p className="font-bold text-[16px]">Qty</p>
                                                        <p className="font-bold text-[16px]">Tarif</p>
                                                        <p className="font-bold text-[16px]">Jumlah</p>
                                                 </div>
                                                 <hr className='text-[#E0E0E0] my-6' />
                                                 {/* Content Package */}
                                                 <div className="flex justify-between items-center">
                                                        <div className="">
                                                               <p className="font-bold leading-6 text-[16px] pb-2">Logo Desain Full Package</p>
                                                               <p className="font-normal leading-6 text-[16px]">- Customize Web Design</p>
                                                               <p className="font-normal leading-6 text-[16px]">- 12 Pages for  3 module :</p>
                                                               <p className="font-normal leading-6 text-[16px] pl-3">a. Patient</p>
                                                               <p className="font-normal leading-6 text-[16px] pl-3">b. Appointment</p>
                                                               <p className="font-normal leading-6 text-[16px] pl-3">c. Registration</p>
                                                               <p className="font-normal leading-6 text-[16px]">- Custom motion design not include</p>
                                                        </div>
                                                        <p>22</p>
                                                        <p>IDR 2.875.000</p>
                                                        <p>IDR 2.875.000</p>
                                                 </div>
                                                 {/* Content Package */}
                                                 <div className="flex justify-between items-center mt-6">
                                                        <div className="">
                                                               <p className="font-bold leading-6 text-[16px] pb-2">Web Design Basic Package</p>
                                                               <p className="font-normal leading-6 text-[16px]">- Customize Web Design</p>
                                                               <p className="font-normal leading-6 text-[16px]">- Responsive Design</p>
                                                               <p className="font-normal leading-6 text-[16px]">- Include Project Management</p>
                                                               <p className="font-normal leading-6 text-[16px]">- Include UI/UX Design</p>
                                                        </div>
                                                        <p>45</p>
                                                        <p>IDR 5.875.000</p>
                                                        <p>IDR 5.875.000</p>
                                                 </div>
                                                 {/* Content Package */}
                                                 <div className="flex justify-between items-center mt-6">
                                                        <div className="">
                                                               <p className="font-bold leading-6 text-[16px] pb-2">Kubernetes Expert Package</p>
                                                               <p className="font-normal leading-6 text-[16px]">- Configuration CI CD</p>
                                                               <p className="font-normal leading-6 text-[16px]">- Dockerization Image</p>
                                                               <p className="font-normal leading-6 text-[16px]">- Include Project Management</p>
                                                               <p className="font-normal leading-6 text-[16px]">Integrations Testing</p>
                                                        </div>
                                                        <p>45</p>
                                                        <p>IDR 5.875.000</p>
                                                        <p>IDR 5.875.000</p>
                                                 </div>
                                                 <hr className='text-blue-800 font-bold mt-16 mb-6' />
                                                 {/* heading description */}
                                                 <div className="flex justify-between items-center">
                                                        <p className="font-bold text-[16px]">Biaya Tambahan</p>
                                                        <p className="font-bold text-[16px]">Persentase</p>
                                                        <p className="font-bold text-[16px]">Jumlah</p>
                                                 </div>
                                                 <hr className='text-[#E0E0E0] my-6' />
                                                 {/* Content Package */}
                                                 <div className="flex justify-between items-center">
                                                        <p className="font-bold leading-6 text-[16px] pb-2">Diskon</p>
                                                        <p className="font-bold leading-6 text-[16px] pb-2 text-left">0%</p>
                                                        <p className="font-bold leading-6 text-[16px] pb-2">-</p>
                                                 </div>
                                                 {/* Content Package */}
                                                 <div className="flex justify-between items-center">
                                                        <p className="font-bold leading-6 text-[16px] pb-2">Pajak</p>
                                                        <p className="font-bold leading-6 text-[16px] pb-2 text-left">0%</p>
                                                        <p className="font-bold leading-6 text-[16px] pb-2">-</p>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>
                     </DashboardLayouts>
              </React.Fragment>
       )
}

export default PreviewInvoice
