import ContactForm from "../../components/ContactForm"
import meja from '../../assets/meja.png'
import dinding from '../../assets/dinding.png'
import dinding1 from '../../assets/dinding1.png'
import dinding2 from '../../assets/dinding2.png'
import dinding3 from '../../assets/dinding3.png'
import dinding4 from '../../assets/dinding4.png'
import dinding5 from '../../assets/dinding5.png'
import dinding6 from '../../assets/dinding6.png'
import dinding7 from '../../assets/dinding7.png'
import dinding8 from '../../assets/dinding8.png'
import meja1 from '../../assets/meja1.png'
import meja2 from '../../assets/meja2.png'
import meja3 from '../../assets/meja3.png'
import meja4 from '../../assets/meja4.png'
import meja5 from '../../assets/meja5.png'
import meja6 from '../../assets/meja6.png'
import meja7 from '../../assets/meja7.png'
import meja8 from '../../assets/meja8.png'
import ukuran1 from '../../assets/ukuran1.png'
import ukuran2 from '../../assets/ukuran2.png'
import ukuran3 from '../../assets/ukuran3.png'

function KalenderPage() {
    const portofolioDinding = [
        {
            image: dinding1,
            text: "SMP Muhammadiyah 3 Waru"
        },
        {
            image: dinding2,
            text: "Sekolah Rumah Bintang"
        },
        {
            image: dinding3,
            text: "PT. Grolen Indonesia"
        },
        {
            image: dinding4,
            text: "PP. Darussalam"
        },
        {
            image: dinding5,
            text: "Aisyiyah Waru"
        },
        {
            image: dinding6,
            text: "Sekolah Insan Cendekia"
        },
        {
            image: dinding7,
            text: "PP. At Tahririyah"
        },
        {
            image: dinding8,
            text: "SMK Budi Utomo Prambon"
        },
    ]

    const portofolioMeja = [
        {
            image: meja1,
            text: "Yarhamu"
        },
        {
            image: meja2,
            text: "PT. Ecco Tannery"
        },
        {
            image: meja3,
            text: "PT Santoso Jawi Abadi"
        },
        {
            image: meja4,
            text: "PT. Srikaya Putra Mas"
        },
        {
            image: meja5,
            text: "MUGARU"
        },
        {
            image: meja6,
            text: "PT. MedMax"
        },
        {
            image: meja7,
            text: "TBM Marine Service"
        },
        {
            image: meja8,
            text: "Dinas Pendidikan Blitar"
        },
    ]

    return (
        <>
            <div className="w-full flex justify-center bg-gradient-to-r from-[#004253] to-[#2fb9de]">
                <div className="px-5 sm:px-20 w-[1520px] h-[550px] flex flex-col gap-10 justify-center items-center text-white">
                    <p className="text-5xl font-semibold max-sm:text-2xl max-md:text-3xl max-lg:text-4xl">Kalender.</p>
                    <p className="max-w-[750px] text-xl max-lg:text-lg max-md:text-base text-center leading-8">
                        Wujudkan momen dan rencana Anda dalam cetakan yang elegan dan fungsional. Hadirkan kalender dengan desain eksklusif, detail presisi, dan hasil akhir yang memikat. Karena setiap hari layak ditandai sebaik kenangan yang tercipta.
                    </p>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="px-5 sm:px-20 w-[1520px]">
                    <div className="flex flex-col items-center gap-5 my-10">
                        <p className="text-3xl font-bold">Jenis Kalender</p>
                        <p className="text-center max-w-[750px]">Temukan berbagai jenis kalender yang dapat kami cetak sesuai kebutuhan Anda. Semua kami hadirkan dengan kualitas cetak terbaik dan detail yang terjaga, agar setiap lembar tak hanya informatif, tetapi juga berkesan.</p>
                    </div>
                    <div className='flex flex-wrap justify-evenly gap-x-5 gap-y-10'>
                        <div className='border-2 max-sm:flex-col flex max-w-[550px] max-sm:max-w-[300px] max-md:max-w-[400px]'>
                            <div className='flex sm:w-[500px] max-sm:h-[200px]'>
                                <img src={dinding} className='object-cover' />
                            </div>
                            <div className='flex flex-col gap-3 p-5'>
                                <p className='font-bold text-[#017d9e] text-xl'>Kalender Dinding</p>
                                <p>Fungsi:</p>
                                <ul className='list-disc pl-5'>
                                    <li>Ukuran besar, dapat dilihat dari jarak jauh.</li>
                                    <li>Dengan desain custom, kalender dinding bisa jadi identitas dan branding instansi Anda.</li>
                                    <li>Sering digunakan sebagai hadiah atau merchandise promosi.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='border-2 max-sm:flex-col flex max-w-[550px] max-sm:max-w-[300px] max-md:max-w-[400px]'>
                            <div className='flex sm:w-[500px] max-sm:h-[200px]'>
                                <img src={meja} className='object-cover' />
                            </div>
                            <div className='flex flex-col gap-3 p-5'>
                                <p className='font-bold text-[#017d9e] text-xl'>Kalender Meja</p>
                                <p>Fungsi:</p>
                                <ul className='list-disc pl-5'>
                                    <li>Sebagai media promosi elegan, karena selalu ada di depan mata klien atau relasi.</li>
                                    <li>Menjadi pengingat deadline, jadwal meeting, dan aktivitas penting.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-10 my-20'>
                        <p className='font-bold text-3xl'>Portofolio</p>
                        <div className="flex flex-col gap-10 mb-10">
                            <div className="flex flex-col w-full items-center">
                                <p className="bg-[#017d9e] px-5 py-2 text-white font-bold w-fit">Kalender Dinding</p>
                                <hr className="w-full border-[#017d9e] border-2"></hr>
                            </div>
                            <div className="flex flex-wrap justify-evenly gap-y-10 gap-x-5">
                                {
                                    portofolioDinding.map((element, index) => {
                                        return (
                                            <div key={index} className="flex flex-col items-center">
                                                <img src={element.image} className="max-w-[300px] max-md:max-w-[200px] max-lg:max-w-[250px] max-sm:max-w-[150px]" />
                                                <p className="font-bold text-center max-w-[300px] max-md:max-w-[200px] max-lg:max-w-[250px] max-sm:max-w-[150px]">{element.text}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col w-full items-center">
                                <p className="bg-[#017d9e] px-5 py-2 text-white font-bold w-fit">Kalender Meja</p>
                                <hr className="w-full border-[#017d9e] border-2"></hr>
                            </div>
                            <div className="flex flex-wrap justify-evenly gap-y-10 gap-x-5">
                                {
                                    portofolioMeja.map((element, index) => {
                                        return (
                                            <div key={index} className="flex flex-col items-center">
                                                <img src={element.image} className="max-w-[300px] max-md:max-w-[200px] max-lg:max-w-[250px] max-sm:max-w-[150px]" />
                                                <p className="font-bold text-center max-w-[300px] max-md:max-w-[200px] max-lg:max-w-[250px] max-sm:max-w-[150px]">{element.text}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-10'>
                        <p className='font-bold text-3xl'>Ukuran</p>
                        <div className="flex flex-wrap justify-center items-end gap-5">
                            <img src={ukuran1} className="max-h-[300px] max-lg:max-h-[250px] max-md:max-h-[200px] max-sm:max-h-[150px]" />
                            <img src={ukuran2} className="max-h-[300px] max-lg:max-h-[250px] max-md:max-h-[200px] max-sm:max-h-[150px]" />
                            <img src={ukuran3} className="max-h-[260px] max-lg:max-h-[217px] max-md:max-h-[173px] max-sm:max-h-[130px]" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-32 text-center">
                        <p className="text-3xl"><span className='font-bold'>Ayo Wujudkan</span> Kalender Custom Impian Anda!</p>
                        <p className="text-center text-xl">Jadikan buku Anda bukan sekedar bacaan, tetapi juga media branding & representasi profesional.</p>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </>
    )
}

export default KalenderPage