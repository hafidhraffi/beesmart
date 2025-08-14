import { MapPinIcon } from '@heroicons/react/20/solid'
import FacebookIcon from '../assets/fb_icon.png'
import TiktokIcon from '../assets/tiktok_icon.png'
import InstaIcon from '../assets/ig_icon.png'

function Footer() {
    return (
        <>
            <div className="w-full pt-10 pb-5 bg-cyan-700 text-white justify-center flex">
                <div className="px-5 sm:px-20 w-[1280px] flex flex-col gap-20">
                    <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-20">
                        <div className="flex flex-col gap-2">
                            <p className="mb-3 font-bold">Alamat</p>
                            <p>Perum Pesona Permata Ungu Jl. Merak No.16 Blok I, Bakalan, Tempel, Kec. Krian, Kabupaten Sidoarjo, Jawa Timur 61262</p>
                            <div className="flex gap-2 items-center">
                                <MapPinIcon className="h-5" />
                                <a className="underline">Lihat di Google Maps</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="mb-3 font-bold">Jam Operasional</p>
                            <div className='leading-6'>
                                <p>Senin - Jumat</p>
                                <p>08:00 - 17:00</p>
                            </div>
                            <div className='leading-6'>
                                <p>Sabtu</p>
                                <p>08:00 - 15:00</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="mb-3 font-bold">Hubungi Kami</p>
                            <p>Whatsapp: <span><a className='underline'>0812-8200-8045</a></span></p>
                            <p>Email: <span><a className='underline'>beesmartsm@gmail.com</a></span></p>
                            <div className="flex gap-4 items-center pt-3">
                                <img src={InstaIcon} className='h-8 hover:scale-110' />
                                <img src={TiktokIcon} className='h-8 hover:scale-110' />
                                <img src={FacebookIcon} className='h-8 hover:scale-110' />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p>&copy; 2025 Beesmart Solusi Media. All Rights Reserved. | Spesialis Desain & Percetakan - Sidoarjo, Jawa Timur</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer