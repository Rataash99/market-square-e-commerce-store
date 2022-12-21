import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './App';
import { Link } from 'react-router-dom';
import orders from './Images/orders.png'

const Cart = () => {
    const { globalData, setGlobalData } = useContext(GlobalContext);
    const [total, setTotal] = useState(0);

    const removeFromCart = (prod) => {
        let tempArr = globalData.cart.filter((item) => {
            return item.id !== prod.id
        })
        setGlobalData({
            ...globalData,
            cart: [...tempArr]
        })
    }

    useEffect(() => {
        let sum = globalData.cart.reduce((acc, curr) => {
            return acc + curr.price;
        }, 0)
        setGlobalData({
            ...globalData,
            cartTotal: sum.toFixed(2)
        })

    }, [globalData.cart])

    return (
        globalData.cart.length > 0 ?
            <div className='h-[90vh]'>
                <div className=' text-xs shadow-2xl justify-center items-center md:flex lg:text-base '>

                    <div className='container mx-auto h-[90vh] sm:h-[90vh] sm:max-w-xl md:max-w-3xl lg:max-w-5xl transition-all duration-200 ease-in max-w-6xl mt-8 p-2 space-y-6'>
                        <h2 className='text-lg text-sky-500 text-center sm:text-xl md:text-2xl tracking-wider font-semibold'><span className=' p-2 border-double border-b-4 rounded-lg border-sky-500 px-4'>Shopping Cart</span></h2>
                        <hr className='border border-sky-800 opacity-60'></hr>
                        <div className='flex gap-2 flex-col sm:w-full transition-all duration-300 ease-out overflow-scroll max-h-[60vh] m-1 pb-2 sm:m-0'>
                            {
                                globalData.cart.map((item, index) => (
                                    <Link to = {`/products/${item.id}`} key={index} className='bg-gray-900 rounded-md p-3 align-middle space-y-4 sm:space-y-5 md:space-y-6 duration-200 ease-in hover:shadow-md cursor-pointer  hover:shadow-sky-900 ' >
                                            <h1 className='font-semibold text-xs border-b inline rounded-lg pb-2 border-sky-400 text-neutral-300 md:text-sm lg:text-base'>{item.title}</h1>
                                        <div className='relative space-y-2 text-gray-300 flex justify-between'>
                                            <div className='flex w-full items-center'>
                                                <img className='w-16 sm:w-20 md:w-24 rounded-md' src={item.image} />
                                                <p className='text-xs md:text-sm px-2 truncate max-w-[8rem] self-center left-24 text-slate-300 absolute sm:max-w-xs md:max-w-md lg:max-w-2xl xl:max-w-3xl xl:text-clip xl:whitespace-normal xl:overflow-visible  sm:left-28 text-gray-400'>{item.description}</p>
                                            </div>
                                            <p className='text-center self-center text-xs sm:text-sm lg:text-base whitespace-nowrap'>$ {item.price}</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <Link className='bg-gradient-to-br from-black via-slate-900 to-black text-red-700 hover:scale-110 duration-100 ease-in p-2 px-4 rounded-md hover:shadow-sm hover:shadow-sky-900 text-center' onClick={() => removeFromCart(item)}>Remove</Link>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                        <hr className='border border-sky-800 opacity-60'></hr>
                        <div className='flex justify-between pr-2 pl-3'>
                            <h2 className='font-semibold tracking-wide uppercase'>Total</h2>
                            <p className='font-semibold'>$ {globalData.cartTotal}</p>
                        </div>
                        <hr className='border border-sky-800 opacity-60'></hr>
                        <div className=' flex justify-center '>
                            <Link to='/allproducts' className='bg-slate-800 p-2 rounded-md text-sky-500 hover:bg-slate-900 hover:shadow-md hover:shadow-sky-800 px-3 text-xs sm:text-sm md:text-base text-center hover:scale-110 duration-200 ease-out w-[80vw] max-w-[18rem] sm:max-w-[20rem]'>Continue shopping</Link>
                        </div>
                    </div>
                </div>

            </div>
            :
            <div className='h-[90vh] flex items-start justify-center mt-14 p-5 transition-all duration-500 ease-in'>
                <div className='rounded-md bg-slate-900 flex justify-center items-center flex-col h-[30vh] md:h-[40vh] lg:h-[50vh] gap-4 w-full max-w-md md:max-w-lg lg:max-w-4xl'>
                    <img className='w-16 sm:w-20 md:w-24' src={orders} />
                    <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500 text-sm text-center sm:text-base lg:text-lg xl:text-xl'>You don't have any orders yet.</h2>
                    <Link to='/allproducts' className='p-2 bg-slate-800 text-sky-500 rounded-md text-xs sm:text-sm  hover:scale-110 hover:shadow-md hover:shadow-sky-700 duration-200 ease-out'><span className='animate-pulse hover:animate-none'>Go shopping</span></Link>
                    <Link to='/wishlist' className='p-2 bg-slate-800 text-sky-500 rounded-md text-xs sm:text-sm  hover:scale-110 hover:shadow-md hover:shadow-sky-700 duration-200 ease-out'><span className='animate-pulse hover:animate-none'>Go to Wishlist</span></Link>
                </div>
            </div>
    )
}

export default Cart;