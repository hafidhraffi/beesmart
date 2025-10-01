import { useQuery } from "@tanstack/react-query"
import api from "../../services/api"
import PortfolioCard from "../home_page/PortfolioCard"
import { InputText } from "primereact/inputtext"
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useState } from "react"
import { Helmet } from "react-helmet"

type PortofolioType = {
    _id: string,
    foto: string,
    instansi: string,
    jenis: string,
    nama: string,
    tanggal: string
}

function PortofolioPage() {
    const [selectedCategory, setSelectedCategory] = useState<{ label: string; key: string; }>({ label: "Semua", key: "" })
    const [searchKey, setSearchKey] = useState("")

    const fetchPortofolioData = async () => {
        const { data } = await api.get<PortofolioType[]>("/get-portofolio")
        return data
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['portofolio_data_portofolio_page'],
        queryFn: fetchPortofolioData,
    })

    const categoryOptions = [
        {
            label: "Semua",
            key: ""
        },
        {
            label: "Kalender",
            key: "kalender"
        },
        {
            label: "Buku",
            key: "buku"
        },
        {
            label: "Buku Tahunan",
            key: "buku tahunan"
        },
        {
            label: "Majalah",
            key: "majalah"
        }
    ]

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Portofolio Beesmart - Contoh Buku, Kalender, Majalah, dan lainnya</title>
                <link rel="canonical" href="https://beesmart-gamma.vercel.app/portofolio" />
                <meta name="description" content="Lihat portofolio Beesmart Solusi Media, perusahaan percetakan profesional yang telah menghasilkan berbagai buku, kalender, majalah, dan produk cetak berkualitas tinggi. Temukan inspirasi dari hasil karya kami." />
                <meta name="keywords" content="Beesmart Solusi Media, portofolio percetakan, percetakan buku, percetakan kalender, percetakan majalah, hasil cetak profesional" />
            </Helmet>
            {data ? (
                <>
                    <div className="w-full flex justify-center">
                        <div className="px-5 sm:px-20 justify-center w-[1520px]">
                            <div className='mt-28 flex flex-col pb-20 items-center gap-10'>
                                <p className='font-bold text-2xl'>Portofolio</p>
                                <div className="w-full flex flex-col gap-5">
                                    <div className="w-full flex flex-wrap gap-5 justify-between items-center">
                                        <div className="flex flex-wrap gap-5">
                                            {
                                                categoryOptions.map((element, index) => {
                                                    return (
                                                        <div onClick={() => setSelectedCategory(element)} className={`whitespace-nowrap cursor-pointer ${selectedCategory.label === element.label ? "text-[#017d9e]" : ""}`} key={index}>{element.label}</div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="p-inputgroup max-w-[300px]">
                                            <span className="p-inputgroup-addon h-10">
                                                <MagnifyingGlassIcon className="h-5" />
                                            </span>
                                            <InputText
                                                placeholder="Cari Portofolio"
                                                className="h-10"
                                                value={searchKey}
                                                onChange={(e) => setSearchKey(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <hr className="w-full bg-gray-500"></hr>
                                </div>
                                <div className='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-5 w-full'>
                                    {
                                        data.filter((element) => element.jenis.toLowerCase().includes(selectedCategory.key)).filter((element) => element.instansi.toLowerCase().includes(searchKey.toLowerCase())).map((element, index: number) => {
                                            return (
                                                <PortfolioCard key={index} img={element.foto} client={element.instansi} productType={element.jenis} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
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

export default PortofolioPage