import React, { MouseEventHandler, ReactNode } from 'react'

const ButtonActionSecondary = ({ children, onClickEvent }: any) => {
       return (
              <React.Fragment>
                     <button onClick={onClickEvent} className='w-full py-1.5 px-3 rounded-md text-sm font-bold border border-gray-400'>{children}</button>
              </React.Fragment>
       )
}

const ButtonActionDanger = ({ children, onClickEvent }: any) => {
       return (
              <React.Fragment>
                     <button onClick={onClickEvent} className='w-full py-1.5 px-3 text-white rounded-md text-sm font-bold border border-red-600 bg-red-600 hover:bg-red-800'>{children}</button>
              </React.Fragment>
       )
}

const CopyButton = ({ children }: any) => {
       return (
              <React.Fragment>
                     <button className='py-2 bg-[#405DC7] hover:bg-[#324daf] text-white px-4 rounded-md flex items-center font-bold'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>{children}</button>
              </React.Fragment>
       )
}

const SendButton = ({ children, eventAction }: any) => {
       return (
              <React.Fragment>
                     <button onClick={eventAction} className='py-2 bg-blue-600 hover:bg-[#324daf] text-white px-4 rounded-md flex items-center font-bold'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-45" viewBox="0 0 20 20" fill="currentColor">
                                   <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>{children}</button>
              </React.Fragment>
       )
}

export { ButtonActionDanger, ButtonActionSecondary, CopyButton, SendButton }
