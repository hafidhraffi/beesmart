import { useMutation } from '@tanstack/react-query'
import ContactForm from '../../components/ContactForm'
import { Helmet } from "react-helmet"
import api from '../../services/api'

function KontakPage() {

    const visitWa = useMutation({
        mutationFn: async () => {
            return await api.post('/visit?layanan=whatsapp')
        },
    })

    function onVisitWa() {
        visitWa.mutate()
        window.open("https://wa.me/6281282008082", "_blank");
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Kontak Beesmart - Hubungi Kami untuk Layanan Percetakan</title>
                <link rel="canonical" href="https://www.beesmart.co.id/kontak" />
                <meta name="description" content="Hubungi Beesmart Solusi Media, perusahaan percetakan profesional untuk buku, kalender, dan majalah. Isi form pesan, temukan alamat kami, atau lihat lokasi di peta untuk konsultasi dan pemesanan." />
                <meta name="keywords" content="Beesmart Solusi Media, kontak percetakan, hubungi percetakan, form pesan, alamat percetakan, lokasi perusahaan, percetakan buku, percetakan kalender, percetakan majalah" />
            </Helmet>
            <div className="bg-[#017d9e] w-full flex justify-center">
                <div className="flex justify-center">
                    <div className="pt-16 flex gap-20 items-center max-lg:flex-col max-lg:pt-20">
                        <div className="text-white flex flex-col gap-7 mx-10">
                            <div>
                                <p className="font-bold">Alamat</p>
                                <p>Perum Pesona Permata Ungu Jl. Merak No.16 Blok I, Bakalan, Tempel, Kec. Krian, Kabupaten Sidoarjo, Jawa Timur 61262</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <div>
                                    <p className="font-bold">Nomor Telepon</p>
                                    <div onClick={onVisitWa} className="underline">0812-8200-8082</div>
                                </div>
                                <div>
                                    <p className="font-bold">Media Sosial</p>
                                    <div className="flex justify-left md:left-end space-x-4 mt-3">
                                        <a href="https://www.instagram.com/beesmart.sm/"><img src="https://beesmart-sm.vercel.app/static/images/ig.png" alt="Instagram" className="w-5 h-5" /></a>
                                        <a href="https://www.tiktok.com/@beesmart.co.id"><img src="https://beesmart-sm.vercel.app/static/images/tiktok.png" alt="TikTok" className="w-5 h-5" /></a>
                                        <a href="https://www.facebook.com/BeeSmartSolusiMedia/"><img src="https://beesmart-sm.vercel.app/static/images/fb.png" alt="Facebook" className="w-5 h-5" /></a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="font-bold">Email</p>
                                <a href="mailto:beesmartsm@gmail.com" className="underline">beesmartsm@gmail.com</a>
                            </div>
                        </div>
                        <div className='flex w-full lg:max-w-[550px] h-[400px]'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7521.923835521716!2d112.5921406!3d-7.3832289!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780846d5411d85%3A0xd40a5ec5bb9c2594!2sCV.%20BeeSmart%20Solusi%20Media%20(%20Cetak%20Buku%20PoD%2C%20Cetak%20Kalender%20Murah%2C%20Cetak%20Buku%20Ajar%2C%20Cetak%20Blocknote!5e1!3m2!1sen!2sid!4v1755584332273!5m2!1sen!2sid"
                                className='w-full h-full'
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center mt-32">
                <p className="text-3xl"><span className='font-bold'>Minta Penawaran Harga</span></p>
                <p className="text-center text-xl">Kami terbuka untuk berbagai ide dan masukan dari Anda. Silakan hubungi kami atau kirimkan pesan kapan saja.</p>
            </div>
            <ContactForm />
        </>
    )
}

export default KontakPage
