/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query'
import TeamImage from '../../assets/team.png'
import api from '../../services/api'
import TestimonialCard from '../home_page/TestimonialCard'

function AboutPage() {
    const fetchAboutPageData = async () => {
        const { data } = await api.get("/get-beranda")
        return data
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['aboutpage_data'],
        queryFn: fetchAboutPageData,
    })

    return (
        <>
            {data ? (
                <>
                    <div className="w-full flex justify-center">
                        <div className="justify-center w-[1520px]">
                            <div className="pt-28 flex justify-evenly max-lg:pt-36">
                                <div className="text-justify flex flex-col gap-10 max-w-[700px]">
                                    <p className="text-4xl font-bold">Tentang Kami</p>
                                    <p>Beesmart Solusi Media adalah perusahaan Kreatif di bidang desain dan cetak yang telah berdiri sejak tahun 2015. Lebih dari 8 tahun berpengalaman menyelesaikan project–project besar kebutuhan desain dan cetak berbagai instansi dan perusahaan.</p>
                                    <p>Pemahaman terhadap desain yang dipadukan dengan target market yang akurat serta disesuaikan dengan media cetak menjadi solusi untuk merespon setiap tantangan kompetisi bisnis saat ini. Oleh karena itu kami mengutamakan kreativitas, strategi dan ide-ide segar dalam menghasilkan desain yang relevan dengan kebutuhan yang direalisasikan dalam bentuk media cetak dan promosi.</p>
                                </div>
                                <div>
                                    <img src={TeamImage} className='h-[350px] rounded-4xl' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center bg-[#017d9e] mt-10">
                        <div className='flex justify-center text-white py-20 text-center'>
                            <p className='font-bold text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl'>Berdedikasi, Efektif & Efisien, Ramah,<br></br> Kreatif, Amanah, dan Harmonis</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="px-5 sm:px-20 justify-center w-[1520px]">
                            <div className="grid grid-cols-2 gap-20 max-md:grid-cols-1 p-20 max-md:px-5 text-justify">
                                <p>Kami membangun budaya kerja yang <span className='text-[#017d9e] font-bold'>berdedikasi</span> dan profesional dengan berpegang teguh pada nilai ibadah, mengutamakan <span className='text-[#017d9e] font-bold'>efektivitas dan efisiensi</span>, serta bekerja cerdas dan tuntas. Setiap layanan diberikan dengan sikap <span className='text-[#017d9e] font-bold'>ramah</span>, sikap positif, dan perhatian penuh kepada customer.</p>
                                <p>Kami terus berinovasi secara <span className='text-[#017d9e] font-bold'>kreatif</span> untuk menghadirkan solusi sesuai kebutuhan pasar, menjaga <span className='text-[#017d9e] font-bold'>amanah</span> dalam setiap tanggung jawab yang diemban, dan membangun suasana kerja yang <span className='text-[#017d9e] font-bold'>harmonis</span>, saling mendukung, serta berjuang bersama dalam tim.</p>
                            </div>
                            <div className='flex flex-col pb-20 items-center max-lg:flex-col gap-5'>
                                <p className='font-bold text-2xl'>Aktivitas</p>
                                <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10 w-full'>
                                    <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@beesmart.co.id/video/7319325957272161537" data-video-id="7319325957272161537" style={{ maxWidth: "605px", minWidth: "225px" }} > <section> <a target="_blank" title="@beesmart.co.id" href="https://www.tiktok.com/@beesmart.co.id?refer=embed">@beesmart.co.id</a> Review Buku Kenangan SD Insan Cendekia <a title="reviewbuku" target="_blank" href="https://www.tiktok.com/tag/reviewbuku?refer=embed">#reviewbuku</a> <a title="bukukenangan" target="_blank" href="https://www.tiktok.com/tag/bukukenangan?refer=embed">#bukukenangan</a> <a title="insancendekia" target="_blank" href="https://www.tiktok.com/tag/insancendekia?refer=embed">#insancendekia</a> <a title="beesmart.id" target="_blank" href="https://www.tiktok.com/tag/beesmart.id?refer=embed">#beesmart.id</a> <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a> <a title="fypシ" target="_blank" href="https://www.tiktok.com/tag/fyp%E3%82%B7?refer=embed">#fypシ</a> <a title="fypシ゚viral" target="_blank" href="https://www.tiktok.com/tag/fyp%E3%82%B7%E3%82%9Aviral?refer=embed">#fypシ゚viral</a> <a target="_blank" title="♬ suara asli  - beesmart.id" href="https://www.tiktok.com/music/suara-asli-beesmartid-7319326059093035777?refer=embed">♬ suara asli  - beesmart.id</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
                                    <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@beesmart.co.id/video/7328222275063352583" data-video-id="7328222275063352583" style={{ maxWidth: "605px", minWidth: "225px" }} > <section> <a target="_blank" title="@beesmart.co.id" href="https://www.tiktok.com/@beesmart.co.id?refer=embed">@beesmart.co.id</a> Apa Itu Buku Penghubung Siswa <a title="bukupenghubungsiswa" target="_blank" href="https://www.tiktok.com/tag/bukupenghubungsiswa?refer=embed">#bukupenghubungsiswa</a> <a title="cetakbukusekolah" target="_blank" href="https://www.tiktok.com/tag/cetakbukusekolah?refer=embed">#cetakbukusekolah</a> <a title="cetakbukumurah" target="_blank" href="https://www.tiktok.com/tag/cetakbukumurah?refer=embed">#cetakbukumurah</a> <a title="beesmart.id" target="_blank" href="https://www.tiktok.com/tag/beesmart.id?refer=embed">#beesmart.id</a> <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a> <a title="fypシ" target="_blank" href="https://www.tiktok.com/tag/fyp%E3%82%B7?refer=embed">#fypシ</a> <a title="fypシ゚viral" target="_blank" href="https://www.tiktok.com/tag/fyp%E3%82%B7%E3%82%9Aviral?refer=embed">#fypシ゚viral</a> <a target="_blank" title="♬ DJ DULU PUTUS ITU MAU MU BREAKBEAT - DJ AZKA" href="https://www.tiktok.com/music/DJ-DULU-PUTUS-ITU-MAU-MU-BREAKBEAT-7312828035211921409?refer=embed">♬ DJ DULU PUTUS ITU MAU MU BREAKBEAT - DJ AZKA</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
                                    <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@beesmart.co.id/video/7313024183611526401" data-video-id="7313024183611526401" style={{ maxWidth: "605px", minWidth: "225px" }} > <section> <a target="_blank" title="@beesmart.co.id" href="https://www.tiktok.com/@beesmart.co.id?refer=embed">@beesmart.co.id</a> Manfaat Kalender Untuk Sekolah dan Instansi Anda <a title="manfaat" target="_blank" href="https://www.tiktok.com/tag/manfaat?refer=embed">#manfaat</a> <a title="manfaatkalender" target="_blank" href="https://www.tiktok.com/tag/manfaatkalender?refer=embed">#manfaatkalender</a> <a title="kalender" target="_blank" href="https://www.tiktok.com/tag/kalender?refer=embed">#kalender</a> <a title="kalendersekolah" target="_blank" href="https://www.tiktok.com/tag/kalendersekolah?refer=embed">#kalendersekolah</a> <a title="kalendermeja" target="_blank" href="https://www.tiktok.com/tag/kalendermeja?refer=embed">#kalendermeja</a> <a title="kalender2024" target="_blank" href="https://www.tiktok.com/tag/kalender2024?refer=embed">#kalender2024</a> <a title="kalender2024murah" target="_blank" href="https://www.tiktok.com/tag/kalender2024murah?refer=embed">#kalender2024murah</a> <a title="kalender2024custom" target="_blank" href="https://www.tiktok.com/tag/kalender2024custom?refer=embed">#kalender2024custom</a> <a title="kalender2024viral" target="_blank" href="https://www.tiktok.com/tag/kalender2024viral?refer=embed">#kalender2024viral</a> <a title="beesmart.id" target="_blank" href="https://www.tiktok.com/tag/beesmart.id?refer=embed">#beesmart.id</a> <a title="fypviral" target="_blank" href="https://www.tiktok.com/tag/fypviral?refer=embed">#fypviral</a> <a title="fypviralシ" target="_blank" href="https://www.tiktok.com/tag/fypviral%E3%82%B7?refer=embed">#fypviralシ</a> <a target="_blank" title="♬ suara asli  - beesmart.id" href="https://www.tiktok.com/music/suara-asli-beesmartid-7313024276796525314?refer=embed">♬ suara asli  - beesmart.id</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
                                </div>
                            </div>
                            <div className='flex flex-col pb-20 items-center max-lg:flex-col gap-5'>
                                <p className='font-bold text-2xl'>Testimoni</p>
                                <p className='text-base text-justify'>Dengarkan Apa Kata Klien Kami</p>
                                <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10'>
                                    {
                                        data.testimoni.map((element: any, index: number) => {
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
            ) : isLoading ? (
                <div className='flex justify-center items-center h-[500px]'>
                    <p>Loading...</p>
                </div>
            ) : isError ? (
                <div className='flex justify-center items-center h-[500px]'>
                    <p>{error.message}</p>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default AboutPage