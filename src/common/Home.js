import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import heart from '../Images/heart.png';
import redHeart from '../Images/redheart.png'
const Home = () => {
    const [products, setProducts] = useState([]);
    const [active, setActive] = useState(false);

    const apiCall = async () => {
        let response = await fetch(`https://fakestoreapi.com/products`);
        let result = await response.json();
        console.log(result)
        setProducts(result);
    }
    useEffect(() => {
        apiCall()
    }, [])
    const check = () => {
        active ? setActive(false) : setActive(true)
    }
    return (
        <div className='w-full h-full grid grid-cols-2 gap-6 text-xs overflow-x-hidden p-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:text-base '>
            {
                products && products.map((item, index) => (
                    <Link to= {`/products/${item.id}`} key = {index}>
                    <div className="card flex flex-col justify-between rounded-lg p-3 shadow-lg shadow-slate-800 hover:shadow-l bg-gradient-to-bl from-black via-slate-900 to-black duration-500 hover:scale-105 ease-out h-[18rem] sm:h-[28rem] lg:h-[32rem] ">
                        <img className='shadow-lg w-[7rem] self-center sm:w-[12rem] lg:w-[15rem] text-center rounded-lg opacity-70 max-h-96' src={item.image} />
                        <div className='flex gap-4 flex-col overflow-scroll'>
                            <p className='text-[0.6rem] sm:text-sm'>{item.title}</p>
                            <div className='flex justify-between'>
                                <h3 className='font-medium'>$ {item.price}</h3>
                                <img className='w-4 hover:bg-clip-text hover: cursor-pointer sm:w-5 my-auto' src={heart} alt='wishlist'/>
                            </div>
                        </div>
                    </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Home;