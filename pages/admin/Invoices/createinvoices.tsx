import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import Link from 'next/link'
import Image from "next/image"

import LogoUploadImage from "../../../public/invoices/UploadLogo.png"
import CoverImage from "../../../public/invoices/UploadCover.png"

// import dashboard layouts
import DashboardLayouts from '../../../layouts/DashboardLayouts'

import temaOne from "../../../public/tema1.png"
import temaTwo from "../../../public/tema2.png"
import temaThree from "../../../public/tema3.png"
import temaFour from "../../../public/tema4.png"

import checkTema from "../../../public/checklist.png"

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
                                          <Link href="/admin/invoices">Tagihan</Link>
                                          <span className="font-bold"> Tagihan Logo Desain </span> /
                                          <Link href="/admin/invoices/PreviewInvoice"> Preview Invoices </Link>
                                   </p>

                                   {/* Informasi Dasar */}
                                   <div className="w-full bg-white my-8 h-auto rounded-lg px-10 pb-8">
                                          <div className="flex justify-between items-center">
                                                 <h1 className="py-6 text-[28px] font-bold">Informasi Dasar</h1>
                                                 <div className="h-auto w-auto flex rounded-md">
                                                        <p className="text-[black] font-bold py-2 px-4 text-lg-bold">Nomor Tagihan</p>
                                                        <input className="w-[114px] border-[1px] border-[#C2C2C2] rounded py-[8px] px-[16px]" type="text" id="fname" name="fname" defaultValue={2224} disabled />
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
                                          <hr color='#f4f4f4' />
                                          {/* Upload Image */}
                                          <div className="">
                                                 <div className="flex items-center justify-between gap-x-4">
                                                        {/* Upload Logo */}
                                                        <div className="w-[30%]">
                                                               <h1 className="text-md font-bold pt-8 pb-4">Logo Perusahaan</h1>
                                                               <Image src={LogoUploadImage} width={300} height={150} />
                                                        </div>
                                                        {/* Cover Image Upload */}
                                                        <div className="w-[70%]">
                                                               <h1 className="text-md font-bold pt-8 pb-4">Logo Perusahaan</h1>
                                                               <Image src={CoverImage} height={200} />
                                                        </div>
                                                 </div>
                                                 {/* Form Invoices */}
                                                 <div className="flex items-center justify-between gap-x-4">
                                                        <div className="w-full">
                                                               <h1 className="text-md font-bold pt-8 pb-4">Nama Tagihan</h1>
                                                               <input type="search" name="query" className="pl-2 w-full border border-gray-200 py-2 text-sm text-gray-500 bg-white rounded-[4px] focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Cari" value="Tagihan Logo Desain" autoComplete="on" />
                                                        </div>
                                                        <div className="w-full">
                                                               <h1 className="text-md font-bold pt-8 pb-4">Jenis Tagihan</h1>
                                                               <input type="search" name="query" className="pl-2 w-full border border-gray-200 py-2 text-sm text-gray-500 bg-white rounded-[4px] focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Cari" value="Jenis Tagihan" autoComplete="on" />
                                                        </div>
                                                 </div>
                                          </div>

                                          {/* Upload Image */}
                                          <div className="">
                                                 {/* Form Invoices */}
                                                 <div className="flex items-center justify-between gap-x-4">
                                                        <div className="w-full flex flex-col justify-start">
                                                               <h1 className="text-md font-bold pt-8 pb-4">Durasi Projek</h1>
                                                               <div className="w-full flex justify-between items-center gap-x-4">
                                                                      <input type="date" value="date" name="date" className="pl-2 w-full border border-gray-200 py-2 text-sm text-gray-500 bg-white rounded-[4px] focus:outline-blue-800 focus:bg-white focus:text-gray-900" />
                                                                      <input type="date" value="date" name="date" className="pl-2 w-full border border-gray-200 py-2 text-sm text-gray-500 bg-white rounded-[4px] focus:outline-blue-800 focus:bg-white focus:text-gray-900" />
                                                               </div>
                                                        </div>
                                                        <div className="w-full flex flex-col justify-start">
                                                               <h1 className="text-md font-bold pt-8 pb-4">Batas Awal Tagihan</h1>
                                                               <div className="w-full flex justify-between items-center gap-x-4">
                                                                      <input type="date" value="" name="date" className="pl-2 w-full border border-gray-200 py-2 text-sm text-gray-500 bg-white rounded-[4px] focus:outline-blue-800 focus:bg-white focus:text-gray-900" />
                                                                      <input type="date" value="" name="date" className="pl-2 w-full border border-gray-200 py-2 text-sm text-gray-500 bg-white rounded-[4px] focus:outline-blue-800 focus:bg-white focus:text-gray-900" />
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>

                                   {/* Informasi Dasar */}
                                   <div className="w-full bg-white my-8 h-auto rounded-lg px-10 pb-8">
                                          <div className="flex justify-between items-center">
                                                 <h1 className="py-6 text-[28px] font-bold">Tagihan Pekerjaan</h1>
                                          </div>
                                          <hr color='#f4f4f4' />
                                          {/* Keterangan Pekerjaan */}
                                          <div className="flex justify-between items-center gap-x-2">
                                                 <div className="w-full flex justify-between gap-x-2">
                                                        <div className="w-[70%]">
                                                               <h1 className="text-md font-bold pt-8 pb-4">Keterangan Pekerjaan</h1>
                                                               <input type="search" name="query" className="mr-2  pl-2 w-full border border-gray-200 py-2 text-sm text-gray-500 bg-white rounded-[4px] focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Cari" value="Logo Desain Basic" autoComplete="on" />
                                                        </div>
                                                        <div className="w-[30%]">
                                                               <h1 className="text-md font-bold pt-8 pb-4">Qty</h1>
                                                               <input type="search" name="query" className="pl-2 w-full border border-gray-200 py-2 text-sm text-gray-500 bg-white rounded-[4px] focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Cari" value="22" autoComplete="on" />
                                                        </div>
                                                 </div>
                                                 <div className="w-full flex justify-between gap-x-2">
                                                        <div className="w-[70%]">
                                                               <h1 className="text-md font-bold pt-8 pb-4">Tarif</h1>
                                                               <input type="search" name="query" className="w-[90%] mr-2  pl-2 border border-gray-200 py-2 text-sm text-gray-500 bg-white rounded-[4px] focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Cari" value="5.000.000" autoComplete="on" />
                                                        </div>
                                                        <div className="w-[30%]">
                                                               <h1 className="text-md font-bold pt-8 pb-4">Jumlah</h1>
                                                               <input type="search" name="query" className="w-full py-2 text-md font-bold text-black bg-white rounded-[4px] focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Cari" value="IDR 5.000.000" disabled autoComplete="on" />
                                                        </div>
                                                 </div>
                                          </div>
                                          <div className="flex items-center justify-between">
                                                 <div className="flex flex-col">
                                                        <textarea placeholder='Write text' className='p-4 border border-gray-200 rounded-sm my-4' id="" name="" rows={4} cols={0} />
                                                        <button className='bg-blue-50 hover:bg-blue-100 rounded-sm py-2 px-4 text-sm font-bold text-blue-600 text-center'>Tambah Pekerjaan</button>
                                                 </div>
                                          </div>

                                          {/* Keterangan Pekerjaan */}
                                          <div className="grid grid-cols-3 grid-rows-3 mt-8 gap-4">
                                                 <div className=' flex items-center'>
                                                        <h1 className='font-bold'>Biaya Tambahan</h1>
                                                 </div>
                                                 <div className='flex items-center'>
                                                        <h1 className='font-bold'>Persentase</h1>
                                                 </div>
                                                 <div className='mr-10 flex items-center justify-end'>
                                                        <h1 className='font-bold'>Jumlah</h1>
                                                 </div>

                                                 <div className=' flex items-center'>
                                                        <h1>Diskon</h1>
                                                 </div>
                                                 <div className='flex items-center'>
                                                        <input type="search" name="query" className="w-[70%] border border-gray-200 rounded-md py-2 text-md font-bold text-black bg-white pl-2 focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Cari" value="0%" autoComplete="on" />
                                                 </div>
                                                 <div className='mr-10 flex items-center justify-end'>
                                                        <h1>-</h1>
                                                 </div>

                                                 <div className=' flex items-center'>
                                                        <h1>Pajak</h1>
                                                 </div>
                                                 <div className='flex items-center'>
                                                        <input type="search" name="query" className="w-[70%] border border-gray-200 rounded-md py-2 text-md font-bold text-black bg-white pl-2 focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Cari" value="0%" autoComplete="on" />
                                                 </div>
                                                 <div className='mr-10 flex items-center justify-end'>
                                                        <h1>-</h1>
                                                 </div>

                                                 <div className=' flex items-center'>
                                                        <h1>Total</h1>
                                                 </div>
                                                 <div className=''>
                                                 </div>
                                                 <div className='mr-10 flex items-center justify-end'>
                                                        <input type="search" name="query" className="w-[50%] rounded-md py-2 text-md font-bold text-black bg-white pl-2 focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Cari" value="IDR 5.000.000" autoComplete="on" />
                                                 </div>
                                          </div>

                                          <h1 className='font-bold mt-6'>Jangka Waktu Pembayaran</h1>
                                          {/* Keterangan Pekerjaan */}
                                          <div className="grid grid-cols-3 grid-rows-4 mt-2 gap-4">
                                                 <div className=' flex items-center'>
                                                        <h1 className='font-bold'>Keterangan Pekerjaan</h1>
                                                 </div>
                                                 <div className='flex items-center'>
                                                        <h1 className='font-bold'>Persentase</h1>
                                                 </div>
                                                 <div className='mr-10 flex items-center justify-end'>
                                                        <h1 className='font-bold'>Jumlah</h1>
                                                 </div>

                                                 <div className=' flex items-start flex-col'>
                                                        <input type="search" name="query" className="w-[70%] border border-gray-200 rounded-md py-2 text-md font-semibold text-black bg-white pl-2 focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Down Payment ( DP )" value="Down Payment ( DP )" autoComplete="on" />
                                                 </div>
                                                 <div className='flex items-center'>
                                                        <input type="search" name="query" className="w-[70%] border border-gray-200 rounded-md py-2 text-md font-bold text-black bg-white pl-2 focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Cari" value="50%" autoComplete="on" />
                                                 </div>
                                                 <div className='mr-10 flex items-center justify-end'>
                                                        <input type="search" name="query" className="w-[50%] rounded-md py-2 text-md font-bold text-black bg-white pl-2 focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Cari" value="IDR 5.000.000" autoComplete="on" />
                                                 </div>

                                                 <div className=' flex items-start flex-col'>
                                                        <input type="date" value="" name="date" className="w-[70%] pl-2 border border-gray-200 py-2 text-sm text-gray-500 bg-white rounded-[4px] focus:outline-blue-800 focus:bg-white focus:text-gray-900" />
                                                 </div>
                                                 <div className='flex items-center'>
                                                 </div>
                                                 <div className='mr-10 flex items-center justify-end'>

                                                 </div>

                                                 <div className=' flex items-start flex-col'>
                                                        <input type="search" name="query" className="w-[70%] border border-gray-200 rounded-md py-2 text-md font-semibold text-black bg-white pl-2 focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Down Payment ( DP )" value="Down Payment ( DP )" autoComplete="on" />
                                                 </div>
                                                 <div className='flex items-center'>
                                                        <input type="search" name="query" className="w-[70%] border border-gray-200 rounded-md py-2 text-md font-bold text-black bg-white pl-2 focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Cari" value="50%" autoComplete="on" />
                                                 </div>
                                                 <div className='mr-10 flex items-center justify-end'>
                                                        <input type="search" name="query" className="w-[50%] rounded-md py-2 text-md font-bold text-black bg-white pl-2 focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Cari" value="IDR 5.000.000" autoComplete="on" />
                                                 </div>

                                                 <div className=' flex items-start flex-col'>
                                                        <input type="date" value="" name="date" className="w-[70%] pl-2 border border-gray-200 py-2 text-sm text-gray-500 bg-white rounded-[4px] focus:outline-blue-800 focus:bg-white focus:text-gray-900" />
                                                 </div>
                                                 <div className='flex items-center'>
                                                 </div>
                                                 <div className='mr-10 flex items-center justify-end'>

                                                 </div>

                                                 <div className=' flex items-center'>
                                                        <button className='w-[70%] bg-blue-50 hover:bg-blue-100 rounded-sm py-2 px-4 text-sm font-bold text-blue-600 text-center'>Tambah Jangka Waktu</button>
                                                 </div>
                                          </div>
                                   </div>

                                   {/* Informasi Dasar */}
                                   <div className="w-full bg-white my-8 h-auto rounded-lg px-10 pb-8">
                                          <h1 className="py-6 text-[28px] font-bold">Metode Pembayaran</h1>
                                          <div className="w-full px-8 border border-gray-200 rounded-lg">
                                                 {/* Transfer Bank */}
                                                 <div className="transfer-bank pt-8">
                                                        <h1 className="text-md font-bold py-4">Transfer Bank</h1>
                                                        <div className="mt-2">
                                                               <h1 className='font-bold mt-6 mb-2'>Pilih Layanan Bank</h1>
                                                               <select className=" mt-2 font-medium w-full border border-gray-200 rounded-[4px] py-2 px-4 mb-4 text-md bg-white" name="pembayaran" id="pembayaran" >
                                                                      <option className='bg-white font-medium hover:bg-[#405DC7]' value="CSV">PayPal Account</option>
                                                                      <option className='bg-white font-medium hover:bg-[#405DC7]' value="XLS">Bank BCA</option>
                                                               </select>
                                                        </div>
                                                 </div>
                                                 {/* Section Rekening */}
                                                 <div className="w-full flex justify-between gap-x-4 mt-4">
                                                        <div className="w-[50%]">
                                                               <h1 className='font-bold mt-6 mb-2'>Nomor Rekening</h1>
                                                               <input
                                                                      type="search"
                                                                      name="query"
                                                                      className="w-full border border-gray-200 rounded-[4px] mt-2 py-2 px-4 mb-4 text-md text-gray-900  pl-4 focus:outline-blue-800 focus:text-gray-900"
                                                                      placeholder="Tuliskan Nomor Rekening"
                                                                      autoComplete="on"
                                                               />
                                                        </div>
                                                        <div className="w-[50%]">
                                                               <h1 className='font-bold mt-6 mb-2'>Nama Pemilik</h1>
                                                               <input
                                                                      type="search"
                                                                      name="query"
                                                                      className="w-full border border-gray-200 rounded-[4px] mt-2 py-2 px-4 mb-4 text-md text-gray-900  pl-4 focus:outline-blue-800 focus:text-gray-900"
                                                                      placeholder="Tuliskan Nama Pemilik"
                                                                      autoComplete="on"
                                                               />
                                                        </div>
                                                 </div>

                                                 {/* Transfer Bank */}
                                                 <div className="transfer-bank">
                                                        <div className="mt-2">
                                                               <h1 className='font-bold mt-6 mb-2'>Pilih Layanan Bank</h1>
                                                               <select className=" mt-2 font-medium w-full border border-gray-200 rounded-[4px] py-2 px-4 mb-4 text-md bg-white" name="pembayaran" id="pembayaran" >
                                                                      <option className='bg-white font-medium hover:bg-[#405DC7]' value="CSV">PayPal Account</option>
                                                                      <option className='bg-white font-medium hover:bg-[#405DC7]' value="XLS">Bank BCA</option>
                                                               </select>
                                                        </div>
                                                 </div>
                                                 {/* Section Rekening */}
                                                 <div className="w-full flex justify-between gap-x-4 mt-4 pb-8">
                                                        <div className="w-[50%]">
                                                               <h1 className='font-bold mt-6 mb-2'>Nomor Rekening</h1>
                                                               <input
                                                                      type="search"
                                                                      name="query"
                                                                      className="w-full border border-gray-200 rounded-[4px] mt-2 py-2 px-4 mb-4 text-md text-gray-900  pl-4 focus:outline-blue-800 focus:text-gray-900"
                                                                      placeholder="Tuliskan Nomor Rekening"
                                                                      autoComplete="on"
                                                               />
                                                        </div>
                                                        <div className="w-[50%]">
                                                               <h1 className='font-bold mt-6 mb-2'>Nama Pemilik</h1>
                                                               <input
                                                                      type="search"
                                                                      name="query"
                                                                      className="w-full border border-gray-200 rounded-[4px] mt-2 py-2 px-4 mb-4 text-md text-gray-900  pl-4 focus:outline-blue-800 focus:text-gray-900"
                                                                      placeholder="Tuliskan Nama Pemilik"
                                                                      autoComplete="on"
                                                               />
                                                        </div>
                                                 </div>
                                          </div>

                                          <div className="w-full px-8 border border-gray-200 rounded-lg mt-8">
                                                 <h1 className="py-6 text-lg font-bold">Paypal Account</h1>
                                                 <input
                                                        type="search"
                                                        name="query"
                                                        className="w-full border border-gray-200 rounded-[4px] py-2 px-4 mb-4 text-md text-gray-900  pl-4 focus:outline-blue-800 focus:text-gray-900"
                                                        placeholder="Tuliskan Email Paypal Anda"
                                                        autoComplete="on"
                                                 />
                                          </div>
                                   </div>
                                   <div className="w-full bg-white my-4 h-auto rounded-lg px-10 pb-8">
                                          <h1 className="py-6 text-[28px] font-bold">Pengaturan Tagihan</h1>
                                          <h1 className="py-6 text-lg font-bold">Pilih Tema Untuk Tagihan</h1>
                                          <div className="flex items-center justify-between">
                                                 <Image src={temaOne} />
                                                 <Image src={temaTwo} />
                                                 <Image src={temaTwo} />
                                                 <Image src={temaThree} />
                                                 <Image src={temaFour} />
                                          </div>
                                   </div>
                            </div>
                     </DashboardLayouts>
              </React.Fragment >
       )
}

export default createInvoices
