import React from 'react'
import DoughnutChart from '../../components/chart/Doughnut'
import LineChart from '../../components/chart/LineChart'
import PrimaryButton from '../../components/partials/PrimaryButton'
import SecondaryButton from '../../components/partials/SecondaryButton'
import {DraftStatus, PaidStatus, OverdueStatus, PartStatus, UnpaidStatus} from '../../components/partials/StateStatus'
import ToastNotify from '../../components/partials/ToastNotify'

const DesignComponents = () => {
       return (
              <React.Fragment>
                     <div className="max-w-[1400px] m-auto">
                     <div className="m-5">
                            <div className="flex">
                            {/* State Status Component */}
                            <div className="w-[99%] mr-[1%] border border-blue-300 rounded-md py-3 px-5">
                                   <div className="document mb-2">
                                          <h1 className="font-bold text-2xl text-blue-800">State Status</h1>
                                          <p className='text-[14px]'>children ( ReactNode ) : string</p>
                                   </div>
                                   <div className='border border-blue-300 rounded-md py-3 px-5 flex justify-between gap-x-4'>
                                          <DraftStatus />
                                          <PaidStatus />
                                          <OverdueStatus />
                                          <PartStatus />
                                          <UnpaidStatus />
                                   </div>
                            </div>
                            
                            {/* Button Component */}
                            <div className="w-[99%] ml-[1%] border border-blue-300 rounded-md py-3 px-5">
                                   <div className="document mb-2">
                                          <h1 className="font-bold text-2xl text-blue-800">Button Component</h1>
                                          <p className='text-[14px]'>children ( ReactNode ) : string</p>
                                   </div>
                                   <div className='border border-blue-300 rounded-md py-3 px-5 flex gap-x-4'>
                                          <PrimaryButton children="Primary Button" />
                                          <SecondaryButton children="Secondary Button" />
                                   </div>
                            </div>
                            </div>

                            <div className="w-full border border-blue-300 rounded-md py-3 px-5 mt-7">
                                   <div className="document mb-2">
                                          <h1 className="font-bold text-2xl text-blue-800">Toaster Component</h1>
                                          <p className='text-[14px]'>children ( ReactNode ) : string</p>
                                   </div>
                                   <div className="flex">
                                          <ToastNotify />
                                   </div>
                            </div>

                            {/* Chart Component */}
                            <div className="w-full border border-blue-300 rounded-md py-3 px-5 mt-7">
                            <div className="document mb-2">
                                   <h1 className="font-bold text-2xl text-blue-800">Chart Component</h1>
                                   <p className='text-[14px]'>datasets : number[]</p>
                            </div>
                            <div className="flex justify-between items-center ml-3">
                                   <div className="w-[35%]">
                                   <DoughnutChart />
                                   </div>
                                   <div className="w-[60%]">
                                   <LineChart />
                                   </div>
                            </div>
                            </div>
                     </div>
                     </div>
              </React.Fragment>
       )
}

export default DesignComponents
