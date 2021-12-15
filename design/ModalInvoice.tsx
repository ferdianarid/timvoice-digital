import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const ModalInvoice = () => {
       const [isOpen, setIsOpen] = useState(false)

       const closeModal = () => {
         setIsOpen(false)
       }
     
       const openModal = () => {
         setIsOpen(true)
       }
       return (
              <Transition appear show={isOpen} as={Fragment}>
                     <Dialog as="div" className="fixed inset-12 z-10 overflow-y-auto" onClose={closeModal}>
                            <div className="min-h-screen px-4 text-center">
                                   <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                                          <Dialog.Overlay className="fixed inset-0" />
                                   </Transition.Child>

                                          {/* This element is to trick the browser into centering the modal contents. */}
                                          <span className="inline-block h-screen align-middle" aria-hidden="true">
                                          &#8203;
                                          </span>
                                          {/* Modals */}
                                   <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                          <div className="ml-12 inline-block w-full bg-blue-600 max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-md">
                                                 <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-blue-800">
                                                        Payment successful
                                                 </Dialog.Title>
                                                 <div className="mt-2">
                                                        <p className="text-sm text-blue-800">
                                                               Your payment has been successfully submitted. Weve sent you
                                                               an email with all of the details of your order.
                                                        </p>
                                                 </div>
                                                 {/* button close */}
                                                 <div className="mt-4">
                                                        <button type="button" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" onClick={closeModal}>
                                                               Got it, thanks!
                                                        </button>
                                                 </div>
                                          </div>
                                   </Transition.Child>
                            </div>
                     </Dialog>
              </Transition>
       )
}

export default ModalInvoice
