import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import bimg from './Images/signin.png'
import rightarrow from './Images/right.png'
const Signup = () => {
    const [check, setCheck] = useState(false)
    const [letters, setLetters] = useState(0);
    const submitStatus = () => {
        console.log('submitted');
    }
    const typeCheck = (event) => {
        setLetters(event.target.value.length);
        console.log('letters', letters);
        console.log('check', check);
    }
    useEffect(() => {
        letters > 0 ? setCheck(true) : setCheck(false);
    }, [letters])
    return (
        <div className='flex flex-col sm:flex-row rounded-xl justify-center items-center bg-gray-900 m-5 lg:w-[60rem] lg:mx-auto lg:mt-10'>
            <div className='flex flex-col text-xs justify-center items-center rounded-xl max-w-sm sm:text-sm sm:mx-auto  p-4 gap-6 lg:w-[80vw]'>
                <h2 className={!check ? ' text-2xl sm:text-3xl md:text-4xl font-mono animate-bounce text-center':'text-2xl sm:text-3xl md:text-4xl font-mono text-center animate-pulse'}>Create Account</h2>
                <form className='flex gap-3 flex-col w-[60vw] sm:w-[35vw] lg:w-[90%]' action={submitStatus}>
                    <label className='space-y-1' for='name'>Your Name<br></br>
                        <input className='bg-slate-700 p-2 rounded-sm w-full' id='name' type='text' placeholder='First and Last' onChange={typeCheck}></input>
                    </label>
                    <label className='space-y-1' for='number'>Moblie Number<br></br>
                        <input className='bg-slate-700 p-2 rounded-sm w-full' id='number' name='number' type='number' placeholder='Mobile Number'></input>
                    </label>
                    <label className='space-y-1' for='email'>Email(optional)<br></br>
                        <input className='bg-slate-700 p-2 rounded-sm w-full' id='email' name='email' type='email' placeholder='E-mail Address'></input>
                    </label>
                    <label className='space-y-1' for='password'>Password(optional)<br></br>
                        <input className='bg-slate-700 p-2 rounded-sm w-full' id='password' name='password' type='password' placeholder='At least 6 characters'></input>
                    </label>
                    <label className='mt-10' for='submit-btn'>
                        <input className='bg-gray-800 p-2 rounded-sm w-full text-yellow-500 hover:text-yellow-400 hover:scale-105 cursor-pointer' id='submit-btn' type='submit'></input>
                    </label>
                </form>
                <p className='text-center'>Already have an account? <Link to='/login' className='text-sky-500 hover:text-sky-400 cursor-pointer'>Sign in</Link></p>
            </div>
            <img src={bimg} className='w-6/12' />
        </div>
    )
}

export default Signup;