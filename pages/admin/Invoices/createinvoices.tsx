import React, { SyntheticEvent, useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import Image from 'next/image'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

// import images
import LogoUploadImage from "../../../public/invoices/UploadLogo.png"
import CoverImage from "../../../public/invoices/UploadCover.png"

// import dashboard layouts
import DashboardLayouts from '../../../layouts/DashboardLayouts'

//  select theme
import temaOne from "../../../public/tema1.png"
import temaTwo from "../../../public/tema2.png"
import temaThree from "../../../public/tema3.png"
import temaFour from "../../../public/tema4.png"

// import button and access token
import SecondaryButton from '../../../components/partials/SecondaryButton'
import { access_token } from "../../../library/token"


// pages create invoices
const createInvoices: NextPage = () => {
       const router = useRouter()
       const [notification, setNotification] = useState("")

       const [tarif, setTarif] = useState(0)
       const [jobs, setJobs] = useState("")
       const [jumlah, setJumlah] = useState(0)
       const [quantity, setQuantity] = useState(0)
       const [invoiceType, setInvoiceType] = useState("")
       const [invoiceName, setInvoiceName] = useState("")
       const [durationStart, setDurationStart] = useState("")
       const [durationEnd, setDurationEnd] = useState("")
       const [dateIssued, setDateIssued] = useState("")
       const [dateDue, setDateDue] = useState("")
       const [currencyType, setCurrencyType] = useState("")
       const [itemsDescriptions, setItemDescriptions] = useState("")
       const [totalValue, setTotalValue] = useState("")

       const [downPayment, setDownPayment] = useState("")
       const [jumlahDownPayment, setJumlahDownPayment] = useState("")
       const [valueDownPayment, setValueDownPayment] = useState("")

       const [downPayments, setDownPayments] = useState("")
       const [jumlahDownPayments, setJumlahDownPayments] = useState("")
       const [valueDownPayments, setValueDownPayments] = useState("")

       const [diskon, setDiskon] = useState(0)
       const [pajak, setPajak] = useState(0)

       const [layananBank, setLayananBank] = useState("")
       const [namaPemilik, setNamaPemilik] = useState("")
       const [nomorRekening, setNomorRekening] = useState("")
       const [catatanClient, setCatatanClient] = useState("")
       const [namaPenerbit, setNamaPenerbit] = useState("")
       const [jabatanPenerbit, setJabatanPenerbit] = useState("")
       const [randomNumber, setRandomNumber] = useState(1000)

       // mount after page has reload
       useEffect(() => {
              const valueNumber: number = Math.floor(1000 + Math.random() * 5000)
              setRandomNumber(valueNumber)
              console.log(valueNumber)
       }, [])

       // calculate total invoice price
       const sumInvoicePrice: number = quantity * tarif | 0
       console.log(`Bruto Price : ${sumInvoicePrice}`)

       // total discount
       const discountPrice: number = sumInvoicePrice * ((diskon + pajak) / 100) | 0
       console.log(`Discount : ${discountPrice}`)

       // value price after discount
       const totalInvoicePrice = sumInvoicePrice - discountPrice
       console.log(`Price after Discount : ${totalInvoicePrice}`)

       // Object
       const data: Object = {
              // Section One
              no_tagihan: randomNumber,
              title: invoiceName,
              type_id: invoiceType,
              currency_id: currencyType,
              duration_start: durationStart,
              duration_end: durationEnd,
              date_issued: dateIssued,
              date_due: dateDue,

              // Section Two || Jobs Invoice
              item_name: jobs,
              item_qty: quantity,
              item_total: tarif,
              jumlah: totalInvoicePrice,
              item_description: itemsDescriptions,

              // Section Three 
              term_title: downPayment,
              term_percent: jumlahDownPayment,
              term_total: valueDownPayment,

              // Section Four
              term_title1: downPayments,
              term_percent1: jumlahDownPayments,
              term_total1: valueDownPayments,
              add_percent1: diskon,
              add_percent2: pajak,

              // Section Five
              layananBank: layananBank,
              namaPemilik: namaPemilik,
              nomorRekening: nomorRekening,
              notes: catatanClient,
              publisher_name: namaPenerbit,
              publisher_position: jabatanPenerbit
       }

       const sendData = async (event: SyntheticEvent) => {
              event.preventDefault()

              // check token in local storage
              const access_token = localStorage.getItem("token")

              // function post data invoices
              const PostCreateInvoices = await fetch("http://localhost:8000/api/invoice", {
                     method: "POST",
                     headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${access_token}`
                     },
                     // body: data
              })

              // log data in console
              console.log(data)

              // check data submit status
              if (!PostCreateInvoices.ok) {
                     // set failed notification
                     setNotification("Failed Create Invoices")
                     console.log(notification)
              }
              //  set success notification
              setNotification("Success Create Invoices")
              console.log(notification)

              // redirect user to dashboard page
              // router.push("/admin/dashboard")
       }

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
                                          <span className="font-bold"> Tagihan Logo Desain </span>
                                          <Link href="/admin/invoices/PreviewInvoice"> Preview Invoices </Link>
                                   </p>
                                   {/* Informasi Dasar */}
                                   <div className="w-full bg-white my-8 h-auto rounded-lg px-10 pb-8">
                                          <div className="flex justify-between items-center">
                                                 <h1 className="py-6 text-[28px] font-bold">Informasi Dasar</h1>
                                                 <div className="h-auto w-auto flex rounded-md">
                                                        <p className="text-[black] font-bold py-2 px-4 text-lg-bold">Nomor Tagihan</p>
                                                        {/* Generate random 4 digit random * 1000 */}
                                                        <input className="w-[114px] border-[1px] border-[#c4b6b6] rounded py-[8px] px-[16px]" type="text" id="fname" name="fname" value={randomNumber} disabled />
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
                                                                             {/* Select Currency Type */}
                                                                             <select className='bg-white' onChange={(event) => setCurrencyType(event.target.value)} value={currencyType} name="currency">
                                                                                    <option value="1">IDR</option>
                                                                                    <option value="2">USD</option>
                                                                                    <option value="3">RGT</option>
                                                                                    <option value="4">AUD</option>
                                                                             </select>
                                                                      </button>
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
                                                               {/* Nama Tagihan */}
                                                               <h1 className="text-md font-bold pt-8 pb-4">Nama Tagihan</h1>
                                                               <input type="text" onChange={(event) => setInvoiceName(event.target.value)} name="invoiceName" className="pl-2 w-full border border-gray-200 py-2 text-sm text-gray-500 bg-white rounded-[4px] focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Tagihan Logo" autoComplete="on" />
                                                        </div>
                                                        <div className="w-full">
                                                               {/* Jenis Tagihan */}
                                                               <h1 className="text-md font-bold pt-8 pb-4">Jenis Tagihan</h1>
                                                               <select className='bg-white w-full border border-gray-200 rounded-sm p-2' onChange={(event) => setInvoiceType(event.target.value)} name="invoiceType">
                                                                      <option value="1">Tagihan Satuan</option>
                                                                      <option value="2">Tagihan Bulanan</option>
                                                               </select>
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
                                                                      {/* Duration Start  */}
                                                                      <input type="date" onChange={(event) => setDurationStart(event.target.value)} name="durationStart" className="pl-2 w-full border border-gray-200 py-2 text-sm text-gray-500 bg-white rounded-[4px] focus:outline-blue-800 focus:bg-white focus:text-gray-900" />
                                                                      {/* Duration End  */}
                                                                      <input type="date" onChange={(event) => setDurationEnd(event.target.value)} name="durationEnd" className="pl-2 w-full border border-gray-200 py-2 text-sm text-gray-500 bg-white rounded-[4px] focus:outline-blue-800 focus:bg-white focus:text-gray-900" />
                                                               </div>
                                                        </div>
                                                        <div className="w-full flex flex-col justify-start">
                                                               <h1 className="text-md font-bold pt-8 pb-4">Batas Awal Tagihan</h1>
                                                               <div className="w-full flex justify-between items-center gap-x-4">
                                                                      {/* Date Issued */}
                                                                      <input type="date" onChange={(event) => setDateIssued(event.target.value)} name="dateIssued" className="pl-2 w-full border border-gray-200 py-2 text-sm text-gray-500 bg-white rounded-[4px] focus:outline-blue-800 focus:bg-white focus:text-gray-900" />
                                                                      {/* Date Due*/}
                                                                      <input type="date" onChange={(event) => setDateDue(event.target.value)} name="dateDue" className="pl-2 w-full border border-gray-200 py-2 text-sm text-gray-500 bg-white rounded-[4px] focus:outline-blue-800 focus:bg-white focus:text-gray-900" />
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
                                                               {/* Keterangan Pekerjaan */}
                                                               <input type="text" name="item_name" onChange={(event) => setJobs(event.target.value)} className="mr-2  pl-2 w-full border border-gray-200 py-2 text-sm text-gray-500 bg-white rounded-[4px] focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Logo Desain Basic" autoComplete="on" />
                                                        </div>
                                                        <div className="w-[30%]">
                                                               <h1 className="text-md font-bold pt-8 pb-4">Qty</h1>
                                                               {/* Jumlah Quantity */}
                                                               <input type="text" onChange={(event) => setQuantity(parseInt(event.target.value))} name="quantity" className="pl-2 w-full border border-gray-200 py-2 text-sm text-gray-500 bg-white rounded-[4px] focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="22" autoComplete="on" />
                                                        </div>
                                                 </div>
                                                 <div className="w-full flex justify-between gap-x-2">
                                                        <div className="w-[70%]">
                                                               <h1 className="text-md font-bold pt-8 pb-4">Tarif</h1>
                                                               {/* Jumlah Tarif */}
                                                               <input type="text" onChange={(event) => setTarif(parseInt(event.target.value))} name="tarif" className="w-[90%] mr-2  pl-2 border border-gray-200 py-2 text-sm text-gray-500 bg-white rounded-[4px] focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="5000000" autoComplete="on" />
                                                        </div>
                                                        <div className="w-[30%]">
                                                               <h1 className="text-md font-bold pt-8 pb-4">Jumlah</h1>
                                                               {/*Jumlah */}
                                                               <h1 className="font-bold text-md mt-[5px]">{sumInvoicePrice}</h1>
                                                        </div>
                                                 </div>
                                          </div>
                                          <div className="flex items-center justify-between">
                                                 <div className="flex flex-col">
                                                        {/* Items Description */}
                                                        <textarea onChange={(event) => setItemDescriptions(event.target.value)} placeholder='Write text' className='p-4 border border-gray-200 rounded-sm my-4' id="" name="" rows={4} cols={0} />
                                                        <button className='bg-blue-50 hover:bg-blue-100 rounded-sm py-2 px-4 text-sm font-bold text-blue-600 text-center'>Tambah Pekerjaan</button>
                                                 </div>
                                          </div>
                                          {/* Keterangan Pekerjaan */}
                                          <div className="grid grid-cols-3 grid-rows-3 mt-8 gap-4">
                                                 {/* Biaya Tambahan */}
                                                 <div className=' flex items-center'>
                                                        <h1 className='font-bold'>Biaya Tambahan</h1>
                                                 </div>
                                                 {/* Presentase */}
                                                 <div className='flex items-center'>
                                                        <h1 className='font-bold'>Persentase</h1>
                                                 </div>
                                                 {/* Jumlah */}
                                                 <div className='mr-10 flex items-center justify-end'>
                                                        <h1 className='font-bold'>Jumlah</h1>
                                                 </div>
                                                 {/* Diskon || Pajak */}
                                                 <div className=' flex items-center'>
                                                        <h1>Diskon</h1>
                                                 </div>
                                                 <div className='flex items-center'>
                                                        <input onChange={event => setDiskon(parseInt(event.target.value))} type="text" className="w-[70%] border border-gray-200 rounded-md py-2 text-md font-bold text-black bg-white pl-2 focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Diskon" autoComplete="on" />
                                                 </div>
                                                 {/* Empty Fields */}
                                                 <div className='mr-10 flex items-center justify-end'>
                                                        <h1 className='font-bold text-md'>{totalInvoicePrice}</h1>
                                                 </div>
                                                 {/* Pajak */}
                                                 <div className=' flex items-center'>
                                                        <h1>Pajak</h1>
                                                 </div>
                                                 <div className='flex items-center'>
                                                        <input onChange={event => setPajak(parseInt(event.target.value))} type="text" className="w-[70%] border border-gray-200 rounded-md py-2 text-md font-bold text-black bg-white pl-2 focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Pajak" autoComplete="on" />
                                                 </div>
                                                 {/* Empty Fields */}
                                                 <div className='mr-10 flex items-center justify-end'>
                                                        <h1 className='font-bold text-md'>{totalInvoicePrice}</h1>
                                                 </div>
                                                 {/* Heading Total*/}
                                                 <div className=' flex items-center'>
                                                        <h1 className='font-bold text-md'>Total</h1>
                                                 </div>
                                                 <div className=''>
                                                 </div>
                                                 {/* Total  */}
                                                 <div className='mr-10 flex items-center justify-end'>
                                                        <h1 className="font-bold text-md mt-[5px]">{totalInvoicePrice}</h1>
                                                 </div>
                                          </div>

                                          <h1 className='font-bold mt-6'>Jangka Waktu Pembayaran</h1>
                                          {/* Keterangan Pekerjaan */}
                                          <div className="grid grid-cols-3 grid-rows-4 mt-2 gap-4">
                                                 {/* keterangan pekerjaan */}
                                                 <div className=' flex items-center'>
                                                        <h1 className='font-bold'>Keterangan Pekerjaan</h1>
                                                 </div>
                                                 {/* labell presentase */}
                                                 <div className='flex items-center'>
                                                        <h1 className='font-bold'>Persentase</h1>
                                                 </div>
                                                 {/* label jumlah */}
                                                 <div className='mr-10 flex items-center justify-end'>
                                                        <h1 className='font-bold'>Jumlah</h1>
                                                 </div>

                                                 {/* Down Payment */}
                                                 <div className=' flex items-start flex-col'>
                                                        <input type="text" onChange={event => setDownPayment(event.target.value)} name="dp" className="w-[70%] border border-gray-200 rounded-md py-2 text-md font-semibold text-black bg-white pl-2 focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Down Payment ( DP )" autoComplete="on" />
                                                 </div>
                                                 {/* Jumlah Down Payment */}
                                                 <div className='flex items-center'>
                                                        <input type="text" onChange={event => setJumlahDownPayment(event.target.value)} name="jumlahdp" className="w-[70%] border border-gray-200 rounded-md py-2 text-md font-bold text-black bg-white pl-2 focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="50%" autoComplete="on" />
                                                 </div>
                                                 {/* value total DP */}
                                                 <div className='mr-10 flex items-center justify-end'>
                                                        <input type="text" onChange={event => setValueDownPayment(event.target.value)} name="valuedp" className="w-[50%] rounded-md py-2 text-md font-bold text-black bg-white pl-2 focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="IDR 5.000.000" autoComplete="on" />
                                                 </div>

                                                 <div className=' flex items-start flex-col'>
                                                        <input type="date" value="" className="w-[70%] pl-2 border border-gray-200 py-2 text-sm text-gray-500 bg-white rounded-[4px] focus:outline-blue-800 focus:bg-white focus:text-gray-900" />
                                                 </div>
                                                 <div className='flex items-center'>
                                                 </div>
                                                 <div className='mr-10 flex items-center justify-end'>
                                                 </div>
                                                 {/* Down Payment */}
                                                 <div className=' flex items-start flex-col'>
                                                        <input type="text" onChange={event => setDownPayments(event.target.value)} name="dp" className="w-[70%] border border-gray-200 rounded-md py-2 text-md font-semibold text-black bg-white pl-2 focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Down Payment ( DP )" autoComplete="on" />
                                                 </div>
                                                 {/*  Jumlah DP*/}
                                                 <div className='flex items-center'>
                                                        <input type="text" onChange={event => setJumlahDownPayments(event.target.value)} name="jumlahdp" className="w-[70%] border border-gray-200 rounded-md py-2 text-md font-bold text-black bg-white pl-2 focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="50%" autoComplete="on" />
                                                 </div>
                                                 {/* value total DP */}
                                                 <div className='mr-10 flex items-center justify-end'>
                                                        <input type="text" onChange={event => setValueDownPayments(event.target.value)} name="valuedp" className="w-[50%] rounded-md py-2 text-md font-bold text-black bg-white pl-2 focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="IDR 5.000.000" autoComplete="on" />
                                                 </div>

                                                 <div className=' flex items-start flex-col'>
                                                        <input type="date" name="date" className="w-[70%] pl-2 border border-gray-200 py-2 text-sm text-gray-500 bg-white rounded-[4px] focus:outline-blue-800 focus:bg-white focus:text-gray-900" />
                                                 </div>
                                                 <div className='flex items-center'>
                                                 </div>
                                                 <div className='mr-10 flex items-center justify-end'>
                                                 </div>
                                                 <div className=' flex items-center'>
                                                        {/* Tambah Jangka Waktu */}
                                                        <button className='w-[70%] bg-blue-50 hover:bg-blue-100 rounded-sm py-2 px-4 text-sm font-bold text-blue-600 text-center'>Tambah Jangka Waktu</button>
                                                 </div>
                                          </div>
                                          {/* Catatan untuk klien */}
                                          <div className="mt-4">
                                                 <p className="text-md font-bold text-gray-900">Catatan Untuk Klien</p>
                                                 <textarea onChange={event => setCatatanClient(event.target.value)} name="notes" className='mt-4 border border-gray-200 p-3 rounded-sm' placeholder='Tuliskan catatan anda disini' id="" cols={30} rows={8} />
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
                                                               {/* Pilih Layanan Bank */}
                                                               <select className=" mt-2 font-medium w-full border border-gray-200 rounded-[4px] py-2 px-4 mb-4 text-md bg-white" onChange={(event) => setLayananBank(event.target.value)} name="pembayaran" id="pembayaran" >
                                                                      <option className='bg-white font-medium hover:bg-[#405DC7]' value="1">PayPal Account</option>
                                                                      <option className='bg-white font-medium hover:bg-[#405DC7]' value="2">Bank BCA</option>
                                                               </select>
                                                        </div>
                                                 </div>
                                                 {/* Section Rekening */}
                                                 <div className="w-full flex justify-between gap-x-4 mt-4">
                                                        <div className="w-[50%]">
                                                               <h1 className='font-bold mt-6 mb-2'>Nomor Rekening</h1>
                                                               {/* Nomor rekening */}
                                                               <input
                                                                      type="text"
                                                                      onChange={event => setNomorRekening(event.target.value)}
                                                                      name="rekening"
                                                                      className="w-full border border-gray-200 rounded-[4px] mt-2 py-2 px-4 mb-4 text-md text-gray-900  pl-4 focus:outline-blue-800 focus:text-gray-900"
                                                                      placeholder="Tuliskan Nomor Rekening"
                                                                      autoComplete="on"
                                                               />
                                                        </div>
                                                        <div className="w-[50%]">
                                                               <h1 className='font-bold mt-6 mb-2'>Nama Pemilik</h1>
                                                               {/* Nama Pemilik */}
                                                               <input
                                                                      type="search"
                                                                      onChange={event => setNamaPemilik(event.target.value)}
                                                                      name="pemilik"
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
                                                                      <option className='bg-white font-medium hover:bg-[#405DC7]' value="1">PayPal Account</option>
                                                                      <option className='bg-white font-medium hover:bg-[#405DC7]' value="2">Bank BCA</option>
                                                               </select>
                                                        </div>
                                                 </div>
                                                 {/* Section Rekening */}
                                                 <div className="w-full flex justify-between gap-x-4 mt-4 pb-8">
                                                        <div className="w-[50%]">
                                                               <h1 className='font-bold mt-6 mb-2'>Nomor Rekening</h1>
                                                               {/* Nomor Rekening */}
                                                               <input
                                                                      type="text"
                                                                      name="rekening"
                                                                      className="w-full border border-gray-200 rounded-[4px] mt-2 py-2 px-4 mb-4 text-md text-gray-900  pl-4 focus:outline-blue-800 focus:text-gray-900"
                                                                      placeholder="Tuliskan Nomor Rekening"
                                                                      autoComplete="on"
                                                               />
                                                        </div>
                                                        <div className="w-[50%]">
                                                               <h1 className='font-bold mt-6 mb-2'>Nama Pemilik</h1>
                                                               {/* Nama Pemilik */}
                                                               <input
                                                                      type="text"
                                                                      name="pemilik"
                                                                      className="w-full border border-gray-200 rounded-[4px] mt-2 py-2 px-4 mb-4 text-md text-gray-900  pl-4 focus:outline-blue-800 focus:text-gray-900"
                                                                      placeholder="Tuliskan Nama Pemilik"
                                                                      autoComplete="on"
                                                               />
                                                        </div>
                                                 </div>
                                          </div>

                                          <div className="w-full px-8 border border-gray-200 rounded-lg mt-8">
                                                 <h1 className="py-6 text-lg font-bold">Paypal Account</h1>
                                                 {/* Paypal Account */}
                                                 <input
                                                        type="text"
                                                        name="paypal"
                                                        className="w-full border border-gray-200 rounded-[4px] py-2 px-4 mb-4 text-md text-gray-900  pl-4 focus:outline-blue-800 focus:text-gray-900"
                                                        placeholder="Tuliskan Email Paypal Anda"
                                                        autoComplete="on"
                                                 />
                                          </div>
                                   </div>
                                   {/* Select  Invoice Theme */}
                                   <div className="w-full bg-white my-4 h-auto rounded-lg px-10 pb-8">
                                          <h1 className="py-6 text-[28px] font-bold">Pengaturan Tagihan</h1>
                                          <h1 className="py-6 text-lg font-bold">Pilih Tema Untuk Tagihan</h1>
                                          {/* Invoice Option Theme */}
                                          <div className="flex items-center justify-between">
                                                 <Image src={temaOne} />
                                                 <Image src={temaTwo} />
                                                 <Image src={temaTwo} />
                                                 <Image src={temaThree} />
                                                 <Image src={temaFour} />
                                          </div>

                                          <div className="w-full flex justify-between items-start my-10">
                                                 <div className="w-full">
                                                        <p className="font-bold text-md">Tagihan Untuk : </p>
                                                        <p className="font-normal text-sm my-2">Udin Alexander</p>
                                                        <p className="font-normal text-sm my-2">Sample Components</p>
                                                        <p className="font-normal text-sm my-2">Client Address</p>
                                                        <p className="font-normal text-sm my-2">client@gmail.com</p>
                                                 </div>
                                                 <div className="w-full">
                                                        <p className="font-normal text-md">Penerbit Tagihan</p>
                                                        <p className="font-normal text-sm my-2">Nama Penerbit</p>
                                                        <input onChange={event => setNamaPenerbit(event.target.value)} type="text" className='my-2 p-1 border border-gray-200 rounded-sm' name="namapenerbit" id="namapenerbit" placeholder='Nama Penerbit' />
                                                        <p className="font-normal text-sm my-2">Jabatan Penerbit</p>
                                                        <input onChange={event => setJabatanPenerbit(event.target.value)} type="text" className="my-1 p-1 border border-gray-200 rounded-sm" name="jabatanpenerbit" id="jabatanpenerbit" placeholder='Jabatan Penerbit' />
                                                 </div>
                                                 <div className="w-full">
                                                        {/*  Enable Pengingat */}
                                                        <div className="flex justify-between items-center">
                                                               <p className="font-normal text-md">Pengingat Tagihan</p>
                                                               <input type="checkbox" className="my-1 p-1" name="pengingat" id="pengingat" />
                                                        </div>
                                                        <div className="mt-4 p-4 bg-blue-400 text-white rounded-md text-xs font-normal">
                                                               <p>Pengingat akan dikirimkan ke klien sesuai dengan jangka waktu  pembayaran.</p>
                                                        </div>
                                                 </div>
                                          </div>
                                          <div className="">
                                                 <p className="font-bold text-gray-900 mb-4">Lampiran</p>
                                                 <div className="flex flex-col">
                                                        <input className='mt-2' type="file" name="lampiran" id="lampiran" />
                                                        <input className='mt-2' type="file" name="lampiran" id="lampiran" />
                                                 </div>
                                          </div>
                                   </div>
                                   {/* Button Action */}
                                   <div className="flex gap-x-4 justify-end">
                                          {/* Button Simpan Draft */}
                                          <SecondaryButton>Simpan Draft</SecondaryButton>
                                          {/* Button Kirim */}
                                          <button onClick={sendData} className='py-2 bg-[#405DC7] hover:bg-[#324daf] text-white px-4 rounded-md flex items-center font-bold'>
                                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="white">
                                                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                                                 </svg>Tinjau dan Kirim
                                          </button>
                                   </div>
                            </div>
                     </DashboardLayouts>
              </React.Fragment >
       )
}

export default createInvoices