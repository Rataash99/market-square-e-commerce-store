import React, {useState, useEffect, useContext} from 'react'
import { GlobalContext } from '../App'
import close from '../Images/close.png'
import repair from '../Images/repair.png';

const EditAddress = (prop) => {
    const { globalData, setGlobalData } = useContext(GlobalContext);
    const { showModal, setShowModal } = prop.showModal;
    const [num, setNum] = useState('')
    const [Address, setAddress] = useState({
        name: '',
        phone: '',
        houseNumber: '',
        apt: '',
        pincode: '',
        city: '',
        country: '',
    });

    const handleNumChange = (event) => {
        let limit = 6;
        setNum(event.target.value.slice(0, limit));
    }

    const addDetails = (e) => {
        let name = e.target.name
        let value = e.target.value
        setAddress && setAddress({
            ...Address,
            [name]: [value]
        })
    }

    const removeAddress = (prod) => {
        let tempArr = globalData.address.filter((item) => {
            return item.id !== prod.id
        })
        setGlobalData({
            ...globalData,
            address: [...tempArr]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setGlobalData({
            ...globalData,
            address : [...globalData.address, Address]
        })
        setShowModal(false)
    }
    useEffect(() => {
        console.log(Address)
    }, [Address])
    useEffect(() => {
        console.log(globalData)

    },[globalData])
    return (
        <div className='absolute w-full mt-10 h-[100vh] backdrop-blur-sm top-0 left-0 flex items-center justify-center mx-auto'>
            <section className='bg-gradient-to-tr from-black via-slate-900 to-black flex gap-2 md:gap-3 lg:gap-4 flex-col h-auto rounded-b-2xl pb-10 rounded-md shadow-md shadow-sky-800 p-2'>
                <div className='flex  justify-between p-2 gap-10'>
                    <div className='hidden sm:block'></div>
                    <h1 className='text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-400 '>Edit Address</h1>
                    <img className='w-7 sm:w-8 md:w-9 lg:w-10 animate-wiggle cursor-pointer' src={close} onClick={() => setShowModal(false)} />
                </div>
                <form className='space-y-3 md:space-y-4 p-2 border-slate-800 border' onSubmit={handleSubmit}>
                    <div className='flex gap-3 lg:gap-4 flex-col sm:flex-row'>

                        <label>
                            <input className='bg-transparent border p-2 border-slate-800 w-full ' placeholder='name' name = 'name' value={Address && Address.name} onChange={(e) => addDetails(e)} type='text' required />
                        </label>

                        <label>
                            <input className='bg-transparent border p-2 border-slate-800 w-full' placeholder='Phone Number' name='phone' value={Address && Address.phone} onChange={(e) => addDetails(e)} maxLength='10' type='tel' required />
                        </label>
                    </div>
                    <div className='flex flex-col w-full gap-3 lg:gap-4'>
                        <label className=''>
                            <input className='bg-transparent border border-slate-800 w-full p-2' placeholder='House number, Street Address' name='houseNumber' value={Address && Address.houseNumber} onChange={(e) => addDetails(e)} type='text' required />
                        </label>
                        <label>
                            <input className='bg-transparent border p-2 border-slate-800 w-full' type='text' placeholder='Apt, Suite, Building (Optional)' name='apt' value={Address && Address.apt} onChange={(e) => addDetails(e)} />
                        </label>
                        <label>
                            <input className='bg-transparent border p-2 border-slate-800 w-full' type='number' placeholder='6-digit PIN code' name='pincode' value={num} onChange={(e) => handleNumChange(e)} required />
                        </label>
                    </div>
                    <div className='flex gap-3 lg:gap-4 flex-col sm:flex-row'>
                        <label>
                            <input className='bg-transparent border p-2 border-slate-800 w-full' type='text' placeholder='City' name='city' value={Address && Address.city} onChange={(e) => addDetails(e)} required />
                        </label>
                        <label>
                            <input className='bg-transparent border p-2 border-slate-800 w-full' type='text' placeholder='State' name='country' value={Address && Address.country} onChange={(e) => addDetails(e)} required />
                        </label>
                    </div>
                    <button type='submit' className='w-full p-2 text-sky-500 hover:scale-105 sm:hover:scale-105 hover:shadow-md hover:shadow-sky-800 duration-200 ease-out bg-slate-800 rounded-sm font-semibold text-sm' onClick={removeAddress}>Save</button>
                </form>
            <img className='w-52 sm:w-56 md:w-60 lg:w-64 xl:w-72 self-center animate-levitate' src = {repair} />
            </section>
        </div>
    )
}

export default EditAddress