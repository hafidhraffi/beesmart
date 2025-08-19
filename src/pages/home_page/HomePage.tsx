import HomepageBanner from '../../assets/homepage_banner.png'
import TeamImage from '../../assets/team.png'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import ProfessionalIcon from '../../assets/professional.png'
import FreeIcon from '../../assets/free.png'
import QualityIcon from '../../assets/quality.png'
import OnestopIcon from '../../assets/onestop.png'
import BookImage from '../../assets/book.png'
import CalendarImage from '../../assets/calendar.png'
import BukuImage from '../../assets/buku.png'
import MajalahImage from '../../assets/majalah.png'
import SellingPointCard from './SellingPointCard'
import AchievementPoint from './AchievementPoint'
import PortfolioCard from './PortfolioCard'
import TestimonialCard from './TestimonialCard'
import api from '../../services/api'
import { useQuery } from '@tanstack/react-query'
import type { HomePageData } from '../../types/homePageData'
import ClientCarousel from './ClientCarousel'

function HomePage() {
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
                            <img src={HomepageBanner} className='min-w-[1480px] w-screen' />
                            <img src={HomepageBanner} className='min-w-[1480px] w-screen' />
                        </div>
                        <div className="w-full flex justify-center">
                            <div className="px-5 sm:px-20 w-[1480px]">
                                <div data-aos='fade-in' className='flex flex-col h-[730px] items-center justify-center gap-5'>
                                    <p className='text-white text-6xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl font-semibold text-center'>
                                        Cari Partner Desain & Cetak Untuk Instansi, Perusahaan dan Bisnis Anda?
                                    </p>
                                    <p className='text-white text-2xl max-sm:text-base max-md:text-lg max-lg:text-xl font-light text-center'>
                                        Anda berada pada website yang tepat. Kami menawarkan berbagai produk cetak berkualitas untuk kebutuhan promosi, branding, dan kebutuhan kantor Anda
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center bg-white">
                            <div className="px-5 sm:px-20 w-[1480px]">
                                <div data-aos="fade-up" className='flex max-lg:gap-10 gap-20 py-20 items-center max-lg:flex-col'>
                                    <div className='flex flex-col gap-10'>
                                        <div>
                                            <p className='font-bold text-xl'>Beesmart </p>
                                            <p className='text-xl'>Siap membantu anda</p>
                                        </div>
                                        <p className='text-base text-justify'>CV. Beesmart Solusi Media adalah perusahaan Kreatif di bidang desain dan cetak yang telah berdiri sejak tahun 2015. Lebih dari 10 tahun berpengalaman menyelesaikan project-project besar kebutuhan desain dan cetak berbagai instansi dan perusahaan.</p>
                                        <div className='flex bg-[#017d9e] rounded-full w-fit py-2 px-3 text-white items-center gap-2 cursor-pointer active:scale-95 hover:shadow-[#017d9e] hover:shadow transition-all'>
                                            <p>Tentang Kami</p>
                                            <ArrowRightIcon className='h-5' />
                                        </div>
                                    </div>
                                    <img src={TeamImage} className='w-[400px]' />
                                </div>
                                <div className='flex flex-col py-20 items-center gap-10'>
                                    <p className='font-bold text-2xl'>Mengapa harus Beesmart?</p>
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
                                            <div className='h-[250px] w-full max-w-[500px] rounded-2xl bg-[#017d9e] flex justify-between gap-10'>
                                                <div className='flex flex-col justify-between gap-5 py-5 pl-10'>
                                                    <div className='flex flex-col gap-2'>
                                                        <p className='font-bold text-xl'>Buku</p>
                                                        <ul data-aos='fade-down' className='list-disc pl-5'>
                                                            <li>Buku Tahunan</li>
                                                            <li>Buku Ajar</li>
                                                            <li>Company Profile</li>
                                                            <li>Buku Custom</li>
                                                        </ul>
                                                    </div>
                                                    <div className='flex bg-white rounded-full w-fit py-2 px-3 text-[#017d9e] items-center gap-2 cursor-pointer active:scale-95 hover:shadow hover:shadow-white transition-all'>
                                                        <p>Detail</p>
                                                        <ArrowRightIcon className='h-5' />
                                                    </div>
                                                </div>
                                                <img src={BukuImage} className="h-[250px]" />
                                            </div>
                                        </div>
                                        <div className='flex justify-center'>
                                            <div className='h-[250px] w-full max-w-[500px] rounded-2xl bg-[#017d9e] flex justify-between gap-10'>
                                                <div className='flex flex-col justify-between gap-5 py-5 pl-10'>
                                                    <div className='flex flex-col gap-2'>
                                                        <p className='font-bold text-xl'>Buku Tahunan</p>
                                                        <ul data-aos='fade-down' className='list-disc pl-5'>
                                                            <li>Buku Tahunan</li>
                                                            <li>Buku Ajar</li>
                                                            <li>Company Profile</li>
                                                            <li>Buku Custom</li>
                                                        </ul>
                                                    </div>
                                                    <div className='flex bg-white rounded-full w-fit py-2 px-3 text-[#017d9e] items-center gap-2 cursor-pointer active:scale-95 hover:shadow hover:shadow-white transition-all'>
                                                        <p>Detail</p>
                                                        <ArrowRightIcon className='h-5' />
                                                    </div>
                                                </div>
                                                <img src={BookImage} className="h-[250px]" />
                                            </div>
                                        </div>
                                        <div className='flex justify-center'>
                                            <div className='h-[250px] w-full max-w-[500px] rounded-2xl bg-[#017d9e] flex justify-between gap-10'>
                                                <div className='flex flex-col justify-between gap-5 py-5 pl-10'>
                                                    <div className='flex flex-col gap-2'>
                                                        <p className='font-bold text-xl'>Kalender</p>
                                                        <ul data-aos='fade-down' className='list-disc pl-5'>
                                                            <li>Kalender Dinding</li>
                                                            <li>Kalender Meja</li>
                                                        </ul>
                                                    </div>
                                                    <div className='flex bg-white rounded-full w-fit py-2 px-3 text-[#017d9e] items-center gap-2 cursor-pointer active:scale-95 hover:shadow hover:shadow-white transition-all'>
                                                        <p>Detail</p>
                                                        <ArrowRightIcon className='h-5' />
                                                    </div>
                                                </div>
                                                <img src={CalendarImage} className="h-[250px]" />
                                            </div>
                                        </div>
                                        <div className='flex justify-center'>
                                            <div className='h-[250px] w-full max-w-[500px] rounded-2xl bg-[#017d9e] flex justify-between gap-10'>
                                                <div className='flex flex-col justify-between gap-5 py-5 pl-10'>
                                                    <div className='flex flex-col gap-2'>
                                                        <p className='font-bold text-xl'>Majalah</p>
                                                        <ul data-aos='fade-down' className='list-disc pl-5'>
                                                            <li>Majalah Lifestyle</li>
                                                            <li>Majalah Berita</li>
                                                            <li>Majalah Anak</li>
                                                        </ul>
                                                    </div>
                                                    <div className='flex bg-white rounded-full w-fit py-2 px-3 text-[#017d9e] items-center gap-2 cursor-pointer active:scale-95 hover:shadow hover:shadow-white transition-all'>
                                                        <p>Detail</p>
                                                        <ArrowRightIcon className='h-5' />
                                                    </div>
                                                </div>
                                                <img src={MajalahImage} className="h-[250px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center bg-[#017d9e]">
                            <div className="px-5 sm:px-20 w-[1480px]">
                                <div className='flex flex-col py-20 items-center max-lg:flex-col gap-5 text-white'>
                                    <p className='font-bold text-2xl'>Pencapaian Kami</p>
                                    <p className='text-base text-justify'>Berikut Pencapaian Kami Dari Awal Berdiri Hingga Saat Ini</p>
                                    <div className='grid grid-cols-3 max-sm:grid-cols-2 w-full gap-y-5'>
                                        <AchievementPoint count={data.pencapaian.pengalaman} desc={'Tahun Pengalaman'} />
                                        <AchievementPoint count={data.pencapaian.projek} desc={'Proyek Selesai'} />
                                        <AchievementPoint count={data.pencapaian.klien} desc={'Klien Puas'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center bg-white">
                            <div className="px-5 sm:px-20 w-[1480px]">
                                <div className='flex flex-col py-20 items-center max-lg:flex-col gap-5'>
                                    <p className='font-bold text-2xl'>Klien Kami</p>
                                    <p className='text-base text-justify'>Dipercaya Oleh 50+ Perusahaan Besar</p>
                                    <ClientCarousel />
                                </div>
                                <div className='flex flex-col pb-20 items-center gap-10'>
                                    <p className='font-bold text-2xl'>Portofolio</p>
                                    <div className='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-5 w-full'>
                                        {
                                            data.portofolio.map((element, index) => {
                                                return (
                                                    <PortfolioCard key={index} img={element.foto} client={element.instansi} productType={element.jenis} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className='flex flex-col pb-20 items-center max-lg:flex-col gap-5'>
                                    <p className='font-bold text-2xl'>Testimoni</p>
                                    <p className='text-base text-justify'>Dengarkan Apa Kata Klien Kami</p>
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