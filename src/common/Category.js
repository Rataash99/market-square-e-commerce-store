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
        <div className='cursor-pointer w-full h-auto grid grid-cols-2 gap-4 text-xs overflow-hidden p-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:text-base'>
            {
                products && products.map((item, index) => (
                    <Link key = {index} to = {`/products/${item.id}`}>
                        <div className="card flex flex-col justify-between gap-3 rounded-lg p-1 shadow-md hover:shadow-lg bg-gray-900 ">
                            <img className='shadow-lg w-full rounded-lg' src={item.image} />
                            <div className='flex gap-4 flex-col'>
                                <p className='text-[0.6rem] sm:text-base'>{item.title}</p>
                                <div className='flex justify-between'>
                                    <h3 className='font-medium'>$ {item.price}</h3>
                                    <img className='w-4 sm:w-5 hover:scale-125' src={heart} alt='wishlist' />
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