import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react";

import isServer from "../utils/isServer"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	if (isServer()) return null
	return (
		<SessionProvider session={session}>
			< Component {...pageProps} />
		</SessionProvider>
	)
}

export default MyApp
