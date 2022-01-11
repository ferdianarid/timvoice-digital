import React, { useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"

// Import Assets Icons
import TimvoiceLogo from "../public/timvoice-white.svg"
import IconDashboard from "../public/iconDashboard/pieChart.svg"
import IconClient from "../public/iconDashboard/users.svg"
import IconProject from "../public/iconDashboard/folder.svg"
import IconProposals from "../public/iconDashboard/news.svg"
import IconContract from "../public/iconDashboard/documents.svg"
import IconInvoice from "../public/iconDashboard/reports.svg"
import IconSupport from "../public/iconDashboard/questions.svg"
import IconSettings from "../public/iconDashboard/settings.svg"

// Interface Menu List Component
import { InterfaceMenu } from '../interfaces/Sidebar'

// Sidebar Components
const Sidebar = () => {
       return (
              <React.Fragment>
                     {/* Sidebar */}
                     <div className="sidebar fixed z-10 w-[240px] bg-[#202E63] pb-[67rem] px-8">
                            <div className="py-8 border-b border-opacity-80 border-white mb-7">
                                   {/* Tiimvoice Logo */}
                                   <Link href="/">
                                          <Image src={TimvoiceLogo} />
                                   </Link>
                            </div>
                            {/* Menu List Components */}
                            <MenuList iconMenu={IconDashboard} href="/admin/dashboard">Dashboard</MenuList>
                            <MenuList iconMenu={IconClient} href="/admin/client">Klien</MenuList>
                            <MenuList iconMenu={IconProject} href="/admin/project">Projek</MenuList>
                            <MenuList iconMenu={IconProposals} href="/admin/proposals">Proposals</MenuList>
                            <MenuList iconMenu={IconContract} href="/admin/contract">Kontrak</MenuList>
                            <MenuList iconMenu={IconInvoice} href="/admin/invoices">Tagihan</MenuList>
                            <MenuList iconMenu={IconSupport} href="/admin/support">Dukungan</MenuList>
                            <MenuList iconMenu={IconSettings} href="/admin/settings">Pengaturan</MenuList>
                     </div>
              </React.Fragment>
       )
}

// Menu List Components
const MenuList = ({ href, iconMenu, children }: InterfaceMenu) => {
       // State Active when located in Current Page
       const currentPage = window.location.pathname === href
       return (
              <div className={`${currentPage && "bg-[#32489A]"} cursor-pointer text-white hover:bg-[#32489A] py-[10px] my-2 px-3 rounded-md flex items-center transition-all hover:cursor-pointer`}>
                     <Link href={href}>
                            <div className="flex items-center">
                                   <Image src={iconMenu} width={20} />
                                   <h1 className="font-bold pl-[6px] text-white text-[15px]">{children}</h1>
                            </div>
                     </Link>
              </div>
       )
}

export default Sidebar