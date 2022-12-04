import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../App'
import happy from '../Images/happy.png'

const Orders = () => {
    const { globalData, setGlobalData } = useContext(GlobalContext);
    const [length, setLength] = useState(0);

    useEffect(() => {
        setLength(globalData.cartArr.length)
    }, [globalData.cartArr])
    return (
        <section className='rounded-md overflow-scroll sm:mx-auto'>
            <div className=' gap-2 flex flex-col '>
                {
                    !length > 0 ? <div className='w-full py-32 sm:py-[12.3rem] my-auto'>
                        <h2 className='font-mono tracking-tighter text-cyan-300 text-center sm:text-lg text-base'>You don't have any orders yet <br></br> <Link to='/' className='text-cyan-500 animate-pulse cursor-pointer italic'>Continue Shopping </Link><img className='animate-bounce w-6 inline sm:w-9' src={happy} /></h2>
                    </div>
                        : globalData.cartArr.map((item, index) => (
                            <div className='space-y-5 bg-gray-800 rounded-md p-3'>
                                <div className='space-y-2'>
                                    <h3>Order status</h3>
                                    <h2>Order Date</h2>
                                </div>
                                <div className='flex justify-between items-center gap-2'>
                                    <div className='flex gap-5 items-center w-[60vw] overflow-scroll'>
                                        <img className='w-10 rounded-sm' src={item.image} />
                                        <h2>{item.title}</h2>
                                    </div>
                                    <h4 className='text-center sm:whitespace-nowrap'>$ {item.price}</h4>
                                </div>
                                <div className='mx-auto h-[0.05rem] opacity-20 w-[98%] bg-white'></div>
                                <div className='duration-300 hover:scale-y-110 ease-out'>
                                    <Link to={`/products/${item.id}`} className='lg:text-base p-1 sm:p-2 rounded-md text-cyan-500 hover:text-cyan-400 px-3 text-center text-xs bg-gradient-to-br from-black via-slate-900 to-black '>View order</Link>
                                </div>
                            </div>
                        ))
                }
            </div>
        </section>
    )
}

export default Orders