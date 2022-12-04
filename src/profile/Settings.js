import React from 'react'
import userimage from '../Images/user.png'
import lock from '../Images/lock.png'
import phone from '../Images/phone.png'
import mail from '../Images/mail.png'

const Settings = () => {
    return (
        <section className=' relative flex flex-col gap-2 items-start z-10 lg:items-center lg:justify-start before:bg-slate-800 before:w-full before:h-[20vh] before:content-[""] before:-z-10 before:absolute before:top-0 before:left-0 p-5'>
            <div className='pl-3 mt-20'>
                <div className='flex gap-4 items-center'>
                    <img className='w-12 bg-slate-500 rounded-md' src={userimage} />
                    <div className='flex flex-col '>
                        <h2 className='font-semibold whitespace-nowrap sm:text-lg'>display name</h2>
                        <h6 className='font-semibold whitespace-nowrap sm:text-lg'>Email address</h6>
                    </div>
                </div>
            </div>
            <div className='lower mt-28 space-y-6 pl-3'>
                <div className='space-y-2 flex justify-between gap-3 items-center'>
                    <div className='flex items-center gap-3'>
                        <img className='sm:w-9 md:w-10 w-8 inline bg-slate-500 rounded-md' src = {lock}/>
                        <div>
                            <h2>Password</h2>
                            <p className='text-xs sm:text-sm text-slate-400 '>A password keeps your account secure</p>
                        </div>
                    </div>
                    <button className='text-xs bg-slate-800 p-2 px-3 text-cyan-500 hover:text-cyan-400 rounded-md sm:text-sm lg:text-base'>change</button>
                </div>
                <div className='space-y-2 flex justify-between gap-3 items-center'>
                    <div className='flex items-center gap-3'>
                        <img className='sm:w-9 md:w-10 w-8 inline bg-slate-500 rounded-md' src = {phone}/>
                        <div>
                            <h2>Recovery phone nubmer</h2>
                            <p className='text-xs sm:text-sm text-slate-400 '>You can sign in, reset your password, or verify your identity with a recovery phone nubmer.</p>
                        </div>
                    </div>
                    <button className='text-xs bg-slate-800 p-2 text-cyan-500 hover:text-cyan-400 rounded-md lg:text-bas px-3 sm:text-base'>change</button>
                </div>
                <div className='space-y-2 flex justify-between gap-3 items-center'>
                    <div className='flex items-center gap-3'>
                        <img className='sm:w-9 md:w-10 p-1 w-8 inline bg-slate-500 rounded-md' src = {mail}/>
                        <div>
                            <h2>Recovery email address</h2>
                            <h5>email</h5>
                            <p className='text-xs sm:text-sm text-slate-400 '>With your recovery email You can sign in to your account, reset your password, or verify your identity.</p>
                        </div>
                    </div>
                    <button className='text-xs bg-slate-800 p-2 text-cyan-500 hover:text-cyan-400 rounded-md lg:text-bas px-3 sm:text-base'>change</button>
                </div>
            </div>
        </section>
    )
}

export default Settings