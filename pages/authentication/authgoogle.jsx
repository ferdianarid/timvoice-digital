import { useSession, signIn, signOut } from "next-auth/react"

export default function AuthGoogle() {
       const { data: session } = useSession();
       if (session) {
              return (
                     <div className="">
                            Welcome Google OAuth<br />
                            <button onClick={() => signOut()}>Sign out</button>
                     </div>
              )
       }
       return (
              <div className="">
                     Click to sign into your user account with Google OAuth <br />
                     <button onClick={() => signIn()}>Sign in</button>
              </div>
       )
}