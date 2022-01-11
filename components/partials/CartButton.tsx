import Link from 'next/link'
import React from 'react'

const CartButton = () => {
       return (
              <div>
                     <Link href="/cart">
                            <div className="flex justify-between items-center bg-blue-50 rounded-md py-2 px-4">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                          <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                                   </svg>
                                   <div className="count">
                                          <h1 className="text-md font-bold text-blue-600 ml-2">100</h1>
                                   </div>
                            </div>
                     </Link>
              </div>
       )
}

export default CartButton
