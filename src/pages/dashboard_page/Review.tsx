/* eslint-disable @typescript-eslint/no-explicit-any */

import api from "../../services/api"
import { useQuery } from "@tanstack/react-query"
import TestimonialCard from "../home_page/TestimonialCard"

function Review() {
    const fetchReviewData = async () => {
        const { data } = await api.get("/get-ratings")
        return data
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['review_data'],
        queryFn: fetchReviewData,
    })

    return (
        <>
            {
                data ?
                    <>
                        <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10'>
                            {
                                data.map((element: any, index: number) => {
                                    return (
                                        <div className="flex flex-col gap-5">
                                            <TestimonialCard key={index} profilePic={element.foto_url} rating={element.bintang} username={element.nama} timeDesc={element.waktu} testimonialDesc={element.isi} link={element.link} />
                                            <div className="bg-[#017d9e] flex justify-center text-white px-3 py-2 rounded-lg my-3 cursor-pointer active:scale-95">Edit Review</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                    : isLoading ? (
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

export default Review