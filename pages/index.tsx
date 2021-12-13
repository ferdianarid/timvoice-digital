import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Dashboard - Timvoice</title>
				<meta name="description" content="dashboard invoice" />
				<meta httpEquiv="X-UA Compatible" content="IE-Edge" />
				<meta name="author" content="timvoice corp" />
			</Head>
			<Sidebar />
		</React.Fragment>
	)
}

export default Home
