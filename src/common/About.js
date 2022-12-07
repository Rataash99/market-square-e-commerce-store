import React from 'react'
// import about2 from '../Images/about2.png'
import about3 from '../Images/about3.png'

const About = () => {
    return (
        <div className='transition-all duration-300 p-4 '>
            <section className='upper m-6 justify-between flex flex-col p-5 mx-auto sm:flex-row sm:w-full rounded-lg container bg-slate-900 2xl:h-[85vh]'>
                <div className='space-y-3 md:space-y-5 lg:space-y-7 p-4 md:self-center'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500'>Who we are?</h1>
                    <p className='text-xs sm:text-sm tracking-widest text-gray-300 max-w-xl lg:text-base xl:text-lg border-l-8 pl-4 border-cyan-500 rounded-2xl overflow-hidden'>
                        Market Square is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. We strives to be Earth’s most customer-centric company, Earth’s best employer, and Earth’s safest place to work. 1-Click shopping, personalized recommendations,Just Walk Out technology, and The Climate Pledge are some of the things pioneered by Market Square.
                    </p>
                </div>
                <img className='my-auto sm:w-[40vw] 2xl:w-[50vw] animate-levitate pb-12' src={about3} />
            </section>
            <hr className='max-w-[90vw] mx-auto border border-cyan-600 opacity-30 my-10'></hr>
            <section className='container mx-auto mt-5'>
                <div className='border-y-2 rounded-lg border-cyan-700 px-4 py-10 flex flex-col gap-4 sm:flex-row justify-around'>
                    <div className='bg-slate-900 p-4 rounded-md flex flex-col justify-between lg:max-w-sm border-l border-cyan-500 gap-2 hover:shadow-md hover:shadow-cyan-900 duration-150 ease-in'>
                        <div className='space-y-2'>
                            <h3 className='text-cyan-500 text-base font-bold sm:text-lg md:text-xl lg:text-2xl'>Leadership Principles</h3>
                            <p className='text-xs text-gray-400 md:text-sm lg:text-base'>Our Leadership Principles are more than inspirational wall hangings. The 16 principles guide our discussions and decisions every day.</p>
                        </div>
                        <button className='border-b text-xs border-cyan-500 py-1 px-2 text-gray-500 rounded-md bg-gradient-to-br from-black via-slate-900 to-black text-center hover:scale-110 duration-500 ease-in-out self-start sm:text-sm md:text-base md:px-3 md:py-2'>Learn more</button>
                    </div>
                    <div className='bg-slate-900 p-4 rounded-md space-y-3 flex flex-col justify-between lg:max-w-sm border-l border-cyan-500 gap-2  hover:shadow-md hover:shadow-cyan-900 duration-150 ease-in'>
                        <div className='space-y-2'>
                            <h3 className='text-cyan-500 text-base font-bold sm:text-lg md:text-xl lg:text-2xl'>Awards and Recognition</h3>
                            <p className='text-xs text-gray-400 md:text-sm lg:text-base'>We are honoured to be recognised for the work we do on behalf of our customers, employees, and communities every day.</p>
                        </div>
                        <button className='border-b text-xs border-cyan-500 py-1 px-2 text-gray-500 rounded-md bg-gradient-to-br from-black via-slate-900 to-black text-center hover:scale-110 duration-500 ease-in-out self-start sm:text-sm md:text-base md:px-3 md:py-2'>Learn more</button>
                    </div>
                    <div className='bg-slate-900 p-4 rounded-md space-y-3 flex flex-col justify-between lg:max-w-sm border-l border-cyan-500 gap-2 hover:shadow-md hover:shadow-cyan-900 duration-150 ease-in'>
                        <div className='space-y-2'>
                            <h3 className='text-cyan-500 text-base font-bold sm:text-lg md:text-xl lg:text-2xl'>Facts about Us</h3>
                            <p className='text-xs text-gray-400 md:text-sm lg:text-base'>Facts about Market Square, its employees, communities, and customers.</p>
                        </div>
                        <button className='border-b text-xs border-cyan-500 py-1 px-2 text-gray-500 rounded-md bg-gradient-to-br from-black via-slate-900 to-black text-center hover:scale-110 duration-500 ease-in-out self-start sm:text-sm md:text-base md:px-3 md:py-2'>Learn more</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About