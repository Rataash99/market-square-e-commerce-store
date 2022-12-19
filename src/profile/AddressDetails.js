import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import edit from '../Images/edit.png';
import del from '../Images/del.png'
import add from '../Images/add.png';
import { GlobalContext } from '../App';
import AddAddress from './AddAddress'
import EditAddress from './EditAddress';
import Thanks from '../common/Thanks';


const AddressDetails = () => {
    const { globalData, setGlobalData } = useContext(GlobalContext);
    const [status, setStatus] = useState(false);
    const [check, setCheck] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const checktick = {check, setCheck};
    const statusProp = { status, setStatus };
    const modalProp = {showModal, setShowModal}

    const deleteAddress = (address) => {
        let tempArr = globalData.address.filter((item) => {
            return item.phone != address.phone
        })
        setGlobalData({
            ...globalData,
            address : [...tempArr]
        })
    }
    useEffect(() => {
        console.log('checking status')
    }, [status])
    return (
        <div className='flex flex-col sm:w-full transition-all duration-300 ease-out' >
            <div className={globalData.address.length > 0 ?'flex gap-2 flex-col sm:w-full transition-all duration-300 ease-out  overflow-scroll max-h-[50vh] sm:max-h-[100vh] mb-2' : 'flex gap-2 flex-col sm:w-full transition-all duration-300 ease-out  overflow-scroll max-h-[50vh] sm:max-h-[100vh]'}>

            {globalData.address.length > 0 &&
                globalData.address.map((item, index) => (
                    <section key = {index} className='bg-gray-800 rounded-md p-3 max-h-[20vh] align-middle space-y-4 hover:shadow-md hover:shadow-sky-800' >
                        <div>
                            <h1 className='font-bold tracking-widest text-base border-b inline rounded-lg pb-1 border-sky-400 lg:text-xl text-neutral-300'>{item.name}</h1>
                        </div>
                        <div className='space-y-2 text-gray-300'>
                            <h2>{item.houseNumber}</h2>
                            <h2>{item.phone}</h2>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <h6 className='my-auto text-sky-400 cursor-pointer hover:scale-110 duration-200 ease-out' onClick = {() => setShowModal(true)}><img className='w-6 inline' src={edit}/>edit</h6>
                            <h6 className='my-auto text-orange-500 cursor-pointer hover:scale-110 duration-200 ease-out' onClick = {() => deleteAddress(item)}><img className='w-6 inline' src={del} />delete</h6>
                        </div>
                    </section>
                ))}
                </div>
            <section className='bg-gray-800 rounded-md p-2 max-h-[20vh] align-middle space-y-3 duration-300 ease-out transition-all' onClick={() => setStatus(true)}>
                <div className='flex justify-center flex-col items-center py-9 cursor-pointer gap-2 opacity-30 hover:opacity-90 hover:scale-110 duration-200 ease-out hover:text-slate-300 sm:min-h-[12rem] 2xl:min-h-[13rem]'>
                    <img className='w-12' src={add} />
                    <h2 className=''>Add delivery Address</h2>
                </div>
            </section>
            {check && <Thanks check = {checktick} />}
            {showModal && <EditAddress showModal = {modalProp} />}
            {status && <AddAddress check = {checktick} status={statusProp} />}
        </div>
    )
}

export default AddressDetails