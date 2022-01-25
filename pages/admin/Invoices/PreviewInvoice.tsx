import React from 'react'
import { NextPage } from 'next'
import Image from "next/image"

// import paid label badge
import PaidLabel from "../../../public/paidLabel.svg"

// import Dashboard Layouts
import DashboardLayouts from '../../../layouts/DashboardLayouts'

// import Cover Images
import CoverOne from "../../../public/CoverOne.png"
import CoverTwo from "../../../public/CoverTwo.png"
import Calendar from "../../../public/calendar.svg"
import bankcentral from "../../../public/bca.png"
import paypal from "../../../public/paypal.png"
import previewFiles from "../../../public/previewfiles.svg"

// import draft status badge
import { DraftStatus } from '../../../components/partials/StateStatus'

// import toast success
import { successNotify } from '../../../components/partials/ToastNotify'

import { Toaster } from 'react-hot-toast'

// import modals export
import ModalExport from '../../../components/ModalExport'

// Preview Invoices
const PreviewInvoice: NextPage = () => {
       // initial state show
       const [isShow, setIsShow] = React.useState(false)
       return (
              <React.Fragment>
                     <DashboardLayouts>
                            <div className="w-[1240px] h-auto px-16 bg-blue-50 pb-16">
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
                                                        {/* invoice details */}
                                                        <div className="invoice-details w-[80%] my-14">
                                                               <p className="font-bold pb-4 text-[16px]">Metode Pembayaran :</p>
                                                               <div className="flex justify-between">
                                                                      <div className="w-[40%]">
                                                                             <Image src={bankcentral} alt="bankbca" />
                                                                      </div>
                                                                      <div className="w-[60%] pl-2">
                                                                             <p className="font-bold pb-2 text-[16px]">Bank BCA</p>
                                                                             <p className='font-bold pb-2 text-[16px] pr-6'>4561061461</p>
                                                                             <p className='font-normal text-[16px] pr-6'>Miftachus Salimah</p>
                                                                      </div>
                                                               </div>
                                                               <hr className='my-4 text-blue-500' />
                                                               <div className="flex justify-between">
                                                                      <div className="w-[40%]">
                                                                             <Image src={paypal} alt="bankbca" />
                                                                      </div>
                                                                      <div className="w-[60%] pl-2">
                                                                             <p className="font-bold pb-2 text-[16px]">PayPal</p>
                                                                             <p className='font-bold text-[16px] pr-6'>faymiftachus @gmail.com</p>
                                                                      </div>
                                                               </div>
                                                               <div className="account my-14">
                                                                      <p className="font-bold pb-2 text-[16px]">Penerbit Tagihan :</p>
                                                                      <p className="font-normal pb-2 text-[16px]">Fay Miftachus</p>
                                                                      <p className="font-bold pb-2 text-[16px]">Account Manager</p>
                                                               </div>
                                                               <div className="invoices my-14">
                                                                      <p className="font-bold pb-2 text-[16px]">Lampiran :</p>
                                                                      <div className="w-full h-[230px] relative flex justify-center items-center border border-[#E0E0E0] rounded-lg">
                                                                             <Image className="-mt-4" src={previewFiles} alt="preview" />
                                                                             <div className="filename -mb-6 flex justify-center items-center rounded-bl-lg py-1 rounded-br-lg absolute border-[#DEE7FC] bottom-0 w-full bg-[#DEE7FC]">
                                                                                    <Image className="-mt-4 scale-[.5]" src={previewFiles} alt="preview" />
                                                                                    <p className="text-[14px] font-bold text-blue-500">ServicePromo.pdf</p>
                                                                             </div>
                                                                      </div>
                                                               </div>
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
                                                                      <p className="font-bold text-[16px]">
                                                                             Batas Awal Tagihan</p>
                                                                      <p className="font-bold text-[16px]">
                                                                             Batas Akhir Tagihan</p>
                                                                      <p className="font-bold text-[16px]">Nomor Tagihan</p>
                                                                      <p className="font-bold text-[16px]">Jumlah Tagihan</p>
                                                               </div>
                                                               {/* value description */}
                                                               <div className="flex justify-between items-center mt-2">
                                                                      <p className="font-normal text-[16px]">
                                                                             <Image src={Calendar} />&nbsp;22/12/2022</p>
                                                                      <p className="font-normal text-[16px]">
                                                                             <Image src={Calendar} />&nbsp;23/12/2023</p>
                                                                      <p className="font-normal text-[16px]">2332</p>
                                                                      <p className="font-bold text-blue-700 text-[20px]">IDR 3.589.000</p>
                                                               </div>
                                                        </div>
                                                        <hr className='text-blue-800 font-bold mt-16 mb-6' />
                                                        {/* heading description */}
                                                        <div className="flex justify-between items-center">
                                                               <div className="w-1/4">
                                                                      <p className="font-bold text-[16px]">Keterangan Pekerjaan</p>
                                                               </div>
                                                               <div className="w-1/4 flex justify-center">
                                                                      <p className="font-bold text-[16px]">Qty</p>
                                                               </div>
                                                               <div className="w-1/4  flex justify-center">
                                                                      <p className="font-bold text-[16px]">Tarif</p>
                                                               </div>
                                                               <div className="w-1/4  flex justify-end">
                                                                      <p className="font-bold text-[16px]">Jumlah</p>
                                                               </div>
                                                        </div>
                                                        <hr className='text-[#E0E0E0] my-6' />

                                                        {/* Content Package */}
                                                        <div className="flex justify-between items-center mt-6">
                                                               <div className="w-1/4">
                                                                      <div className="">
                                                                             <p className="font-bold leading-6 text-[16px] pb-2">Web Design Basic Package</p>
                                                                             <p className="font-normal leading-6 text-[16px]">- Customize Web Design</p>
                                                                             <p className="font-normal leading-6 text-[16px]">- Responsive Design</p>
                                                                             <p className="font-normal leading-6 text-[16px]">- Include Project Management</p>
                                                                             <p className="font-normal leading-6 text-[16px]">- Include UI/UX Design</p>
                                                                      </div>
                                                               </div>
                                                               <div className="w-1/4 flex justify-center">
                                                                      <p>45</p>
                                                               </div>
                                                               <div className="w-1/4 flex justify-end">
                                                                      <p>IDR 5.875.000</p>
                                                               </div>
                                                               <div className="w-1/4 flex justify-end">
                                                                      <p>IDR 5.875.000</p>
                                                               </div>
                                                        </div>

                                                        {/* Content Package */}
                                                        <div className="flex justify-between items-center mt-6">
                                                               <div className="w-1/4">
                                                                      <div className="">
                                                                             <p className="font-bold leading-6 text-[16px] pb-2">Kubernetes Expert Package</p>
                                                                             <p className="font-normal leading-6 text-[16px]">- Dockerization Image</p>
                                                                             <p className="font-normal leading-6 text-[16px]">- Configuration CI CD</p>
                                                                             <p className="font-normal leading-6 text-[16px]">- Include Project Management</p>
                                                                             <p className="font-normal leading-6 text-[16px]">- Automated Testing</p>
                                                                      </div>
                                                               </div>
                                                               <div className="w-1/4 flex justify-center">
                                                                      <p>45</p>
                                                               </div>
                                                               <div className="w-1/4 flex justify-end">
                                                                      <p>IDR 5.875.000</p>
                                                               </div>
                                                               <div className="w-1/4 flex justify-end">
                                                                      <p>IDR 5.875.000</p>
                                                               </div>
                                                        </div>

                                                        <hr className='text-blue-800 font-bold mt-16 mb-6' />
                                                        {/* heading description */}
                                                        <div className="flex justify-between items-center">
                                                               <p className="font-bold text-[16px]">Biaya Tambahan</p>
                                                               <p className="font-bold text-[16px]">Persentase</p>
                                                               <p className="font-bold text-[16px]">Jumlah</p>
                                                        </div>
                                                        <hr className='text-[#E0E0E0] my-6' />

                                                        {/* Record */}
                                                        <div className="flex justify-between items-center flex-row py-2 my-1">
                                                               {/* Content Package */}
                                                               <div className="flex flex-col w-1/3">
                                                                      <p className="font-normal leading-6 text-[16px] pb-2">Diskon</p>
                                                               </div>
                                                               {/* Content Package */}
                                                               <div className="flex w-1/3 justify-center text-center">
                                                                      <p className="font-normal leading-6 text-[16px] pb-2">0%</p>
                                                               </div>
                                                               {/* Content Package */}
                                                               <div className="flex flex-col text-right w-1/3">
                                                                      <p className="font-normal leading-6 text-[16px] pb-2">-</p>
                                                               </div>
                                                        </div>
                                                        <div className="flex justify-between items-center flex-row py-2 my-1">
                                                               {/* Content Package */}
                                                               <div className="flex flex-col w-1/3">
                                                                      <p className="font-normal leading-6 text-[16px] pb-2">Pajak</p>
                                                               </div>
                                                               {/* Content Package */}
                                                               <div className="flex w-1/3 justify-center text-center">
                                                                      <p className="font-normal leading-6 text-[16px] pb-2">0%</p>
                                                               </div>
                                                               {/* Content Package */}
                                                               <div className="flex flex-col text-right w-1/3">
                                                                      <p className="font-normal leading-6 text-[16px] pb-2">-</p>
                                                               </div>
                                                        </div>
                                                        <div className="flex justify-between items-center flex-row py-2 my-1">
                                                               {/* Content Package */}
                                                               <div className="">
                                                                      <p className="font-bold leading-6 text-[16px] pb-2">Total :</p>
                                                               </div>
                                                               {/* Content Package */}
                                                               <div className="">
                                                                      <p className="font-bold leading-6 text-[16px] pb-2">IDR 5.888.000</p>
                                                               </div>
                                                        </div>

                                                        <p className="font-bold text-[16px] mt-10 mb-6">Jangka Waktu Pembayaran</p>
                                                        <hr className='text-blue-800 font-bold mb-6' />

                                                        {/* heading description */}
                                                        <div className="flex justify-between items-center">
                                                               <p className="font-bold text-[16px]">Deskripsi</p>
                                                               <p className="font-bold text-[16px]">Persentase</p>
                                                               <p className="font-bold text-[16px]">Jumlah</p>
                                                        </div>
                                                        <hr className='text-[#E0E0E0] my-6' />
                                                        {/* Waktu Pembayaran */}
                                                        <div className="flex justify-between items-center flex-row py-2 my-1 bg-[#f2f3ff]">
                                                               {/* Content Package */}
                                                               <div className="flex flex-col w-1/4">
                                                                      <p className="font-bold leading-6 text-[16px] pb-2">Down Payment ( DP )</p>
                                                                      <p className="font-normal leading-6 text-[16px] pb-2">12 November 2022</p>
                                                               </div>
                                                               <div className="flex w-1/4">
                                                                      <Image src={PaidLabel} alt="paid" />
                                                               </div>
                                                               {/* Content Package */}
                                                               <div className="flex w-1/4 justify-start text-center">
                                                                      <p className="font-normal leading-6 text-[16px] pb-2">50%</p>
                                                               </div>
                                                               {/* Content Package */}
                                                               <div className="flex flex-col text-right w-1/4">
                                                                      <p className="font-normal leading-6 text-[16px] pb-2">IDR 2.456.888</p>
                                                               </div>
                                                        </div>
                                                        {/* Waktu Pembayaran */}
                                                        <div className="flex justify-between items-center flex-row py-2 my-1">
                                                               {/* Content Package */}
                                                               <div className="flex flex-col w-1/4">
                                                                      <p className="font-bold leading-6 text-[16px] pb-2">Second Term</p>
                                                                      <p className="font-normal leading-6  text-[16px] pb-2">12 Desember 2022</p>
                                                               </div>
                                                               <div className="flex w-1/4">
                                                                      {/* <Image src={PaidLabel} alt="paid" /> */}
                                                               </div>
                                                               {/* Content Package */}
                                                               <div className="flex flex-col w-1/4 justify-start">
                                                                      <p className="font-normal leading-6  text-[16px] pb-2">25%</p>
                                                               </div>
                                                               {/* Content Package */}
                                                               <div className="flex flex-col text-right w-1/4">
                                                                      <p className="font-normal leading-6 text-[16px] pb-2">IDR 2.456.888</p>
                                                               </div>
                                                        </div>
                                                        {/* Waktu Pembayaran */}
                                                        <div className="flex justify-between items-center flex-row py-2 my-1">
                                                               {/* Content Package */}
                                                               <div className="flex flex-col w-1/4">
                                                                      <p className="font-bold leading-6 text-[16px] pb-2">Paid Off : Last Term</p>
                                                                      <p className="font-normal leading-6 text-[16px] pb-2">12 Januari 2023</p>
                                                               </div>
                                                               <div className="flex w-1/4">
                                                                      {/* <Image src={PaidLabel} alt="paid" /> */}
                                                               </div>
                                                               {/* Content Package */}
                                                               <div className="flex flex-col w-1/4 justify-start">
                                                                      <p className="font-normal leading-6 text-[16px] pb-2">25%</p>
                                                               </div>
                                                               {/* Content Package */}
                                                               <div className="flex flex-col text-right w-1/4">
                                                                      <p className="font-normal leading-6 text-[16px] pb-2">IDR 2.456.888</p>
                                                               </div>
                                                        </div>
                                                        <hr className='text-blue-800 font-bold mt-16 mb-6' />
                                                        {/* heading description */}
                                                        <div className="flex justify-between items-center">
                                                               <p className="font-bold text-[16px]">Catatan Untuk Klien</p>
                                                        </div>
                                                        <hr className='text-[#E0E0E0] my-6' />
                                                        <p className="font-bold leading-6 text-[16px] pb-2">Service Agreement</p>
                                                        <p className="font-normal leading-6 text-[16px] pb-2">- This project will start after the 50% down payment</p>
                                                        <p className="font-normal leading-6 text-[16px] pb-2">- The processing time could be delayed or shorter in accordance with the agreement
                                                               between the two parties regarding the design processing</p>
                                                        <p className="font-normal leading-6 text-[16px] pb-2">- Revision slots are only valid when the design is still in the draft stage and have not been
                                                               approved by the client.</p>
                                                        <p className="font-normal leading-6 text-[16px] pb-2">- Final invoice will be sent, and the original/raw file will be sent after the payment paid off
                                                               everyterm.</p>
                                                 </div>
                                          </div>
                                   </div>
                                   {/* end section */}
                                   <div className="w-full flex">
                                          <div className="w-[40%]">
                                                 <button className='py-2 px-4 rounded-md flex items-center bg-white font-bold'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                               <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                        </svg>Sunting Detail Tagihan</button>
                                          </div>
                                          <div className="w-[60%] flex gap-x-5 justify-end">
                                                 <button className='py-2 px-4 rounded-md flex items-center bg-white font-bold'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                               <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                                               <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                                                        </svg>Tandai Pembayaran</button>
                                                 <button className='py-2 px-4 rounded-md flex items-center bg-white font-bold'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                               <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                                                        </svg>Unduh PDF</button>
                                                 <button onClick={() => setIsShow(!isShow)} className='py-2 bg-[#405DC7] hover:bg-[#324daf] text-white px-4 rounded-md flex items-center font-bold'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="white">
                                                               <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                                               <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                                                        </svg>Kirim Tagihan</button>
                                                 {
                                                        isShow && <ModalExport />
                                                 }
                                                 <Toaster />
                                          </div>
                                   </div>
                            </div>
                     </DashboardLayouts>
              </React.Fragment >
       )
}

export default PreviewInvoice
