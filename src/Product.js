import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalContext } from './App'

const Product = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const localContext = useContext(GlobalContext);
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
                setCartStatus(true);
            }
        })

        !isPresent && localContext.setGlobalData({
            ...localContext.globalData,
            cart: [...localContext.globalData.cart, prod]
        })
        setCartStatus(true)
    }

    const addToWishlsit = (prod) => {
        let isPresent = false;
        localContext.globalData.wishlist.map((item) => {
            if (item.id == prod.id) {
                isPresent = true;
                setWishlistStatus(true);
            }
        })
        !isPresent && localContext.setGlobalData({
            ...localContext.globalData,
            wishlist: [...localContext.globalData.wishlist, prod],
            heartStatus : [...localContext.globalData.heartStatus,prod.id]

        })
        setWishlistStatus(true)
    }

    // useEffect(() => {
    //     console.log('wishlist', localContext.globalData.wishlist)
    // }, [localContext])

    useEffect(() => {
        apiCall();
    }, [])

    return (
        <div className='h-[88vh] overflow-scroll'>
            {Object.keys(product).length == 0 ? <div className='w-[100%] h-[73vh] flex justify-center align-middle'>
                <img className=' mx-auto w-[30rem] sm:w-[40rem] md:w-[45rem] lg:w-[50rem] my-auto' src='https://cdn.dribbble.com/users/32512/screenshots/5276094/smile_loader_by_gleb.gif' />
            </div>
            :
                <div className="m-3 card grid grid-row-2 p-2 sm:p-3 lg:p-6 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:space-x-7 xl:space-x-0 transition-all duration-700 ease-in-out max-h-[60vh]" >
                <div className='w-full flex justify-center items-center lg:block'>
                    <img className='shadow-lg rounded-lg w-72 md:w-96 lg:flex lg:justify-center xl:items-center opacity-80' src={product.image} />
                </div>
                <div className='flex justify-between flex-col gap-3 bg-slate-900 p-5 rounded-md md:max-h-[50vh] lg:max-h-[67vh] xl:max-h-[45vh]'>
                    <div className='flex gap-4 flex-col'>
                        <h2 className='text-xl md:text-2xl lg:text-3xl text-sky-600'>{product.title}</h2>
                        <h4 className='text-sm text-slate-400'>{product.description}</h4>
                    </div>
                    <div className='text-lg text-slate-300'>$ {product.price}</div>
                    <div className='flex flex-col gap-1 text-base text-slate-400'>
                        <div >Overall Rating - {product.rating && product.rating.rate}</div>
                        <div>{product.rating && product.rating.count} People have purchased this Product</div>
                    </div>
                    <div className='flex gap-3 flex-wrap'>
                        {!cartStatus ?
                            <button className='hover:scale-110 duration-200 ease-out text-xs bg-slate-800 p-2 text-sky-500 hover:text-sky-400 rounded-lg sm:text-sm lg:text-base'><span className=' px-3 md:px-5 ' onClick={() => addToCart(product)}>Add to Cart</span></button>
                            :
                            <Link to='/cart' className='hover:scale-110 duration-200 ease-out text-xs bg-slate-800 p-2 text-sky-500 hover:text-sky-400 rounded-lg sm:text-sm lg:text-base'><span className='px-3 md:px-5 ' >Move to Cart</span></Link>
                        }
                        {!wishlistStatus ?
                            <button className='hover:scale-110 duration-200 ease-out text-xs bg-slate-800 p-2 text-sky-500 hover:text-sky-400 rounded-md px-3 md:px-5 sm:text-sm lg:text-base'> <span className='' onClick={() => addToWishlsit(product)}>Add to wishlist</span></button>
                            :
                            <Link to='/wishlist' className='hover:scale-110 duration-200 ease-out text-xs bg-slate-800 p-2 text-sky-500 hover:text-sky-400 rounded-md px-3 md:px-5 sm:text-sm lg:text-base'> <span className=' '>Move to wishlist</span></Link>
                        }
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Product