import React from 'react'
import tick from '../Images/check.png';

const Thanks = (props) => {
    const {check, setCheck} = props.check;
    return (
        <div className=' absolute backdrop-blur-md w-full h-[100vh]  mx-auto top-0 left-0 flex justify-center items-center'>
            <div className='relative bg-gradient-to-tr shadow-lg shadow-sky-800 from-black via-slate-900 to-black  w-[90vw] max-w-sm sm:max-w-md sm:h-[25vh] md:h-[30vh] h-[25vh] flex rounded-md '>
                <div className='absolute -top-10 w-full flex justify-center'>
                    <img className='animate-bounce w-20 sm:w-24 lg:w-28' src={tick} />
                </div>
                <div className='my-8 flex gap-4 flex-col mx-auto w-full justify-center items-center sm:px-5'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl text-center font-bold text-sky-500'>Thank You!</h2>
                    <p className='text-center text-sm sm:text-base md:text-lg text-slate-300'>Your details have been successfully submitted. Thanks!</p>
                    <button className='w-[80%] max-w-[15rem] rounded-md hover:scale-105 text-sky-500 duration-200 ease-in-out hover:shadow-md hover:shadow-sky-800 bg-slate-800 p-2' onClick={() => setCheck(false)}>Ok</button>
                </div>
            </div>
        </div>
    )
}

export default Thanks;