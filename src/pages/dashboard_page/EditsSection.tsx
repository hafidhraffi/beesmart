
import { RectangleStackIcon, NewspaperIcon, StarIcon, CheckBadgeIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'


function EditsSection() {
    const [selectedOption, setSelectedOption] = useState('Portofolio')

    const options = [
        {
            title: 'Portofolio',
            icon: <RectangleStackIcon className='h-8' />,
        },
        {
            title: 'Blog',
            icon: <NewspaperIcon className='h-8' />,
        },
        {
            title: 'Review',
            icon: <StarIcon className='h-8' />,
        },
        {
            title: 'Pencapaian',
            icon: <CheckBadgeIcon className='h-8' />,
        },
        {
            title: 'Harga',
            icon: <CurrencyDollarIcon className='h-8' />,
        }
    ]

    return (
        <>
            <div className='w-full pt-24 px-10'>
                <div className='flex justify-evenly'>
                    {
                        options.map((element, index) => {
                            return (
                                <div onClick={() => setSelectedOption(element.title)} key={index} className={`cursor-pointer flex justify-between items-center py-2 px-5 rounded-lg border w-[200px] ${selectedOption === element.title ? 'border-[#017d9e] shadow-lg shadow-gray-400' : 'border-gray-400'}`}>
                                    <p>{element.title}</p>
                                    {element.icon}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default EditsSection