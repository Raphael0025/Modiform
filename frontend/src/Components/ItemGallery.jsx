import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Skeleton from 'react-loading-skeleton';
import { BsPlus } from 'react-icons/bs';

const ItemGallery = ({ items, title, subCategory }) => {
    const slides = 2;

    const settings = {
        dots: false,
        speed: 500,
        arrows: false,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: slides || 2,
        variableWidth: true,
    };

    // Filter items based on subCategory
    const filteredItems = items && Array.isArray(items) ? items.filter(item => item.subCategory === subCategory) : []

    return (
        <>
        <div className='list-wrapper mb-5'>
            <h4 className='ms-5 ps-3'>{title}</h4>
            <div className={`container p-1`}>
            {filteredItems.length !== 0 ? (
                <Slider {...settings}>
                {filteredItems.map((item) => (
                    <div className={`card itm-card border-light my-2 rounded-2 mx-1`} style={{ width: '350px' }} key={item._id}>
                        {item.product_img === '' ? (
                            <Skeleton style={{ height: '390px' }} />
                        ) : (
                            <div className='position-relative bg-pic'>
                                <img src={item.product_img} height={'390px'} alt={item.product_img} className='card-img-top img-front d-inline-block' />
                            </div>
                        )}
                        <div className='card-body d-flex justify-content-between gap-3'>
                            <div className='d-flex w-50 flex-column'>
                                <span className='fs-6 text-uppercase'>{item.item_name}</span>
                                <span className='fs-6 text-uppercase'>P {item.unit_price}.00</span>
                            </div>
                            <div className='d-flex w-50 align-items-center justify-content-end'>
                                <button type='button' className='px4 cart-btn py-2 w-100' >
                                    <BsPlus size={24} /> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                </Slider>
            ) : (
                <h4>No Published Products for this Subcategory...</h4>
            )}
            </div>
        </div>
        </>
    );
};

export default ItemGallery;
