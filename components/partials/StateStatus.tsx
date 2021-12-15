import React from 'react'

// Draft Status Badge
const DraftStatus = () => {
       return (
              <div className='rounded-lg bg-blue-600 bg-opacity-10 border border-blue-600'>
                     <h1 className='text-[12px] text-center py-1 px-2 font-bold text-blue-800'>Draft Status</h1>
              </div>
       )
}

// Unpaid Status Badge
const UnpaidStatus = () => {
       return (
              <div className='rounded-lg bg-[#734011] bg-opacity-10 border border-[#734011]'>
                     <h1 className='text-[12px] text-center py-1 px-2 font-bold text-[#734011]'>Unpaid Status</h1>
              </div>
       )
}

// Paid Status Badge
const PaidStatus = () => {
       return (
              <div className='rounded-lg bg-[#20573D] bg-opacity-10 border border-[#20573D]'>
                     <h1 className='text-[12px] text-center py-1 px-2 font-bold text-[#20573D]'>Paid Status</h1>
              </div>
       )
}

// Overdue Status Badge
const OverdueStatus = () => {
       return (
              <div className='rounded-lg bg-[#CB3A31] bg-opacity-10 border border-[#CB3A31]'>
                     <h1 className='text-[12px] text-center py-1 px-2 font-bold text-[#CB3A31]'>Overdue</h1>
              </div>
       )
}

// Part Status Badge
const PartStatus = () => {
       return (
              <div className='rounded-lg bg-[#734011] bg-opacity-10 border border-[#734011]'>
                     <h1 className='text-[12px] text-center py-1 px-2 font-bold text-[#734011]'>22/33 Paid</h1>
              </div>
       )
}

export { PaidStatus, UnpaidStatus, DraftStatus, PartStatus, OverdueStatus }