import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../App'
import happy from '../Images/happy.png'

const Orders = () => {
    const { globalData, setGlobalData } = useContext(GlobalContext);
    const [length, setLength] = useState(0);

    useEffect(() => {
        setLength(globalData.cart.length)
    }, [globalData.cart])
    return (
        <section className='rounded-md overflow-scroll sm:mx-auto'>
            <div className=' gap-2 flex flex-col '>
                {
                    !length > 0 ? <div className='w-full py-32 sm:py-[12.3rem] my-auto'>
                        <h2 className='font-mono tracking-tighter text-center sm:text-lg text-base text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400'>You don't have any orders yet <br></br> <Link to='/allproducts' className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400 animate-pulse cursor-pointer italic'>Continue Shopping </Link><img className='animate-bounce w-6 inline sm:w-9 ' src={happy} /></h2>
                    </div>
                        : globalData.cart.map((item, index) => (
                            <div className='space-y-5 bg-gray-800 rounded-md p-3'>
                                <div className='space-y-2'>
                                    <h3 className='text-slate-300'>Order status</h3>
                                    <h2 className='text-slate-300'>Order Date</h2>
                                </div>
                                <div className='flex justify-between items-center gap-2'>
                                    <div className='flex gap-5 items-center w-[60vw] overflow-scroll'>
                                        <img className='w-10 rounded-sm opacity-70' src={item.image} />
                                        <h2 className='text-xs text-sky-500 sm:text-sm xl:text-base'>{item.title}</h2>
                                    </div>
                                    <h4 className='text-center sm:whitespace-nowrap text-slate-400'>$ {item.price}</h4>
                                </div>
                                <div className='mx-auto h-[0.05rem] opacity-20 w-[98%] bg-white'></div>
                                <Link to = {`/products/${item.id}`} className='duration-300 hover:scale-110 ease-out inline-block lg:text-base p-1 sm:p-2 rounded-md text-sky-500 px-3 text-center text-xs bg-gradient-to-br from-black via-slate-900 to-black '>View order</Link>
                            </div>
                        ))
                }
            </div>
        </section>
    )
}

export default Orders