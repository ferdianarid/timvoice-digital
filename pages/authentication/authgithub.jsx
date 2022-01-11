import React from "react"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
       const { data: session } = useSession()
       if (session) {
              return (
                     <React.Fragment>
                            Signed in as {session.user.email} <br />
                            <button onClick={() => signOut()}>Sign Out Account</button>
                     </React.Fragment>
              )
       }
       return (
              <React.Fragment>
                     <div className="w-full text-center m-10">
                            Not signed in <br />
                            <button className="w-fit mx-auto flex justify-center items-center text-center font-bold ml-0 no-underline px-4 py-3 leading-none bg-white border-gray-200 border rounded text-blue-800 hover:bg-white mt-4 sm:mt-0" onClick={() => signIn()}>Sign In with Github</button>
                     </div>
              </React.Fragment>
       )
}