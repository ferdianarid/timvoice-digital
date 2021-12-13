import React from 'react'
import Image from "next/image"

// Import Assets
import CloseIcon from "../../public/x.svg"
import ProfileIcon from "../../public/profile.svg"
import BussinessIcon from "../../public/bussiness.svg"

// Interface Profile Card Component
interface InterfaceProfile {
       imageIcon: string,
       imageAlt: string,
       title: string,
       subtitle: string
}

// Profile Card Component
const ProfileCard = ( props : InterfaceProfile ) => {
       // Desctructuring Props
       const {imageIcon, imageAlt, title, subtitle } = props
       return (
              <div className="profile-details hover:cursor-pointer flex items-center py-3 px-4 bg-[#92aaff] bg-opacity-10 hover:bg-opacity-20 w-[325px] rounded-lg">
                     <Image src={imageIcon} alt={imageAlt} />
                     <div className="ml-4">
                            {/* <!-- profile details --> */}
                            <a href="/admin/dashboard/profile-details">
                                   <p className="text-lg-regular font-bold">{title}</p>
                                   <p className="text-md-regular text-gray-400">{subtitle}</p>
                            </a>
                     </div>
              </div>
       )
}

// Profile Component
const Profile = () => {
       return (
              <React.Fragment>
              {/* <!-- Profile Completeness --> */}
              <div className="w-[1240px] h-auto py-8 px-16 bg-blue-50">
                     <div className="popUp bg-[#ffffff] shadow-shadow-3 w-full rounded-lg p-6">
                            <div className="flex items-center justify-between">
                                   {/* Heading */}
                                   <h1 className="text-[20px] mb-6 font-bold">Lengkapi Profil Anda</h1>
                                   {/* <!-- close button --> */}
                                   <a className="mb-6">
                                          <Image src={CloseIcon} alt="closeButton" />
                                   </a>
                             </div>
                             {/* Profile Cards */}
                             <div className="flex justify-between gap-x-2">
                                   <ProfileCard imageIcon={ProfileIcon} imageAlt="Profile" title="Detil Profil" subtitle="Tambah No. Telepon" />
                                   <ProfileCard imageIcon={BussinessIcon} imageAlt="Business" title="Detil Bisnis" subtitle="Tambah Alamat Bisnis" />
                                   <ProfileCard imageIcon={BussinessIcon} imageAlt="Invoices" title="Kustomisasi Tagihan" subtitle="Unggah logo anda" />
                            </div>
                     </div>
              </div>
              </React.Fragment>
       )
}

export { ProfileCard, Profile }