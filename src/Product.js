import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalContext } from './App'

const Product = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const localContext = useContext(GlobalContext);
    const [isPresent, setIsPresent] = useState(false);
    const [cartStatus, setCartStatus] = useState(false)
    const [wishlistStatus, setWishlistStatus] = useState(false)
    const apiCall = async () => {
        let response = await fetch(`https://fakestoreapi.com/products/${id}`);
        let result = await response.json();
        setProduct(result);
    }

    const addToCart = (prod) => {
        let isPresent = false;
        localContext.globalData.cart.map((item) => {
            if (item.id == prod.id) {
                isPresent = true;
                setCartStatus(true)
            }
        })
        !isPresent && localContext.setGlobalData({
            ...localContext.globalData,
            cart: [...localContext.globalData.cart, prod]
        })
    }

    const addToWishlsit = (prod) => {
        let isPresent = false;
        localContext.globalData.wishlist.map((item) => {
            if(item.id == prod.id){
                isPresent = true;
                setWishlistStatus(true);
            }
        })
        !isPresent && localContext.setGlobalData({
            ...localContext.globalData,
            wishlist: [...localContext.globalData.wishlist, prod]
        })
        setWishlistStatus(true)
    }

    useEffect(() => {
        console.log('cart', localContext.globalData.cart)
        console.log('wishlist', localContext.globalData.wishlist)
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
                    {!cartStatus ?
                        <button className='text-xs bg-slate-800 p-2 text-cyan-500 hover:text-cyan-400 rounded-lg sm:text-sm lg:text-base'><span className='hover:animate-pulse px-3 md:px-5' onClick={() => addToCart(product)}>Add to Cart</span></button>
                        :
                        <Link to = '/cart' className='text-xs bg-slate-800 p-2 text-cyan-500 hover:text-cyan-400 rounded-lg sm:text-sm lg:text-base'><span className='hover:animate-pulse px-3 md:px-5' >Move to Cart</span></Link>
                    }
                    { !wishlistStatus ? 
                        <button className='text-xs bg-slate-800 p-2 text-cyan-500 hover:text-cyan-400 rounded-md px-3 md:px-5 sm:text-sm lg:text-base'> <span className='hover:animate-pulse' onClick={() => addToWishlsit(product)}>Add to wishlist</span></button>
                        :
                        <Link to = '/wishlist' className='text-xs bg-slate-800 p-2 text-cyan-500 hover:text-cyan-400 rounded-md px-3 md:px-5 sm:text-sm lg:text-base'> <span className='hover:animate-pulse'>Move to wishlist</span></Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Product