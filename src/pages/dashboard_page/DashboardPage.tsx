import { useEffect, useState } from 'react'
import beesmartLogo from '../../assets/beesmart.png'
import { Squares2X2Icon, PencilSquareIcon } from '@heroicons/react/20/solid'
import { useNavigate } from "react-router"
import EditsSection from './EditsSection'
import axios from 'axios'

function DashboardPage() {
    const navigate = useNavigate()
    const [selectedMenu, setSelectedMenu] = useState('dashboard')
    const [welcomeMessage, setWelcomeMessage] = useState(null)

    const logoutAction = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
            return;
        }

        const validateAdmin = async () => {
            try {
                const res = await axios.post(
                    "https://beesmart-sm.vercel.app/admin",
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (res.status === 200) {
                    setWelcomeMessage(res.data.message)
                }

                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (error: any) {
                if (error.status === 401) {
                    localStorage.removeItem("token")
                    navigate("/login")
                }
            }
        };

        validateAdmin();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="w-full flex justify-center shadow-lg fixed z-50 bg-white">
                <div className="px-5 sm:px-20 w-[1480px] flex justify-between py-4">
                    <img src={beesmartLogo} className='h-8' />
                    <a onClick={logoutAction} className='cursor-pointer hover:text-[#017d9e]'>Logout</a>
                </div>
            </div>
            <div className='flex'>
                <div className='min-w-20 h-auto min-h-screen bg-[#017d9e] z-10 pt-24 text-white flex flex-col gap-5'>
                    <Squares2X2Icon onClick={() => setSelectedMenu('dashboard')} className={`h-8 cursor-pointer mx-auto hover:scale-105 active:scale-95 rounded-md ${selectedMenu === "dashboard" ? 'bg-white text-[#017d9e]' : ''} `} />
                    <PencilSquareIcon onClick={() => setSelectedMenu('edits')} className={`h-8 cursor-pointer mx-auto hover:scale-105 active:scale-95 rounded-md ${selectedMenu === "edits" ? 'bg-white text-[#017d9e]' : ''}`} />
                </div>
                <div className='w-full mt-20'>
                    <p className='ml-10 font-semibold text-lg'>{welcomeMessage}</p>
                    {
                        selectedMenu === 'dashboard' ?
                            <></>
                            :
                            <EditsSection />
                    }
                </div>
            </div>
        </>
    )
}

export default DashboardPage