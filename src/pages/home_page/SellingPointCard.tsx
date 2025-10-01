
function SellingPointCard({ img, title, desc }: { img: string; title: string; desc: string }) {

    return (
        <div className='h-full min-h-50 p-3 flex flex-col items-center gap-5 hover:scale-105 transition-all'>
            <img src={img} className='h-12' />
            <p className='font-bold text-xl text-center'>{title}</p>
            <p className='text-center leading-5'>{desc}</p>
        </div>
    )
}

export default SellingPointCard