
function SellingPointCard({ img, title, desc }: { img: string; title: string; desc: string }) {

    return (
        <div className='h-full min-h-50 border-2 rounded-2xl border-[#017d9e] p-3 flex flex-col items-center justify-between hover:scale-105 hover:shadow-md hover:shadow-[#017d9e] transition-all'>
            <img src={img} className='h-12' />
            <p className='font-bold text-xl text-center'>{title}</p>
            <p className='text-center leading-5'>{desc}</p>
        </div>
    )
}

export default SellingPointCard