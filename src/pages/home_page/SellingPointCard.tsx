
function SellingPointCard({ img, title, desc }: { img: string; title: string; desc: string }) {

    return (
        <div className='h-fit min-h-50 border-2 rounded-2xl primary-border p-3 flex flex-col items-center justify-between'>
            <img src={img} className='h-12' />
            <p className='font-bold text-xl'>{title}</p>
            <p className='text-center leading-5'>{desc}</p>
        </div>
    )
}

export default SellingPointCard