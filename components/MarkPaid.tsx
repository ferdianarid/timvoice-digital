import React from "react"
import PrimaryButton from "./partials/PrimaryButton"

const MarkPaid = () => {
       return (
              <div className="bg-blue-100 rounded-lg h-auto p-8">
                     <div className="flex justify-between pb-8">
                            <div>
                                   <h2 className="text-[28px] font-bold">
                                          Tandai Telah <br /> Dibayar
                                   </h2>
                            </div>
                            <div>
                                   <a href="">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                 <path
                                                        fillRule="evenodd"
                                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                 />
                                          </svg>
                                   </a>
                            </div>
                     </div>
                     <div className="flex justify-between">
                            <div>
                                   <h2 className="text-base">Pembayaran Ke</h2>
                            </div>
                            <div>
                                   <select name="status" id="status">
                                          <option value="Lunas">Lunas</option>
                                          <option value="One">1 (Down Payment)</option>
                                          <option value="Two">2 (Second Term)</option>
                                          <option value="Three">Lunas</option>
                                   </select>
                            </div>
                     </div>
                     <div>
                            <div className="mt-6">
                                   <h2>Metode Pembayaran</h2>
                            </div>
                            <div className="mt-1">
                                   <select className="w-full" name="status" id="status">
                                          <option value="Paypal">PayPal</option>
                                          <option value="One">Bank BCA</option>
                                          <option value="Two">Bank BNI</option>
                                          <option value="Three">Bank TeamUp</option>
                                   </select>
                            </div>
                     </div>
                     <div className="mt-10">
                            <PrimaryButton children="Tandai" />
                     </div>
              </div>
       );
};

export default MarkPaid