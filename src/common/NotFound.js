import React, { useContext, useEffect, useState } from 'react'
import bug from '../Images/bug.png'
import {Link} from 'react-router-dom';
import { GlobalContext } from '../App';

const NotFound = () => {
  const {globalData, setGlobalData} = useContext(GlobalContext);
  const check = () => {
    !globalData.notfound ? setGlobalData({
      ...globalData,
      notfound : true
    })
    :
    setGlobalData({
      ...globalData,
      notfound : false
    })
  }
  useEffect(() => {
    setGlobalData({
      ...globalData,
      notfound : true
    })
  },[])
  
  return (
    <div className='w-full h-[60vh] flex-col gap-1 sm:gap-3 md:gap-4 lg:gap-6 flex justify-center items-center'>
      <section>
        <h2 className='flex items-center gap-2'><img className='sm:w-16 md:w-20 lg:w-24 inline animate-wiggle w-12 ' src={bug}/> <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-sky-800 opacity-80 font-medium text-center self-center'>404</span></h2>
      </section>
      <section className='flex flex-col gap-2 md:gap-3 lg:gap-5 p-2 max-w-xs sm:max-w-sm lg:max-w-lg'>
        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-gray-500 font-bold text-center'>Page not found</h1>
        <p className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center text-gray-200 font-thin tracking-wider'>We are sorry the page you  requested could not be found. Please try to visit another url or go back to the home page.</p>
        <Link to = '/' onClick = {check} className='text-center bg-slate-800 p-1 sm:p-2 text-sky-500 tracking-widest rounded-sm hover:scale-110 duration-300 ease-in-out text-xs sm:text-sm md:text-base lg:text-lg hover:text-sky-400 hover:shadow-md hover:shadow-sky-800'>Go to homepage</Link>
      </section>
    </div>
  )
}

export default NotFound