import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import heart from './Images/heart.png';
import redHeart from './Images/redheart.png'
import { GlobalContext } from './App';
import happy from './Images/happy.png'

const AllProducts = () => {
    const { globalData, setGlobalData } = useContext(GlobalContext);
    const [products, setProducts] = useState([]);
    const [wish, setWish] = useState([])

    const apiCall = async () => {
        let response = await fetch(`https://fakestoreapi.com/products`);
        let result = await response.json();
        setProducts(result);
    }
    useEffect(() => {
        apiCall()
    }, [])

    const removeFromWishlist = (prod) => {
        let tempArr = globalData.wishlist.filter((item) => {
            return item.id !== prod.id
        })
        let tempArr2 = wish.filter((item) => {
            return item != prod.id
        })
        setGlobalData({
            ...globalData,
            wishlist: [...tempArr]
        })
        setWish(tempArr2)
    }

    const addToWishlist = (prod) => {
        let isPresent = false;
        globalData.wishlist.map((item) => {
            if (item.id == prod.id) {
                isPresent = true;
            }
        })
        if (isPresent === false) {
            setGlobalData({
                ...globalData,
                wishlist: [...globalData.wishlist, prod],
            })
            setWish([...wish,prod.id])
        }
        else if (isPresent === true) {
            removeFromWishlist(prod)
        }
    }
    // useEffect(() => {
    //     console.log('wishlist', globalData.wishlist)
    //     console.log('wish', wish);
    // }, [globalData.wishlist])

    return (
        <div className='container mx-auto p-5 duration-500 tracking-widest transition-all '>
            <h1 className='text-xl sm:text-2xl  uppercase font-bold text-center sm:text-left p-3 text-sky-500 mt-8 italic '>Happy Shopping <img className='inline w-10 sm:w-11 lg:w-16 animate-wiggle' src={happy} /></h1>
            <hr className='opacity-40 my-10 mx-auto ' ></hr>

            {!products.length > 0 ? <div className='w-[100%] h-[73vh] flex justify-center align-middle'>
                <img className=' mx-auto w-[30rem] sm:w-[40rem] md:w-[45rem] lg:w-[50rem] my-auto' src='https://cdn.dribbble.com/users/32512/screenshots/5276094/smile_loader_by_gleb.gif' />
            </div>
                :
                <div className='w-full h-[72.8vh] p-7  grid grid-cols-2 gap-6 text-xs overflow-scroll sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:text-base  hover:border-y hover:border-cyan-300 hover:border-opacity-25'>
                    {
                        products && products.map((item, index) => (
                            <Link to={`/products/${item.id}`} key={index}>
                                <div className="card flex flex-col justify-between rounded-lg p-3 shadow-md shadow-cyan-900 hover:shadow-l bg-gradient-to-bl from-black via-slate-900 to-black duration-500 hover:scale-105 ease-out h-[17rem] sm:h-[21rem] md:h-[26rem] xl:h-[27rem] 2xl:h-[32rem]  hover:shadow-lg hover:shadow-cyan-900">
                                    <img className='shadow-lg w-[7rem] self-center sm:w-[12rem] lg:w-[15rem] text-center rounded-lg opacity-70 max-h-96' src={item.image} />
                                    <div className='flex gap-4 flex-col overflow-scroll'>
                                        <p className='text-[0.6rem] text-xs sm:text-[0.7rem] lg:text-[0.8rem] tracking-normal lg:tracking-wide text-sky-400 truncate' >{item.title}</p>
                                        <div className='flex justify-between'>
                                            <h3 className='font-medium text-slate-400'>$ {item.price}</h3>
                                            <Link>
                                                <img className='hover:scale-150 mr-1 md:w-6 duration-300 ease-in-out hover:animate-pulse w-4  hover: cursor-pointer hover:p-[0.1rem] mb-1 sm:w-5 my-auto' src={wish.includes(item.id) ? redHeart : heart} alt='wishlist' onClick={() => addToWishlist(item)} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>}
        </div>
    )
}

export default AllProducts