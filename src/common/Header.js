import React, { useContext, useEffect, useState } from 'react'
import bag from '../Images/bag.jpg'
import cart from '../Images/logo.png'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../App';
import profilepic from '../Images/profile.png'

const Header = () => {
    const { globalData, setGlobalData } = useContext(GlobalContext)
    return (
        <div className='relative bg-gradient-to-br from-black via-gray-900 to-black  flex justify-between items-center sm:sticky top-0 w-full p-1 px-2 sm:shadow-2xl text-xs text-white'>
            <Link to='/'>
                <img className='w-8 rounded-full' src={bag} />
            </Link>
            <div className='hidden py-2 sm:static sm:bg-none bg-gradient-to-tr from-black via-gray-900 to-black text-xs flex flex-wrap absolute top-10 gap-1 justify-center text-yellow-500 w-full left-0'>

                <Link className=' cursor-pointer  hover:scale-110 hover:text-yellow-400 rounded-sm p-2 bg-gray-800' to='/'>All</Link>
                <Link className=' cursor-pointer  hover:scale-110 hover:text-yellow-400 rounded-sm p-2 bg-gray-800' to='category/jewelery'>Jewellery</Link>
                <Link className=' cursor-pointer  hover:scale-110 hover:text-yellow-400 rounded-sm p-2 bg-gray-800' to="category/men's clothing">Men's Clothing</Link>
                <Link className='cursor-pointer hover:scale-110  hover:text-yellow-400 rounded-sm p-2 bg-gray-800' to="category/women's clothing">Women's Clothing</Link>
                <Link className=' cursor-pointer  hover:scale-110 hover:text-yellow-400 rounded-sm p-2 bg-gray-800' to="category/electronics">Electronics</Link>
            </div>
            <div className='flex gap-2 items-center'>
                <Link to='/cart'><img className='w-8' src={cart} /></Link>
                {/* {!globalData && } */}
                <Link className='px-3 bg-gray-800 p-2 rounded-sm text-cyan-500' to='/login'>Login</Link>
                <Link to = '/profile'><img src = {profilepic} alt = 'profilepic' /></Link>
            </div>
        </div>
    )
}

export default Header