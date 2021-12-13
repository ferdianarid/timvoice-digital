import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Link from "next/link"
import Image from "next/image"

import Sidebar from '../components/Sidebar'
import Appbar from '../components/Appbar'

import { Profile, ProfileCard } from "../components/content/Profile"

import RecentActivity from '../components/RecentActivity'

import ProfileIcon from "../public/profile.svg"
import BusinessIcon from "../public/bussiness.svg"

const Home: NextPage = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Dashboard - Timvoice</title>
				<meta name="description" content="dashboard invoice" />
				<meta httpEquiv="X-UA Compatible" content="IE-Edge" />
				<meta name="author" content="timvoice corp" />
			</Head>
			<div className="w-full max-w-[1440px] mx-auto flex">
				<Sidebar />
				<div className="flex w-full ml-[240px] h-24 flex-col">
                     		<Appbar />
					{/* <!-- Profiile Completeness --> */}
                     		<Profile />
					{/* <!-- Summary and Revenue --> */}
					<div className="w-[1240px] h-auto px-16 bg-blue-50 flex justify-between">
						{/* <!-- Summary Chart --> */}
						<div className="w-[40%] h-auto py-8 px-10 bg-white rounded-lg">
							<h1 className="font-bold text-heading-sm">Ringkasan</h1>
							<div className="mt-4">
									<ProfileCard imageIcon={ProfileIcon} imageAlt="Profile" title="Profile Completeness" subtitle="Complete your profile" />
							</div>
							{/* <!-- <InvoicesChart /> --> */}
							{/* <LineChart :chartData="usersData" :options="chartOptions" class="line-chart" /> */}
						</div>
						{/* <!--  RevenueStatistics --> */}
						<div className="w-[60%] h-auto py-8 px-10 bg-white rounded-lg ml-8">
							<div className="flex justify-between items-center">
								<h1 className="font-bold text-heading-sm">Pendapatan</h1>
								{/* <Dropdowns /> */}
							</div>
							<div className="w-full flex justify-between">
								<div className="mt-4">
									<ProfileCard imageIcon={ProfileIcon} imageAlt="Profile" title="Profile Completeness" subtitle="Complete your profile" />
								</div>
							{/* <!-- Line Chart Components --> */}
							{/* <LineChart :chartData="chartData" :options="chartOptions" class="line-chart" /> */}
							</div>
						</div>
					</div>
					{/* <!-- Number Stats --> */}
					<div className="w-[1240px] h-auto py-8 px-16 bg-blue-50">
						<div className="w-full bg-white h-[200px] rounded-lg py-10 px-10 flex items-center justify-between">
							<div className="w-[24%] border-r border-gray-400">
								<div className="flex items-start">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#202E63">
									<path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
									</svg>
									<p className="font-bold pl-2 text-[#202E63]">Total Revenue</p>
								</div>
								<h1 className="text-[64px] font-extrabold pt-3">120K</h1>
							</div>
							<div className="w-[24%] pl-6 border-r border-gray-400">
								<div className="flex items-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#202E63">
										<path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clip-rule="evenodd" />
									</svg>
								<p className="font-bold pl-2 text-[#202E63]">Invoice</p>
								</div>
								<h1 className="text-[64px] font-extrabold pt-3">1276</h1>
							</div>
							<div className="w-[24%] pl-6 border-r border-gray-400">
								<div className="flex items-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#202E63">
										<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
									</svg>
									<p className="font-bold pl-2 text-[#202E63]">Total Klien</p>
								</div>
								<h1 className="text-[64px] font-extrabold pt-3">672</h1>
							</div>
							<div className="w-[24%] pl-6">
								<div className="flex items-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#202E63">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
									</svg>
									<p className="font-bold pl-2 text-[#202E63]">Outstanding</p>
								</div>
								<h1 className="text-[64px] font-extrabold pt-3">$356</h1>
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
								<div className="py-4 flex hover:bg-blue-50 hover:rounded-lg hover:cursor-pointer">
									<Image src={BusinessIcon} alt="profile" className="pt-0" />
									<div className="pl-4">
										<p className="text-md-regular font-bold pt-1">Pengingat</p>
										<p className="text-md-regular text-gray-500 pt-1">
											<span className="font-bold">Invoice TU-2369</span> reminder was sent to <span className="font-bold">Elizabeth Diningrat</span></p>
										<p className="text-md-regular text-gray-500 pt-1 font-normal">Kemarin, 5:34 PM</p>
									</div>
								</div>
								<div className="py-4 flex hover:bg-blue-50 hover:rounded-lg hover:cursor-pointer">
									<Image src={ProfileIcon} alt="profile" className="pt-0" />
									<div className="pl-4">
										<p className="text-md-regular font-bold pt-1">Tagihan Baru</p>
										<p className="text-md-regular text-gray-500 pt-1">
											<span className="font-bold">Udin Alexander</span> membuat tagihan <span className="font-bold">PD-6679B</span></p>
										<p className="text-md-regular text-gray-500 pt-1 font-normal">Baru saja</p>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- Invoice --> */}
						<div className="w-[55%] py-6 px-10 h-auto bg-white rounded-lg ml-8">
							<div className="flex justify-between items-center">
								<h1 className="font-bold text-heading-sm">Tagihan baru saja</h1>
								<a href="/admin/dashboard/recent-invoices" className="text-[#405DC7] text-md-regular font-bold">See All</a>
							</div>
							{/* <!-- Items Recent Invoices --> */}
							<div className="w-full mt-6 rounded-lg h-auto">
								<table className="text-blue-800 rounded-t-lg rounded-b-lg w-full">
								<tr className="text-left border-b-2 border-indigo-300">
									<th className="px-4 py-3">ID</th>
									<th className="px-4 py-3">Tanggal</th>
									<th className="px-4 py-3">Klien</th>
									<th className="px-4 py-3">Jumlah</th>
									<th className="px-4 py-3">Status</th>
								</tr>
								<tr className="">
									<td className="px-4 py-3">NG25</td>
									<td className="px-4 py-3">28/09/2021</td>
									<td className="px-4 py-3">Mike</td>
									<td className="px-4 py-3">$597</td>
									<td className="px-4 py-3">Dibayar</td>
								</tr>
								<tr className="">
									<td className="px-4 py-3">NG25</td>
									<td className="px-4 py-3">28/09/2021</td>
									<td className="px-4 py-3">Karlson</td>
									<td className="px-4 py-3">$637</td>
									<td className="px-4 py-3">Tertunda</td>
								</tr>
								<tr className="">
									<td className="px-4 py-3">NG25</td>
									<td className="px-4 py-3">28/09/2021</td>
									<td className="px-4 py-3">Rissa</td>
									<td className="px-4 py-3">$224</td>
									<td className="px-4 py-3">Dibayar</td>
								</tr>
								<tr className="">
									<td className="px-4 py-3">NG25</td>
									<td className="px-4 py-3">28/09/2021</td>
									<td className="px-4 py-3">Mike</td>
									<td className="px-4 py-3">$597</td>
									<td className="px-4 py-3">Dibayar</td>
								</tr>
								<tr className="">
									<td className="px-4 py-3">NG25</td>
									<td className="px-4 py-3">28/09/2021</td>
									<td className="px-4 py-3">Karlson</td>
									<td className="px-4 py-3">$637</td>
									<td className="px-4 py-3">Tertunda</td>
								</tr>
								<tr className="">
									<td className="px-4 py-3">NG25</td>
									<td className="px-4 py-3">28/09/2021</td>
									<td className="px-4 py-3">Rissa</td>
									<td className="px-4 py-3">$224</td>
									<td className="px-4 py-3">Dibayar</td>
								</tr>
								<tr className="">
									<td className="px-4 py-3">NG25</td>
									<td className="px-4 py-3">28/09/2021</td>
									<td className="px-4 py-3">Mike</td>
									<td className="px-4 py-3">$597</td>
									<td className="px-4 py-3">Dibayar</td>
								</tr>
								<tr className="">
									<td className="px-4 py-3">NG25</td>
									<td className="px-4 py-3">28/09/2021</td>
									<td className="px-4 py-3">Karlson</td>
									<td className="px-4 py-3">$637</td>
									<td className="px-4 py-3">Tertunda</td>
								</tr>
								<tr className="">
									<td className="px-4 py-3">NG25</td>
									<td className="px-4 py-3">28/09/2021</td>
									<td className="px-4 py-3">Rissa</td>
									<td className="px-4 py-3">$224</td>
									<td className="px-4 py-3">Dibayar</td>
								</tr>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Home
