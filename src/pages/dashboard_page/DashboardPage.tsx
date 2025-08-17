import { useState } from 'react'
import beesmartLogo from '../../assets/beesmart.png'
import { Squares2X2Icon, PencilSquareIcon } from '@heroicons/react/20/solid'
import { useNavigate } from "react-router"
import EditsSection from './EditsSection'

function DashboardPage() {
    const navigate = useNavigate()
    const [selectedMenu, setSelectedMenu] = useState('dashboard')

    return (
        <>
            <div className="w-full flex justify-center shadow-lg fixed z-50 bg-white">
                <div className="px-5 sm:px-20 w-[1280px] flex justify-between py-4">
                    <img src={beesmartLogo} className='h-8' />
                    <a onClick={() => navigate("/login")} className='cursor-pointer hover:text-[#017d9e]'>Logout</a>
                </div>
            </div>
            <div className='flex'>
                <div className='w-20 h-screen bg-[#017d9e] z-10 pt-24 text-white flex flex-col gap-5'>
                    <Squares2X2Icon onClick={() => setSelectedMenu('dashboard')} className={`h-8 cursor-pointer mx-auto hover:scale-105 active:scale-95 rounded-md ${selectedMenu === "dashboard" ? 'bg-white text-[#017d9e]' : ''} `} />
                    <PencilSquareIcon onClick={() => setSelectedMenu('edits')} className={`h-8 cursor-pointer mx-auto hover:scale-105 active:scale-95 rounded-md ${selectedMenu === "edits" ? 'bg-white text-[#017d9e]' : ''}`} />
                </div>
                {
                    selectedMenu === 'dashboard' ?
                        <></>
                        :
                        <EditsSection />
                }
            </div>
        </>
    )
}

export default DashboardPage