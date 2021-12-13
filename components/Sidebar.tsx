import React, { ReactNode } from 'react'
import Link from "next/link"
import Image from "next/image"

import TimvoiceLogo from "../public/timvoice-white.svg"
import IconDashboard from "../public/iconDashboard/pieChart.svg"
import IconClient from "../public/iconDashboard/users.svg"
import IconProject from "../public/iconDashboard/folder.svg"
import IconProposals from "../public/iconDashboard/news.svg"
import IconContract from "../public/iconDashboard/documents.svg"
import  IconInvoice from "../public/iconDashboard/reports.svg"
import IconSupport from "../public/iconDashboard/questions.svg"
import IconSettings from "../public/iconDashboard/settings.svg"
import IconSearch from "../public/iconDashboard/search.svg"

interface InterfaceMenu {
       href: string,
       iconMenu: string,
       children: ReactNode
}

const Sidebar = () => {
       return (
              <React.Fragment>
                     <div className="sidebar fixed z-10 w-[240px] bg-[#202E63] pb-[67rem] px-8">
                            <div className="py-8 border-b border-opacity-80 border-white">
                                   <Link href="/">
                                          <Image src={TimvoiceLogo} />
                                   </Link>
                            </div>

                            <div className="mt-7 bg-[#32489A] py-[10px] px-3 rounded-md flex items-center transition-all hover:cursor-pointer">
                                   <Link href="/admin/dashboard">
                                          <div className="flex items-center">
                                                 <Image src={IconDashboard} width={20} />
                                                 <h1 className="font-bold pl-[6px] text-white text-[15px]">Dashboard</h1>
                                          </div>
                                   </Link>
                            </div>

                            <MenuList iconMenu={IconClient} href="/admin/dashboard">Klien</MenuList>
                            <MenuList iconMenu={IconProject} href="/admin/dashboard">Projek</MenuList>
                            <MenuList iconMenu={IconProposals} href="/admin/dashboard">Proposals</MenuList>
                            <MenuList iconMenu={IconContract} href="/admin/dashboard">Kontrak</MenuList>
                            <MenuList iconMenu={IconInvoice} href="/admin/dashboard">Tagihan</MenuList>
                            <MenuList iconMenu={IconSupport} href="/admin/dashboard">Dukungan</MenuList>
                            <MenuList iconMenu={IconSettings} href="/admin/dashboard">Pengaturan</MenuList>

                     </div>
              </React.Fragment>
       )
}

const MenuList = ({ href, iconMenu, children } : InterfaceMenu) => {
       const currentPage = window.location.pathname === href;
       return (
              <div className="mt-1 bg-none hover:bg-[#32489A] hover:font-bold transition-all hover:cursor-pointer py-[10px] px-3 rounded-md flex items-center">
                     <Link href={href}>
                            <div className="flex items-center">
                                   <Image src={iconMenu} width={20} />
                                   <h1 className="font-bold pl-[6px] text-white text-[15px]">{ children }</h1>
                            </div>
                     </Link>
              </div>
       )
}

export default Sidebar