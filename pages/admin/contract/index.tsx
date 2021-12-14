import { NextPage } from 'next'
import Head from "next/head"
import React from 'react'
import DashboardLayouts from '../../../layouts/DashboardLayouts'

const Contract: NextPage = () => {
       return (
              <React.Fragment>
                     <Head>
				<title>Contract - Timvoice</title>
				<meta name="description" content="contract invoice" />
				<meta httpEquiv="X-UA Compatible" content="IE-Edge" />
				<meta name="author" content="timvoice corp" />
			</Head>
                     <DashboardLayouts>

                     </DashboardLayouts>
              </React.Fragment>
       )
}

export default Contract
