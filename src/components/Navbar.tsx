import { useState } from 'react'
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { useLocation, useNavigate } from 'react-router'
import beesmartLogo from '../assets/beesmart.png'

export default function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()
    const [showSideBar, setShowSideBar] = useState<boolean>(false)
    const pages = [
        { path: "/", text: "Beranda", },
        { path: "/tentang-kami", text: "Tentang Kami", },
        { path: "/blog", text: "Blog", },
        { path: "/portofolio", text: "Portofolio", },
        { path: "/kontak", text: "Kontak", },
    ]

    return (
        <>
            <div onClick={() => setShowSideBar(false)} className={`fixed h-svh w-svw z-40 transition-all duration-1000 ${showSideBar ? "bg-[rgba(0,0,0,0.4)]" : "bg-transparent pointer-events-none"}`}></div>
            <div className={`h-svh w-72 bg-white fixed z-50 transition-all duration-500 ${showSideBar ? "right-0" : "-right-72"}`}>
                <div className='flex justify-end'>
                    <XMarkIcon onClick={() => setShowSideBar(false)} className={`transition-all h-[36px] m-5 hover:scale-110 active:scale-95`} />
                </div>
                <div className='flex flex-col gap-5 mx-7'>
                    {
                        pages.map((data, index) => {
                            if (data.text === "Blog") {
                                return (
                                    <a key={index} href='/blog' className={`cursor-pointer relative inline-block transition-all active:scale-95 hover:text-[#017d9e] ${location.pathname == data.path ? 'text-[#017d9e]' : ''}`}>
                                        {data.text}
                                    </a>
                                )
                            } else {
                                return (
                                    <div key={index} onClick={() => navigate(data.path)} className={`cursor-pointer relative inline-block transition-all active:scale-95 hover:text-[#017d9e] ${location.pathname == data.path ? 'text-[#017d9e]' : ''}`}>
                                        {data.text}
                                    </div>
                                )
                            }
                        })
                    }
                    <a href='https://wa.me/6281282008045' className='w-fit flex items-center border border-[#017d9e] rounded-sm cursor-pointer hover:scale-105 active:scale-95 transition-all'>
                        <PhoneIcon className='h-5 text-[#017d9e] mx-2' />
                        <p className='text-white bg-[#017d9e] px-3 py-1'>Hubungi Kami</p>
                    </a>
                </div>
            </div>
            <div className={`z-10 w-screen flex justify-center fixed text-[#1b3434] shadow-lg bg-white`}>
                <div className={`px-5 sm:px-20 h-16 w-[1520px] flex justify-between items-center`}>
                    <div onClick={() => navigate("/")} className="cursor-default flex gap-2">
                        <img src={beesmartLogo} className='h-8' />
                    </div>
                    <div className="hidden lg:flex gap-9 h-full items-center">
                        {
                            pages.map((data, index) => {
                                if (data.text === "Blog") {
                                    return (
                                        <a key={index} href='/blog' className={`cursor-pointer relative transition-all active:scale-95 hover:text-[#017d9e] ${location.pathname == data.path ? 'text-[#017d9e]' : ''}`}>
                                            {data.text}
                                        </a>
                                    )
                                } else {
                                    return (
                                        <div key={index} onClick={() => navigate(data.path)} className={`cursor-pointer relative transition-all active:scale-95 hover:text-[#017d9e] ${location.pathname == data.path ? 'text-[#017d9e]' : ''}`}>
                                            {data.text}
                                        </div>
                                    )
                                }
                            })
                        }
                        <a href='https://wa.me/6281282008045' className='flex items-center border border-[#017d9e] rounded-sm cursor-pointer hover:scale-105 active:scale-95 transition-all'>
                            <PhoneIcon className='h-5 text-[#017d9e] mx-2' />
                            <p className='text-white bg-[#017d9e] px-3 py-1'>Hubungi Kami</p>
                        </a>
                    </div>
                    <div className='lg:hidden flex justify-end'>
                        <Bars3Icon onClick={() => setShowSideBar(true)} className={`transition-all h-[36px] m-5 hover:scale-110 active:scale-95`} />
                    </div>
                </div>
            </div>
        </>
    )
}