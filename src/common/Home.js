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
        <div className='w-full h-full grid grid-cols-2 gap-4 text-xs overflow-x-hidden p-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:text-base'>
            {
                products && products.map((item, index) => (
                    <Link to= {`/products/${item.id}`} key = {index}>
                    <div className="card flex flex-col justify-between gap-3 rounded-lg p-1 shadow-md hover:shadow-lg bg-slate-900 ">
                        <img className='shadow-lg w-full rounded-lg' src={item.image} />
                        <div className='flex gap-4 flex-col '>
                            <p className='text-[0.6rem] sm:text-base'>{item.title}</p>
                            <div className='flex justify-between'>
                                <h3 className='font-medium'>$ {item.price}</h3>
                                <img className='w-4 hover:bg-clip-text hover: cursor-pointer sm:w-5 ' src={heart} alt='wishlist'/>
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