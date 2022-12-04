import React, { createContext, useState } from 'react';
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


export const GlobalContext = createContext();

function App() {
  let initialObj = {
    cartArr: [],
    loginStatus: false,
    wishlist: [],
    cart: []
  }
  const [globalData, setGlobalData] = useState(initialObj)
  return (
    <div className="text-white w-full h-[100vh] bg-gradient-to-tr from-black via-slate-900 to-black overflow-y-scroll">
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
            <Route path = '/settings' element = {<Settings />} />
            <Route path = '/addressdetails' element = {<AddressDetails />} />
            <Route path = 'orders' element = {<Orders />} />
            <Route path = 'addadderss' element = {<AddAddress />} />

            <Route path='/' element={<Home />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
          {/* <Footer /> */}
        </GlobalContext.Provider>

      </BrowserRouter>
    </div>
  );
}

export default App;
