import React, { useState, useEffect, useContext } from 'react'
import pswd from '../Images/pswd.png'
import { GlobalContext } from '../App'
import close from '../Images/close.png';
import eyeslash from '../Images/eyeslash.png'
import eye from '../Images/eye.png';
import Alert from '../common/Alert';

const ChangePwd = (props) => {
    const { passCheck, setPassCheck } = props.pass
    const { check, setCheck } = props.check;
    const { globalData, setGlobalData } = useContext(GlobalContext);
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [newPswd, setNewPswd] = useState('')

    const passVisibility = () => {
        visible ? setVisible(false) : setVisible(true);
    }
    
    const passVisibility2 = () => {
        visible2 ? setVisible2(false) : setVisible2(true);
    }

    const addDetails = (e) => {
        setNewPswd(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setGlobalData({
            ...globalData,
            password: newPswd
        })
        setPassCheck(false)
    }

    useEffect(() => {
        setTimeout(() => {
            setCheck(false)
        }, 5000)
    }, [check])

    useEffect(() => {
        console.log(globalData)
    }, [globalData])

    const prevPassCheck = (e) => {
        let pass = globalData.password;
        pass !== e.target.value && alert('type correct password')
    }
    return (
        <div className='z-10 absolute w-full h-[100vh] backdrop-blur-sm top-0 left-0 flex items-center justify-center mx-auto'>
            <section className='bg-gradient-to-tr from-black via-slate-900 to-black flex gap-2 md:gap-3 lg:gap-4 flex-col h-auto pb-10 rounded-md shadow-md shadow-sky-800 p-2 w-[80vw] sm:min-w-[20vw] sm:max-w-sm'>
                <div className='flex  justify-between p-2 gap-10'>
                    <div className='hidden sm:block'></div>
                    <h1 className='text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-400 '>Change Password</h1>
                    <img className='w-7 sm:w-8 md:w-9 my-auto lg:w-10 animate-wiggle cursor-pointer' src={close} onClick={() => setPassCheck(false)} />
                </div>
                <form className='space-y-3 md:space-y-4 p-3 rounded-sm border-slate-800 border' onSubmit={handleSubmit}>

                    <div className='flex flex-col w-full gap-3 lg:gap-4'>
                        <label className='relative'>
                            <input minLength='8' className='rounded-sm bg-transparent border p-2 border-slate-800 w-full' type={visible2 ? 'text' : 'password'} placeholder='Previous Password' name='pincode' onBlur = {(e) => prevPassCheck(e)} required />
                            <img className='w-4 absolute top-3 my-auto right-2 cursor-pointer animate-pulse' src={visible2 ? eyeslash : eye} onClick={() => passVisibility2()} />
                        </label>
                        <label className='relative'>
                            <input minLength='8' className='rounded-sm bg-transparent border p-2 border-slate-800 w-full' value={newPswd} type={visible ? 'text' : 'password'} placeholder='New Password' name='pincode' required onChange={(e) => addDetails(e)}/>
                            <img className='w-4 absolute top-3 my-auto right-2 cursor-pointer animate-pulse' src={visible ? eyeslash : eye} onClick={() => passVisibility()} />
                        </label>
                    </div>
                    <button type='submit' className='w-full p-2 text-sky-500 hover:scale-105 sm:hover:scale-105 hover:shadow-md hover:shadow-sky-800 duration-200 ease-out bg-slate-800 rounded-sm font-semibold text-sm sm:text-base md:text-lg' onClick={() => setCheck(true)}>Save</button>
                </form>
                <img className='w-52 sm:w-56 md:w-60 lg:w-64 xl:w-72 self-center animate-levitate' src={pswd} />
            </section>
        </div>
    )
}

export default ChangePwd;