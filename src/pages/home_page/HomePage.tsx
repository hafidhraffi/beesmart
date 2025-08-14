import HomepageBanner from '../../assets/homepage_banner.png'
import TeamImage from '../../assets/team.png'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import ProfessionalIcon from '../../assets/professional.png'
import CalendarImage from '../../assets/calendar.png'

function HomePage() {

    return (
        <>
            <div className='fixed -z-10 flex justify-center w-full'>
                <img src={HomepageBanner} className='min-w-[1480px]' />
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
                                <div className='h-fit w-fit min-h-50 rounded-2xl bg-cyan-700 flex gap-14 max-lg:gap-3 max-md:gap-14'>
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
                                <div className='h-fit w-fit min-h-50 rounded-2xl bg-cyan-700 flex gap-14 max-lg:gap-3 max-md:gap-14'>
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
                                <div className='h-fit w-fit min-h-50 rounded-2xl bg-cyan-700 flex gap-14 max-lg:gap-3 max-md:gap-14'>
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
                                <div className='h-fit w-fit min-h-50 rounded-2xl bg-cyan-700 flex gap-14 max-lg:gap-3 max-md:gap-14'>
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
        </>
    )
}

export default HomePage