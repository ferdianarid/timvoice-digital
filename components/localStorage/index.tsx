import React, { useState, useEffect } from 'react'

// interface users
interface InterfaceUsers {
       id: number,
       name: string,
       email: string,
       password: string
}

// form action Component
const FormActions = ( ) => {
       // set and change state
       const [ name, setName ] = useState("")
       const [ email, setEmail ] = useState("")

       // use hook side effect
       useEffect(() => {
              // store state data to local storage
              localStorage.setItem("name", JSON.stringify(name))
              localStorage.setItem("email", JSON.stringify(email))
       }, [name])

       return (
              <div>
                     <React.Fragment>
				<div className="w-full  h-auto flex flex-col md:flex-row justify-center md:justify-between">
                                   <form className="max-w-sm m-auto my-6 rounded-lg border border-gray-300 py-8 px-10" action="/login" method="post">
                                          <h1 className="text-2xl font-bold text-center pb-2">Local Storage</h1>
                                          {/* <!-- Form Email Address --> */}
                                          <div className="mb-4">
                                                 <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                                                 <input type="text" onChange={(e) => setEmail(e.target.value)} id="email" name="email" value={email} placeholder="example@email.com" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
                                          </div>
                                          {/* <!-- Form Name --> */}
                                          <div className="mb-4">
                                                 <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                                                 <input type="name" onChange={(e) => setName(e.target.value)} id="name" value={name} name="name" placeholder="ferdian" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
                                          </div>
                                          {/* <!-- Input Checkbox --> */}
                                          <div className="mb-4">
                                                 <label htmlFor="checkbox" className="inline-flex items-center">
                                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-dark" name="" id="" defaultChecked />
                                                        <span className="text-blue-800 pl-2">Remember me</span>
                                                 </label>
                                          </div>
                                          <input type="submit" value="submit" className="mb-4 w-full text-lg text-center font-bold ml-0 no-underline inline-block px-4 py-3 leading-none bg-blue-800 border-blue-800 border rounded text-white hover:border-transparent hover:bg-white hover:text-blue-800 mt-4 sm:mt-0" />
                                          {/* <!-- Forgot Password --> */}
                                          <a href="/forgot-password" className="text-blue-800 text-sm">Forgot Password?</a>
                                   </form>

                                   <form className="max-w-sm m-auto my-6 rounded-lg border border-gray-300 py-8 px-10" action="/login" method="post">
                                          <h1 className="text-2xl font-bold text-center pb-2">Local Storage</h1>
                                          {/* <!-- Form Email Address --> */}
                                          <div className="mb-4">
                                                 <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                                                 <input type="text" onChange={(e) => setEmail(e.target.value)} id="email" name="email" value={email} placeholder="example@email.com" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
                                          </div>
                                          {/* <!-- Form Name --> */}
                                          <div className="mb-4">
                                                 <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                                                 <input type="name" onChange={(e) => setName(e.target.value)} id="name" value={name} name="name" placeholder="ferdian" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
                                          </div>
                                          {/* <!-- Input Checkbox --> */}
                                          <div className="mb-4">
                                                 <label htmlFor="checkbox" className="inline-flex items-center">
                                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-dark" name="" id="" defaultChecked />
                                                        <span className="text-blue-800 pl-2">Remember me</span>
                                                 </label>
                                          </div>
                                          <input type="submit" value="submit" className="mb-4 w-full text-lg text-center font-bold ml-0 no-underline inline-block px-4 py-3 leading-none bg-blue-800 border-blue-800 border rounded text-white hover:border-transparent hover:bg-white hover:text-blue-800 mt-4 sm:mt-0" />
                                          {/* <!-- Forgot Password --> */}
                                          <a href="/forgot-password" className="text-blue-800 text-sm">Forgot Password?</a>
                                   </form>
				</div>
		       </React.Fragment>
              </div>
       )
}

export default FormActions
