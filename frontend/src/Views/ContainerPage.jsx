import React from 'react'
import { HeroPage, CollegeShop, MyCart } from 'Pages/Site'
import { Navbar } from 'Components'
import { CartProvider } from 'Context/CartContext';
import { Routes, Route } from 'react-router-dom';

const ContainerPage = () => {
    return (
            <CartProvider> 
                <Navbar />
                <Routes>
                    <Route path='/' element={<HeroPage />} />
                    <Route path='college-shop' element={<CollegeShop />} />
                    <Route path='cart' element={<MyCart />} />
                </Routes>
            </CartProvider>
    );
};
export default ContainerPage