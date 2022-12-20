import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from './App';
import { Link, useNavigate } from 'react-router-dom'
import about1 from './Images/about1.png';
import eyeslash from './Images/eyeslash.png'
import eye from './Images/eye.png';

const Login = () => {

    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password : '',
    })
    const [uName, setUName] = useState('')
    const [check, setCheck] = useState(false)
    const [letters, setLetters] = useState(0);
    const { globalData, setGlobalData } = useContext(GlobalContext);
    const [visible2, setVisible2] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setGlobalData({
            ...globalData,
            email : loginDetails.email,
            password: loginDetails.password,
            loginStatus: true,
            username : uName,
        })
        navigate('/')
    }

    const addDetails = (e) => {
        setLetters(e.target.value.length);
        let value = e.target.value
        let name = e.target.name
        setLoginDetails && setLoginDetails({
            ...loginDetails,
            [name] : value 
        })
    }
   
    useEffect(() => {
        letters > 0 ? setCheck(true) : setCheck(false);
    }, [letters])

    const passVisibility2 = () => {
        visible2 ? setVisible2(false) : setVisible2(true);
    }

    useEffect(() => {
        let name = loginDetails.email.split('@')
        setUName(name[0])
        // console.log(loginDetails)
    }, [loginDetails])

    // useEffect(() => {
    //     console.log(globalData)
    // },[globalData])

    return (
        <div className='h-[86vh] '>
            <div className=' mx-auto flex max-h-[80vh] flex-col bg-gray-900 mt-12 text-xs justify-center items-center rounded-xl max-w-sm sm:text-sm md:text-base md:justify-start p-4 gap-3'>
                <h1 className={!check ? 'text-4xl font-mono animate-bounce text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400' : 'text-4xl font-mono animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400'}>Sign in</h1>
                <form className='flex gap-3 flex-col w-[90%]' onSubmit = {handleSubmit}>
                    <label htmlFor='email' className='space-y-1'> Your Email<br></br>
                        <input className='bg-transparent border border-slate-800 p-2 rounded-sm w-full' id='email' name='email' type='email' placeholder='Enter your Email' onChange={(e) => addDetails(e)}  required></input>
                    </label>
                    <label className='relative space-y-1'>
                        Your Password<br></br>
                            <input minLength='8' className='rounded-sm bg-transparent border p-2 border-slate-800 w-full' type={visible2 ? 'text' : 'password'} placeholder='Enter Your Password' name='password' onChange = {(e) => addDetails(e)} required />
                            <img className='w-4 absolute top-6 sm:top-8 md:top-9 my-auto right-2 cursor-pointer animate-pulse' src={visible2 ? eyeslash : eye} onClick={() => passVisibility2()} />
                        </label>
                    <label>
                        <button className='bg-gray-800 p-2 rounded-sm w-full text-sky-500 cursor-pointer hover:scale-110 duration-500 ease-out hover:shadow-sm hover:shadow-sky-800 text-center' type='submit'>Submit</button>
                    </label>
                </form>
                <div className=' gap-2 flex flex-col w-[90%] items-center'>
                    {/* <div className='text-[0.8rem] animate-pulse flex items-center gap-1 justify-center text-center'><div className='h-[0.1rem] bg-white w-11'></div>New to Market Square<div className='h-[0.1rem] bg-white w-10'></div></div>
                    <Link className='bg-gray-800 p-2 rounded-sm text-center text-sky-500 hover:text-sky-400 w-full hover:scale-110 duration-500 ease-out' to='/signup'>Create your account</Link> */}
                    <img src={about1} className='w-[90vw] -top-[16rem] -right-[23rem] max-w-[20rem] animate-levitate lg:max-w-[24rem]' />
                </div>
                {/* <img src={about1} className='w-[90vw] top-[20rem] md:hidden lg:block animate-levitate' /> */}
            </div>
        </div>
    )
}
export default Login;