import React from 'react'
import { Link } from 'react-router-dom'
import linkedin from '../Images/linkedin.png'
import github from '../Images/github.png'
import twitter from '../Images/twitter.png'
import showcase from '../Images/showcase.png'
import ScrollToTop from 'react-scroll-to-top';

const Footer = () => {

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className='absolute w-full px-10 h-auto pb-5 md:pb-0 md:h-[26vh] bg-black'>
      <hr className='border border-slate-600 opacity-40 mt-12 mb-6 w-[95%] mx-auto'></hr>
      <div className='container mx-auto flex flex-col justify-between gap-6 items-center text-center sm:flex-row sm:justify-between'>
        <h3 className='text-slate-400 text-sm md:text-base'>Have any questions? Contact us</h3>
        <div className='flex gap-3 md:gap-4 lg:gap-5 items-center justify-center'>
          <a href='https://www.linkedin.com/in/rohit-s-03a577137/' title='linkedin' target='_blank'><div><img className='w-6 md:w-7 lg:w-8 rounded-full bg-gray-600 p-1 hover:scale-125 hover:bg-gray-500 cursor-pointer duration-200 ease-in' src={linkedin} /></div></a>
          <a href='https://www.showwcase.com/rataash99' target='_blank' title='showwcase' ><div><img className='w-6 md:w-7 lg:w-8 rounded-full bg-gray-600 p-1 hover:scale-125 hover:bg-gray-500 cursor-pointer duration-200 ease-in' src={showcase} /></div></a>
          <a href='https://github.com/Rataash99' target='_blank' title='github' ><div><img className='w-6 md:w-7 lg:w-8 rounded-full bg-gray-600 p-1 hover:scale-125 hover:bg-gray-500 cursor-pointer duration-200 ease-in' src={github} /></div></a>
          <a href='https://twitter.com/RohitSingh11299' target='_blank' title='twitter' ><div><img className='w-6 md:w-7 lg:w-8 rounded-full bg-gray-600 p-1 hover:scale-125 hover:bg-gray-500 cursor-pointer duration-200 ease-in' src={twitter} /></div></a>
        </div>
      </div>
      <hr className='border border-slate-600 opacity-40 my-6 w-[95%] mx-auto'></hr>
      <div className='container mx-auto flex flex-col items-center justify-center gap-3 md:flex-row md:justify-between lg:gap-0'>
        <div className=' text-slate-400 flex flex-col justify-center items-center gap-3 md:flex-row md:gap-4 lg:gap-5'>
          <p className='text-xs cursor-pointer lg:text-sm hover:text-slate-300 duration-200 ease-in-out'>Privacy Policy</p>
          <p className='text-xs cursor-pointer lg:text-sm hover:text-slate-300 duration-200 ease-in-out'>User Agreement</p>
          <p className='text-xs cursor-pointer lg:text-sm hover:text-slate-300 duration-200 ease-in-out'>Terms of Sales</p>
          <p className='md:hidden text-xs text-slate-500 text-center'>Copyright Ⓒ 2022 Market Square. All rights reserved.</p>
        </div>
        {/* <button onClick={scrollUp} className='text-base sm:text-lg md:text-xl lg:text-3xl align-middle text-sky-600 bg-slate-900 px-[1.2rem] py-2 font-extrabold rounded-full hover:shadow-sm hover:scale-110 duration-200 ease-in hover:bg-sky-700 hover:text-black'><span className='align-middle'>^</span></button> */}
      </div>
      <p className='hidden md:block mt-5 text-xs lg:text-sm text-slate-500 text-center '>Copyright Ⓒ 2022 Market Square. All rights reserved.</p>
    </div>
  )
}

export default Footer