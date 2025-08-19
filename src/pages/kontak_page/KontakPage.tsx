/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'

function KontakPage() {
    const [formData, setFormData] = useState({
        nama: '',
        email: '',
        nomorTelepon: '',
        pesan: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<string | null>(null) // null, 'success', 'error'
    const [errors, setErrors] = useState<{ [key: string]: string }>({}) // simpan error tiap field

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        // reset error kalau user mulai isi
        setErrors(prev => ({ ...prev, [name]: '' }))
    }

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {}

        if (!formData.nama.trim()) newErrors.nama = 'Nama wajib diisi'
        if (!formData.email.trim()) newErrors.email = 'Email wajib diisi'
        if (!formData.nomorTelepon.trim()) newErrors.nomorTelepon = 'Nomor telepon wajib diisi'
        if (!formData.pesan.trim()) newErrors.pesan = 'Pesan wajib diisi'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setSubmitStatus(null)

        if (!validateForm()) return // stop kalau masih ada error

        const message = `Halo, saya ingin mengajukan penawaran:\n\n` +
            `Nama: ${formData.nama}\n` +
            `Email: ${formData.email}\n` +
            `Nomor Telepon: ${formData.nomorTelepon}\n` +
            `Pesan:\n${formData.pesan}`

        // Encode supaya bisa dipakai di URL
        const encodedMessage = encodeURIComponent(message)

        // Nomor tujuan WA (ubah sesuai kebutuhan)
        const phoneNumber = "6281282008045"

        // Redirect ke WhatsApp
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")

        // Reset form
        setFormData({
            nama: '',
            email: '',
            nomorTelepon: '',
            pesan: ''
        })
        // setSubmitStatus('success')
        setIsLoading(false)
        // setIsLoading(true)
        // try {
        //     // Simulasi kirim
        //     await new Promise(resolve => setTimeout(resolve, 2000))

        //     setFormData({
        //         nama: '',
        //         email: '',
        //         nomorTelepon: '',
        //         pesan: ''
        //     })
        //     setSubmitStatus('success')
        // } catch (error) {
        //     console.log(error)
        //     setSubmitStatus('error')
        // } finally {
        //     setIsLoading(false)
        // }
    }

    return (
        <>
            <div className="bg-[#017d9e] w-full flex justify-center">
                <div className="flex justify-center">
                    <div className="pt-16 flex gap-20 items-center max-lg:flex-col max-lg:pt-20">
                        <div className="text-white flex flex-col gap-7 ml-10">
                            <div>
                                <p className="font-bold">Alamat</p>
                                <p>Perum Pesona Permata Ungu Jl. Merak No.16 Blok I, Bakalan, Tempel, Kec. Krian, Kabupaten Sidoarjo, Jawa Timur 61262</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <div>
                                    <p className="font-bold">Nomor Telepon</p>
                                    <a href="https://wa.me/6281282008045" className="underline">0812-8200-8045</a>
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
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7521.923835521716!2d112.5921406!3d-7.3832289!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780846d5411d85%3A0xd40a5ec5bb9c2594!2sCV.%20BeeSmart%20Solusi%20Media%20(%20Cetak%20Buku%20PoD%2C%20Cetak%20Kalender%20Murah%2C%20Cetak%20Buku%20Ajar%2C%20Cetak%20Blocknote!5e1!3m2!1sen!2sid!4v1755584332273!5m2!1sen!2sid"
                                className='w-[550px] h-[400px] max-md:w-[400px] max-md:h-[300px] max-sm:w-[300px] max-sm:h-[180px]'
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center py-20">
                <div className="w-full px-5">
                    <div className="flex flex-col items-center mb-10">
                        <p className="text-[#017d9e] text-2xl font-bold">Minta Penawaran Harga</p>
                        <p className="text-[#017d9e] text-center">Kami terbuka untuk berbagai ide dan masukan dari Anda. Silakan hubungi kami atau kirimkan pesan kapan saja.</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg shadow-gray-500 p-8 max-w-[1000px] mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-6 relative">
                            <div>
                                <input
                                    type="text"
                                    id="nama"
                                    name="nama"
                                    value={formData.nama}
                                    onChange={handleChange}
                                    className={`w-full placeholder:text-sm placeholder:opacity-70 px-6 py-4 border rounded-xl text-lg outline-none transition-all ${errors.nama ? 'border-red-500' : 'border-gray-400 focus:ring-2 focus:ring-[#017d9e]'
                                        }`}
                                    placeholder="Nama lengkap anda"
                                />
                                {errors.nama && <p className="text-red-500 text-sm mt-1">{errors.nama}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full placeholder:text-sm placeholder:opacity-70 px-6 py-4 border rounded-xl text-lg outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-400 focus:ring-2 focus:ring-[#017d9e]'
                                            }`}
                                        placeholder="Email"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        id="nomorTelepon"
                                        name="nomorTelepon"
                                        value={formData.nomorTelepon}
                                        onChange={handleChange}
                                        className={`w-full placeholder:text-sm placeholder:opacity-70 px-6 py-4 border rounded-xl text-lg outline-none transition-all ${errors.nomorTelepon ? 'border-red-500' : 'border-gray-400 focus:ring-2 focus:ring-[#017d9e]'
                                            }`}
                                        placeholder="Nomor telepon"
                                    />
                                    {errors.nomorTelepon && <p className="text-red-500 text-sm mt-1">{errors.nomorTelepon}</p>}
                                </div>
                            </div>

                            <div>
                                <textarea
                                    id="pesan"
                                    name="pesan"
                                    value={formData.pesan}
                                    onChange={handleChange}
                                    rows={8}
                                    className={`w-full placeholder:text-sm placeholder:opacity-70 px-6 py-4 border rounded-xl text-lg outline-none transition-all resize-none ${errors.pesan ? 'border-red-500' : 'border-gray-400 focus:ring-2 focus:ring-[#017d9e]'
                                        }`}
                                    placeholder="Tulis spesifikasinya disini, akan kami berikan penawaran terbaik, Contoh :
Permintaan harga cetak buku
Ukuran buku : A5
Jumlah halaman : 100  halaman
Jumlah Cetak : 500 eksemplar
Bahan Cover : Ivory 230 gsm + Laminasi glosy
Cetak Cover : Full Warna 1 sisi
Bahan isi : HVS 80 gsm
Cetak isi : Full warna 2 sisi
Finishing :  soft cover lem punggung"
                                />
                                {errors.pesan && <p className="text-red-500 text-sm mt-1">{errors.pesan}</p>}
                            </div>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl">
                                    Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl">
                                    Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.
                                </div>
                            )}

                            <div className="absolute left-1/2 transform -translate-x-1/2">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="bg-[#017d9e] text-white py-4 px-12 rounded-xl font-semibold text-lg hover:bg-[#015a75] transition-all disabled:opacity-50 flex items-center gap-3"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                                            Mengirim...
                                        </>
                                    ) : (
                                        'Kirim Pesan'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KontakPage
