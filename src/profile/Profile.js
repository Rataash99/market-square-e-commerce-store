import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profilepic from '../Images/profile.png';
import { GlobalContext } from '../App';
import Orders from './Orders';
import AddressDetails from './AddressDetails';
import happy from '../Images/happy.png'

const Profile = () => {
    const { globalData, setGlobalData } = useContext(GlobalContext);
    const [status, setStatus] = useState({
        ordersbar: false,
        addressbar: false
    })
    const check = (e) => {
        e.target.innerText === 'Orders' ?
            setStatus({
                ordersbar: true,
                addressbar: false
            })
            :
            setStatus({
                addressbar: true,
                ordersbar: false
            })
    }
    return (
        <div className='bg-gray-900 m-6 lg:m-12 lg:max-w-[70vw] lg:mx-auto rounded-md min-h-[50vh] max-h-[86vh] text-xs sm:text-sm md:text-base flex-col flex p-2 gap-2 sm:flex-row'>
            <section className='bg-gray-800 rounded-md p-2 max-h-[20vh] align-middle space-y-3 sm:w-2/5' >
                <div className='flex gap-4 items-center'>
                    <img src={profilepic} className='w-12 ' />
                    <div>
                        <h2 className='text-base font-bold tracking-widest sm:text-lg'>Guest</h2>
                        <Link to = '/profile/settings' className='text-sky-500 hover:text-sky-400 cursor-pointer'>Settings</Link>
                    </div>
                </div>
                <div className='mx-auto h-[0.05rem] opacity-20 w-[95%] bg-white'></div>
                <div className='flex flex-col gap-2'>
                    <Link className='pl-2 focus:text-sky-400 focus:animate-bounce cursor-pointer hover:scale-105 duration-500 ease-out hover:text-sky-400' onClick={check}>Orders</Link>
                    <div className='mx-auto h-[0.05rem] opacity-20 w-[95%] bg-white'></div>
                    <Link className='pl-2 focus:text-sky-400 focus:animate-bounce cursor-pointer hover:scale-105 duration-500 ease-out hover:text-sky-400' onClick={check}>Address</Link>
                </div>
            </section>
            {
                !status.ordersbar && !status.addressbar ?
                    <div className='my-auto sm:mx-auto'>
                        <h2 className='font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-center sm:text-lg text-base'>How has it been so far? <img className='w-6 inline sm:w-9 animate-bounce md:w-11 lg:w-12' src={happy} /></h2>
                    </div>
                    :
                    status.ordersbar ?
                        <Orders />
                        :
                        <AddressDetails />
            }
        </div>
    )
}
export default Profile;