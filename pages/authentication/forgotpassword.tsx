import React from 'react'
import AuthLayouts from '../../layouts/AuthLayouts'

const ForgotPassword: React.FunctionComponent = () => {
       const [SuccessSend, setSuccessSend] = React.useState(false)

       const SubmitHandler = () => {
              setSuccessSend(!SuccessSend)
       }

       const CheckSuccess = () => {
              return (
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w- mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
              )
       }
       return (
              <AuthLayouts>
                     {/* <!-- Heading Form --> */}
                     <div className="headingLogin max-w-2xl m-auto mt-8 text-center">
                            <h1 className="text-[2rem] font-bold md:text-heading-lg">Reset Password Anda</h1>
                            <p className="text-small text-gray-500 font-normal pt-2">Kami akan membantu Anda mengatur ulang password.</p>
                     </div>
                     {/* <!-- Forgot Password Form --> */}
                     <form className="max-w-sm m-auto mt-8 mb-8 rounded-lg border border-gray-300 py-8 px-10" action="/login" method="post">
                            {/* <!-- Form Email Address --> */}
                            <div className="mb-4">
                                   <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email Terdaftar</label>
                                   <input type="text" id="email" name="email" placeholder="example@email.com" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
                            </div>
                            {/* <!-- Login Button --> */}
                            <a href="#" onClick={SubmitHandler} className="mb-4 w-full text-center font-bold ml-0 no-underline inline-block px-4 py-1.5 leading-none bg-blue-800 border-blue-800 border rounded text-white hover:border-transparent hover:bg-blue-900 mt-4 sm:mt-0">
                                   <p className="text-lg font-bold flex justify-center items-center">
                                          {
                                                 SuccessSend && <CheckSuccess />
                                          }
                                          Kirim Tautan</p>
                            </a>
                            {/* <!-- Back to Login--> */}
                            <a href="/login" className="text-blue-800 text-sm text-center">Kembali ke Halaman Masuk</a>
                     </form>
              </AuthLayouts>
       )
}

export default ForgotPassword