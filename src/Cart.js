import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './App';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { globalData, setGlobalData } = useContext(GlobalContext);
    const [total, setTotal] = useState(0);

    const removeFromCart = (prod) => {
        let tempArr = globalData.cartArr.filter((item) => {
            return item.id !== prod.id
        })
        setGlobalData({
            ...globalData,
            cartArr: [...tempArr]
        })
    }

    useEffect(() => {
        let sum = globalData.cartArr.reduce((acc, curr) => {
            return acc + curr.price;
        }, 0)
        setTotal(sum);
    }, [globalData.cartArr])

    return (
        <>
            <div className=' m-10 text-xs shadow-2xl overflow-auto justify-center items-center md:flex lg:text-base'>
                <table className="w-5/6 text-left rounded-sm ">
                    <thead className=''>
                        <tr className=''>
                            <th className='bg-slate-900 p-3 text-center'>S.No</th>
                            <th className='bg-slate-900 p-3'></th>
                            <th className='bg-slate-900 p-3'>Title</th>
                            <th className='bg-slate-900 p-3'>Price</th>
                            <th className='bg-slate-900 p-3'>{/*remove btn */}</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            globalData.cartArr.map((item, index) => (
                                <tr className='' key={index}>
                                    <td className='bg-slate-800 p-3 text-center w-1 whitespace-nowrap  '>{index + 1}</td>
                                    <td className='bg-slate-800 p-3whitespace-nowrap  '><img className='w-12' src={item.image} /></td>
                                    <td className='bg-slate-800 p-3 md:overflow-scroll whitespace-nowrap '>{item.title}</td>
                                    <td className='bg-slate-800 p-3 whitespace-nowrap '>$ {item.price}</td>
                                    <td className='bg-slate-800 p-3whitespace-nowrap text-center '><button className='p-2 px-4 bg-slate-900 text-red-600 hover:text-red-500 rounded-md hover:scale-110 duration-200 ease-out' onClick={() => removeFromCart(item)}>remove</button></td>
                                </tr>
                            ))
                        }
                        {
                            <tr className='hover:bg-slate-600 '>
                                <td className='bg-slate-700 p-3 whitespace-nowrap'>Total</td>
                                <td className='bg-slate-700 p-3 whitespace-nowrap'></td>
                                <td className='bg-slate-700 p-3 whitespace-nowrap'></td>
                                <td className='bg-slate-700 p-3 whitespace-nowrap'>$ {globalData.cartArr.length > 0 && total.toFixed(2)}</td>
                                <td className='bg-slate-700 p-3 text-center whitespace-nowrap '>{globalData.cartArr.length > 0 && <Link to='/checkout' className='bg-slate-800 p-2 rounded-md text-yellow-500 hover:text-yellow-400 px-2 hover:scale-110 duration-500 ease-out '><span className='hover:animate-pulse '>Checkout</span></Link>}</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
            <div className=' md:flex justify-center '>
                <Link to='/' className=' bg-slate-800 p-2 rounded-md text-cyan-500 hover:text-cyan-400 px-3 text-xs ml-9 text-center hover:scale-110 duration-500 ease-out md:text-base'>Continue shopping</Link>
            </div>
        </>
    )
}

export default Cart;