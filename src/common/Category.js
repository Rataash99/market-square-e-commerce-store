import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom';
import heart from '../Images/heart.png'
import { GlobalContext } from '../App';

const Category = () => {
    const [products, setProducts] = useState([]);
    const {globalData, setGlobalData} = useContext(GlobalContext)
    const { name } = useParams();
    const apiCall = async () => {
        let response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
        let result = await response.json();
        setProducts(result);
    }
    useEffect(() => {
        apiCall()
    }, [name])

    const addToWishlist = (prod) => {
        let isPresent = false;
        globalData.wishlist.map((item) => {
            if(item.id == prod.id){
                isPresent = true;
            }
        })
        !isPresent && setGlobalData({
            ...globalData,
            wishlist: [...globalData.wishlist, prod],
            heartStatus: [...globalData.heartStatus,prod.id]
        })
    }

    return (
        <div className='container mx-auto p-5 duration-500 tracking-widest transition-all'>
            <h1 className='text-xl sm:text-2xl  uppercase font-bold text-center sm:text-left p-3 text-cyan-500 mt-8 italic'>{name}</h1>
            <hr className='opacity-40 my-10 mx-auto' ></hr>
            <div className='w-full h-[75vh] grid grid-cols-2 gap-6 text-xs overflow-scroll sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:text-base  sm:hover:border-y py-7 md:p-7 sm:hover:border-cyan-300 sm:hover:border-opacity-25'>
            {
                products && products.map((item, index) => (
                    <Link  key = {index} to = {`/products/${item.id}`}>
                        <div className="card flex flex-col justify-between rounded-lg p-3 shadow-md shadow-cyan-900 hover:shadow-l bg-gradient-to-bl from-black via-slate-900 to-black duration-500 hover:scale-105 ease-out h-[18rem] sm:h-[28rem] lg:h-[32rem] overflow-scroll hover:shadow-lg hover:shadow-cyan-900">
                            <img className='shadow-lg w-[7rem] self-center sm:w-[12rem] lg:w-[15rem] text-center rounded-lg max-h-96 sm:max-h-72 lg:max-h-[23rem] opacity-70' src={item.image} />
                            <div className='flex gap-4 flex-col'>
                                <p className='text-[0.6rem] sm:text-base'>{item.title}</p>
                                <div className='flex justify-between'>
                                    <h3 className='font-medium'>$ {item.price}</h3>
                                    <Link>
                                        <img className='hover:scale-125 md:w-6 duration-300 ease-in-out hover:animate-pulse w-4  hover: cursor-pointer sm:w-5 my-auto' src={heart} alt='wishlist' onClick={() => addToWishlist(item)} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
            </div>
    )
}

export default Category