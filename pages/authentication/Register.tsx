import { NextPage } from 'next'
import React, { useState } from 'react'

// import Auth Layouts
import AuthLayouts from "../../layouts/AuthLayouts"

// import Google Icon
import GoogleIcon from "../../public/google.svg"

const Register: NextPage = () => {
       const StateLoadingToast = () => {
              return <div className="py-1 px-3 bg-blue-400 text-white rounded-md w-fit">Loading ...</div>
       }
       const StateSuccessToast = () => {
              return <div className="py-1 px-3 bg-green-700 text-white rounded-md w-fit">Successfully Submit</div>
       }
       const [submitData, setSubmitData] = useState("")

       const onDataIsSubmit = () => {

              setTimeout(() => {
                     setSubmitData(`${<StateLoadingToast />}`)
              }, 2000)

              setTimeout(() => {
                     setSubmitData(`${<StateSuccessToast />}`)
              }, 4000)
       }
       return (
              <React.Fragment>
                     <AuthLayouts>
                            {/* <!-- Heading Login Form --> */}
                            <div className="headingLogin max-w-2xl m-auto mt-8 text-center">
                                   <h1 className="text-[2rem] font-bold md:text-heading-lg">Get your free account</h1>
                                   <p className="text-small text-gray-500 font-normal pt-2">Join and get easy way experience to manage your business!</p>
                            </div>
                            {/* <!-- Login Form --> */}
                            <form className="max-w-sm m-auto mt-8 mb-8 rounded-lg border border-gray-300 py-8 px-10" action="/login" method="post">
                                   {/* <!-- Form Full Name --> */}
                                   <div className="mb-4">
                                          <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
                                          <input type="text" id="fullname" name="fullname" placeholder="ex. Ferdian Ahmad" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
                                   </div>
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
                                                 <input type="checkbox" className="form-checkbox h-5 w-5 text-dark" name="" id="" defaultChecked />
                                                 <span className="text-blue-800  text-xs pl-2">I agree to the ToS and Privacy Policy</span>
                                          </label>
                                   </div>
                                   {/* <!-- Register Button --> */}
                                   <a href="/auth/login" onClick={onDataIsSubmit} className="mb-4 w-full text-center font-bold ml-0 no-underline inline-block px-4 py-3 leading-none bg-blue-800 border-blue-800 border rounded text-white hover:border-transparent hover:bg-white hover:text-blue-800 mt-4 sm:mt-0">
                                          <p className="text-lg font-bold">Register</p>
                                   </a>
                                   <p className="font-bold text-xl text-blue-700 my-2">Status : {submitData}</p>
                                   {/* <!-- Google OAuth Button --> */}
                                   <div className="mb-4 mt-4">
                                          <a href="/auth/login" className="w-full flex justify-center items-center text-center font-bold ml-0 no-underline px-4 py-3 leading-none bg-white border-gray-200 border rounded text-blue-800 hover:bg-white mt-4 sm:mt-0">
                                                 <img src={GoogleIcon} width="24" alt="" className="pr-2" />
                                                 <p className="text-lg">Google</p>
                                          </a>
                                   </div>
                                   {/* <!-- Forgot Password --> */}
                                   <div className="flex">
                                          <p className="text-sm text-gray-500">Already have an account ?</p>
                                          <a href="/forgot-password" className="text-blue-800 text-sm pl-1">Sign in here</a>
                                   </div>
                            </form>
                     </AuthLayouts>
              </React.Fragment>
       )
}

export default Register

