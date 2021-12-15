import type { NextPage } from 'next'
import React from 'react'

// Import Head Link and Image from Next
import Head from 'next/head'
import Link from "next/link"
import Image from "next/image"

// Import Components
import RecentActivity from '../../components/RecentActivity'
import RecentInvoices from '../../components/RecentInvoices'
import { Profile, ProfileCard } from "../../components/content/Profile"
import Sidebar from "../../components/Sidebar"
import Appbar from "../../components/Appbar"

// import Dashboard Layouts
// import DashboardLayouts from '../../layouts/DashboardLayouts'

// Import Assets Images
import ProfileIcon from "../../public/profile.svg"
import BusinessIcon from "../../public/bussiness.svg"
import CurrencyIcon from "../../public/Statistics/clockIcon.svg"
import InvoiceIcon from "../../public/Statistics/invoiceIcon.svg"
import GroupIcon from "../../public/Statistics/groupIcon.svg"
import clockIcon from "../../public/Statistics/clockIcon.svg"
import DoughnutChart from '../../components/chart/Doughnut'
import LineChart from '../../components/chart/LineChart'
import CountUp from 'react-countup'

// interface NumStatistics
interface InterfaceStatistics {
	imgStatistics: any,
	altStatistics: string,
	title: string,
	count: number
}

// NumStatistics Component
const NumStatistics = ({ imgStatistics, altStatistics, title, count } : InterfaceStatistics) => {
	return (
		<React.Fragment>
			<div className="flex items-center">
				<Image src={imgStatistics} alt={altStatistics} />
				<p className="font-bold pl-2 text-[#202E63]">{ title }</p>
			</div>
			<h1 className="text-[64px] font-extrabold pt-3"><CountUp end={count} duration={4} /></h1>
		</React.Fragment>
	)
}

// Homepages
const Dashboard: NextPage = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Dashboard - Timvoice</title>
				<meta name="description" content="dashboard invoice" />
				<meta httpEquiv="X-UA Compatible" content="IE-Edge" />
				<meta name="author" content="timvoice corp" />
			</Head>
			{/* Sidebar */}
			<div className="w-full max-w-[1440px] mx-auto flex">
				<Sidebar />
				{/* Application Bar */}
				<div className="flex w-full ml-[240px] h-24 flex-col">
                     		<Appbar />
					{/* <!-- Profiile Completeness --> */}
                     		<Profile />
					{/* <!-- Summary and Revenue --> */}
					<div className="w-[1240px] h-auto px-16 bg-blue-50 flex justify-between">
						{/* <!-- Summary Chart --> */}
						<div className="w-[40%] h-auto py-8 px-10 bg-white rounded-lg">
							<h1 className="font-bold text-heading-sm">Ringkasan</h1>
							<DoughnutChart />
							{/* <!-- <InvoicesChart /> --> */}
							{/* <LineChart :chartData="usersData" :options="chartOptions" class="line-chart" /> */}
						</div>
						{/* <!--  RevenueStatistics --> */}
						<div className="w-[60%] h-auto py-8 px-10 bg-white rounded-lg ml-8">
							<div className="flex justify-between items-center">
								<h1 className="font-bold text-heading-sm">Pendapatan</h1>
								
								{/* <Dropdowns /> */}
							</div>
							<div className="w-full flex justify-between mt-8">
							<LineChart />
							{/* <!-- Line Chart Components --> */}
							{/* <LineChart :chartData="chartData" :options="chartOptions" class="line-chart" /> */}
							</div>
						</div>
					</div>
					{/* <!-- Number Stats --> */}
					<div className="w-[1240px] h-auto py-8 px-16 bg-blue-50">
						<div className="w-full bg-white h-[200px] rounded-lg py-10 px-10 flex items-center justify-between">
							<div className="w-[24%] border-r border-gray-400">
								<NumStatistics imgStatistics={CurrencyIcon} altStatistics='revenue' title='Total Revenue' count={1200} />
							</div>
							<div className="w-[24%] pl-6 border-r border-gray-400">
								<NumStatistics imgStatistics={InvoiceIcon} altStatistics='invoice' title='Invoice' count={1289} />
							</div>
							<div className="w-[24%] pl-6 border-r border-gray-400">
							<NumStatistics imgStatistics={GroupIcon} altStatistics='group' title='Total Klien' count={768} />
							</div>
							<div className="w-[24%] pl-6">
							<NumStatistics imgStatistics={clockIcon} altStatistics='outstanding' title='Outstanding' count={888} />
							</div>
						</div>
					</div>
					{/* <!-- Recent Activity and Invoices --> */}
					<div className="w-[1240px] h-auto px-16 pb-20 bg-blue-50 flex justify-between">
						{/* <!-- Recent --> */}
						<div className="w-[45%] py-6 px-10 h-auto bg-white rounded-lg">
							<div className="flex justify-between items-center">
								<h1 className="font-bold text-heading-sm">Aktivitas Terbaru</h1>
								<a href="/admin/dashboard/recent-activities" className="text-[#405DC7] text-md-regular font-bold">Lihat semua</a>
							</div>
							{/* <!-- Items Recent Activity --> */}
							<div className="mt-6 rounded-lg h-auto">
								<RecentActivity srcImage={BusinessIcon} altImage='bussiness' title="Tagihan baru" subtitle="membuat tagihan" spanText='Ferdian Ahmad' spanTextTwo='Logo Design Marketplace' timestamp='Kamis, 22 Januari 2023' />
								<RecentActivity srcImage={ProfileIcon} altImage='profile' title="Pengingat" subtitle="akan dikirim oleh" spanText='Invoice TU-3652' spanTextTwo='John Smith' timestamp='Sabtu, 22 Januari 2023' />
								<RecentActivity srcImage={BusinessIcon} altImage='bussiness' title="Tagihan baru" subtitle="membuat tagihan" spanText='Ferdian Ahmad' spanTextTwo='Logo Design Marketplace' timestamp='Kamis, 22 Januari 2023' />
							</div>
						</div>
						{/* <!-- Recent Invoice --> */}
						<div className="w-[55%] py-6 px-10 h-auto bg-white rounded-lg ml-8">
							<RecentInvoices />
						</div>
					</div>
                     	</div>
			</div>
		</React.Fragment>
	)
}

export default Dashboard
