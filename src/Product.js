import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import {GlobalContext} from './App'

const Product = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const localContext = useContext(GlobalContext);
    const apiCall = async () => {
        let response = await fetch(`https://fakestoreapi.com/products/${id}`);
        let result = await response.json();
        setProduct(result);
    }
    const addToCart = (prod) => {
        localContext.setGlobalData({
            ...localContext.globalData,
            cartArr : [...localContext.globalData.cartArr,prod]
        })
    }
    
    const addToWishlsit = () => {

    }
    useEffect(() => {
        console.log(localContext.globalData)
    },[localContext])
    useEffect(() => {
        apiCall();
    }, [])

    return (
        <div className="card grid grid-row-2 p-2 sm:p-3 lg:p-6 gap-3 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ease-in-out" >
            <div className='w-full  flex justify-center items-center lg:block'>
                <img className='shadow-lg rounded-lg w-72 md:w-96 lg:flex lg:justify-center xl:items-center' src={product.image} />
            </div>
            <div className='flex justify-between flex-col gap-3'>
                <div className='flex gap-2 flex-col'>
                    <h2 className='text-xl md:text-2xl lg:text-3xl'>{product.title}</h2>
                    <h4 className='text-sm'>{product.description}</h4>
                </div>
                <div className='text-neutral-300 text-lg '>$ {product.price}</div>
                <div className='flex flex-col gap-1 text-base'>
                    <div >Overall Rating - {product.rating && product.rating.rate}</div>
                    <div>{product.rating && product.rating.count} People have purchased this Product</div>
                </div>
                <div className='flex gap-2 flex-wrap'>
                    <button className='bg-slate-700 p-2 rounded-md text-yellow-500 hover:text-yellow-400  px-2 text-sm'><span className='hover:animate-pulse' onClick={() => addToCart(product)}>Add to Cart</span></button>
                    <button className='bg-slate-700 p-2 rounded-md text-yellow-500 hover:text-yellow-400  px-2 text-sm'> <span className='hover:animate-pulse' onClick={() => addToWishlsit(product)}>Add to wishlist</span></button>
                </div>
            </div>
        </div>
    )
}

export default Product