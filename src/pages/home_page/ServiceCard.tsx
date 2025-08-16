import { ArrowRightIcon } from "@heroicons/react/20/solid";

function ServiceCard({ img, title, list }: { img: string; title: string; list: string[]; }) {

    return (
        <div className='flex justify-center'>
            <div className='h-fit w-fit min-h-50 rounded-2xl primary-bg flex gap-14 max-lg:gap-3 max-md:gap-14 max-sm:gap-3'>
                <div className='flex flex-col justify-between gap-5 p-3'>
                    <div className='flex flex-col gap-2'>
                        <p className='font-bold text-xl'>{title}</p>
                        <ul className='list-disc pl-5'>
                            {
                                list.map((element, index) => {
                                    return (
                                        <li key={index}>{element}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='flex bg-white rounded-full w-fit py-2 px-3 primary-text items-center gap-2'>
                        <p>Detail</p>
                        <ArrowRightIcon className='h-5' />
                    </div>
                </div>
                <img src={img} className='h-60 scale-110 max-lg:h-50' />
            </div>
        </div>
    )
}

export default ServiceCard