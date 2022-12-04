import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from './App'

const Product = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const localContext = useContext(GlobalContext);
    const [status, setStatus] = useState({
        wishlist: false,
        cart: false
    })

    const apiCall = async () => {
        let response = await fetch(`https://fakestoreapi.com/products/${id}`);
        let result = await response.json();
        setProduct(result);
    }
    const addToCart = (prod) => {
        let tempArr = [];
        localContext.globalData.cartArr.length > 0 ?
            tempArr = localContext.globalData.cartArr.filter((item) => {
                return item.id !== prod.id
            })
                (
                    localContext.setGlobalData({
                        ...localContext.globalData,
                        cartArr: [...localContext.globalData.cartArr, tempArr]
                    })
                )
            :
            localContext.setGlobalData({
                ...localContext.globalData,
                cartArr: [...localContext.globalData.cartArr, prod]
            })
    }

    const addToWishlsit = (prod) => {
        localContext.setGlobalData({
            ...localContext.globalData,
            wishlist: [...localContext.globalData.wishlist, prod]
        })
    }
    useEffect(() => {
        console.log(localContext.globalData.cartArr)
    }, [localContext])
    useEffect(() => {
        apiCall();
    }, [])

    return (
        <div className="mt-5 card grid grid-row-2 p-4 sm:p-3 lg:p-6 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:space-x-7 xl:space-x-0 transition-all duration-700 ease-in-out" >
            <div className='w-full  flex justify-center items-center lg:block'>
                <img className='shadow-lg rounded-lg w-72 md:w-96 lg:flex lg:justify-center xl:items-center opacity-80' src={product.image} />
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
                <div className='flex gap-3 flex-wrap'>
                    <button className='text-xs bg-slate-800 p-2 text-cyan-500 hover:text-cyan-400 rounded-lg sm:text-sm lg:text-base'><span className='hover:animate-pulse px-3 md:px-5' onClick={() => addToCart(product)}>Add to Cart</span></button>
                    <button className='text-xs bg-slate-800 p-2 text-cyan-500 hover:text-cyan-400 rounded-md px-3 md:px-5 sm:text-sm lg:text-base'> <span className='hover:animate-pulse' onClick={() => addToWishlsit(product)}>Add to wishlist</span></button>
                </div>
            </div>
        </div>
    )
}

export default Product