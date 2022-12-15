import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ecommerce from '../Images/ecommerce.png';
import diamond from '../Images/diamond.png'
import suit from '../Images/suit.png'
import wsuit from '../Images/wsuit.png'
import electronics from '../Images/electronics.png'
import about1 from '../Images/about1.png'

const Home = () => {
    return (

        <div className='container mx-auto'>
            <section className = ' p-2 transition-all duration-300 h-[100vh] sm:h-[92vh] md:h-[80vh] xl:h-[92vh] overflow-scroll mt-10 sm:mt-0'>
                <div className='flex flex-col lg:flex-row duration-300 gap-16 md:gap-2 lg:gap-0 '>
                    <div className='mx-auto max-w-lg self-center space-y-8 flex flex-col'>
                        <h2 className='duration-300 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500 text-4xl text-center pt-10 sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-widest font-semibold '>Online <span className='pt-1 text-slate-600 text-xl block tracking-[1rem] sm:tracking-[1.3rem] font-extrabold sm:text-2xl md:text-3xl lg:text-5xl text-center pl-2'>shopping</span></h2>
                        <p className='text-xs py-5 max-w-sm lg:max-w-lg p-4 rounded-md sm:text-sm bg-slate-900 text-gray-400 italic'>One stop solution for all your shopping needs, now buy your favourite products for most affordable prizes and enjoy heavy discounts on all products.</p>                
                        <Link to = '/about' className='bg-slate-800 p-2 lg:p-3 rounded-sm hover:scale-110 duration-500 ease-out inline text-blue-400 hover:text-sky-400 sm:text-sm md:text-base text-center lg:text-lg font-semibold tracking-[0.5rem] hover:bg-slate-900 hover:shadow-md hover:shadow-cyan-800 uppercase '>Learn More</Link>   
                    </div>
                    <img className=' p-4 max-w-sm sm:max-w-sm duration-200 lg:max-w-lg xl:max-w-xl 2xl:max-w-[48rem] animate-levitate w-[90vw] mx-auto' src={ecommerce} />
                </div>
            </section>
            <hr className='opacity-50 mx-auto w-[90vw] bg-cyan-500 border border-cyan-700'></hr>
            <section className='container mx-auto my-12 '>
                <div className='flex flex-col gap-10 items-center md:flex-row'>
                    <Link className='hover:scale-110 duration-300 ease-out flex flex-col items-center bg-slate-900 hover:shadow-md border-l-2 border-cyan-800 hover:shadow-cyan-900 w-[80vw] rounded-md p-2' to = '/category/jewelery'>
                        <img className='w-24 animate-bounce' src = {diamond}/>
                        <h2 className='  text-base tracking-widest font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400'>Jewellery</h2>
                    </Link>
                    <Link className='hover:scale-110 duration-300 ease-out flex flex-col gap-1 items-center bg-slate-900 hover:shadow-md border-l-2 border-cyan-800 hover:shadow-cyan-900 w-[80vw] rounded-md p-2' to = "/category/men's clothing">
                    <img className='w-24 animate-bounce' src = {suit}/>
                        <h2 className=' text-base tracking-widest font-mono font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400'>Men's Clothing</h2>
                    </Link>
                    <Link className='hover:scale-110 duration-300 ease-out flex flex-col gap-1 items-center bg-slate-900 hover:shadow-md border-l-2 border-cyan-800 hover:shadow-cyan-900 w-[80vw] rounded-md p-2 ' to = "/category/women's clothing">
                    <img className='w-24 animate-bounce' src = {wsuit}/>
                        <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400 text-base tracking-widest font-mono font-extrabold text-center'>Women's Clothing</h2>
                    </Link>
                    <Link className='hover:scale-110 duration-300 ease-out flex flex-col gap-1 items-center bg-slate-900 hover:shadow-md border-l-2 border-cyan-800 hover:shadow-cyan-900 w-[80vw] rounded-md p-2' to = "/category/electronics">
                    <img className='w-24 animate-bounce' src = {electronics}/>
                        <h2 className=' text-base tracking-widest font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400'>Electronics</h2>
                    </Link>
                </div>
            </section>
            <hr className='opacity-50 mx-auto w-[90vw] bg-cyan-500 border border-cyan-700 mb-2'></hr>
        </div>
    )
}

export default Home;