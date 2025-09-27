/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import { useState } from "react"

function ContactForm() {
    const [formData, setFormData] = useState({
        nama: '',
        alamat: '',
        nomor: '',
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
        if (!formData.alamat.trim()) newErrors.alamat = 'Alamat wajib diisi'
        if (!formData.nomor.trim()) newErrors.nomor = 'Nomor telepon wajib diisi'
        if (!formData.pesan.trim()) newErrors.pesan = 'Pesan wajib diisi'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setSubmitStatus(null)

        if (!validateForm()) return // stop kalau masih ada error

        setIsLoading(true)

        try {
            const res = await axios.post("", formData);

            if (res.status === 200) {
                window.open(res.data.wa_link, "_blank")
                setFormData({
                    nama: '',
                    alamat: '',
                    nomor: '',
                    pesan: ''
                })
                setSubmitStatus('success')
            }
        } catch (error: any) {
            console.log(error)
            setSubmitStatus('error')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <div className="w-full flex justify-center pt-10 pb-20">
                <div className="w-full px-5">
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
                                        type="alamat"
                                        id="alamat"
                                        name="alamat"
                                        value={formData.alamat}
                                        onChange={handleChange}
                                        className={`w-full placeholder:text-sm placeholder:opacity-70 px-6 py-4 border rounded-xl text-lg outline-none transition-all ${errors.alamat ? 'border-red-500' : 'border-gray-400 focus:ring-2 focus:ring-[#017d9e]'
                                            }`}
                                        placeholder="Alamat Pengiriman"
                                    />
                                    {errors.alamat && <p className="text-red-500 text-sm mt-1">{errors.alamat}</p>}
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        id="nomor"
                                        name="nomor"
                                        value={formData.nomor}
                                        onChange={handleChange}
                                        className={`w-full placeholder:text-sm placeholder:opacity-70 px-6 py-4 border rounded-xl text-lg outline-none transition-all ${errors.nomor ? 'border-red-500' : 'border-gray-400 focus:ring-2 focus:ring-[#017d9e]'
                                            }`}
                                        placeholder="Nomor telepon"
                                    />
                                    {errors.nomor && <p className="text-red-500 text-sm mt-1">{errors.nomor}</p>}
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
Finishing :  soft cover lem punggung"
                                />
                                {errors.pesan && <p className="text-red-500 text-sm mt-1">{errors.pesan}</p>}
                            </div>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl">
                                    Pesan Anda berhasil dikirim melalui Email! Kami akan segera menghubungi Anda.
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
                                    className="bg-[#017d9e] text-white py-4 px-12 rounded-xl font-semibold text-lg hover:bg-[#017d9e] transition-all disabled:opacity-50 flex items-center gap-3"
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

export default ContactForm