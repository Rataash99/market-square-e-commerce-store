import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './common/Header';
import Home from './common/Home';
import Category from './common/Category';
import Footer from './common/Footer';
import NotFound from './common/NotFound';
import Cart from './Cart';
import Product from './Product';
import Checkout from './Checkout';
import Login from './Login';
import Signup from './Signup';
import Profile from './profile/Profile';
import Settings from './profile/Settings';
import AddressDetails from './profile/AddressDetails';
import Orders from './profile/Orders';
import AddAddress from './profile/AddAddress';
import Wishlist from './Wishlist';
import AllProducts from './AllProducts';
import About from './common/About';

export const GlobalContext = createContext();

function App() {
  let initialObj = {
    loginStatus: false,
    wishlist: [],
    cart: [],
    username : '',
    heartStatus : [],
    notfound: false,
    address: [],
  }
  const [globalData, setGlobalData] = useState(initialObj)
  
  return (
    <div className="relative text-white w-full min-h-[100vh] bg-gradient-to-tr from-black via-slate-900 to-black overflow-y-scroll">
      <BrowserRouter>
        <GlobalContext.Provider value={{ globalData, setGlobalData }}>

          <Header />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/category/:name' element={<Category />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products/:id' element={<Product />} />
            <Route path = '/checkout' element = {<Checkout />} />
            <Route path = '/login' element = {<Login />} />
            <Route path = '/signup' element = {<Signup />} />
            <Route path = '/profile' element = {<Profile />} />
            <Route path = '/profile/settings' element = {<Settings />} />
            <Route path = '/addressdetails' element = {<AddressDetails />} />
            <Route path = 'orders' element = {<Orders />} />
            <Route path = 'addadderss' element = {<AddAddress />} />
            <Route path = '/wishlist' element = {<Wishlist />} />
            <Route path = '/allproducts' element = {<AllProducts />} />
            <Route path = '/about' element = {<About />} />

            <Route path='/' element={<Home />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
          { !globalData.notfound && <hr className='mt-12 border border-sky-800 opacity-60'></hr>}
         { !globalData.notfound && <Footer />}
        </GlobalContext.Provider>

      </BrowserRouter>
    </div>
  );
}

export default App;
