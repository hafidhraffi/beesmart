import CountUp from "react-countup";

function AchievementPoint({ count, desc }: { count: number; desc: string; }) {

    return (
        <div className='flex flex-col items-center'>
            <p className='font-bold text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl'>
                <CountUp end={count} duration={2} delay={0} enableScrollSpy scrollSpyOnce />
                +
            </p>
            <p className='text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base'>{desc}</p>
        </div>
    )
}

export default AchievementPoint