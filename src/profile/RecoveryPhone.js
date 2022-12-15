import React, { useState, useEffect, useContext } from 'react'
import pswd from '../Images/pswd.png'
import { GlobalContext } from '../App'
import close from '../Images/close.png';
import recovery from '../Images/recovery.png';

const RecoveryPhone = (props) => {

    const {check, setCheck} = props.check;
    const {recoveryPh, setRecoveryPh} = props.recoveryPhone
    const { globalData, setGlobalData } = useContext(GlobalContext);
    const [recPhone, setRecPhone] = useState('');

    const addDetails = (e) => {
        setRecPhone(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setGlobalData({
            ...globalData,
            recoveryPhone : recPhone
        })
        setRecoveryPh(false)
    }
    useEffect(() => {
        console.log(globalData)
    },[globalData]);
  return (
    <div className='z-10 absolute w-full h-[90vh] backdrop-blur-sm top-0 left-0 flex items-center justify-center mx-auto'>
    <section className='bg-gradient-to-tr from-black via-slate-900 to-black flex gap-2 md:gap-3 lg:gap-4 flex-col h-auto pb-10 rounded-md shadow-md shadow-sky-800 p-2 w-[80vw] sm:max-w-lg'>
        <div className='flex  justify-between p-2 gap-10'>
            <div className='hidden sm:block'></div>
            <h1 className='text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-400 text-center'>Recovery Phone Number</h1>
            <img className='w-7 sm:w-8 md:w-9 my-auto lg:w-10 animate-wiggle cursor-pointer' src={close} onClick={() => setRecoveryPh(false)} />
        </div>
        <form className='space-y-3 md:space-y-4 p-3 rounded-sm border-slate-800 border' onSubmit={handleSubmit}>
            <div className='flex flex-col w-full gap-3 lg:gap-4'>
            <label className='relative'>
                    <input minLength = '8' className='rounded-sm bg-transparent border p-2 border-slate-800 w-full' type= 'tel' maxLength='10' placeholder='Phone Number' name='pincode' required onChange={(e) => addDetails(e)}/>
                </label>
            </div>
            <button type='submit' className='w-full p-2 text-sky-500 hover:scale-105 sm:hover:scale-105 hover:shadow-md hover:shadow-sky-800 duration-200 ease-out bg-slate-800 rounded-sm font-semibold text-sm sm:text-base md:text-lg' onClick={() => setCheck(true)}>Save</button>
        </form>
        <img className='w-52 sm:w-56 md:w-60 lg:w-64 xl:w-72 self-center animate-levitate' src={recovery} />
    </section>
</div>  )
}

export default RecoveryPhone