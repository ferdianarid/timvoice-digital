import React, { Component } from 'react';

export default class AddPayments extends Component {
       constructor(props: any) {
              super(props)
       }
       state = {
              namaPemilik: null,
              nomorRekening: null
       }
       render() {
              return (
                     <React.Fragment>
                            {/* Section Rekening */}
                            <div className="w-full flex justify-between gap-x-4 mt-4">
                                   <div className="w-[50%]">
                                          <h1 className='font-bold mt-6 mb-2'>Nomor Rekening</h1>
                                          {/* Nomor rekening */}
                                          <input
                                                 type="text"
                                                 onChange={event => this.setState({ nomorRekening: event.target.value })}
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
                                                 onChange={event => this.setState({ namaPemilik: event.target.value })}
                                                 name="pemilik"
                                                 className="w-full border border-gray-200 rounded-[4px] mt-2 py-2 px-4 mb-4 text-md text-gray-900  pl-4 focus:outline-blue-800 focus:text-gray-900"
                                                 placeholder="Tuliskan Nama Pemilik"
                                                 autoComplete="on"
                                          />
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
                     </React.Fragment >
              )
       }
}
