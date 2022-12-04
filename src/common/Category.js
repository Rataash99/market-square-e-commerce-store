import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import heart from '../Images/heart.png'

const Category = () => {
    const [products, setProducts] = useState([]);
    const { name } = useParams();
    const apiCall = async () => {
        let response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
        let result = await response.json();
        setProducts(result);
    }
    useEffect(() => {
        apiCall()
    }, [name])
    return (
        <div className='mt-4 w-full h-full grid grid-cols-2 gap-6 text-xs overflow-x-hidden p-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:text-base grid-rows-3 sm:grid-rows-none'>
            {
                products && products.map((item, index) => (
                    <Link  key = {index} to = {`/products/${item.id}`}>
                        <div className="card flex flex-col justify-between rounded-lg p-3 shadow-lg shadow-slate-800 hover:shadow-l bg-gradient-to-bl from-black via-slate-900 to-black duration-500 hover:scale-105 ease-out h-[18rem] sm:h-[28rem] lg:h-[32rem] overflow-scroll ">
                            <img className='shadow-lg w-[7rem] self-center sm:w-[12rem] lg:w-[15rem] text-center rounded-lg max-h-96 sm:max-h-72 lg:max-h-[23rem] opacity-70' src={item.image} />
                            <div className='flex gap-4 flex-col'>
                                <p className='text-[0.6rem] sm:text-base'>{item.title}</p>
                                <div className='flex justify-between'>
                                    <h3 className='font-medium'>$ {item.price}</h3>
                                    <img className='w-4 sm:w-5 hover:scale-125 my-auto' src={heart} alt='wishlist' />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Category