import axios from 'axios'
import React, { SyntheticEvent, useState } from 'react'
import * as yup from "yup"
import backendApi from '../../configs/backendApi'
// import Auth Layouts
import AuthLayouts from "../../layouts/AuthLayouts"
// import Google Icon
import GoogleIcon from "../../public/google.svg"

// import next router
import { useRouter } from 'next/router'

const Register = () => {
       // initialize router redirect
       const router = useRouter()

       const [notification, setNotification] = useState("")

       const onDataIsSubmit = () => {
              setTimeout(() => {
                     setNotification("Loading....")
              }, 2000)
              setTimeout(() => {
                     setNotification("Successfully Registered")
              }, 4000)
       }

       const [name, setName] = useState("")
       const [email, setEmail] = useState("")
       const [password, setPassword] = useState("")

       const OnSubmitHandler = async (event: any) => {
              event.preventDefault()

              await axios.post("http://localhost:8000/api/register", {
                     name: name,
                     email: email,
                     password: password
              }, {
                     headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                     },
              }).then(response => {
                     console.log(response)
              }).catch(err => console.log(err))
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
                            <form onSubmit={OnSubmitHandler} className="max-w-sm m-auto mt-8 mb-8 rounded-lg border border-gray-300 py-8 px-10">
                                   {/* <!-- Form Full Name --> */}
                                   <div className="mb-4">
                                          <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
                                          <input type="text" required id="name" value={name} name="name" onChange={event => setName(event.target.value)} placeholder="ex. Ferdian Ahmad" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
                                   </div>
                                   {/* <!-- Form Email Address --> */}
                                   <div className="mb-4">
                                          <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                                          <input type="text" id="email" value={email} required name="email" onChange={event => setEmail(event.target.value)} placeholder="example@email.com" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
                                   </div>
                                   {/* <!-- Form Password --> */}
                                   <div className="mb-4">
                                          <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                                          <input type="password" value={password} id="password" required name="password" onChange={event => setPassword(event.target.value)} placeholder="********" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
                                   </div>
                                   {/* <!-- Input Checkbox --> */}
                                   <div className="mb-4">
                                          <label htmlFor="checkbox" className="inline-flex items-center">
                                                 <input type="checkbox" className="form-checkbox h-5 w-5 text-dark" name="" id="" defaultChecked />
                                                 <span className="text-blue-800  text-xs pl-2">I agree to the ToS and Privacy Policy</span>
                                          </label>
                                   </div>
                                   {/* <!-- Register Button --> */}
                                   <button onClick={onDataIsSubmit} type="submit" className="mb-4 w-full text-center font-bold ml-0 no-underline inline-block px-4 py-3 leading-none bg-blue-800 border-blue-800 border rounded text-white hover:border-transparent hover:bg-white hover:text-blue-800 mt-4 sm:mt-0">
                                          <p className="text-lg font-bold">Register</p>
                                   </button>
                                   <p className="font-bold text-xl text-blue-700 my-2">Status : {notification}</p>
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

