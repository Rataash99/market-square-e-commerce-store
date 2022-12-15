import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from './App';
import { Link } from 'react-router-dom'
import about1 from './Images/about1.png';

const Login = () => {
    const [check, setCheck] = useState(false)
    const [letters, setLetters] = useState(0);
    const { globalData, setGlobalData } = useContext(GlobalContext);
    const statusCheck = (e) => {
        e.preventDefault();
    }
    const typeCheck = (event) => {
        setLetters(event.target.value.length);
    }
    useEffect(() => {
        letters > 0 ? setCheck(true) : setCheck(false);
    }, [letters])
    return (
        <div className='h-[86vh] '>
            <div className='flex max-h-[80vh] flex-col bg-gray-900 mt-12 text-xs justify-center items-center rounded-xl max-w-sm sm:text-sm md:text-base md:justify-start sm:mx-auto md:mx-[3rem] lg:mx-auto p-4 gap-3 mx-3'>
                <h1 className={!check ? 'text-4xl font-mono animate-bounce text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400' : 'text-4xl font-mono animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400'}>Sign in</h1>
                <form className='flex gap-3 flex-col w-[90%]' onSubmit = {statusCheck}>
                    <label htmlFor='email' className='space-y-1'> Your Email<br></br>
                        <input className='bg-slate-700 p-2 rounded-sm w-full' id='email' name='email' type='email' placeholder='Enter your Email' onChange={typeCheck}></input>
                    </label>
                    <label className='space-y-1' htmlFor='password'>Your Password<br></br>
                        <input className='bg-slate-700 p-2 rounded-sm w-full' id='password' name='password' type='password' placeholder='Enter your Password'></input>
                    </label>
                    <label>
                        <input className='bg-gray-800 p-2 rounded-sm w-full text-yellow-500 cursor-pointer hover:scale-110 duration-500 ease-out hover:text-yellow-400' type='submit'></input>
                    </label>
                </form>
                <div className='relative gap-2 flex flex-col w-[90%] items-center'>
                    <div className='text-[0.8rem] animate-pulse flex items-center gap-1 justify-center text-center'><div className='h-[0.1rem] bg-white w-11'></div>New to Market Square<div className='h-[0.1rem] bg-white w-10'></div></div>
                    <Link className='bg-gray-800 p-2 rounded-sm text-center text-sky-500 hover:text-sky-400 w-full hover:scale-110 duration-500 ease-out' to='/signup'>Create your account</Link>
                    <img src={about1} className='w-[50vw] -top-[16rem] -right-[23rem] max-w-[20rem] animate-levitate lg:hidden hidden md:block absolute lg:max-w-[40rem]' />
                </div>
                <img src={about1} className='w-[50vw] top-[20rem] max-w-[16rem] md:hidden lg:block animate-levitate' />
            </div>
        </div>
    )
}
export default Login;