import HomepageBanner from '../../assets/homepage_banner.png'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import ProfessionalIcon from '../../assets/professional.png'
import FreeIcon from '../../assets/free.png'
import QualityIcon from '../../assets/quality.png'
import OnestopIcon from '../../assets/onestop.png'
import BookImage from '../../assets/tahunan.png'
import CalendarImage from '../../assets/kalender.png'
import BukuImage from '../../assets/custom.png'
import MajalahImage from '../../assets/majalah.png'
import konsulBrand from '../../assets/konsul_brand.png'
import konsulBudget from '../../assets/konsul_budget.png'
import desain from '../../assets/desain.png'
import kunjungan from '../../assets/kunjungan.png'
import pengiriman from '../../assets/pengiriman.png'
import SellingPointCard from './SellingPointCard'
import AchievementPoint from './AchievementPoint'
import TestimonialCard from './TestimonialCard'
import api from '../../services/api'
import { useQuery } from '@tanstack/react-query'
import type { HomePageData } from '../../types/homePageData'
import ClientCarousel from './ClientCarousel'
import { useNavigate } from 'react-router'

function HomePage() {
    const navigate = useNavigate()
    const fetchHomePageData = async (): Promise<HomePageData> => {
        const { data } = await api.get<HomePageData>("/get-beranda")
        return data
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['homepage_data'],
        queryFn: fetchHomePageData,
    })

    return (
        <>
            {
                data ?
                    <>
                        <div className='fixed -z-10 flex flex-col items-center w-full'>
                            <img src={HomepageBanner} className='min-w-[1520px] w-screen' />
                            <img src={HomepageBanner} className='min-w-[1520px] w-screen' />
                        </div>
                        <div className="w-full flex justify-center">
                            <div className="px-5 sm:px-20 w-[1520px]">
                                <div data-aos='fade-in' className='flex flex-col h-[730px] items-center justify-center gap-5'>
                                    <p className='text-white text-5xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl font-semibold text-center'>
                                        Bingung Cari Vendor Desain dan Cetak <br></br> yang Amanah dan Profesional?
                                    </p>
                                    <p className='text-white text-3xl max-sm:text-base max-md:text-lg max-lg:text-xl font-extralight text-center'>
                                        Sudah Habis Uang Banyak, Hasil Tidak Sesuai Harapan?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center bg-white">
                            <div className="px-5 sm:px-20 w-[1520px]">
                                <div data-aos="fade-up" className='flex max-lg:gap-10 gap-20 py-20 max-lg:flex-col'>
                                    <p className='text-5xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl font-bold'>Beesmart hadir untuk menjawab permasalahan Anda</p>
                                    <div className='flex flex-col gap-5 text-justify'>
                                        <p>
                                            Kami hadir sebagai mitra strategis bagi perusahaan dan instansi yang membutuhkan solusi cepat, tepat, dan terpercaya. Dengan layanan profesional dan hasil berkualitas, kami membantu bisnis Anda tumbuh lebih efisien dan berdaya saing.
                                        </p>
                                        <p>
                                            Kami menawarkan <span className='font-bold'>One Stop Service</span> mulai desain, cetak, finishing dan pengiriman ke lokasi Anda. Efisien dan solutif bagi bisnis dan instansi Anda.
                                        </p>
                                        <p>
                                            Kami mengerjakan berbagai produk cetak kreatif yang bisa disesuaikan sepenuhnya dengan kebutuhan Anda, mulai dari company profile, buku dan media promosi Anda
                                        </p>
                                        <div onClick={() => navigate("/tentang-kami")} className='flex bg-[#017d9e] rounded-full w-fit py-2 px-3 text-white items-center gap-2 cursor-pointer active:scale-95 hover:shadow-[#017d9e] hover:shadow transition-all'>
                                            <p>Tentang Kami</p>
                                            <ArrowRightIcon className='h-5' />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col py-20 items-center gap-10'>
                                    <p className='text-3xl'>Mengapa harus <span className='font-bold'>Beesmart?</span></p>
                                    <div className='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-5'>
                                        <SellingPointCard img={ProfessionalIcon} title={'Profesional'} desc={'Jasa layanan yang berpengalaman selama lebih dari 8 tahun dalam bidang desain dan cetak.'} />
                                        <SellingPointCard img={FreeIcon} title={'Gratis Konsultasi'} desc={'Layanan istimewa dari kami adalah konsultasi untuk desain yang sesuai dengan branding sekolah anda dan itu gratis.'} />
                                        <SellingPointCard img={QualityIcon} title={'Kualitas Terpercaya'} desc={'Hasil cetak berkualitas tinggi dengan harga yang tetap kompetitif dan terjangkau.'} />
                                        <SellingPointCard img={OnestopIcon} title={'One Stop Service'} desc={'Dari desain hingga pengiriman, semua online. Tinggal pesan, pesanan sampai di tempat.'} />

                                    </div>
                                </div>
                                <div className='flex flex-col py-20 text-white items-center gap-10'>
                                    <p className='font-bold text-2xl text-black'>Layanan</p>
                                    <div className='grid grid-cols-2 max-[1180px]:grid-cols-1 gap-y-10 w-full max-lg:gap-x-10'>
                                        <div className='flex justify-center'>
                                            <div className='h-[250px] w-full max-w-[500px] bg-[#017d9e] flex justify-between gap-10 max-sm:flex-col max-sm:h-fit max-sm:gap-5'>
                                                <div className='flex flex-col justify-between gap-5 py-5 pl-10'>
                                                    <div className='flex flex-col gap-2'>
                                                        <p className='font-bold text-xl'>Buku Custom</p>
                                                        <ul data-aos='fade-down' className='list-disc pl-5'>
                                                            <li>Buku Profile</li>
                                                            <li>Buku Ajar</li>
                                                            <li>Company Profile</li>
                                                            <li>Buku Tugas</li>
                                                            <li>Buku Modul</li>
                                                        </ul>
                                                    </div>
                                                    <div onClick={() => navigate("/buku-custom")} className='flex bg-white rounded-full w-fit py-2 px-3 text-[#017d9e] items-center gap-2 cursor-pointer active:scale-95 hover:shadow hover:shadow-white transition-all'>
                                                        <p>Detail</p>
                                                        <ArrowRightIcon className='h-5' />
                                                    </div>
                                                </div>
                                                <img src={BukuImage} />
                                            </div>
                                        </div>
                                        <div className='flex justify-center'>
                                            <div className='h-[250px] w-full max-w-[500px] bg-[#017d9e] flex justify-between gap-10 max-sm:flex-col max-sm:h-fit max-sm:gap-5'>
                                                <div className='flex flex-col justify-between gap-5 py-5 pl-10'>
                                                    <div className='flex flex-col gap-2'>
                                                        <p className='font-bold text-xl'>Buku Tahunan Sekolah</p>
                                                        <ul data-aos='fade-down' className='list-disc pl-5'>
                                                            <li>Hardcover Spiral</li>
                                                            <li>Hardcover Lem</li>
                                                            <li>Softcover Spiral</li>
                                                            <li>Softcover Staples</li>
                                                        </ul>
                                                    </div>
                                                    <div className='flex bg-white rounded-full w-fit py-2 px-3 text-[#017d9e] items-center gap-2 cursor-pointer active:scale-95 hover:shadow hover:shadow-white transition-all'>
                                                        <p>Detail</p>
                                                        <ArrowRightIcon className='h-5' />
                                                    </div>
                                                </div>
                                                <img src={BookImage} />
                                            </div>
                                        </div>
                                        <div className='flex justify-center'>
                                            <div className='h-[250px] w-full max-w-[500px] bg-[#017d9e] flex justify-between gap-10 max-sm:flex-col max-sm:h-fit max-sm:gap-5'>
                                                <div className='flex flex-col justify-between gap-5 py-5 pl-10'>
                                                    <div className='flex flex-col gap-2'>
                                                        <p className='font-bold text-xl'>Kalender</p>
                                                        <ul data-aos='fade-down' className='list-disc pl-5'>
                                                            <li>Kalender Dinding</li>
                                                            <li>Kalender Meja</li>
                                                        </ul>
                                                    </div>
                                                    <div onClick={() => navigate("/kalender")} className='flex bg-white rounded-full w-fit py-2 px-3 text-[#017d9e] items-center gap-2 cursor-pointer active:scale-95 hover:shadow hover:shadow-white transition-all'>
                                                        <p>Detail</p>
                                                        <ArrowRightIcon className='h-5' />
                                                    </div>
                                                </div>
                                                <img src={CalendarImage} />
                                            </div>
                                        </div>
                                        <div className='flex justify-center'>
                                            <div className='h-[250px] w-full max-w-[500px] bg-[#017d9e] flex justify-between gap-10 max-sm:flex-col max-sm:h-fit max-sm:gap-5'>
                                                <div className='flex flex-col justify-between gap-5 py-5 pl-10'>
                                                    <div className='flex flex-col gap-2'>
                                                        <p className='font-bold text-xl'>Majalah</p>
                                                        <ul data-aos='fade-down' className='list-disc pl-5'>
                                                            <li>Majalah Lifestyle</li>
                                                            <li>Majalah Berita</li>
                                                            <li>Majalah Anak</li>
                                                            <li>Majalah Sekolah</li>
                                                        </ul>
                                                    </div>
                                                    <div className='flex bg-white rounded-full w-fit py-2 px-3 text-[#017d9e] items-center gap-2 cursor-pointer active:scale-95 hover:shadow hover:shadow-white transition-all'>
                                                        <p>Detail</p>
                                                        <ArrowRightIcon className='h-5' />
                                                    </div>
                                                </div>
                                                <img src={MajalahImage} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col py-20 items-center gap-10'>
                                    <p className='text-3xl font-bold'>Layanan Gratis</p>
                                    <div className='flex flex-wrap justify-evenly w-full gap-5'>
                                        <div className='flex flex-col items-center text-center gap-5 max-w-[200px]'>
                                            <img src={konsulBrand} className='h-24' />
                                            <p className='text-[#017d9e] font-bold text-xl'>Konsultasi Branding</p>
                                            <p>Gratis layanan konsultasi branding</p>
                                        </div>
                                        <div className='flex flex-col items-center text-center gap-5 max-w-[200px]'>
                                            <img src={konsulBudget} className='h-24' />
                                            <p className='text-[#017d9e] font-bold text-xl'>Konsultasi Budgeting</p>
                                            <p>Gratis Layanan konsultasi budgeting cetak</p>
                                        </div>
                                        <div className='flex flex-col items-center text-center gap-5 max-w-[200px]'>
                                            <img src={desain} className='h-24' />
                                            <p className='text-[#017d9e] font-bold text-xl'>Desain</p>
                                            <p>Gratis Desain untuk  project cetak senilai minimal 15 juta</p>
                                        </div>
                                        <div className='flex flex-col items-center text-center gap-5 max-w-[200px]'>
                                            <img src={kunjungan} className='h-24' />
                                            <p className='text-[#017d9e] font-bold text-xl'>Kunjungan</p>
                                            <p>Gratis kunjungan ke Instansi/perusahaan Anda untuk area Sidoarjo dan Surabaya</p>
                                        </div>
                                        <div className='flex flex-col items-center text-center gap-5 max-w-[200px]'>
                                            <img src={pengiriman} className='h-24' />
                                            <p className='text-[#017d9e] font-bold text-xl'>Pengiriman</p>
                                            <p>Gratis pengiriman keseluruh Indonesia ( S & K berlaku )</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center bg-[#017d9e]">
                            <div className="px-5 sm:px-20 w-[1520px]">
                                <div className='flex flex-col py-20 items-center max-lg:flex-col gap-5 text-white'>
                                    <p className='font-bold text-3xl'>Pencapaian</p>
                                    <p className='text-base text-justify'>Berikut Pencapaian Kami Dari Awal Berdiri Hingga Saat Ini</p>
                                    <div className='grid grid-cols-3 max-sm:grid-cols-2 w-full gap-y-5'>
                                        <AchievementPoint count={data.pencapaian.pengalaman} desc={'Tahun Pengalaman'} />
                                        <AchievementPoint count={data.pencapaian.projek} desc={'Proyek Selesai'} />
                                        <div className="max-sm:col-span-2">
                                            <AchievementPoint count={data.pencapaian.klien} desc={'Klien Puas'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center bg-white">
                            <div className="px-5 sm:px-20 w-[1520px]">
                                <div className='flex flex-col py-20 items-center max-lg:flex-col gap-5'>
                                    <p className='font-bold text-3xl'>Telah Dipercaya</p>
                                    <p className='text-base text-justify'>Oleh 50+ Perusahaan Besar</p>
                                    <ClientCarousel />
                                </div>
                                <div className='flex flex-col pb-20 items-center max-lg:flex-col gap-5'>
                                    <p className='font-bold text-3xl'>Kata Mereka</p>
                                    <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10'>
                                        {
                                            data.testimoni.map((element, index) => {
                                                return (
                                                    <TestimonialCard key={index} profilePic={element.foto_url} rating={element.bintang} username={element.nama} timeDesc={element.waktu} testimonialDesc={element.isi} link={element.link} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    isLoading ?
                        <>
                            <div className='flex justify-center items-center h-[780px]'>
                                <p>Loading...</p>
                            </div>
                        </>
                        :
                        isError ?
                            <div className='flex justify-center items-center h-[780px]'>
                                <p>{error.message}</p>
                            </div>
                            :
                            <></>
            }
        </>
    )
}

export default HomePage