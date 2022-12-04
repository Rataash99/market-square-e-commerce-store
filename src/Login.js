import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from './App';
import { Link } from 'react-router-dom'
import bimg from './Images/signin.png';

const Login = () => {
    const [check, setCheck] = useState(false)
    const [letters, setLetters] = useState(0);
    const { globalData, setGlobalData } = useContext(GlobalContext);
    const statusCheck = () => {

    }
    const typeCheck = (event) => {
        setLetters(event.target.value.length);
        console.log('letters',letters);
        console.log('check',check);
    }
    useEffect(() => {
        letters > 0 ? setCheck(true): setCheck(false);
    },[letters])
    return (

        <div className='flex flex-col bg-gray-900 mt-12 text-xs justify-center items-center rounded-xl max-w-sm sm:text-sm md:text-base md:justify-start mx-auto md:mx-[3rem] lg:mx-auto p-4 gap-10'>
            <h1 className = {!check ? 'text-4xl font-mono animate-bounce':'text-4xl font-mono animate-pulse'}>Sign in</h1>
            <form className='flex gap-3 flex-col w-[90%]' action={statusCheck}>
                <label for='email' className='space-y-1'> Your Email<br></br>
                    <input className='bg-slate-700 p-2 rounded-sm w-full' id='email' name='email' type='email' placeholder='Enter your Email' onChange={typeCheck}></input>
                </label>
                <label className='space-y-1' for='password'>Your Password<br></br>
                    <input className='bg-slate-700 p-2 rounded-sm w-full' id='password' name='password' type='password' placeholder='Enter your Password'></input>
                </label>
                <label>
                    <input className='bg-gray-800 p-2 rounded-sm w-full text-yellow-500 cursor-pointer hover:scale-110 duration-500 ease-out hover:text-yellow-400' type='submit'></input>
                </label>
            </form>
            <div className='relative gap-2 flex flex-col w-[90%] items-center'>
                <div className='text-[0.8rem] animate-pulse flex items-center gap-1 justify-center text-center'><div className='h-[0.1rem] bg-white w-11'></div>New to Shopperz<div className='h-[0.1rem] bg-white w-10'></div></div>
                <Link className='bg-gray-800 p-2 rounded-sm text-center text-cyan-500 hover:text-cyan-400 w-full hover:scale-110 duration-500 ease-out' to='/signup'>Create your Shopperz account</Link>
                <img src = {bimg} className= 'w-[50vw] -top-[16rem] -right-[23rem] max-w-[20rem] lg:hidden hidden md:block absolute lg:max-w-[40rem]'/>
            </div>
            <img src = {bimg} className= 'w-[50vw] top-[20rem] max-w-[20rem] md:hidden lg:block'/>
        </div>
    )
}
export default Login;