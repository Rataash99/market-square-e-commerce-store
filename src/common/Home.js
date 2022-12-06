import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ecommerce from '../Images/E-commerce.png';
import bag from '../Images/bag.png'
const Home = () => {
    return (

        <div className=''>
            <section className = 'p-2 before:content-none before:w-96 before:bg-slate-500 before:h-full before:relative before:z-50'>
                <div className='flex flex-col md:flex-row'>
                    <div className='mx-auto max-w-lg'>
                        <h2 className=' text-3xl text-center pt-10'>Time to start shopping <img className='w-8 inline max-w-md' src={bag} /></h2>
                        <p className='text-xs py-5 max-w-sm p-4 '>One stop solution for all your shopping needs, now buy your favourite products for most affordable prizes and enjoy heavy discounts on all products.</p>                
                        <button></button>   
                    </div>
                    <img className='p-4 border max-w-lg animate-bounce duration-1000' src={ecommerce} />
                </div>
            </section>
            <section className='container mx-auto'>
                this is a container
            </section>
        </div>
    )
}

export default Home;