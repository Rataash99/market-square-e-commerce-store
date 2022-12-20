import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { GlobalContext } from './App';
import Alert from './common/Alert';

const Checkout = () => {
    const { globalData, setGlobalData } = useContext(GlobalContext);
    const [check, setCheck] = useState(false);
    const navigate = useNavigate();
    const checktick = {check, setCheck};

    const payment = () => {
        setCheck(true)
        setGlobalData({
            ...globalData,
            cart : []
        })
        setTimeout(() => {
            navigate('/allproducts')
        },8000)
    }
   
    return (
        <div className='container mx-auto h-[84vh] overflow-scroll sm:h-[90vh] sm:max-w-xl md:max-w-3xl lg:max-w-5xl transition-all duration-200 ease-in max-w-6xl mt-14 p-2 space-y-6'>
            <h2 className='text-lg text-sky-500 text-center sm:text-xl md:text-2xl tracking-wider font-semibold'><span className=' p-2 border-double border-b-4 rounded-lg border-sky-500 px-4'>Checkout</span></h2>
            <hr className='border border-sky-800 opacity-60'></hr>
            <div className='flex gap-2 flex-col sm:w-full transition-all duration-300 ease-out  overflow-scroll max-h-[50vh] md:max-h-[80vh] sm:max-h-[100vh]  m-1 pb-2 sm:m-0'>
                {
                    globalData.cart.map((item, index) => (
                        <Link to = {`/products/${item.id}`} key={index} className='bg-gray-900 rounded-md p-3 align-middle space-y-4 hover:shadow-sky-900 hover:shadow-md' >
                            <div>
                                <h1 className='font-semibold text-xs border-b inline rounded-lg pb-1 border-sky-400 text-neutral-300'>{item.title}</h1>
                            </div>
                            <div className='space-y-2 text-gray-300 flex justify-between'>
                                <img className='w-24 rounded-md' src={item.image} />
                                <p className='text-center self-center '>$ {item.price}</p>
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
            <div className='w-full  flex justify-center' onClick={payment}>
                <button className='hover:shadow-md hover:bg-slate-900 hover:shadow-sky-800 hover:scale-110 duration-200 ease-in text-sky-500 bg-slate-800 p-2 rounded-md w-full max-w-md font-semibold tracking-widest' >Place order</button>
            </div>
            {check && <Alert check = {checktick}/>}
        </div>
    )
}

export default Checkout;