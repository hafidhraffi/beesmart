import HomepageBanner from '../../assets/homepage_banner.png'
import TeamImage from '../../assets/team.png'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import ProfessionalIcon from '../../assets/professional.png'
import CalendarImage from '../../assets/calendar.png'
import ClientsImage from '../../assets/clients.png'
import CalendarPortofolio from '../../assets/calendar_portofolio.png'
import ProfilePic from '../../assets/profile_pic.png'
import Rating from '../../assets/rating.png'
import GoogleLogo from '../../assets/google_logo.png'
import { useRef, useState } from 'react'

function HomePage() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDown(true);
        setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
        setScrollLeft(scrollRef.current?.scrollLeft || 0);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
    }
    const handleMouseUp = () => {
        setIsDown(false);
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 1;
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    return (
        <>
            <div className='fixed -z-10 flex flex-col items-center w-full'>
                <img src={HomepageBanner} className='min-w-[1480px] w-screen' />
                <img src={HomepageBanner} className='min-w-[1480px] w-screen' />
            </div>
            <div className="w-full flex justify-center">
                <div className="px-5 sm:px-20 w-[1280px]">
                    <div className='flex flex-col h-[730px] items-center justify-center gap-5'>
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
                <div className="px-5 sm:px-20 w-[1280px]">
                    <div className='flex gap-10 py-20 items-center max-lg:flex-col'>
                        <div className='flex flex-col gap-10'>
                            <p className='text-xl'>
                                <span className='font-bold'>Beesmart </span>
                                siap membantu anda
                            </p>
                            <p className='text-base text-justify'>CV. Beesmart Solusi Media adalah perusahaan Kreatif di bidang desain dan cetak yang telah berdiri sejak tahun 2015. Lebih dari 10 tahun berpengalaman menyelesaikan project-project besar kebutuhan desain dan cetak berbagai instansi dan perusahaan.</p>
                            <div className='flex bg-cyan-700 rounded-full w-fit py-2 px-3 text-white items-center gap-2'>
                                <p>Tentang Kami</p>
                                <ArrowRightIcon className='h-5' />
                            </div>
                        </div>
                        <img src={TeamImage} className='w-[400px]' />
                    </div>
                    <div className='flex flex-col py-20 items-center gap-10'>
                        <p className='font-bold text-2xl'>Mengapa harus Beesmart?</p>
                        <div className='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-5'>
                            <div className='h-fit min-h-50 border-2 rounded-2xl border-cyan-700 p-3 flex flex-col items-center justify-between'>
                                <img src={ProfessionalIcon} className='h-12' />
                                <p className='font-bold text-xl'>Profesional</p>
                                <p className='text-center leading-5'>Jasa layanan yang berpengalaman selama lebih dari 8 tahun dalam bidang desain dan cetak.</p>
                            </div>
                            <div className='h-fit min-h-50 border-2 rounded-2xl border-cyan-700 p-3 flex flex-col items-center justify-between'>
                                <img src={ProfessionalIcon} className='h-12' />
                                <p className='font-bold text-xl'>Profesional</p>
                                <p className='text-center leading-5'>Jasa layanan yang berpengalaman selama lebih dari 8 tahun dalam bidang desain dan cetak.</p>
                            </div>
                            <div className='h-fit min-h-50 border-2 rounded-2xl border-cyan-700 p-3 flex flex-col items-center justify-between'>
                                <img src={ProfessionalIcon} className='h-12' />
                                <p className='font-bold text-xl'>Profesional</p>
                                <p className='text-center leading-5'>Jasa layanan yang berpengalaman selama lebih dari 8 tahun dalam bidang desain dan cetak.</p>
                            </div>
                            <div className='h-fit min-h-50 border-2 rounded-2xl border-cyan-700 p-3 flex flex-col items-center justify-between'>
                                <img src={ProfessionalIcon} className='h-12' />
                                <p className='font-bold text-xl'>Profesional</p>
                                <p className='text-center leading-5'>Jasa layanan yang berpengalaman selama lebih dari 8 tahun dalam bidang desain dan cetak.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col py-20 text-white items-center gap-10'>
                        <p className='font-bold text-2xl text-black'>Layanan</p>
                        <div className='grid grid-cols-2 max-md:grid-cols-1 gap-y-10 w-full max-lg:gap-x-10'>
                            <div className='flex justify-center'>
                                <div className='h-fit w-fit min-h-50 rounded-2xl bg-cyan-700 flex gap-14 max-lg:gap-3 max-md:gap-14 max-sm:gap-3'>
                                    <div className='flex flex-col justify-between gap-5 p-3'>
                                        <div className='flex flex-col gap-2'>
                                            <p className='font-bold text-xl'>Kalender</p>
                                            <ul className='list-disc pl-5'>
                                                <li>Kalender Dinding</li>
                                                <li>Kalender Meja</li>
                                            </ul>
                                        </div>
                                        <div className='flex bg-white rounded-full w-fit py-2 px-3 text-cyan-700 items-center gap-2'>
                                            <p>Detail</p>
                                            <ArrowRightIcon className='h-5' />
                                        </div>
                                    </div>
                                    <img src={CalendarImage} className='h-60 scale-110 max-lg:h-50' />
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className='h-fit w-fit min-h-50 rounded-2xl bg-cyan-700 flex gap-14 max-lg:gap-3 max-md:gap-14 max-sm:gap-3'>
                                    <div className='flex flex-col justify-between gap-5 p-3'>
                                        <div className='flex flex-col gap-2'>
                                            <p className='font-bold text-xl'>Kalender</p>
                                            <ul className='list-disc pl-5'>
                                                <li>Kalender Dinding</li>
                                                <li>Kalender Meja</li>
                                            </ul>
                                        </div>
                                        <div className='flex bg-white rounded-full w-fit py-2 px-3 text-cyan-700 items-center gap-2'>
                                            <p>Detail</p>
                                            <ArrowRightIcon className='h-5' />
                                        </div>
                                    </div>
                                    <img src={CalendarImage} className='h-60 scale-110 max-lg:h-50' />
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className='h-fit w-fit min-h-50 rounded-2xl bg-cyan-700 flex gap-14 max-lg:gap-3 max-md:gap-14 max-sm:gap-3'>
                                    <div className='flex flex-col justify-between gap-5 p-3'>
                                        <div className='flex flex-col gap-2'>
                                            <p className='font-bold text-xl'>Kalender</p>
                                            <ul className='list-disc pl-5'>
                                                <li>Kalender Dinding</li>
                                                <li>Kalender Meja</li>
                                            </ul>
                                        </div>
                                        <div className='flex bg-white rounded-full w-fit py-2 px-3 text-cyan-700 items-center gap-2'>
                                            <p>Detail</p>
                                            <ArrowRightIcon className='h-5' />
                                        </div>
                                    </div>
                                    <img src={CalendarImage} className='h-60 scale-110 max-lg:h-50' />
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className='h-fit w-fit min-h-50 rounded-2xl bg-cyan-700 flex gap-14 max-lg:gap-3 max-md:gap-14 max-sm:gap-3'>
                                    <div className='flex flex-col justify-between gap-5 p-3'>
                                        <div className='flex flex-col gap-2'>
                                            <p className='font-bold text-xl'>Kalender</p>
                                            <ul className='list-disc pl-5'>
                                                <li>Kalender Dinding</li>
                                                <li>Kalender Meja</li>
                                            </ul>
                                        </div>
                                        <div className='flex bg-white rounded-full w-fit py-2 px-3 text-cyan-700 items-center gap-2'>
                                            <p>Detail</p>
                                            <ArrowRightIcon className='h-5' />
                                        </div>
                                    </div>
                                    <img src={CalendarImage} className='h-60 scale-110 max-lg:h-50' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="px-5 sm:px-20 w-[1280px]">
                    <div className='flex flex-col py-20 items-center max-lg:flex-col gap-5 text-white'>
                        <p className='font-bold text-2xl'>Pencapaian Kami</p>
                        <p className='text-base text-justify'>Berikut Pencapaian Kami Dari Awal Berdiri Hingga Saat Ini</p>
                        <div className='grid grid-cols-3 max-sm:grid-cols-2 w-full gap-y-5'>
                            <div className='flex flex-col items-center'>
                                <p className='font-bold text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl'>10+</p>
                                <p className='text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base'>Tahun Pengalaman</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='font-bold text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl'>500+</p>
                                <p className='text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base'>Proyek Selesai</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='font-bold text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl'>99%</p>
                                <p className='text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base'>Klien Puas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center bg-white">
                <div className="px-5 sm:px-20 w-[1280px]">
                    <div className='flex flex-col py-20 items-center max-lg:flex-col gap-5'>
                        <p className='font-bold text-2xl'>Klien Kami</p>
                        <p className='text-base text-justify'>Dipercaya Oleh 50+ Perusahaan Besar</p>
                        <div
                            ref={scrollRef}
                            className="overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing select-none"
                            onMouseDown={handleMouseDown}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                        >
                            <img
                                src={ClientsImage}
                                alt="Clients"
                                className="min-w-[300%] pointer-events-none"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col py-20 items-center gap-10'>
                        <p className='font-bold text-2xl'>Portofolio</p>
                        <div className='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-5'>
                            <div className='h-fit shadow-xl shadow-gray-400 rounded-2xl p-3 flex flex-col items-center justify-between'>
                                <img src={CalendarPortofolio} />
                                <p className='font-bold text-xl'>Mugaru</p>
                                <p className='text-center leading-5'>Kalender</p>
                            </div>
                            <div className='h-fit shadow-xl shadow-gray-400 rounded-2xl p-3 flex flex-col items-center justify-between'>
                                <img src={CalendarPortofolio} />
                                <p className='font-bold text-xl'>Mugaru</p>
                                <p className='text-center leading-5'>Kalender</p>
                            </div>
                            <div className='h-fit shadow-xl shadow-gray-400 rounded-2xl p-3 flex flex-col items-center justify-between'>
                                <img src={CalendarPortofolio} />
                                <p className='font-bold text-xl'>Mugaru</p>
                                <p className='text-center leading-5'>Kalender</p>
                            </div>
                            <div className='h-fit shadow-xl shadow-gray-400 rounded-2xl p-3 flex flex-col items-center justify-between'>
                                <img src={CalendarPortofolio} />
                                <p className='font-bold text-xl'>Mugaru</p>
                                <p className='text-center leading-5'>Kalender</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col py-20 items-center max-lg:flex-col gap-5'>
                        <p className='font-bold text-2xl'>Testimoni</p>
                        <p className='text-base text-justify'>Dengarkan Apa Kata Klien Kami</p>
                        <div className='grid grid-cols-3 max-md:grid-cols-2 gap-10'>
                            <div className='h-fit shadow-xl shadow-gray-400 rounded-2xl p-3 flex flex-col justify-between gap-5'>
                                <div className='flex gap-5'>
                                    <img src={ProfilePic} className='h-16' />
                                    <div className='flex flex-col justify-center gap-1 leading-3'>
                                        <p className='font-bold'>Risol Mayo Uti</p>
                                        <p className='text-sm font-light'>2 Minggu Yang Lalu</p>
                                        <img src={Rating} className='h-3 w-20' />
                                    </div>
                                </div>
                                <p>Hasil cetak bagus,sesuai request. bapaknya ramah sekali. kakak kakak nya juga ramah😄😁😁terimakasih .....</p>
                                <div className='flex items-center gap-2'>
                                    <img src={GoogleLogo} className='h-7' />
                                    <a className='underline'>Lihat ulasan di Google</a>
                                </div>
                            </div>
                            <div className='h-fit shadow-xl shadow-gray-400 rounded-2xl p-3 flex flex-col justify-between gap-5'>
                                <div className='flex gap-5'>
                                    <img src={ProfilePic} className='h-16' />
                                    <div className='flex flex-col justify-center gap-1 leading-3'>
                                        <p className='font-bold'>Risol Mayo Uti</p>
                                        <p className='text-sm font-light'>2 Minggu Yang Lalu</p>
                                        <img src={Rating} className='h-3 w-20' />
                                    </div>
                                </div>
                                <p>Hasil cetak bagus,sesuai request. bapaknya ramah sekali. kakak kakak nya juga ramah😄😁😁terimakasih .....</p>
                                <div className='flex items-center gap-2'>
                                    <img src={GoogleLogo} className='h-7' />
                                    <a className='underline'>Lihat ulasan di Google</a>
                                </div>
                            </div>
                            <div className='h-fit shadow-xl shadow-gray-400 rounded-2xl p-3 flex flex-col justify-between gap-5'>
                                <div className='flex gap-5'>
                                    <img src={ProfilePic} className='h-16' />
                                    <div className='flex flex-col justify-center gap-1 leading-3'>
                                        <p className='font-bold'>Risol Mayo Uti</p>
                                        <p className='text-sm font-light'>2 Minggu Yang Lalu</p>
                                        <img src={Rating} className='h-3 w-20' />
                                    </div>
                                </div>
                                <p>Hasil cetak bagus,sesuai request. bapaknya ramah sekali. kakak kakak nya juga ramah😄😁😁terimakasih .....</p>
                                <div className='flex items-center gap-2'>
                                    <img src={GoogleLogo} className='h-7' />
                                    <a className='underline'>Lihat ulasan di Google</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage