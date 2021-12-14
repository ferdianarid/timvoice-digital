import { NextPage } from 'next'
import React from 'react'

// import Auth Layout Pages
import AuthLayouts from '../../layouts/AuthLayouts'

// import Google Icon
import GoogleIcon from "../../public/google.svg"

// Login Pages
const Login: NextPage = () => {
       return (
              <AuthLayouts>
                     {/* <!-- Heading Login Form --> */}
                     <div className="headingLogin max-w-2xl m-auto mt-8 text-center">
                            <h1 className="text-[2rem] font-bold md:text-heading-lg">Login to access dashboard</h1>
                            <p className="text-small text-gray-500 font-normal pt-2">Manage your business in a simplest way !</p>	
                     </div>
                     {/* <!-- Login Form --> */}
                     <form className="max-w-sm m-auto mt-8 mb-8 rounded-lg border border-gray-300 py-8 px-10" action="/login" method="post">
                            {/* <!-- Form Email Address --> */}
                            <div className="mb-4">
                                   <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                                   <input type="text" id="email" name="email" placeholder="example@email.com" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
                            </div>
                            {/* <!-- Form Password --> */}
                            <div className="mb-4">
                                   <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                                   <input type="password" id="password" name="password" placeholder="********" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
                            </div>
                            {/* <!-- Input Checkbox --> */}
                            <div className="mb-4">
                                   <label htmlFor="checkbox" className="inline-flex items-center">
                                          <input type="checkbox" className="form-checkbox h-5 w-5 text-dark" name="" id="" checked />
                                          <span className="text-blue-800 pl-2">Remember me</span>
                                   </label>
                            </div>
                            {/* <!-- Login Button --> */}
                            <a href="/admin/dashboard" className="mb-4 w-full text-center font-bold ml-0 no-underline inline-block px-4 py-3 leading-none bg-blue-800 border-blue-800 border rounded text-white hover:border-transparent hover:bg-white hover:text-blue-800 mt-4 sm:mt-0">
                                   <p className="text-lg font-bold">Login</p>
                            </a>
                            {/* <!-- Google OAuth Button --> */}
                            <div className="mb-4">
                                   <a href="/auth/login" className="w-full flex justify-center items-center text-center font-bold ml-0 no-underline px-4 py-3 leading-none bg-white border-gray-200 border rounded text-blue-800 hover:bg-white mt-4 sm:mt-0">
                                          <img src={GoogleIcon} width="24" alt="" className="pr-2" />
                                          <p className="text-lg">Google</p>
                                   </a>
                            </div>
                            {/* <!-- Forgot Password --> */}
                            <a href="/forgot-password" className="text-blue-800 text-sm">Forgot Password?</a>
                     </form>
              </AuthLayouts>
       )
}

export default Login
