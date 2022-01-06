import React, { ReactNode } from 'react'
import toast, { Toaster } from 'react-hot-toast'

interface dataToastInterface {
       children: ReactNode
}

// toaster message
export const infoNotify = () => toast('This is Info Notification Toaster', {
       style: {
              background: 'blue',
              color: 'white'
       }
});
const Text = ({ children }: dataToastInterface) => {
       return <h1>{children}</h1>
}
export const successNotify = () => toast.success(<Text>Successfully</Text>);
export const warningNotify = () => toast("Loading ...", {
       style: {
              background: 'yellow',
              color: 'black'
       }
});
export const dangerNotify = () => toast.error('This is Danger Notification Toaster');

// toast notify component
const ToastNotify = () => {
       return (
              <React.Fragment>
                     {/* Toaster */}
                     <div className="flex">
                            <div className='flex mr-2'>
                                   <button onClick={infoNotify} className='py-2 bg-[#405DC7] hover:bg-[#324daf] text-white px-4 rounded-md flex items-center font-bold'>Info Toaster</button>
                            </div>

                            <div className='flex justify-between mr-2'>
                                   <button onClick={warningNotify} className='py-2 bg-[#c1c438] hover:bg-[#a1a32b] text-white px-4 rounded-md flex items-center font-bold'>Warning Toaster</button>
                            </div>

                            <div className='flex justify-between mr-2'>
                                   <button onClick={dangerNotify} className='py-2 bg-[#e63131] hover:bg-[#bd1b1b] text-white px-4 rounded-md flex items-center font-bold'>Danger Toaster</button>
                            </div>

                            <div className='flex justify-between mr-2'>
                                   <button onClick={successNotify} className='py-2 bg-[#2cad20] hover:bg-[#1d9112] text-white px-4 rounded-md flex items-center font-bold'>Success Toaster</button>
                            </div>

                            <Toaster toastOptions={{
                                   success: {
                                          style: {
                                                 background: 'green',
                                                 color: 'white'
                                          },
                                   },
                                   error: {
                                          style: {
                                                 background: 'red',
                                                 color: 'white'
                                          },
                                   },
                            }} />
                     </div>
              </React.Fragment>
       )
}

export default ToastNotify
