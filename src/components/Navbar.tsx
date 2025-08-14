import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import { useLocation, useNavigate } from 'react-router'
import beesmartLogo from '../assets/beesmart.png'

export default function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()
    const [showSideBar, setShowSideBar] = useState<boolean>(false)
    const pages = [
        { path: "/", text: "Beranda", },
        { path: "/about", text: "Tentang Kami", },
        { path: "/products", text: "Blog", },
        { path: "/products", text: "Portofolio", },
        { path: "/products", text: "Kontak", },
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
                            return (
                                <div key={index} onClick={() => navigate(data.path)} className={`cursor-default relative inline-block transition-all active:scale-95 hover:text-cyan-700 ${location.pathname == data.path ? 'text-cyan-700' : ''}`}>
                                    {data.text}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={`z-10 w-screen flex justify-center fixed text-[#1b3434] shadow-lg bg-white`}>
                <div className={`px-5 sm:px-20 h-16 w-[1280px] flex justify-between items-center`}>
                    <div onClick={() => navigate("/")} className="cursor-default flex gap-2">
                        <img src={beesmartLogo} className='h-8' />
                    </div>
                    <div className="hidden lg:flex gap-9 h-full items-center">
                        {
                            pages.map((data, index) => {
                                return (
                                    <div key={index} onClick={() => navigate(data.path)} className={`cursor-default relative transition-all active:scale-95 hover:text-cyan-700 ${location.pathname == data.path ? 'text-cyan-700' : ''}`}>
                                        {data.text}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='lg:hidden flex justify-end'>
                        <Bars3Icon onClick={() => setShowSideBar(true)} className={`transition-all h-[36px] m-5 hover:scale-110 active:scale-95`} />
                    </div>
                </div>
            </div>
        </>
    )
}