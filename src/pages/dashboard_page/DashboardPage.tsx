import { useEffect, useState } from 'react'
import beesmartLogo from '../../assets/beesmart.png'
import { Squares2X2Icon, PencilSquareIcon } from '@heroicons/react/20/solid'
import { useNavigate } from "react-router"
import EditsSection from './EditsSection'
import axios from 'axios'
import ServiceVisitorChart from './ServiceVisitorChart'
import { useQuery } from '@tanstack/react-query'
import api from '../../services/api'

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

    const fetchStatistikData = async () => {
        const { data } = await api.get("/statistik")
        return data
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['statistik_data'],
        queryFn: fetchStatistikData,
    })

    const formatKey = (key: string) => {
        return key
            .replace(/_/g, " ") // ubah underscore jadi spasi
            .replace(/\b\w/g, (char) => char.toUpperCase()); // kapital setiap kata
    };

    return (
        <>
            {data ? (
                <>
                    <div className="w-full flex justify-center shadow-lg fixed z-50 bg-white">
                        <div className="px-5 sm:px-20 w-[1520px] flex justify-between py-4">
                            <img src={beesmartLogo} className='h-8' />
                            <a onClick={logoutAction} className='cursor-pointer hover:text-[#017d9e]'>Logout</a>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='min-w-20 min-h-screen h-auto bg-[#017d9e] z-10 pt-24 text-white flex flex-col gap-5'>
                            <Squares2X2Icon onClick={() => setSelectedMenu('dashboard')} className={`h-8 cursor-pointer mx-auto hover:scale-105 active:scale-95 rounded-md ${selectedMenu === "dashboard" ? 'bg-white text-[#017d9e]' : ''} `} />
                            <PencilSquareIcon onClick={() => setSelectedMenu('edits')} className={`h-8 cursor-pointer mx-auto hover:scale-105 active:scale-95 rounded-md ${selectedMenu === "edits" ? 'bg-white text-[#017d9e]' : ''}`} />
                        </div>
                        <div className='w-full pt-20'>
                            <p className='mx-10 font-semibold text-lg'>{welcomeMessage}</p>
                            {
                                selectedMenu === 'dashboard' ?
                                    <>
                                        <div className='mx-10 my-5 flex gap-5 flex-wrap'>
                                            {Object.entries(data).map(([item, total], index) => (
                                                <div
                                                    key={index}
                                                    className="border border-gray-400 rounded-lg w-fit max-lg:w-[250px] px-5 h-24 flex flex-col justify-evenly"
                                                >
                                                    <p>Total pengunjung {formatKey(item)}</p>
                                                    <div className='flex items-center gap-5'>
                                                        <p className='text-3xl font-bold'>{total as string}</p>
                                                        <p>Pengunjung</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <ServiceVisitorChart />
                                    </>
                                    :
                                    <EditsSection />
                            }
                        </div>
                    </div>
                </>
            ) : isLoading ? (
                <div className='flex justify-center items-center h-[500px]'>
                    <p>Loading...</p>
                </div>
            ) : isError ? (
                <div className='flex justify-center items-center h-[500px]'>
                    <p>{error.message}</p>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default DashboardPage