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

export { ButtonActionDanger, ButtonActionSecondary }
