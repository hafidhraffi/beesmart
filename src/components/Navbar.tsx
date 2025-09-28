import { useEffect, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import { useLocation, useNavigate } from 'react-router'
import beesmartLogo from '../assets/beesmart.png'
import beesmartLogoW from '../assets/beesmart_white.png'
import igIcon from '../assets/ig_icon.png'
import ttIcon from '../assets/tt_icon.png'
import fbIcon from '../assets/fb_icon.png'
import waIcon from '../assets/wa_icon.png'
import waIconW from '../assets/wa_icon_white.png'

export default function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()
    const [navbarOpacity, setNavbarOpacity] = useState(0);
    const [showSideBar, setShowSideBar] = useState<boolean>(false)
    const [useOpacity, setUseOpacity] = useState<boolean>(false)
    const { pathname } = useLocation();
    const pathWithOpacityNavbar = [
        '/',
        '/buku-custom',
        '/kalender'
    ]
    const pages = [
        { path: "/", text: "Beranda", },
        { path: "/tentang-kami", text: "Tentang Kami", },
        { path: "/blog", text: "Blog", },
        { path: "/portofolio", text: "Portofolio", },
        { path: "/kontak", text: "Kontak", },
    ]

    useEffect(() => {
        setUseOpacity(pathWithOpacityNavbar.find((path) => path === pathname) ? true : false)
        setNavbarOpacity(pathWithOpacityNavbar.find((path) => path === pathname) ? 0 : 1)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY <= 100 && useOpacity) {
                const newOpacity = (window.scrollY / 100)
                setNavbarOpacity(newOpacity)
            } else {
                setNavbarOpacity(1)
            }
        };

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [useOpacity]);

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
                                    <a key={index} href='/blog' className={`cursor-pointer relative inline-block transition-all active:scale-95 hover:text-[#017d9e] ${location.pathname == data.path ? 'text-[#017d9e] font-semibold' : ''}`}>
                                        {data.text}
                                    </a>
                                )
                            } else {
                                return (
                                    <div key={index} onClick={() => navigate(data.path)} className={`cursor-pointer relative inline-block transition-all active:scale-95 hover:text-[#017d9e] ${location.pathname == data.path ? 'text-[#017d9e] font-semibold' : ''}`}>
                                        {data.text}
                                    </div>
                                )
                            }
                        })
                    }
                    <div className='flex gap-3'>
                        <a href="https://www.instagram.com/beesmart.sm/"><img src={igIcon} alt="Instagram" className="w-6 h-6 hover:scale-105 active:scale-95" /></a>
                        <a href="https://www.tiktok.com/@beesmart.co.id"><img src={ttIcon} alt="TikTok" className="w-6 h-6 hover:scale-105 active:scale-95" /></a>
                        <a href="https://www.facebook.com/BeeSmartSolusiMedia/"><img src={fbIcon} alt="Facebook" className="w-6 h-6 hover:scale-105 active:scale-95" /></a>
                        <a href="https://wa.me/6281282008045"><img src={waIcon} alt="Whatsapp" className="w-6 h-6 hover:scale-105 active:scale-95" /></a>
                    </div>
                </div>
            </div>
            <div className={`z-10 w-screen flex justify-center fixed ${navbarOpacity < 0.5 ? "text-white" : "text-[#1b3434]"} ${navbarOpacity == 0 ? '' : 'shadow-lg'}`} style={{
                backgroundColor: `rgba(255, 255, 255, ${navbarOpacity})`,
            }}>
                <div className={`px-5 sm:px-20 h-16 w-[1520px] flex justify-between items-center`}>
                    <div onClick={() => navigate("/")} className="cursor-default flex gap-2">
                        <img src={navbarOpacity < 0.5 ? beesmartLogoW : beesmartLogo} className='h-8' />
                    </div>
                    <div className="hidden lg:flex gap-9 h-full items-center">
                        {
                            pages.map((data, index) => {
                                if (data.text === "Blog") {
                                    return (
                                        <a key={index} href='/blog' className={`cursor-pointer relative transition-all active:scale-95 ${navbarOpacity < 0.5 ? "" : "hover:text-[#017d9e]"} ${location.pathname == data.path ? navbarOpacity < 0.5 ? 'font-semibold' : 'text-[#017d9e] font-semibold' : ''}`}>
                                            {data.text}
                                        </a>
                                    )
                                } else {
                                    return (
                                        <div key={index} onClick={() => navigate(data.path)} className={`cursor-pointer relative transition-all active:scale-95 ${navbarOpacity < 0.5 ? "" : "hover:text-[#017d9e]"} ${location.pathname == data.path ? navbarOpacity < 0.5 ? 'font-semibold' : 'text-[#017d9e] font-semibold' : ''}`}>
                                            {data.text}
                                        </div>
                                    )
                                }
                            })
                        }
                        <div className='flex gap-3'>
                            <a href="https://www.instagram.com/beesmart.sm/"><img src={navbarOpacity < 0.5 ? "https://beesmart-sm.vercel.app/static/images/ig.png" : igIcon} alt="Instagram" className="w-6 h-6 hover:scale-105 active:scale-95" /></a>
                            <a href="https://www.tiktok.com/@beesmart.co.id"><img src={navbarOpacity < 0.5 ? "https://beesmart-sm.vercel.app/static/images/tiktok.png" : ttIcon} alt="TikTok" className="w-6 h-6 hover:scale-105 active:scale-95" /></a>
                            <a href="https://www.facebook.com/BeeSmartSolusiMedia/"><img src={navbarOpacity < 0.5 ? "https://beesmart-sm.vercel.app/static/images/fb.png" : fbIcon} alt="Facebook" className="w-6 h-6 hover:scale-105 active:scale-95" /></a>
                            <a href="https://wa.me/6281282008045"><img src={navbarOpacity < 0.5 ? waIconW : waIcon} alt="Whatsapp" className="w-6 h-6 hover:scale-105 active:scale-95" /></a>
                        </div>
                    </div>
                    <div className='lg:hidden flex justify-end'>
                        <Bars3Icon onClick={() => setShowSideBar(true)} className={`transition-all h-[36px] m-5 hover:scale-110 active:scale-95`} />
                    </div>
                </div>
            </div>
        </>
    )
}