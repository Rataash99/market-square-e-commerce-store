import React, { useContext, useEffect, useState } from 'react'
import bag from '../Images/bag.png'
import cart from '../Images/cart.png'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../App';
import profilepic from '../Images/profile.png'
import ham from '../Images/ham.png'
import close from '../Images/close.png'
import login from '../Images/login.png'
import logout from '../Images/logout.png'
import wishlist from '..//Images/wishlist.png'

const Header = () => {
    const { globalData, setGlobalData } = useContext(GlobalContext)
    const [status, setStatus] = useState(false);
    const check = () => {
        !status ? setStatus(true) : setStatus(false)
    }

    const handleLogout = () => {
        setGlobalData({
            ...globalData,
            loginStatus: false,
        })
        status && setStatus(false)
    }
    return (

        <div className='relative mx-auto flex justify-between items-center sm:sticky top-0 w-full p-1 px-2 z-50 text-xs text-white duration-1000 ease-out transition-all bg-gradient-to-br from-black via-gray-900 to-black shadow-md shadow-sky-900 '>
            <Link to='/'>
                <img className='w-9 my-auto sm:w-12' src={bag} title='Market Square' />
            </Link>
            <div className='hidden py-2 sm:static sm:bg-none text-xs sm:flex flex-wrap absolute top-10 gap-2 md:gap-5 justify-center text-cyan-500 w-full left-0 lg:text-sm duration-700 ease-in-out'>

                <Link className=' cursor-pointer hover:scale-110 duration-200  font-semibold tracking-widest focus:animate-bounce focus:underline focus:underline-offset-8 ease-out text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400 hover:text-sky-500 px-1 lg:px-2' to='/allproducts'>All</Link>
                <Link className=' cursor-pointer  hover:scale-110 duration-200  font-semibold tracking-widest  focus:animate-bounce focus:underline focus:underline-offset-8 ease-out text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400 hover:text-sky-500 px-1 lg:px-2' to='category/jewelery'>Jewellery</Link>
                <Link className=' cursor-pointer  hover:scale-110 duration-200  font-semibold tracking-widest  focus:animate-bounce focus:underline focus:underline-offset-8 ease-out text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400 hover:text-sky-500 px-1 lg:px-2' to="category/men's clothing">Men's Clothing</Link>
                <Link className='cursor-pointer hover:scale-110 duration-200  font-semibold tracking-widest  focus:animate-bounce focus:underline focus:underline-offset-8 ease-out text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400 hover:text-sky-500 px-1 lg:px-2' to="category/women's clothing">Women's Clothing</Link>
                <Link className=' cursor-pointer  hover:scale-110 duration-200  font-semibold tracking-widest  focus:animate-bounce focus:underline focus:underline-offset-8 ease-out text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400 hover:text-sky-500 px-1 lg:px-2' to="category/electronics">Electronics</Link>
            </div>
            <div className='sm:flex gap-2 items-center hidden'>


                {globalData.loginStatus &&
                    <>
                        <Link to='/cart'><img className='w-12 hover:scale-125 duration-500 ease-out' title='cart' src={cart} /></Link>
                        <Link to='/wishlist'><img className='w-10 hover:scale-125 duration-500 ease-out' src={wishlist} alt='profilepic' title='wishlist' onClick={check} /></Link>
                        <Link to='/profile'><img className='w-10 hover:scale-125 duration-500 ease-out' src={profilepic} alt='profilepic' title='profile' /></Link>
                    </>
                }
                {!globalData.loginStatus && <Link title='login' to='/login'><img className='w-12 hover:scale-125 duration-500 ease-out' src={login} /></Link>}
                {globalData.loginStatus && <Link to='/' title='logout'><img className='w-12 hover:scale-125 duration-500 ease-out' src={logout} onClick={() => handleLogout()} /></Link>}
            </div>

            <div className='sm:hidden'>
                <img className={status ? 'hidden' : 'w-6  cursor-pointer hover:scale-110 duration-500 ease-in-out'} src={ham} onClick={check} />
                {
                    status && <div className='w-full absolute z-50 right-0 backdrop-blur-lg hover:fixed h-[100vh] top-0 p-5'>
                        <section className='upper-nav gap-2 items-center flex py-5 justify-between '>
                            <div className='flex items-center gap-5'>
                                {!globalData.loginStatus && <Link title='login' to='/login'><img className='w-12 hover:scale-125 duration-500 ease-out' src={login} onClick={check} /></Link>}
                                {globalData.loginStatus && <Link to='/' title='logout'><img className='w-12 hover:scale-125 duration-500 ease-out' src={logout} onClick={() => handleLogout()} /></Link>}

                                {globalData.loginStatus &&
                                    <Link to='/cart'><img className='w-12 hover:scale-125 duration-500 ease-out' title='cart' src={cart} onClick={check} /></Link>}
                                {globalData.loginStatus &&
                                    <>
                                        <Link to='/profile'><img className='w-10 hover:scale-125 duration-500 ease-out' src={profilepic} alt='profilepic' title='profile' onClick={check} /></Link>
                                        <Link to='/wishlist'><img className='w-10 hover:scale-125 duration-500 ease-out' src={wishlist} alt='profilepic' title='wishlist' onClick={check} /></Link>
                                    </>}
                            </div>
                            <img className='w-[2.8rem] hover:scale-110 duration-500 ease-out cursor-pointer animate-wiggle' src={close} onClick={check} />
                        </section>
                        <hr className='mb-8 mt-4 opacity-20'></hr>
                        <section className='lower-nav flex flex-col gap-12 font-sans '>
                            <Link className=' cursor-pointer  hover:scale-105 text-md hover:italic  hover:text-sky-500 hover:animate-pulse focus:underline duration-500 uppercase font-bold tracking-widest ease-in-out focus:underline-offset-8' to='/allproducts' onClick={check}>All</Link>
                            <Link className=' cursor-pointer  hover:scale-105 text-md hover:italic  hover:text-sky-500 hover:animate-pulse focus:underline duration-500 uppercase font-bold tracking-widest ease-in-out focus:underline-offset-8' to='category/jewelery' onClick={check}>Jewellery</Link>
                            <Link className=' cursor-pointer  hover:scale-105 text-md hover:italic  hover:text-sky-500 hover:animate-pulse focus:underline duration-500 uppercase font-bold tracking-widest ease-in-out focus:underline-offset-8' to="category/men's clothing" onClick={check}>Men's Clothing</Link>
                            <Link className='cursor-pointer hover:scale-105 text-md hover:italic  hover:text-sky-500 hover:animate-pulse focus:underline duration-500 uppercase font-bold tracking-widest ease-in-out focus:underline-offset-8' to="category/women's clothing" onClick={check}>Women's Clothing</Link>
                            <Link className=' cursor-pointer  hover:scale-105 text-md hover:italic  hover:text-sky-500 hover:animate-pulse focus:underline duration-500 uppercase font-bold tracking-widest ease-in-out focus:underline-offset-8' to="category/electronics" onClick={check}>Electronics</Link>
                        </section>
                    </div>
                }
            </div>
            
        </div>
    )
}

export default Header