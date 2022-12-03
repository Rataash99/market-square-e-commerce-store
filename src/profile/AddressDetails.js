import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import edit from '../Images/edit.png';
import del from '../Images/del.png'
import add from '../Images/add.png';

const AddressDetails = () => {
    return (
        <div className='flex gap-2 flex-col sm:w-full '>

        <section className='bg-gray-800 rounded-md p-3 max-h-[20vh] align-middle space-y-4' >
            <div>
                <h1 className='font-bold tracking-widest text-base border-b inline rounded-lg pb-1 border-sky-400'>Guest</h1>
            </div>
            <div className='space-y-2'>
                <h2>address</h2>
                <h2>phone</h2>
            </div>
            <div className='flex gap-3 items-center'>
                <h6 className='my-auto text-cyan-300 cursor-pointer'><img className='w-6 inline' src = {edit}/>edit</h6>
                <h6 className='my-auto text-orange-500 cursor-pointer'><img className='w-6 inline' src = {del}/>delete</h6>
            </div>
        </section>
        <section className='bg-gray-800 rounded-md p-2 max-h-[20vh] align-middle space-y-3'>
            <div className='flex justify-center flex-col items-center py-9 cursor-pointer gap-2 opacity-30 hover:opacity-80'>
                <img className='w-12' src = {add}/>
                <h2>Add delivery Address</h2>
            </div>
        </section>
        </div>
    )
}

export default AddressDetails