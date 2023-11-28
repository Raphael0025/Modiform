import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemData, setItemData] = useState(null);
    const [items, setItems] = useState({});

    const addToCart = (item) => {
        setCart([...cart, item]) // Add item to the cart
        setItemData(item) // Set the item data for the modal
        setItems(item)
        setIsModalOpen(true) // Open the modal
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, isModalOpen, closeModal, itemData, items  }}>
            {children}
        </CartContext.Provider>
    );
}