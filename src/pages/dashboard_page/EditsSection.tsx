
import { RectangleStackIcon, NewspaperIcon, StarIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Blog from './Blog'
import Portofolio from './Portofolio'
import Review from './Review'
import Pencapaian from './Pencapaian'

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
    ]

    return (
        <>
            <div className='w-full pt-5 px-10'>
                <div className='flex flex-wrap gap-x-5 gap-y-3'>
                    {
                        options.map((element, index) => {
                            return (
                                <div onClick={() => setSelectedOption(element.title)} key={index} className={`cursor-pointer flex justify-between items-center py-2 px-5 rounded-lg border w-[200px] ${selectedOption === element.title ? 'bg-[#017d9e] border-[#017d9e] text-white' : 'border-gray-400'}`}>
                                    <p>{element.title}</p>
                                    {element.icon}
                                </div>
                            )
                        })
                    }
                </div>
                <div className='mt-10'>
                    {selectedOption === 'Blog' && <Blog />}
                    {selectedOption === 'Portofolio' && <Portofolio />}
                    {selectedOption === 'Review' && <Review />}
                    {selectedOption === 'Pencapaian' && <Pencapaian />}
                </div>
            </div>
        </>
    )
}

export default EditsSection