
function Footer() {
    return (
        <>
            <footer className="bg-[#017D9E] text-white py-8">
                <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-sm justify-items-start md:justify-items-center">



                    <div className="text-left max-w-xs">
                        <h3 className="font-semibold mb-2">Alamat</h3>
                        <p>
                            Perum Pesona Permata Ungu Jl. Merak No.16<br></br>
                            Blok I, Bakalan, Tempel, Kec. Krian, Kabupaten Sidoarjo, Jawa Timur 61262
                        </p>
                        <div className="mt-2 flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1118 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <a href="https://maps.app.goo.gl/kZzC3YAshV3HUTgB8"
                                target="_blank"
                                className="underline hover:text-gray-200">
                                Lihat di google maps
                            </a>
                        </div>
                    </div>

                    <div className="text-left max-w-xs">
                        <h3 className="font-semibold mb-2">Jam Operasional</h3>
                        <p>Senin - Jumat<br></br>08.00 - 17.00 WIB</p>
                        <p className="mt-2">Sabtu<br></br>08.00 - 15.00 WIB</p>
                    </div>

                    <div className="text-left max-w-xs">
                        <h3 className="font-semibold mb-2">Hubungi Kami</h3>
                        <p>Whatsapp : 0812-8200-8082</p>
                        <p>Email : <a href="mailto:beesmartsm@gmail.com" className="underline hover:text-gray-200">beesmartsm@gmail.com</a></p>
                        <div className="flex space-x-4 mt-3">
                            <a href="https://www.instagram.com/beesmart.sm/"><img src="https://beesmart-sm.vercel.app/static/images/ig.png" alt="Instagram" className="w-5 h-5" /></a>
                            <a href="https://www.tiktok.com/@beesmart.co.id"><img src="https://beesmart-sm.vercel.app/static/images/tiktok.png" alt="TikTok" className="w-5 h-5" /></a>
                            <a href="https://www.facebook.com/BeeSmartSolusiMedia/"><img src="https://beesmart-sm.vercel.app/static/images/fb.png" alt="Facebook" className="w-5 h-5" /></a>
                        </div>
                    </div>

                </div>

                <div className="text-center text-xs mt-6 border-t border-white/20 pt-4">
                    © 2025 Beesmart Solusi Media. All Rights Reserved. | Spesialis Desain & Percetakan – Sidoarjo, Jawa Timur
                </div>
            </footer>

        </>
    )
}

export default Footer