
function PortfolioCard({ img, client, productType }: { img: string; client: string; productType: string }) {

    return (
        <div className='h-fit shadow-xl shadow-gray-400 rounded-2xl p-3 flex flex-col items-center justify-between hover:scale-105 transition-all'>
            <img src={img} />
            <p className='font-bold text-xl text-center'>{client}</p>
            <p className='text-center leading-5'>{productType}</p>
        </div>
    )
}

export default PortfolioCard