import compProfile from '../../assets/comp_profile.png'
import bukuTugas from '../../assets/buku_tugas.png'
import bukuAjar from '../../assets/buku_ajar.png'
import bukuKarangan from '../../assets/buku_karangan.png'
import bukuModul from '../../assets/buku_modul.png'
import kualitas from '../../assets/custom_kualitas.png'
import desain from '../../assets/custom_desain.png'
import kompetitif from '../../assets/custom_kompetitif.png'
import konsultasi from '../../assets/custom_konsultasi.png'
import pengiriman from '../../assets/custom_pengiriman.png'
import port1 from '../../assets/custom1.png'
import port2 from '../../assets/custom2.png'
import port3 from '../../assets/custom3.png'
import port4 from '../../assets/custom4.png'
import port5 from '../../assets/custom5.png'
import port6 from '../../assets/custom6.png'
import port7 from '../../assets/custom7.png'
import port8 from '../../assets/custom8.png'
import ContactForm from '../../components/ContactForm'
import { Helmet } from "react-helmet"

function BukuCustomPage() {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Buku Custom Beesmart - Percetakan Buku Sesuai Keinginan</title>
                <link rel="canonical" href="https://beesmart-gamma.vercel.app/buku-custom" />
                <meta name="description" content="Beesmart Solusi Media menyediakan layanan percetakan buku custom sesuai keinginan Anda. Desain unik, kualitas cetak terbaik, dan layanan profesional untuk buku pribadi, corporate, atau penerbitan skala kecil hingga besar." />
                <meta name="keywords" content="Beesmart Solusi Media, percetakan buku custom, buku sesuai keinginan, jasa cetak buku, buku personalisasi, percetakan profesional" />
            </Helmet>
            <div className="w-full flex justify-center bg-gradient-to-r from-[#004253] to-[#2fb9de]">
                <div className="px-5 sm:px-20 w-[1520px] h-[550px] flex flex-col gap-10 justify-center items-center text-white">
                    <p className="text-5xl font-semibold max-sm:text-2xl max-md:text-3xl max-lg:text-4xl">Buku Custom.</p>
                    <p className="max-w-[750px] text-xl max-lg:text-lg max-md:text-base text-center leading-8">
                        Di BeeSmart, kami menyediakan layanan percetakan buku custom dengan kualitas premium untuk memenuhi kebutuhan perusahaan, instansi, sekolah, maupun individu. Semua proses kami kerjakan dengan detail mulai dari desain, layout, hingga hasil cetak, sehingga setiap buku bukan hanya media informasi, tapi juga representasi profesionalitas Anda.
                    </p>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="px-5 sm:px-20 w-[1520px] flex flex-col items-center">
                    <div className="flex flex-col items-center gap-5 my-10">
                        <p className="text-3xl font-bold">Jenis Buku</p>
                        <p className="text-center max-w-[750px]">Temukan berbagai jenis buku yang dapat kami cetak sesuai kebutuhan Anda. Semua kami hadirkan dengan kualitas cetak terbaik dan detail yang terjaga, agar setiap halaman tak hanya informatif, tetapi juga berkesan.</p>
                    </div>
                    <div className='grid grid-cols-2 max-[1280px]:grid-cols-1 gap-x-5 gap-y-10 w-full'>
                        <div className='flex justify-center'>
                            <div className='border-2 max-sm:flex-col flex max-w-[550px] max-sm:max-w-[300px] max-md:max-w-[400px]'>
                                <div className='flex sm:w-[500px] max-sm:h-[200px]'>
                                    <img src={compProfile} className='object-cover' />
                                </div>
                                <div className='flex flex-col gap-3 p-5'>
                                    <p className='font-bold text-[#017d9e] text-xl'>Company Profile</p>
                                    <p>Fungsi:</p>
                                    <ul className='list-disc pl-5'>
                                        <li>Membangun citra perusahaan agar terlihat profesional di mata klien & investor.</li>
                                        <li>Menjadi alat presentasi yang elegan saat meeting, pameran, atau tender proyek.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='border-2 max-sm:flex-col flex max-w-[550px] max-sm:max-w-[300px] max-md:max-w-[400px]'>
                                <div className='flex sm:w-[500px] max-sm:h-[200px]'>
                                    <img src={bukuTugas} className='object-cover' />
                                </div>
                                <div className='flex flex-col gap-3 p-5'>
                                    <p className='font-bold text-[#017d9e] text-xl'>Buku Tugas</p>
                                    <p>Fungsi:</p>
                                    <ul className='list-disc pl-5'>
                                        <li>Membantu siswa, mahasiswa, atau peserta pelatihan dalam menyelesaikan tugas.</li>
                                        <li>Bisa digunakan sebagai buku catatan kerja (log book).</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='border-2 max-sm:flex-col flex max-w-[550px] max-sm:max-w-[300px] max-md:max-w-[400px]'>
                                <div className='flex sm:w-[500px] max-sm:h-[200px]'>
                                    <img src={bukuAjar} className='object-cover' />
                                </div>
                                <div className='flex flex-col gap-3 p-5'>
                                    <p className='font-bold text-[#017d9e] text-xl'>Buku Ajar</p>
                                    <p>Fungsi:</p>
                                    <ul className='list-disc pl-5'>
                                        <li>Mendukung kegiatan belajar mengajar di sekolah, kampus, maupun lembaga kursus.</li>
                                        <li>Menjadi pedoman resmi bagi siswa/mahasiswa dalam menyerap materi.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='border-2 max-sm:flex-col flex max-w-[550px] max-sm:max-w-[300px] max-md:max-w-[400px]'>
                                <div className='flex sm:w-[500px] max-sm:h-[200px]'>
                                    <img src={bukuKarangan} className='object-cover' />
                                </div>
                                <div className='flex flex-col gap-3 p-5'>
                                    <p className='font-bold text-[#017d9e] text-xl'>Buku Karangan Penulis</p>
                                    <p>Fungsi:</p>
                                    <ul className='list-disc pl-5'>
                                        <li>Wadah bagi penulis untuk mempublikasikan karya mereka secara profesional.</li>
                                        <li>Bisa digunakan untuk keperluan penerbitan indie maupun personal.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='border-2 max-sm:flex-col flex max-w-[550px] max-sm:max-w-[300px] max-md:max-w-[400px]'>
                                <div className='flex sm:w-[500px] max-sm:h-[200px]'>
                                    <img src={bukuModul} className='object-cover' />
                                </div>
                                <div className='flex flex-col gap-3 p-5'>
                                    <p className='font-bold text-[#017d9e] text-xl'>Buku Modul</p>
                                    <p>Fungsi:</p>
                                    <ul className='list-disc pl-5'>
                                        <li>Sebagai panduan peserta dalam mengikuti pelatihan, seminar, atau workshop.</li>
                                        <li>Memberikan nilai tambah agar program training terlihat profesional.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-20 flex flex-col items-center gap-1'>
                        <p className='font-bold text-3xl'>Kenapa Memilih</p>
                        <p className='text-xl text-center'><span className='font-bold'>BeeSmart</span> untuk Cetak Buku Custom?</p>
                        <div className='mt-10 flex flex-wrap gap-10 justify-evenly w-full'>
                            <img src={kualitas} className='h-[250px] hover:scale-105 transition-all' />
                            <img src={desain} className='h-[250px] hover:scale-105 transition-all' />
                            <img src={kompetitif} className='h-[250px] hover:scale-105 transition-all' />
                            <img src={konsultasi} className='h-[250px] hover:scale-105 transition-all' />
                            <img src={pengiriman} className='h-[250px] hover:scale-105 transition-all' />
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-10'>
                        <p className='font-bold text-3xl'>Portofolio</p>
                        <div className='flex flex-wrap justify-evenly gap-10'>
                            <img src={port1} className='h-[300px] max-md:h-[180px] max-sm:h-[120px] max-lg:h-[220px]' />
                            <img src={port2} className='h-[300px] max-md:h-[180px] max-sm:h-[120px] max-lg:h-[220px]' />
                            <img src={port3} className='h-[300px] max-md:h-[180px] max-sm:h-[120px] max-lg:h-[220px]' />
                            <img src={port4} className='h-[300px] max-md:h-[180px] max-sm:h-[120px] max-lg:h-[220px]' />
                            <img src={port5} className='h-[300px] max-md:h-[180px] max-sm:h-[120px] max-lg:h-[220px]' />
                            <img src={port6} className='h-[300px] max-md:h-[180px] max-sm:h-[120px] max-lg:h-[220px]' />
                            <img src={port7} className='h-[300px] max-md:h-[180px] max-sm:h-[120px] max-lg:h-[220px]' />
                            <img src={port8} className='h-[300px] max-md:h-[180px] max-sm:h-[120px] max-lg:h-[220px]' />
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-32 text-center">
                        <p className="text-3xl"><span className='font-bold'>Ayo Wujudkan</span> Buku Custom Impian Anda!</p>
                        <p className="text-center text-xl">Jadikan buku Anda bukan sekedar bacaan, tetapi juga media branding & representasi profesional.</p>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </>
    )
}

export default BukuCustomPage
