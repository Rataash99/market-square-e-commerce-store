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

export const GlobalContext = createContext();

function App() {
  let initialObj = {
    cartArr: [],
    loginStatus: false,
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
