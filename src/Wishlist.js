import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from './App'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router'
import orders from './Images/orders.png'

const Wishlist = () => {
  const { globalData, setGlobalData } = useContext(GlobalContext);
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  const checktick = { check, setCheck };

  const removeFromWishlist = (prod) => {
    let tempArr = globalData.wishlist.filter((item) => {
      return item.id !== prod.id
    })
    let tempArr2 = globalData.heartStatus.filter((item) => {
      return item != prod.id
  })

  setGlobalData({
      ...globalData,
      wishlist: [...tempArr],
      heartStatus : [...tempArr2]
  })
  }

  // useEffect(() => {
  //   console.log(globalData.wishlist)
  // }, [globalData.Wishlist])

  return (
    globalData.wishlist.length > 0 ?
    <div className='container mx-auto sm:h-[90vh] sm:max-w-xl md:max-w-3xl lg:max-w-5xl transition-all duration-200 ease-in max-w-6xl mt-14 p-2 space-y-6'>
      <h2 className='text-lg text-sky-500 text-center sm:text-xl md:text-2xl tracking-wider font-semibold'><span className=' p-2 border-double border-b-4 rounded-lg border-sky-500 px-4'>Wishlist</span></h2>
      <hr className='border border-sky-800 opacity-60'></hr>
      <div className='flex gap-2 flex-col sm:w-full transition-all duration-300 ease-out  overflow-scroll sm:max-h-[75vh] m-1 pb-2 sm:m-0 max-h-[60vh]'>
        {
          globalData.wishlist.map((item, index) => (
            <div key={index} className='bg-gray-900 rounded-md p-3 align-middle space-y-4 hover:shadow-md hover:shadow-sky-900' >
              <div>
                <h1 className='font-semibold text-xs border-b inline rounded-lg pb-2 border-sky-400 text-neutral-300 md:text-sm lg:text-base'>{item.title}</h1>
              </div>
              <div className='relative space-y-2 text-gray-300 flex justify-between'>
                <img className='w-24 rounded-md' src={item.image} />
                <p className='text-xs md:text-sm px-2 truncate max-w-[8rem] self-center left-24 text-slate-300 absolute sm:max-w-xs md:max-w-lg lg:max-w-2xl  sm:left-28 text-justify'>{item.description}</p>
                <p className='text-center self-center text-xs sm:text-sm lg:text-base '>$ {item.price}</p>
              </div>
              <div className='flex gap-2'>
                <Link to={`/products/${item.id}`} className='bg-gradient-to-br from-black via-slate-900 to-black text-sky-500 hover:scale-110 duration-100 ease-in px-4 p-2 rounded-md hover:shadow-sm hover:shadow-sky-900 text-center'>Buy</Link>
                <button className='bg-gradient-to-br from-black via-slate-900 to-black text-red-700 hover:scale-110 duration-100 ease-in p-2 px-4 rounded-md hover:shadow-sm hover:shadow-sky-900 text-center' onClick={() => removeFromWishlist(item)}>Remove</button>
              </div>
            </div>
          ))
        }
      </div>
      <hr className='border border-sky-800 opacity-60'></hr>
    </div>
    :
    <div className='h-[90vh] flex items-start justify-center mt-14 p-5 transition-all duration-500 ease-in'>
    <div className='rounded-md bg-slate-900 flex justify-center items-center flex-col h-[30vh] md:h-[40vh] lg:h-[50vh] gap-4 w-full max-w-md md:max-w-lg lg:max-w-4xl'>
        <img className='w-16 sm:w-20 md:w-24' src = {orders} />
        <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500 text-sm text-center sm:text-base lg:text-lg xl:text-xl'>Your wishlist is empty.</h2>
        <Link to = '/allproducts' className='p-2 bg-slate-800 text-sky-500 rounded-md text-xs sm:text-sm  hover:scale-110 hover:shadow-md hover:shadow-sky-700 duration-200 ease-out'><span className='animate-pulse hover:animate-none'>Go shopping</span></Link>
    </div>
</div>
  )
}

export default Wishlist