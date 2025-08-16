import Star from '../../assets/star.png'
import GoogleLogo from '../../assets/google_logo.png'

function TestimonialCard({ profilePic, rating, username, timeDesc, testimonialDesc }: { profilePic: string; rating: number; username: string; timeDesc: string; testimonialDesc: string }) {

    return (
        <div className='h-fit shadow-xl shadow-gray-400 rounded-2xl p-3 flex flex-col justify-between gap-5'>
            <div className='flex gap-5'>
                <img src={profilePic} className='h-16' />
                <div className='flex flex-col justify-center gap-1 leading-3'>
                    <p className='font-bold'>{username}</p>
                    <p className='text-sm font-light'>{timeDesc}{rating}</p>
                    <div className='flex gap-1'>
                        {
                            Array.from({ length: rating }).map(() => {
                                return (
                                    <img src={Star} className='h-3' />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <p>{testimonialDesc}</p>
            <div className='flex items-center gap-2'>
                <img src={GoogleLogo} className='h-7' />
                <a className='underline'>Lihat ulasan di Google</a>
            </div>
        </div>
    )
}

export default TestimonialCard