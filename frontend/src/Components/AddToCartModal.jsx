import React, { useState } from 'react';
import { useCart } from 'Context/CartContext'
import chart from 'assets/imges/sizeChart.png'
import { FaTimes, FaMinus, FaPlus } from 'react-icons/fa'

const AddToCartModal = () => {
    const { itemData, isModalOpen, closeModal } = useCart()
    const [isActive, setActive] = useState(null)
    const [quantity, setQuantity] = useState(1)

    if (!isModalOpen || !itemData) {
        return null;
    }
    
    const handleDecrement = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    }

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    }

    return (
        <>
            <div style={{visibility: `${isModalOpen ? 'visible' : 'hidden'}`}} className="modal-overlay d-flex justify-content-center align-items-center  w-100 h-100 position-fixed opacity-100" >
                <div style={{visibility: `${isModalOpen ? 'visible' : 'hidden'}`}} className="modal-cust d-flex justify-content-center align-items-center flex-column rounded-2 bg-light  opacity-100">
                    <div className='position-relative w-100'>
                        <button className='position-absolute top-0 end-0 m-2 btn' style={{color: 'var(--blue)'}} onClick={() => {setActive(null); closeModal();}}><FaTimes size={24}/></button>
                    </div>
                    <div className='d-flex p-5 gap-3'>
                        <img src={itemData.product_img} alt={itemData.item_name} />
                        <div className='d-flex flex-column justify-content-start gap-0 align-items-start'>
                            <p className='text-uppercase fw-bold fs-4 m-0'>{itemData.item}</p>
                            <p className='fw-bold fs-5 m-0'>P {itemData.unit_price}.00</p>
                            <button className='btn btn-outline-secondary btn-sm px-3 py-1 mt-5' data-bs-toggle="modal" data-bs-target="#exampleModal">Size Guide</button>
                            <div>
                                <p className='text-uppercase fw-medium fs-6 p-0 m-0 mt-5'>size</p>
                                <ul className='list-group list-group-horizontal'>
                                    <li style={{backgroundColor: `${isActive === 's' ? 'var(--dark-blue)' : ''}`}} 
                                        className={`${isActive === 's' ? 'text-light' : ''} list-group-item list-group-item-action text-decoration-none`} 
                                        onClick={() => (setActive('s'))}>
                                        S
                                    </li>
                                    <li style={{backgroundColor: `${isActive === 'm' ? 'var(--dark-blue)' : ''}`}} 
                                        className={`${isActive === 'm' ? 'text-light' : ''} list-group-item list-group-item-action text-decoration-none`} 
                                        onClick={() => (setActive('m'))}>
                                        M
                                    </li>
                                    <li style={{backgroundColor: `${isActive === 'l' ? 'var(--dark-blue)' : ''}`}} 
                                        className={`${isActive === 'l' ? 'text-light' : ''} list-group-item list-group-item-action text-decoration-none`} 
                                        onClick={() => (setActive('l'))}>
                                        L
                                    </li>
                                    <li style={{backgroundColor: `${isActive === 'xl' ? 'var(--dark-blue)' : ''}`}} 
                                        className={`${isActive === 'xl' ? 'text-light' : ''} list-group-item list-group-item-action text-decoration-none`} 
                                        onClick={() => (setActive('xl'))}>
                                        XL
                                    </li>
                                    <li style={{backgroundColor: `${isActive === '2xl' ? 'var(--dark-blue)' : ''}`}} 
                                        className={`${isActive === '2xl' ? 'text-light' : ''} list-group-item list-group-item-action text-decoration-none`} 
                                        onClick={() => (setActive('2xl'))}>
                                        2XL
                                    </li>
                                    <li style={{backgroundColor: `${isActive === '3xl' ? 'var(--dark-blue)' : ''}`}} 
                                        className={`${isActive === '3xl' ? 'text-light' : ''} list-group-item list-group-item-action text-decoration-none`} 
                                        onClick={() => (setActive('3xl'))}>
                                        3XL
                                    </li>
                                </ul>
                            </div>
                            <div className='d-flex gap-2 align-items-end mt-5'>
                                <div className='d-flex flex-column w-50'>
                                    <p className='fw-medium text-uppercase fs-6 p-0 m-0'>Quantity</p>
                                    <div className='d-flex'>
                                        <ul className='list-group list-group-horizontal '>
                                            <li className='list-group-item list-group-item-action ac p-0 py-2 d-flex align-items-center justify-content-center' onClick={handleDecrement}><FaMinus style={{color: 'var(--blue)'}} size={12}/></li>
                                            <li className='list-group-item list-group-item-action p-0 d-flex justify-content-center align-items-center'>
                                                <input type='number' min='1' value={quantity} className='w-100 inpt text-end'/>
                                            </li>
                                            <li className='list-group-item list-group-item-action ac p-0 py-2 d-flex align-items-center justify-content-center' onClick={handleIncrement}><FaPlus style={{color: 'var(--blue)'}} size={12}/></li>
                                        </ul>
                                    </div>
                                </div>
                                <button className='py-2 px-4 cart-btn'> Add to Cart </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='exampleModal' className='modal fade' aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered z-3 position-absolute top-50 start-50 translate-middle">
                    <div className="modal-content" style={{width: '2500px'}}>
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex justify-content-center" >
                            <img src={chart}width={'700px'} alt={chart} />
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
};

export default AddToCartModal;
