import React from 'react'
import { BsPlus } from 'react-icons/bs'
import Skeleton from "react-loading-skeleton"

const SliderCard = ({data, addToCart}) => {
    const { image, image2, item, price } = data

    return (
        <div className='card itm-card border-light my-2 rounded-2 mx-1' style={{width: '350px'}}>
            {image === '' ? 
                <Skeleton style={{height: '390px'}}/>
            : 
                <div className='position-relative bg-pic'>
                    <img src={image2} height={'390px'} alt={image2} className='card-img-top img-back d-inline-block '/>
                    <img src={image} height={'390px'} alt={image} className='card-img-top img-front d-inline-block '/>
                </div>
            }        
            <div className='card-body d-flex gap-5'>
                <div className='d-flex w-50 flex-column'>
                    <span className='fs-6 text-uppercase'>{item}</span>
                    <span className='fs-6 text-uppercase'>P {price}.00</span>
                </div>
                <div className='d-flex w-50 align-items-center justify-content-end'>
                    <button type='button' className='px4 cart-btn py-2 w-100' onClick={() => addToCart(data)}><BsPlus size={24}/> Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default SliderCard